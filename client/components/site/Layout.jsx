import { useState, useEffect } from "react";
import { X, ExternalLink, Bell, Calendar } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Real notices and updates from iiests.ac.in
const LATEST_UPDATES = [
  {
    id: 1,
    title: "BS-MS (Dual Degree) Admissions 2026: Selected candidates lists released. Physical reporting scheduled from August 17-20, 2026. Classes commence on August 24, 2026.",
    category: "Admission",
    date: "Aug 01, 2026",
    link: "https://www.iiests.ac.in",
    isNew: true
  },
  {
    id: 2,
    title: "Admissions to M.Tech/M.Plan and M.Sc. courses through CCMT 2026 and CCMN 2026 are active. Check the official seat allocation schedules.",
    category: "Admission",
    date: "Jul 28, 2026",
    link: "https://www.iiests.ac.in",
    isNew: true
  },
  {
    id: 3,
    title: "Nominations and applications are invited for the Professor of Practice (PoP) positions across various academic departments.",
    category: "Recruitment",
    date: "Jun 15, 2026",
    link: "https://www.iiests.ac.in",
    isNew: false
  },
  {
    id: 4,
    title: "Recruitment drive for multiple faculty positions (Assistant Professor, Associate Professor, Professor) under Mission Mode. Detailed qualifications published.",
    category: "Recruitment",
    date: "May 20, 2026",
    link: "https://www.iiests.ac.in",
    isNew: false
  },
  {
    id: 5,
    title: "Notice regarding the Indo-German Living Lab Initiative to strengthen collaborative AI academia-industry partnerships.",
    category: "Research",
    date: "May 10, 2026",
    link: "https://www.iiests.ac.in",
    isNew: false
  },
  {
    id: 6,
    title: "Interviews and selected candidates listings for Ph.D. Admission (July 2026 Cycle) are now posted.",
    category: "Admission",
    date: "Jul 12, 2026",
    link: "https://www.iiests.ac.in",
    isNew: false
  },
  {
    id: 7,
    title: "Academic Calendar and notification details regarding End-Semester Examinations for UG, PG, and Ph.D. Coursework.",
    category: "Exams",
    date: "Jun 02, 2026",
    link: "https://www.iiests.ac.in",
    isNew: false
  }
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Decoupled custom event listener to open updates from anywhere
  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("toggle-updates", handleToggle);
    window.addEventListener("open-updates", handleOpen);
    window.addEventListener("close-updates", handleClose);

    return () => {
      window.removeEventListener("toggle-updates", handleToggle);
      window.removeEventListener("open-updates", handleOpen);
      window.removeEventListener("close-updates", handleClose);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white relative overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Global Floating Updates Tab on the right viewport edge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-[35%] z-40 hidden lg:flex items-center justify-center h-[160px] w-[45px] rounded-l-[22px] bg-brand shadow-[0_4px_20px_rgba(90,11,29,0.18)] border-y border-l border-brand-gold/30 hover:bg-brand-dark transition-all duration-300 transform hover:-translate-x-1 group"
        aria-label="Toggle Updates Panel"
      >
        <span className="-rotate-90 whitespace-nowrap text-xs font-bold text-white tracking-widest uppercase group-hover:text-brand-gold transition-colors">
          Updates & News
        </span>
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 backdrop-blur-[2px]"
        />
      )}

      {/* Slide-out Updates Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[420px] sm:max-w-[460px] bg-cream shadow-2xl border-l border-brand/20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-brand-gold/30 bg-brand p-5 text-white shadow-md">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
            </span>
            Latest News & Notices
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
            aria-label="Close panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body - Scrollable */}
        <div className="h-[calc(100%-68px)] overflow-y-auto p-5 space-y-4 bg-cream-light/35 scrollbar-thin">
          {LATEST_UPDATES.map((update) => (
            <div
              key={update.id}
              className="bg-white p-5 rounded-[20px] shadow-sm border border-cream-dark/30 hover:shadow-md hover:border-brand/20 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="inline-block rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
                    {update.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-black/50 font-medium">
                    <Calendar size={12} />
                    {update.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-black/85 leading-relaxed">
                  {update.title}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-cream-dark/20 flex items-center justify-between">
                {update.isNew && (
                  <span className="rounded bg-brand-gold px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-white animate-pulse">
                    New
                  </span>
                )}
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline ml-auto"
                >
                  View Details
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
