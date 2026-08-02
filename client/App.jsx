import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FacultyMembers from "./pages/FacultyMembers";
import Publications from "./pages/Publications";
import Placeholder from "./pages/Placeholder";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { primaryNav, departmentNav } from "@/lib/nav-data";

const queryClient = new QueryClient();

const placeholderRoutes = new Map();
[...primaryNav, ...departmentNav].forEach((item) => {
  if (
    item.href !== "/" &&
    item.href !== "/faculty-members" &&
    item.href !== "/publication" &&
    item.href !== "/login" &&
    item.href !== "/dashboard"
  ) {
    placeholderRoutes.set(item.href, item.label);
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faculty-members" element={<FacultyMembers />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {Array.from(placeholderRoutes.entries()).map(([href, label]) => (
            <Route
              key={href}
              path={href}
              element={<Placeholder title={label} />}
            />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
