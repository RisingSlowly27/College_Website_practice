import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, AlertCircle, ArrowLeft, Loader2 } from "lucide-react";
import Layout from "@/components/site/Layout";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to authenticate");
      }

      // Store auth session
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Trigger event to update header and globally notify
      window.dispatchEvent(new CustomEvent("auth-change"));

      // Navigate to Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-[1720px] py-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-[480px] bg-white border border-cream-dark/30 rounded-[36px] shadow-lg p-8 sm:p-10 relative overflow-hidden">
          {/* Top subtle gold decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand to-brand-gold" />

          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-brand leading-none">Portal Logon</h1>
            <p className="mt-2.5 text-xs text-black/50 leading-relaxed font-medium">
              Research publications dashboard access for Faculty & Administrators.
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-brand/10 border border-brand/20 text-brand text-xs font-semibold flex items-start gap-2">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">
                Institutional Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-black/40">
                  <Mail size={18} />
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-cream-dark/40 bg-cream/10 pl-11 pr-4 py-3 text-sm outline-none focus:bg-white focus:border-brand transition duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-2">
                Security Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-black/40">
                  <Lock size={18} />
                </span>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-cream-dark/40 bg-cream/10 pl-11 pr-4 py-3 text-sm outline-none focus:bg-white focus:border-brand transition duration-300"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Authenticating...
                </>
              ) : (
                "Logon"
              )}
            </button>
          </form>

          {/* Info footnote */}
          <div className="mt-8 pt-6 border-t border-cream-dark/20 text-center">
            <p className="text-[10px] text-black/45 leading-relaxed">
              Default credentials for testing:<br />
              <strong>Faculty:</strong> apurba@cs.iiests.ac.in / password<br />
              <strong>Admin:</strong> admin@iiests.ac.in / admin
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
