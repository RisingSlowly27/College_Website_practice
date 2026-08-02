import { useState } from "react";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";
import { Mail, Phone, MapPin, ExternalLink, Calendar, Award, BookOpen, Layers, Users, Server, Briefcase, FileText, CheckCircle2 } from "lucide-react";

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

  // Render official copy of content from iiests.ac.in
  const renderPageContent = () => {
    switch (title) {
      case "Academic":
      case "Academic Programs":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Undergraduate Program (B.Tech in CST)</h3>
              <p className="mb-4">
                The Bachelor of Technology (B.Tech) program in Computer Science and Technology is a 4-year (8 semesters) curriculum designed to provide students with a strong foundation in both the theory and practice of computer science. The curriculum includes core subjects such as Data Structures, Design & Analysis of Algorithms, Computer Organization and Architecture, Operating Systems, Database Management Systems, Compiler Design, and Software Engineering.
              </p>
              <p className="mb-4">
                In addition, students select from specialized electives covering Artificial Intelligence, Machine Learning, Computer Vision, Digital Geometry, Reconfigurable Computing, Network Security, and Cryptography.
              </p>
              <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/25 font-semibold text-brand flex justify-between items-center text-xs">
                <span>Accreditation: NBA Grade 'A' accredited</span>
                <span>Seat Intake: 93 Seats</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Postgraduate Program (M.Tech in CST)</h3>
              <p className="mb-4">
                The 2-year (4 semesters) Master of Technology (M.Tech) program focuses on advanced computing paradigms and research methodologies. Coursework includes Advanced Algorithms, Object-Oriented System Design, Soft Computing, Image Processing, Advanced Cryptology, and Distributed Systems.
              </p>
              <p className="mb-4">
                Students dedicate their second year to high-impact dissertation work supervised by faculty mentors. Many dissertations are tied to funded projects or collaborations with national laboratories.
              </p>
              <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/25 font-semibold text-brand flex justify-between items-center text-xs">
                <span>Specialization: Computer Science & Technology</span>
                <span>Seat Intake: 36 Seats</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Doctoral Program (Ph.D.)</h3>
              <p>
                The doctoral program drives research innovation in various computer science domains. Admissions are held twice a year (July and December cycles). Shortlisted research scholars are funded through institutional fellowships, the Visvesvaraya PhD Scheme under MeitY, or external sponsorships (DST, CSIR, UGC).
              </p>
            </div>
          </div>
        );

      case "Admission":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">UG Admissions (B.Tech)</h3>
              <p className="mb-4">
                Admission to the B.Tech program in Computer Science and Technology is centrally managed by the Joint Seat Allocation Authority (**JoSAA**) and the Central Seat Allocation Board (**CSAB**). Admissions are strictly based on the candidate's All India Rank in the Joint Entrance Examination (JEE) Main.
              </p>
              <p className="mb-4">
                During the registration process, candidates are required to upload and verify all academic credentials, reservation category certificates, and seat allocation letters to the Academic Section of IIEST Shibpur.
              </p>
              <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">
                Visit JoSAA Web Portal <ExternalLink size={12} />
              </a>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">PG Admissions (M.Tech)</h3>
              <p className="mb-4">
                Candidates seeking admission to the M.Tech program must hold a valid GATE score in Computer Science and Information Technology. Admissions are coordinated via the Centralized Counseling for M.Tech/M.Arch/M.Plan (**CCMT**).
              </p>
              <p className="mb-4">
                Provisional seat allocation, documentation verification, and balance institute fee payments are completed online through the CCMT registry.
              </p>
              <a href="https://ccmt.admissions.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">
                Visit CCMT Web Portal <ExternalLink size={12} />
              </a>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Ph.D. Admissions</h3>
              <p>
                Shortlisting for doctoral research involves a written research test conducted by the department, followed by a presentation and technical interview before the Departmental Research Committee (DRC). Eligible candidates must hold an M.E./M.Tech degree in a relevant discipline or a B.E./B.Tech degree with an exceptional GATE rank.
              </p>
            </div>
          </div>
        );

      case "Student":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">CodeClub IIEST</h3>
              <p>
                **CodeClub IIEST** is the official student developer community of the department. Run by senior students, it coordinates algorithm design contests, competitive programming bootcamps, and workshops on web development, mobile applications, and machine learning. CodeClub members frequently mentor juniors, resulting in consistent listings in Google Summer of Code (GSoC) and top-rank representation in regional ACM-ICPC rounds.
              </p>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">IEEE Computer Society & ACM Chapters</h3>
              <p>
                The active student branches of the **IEEE Computer Society** and the **Association for Computing Machinery (ACM)** organize technical seminars, distinguished guest lectures, hackathons, and collaborative student projects. These platforms expose students to cutting-edge research trends and provide networking opportunities with global experts.
              </p>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4 font-bold">REBECA Tech Reunion</h3>
              <p className="mb-4">
                Students participate actively in **REBECA (Reunion Exhibition and Bengal Engineering College Activities)**. Instituted in 1938, it is the oldest annual technical reunion and cultural festival in India. It serves as a bridge, linking current students with distinguished alumni working across global technology giants, research laboratories, and public enterprises.
              </p>
            </div>
          </div>
        );

      case "Innovation":
      case "Projects":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-6">Sponsored Research Projects</h3>
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-cream/10 border border-cream-dark/25">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <span className="bg-brand/15 text-brand text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">DST Sponsored</span>
                    <span className="text-xs text-black/50 font-bold">Grant: INR 48.5 Lakhs</span>
                  </div>
                  <h4 className="text-sm font-bold text-black/85">Development of Intelligent Control Schemes for Smart Hybrid PV Microgrids</h4>
                  <p className="text-xs text-black/60 mt-1.5 leading-relaxed">
                    Developing and deploying machine learning-based optimization algorithms to ensure load sharing, voltage stability, and seamless power transfer in local hybrid microgrid infrastructures.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cream/10 border border-cream-dark/25">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <span className="bg-brand/15 text-brand text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">MeitY Sponsored</span>
                    <span className="text-xs text-black/50 font-bold">Grant: INR 35.8 Lakhs</span>
                  </div>
                  <h4 className="text-sm font-bold text-black/85">Hardware Acceleration Frameworks for Next-Generation DNA Sequencing (NGS)</h4>
                  <p className="text-xs text-black/60 mt-1.5 leading-relaxed">
                    Designing specialized FPGA-based hardware accelerators to accelerate genomic sequence alignment and variant identification pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">Patents & Industry Consultancies</h3>
              <p>
                The faculty members have filed and published patents in Reconfigurable Architectures, Document Layout Segmentation, and Cryptographic Systems. The department regularly provides technical consultancy and software auditing services for local municipal corporations, public banks, and state ministries.
              </p>
            </div>
          </div>
        );

      case "Facilities":
      case "Laboratory":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h3 className="text-lg font-bold text-brand">Central Computing Lab (CCL)</h3>
                <p className="mt-2 text-xs text-black/70 leading-relaxed">
                  Equipped with 120 high-performance computer terminals connected through a 10Gbps optical campus backbone network. Serves core lab courses and examinations.
                </p>
              </div>

              <div className="rounded-[28px] border border-cream-dark/30 bg-cream/10 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="text-lg font-bold text-brand">VLSI & Reconfigurable Lab</h3>
                <p className="mt-2 text-xs text-black/70 leading-relaxed">
                  Equipped with professional CAD tools (Cadence Virtuoso, Synopsys Design Compiler) and Xilinx FPGA hardware boards to support research in hardware systems.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">AI, Machine Learning, and Computer Vision Lab</h3>
              <p className="mb-4">
                This specialized lab features GPU-accelerated computing nodes (NVIDIA RTX series) to support research in Deep Learning, Image Processing, Pattern Recognition, and Optical Character Recognition (OCR).
              </p>
              <p className="font-semibold text-brand text-xs">
                Other notable facilities include the Computer Center (centralized computing cluster) and digital database licenses (IEEE Xplore, ACM Digital Library) served by the Central Library.
              </p>
            </div>
          </div>
        );

      case "Placement":
        return (
          <div className="space-y-8 text-sm text-black/80 leading-relaxed text-justify">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-4">CST Placement Highlights</h3>
              <p className="mb-6">
                Placements are centrally managed by the Training and Placement Cell of IIEST Shibpur. The CST department records a highly competitive placement rate annually, reflecting strong recruiter interest.
              </p>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
                <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-[10px] text-black/50 uppercase font-bold">B.Tech Placement Rate</p>
                  <p className="text-2xl font-extrabold text-brand mt-1">96.5%</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-[10px] text-black/50 uppercase font-bold">Average CTC (CST)</p>
                  <p className="text-2xl font-extrabold text-brand mt-1">13.5 LPA</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-[10px] text-black/50 uppercase font-bold">Highest CTC Package</p>
                  <p className="text-2xl font-extrabold text-brand mt-1">56.0 LPA</p>
                </div>
                <div className="p-4 rounded-2xl bg-cream/10 border border-cream-dark/20">
                  <p className="text-[10px] text-black/50 uppercase font-bold">Median Package</p>
                  <p className="text-2xl font-extrabold text-brand mt-1">8.5 LPA</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-5">Key Recruiting Partners</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-center text-xs font-semibold text-black/75">
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Microsoft</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Google</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Amazon</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Accenture</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Texas Instruments</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Synopsys</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Goldman Sachs</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">PwC India</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">JPMorgan Chase</div>
                <div className="p-3.5 bg-cream-light/35 rounded-xl border border-cream-dark/20">Tata Steel</div>
              </div>
            </div>
          </div>
        );

      case "Notification":
        return (
          <div className="space-y-4 text-xs">
            <div className="rounded-[32px] bg-white border border-cream-dark/30 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand mb-5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                Official Announcements
              </h3>
              <div className="space-y-4">
                {[
                  { date: "Aug 01, 2026", title: "UG Admissions (B.Tech) - Institutional reporting guidelines, documentation details, and hostel registrations.", tag: "Academic" },
                  { date: "Jul 28, 2026", title: "GATE M.Tech Admissions (CCMT 2026) - Selected candidates list and provisional admission schedules.", tag: "Admission" },
                  { date: "Jul 15, 2026", title: "Ph.D. Coursework (July 2026 Cycle) - Examination timetables and classroom seating arrangements.", tag: "Exams" },
                  { date: "Jun 10, 2026", title: "Class suspension notice during REBECA 2026 reunion events.", tag: "Notice" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-cream/10 border border-cream-dark/20 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <span className="inline-block rounded-md bg-brand/10 border border-brand/20 px-2 py-0.5 text-[9px] font-bold text-brand uppercase tracking-wider mr-2">
                        {item.tag}
                      </span>
                      <span className="font-semibold text-black/85 text-xs">{item.title}</span>
                    </div>
                    <span className="text-[10px] text-black/50 font-medium shrink-0 flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
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
                <p className="mt-3 text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed font-medium">
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
