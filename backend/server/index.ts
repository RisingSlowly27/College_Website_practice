import "dotenv/config";
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { handleDemo } from "./routes/demo";

// Paths to database files
const USERS_FILE_PATH = path.join(process.cwd(), "server", "users.json");
const PUBS_FILE_PATH = path.join(process.cwd(), "server", "publications-data.json");

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper: Read users from file
  const readUsers = () => {
    try {
      if (fs.existsSync(USERS_FILE_PATH)) {
        return JSON.parse(fs.readFileSync(USERS_FILE_PATH, "utf-8"));
      }
    } catch (err) {
      console.error("Error reading users file:", err);
    }
    return [];
  };

  // Helper: Write users to file
  const writeUsers = (users: any) => {
    try {
      fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2), "utf-8");
      return true;
    } catch (err) {
      console.error("Error writing users file:", err);
      return false;
    }
  };

  // Helper: Read publications from file
  const readPublications = () => {
    try {
      if (fs.existsSync(PUBS_FILE_PATH)) {
        return JSON.parse(fs.readFileSync(PUBS_FILE_PATH, "utf-8"));
      }
    } catch (err) {
      console.error("Error reading publications file:", err);
    }
    return [];
  };

  // Helper: Write publications to file
  const writePublications = (publications: any) => {
    try {
      fs.writeFileSync(PUBS_FILE_PATH, JSON.stringify(publications, null, 2), "utf-8");
      return true;
    } catch (err) {
      console.error("Error writing publications file:", err);
      return false;
    }
  };

  // API: Ping
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  // API: Demo
  app.get("/api/demo", handleDemo);

  // API: Auth - Login
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();
    
    const user = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Exclude password from response
    const { password: _, ...safeUser } = user;
    res.json({
      token: `session-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      user: safeUser
    });
  });

  // API: Auth - Update Profile Info
  app.put("/api/auth/profile", (req, res) => {
    const { email, name, designation, department, phone, research, image } = req.body;
    const users = readUsers();

    const userIndex = users.findIndex((u: any) => u.email.toLowerCase() === email.toLowerCase());
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update profile
    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      designation: designation || users[userIndex].designation,
      department: department || users[userIndex].department,
      phone: phone || users[userIndex].phone,
      research: research || users[userIndex].research,
      image: image || users[userIndex].image
    };

    writeUsers(users);

    const { password: _, ...safeUser } = users[userIndex];
    res.json({ user: safeUser, message: "Profile updated successfully" });
  });

  // API: Publications - Get List
  app.get("/api/publications", (_req, res) => {
    const publications = readPublications();
    res.json(publications);
  });

  // API: Publications - Add
  app.post("/api/publications", (req, res) => {
    const publications = readPublications();

    const newId = publications.length > 0 ? Math.max(...publications.map((p: any) => p.id)) + 1 : 1;
    const newPub = {
      ...req.body,
      id: newId,
      author_id: req.body.author_id ? parseInt(req.body.author_id) : 34,
      year: req.body.year ? parseInt(req.body.year) : new Date().getFullYear()
    };

    publications.push(newPub);
    writePublications(publications);

    res.status(201).json({ publication: newPub, message: "Publication added successfully" });
  });

  // API: Publications - Update
  app.put("/api/publications/:id", (req, res) => {
    const pubId = parseInt(req.params.id);
    const publications = readPublications();

    const pubIndex = publications.findIndex((p: any) => p.id === pubId);
    if (pubIndex === -1) {
      return res.status(404).json({ message: "Publication not found" });
    }

    publications[pubIndex] = {
      ...publications[pubIndex],
      ...req.body,
      id: pubId, // Ensure id is preserved
      author_id: req.body.author_id ? parseInt(req.body.author_id) : publications[pubIndex].author_id,
      year: req.body.year ? parseInt(req.body.year) : publications[pubIndex].year
    };

    writePublications(publications);

    res.json({ publication: publications[pubIndex], message: "Publication updated successfully" });
  });

  // API: Publications - Delete
  app.delete("/api/publications/:id", (req, res) => {
    const pubId = parseInt(req.params.id);
    const publications = readPublications();

    const filteredPubs = publications.filter((p: any) => p.id !== pubId);
    if (filteredPubs.length === publications.length) {
      return res.status(404).json({ message: "Publication not found" });
    }

    writePublications(filteredPubs);
    res.json({ message: "Publication deleted successfully" });
  });

  return app;
}
