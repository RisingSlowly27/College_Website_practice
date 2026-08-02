import { useState } from "react";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";
import { Mail, Phone, MapPin, ExternalLink, Calendar, Award, BookOpen, Layers, Users, Server, Briefcase } from "lucide-react";

// Page metadata mapping (Title -> Description)
const PAGE_METADATA = {
  "Academic": "Explore our comprehensive B.Tech, M.Tech, and Ph.D. curricula tailored to industry demands.",
  "Academic Programs": "Explore our comprehensive B.Tech, M.Tech, and Ph.D. curricula tailored to industry demands.",
  "Admission": "Admissions criteria, cutoffs, and seat intake schedules for CST programs.",
  "Student": "Our vibrant campus life, technical clubs, chapters, and student activities.",
  "Innovation": "Sponsored research initiatives, consultancy projects, and active development groups.",
  "Projects": "Sponsored research initiatives, consultancy projects, and active development groups.",
  "Facilities": "Advanced computing infrastructures, servers, and dedicated research laboratories.",
  "Laboratory": "Advanced computing infrastructures, servers, and dedicated research laboratories.",
  "Placement": "Placements history, recruiting partners, and internship statistic highlights.",
  "Notification": "Official circulars, exam schedules, and academic announcements.",
  "Staff Members": "Our dedicated technical assistants, laboratory personnel, and support team.",
  "Research Scholars": "Active Ph.D. scholars, supervisors, and research focus areas.",
  "Research Areas": "Active Ph.D. scholars, supervisors, and research focus areas.",
  "Gallery": "Moments from campus fests, workshops, seminars, and laboratory life.",
  "Achievements": "Biannual newsletters, national accolades, and student coding achievements.",
  "News Letter": "Biannual newsletters, national accolades, and student coding achievements.",
  "Contact Us": "Reach out to the Department of Computer Science and Technology."
};

export default function Placeholder({ title }) {
  const currentPath = window.location.pathname;
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

  // Helper to render page-specific rich content
  const renderPageContent = () => {
    switch (title) {
      case "Academic":
      case "Academic Programs":
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand">Undergraduate (B.Tech)</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  A 4-year B.Tech in Computer Science and Technology. Coursework covers core algorithm designs, computer system architecture, VLSI, and artificial intelligence.
                </p>
                <div className="mt-4 pt-3 border-t border-cream-dark/20 text-xs font-semibold text-brand/80">
                  Intake Capacity: 93 seats
                </div>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand">Postgraduate (M.Tech)</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  A 2-year M.Tech program with rigorous curricula in advanced algorithm design, reconfigurable computing, networks, and bioinformatics pipelines.
                </p>
                <div className="mt-4 pt-3 border-t border-cream-dark/20 text-xs font-semibold text-brand/80">
                  Intake Capacity: 36 seats
                </div>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand">Doctoral (Ph.D.)</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  Ph.D. research fellowships across multiple fields like soft computing, digital geometry, cryptography, IoT systems, and medical imaging.
                </p>
                <div className="mt-4 pt-3 border-t border-cream-dark/20 text-xs font-semibold text-brand/80">
                  Fellowships: CSIR, DST, Visvesvaraya
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Accreditation & Quality</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                The Department of Computer Science and Technology stands accredited by the **National Board of Accreditation (NBA)** with an 'A' grade. It has maintained ISO 9000 certification and was selected as a DST-FIST sponsored department, testifying to the academic quality and infrastructure.
              </p>
            </div>
          </div>
        );

      case "Admission":
        return (
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">UG Admission (B.Tech)</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Admission to the B.Tech program is conducted through the Joint Seat Allocation Authority (**JoSAA**) and Central Seat Allocation Board (**CSAB**) counseling, based on the candidate's All India Rank in the Joint Entrance Examination (JEE) Main. 
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="https://josaa.nic.in" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline">
                  Visit JoSAA Portal <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">PG Admission (M.Tech)</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Candidates must hold a valid GATE score to apply for the M.Tech course. Admissions are coordinated via Centralized Counseling for M.Tech/M.Arch/M.Plan (**CCMT**). 
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="https://ccmt.admissions.nic.in" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline">
                  Visit CCMT Portal <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Doctoral Admission (Ph.D.)</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Admissions for the Ph.D. program occur twice annually (July and December cycles). Shortlisted candidates undergo a rigorous written research examination and a personal interview conducted by the Departmental Research Committee.
              </p>
            </div>
          </div>
        );

      case "Student":
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">CodeClub IIEST</h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  The primary competitive programming and development club. It regularly hosts algorithmic code contests, web design workshops, hackathons, and guides juniors for Google Summer of Code (GSoC) and ICPC regionals.
                </p>
              </div>
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">Professional Chapters</h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  The active student chapters of **ACM (Association for Computing Machinery)** and the **IEEE Computer Society** regularly host global tech experts, technical symposiums, and student-lead technology projects.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">REBECA Tech Reunion</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                CST students actively participate in **REBECA (Reunion Exhibition and Bengal Engineering College Activities)**, which has been organized since 1938—making it the oldest annual tech-cultural reunion festival in India. It builds strong networks with top alumni globally.
              </p>
            </div>
          </div>
        );

      case "Innovation":
      case "Projects":
        return (
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Sponsored Research Projects</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cream/5 border border-cream-dark/20">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">DST Sponsored</span>
                  <h4 className="text-sm font-bold text-black/85 mt-1">Smart Hybrid Microgrids Optimization</h4>
                  <p className="text-xs text-black/60 mt-1">Investigating intelligent optimization algorithms for hybrid PV systems and microgrid stability controls.</p>
                </div>
                <div className="p-4 rounded-xl bg-cream/5 border border-cream-dark/20">
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider">MeitY Sponsored</span>
                  <h4 className="text-sm font-bold text-black/85 mt-1">Bioinformatics pipelines for Next-Generation Sequencing</h4>
                  <p className="text-xs text-black/60 mt-1">Custom FPGA hardware acceleration schemes for genome alignment and mapping.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Patents & Consultancy</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Faculty members hold multiple patents in areas like reconfigurable computing, optical networks, and document layout segmentation. The department also provides expert IT auditing consultancies for government bodies and public banks.
              </p>
            </div>
          </div>
        );

      case "Facilities":
      case "Laboratory":
        return (
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h3 className="text-lg font-bold text-brand">Central Computing Lab (CCL)</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  Equipped with 120 high-performance computer terminals connected through a 10Gbps optical campus backbone network.
                </p>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="text-lg font-bold text-brand">VLSI & Reconfigurable Lab</h3>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  State-of-the-art facility featuring Cadence, Synopsys tools, and Xilinx FPGA target dev boards.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">AI & Vision Lab</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Features GPU-accelerated computing nodes (NVIDIA RTX series) supporting advanced machine learning, deep learning, bioinformatics parsing, and image analysis models.
              </p>
            </div>
          </div>
        );

      case "Placement":
        return (
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Placement Statistics (2025)</h3>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                <div className="text-center p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-xs text-black/50 uppercase tracking-wider font-bold">B.Tech Placement</p>
                  <p className="text-3xl font-extrabold text-brand mt-1">96.5%</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-xs text-black/50 uppercase tracking-wider font-bold">Average CTC</p>
                  <p className="text-3xl font-extrabold text-brand mt-1">16.8 L</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-xs text-black/50 uppercase tracking-wider font-bold">Highest Package</p>
                  <p className="text-3xl font-extrabold text-brand mt-1">51.5 L</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-xs text-black/50 uppercase tracking-wider font-bold">M.Tech Placement</p>
                  <p className="text-3xl font-extrabold text-brand mt-1">88.2%</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4 font-bold">Key Recruiting Partners</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-center text-sm font-semibold text-black/70">
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Google</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Microsoft</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Amazon</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Adobe</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Qualcomm</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">Oracle</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">PWC</div>
                <div className="p-3 bg-cream-light/30 rounded-xl border border-cream-dark/20">TCS (Digital)</div>
              </div>
            </div>
          </div>
        );

      case "Notification":
        return (
          <div className="space-y-4">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-5 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                Active Announcements
              </h3>
              <div className="space-y-4">
                {[
                  { date: "Aug 01, 2026", title: "IAT 2026 BS-MS Dual Degree Admission: Counseling lists and Reporting schedules.", tag: "Academic" },
                  { date: "Jul 28, 2026", title: "CCMT/CCMN 2026: Third round seat allocations and fee schedules.", tag: "Admission" },
                  { date: "Jul 15, 2026", title: "Visvesvaraya Ph.D Fellowship interview results - selected scholars list.", tag: "Research" },
                  { date: "Jun 12, 2026", title: "End-Semester Examinations seating plans and schedules for PG courses.", tag: "Exams" }
                ].map((notif, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/25 hover:border-brand/20 transition duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <span className="inline-block rounded-md bg-brand/10 border border-brand/20 px-2 py-0.5 text-[9px] font-bold text-brand uppercase tracking-wider mr-2.5">
                        {notif.tag}
                      </span>
                      <span className="text-sm font-semibold text-black/85">{notif.title}</span>
                    </div>
                    <span className="text-xs text-black/50 font-medium shrink-0 flex items-center gap-1">
                      <Calendar size={12} />
                      {notif.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Staff Members":
        return (
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-6">Technical & Lab Support Staff</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: "Amit Barman", role: "Technical Assistant", email: "amitbarman@cs.iiests.ac.in", phone: "Ext. 576" },
                  { name: "Subrata Mandal", role: "Senior Laboratory Assistant", email: "subrata@cs.iiests.ac.in", phone: "Ext. 570" },
                  { name: "Tapasi Debnath", role: "Laboratory Assistant", email: "tapasi@cs.iiests.ac.in", phone: "Ext. 570" },
                  { name: "Sumit Kumar", role: "Office Assistant", email: "sumit@cs.iiests.ac.in", phone: "Ext. 576" }
                ].map((staff, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-cream/10 border border-cream-dark/30 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-brand">{staff.name}</h4>
                      <p className="text-xs font-semibold text-brand-gold uppercase tracking-wide mt-0.5">{staff.role}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-cream-dark/25 text-xs text-black/70 space-y-1">
                      <p><span className="font-semibold text-brand">Mail:</span> {staff.email}</p>
                      <p><span className="font-semibold text-brand">Phone:</span> +91 (033) 2668 4561 {staff.phone}</p>
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
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Key Research Areas</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Document Image Analysis & OCR",
                  "Bioinformatics & Machine Learning",
                  "Reconfigurable Computing & VLSI testing",
                  "Wireless Sensor Networks & IoT security",
                  "Digital Geometry & Shapes Analysis",
                  "Theoretical Computer Science"
                ].map((area, idx) => (
                  <div key={idx} className="p-3 bg-cream/10 rounded-xl border border-cream-dark/25 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    <span className="text-xs font-semibold text-black/75">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">PhD Scholars Registry</h3>
              <p className="text-sm text-black/70 leading-relaxed">
                Currently, 22 full-time and part-time doctoral research scholars are pursuing Ph.D. dissertations in the department under the mentorship of the faculty members.
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
                { title: "REBECA Tech Fest Showcase", bg: "bg-amber-100" },
                { title: "Seminar Auditorium", bg: "bg-teal-100" },
                { title: "Department Entry Hall", bg: "bg-rose-100" },
                { title: "Alumni Reunion Dinner", bg: "bg-blue-100" }
              ].map((pic, idx) => (
                <div key={idx} className={`aspect-[4/3] rounded-[24px] ${pic.bg} border border-cream-dark/35 flex flex-col justify-end p-4 shadow-sm hover:scale-[1.02] transition duration-300`}>
                  <p className="text-xs font-bold text-brand-dark bg-white/70 backdrop-blur-md px-2.5 py-1.5 rounded-full inline-block shadow-inner w-fit">
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
          <div className="space-y-8">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Department Newsletter: "The Loop"</h3>
              <p className="text-sm text-black/70 leading-relaxed mb-6">
                "The Loop" is the biannual official newsletter of the Computer Science and Technology Department, highlighting recent research publications, technical achievements, placement updates, and alumni reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark flex items-center justify-center gap-2">
                  <BookOpen size={16} />
                  Download Volume 1 Issue 1 (PDF)
                </button>
                <button className="flex-1 rounded-full bg-brand-darker px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-darkest flex items-center justify-center gap-2">
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
              <ul className="space-y-3.5 text-sm text-black/70">
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
                  <span><strong>Academic Ranking:</strong> The CST department was ranked 10th nationwide in technical Surveys.</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case "Contact Us":
        return (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Details Card */}
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-brand">Office Address</h3>
              
              <div className="space-y-4 text-sm text-black/75">
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
              <h3 className="text-xl font-bold text-brand mb-4">Send an Enquiry</h3>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-brand/10 border border-brand/20 text-center text-brand font-semibold text-sm">
                  Thank you! Your enquiry has been received. HOD Office will respond shortly.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 text-sm bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Your Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 text-sm bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full rounded-xl border border-cream-dark/40 px-4 py-2.5 text-sm bg-cream/10 outline-none focus:bg-white focus:border-brand transition"
                    />
                  </div>
                  <button type="submit" className="w-full rounded-full bg-brand py-3 text-sm font-bold text-white transition hover:bg-brand-dark">
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
      {/* Top Banner section containing Left Sidebar Menu - NO px padding */}
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
              {/* Left Side: Sidebar Menu inside the banner */}
              <div className="shrink-0">
                <Sidebar />
              </div>

              {/* Right Side: Page Title and Description */}
              <div className="flex-1 flex flex-col justify-center lg:pl-12 text-white text-left">
                <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-[60px] lg:leading-[70px]">
                  {title}
                </h1>
                <p className="mt-3 text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Grid Layout containing Left Menu and Right Rich Content Pane */}
      <div className="mx-auto max-w-[1720px] py-8 lg:py-12 px-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] items-start">
          {/* Left Navigation Column */}
          <div className="lg:block hidden sticky top-8">
            <Sidebar />
          </div>

          {/* Right Rich Content Column */}
          <div className="flex-1">
            {renderPageContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
}
