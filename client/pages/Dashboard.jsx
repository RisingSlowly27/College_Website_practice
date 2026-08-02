import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Edit3, Trash2, Globe, LogOut, UserCheck, User, Camera, Mail, Phone, BookOpen, UserMinus, PlusCircle, CheckCircle, XCircle } from "lucide-react";
import Layout from "@/components/site/Layout";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("publications");
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Forms state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [currentPubId, setCurrentPubId] = useState(null);
  const [pubForm, setPubForm] = useState({ title: "", type: "Journal Paper", authors: "", year: "", journal: "", url: "", author_id: "" });

  const [profileForm, setProfileForm] = useState({ name: "", designation: "", department: "", phone: "", research: "" });
  const [profileMessage, setProfileMessage] = useState("");

  // Simulated pending faculty registrations
  const [pendingFaculty, setPendingFaculty] = useState([
    { id: 101, name: "Dr. Somnath Ghosh", email: "somnath@cs.iiests.ac.in", designation: "Assistant Professor", dept: "Computer Science and Technology" },
    { id: 102, name: "Dr. Paramita Roy", email: "paramita@cs.iiests.ac.in", designation: "Assistant Professor", dept: "Information Technology" }
  ]);

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const sessionUser = localStorage.getItem("user");
    if (!token || !sessionUser) {
      navigate("/login");
    } else {
      const parsedUser = JSON.parse(sessionUser);
      setUser(parsedUser);
      setProfileForm({
        name: parsedUser.name,
        designation: parsedUser.designation,
        department: parsedUser.department,
        phone: parsedUser.phone,
        research: parsedUser.research || ""
      });
      fetchPublications();
    }
  }, [navigate]);

  // Fetch publications
  const fetchPublications = async () => {
    try {
      const res = await fetch("/api/publications");
      if (res.ok) {
        const data = await res.json();
        setPublications(data);
      }
    } catch (err) {
      console.error("Error fetching publications:", err);
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new CustomEvent("auth-change"));
    navigate("/");
  };

  // Profile Save handler
  const handleProfileSave = async (e) => {
    e.preventDefault();
    setProfileMessage("");
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          ...profileForm
        })
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        setProfileMessage("Profile updated successfully!");
        setTimeout(() => setProfileMessage(""), 4000);
      } else {
        setProfileMessage(data.message || "Failed to update profile");
      }
    } catch (err) {
      setProfileMessage("Connection error while updating profile.");
    }
  };

  // Modal open helpers
  const openAddModal = () => {
    setModalMode("add");
    setPubForm({
      title: "",
      type: "Journal Paper",
      authors: user.name, // Auto-populate current user's name
      year: new Date().getFullYear().toString(),
      journal: "",
      url: "https://www.iiests.ac.in/",
      author_id: user.id ? user.id.toString() : "34"
    });
    setShowModal(true);
  };

  const openEditModal = (pub) => {
    setModalMode("edit");
    setCurrentPubId(pub.id);
    setPubForm({
      title: pub.title,
      type: pub.type,
      authors: pub.authors,
      year: pub.year.toString(),
      journal: pub.journal,
      url: pub.url,
      author_id: pub.author_id.toString()
    });
    setShowModal(true);
  };

  // Add or Edit Publication save handler
  const handlePubSave = async (e) => {
    e.preventDefault();
    try {
      const url = modalMode === "add" ? "/api/publications" : `/api/publications/${currentPubId}`;
      const method = modalMode === "add" ? "POST" : "PUT";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pubForm)
      });

      if (res.ok) {
        setShowModal(false);
        fetchPublications();
      }
    } catch (err) {
      console.error("Error saving publication:", err);
    }
  };

  // Delete Publication handler
  const handlePubDelete = async (pubId) => {
    if (!window.confirm("Are you sure you want to delete this publication?")) return;
    try {
      const res = await fetch(`/api/publications/${pubId}`, { method: "DELETE" });
      if (res.ok) {
        fetchPublications();
      }
    } catch (err) {
      console.error("Error deleting publication:", err);
    }
  };

  // Approve simulated faculty
  const approveFaculty = (id) => {
    alert("Faculty approved successfully!");
    setPendingFaculty(prev => prev.filter(f => f.id !== id));
  };

  // Reject simulated faculty
  const rejectFaculty = (id) => {
    if (window.confirm("Are you sure you want to reject this request?")) {
      setPendingFaculty(prev => prev.filter(f => f.id !== id));
    }
  };

  if (!user) return null;

  const isAdmin = user.role === "admin";
  const userPublications = isAdmin 
    ? publications 
    : publications.filter(p => p.author_id.toString() === user.id?.toString());

  return (
    <Layout>
      <div className="mx-auto max-w-[1720px] py-10 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          
          {/* Dashboard Left Pane (Sidebar Profile Card & Nav) */}
          <aside className="sticky top-8 flex flex-col gap-6">
            <div className="rounded-[36px] bg-cream p-8 text-center border border-cream-dark/30 shadow-sm relative overflow-hidden">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gold" />
              
              {/* Leaf Curved Photo Frame */}
              <div className="relative mx-auto aspect-square w-[140px] pt-[8%] mb-6">
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-tl-[48%] rounded-br-[62%] bg-gradient-to-b from-brand to-neutral-900 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]" />
                <img
                  src={user.image || "/placeholder.svg"}
                  alt={user.name}
                  className="absolute inset-0 h-full w-full rounded-tl-[48%] rounded-br-[62%] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]"
                />
              </div>

              <h3 className="text-xl font-bold text-brand leading-tight">{user.name}</h3>
              <p className="mt-1 text-xs font-bold text-brand-gold uppercase tracking-wider">{user.designation}</p>
              <p className="mt-2 text-xs text-black/50 leading-normal">{user.department}</p>
            </div>

            {/* Panel Tabs Navigation */}
            <div className="rounded-[28px] bg-white border border-cream-dark/30 p-4 shadow-sm flex flex-col gap-1">
              <button
                onClick={() => setActiveTab("publications")}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-full text-sm font-semibold text-left transition ${
                  activeTab === "publications"
                    ? "bg-brand text-white shadow-sm"
                    : "text-black/75 hover:bg-cream/20"
                }`}
              >
                <BookOpen size={16} />
                Manage Publications
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-full text-sm font-semibold text-left transition ${
                  activeTab === "profile"
                    ? "bg-brand text-white shadow-sm"
                    : "text-black/75 hover:bg-cream/20"
                }`}
              >
                <User size={16} />
                Edit Profile Info
              </button>
              {isAdmin && (
                <button
                  onClick={() => setActiveTab("moderation")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-full text-sm font-semibold text-left transition ${
                    activeTab === "moderation"
                      ? "bg-brand text-white shadow-sm"
                      : "text-black/75 hover:bg-cream/20"
                  }`}
                >
                  <UserCheck size={16} />
                  Faculty Requests ({pendingFaculty.length})
                </button>
              )}
              <hr className="my-3 border-cream-dark/35" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-full text-sm font-semibold text-left text-brand transition hover:bg-brand/10"
              >
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          </aside>

          {/* Dashboard Main Content Pane */}
          <main className="rounded-[36px] bg-white border border-cream-dark/35 shadow-sm p-8 min-h-[600px] flex flex-col justify-between">
            
            {/* Manage Publications Tab */}
            {activeTab === "publications" && (
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-cream-dark/25 pb-5 mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-brand flex items-center gap-2">
                      Publications Manager
                      <span className="bg-brand-gold/15 text-brand-gold text-xs px-2.5 py-0.5 rounded-full font-bold">
                        {userPublications.length} papers
                      </span>
                    </h2>
                    <p className="text-xs text-black/50 mt-1">
                      {isAdmin ? "Admin overview showing all publications" : "Add, update, or remove your academic papers"}
                    </p>
                  </div>
                  <button
                    onClick={openAddModal}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-bold text-white transition hover:bg-brand-dark shadow-sm"
                  >
                    <Plus size={16} /> Add Publication
                  </button>
                </div>

                {loading ? (
                  <div className="py-20 text-center text-black/45">Loading publications...</div>
                ) : userPublications.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-cream-dark/35 text-black/50 font-bold uppercase tracking-wider">
                          <th className="py-3 px-4">Publication Details</th>
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPublications.map((pub) => (
                          <tr key={pub.id} className="border-b border-cream-dark/20 hover:bg-cream-light/5 transition duration-300">
                            <td className="py-4 px-4 max-w-[450px]">
                              <p className="font-bold text-brand text-sm leading-snug">{pub.title}</p>
                              <p className="text-black/75 mt-1 font-medium">Authors: {pub.authors}</p>
                              <p className="text-black/50 mt-0.5 font-light">{pub.journal} &bull; {pub.year}</p>
                            </td>
                            <td className="py-4 px-4">
                              <span className="inline-block rounded-md bg-brand-gold/10 border border-brand-gold/25 px-2 py-0.5 font-bold text-brand-gold">
                                {pub.type}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <div className="inline-flex gap-2">
                                <button
                                  onClick={() => openEditModal(pub)}
                                  className="p-2 rounded-full hover:bg-cream border border-cream-dark/30 text-black/70 hover:text-brand transition"
                                  title="Edit details"
                                >
                                  <Edit3 size={14} />
                                </button>
                                <button
                                  onClick={() => handlePubDelete(pub.id)}
                                  className="p-2 rounded-full hover:bg-brand/10 border border-cream-dark/30 text-black/70 hover:text-brand transition"
                                  title="Delete publication"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="py-20 text-center rounded-3xl border border-dashed border-brand/20 bg-cream/10 flex flex-col items-center justify-center">
                    <BookOpen size={40} className="text-black/25 mb-4 animate-pulse" />
                    <p className="text-base font-semibold text-black/55">No publications added yet.</p>
                    <p className="text-xs text-black/45 mt-1">Click the "+ Add Publication" button at the top to register your first paper.</p>
                  </div>
                )}
              </div>
            )}

            {/* Edit Profile Info Tab */}
            {activeTab === "profile" && (
              <div>
                <div className="border-b border-cream-dark/25 pb-5 mb-6">
                  <h2 className="text-2xl font-bold text-brand">Edit Profile Info</h2>
                  <p className="text-xs text-black/50 mt-1">Update your professional details presented across the portal profile cards</p>
                </div>

                {profileMessage && (
                  <div className="mb-6 p-4 rounded-2xl bg-brand/10 border border-brand/20 text-brand text-xs font-semibold">
                    {profileMessage}
                  </div>
                )}

                <form onSubmit={handleProfileSave} className="space-y-5 text-xs">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Display Name</label>
                      <input
                        required
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Designation</label>
                      <input
                        required
                        type="text"
                        value={profileForm.designation}
                        onChange={(e) => setProfileForm(prev => ({ ...prev, designation: e.target.value }))}
                        className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Academic Department</label>
                      <input
                        required
                        type="text"
                        value={profileForm.department}
                        onChange={(e) => setProfileForm(prev => ({ ...prev, department: e.target.value }))}
                        className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Contact Ext / Phone</label>
                      <input
                        required
                        type="text"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">Research Specialization</label>
                    <textarea
                      rows={3}
                      value={profileForm.research}
                      onChange={(e) => setProfileForm(prev => ({ ...prev, research: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>

                  <button type="submit" className="rounded-full bg-brand px-6 py-3.5 text-xs font-bold text-white transition hover:bg-brand-dark">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* Admin Moderation Tab */}
            {activeTab === "moderation" && (
              <div>
                <div className="border-b border-cream-dark/25 pb-5 mb-6">
                  <h2 className="text-2xl font-bold text-brand">Faculty Requests</h2>
                  <p className="text-xs text-black/50 mt-1">Review, approve, or reject pending faculty registrations to access the portal dashboard</p>
                </div>

                {pendingFaculty.length > 0 ? (
                  <div className="space-y-4">
                    {pendingFaculty.map((item) => (
                      <div key={item.id} className="p-5 bg-cream/15 border border-cream-dark/30 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs">
                        <div>
                          <h4 className="text-sm font-bold text-brand">{item.name}</h4>
                          <p className="text-black/50 mt-0.5">{item.designation} &bull; Dept. of {item.dept}</p>
                          <p className="text-brand font-medium mt-1">{item.email}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveFaculty(item.id)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-white transition hover:bg-brand-dark"
                          >
                            <CheckCircle size={14} /> Approve
                          </button>
                          <button
                            onClick={() => rejectFaculty(item.id)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-brand px-4 py-2.5 text-xs font-bold text-brand transition hover:bg-brand hover:text-white"
                          >
                            <XCircle size={14} /> Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center rounded-3xl border border-dashed border-brand/20 bg-cream/10 flex flex-col items-center justify-center">
                    <UserCheck size={40} className="text-black/25 mb-4" />
                    <p className="text-base font-semibold text-black/55">No pending faculty requests.</p>
                    <p className="text-xs text-black/45 mt-1">All registrations are approved and current.</p>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>

      {/* Add/Edit Publication Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-[550px] bg-white border border-cream-dark/30 rounded-[36px] shadow-2xl p-8 relative overflow-hidden">
            {/* Accent gold top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand to-brand-gold" />
            
            <h3 className="text-xl font-bold text-brand mb-6 border-b border-cream-dark/20 pb-3">
              {modalMode === "add" ? "Add Research Publication" : "Edit Publication Details"}
            </h3>

            <form onSubmit={handlePubSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Publication Title</label>
                <input
                  required
                  type="text"
                  value={pubForm.title}
                  onChange={(e) => setPubForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Publication Type</label>
                  <select
                    value={pubForm.type}
                    onChange={(e) => setPubForm(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white cursor-pointer focus:border-brand transition"
                  >
                    <option value="Journal Paper">Journal Paper</option>
                    <option value="Conference Paper">Conference Paper</option>
                    <option value="Book Chapter">Book Chapter</option>
                    <option value="Patent">Patent</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Year of Publication</label>
                  <input
                    required
                    type="number"
                    value={pubForm.year}
                    onChange={(e) => setPubForm(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Authors List</label>
                <input
                  required
                  type="text"
                  value={pubForm.authors}
                  onChange={(e) => setPubForm(prev => ({ ...prev, authors: e.target.value }))}
                  placeholder="e.g. A. Sarkar, M. Hira"
                  className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Journal / Venue Name</label>
                  <input
                    required
                    type="text"
                    value={pubForm.journal}
                    onChange={(e) => setPubForm(prev => ({ ...prev, journal: e.target.value }))}
                    className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Publication URL</label>
                  <input
                    required
                    type="url"
                    value={pubForm.url}
                    onChange={(e) => setPubForm(prev => ({ ...prev, url: e.target.value }))}
                    className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                  />
                </div>
              </div>

              {isAdmin && (
                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1.5">Assign to Author ID</label>
                  <select
                    value={pubForm.author_id}
                    onChange={(e) => setPubForm(prev => ({ ...prev, author_id: e.target.value }))}
                    className="w-full rounded-xl border border-cream-dark/40 px-3.5 py-2 text-xs bg-cream/10 outline-none focus:bg-white cursor-pointer focus:border-brand transition"
                  >
                    <option value="34">Prof. Apurba Sarkar (ID: 34)</option>
                    <option value="36">Prof. Manas Hira (ID: 36)</option>
                    <option value="38">Prof. Ashish Kumar Layek (ID: 38)</option>
                    <option value="99">Prof. Surajeet Ghosh (ID: 99)</option>
                  </select>
                </div>
              )}

              <div className="flex justify-end gap-3 mt-6 border-t border-cream-dark/20 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-full border border-brand px-5 py-2.5 font-bold text-brand hover:bg-brand/10 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-brand px-5 py-2.5 font-bold text-white hover:bg-brand-dark transition"
                >
                  Save Publication
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
