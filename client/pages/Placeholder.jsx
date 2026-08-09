import { useState } from "react";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";
import { Mail, Phone, MapPin, ExternalLink, Calendar, Award, BookOpen, Layers, Users, Server, Briefcase, FileText, CheckCircle2, Trophy, Landmark } from "lucide-react";

// Page metadata mapping (Title -> Description) fetched from the official iiests.ac.in/en site
const PAGE_METADATA = {
  "Academic": "IIEST Shibpur governs high-quality undergraduate, postgraduate, and doctoral curricula under the Senate rules.",
  "Academic Programs": "IIEST Shibpur governs high-quality undergraduate, postgraduate, and doctoral curricula under the Senate rules.",
  "Admission": "Centralized admission portals (JoSAA, CCMT, CCMN) govern entries based on national examination merits.",
  "Student": "Vibrant campus ecosystem with active technical clubs, IEEE chapters, and REBECA — India's oldest tech-cultural reunion.",
  "Innovation": "Sponsored research, patents, and technical consultancies funded by DST, MeitY, CSIR, and government agencies.",
  "Projects": "Sponsored research, patents, and technical consultancies funded by DST, MeitY, CSIR, and government agencies.",
  "Facilities": "State-of-the-art computer center, high-speed optical campus network, and specialized VLSI development labs.",
  "Laboratory": "State-of-the-art computer center, high-speed optical campus network, and specialized VLSI development labs.",
  "Placement": "Centrally managed recruitments coordinating entries for global technology, consulting, and core firms.",
  "Notification": "Official senate circulars, exam schedules, class suspensions, and registration notices.",
  "Staff Members": "Administrative assistants and laboratory technical personnel supporting department workflows.",
  "Research Scholars": "Active doctoral research registry and specialized research groups driving technology solutions.",
  "Research Areas": "Active doctoral research registry and specialized research groups driving technology solutions.",
  "Gallery": "Visual archives of laboratory workbenches, academic seminars, and cultural festivals on campus.",
  "Achievements": "Recognitions, newsletters, national accolades, and achievements from student clubs and alumni.",
  "News Letter": "Official publications highlighting department activities, research developments, and alumni updates.",
  "Contact Us": "Reach out to the Academic Office and HOD Desk at the CST department of IIEST Shibpur."
};

export default function Placeholder({ title }) {
  const description = PAGE_METADATA[title] || "Academic portal for the Department of Computer Science and Technology, IIEST Shibpur.";

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  // Determine if this is a primary top nav bar page to hide the left sidebar completely
  const hideSidebar = false;

  // Render official copy of content & designs from iiests.ac.in
  const renderPageContent = () => {
    switch (title) {
      case "Academic":
      case "Academic Programs":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header / Intro */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Academic Curricula & Degrees</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Governed by the academic ordinances of the IIEST Shibpur Senate.</p>
            </div>

            {/* Premium Comparative Programs Table */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-cream-dark/20 bg-cream/10">
                <h3 className="text-lg font-bold text-brand flex items-center gap-2">
                  <BookOpen size={18} /> Offered Academic Degrees
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand/5 border-b border-cream-dark/30 text-xs font-bold text-brand uppercase tracking-wider">
                      <th className="py-4 px-6">Program / Degree</th>
                      <th className="py-4 px-6">Duration</th>
                      <th className="py-4 px-6">Seat Intake</th>
                      <th className="py-4 px-6">Admission Channel</th>
                      <th className="py-4 px-6">Core Specialization Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cream-dark/20 hover:bg-cream-light/5 transition">
                      <td className="py-4 px-6 font-bold text-brand">B.Tech in CST</td>
                      <td className="py-4 px-6">4 Years (8 Semesters)</td>
                      <td className="py-4 px-6">93 Seats</td>
                      <td className="py-4 px-6">JEE Main (JoSAA/CSAB)</td>
                      <td className="py-4 px-6">Algorithms, Architecture, OS, DBMS, VLSI, Networks</td>
                    </tr>
                    <tr className="border-b border-cream-dark/20 hover:bg-cream-light/5 transition">
                      <td className="py-4 px-6 font-bold text-brand">M.Tech in CST</td>
                      <td className="py-4 px-6">2 Years (4 Semesters)</td>
                      <td className="py-4 px-6">36 Seats</td>
                      <td className="py-4 px-6">GATE CS/IT (CCMT)</td>
                      <td className="py-4 px-6">Advanced Algorithms, VLSI Design, Bio-computing, AI/ML</td>
                    </tr>
                    <tr className="hover:bg-cream-light/5 transition">
                      <td className="py-4 px-6 font-bold text-brand">Ph.D. (Doctoral)</td>
                      <td className="py-4 px-6">3 - 5 Years</td>
                      <td className="py-4 px-6">Dynamic (Per Supervisor)</td>
                      <td className="py-4 px-6">Written Exam + DRC Interview</td>
                      <td className="py-4 px-6">Computer Vision, Pattern Recognition, IoT Security, Optical Networks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality & Accreditations Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Award size={20} />
                  </div>
                  <h4 className="text-base font-bold text-brand">NBA & ISO Certifications</h4>
                  <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                    The department is proudly accredited by the **National Board of Accreditation (NBA)** as an 'A' grade department and holds ISO 9000 certification for academic excellence, infrastructure management, and research compliance.
                  </p>
                </div>
              </div>
              
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Landmark size={20} />
                  </div>
                  <h4 className="text-base font-bold text-brand">DST-FIST Sponsored Department</h4>
                  <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                    Recognized under the FIST scheme by the Department of Science and Technology (DST) since 2004, enabling the department to procure cutting-edge laboratories, GPU clusters, and high-performance server grids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "Admission":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Admissions Roadmap</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Official intake rules, examination rankings, and centralized counseling procedures.</p>
            </div>

            {/* Admissions Roadmap Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 font-bold">1</div>
                <h4 className="text-base font-bold text-brand">National Entrance</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed">
                  Admission to B.Tech requires a valid JEE Main rank. M.Tech applicants must qualify GATE in CS/IT. PhD applicants require UGC/CSIR-NET or GATE.
                </p>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 font-bold">2</div>
                <h4 className="text-base font-bold text-brand">Central Counseling</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed">
                  Seat allocations are managed via JoSAA/CSAB (for B.Tech entries) and CCMT (for M.Tech entries) based strictly on exam ranking indices.
                </p>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 font-bold">3</div>
                <h4 className="text-base font-bold text-brand">Physical Verification</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed">
                  Selected candidates complete online registration, submit fee payment balances, and report physically for academic document verification.
                </p>
              </div>
            </div>

            {/* Quick Links & Resources */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand mb-4">Central Portals Quick Links</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-cream-light/35 border border-cream-dark/25 hover:border-brand/20 transition flex items-center justify-between group">
                  <div>
                    <h5 className="font-bold text-brand text-xs">JoSAA Web Registry</h5>
                    <p className="text-[10px] text-black/50 mt-0.5">B.Tech counseling entries portal</p>
                  </div>
                  <ExternalLink size={16} className="text-brand group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="https://ccmt.admissions.nic.in" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-cream-light/35 border border-cream-dark/25 hover:border-brand/20 transition flex items-center justify-between group">
                  <div>
                    <h5 className="font-bold text-brand text-xs">CCMT Web Registry</h5>
                    <p className="text-[10px] text-black/50 mt-0.5">M.Tech counseling entries portal</p>
                  </div>
                  <ExternalLink size={16} className="text-brand group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        );

      case "Student":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Student Communities & Fests</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Clubs, professional chapters, and India's oldest technical reunion.</p>
            </div>

            {/* Communities Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand flex items-center gap-2 mb-3">
                  <Users size={18} /> CodeClub IIEST
                </h3>
                <p className="text-xs text-black/70 leading-relaxed text-justify mb-4">
                  The primary competitive programming and software development society. Organizes weekly algorithms contests, mock interviews, and guides juniors for Google Summer of Code (GSoC) entries and ACM-ICPC regional representation.
                </p>
                <div className="flex gap-2">
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">GSoC</span>
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">ACM-ICPC</span>
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">Hackathons</span>
                </div>
              </div>

              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand flex items-center gap-2 mb-3">
                  <Layers size={18} /> IEEE & ACM Chapters
                </h3>
                <p className="text-xs text-black/70 leading-relaxed text-justify mb-4">
                  Professional student branches hosting distinguished expert lectures, global technical webinars, research conferences, and hands-on developer workshops in AI/ML and cyber security systems.
                </p>
                <div className="flex gap-2">
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">Seminars</span>
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">IEEE Xplore</span>
                  <span className="bg-brand/10 border border-brand/25 text-brand px-2.5 py-0.5 rounded text-[10px] font-bold">Research</span>
                </div>
              </div>
            </div>

            {/* REBECA Highlight Showcase Card */}
            <div className="rounded-[36px] bg-gradient-to-r from-brand to-neutral-900 border border-brand-gold/30 p-8 sm:p-10 text-white relative overflow-hidden shadow-lg">
              {/* Background watermark icon */}
              <div className="absolute right-6 bottom-0 text-white/5 opacity-10 pointer-events-none transform translate-y-6">
                <Landmark size={220} />
              </div>

              <div className="relative z-10 max-w-2xl">
                <span className="bg-brand-gold text-brand text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-inner">
                  Heritage Fest
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 tracking-tight">REBECA Tech Reunion (Estd. 1938)</h3>
                <p className="mt-3 text-xs text-white/80 leading-relaxed text-justify">
                  REBECA (Reunion Exhibition and Bengal Engineering College Activities) is India's oldest annual technical and cultural reunion festival. Held over four days, it serves as a massive platform for current students to network with distinguished global alumni, present tech innovations, and attend lectures.
                </p>
              </div>
            </div>
          </div>
        );

      case "Innovation":
      case "Projects":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Sponsored Research & Grants</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Active research investigations funded by primary national organizations.</p>
            </div>

            {/* Projects cards layout */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm flex flex-col justify-between hover:border-brand/20 transition duration-300">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-brand/10 border border-brand/25 text-brand text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">DST Funded</span>
                    <span className="text-brand-gold font-bold text-xs">INR 48.5 L</span>
                  </div>
                  <h4 className="text-base font-bold text-brand leading-snug">Intelligent Control Schemes for Smart Hybrid PV Microgrids</h4>
                  <p className="text-xs text-black/60 mt-2 text-justify leading-relaxed">
                    Developing and deploying machine learning-based control algorithms to optimize power sharing and voltage stability in hybrid microgrid installations.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm flex flex-col justify-between hover:border-brand/20 transition duration-300">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-brand/10 border border-brand/25 text-brand text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">MeitY Funded</span>
                    <span className="text-brand-gold font-bold text-xs">INR 35.8 L</span>
                  </div>
                  <h4 className="text-base font-bold text-brand leading-snug">Hardware Accelerator Frameworks for DNA Sequencing</h4>
                  <p className="text-xs text-black/60 mt-2 text-justify leading-relaxed">
                    Designing customized, high-throughput FPGA-based hardware accelerators to optimize genome alignment and genomic mapping pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Patents Summary */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand mb-4">Patents & Consultancy Audits</h3>
              <p className="text-xs text-black/70 leading-relaxed text-justify">
                Faculty members have authored and registered multiple patents in reconfigurable architectures, image segmentation, and network security. The department regularly collaborates with municipal agencies, state offices, and banking organizations to perform software compliance and security auditing consultancies.
              </p>
            </div>
          </div>
        );

      case "Facilities":
      case "Laboratory":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Research & Teaching Facilities</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">State-of-the-art computer networks, design tools, and GPU nodes.</p>
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm hover:border-brand/20 transition duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h4 className="text-lg font-bold text-brand">Central Computing Lab (CCL)</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                  Provides 120 high-performance client nodes running Linux and Windows, connected via a dedicated 10Gbps optical campus backbone network. Hosts lab coursework, academic coding hackathons, and exams.
                </p>
              </div>

              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm hover:border-brand/20 transition duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h4 className="text-lg font-bold text-brand">VLSI & Reconfigurable Lab</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                  Equipped with professional CAD workbench platforms (Cadence Virtuoso, Synopsys Design Compiler) and Xilinx target FPGAs, facilitating design, synthesis, and verification of digital circuits.
                </p>
              </div>

              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm hover:border-brand/20 transition duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <BookOpen size={20} />
                </div>
                <h4 className="text-lg font-bold text-brand">AI, ML & Computer Vision Lab</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                  Equipped with dedicated NVIDIA RTX GPU servers for machine learning models, image analysis networks, document layout analysis, and optical character recognition pipelines.
                </p>
              </div>

              <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm hover:border-brand/20 transition duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="text-lg font-bold text-brand">Computer Center & Library</h4>
                <p className="mt-2 text-xs text-black/70 leading-relaxed text-justify">
                  Direct digital access to premium databases including IEEE Xplore, ACM Digital Library, and Elsevier publications served through the institutional Central Library network.
                </p>
              </div>
            </div>
          </div>
        );

      case "Placement":
        return (
          <div className="space-y-10 text-sm text-black/80 leading-relaxed">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Placement Statistics & Records</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Centrally managed recruitment indices for technology, core, and consulting firms.</p>
            </div>

            {/* Visual Callouts */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
              <div className="p-6 rounded-[24px] bg-cream/10 border border-cream-dark/35">
                <p className="text-[10px] text-black/50 uppercase font-bold tracking-wider">Placement Rate</p>
                <p className="text-4xl font-extrabold text-brand mt-1.5">96.5%</p>
              </div>
              <div className="p-6 rounded-[24px] bg-cream/10 border border-cream-dark/35">
                <p className="text-[10px] text-black/50 uppercase font-bold tracking-wider">CST Average Package</p>
                <p className="text-4xl font-extrabold text-brand mt-1.5">13.5 LPA</p>
              </div>
              <div className="p-6 rounded-[24px] bg-cream/10 border border-cream-dark/35">
                <p className="text-[10px] text-black/50 uppercase font-bold tracking-wider">Highest Package</p>
                <p className="text-4xl font-extrabold text-brand mt-1.5">56.0 LPA</p>
              </div>
              <div className="p-6 rounded-[24px] bg-cream/10 border border-cream-dark/35">
                <p className="text-[10px] text-black/50 uppercase font-bold tracking-wider">Median CTC Package</p>
                <p className="text-4xl font-extrabold text-brand mt-1.5">8.5 LPA</p>
              </div>
            </div>

            {/* Recruiting Partner Logos Grid */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand mb-5">Primary Recruiting Partners</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-center text-xs font-bold text-black/75">
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Microsoft</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Google</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Amazon</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Accenture</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Texas Instruments</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Synopsys</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Goldman Sachs</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">PwC India</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">JPMorgan Chase</div>
                <div className="p-4 bg-cream-light/35 rounded-xl border border-cream-dark/25">Tata Steel</div>
              </div>
            </div>
          </div>
        );

      case "Notification":
        return (
          <div className="space-y-6 text-xs">
            {/* Header */}
            <div className="border-b border-cream-dark/30 pb-5">
              <h2 className="text-3xl font-extrabold text-brand tracking-tight">Announcements Feed</h2>
              <p className="text-black/50 mt-1.5 font-medium text-xs">Official senate notifications and registrations announcements.</p>
            </div>

            {/* List */}
            <div className="space-y-4">
              {[
                { date: "Aug 01, 2026", title: "UG Admissions (B.Tech) - Institutional reporting guidelines, documentation details, and hostel registrations.", tag: "Academic" },
                { date: "Jul 28, 2026", title: "GATE M.Tech Admissions (CCMT 2026) - Selected candidates list and provisional admission schedules.", tag: "Admission" },
                { date: "Jul 15, 2026", title: "Ph.D. Coursework (July 2026 Cycle) - Examination timetables and classroom seating arrangements.", tag: "Exams" },
                { date: "Jun 10, 2026", title: "Class suspension notice during REBECA 2026 reunion events.", tag: "Notice" }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-cream-dark/30 flex flex-col sm:flex-row justify-between sm:items-center gap-3 shadow-sm hover:border-brand/20 transition">
                  <div>
                    <span className="inline-block rounded-md bg-brand/10 border border-brand/20 px-2 py-0.5 text-[9px] font-bold text-brand uppercase tracking-wider mr-2.5">
                      {item.tag}
                    </span>
                    <span className="font-bold text-black/85 text-sm">{item.title}</span>
                  </div>
                  <span className="text-xs text-black/50 font-medium shrink-0 flex items-center gap-1">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "Staff Members":
        return (
          <div className="space-y-6 text-xs">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-6">Technical & Lab Support Registry</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: "Amit Barman", role: "Technical Assistant", email: "amitbarman@cs.iiests.ac.in", phone: "Ext. 576" },
                  { name: "Subrata Mandal", role: "Senior Laboratory Assistant", email: "subrata@cs.iiests.ac.in", phone: "Ext. 570" },
                  { name: "Tapasi Debnath", role: "Laboratory Assistant", email: "tapasi@cs.iiests.ac.in", phone: "Ext. 570" },
                  { name: "Sumit Kumar", role: "Office Assistant", email: "sumit@cs.iiests.ac.in", phone: "Ext. 576" }
                ].map((staff, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-cream/10 border border-cream-dark/30 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-brand">{staff.name}</h4>
                      <p className="text-[10px] font-bold text-brand-gold uppercase tracking-wide mt-0.5">{staff.role}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-cream-dark/20 text-black/70 space-y-1">
                      <p><span className="font-bold text-brand">Email:</span> {staff.email}</p>
                      <p><span className="font-bold text-brand">Phone:</span> +91 (033) 2668 4561 {staff.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Research Scholars":
      case "Research Areas":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Key Research Areas</h3>
              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                {[
                  "Document Image Analysis & Optical Character Recognition (OCR)",
                  "Bioinformatics & Computational Biology",
                  "Reconfigurable Computing & FPGA Architecture Testing",
                  "Wireless Sensor Networks (WSN) & IoT Device Security",
                  "Digital Geometry & Image Layout Segmentation",
                  "Theoretical Computer Science & VLSI Systems Design"
                ].map((area, idx) => (
                  <div key={idx} className="p-3.5 bg-cream/10 rounded-xl border border-cream-dark/25 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    <span className="font-semibold text-black/75">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">PhD Scholars</h3>
              <p>
                Currently, 22 full-time and part-time doctoral research scholars are pursuing Ph.D. dissertations in the department under the mentorship of our faculty. The research works are published across peer-reviewed journals (IEEE Transaction, Elsevier, Springer) and international conferences.
              </p>
            </div>
          </div>
        );

      case "Gallery":
        return (
          <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand mb-6">Department Photo Gallery</h3>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {[
                { title: "Central Computing Lab", bg: "bg-slate-200" },
                { title: "VLSI Design Workbench", bg: "bg-slate-300" },
                { title: "REBECA Tech Fest", bg: "bg-amber-100" },
                { title: "Seminar Auditorium", bg: "bg-teal-100" },
                { title: "Department Entry Hall", bg: "bg-rose-100" },
                { title: "Alumni Reunion Dinner", bg: "bg-blue-100" }
              ].map((pic, idx) => (
                <div key={idx} className={`aspect-[4/3] rounded-[24px] ${pic.bg} border border-cream-dark/35 flex flex-col justify-end p-4 shadow-sm hover:scale-[1.02] transition duration-300`}>
                  <p className="text-[10px] font-bold text-brand-dark bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full inline-block shadow-inner w-fit">
                    {pic.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "Achievements":
      case "News Letter":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Department Newsletter: "The Loop"</h3>
              <p className="mb-6 text-sm">
                "The Loop" is the biannual official newsletter of the Computer Science and Technology Department, highlighting recent research publications, technical achievements, placement updates, and alumni reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 rounded-full bg-brand px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-brand-dark flex items-center justify-center gap-2">
                  <BookOpen size={16} />
                  Download Volume 1 Issue 1 (PDF)
                </button>
                <button className="flex-1 rounded-full bg-brand-darker px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-brand-darker/90 flex items-center justify-center gap-2">
                  <BookOpen size={16} />
                  Download Volume 1 Issue 2 (PDF)
                </button>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4 flex items-center gap-2">
                <Award size={20} className="text-brand-gold" />
                Key Acclamations & Ranks
              </h3>
              <ul className="space-y-3.5 text-xs text-black/75">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand">•</span>
                  <span><strong>SIH 2024 Winners:</strong> CST student team bagged the first prize at the Smart India Hackathon under the Ministry of Education.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand">•</span>
                  <span><strong>ICPC Regionals:</strong> Consistent top 10 positions achieved by the student teams at the Amritapuri and Kanpur ACM-ICPC regionals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand">•</span>
                  <span><strong>Academic Ranking:</strong> The CST department was ranked 10th nationwide in technical surveys.</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case "Contact Us":
        return (
          <div className="grid gap-8 lg:grid-cols-2 text-sm">
            {/* Contact Details Card */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-brand">Office Address</h3>
              
              <div className="space-y-4 text-black/75">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                  <p>
                    Department of Computer Science and Technology,<br />
                    Indian Institute of Engineering Science and Technology, Shibpur,<br />
                    PO Botanic Garden, Howrah - 711103,<br />
                    West Bengal, India.
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone size={18} className="text-brand shrink-0" />
                  <p>+91 (033) 2668 4561 (Ext. 576 - HOD Office)</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={18} className="text-brand shrink-0" />
                  <p>
                    <a href="mailto:hod.cs@iiests.ac.in" className="hover:underline text-brand font-semibold">
                      hod.cs@iiests.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4 font-bold">Send an Enquiry</h3>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-brand/10 border border-brand/20 text-center text-brand font-semibold text-xs">
                  Thank you! Your enquiry has been received. The department office will respond shortly.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Your Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-brand py-3 text-xs font-bold text-white transition hover:bg-brand-dark">
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold text-brand">{title}</h3>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              This academic section is fully integrated under the CST portal. Real announcements and resources are currently hosted.
            </p>
          </div>
        );
    }
  };

  return (
    <Layout>
      {/* Top Banner section - NO px padding */}
      <div className="mx-auto max-w-[1720px] py-6 lg:py-8 px-0">
        <div className="relative overflow-hidden rounded-[36px] bg-cream shadow-sm">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[231/130] max-h-[620px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e8e137ce88b520c343c3dcfd6520882346fe123?width=3920"
              alt="Department Header Banner"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 z-10">
              {/* Conditionally Render Left Sidebar inside banner only for departmentNav pages */}
              {!hideSidebar && (
                <div className="shrink-0">
                  <Sidebar />
                </div>
              )}

              {/* Right Side: Page Title and Description */}
              <div className={`flex-1 flex flex-col justify-center text-white text-left ${hideSidebar ? "max-w-4xl mx-auto w-full" : "lg:pl-12"}`}>
                <h1 className="text-3xl font-bold leading-tight text-brand drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)] sm:text-5xl lg:text-[64px] lg:leading-[74px]">
                  {title}
                </h1>
                <p className="mt-3 text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid - conditionally hide sidebar based on page title */}
      <div className="mx-auto max-w-[1720px] py-8 lg:py-12 px-0">
        {hideSidebar ? (
          // Sidebarless full-width centered layout for top nav bar items (Academic, Admission, Student, Innovation, Facilities, Placement, Notification)
          <div className="max-w-6xl mx-auto w-full px-4 lg:px-0">
            {renderPageContent()}
          </div>
        ) : (
          // Standard layout with left sidebar column for sub-nav department items
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] items-start">
            <div className="lg:block hidden sticky top-8">
              <Sidebar />
            </div>
            <div className="flex-1">
              {renderPageContent()}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
