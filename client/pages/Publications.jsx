import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";
import publicationsData from "@/lib/publications-data.json";

// Department HOD & Contact details mapping
const DEPT_DETAILS = {
  "Computer Science and Technology": {
    title: "Computer Science and Technology",
    hod: "Prof. Sekhar Mandal",
    email: "hod.cs@iiests.ac.in",
    phone: "+91 - 33 - 2668 4561 Ext. 576",
    research: "Document Image Analysis, Computer Vision, Pattern Recognition, Software Engineering, Reconfigurable VLSI, Cryptography, Blockchain.",
    color: "hsl(346, 98%, 25%)",
    initials: "CST"
  },
  "Information Technology": {
    title: "Information Technology",
    hod: "Prof. Hafizur Rahaman",
    email: "hod.it@iiests.ac.in",
    phone: "+91 - 33 - 2668 4561 Ext. 572",
    research: "Hardware Security, IoT Security, Wireless Sensor Networks, Medical Image Processing, Computational Linguistics, Network-on-Chip (NoC), Chaos Encryption.",
    color: "hsl(222, 47%, 11%)",
    initials: "IT"
  },
  "Electrical Engineering": {
    title: "Electrical Engineering",
    hod: "Prof. Konika Das Bhattacharya",
    email: "hod.ee@iiests.ac.in",
    phone: "+91 - 33 - 2668 4561 Ext. 582",
    research: "Smart Hybrid Microgrids, Control Systems, Power System Dynamics, Power Grid Optimization, Induction Motor Design.",
    color: "hsl(39, 66%, 26%)",
    initials: "EE"
  }
};

// Institutional College profile mapping
const COLLEGE_DETAILS = {
  title: "Indian Institute of Engineering Science and Technology, Shibpur",
  subtitle: "Academic Publications Portal",
  description: "IIEST Shibpur (erstwhile Bengal Engineering College, Estd. 1856) is a premier national institution driving innovation, advanced engineering research, and academic excellence in engineering, science, and technology.",
  logo: "https://api.builder.io/api/v1/image/assets/TEMP/4fd7b16aee8f34c73342ccc67508424664a8da01?width=200",
  address: "Botanic Garden, Howrah - 711103, West Bengal, India",
  email: "pro@iiests.ac.in",
  phone: "+91 (033) 2668 4561 to 63",
  website: "https://www.iiests.ac.in"
};

// Professor mapping with details matching author_id in publications
const PROFESSORS_DATA = {
  "Computer Science and Technology": [
    {
      id: 34,
      name: "Prof. Apurba Sarkar",
      designation: "Associate Professor",
      email: "apurba@cs.iiests.ac.in",
      phone: "0332668-576",
      research: "Software Engineering, Digital Geometry, Data Structures, Algorithms",
      color: "hsl(346, 70%, 30%)",
      initials: "AS",
      image: "/assets/faculty/ApurbaSir.webp"
    },
    {
      id: 36,
      name: "Prof. Manas Hira",
      designation: "Professor",
      email: "manashira@cs.iiests.ac.in",
      phone: "+91 - 33 - 2668 4561 Ext. 575",
      research: "Formal Circuit Verification, Digital Geometry, Compiler Design",
      color: "hsl(39, 70%, 30%)",
      initials: "MH",
      image: "/assets/faculty/ManasSir.webp"
    },
    {
      id: 38,
      name: "Prof. Ashish Kumar Layek",
      designation: "Assistant Professor",
      email: "ashish@cs.iiests.ac.in",
      phone: "000000-000",
      research: "Fake News Detection, Chemical Equation Segmentation, Cyber Security",
      color: "hsl(200, 70%, 30%)",
      initials: "AL",
      image: "/assets/faculty/ashishlayek_cst.webp"
    }
  ],
  "Information Technology": [
    {
      id: 40,
      name: "Prof. Indrajit Banerjee",
      designation: "Associate Professor",
      email: "indrajit@it.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Wireless Sensor Networks, Energy Efficient Routing, IoT Security",
      color: "hsl(120, 50%, 30%)",
      initials: "IB",
      image: "/assets/faculty/faculty_1.jpg"
    },
    {
      id: 42,
      name: "Prof. Arindam Biswas",
      designation: "Associate Professor",
      email: "arindam@it.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Medical Image Registration, Authorship Attribution, Bengali NLP",
      color: "hsl(280, 50%, 30%)",
      initials: "AB",
      image: "/assets/faculty/faculty_3.jpg"
    },
    {
      id: 44,
      name: "Prof. Prasun Ghosal",
      designation: "Associate Professor",
      email: "prasun@it.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Network-on-Chip (NoC) Design, Image Watermarking, Hardware Security",
      color: "hsl(340, 60%, 30%)",
      initials: "PG",
      image: "/assets/faculty/faculty_2.jpg"
    }
  ],
  "Electrical Engineering": [
    {
      id: 46,
      name: "Prof. Konika Das Bhattacharya",
      designation: "Professor",
      email: "konika@ee.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Smart Hybrid Microgrids, Solar PV Voltage Stability, Ramp-Rate Control",
      color: "hsl(10, 70%, 35%)",
      initials: "KD",
      image: "/assets/faculty/faculty_2.jpg"
    },
    {
      id: 48,
      name: "Prof. Abhijit De",
      designation: "Associate Professor",
      email: "abhijit@ee.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Power System Dynamics, Smart Grid Optimization, Grid Security State Predictor",
      color: "hsl(210, 60%, 35%)",
      initials: "AD",
      image: "/assets/faculty/faculty_1.jpg"
    },
    {
      id: 50,
      name: "Prof. Amit Barman",
      designation: "Associate Professor",
      email: "amitbarman@ee.iiests.ac.in",
      phone: "+91-33-2668-4561",
      research: "Induction Motor Design Optimization, Power Flow Capacity Estimation",
      color: "hsl(160, 50%, 30%)",
      initials: "AM",
      image: "/assets/faculty/faculty_3.jpg"
    }
  ]
};

// Flatten professors mapping for ID lookup
const ALL_PROFESSORS = Object.values(PROFESSORS_DATA).flat();

export default function Publications() {
  const [searchParams] = useSearchParams();

  // Navigation Stage: FALSE = already opened by default on Stage 2 Explorer Grid
  const [showSelector, setShowSelector] = useState(false);

  // Selection form filter states
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedProf, setSelectedProf] = useState("all");

  // Active explorer states
  const [scopeDept, setScopeDept] = useState("all");
  const [scopeProf, setScopeProf] = useState("all");

  // Real-time filters (Center / Right Pane)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortOrder, setSortOrder] = useState("year-desc");

  // Accordion details visibility mapping
  const [expandedPubIds, setExpandedPubIds] = useState({});

  // Sync state with URL search params when they change
  useEffect(() => {
    const dept = searchParams.get("dept") || "all";
    const prof = searchParams.get("prof") || "all";
    setSelectedDept(dept);
    setSelectedProf(prof);
    setScopeDept(dept);
    setScopeProf(prof);
    setSearchQuery("");
    setSelectedType("all");
    setExpandedPubIds({});
    setShowSelector(false);
  }, [searchParams]);

  // 1. Dynamic dropdown professor filter
  const selectDeptProfessors = selectedDept === "all" ? [] : PROFESSORS_DATA[selectedDept] || [];

  // Reset selected professor if department switches and the selected professor does not belong to the selected department
  useEffect(() => {
    if (selectedDept === "all") {
      setSelectedProf("all");
    } else {
      const profs = PROFESSORS_DATA[selectedDept] || [];
      const belongs = profs.some(p => p.id.toString() === selectedProf.toString());
      if (!belongs && selectedProf !== "all") {
        setSelectedProf("all");
      }
    }
  }, [selectedDept]);

  // Form submit handler
  const handleExploreSubmit = (e) => {
    e.preventDefault();
    setScopeDept(selectedDept);
    setScopeProf(selectedProf);
    setSearchQuery("");
    setSelectedType("all");
    setExpandedPubIds({});
    setShowSelector(false);
  };

  // Switch back selection
  const handleModifySelection = () => {
    setShowSelector(true);
  };

  // Resolve scope info for Profile Card (Left Pane)
  const getScopeProfile = () => {
    if (scopeDept === "all") {
      return { type: "college", details: COLLEGE_DETAILS };
    } else if (scopeProf === "all") {
      return { type: "department", details: DEPT_DETAILS[scopeDept] };
    } else {
      const prof = ALL_PROFESSORS.find(p => p.id.toString() === scopeProf.toString());
      return { type: "professor", details: prof };
    }
  };

  const scopeProfile = getScopeProfile();

  // Helper to determine department by author_id
  const getAuthorDept = (authorId) => {
    for (const [dept, profs] of Object.entries(PROFESSORS_DATA)) {
      if (profs.some(p => p.id.toString() === authorId.toString())) {
        return dept;
      }
    }
    return "";
  };

  // Filter Publications based on active scope + search + categories
  const filteredPubs = publicationsData.filter((pub) => {
    // 1. Department Scope
    const cardDept = getAuthorDept(pub.author_id);
    const matchesDept = scopeDept === "all" || cardDept === scopeDept;

    // 2. Professor Scope
    const matchesProf = scopeProf === "all" || pub.author_id.toString() === scopeProf.toString();

    const isWithinScope = matchesDept && matchesProf;
    if (!isWithinScope) return false;

    // 3. Search Query
    const searchString = `${pub.title} ${pub.authors} ${pub.journal}`.toLowerCase();
    const matchesSearch = searchQuery === "" || searchString.includes(searchQuery.toLowerCase());

    // 4. Type Tab Category
    let matchesType = false;
    if (selectedType === "all") {
      matchesType = true;
    } else if (selectedType === "Journal Paper") {
      matchesType = pub.type === "Journal Paper";
    } else if (selectedType === "Conference Paper") {
      matchesType = pub.type === "Conference Paper";
    } else if (selectedType === "Book Chapter") {
      matchesType = pub.type === "Book Chapter";
    } else if (selectedType === "others") {
      matchesType = pub.type !== "Journal Paper" && pub.type !== "Conference Paper" && pub.type !== "Book Chapter";
    }

    return matchesSearch && matchesType;
  });

  // Calculate dynamic type tab counts within CURRENT active scope
  const scopePubs = publicationsData.filter((pub) => {
    const cardDept = getAuthorDept(pub.author_id);
    const matchesDept = scopeDept === "all" || cardDept === scopeDept;
    const matchesProf = scopeProf === "all" || pub.author_id.toString() === scopeProf.toString();
    return matchesDept && matchesProf;
  });

  const categoryCounts = {
    all: scopePubs.length,
    journal: scopePubs.filter(p => p.type === "Journal Paper").length,
    conference: scopePubs.filter(p => p.type === "Conference Paper").length,
    book: scopePubs.filter(p => p.type === "Book Chapter").length,
    others: scopePubs.filter(p => p.type !== "Journal Paper" && p.type !== "Conference Paper" && p.type !== "Book Chapter").length
  };

  // Sort Publications
  const sortedPubs = [...filteredPubs].sort((a, b) => {
    if (sortOrder === "year-desc") {
      return b.year - a.year;
    } else if (sortOrder === "year-asc") {
      return a.year - b.year;
    } else if (sortOrder === "title-asc") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Toggle Accordion Details mapping
  const toggleDetails = (pubId) => {
    setExpandedPubIds(prev => ({
      ...prev,
      [pubId]: !prev[pubId]
    }));
  };

  return (
    <Layout>
      {/* Top Section: Left Sidebar nested inside the main Hero Banner (same as Home page) - NO px padding */}
      <div className="mx-auto max-w-[1720px] py-6 lg:py-8 px-0">
        <div className="relative overflow-hidden rounded-[36px] bg-cream shadow-sm">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[231/130] max-h-[620px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e8e137ce88b520c343c3dcfd6520882346fe123?width=3920"
              alt="Publications explorer background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark overlay to ensure text/sidebar readability */}
            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 z-10">
              {/* Left Side: Sidebar */}
              <div className="shrink-0">
                <Sidebar />
              </div>

              {/* Right Side: Stage 1 Form or Stage 2 Scope details */}
              {showSelector ? (
                /* STAGE 1 Selector Form inside the banner image (glassmorphic style!) */
                <div className="flex-1 w-full max-w-xl mx-auto flex flex-col justify-center items-center text-center text-white bg-black/45 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <h2 className="text-2xl font-extrabold text-white">Academic Publications Explorer</h2>
                  <p className="mt-1 text-[11px] text-white/70">
                    Select a Department and Faculty Researcher to explore their publications.
                  </p>
                  
                  <form onSubmit={handleExploreSubmit} className="flex flex-col gap-3 text-left w-full mt-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-white/90">Department</label>
                      <select
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/20 px-4 py-2 text-xs text-white outline-none cursor-pointer focus:bg-white focus:text-black"
                        required
                      >
                        <option className="text-black" value="all">All Departments</option>
                        <option className="text-black" value="Computer Science and Technology">Computer Science & Technology (CST)</option>
                        <option className="text-black" value="Information Technology">Information Technology (IT)</option>
                        <option className="text-black" value="Electrical Engineering">Electrical Engineering (EE)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-white/90">Faculty Researcher</label>
                      <select
                        value={selectedProf}
                        onChange={(e) => setSelectedProf(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/20 px-4 py-2 text-xs text-white outline-none cursor-pointer focus:bg-white focus:text-black disabled:opacity-50"
                        disabled={selectedDept === "all"}
                        required
                      >
                        <option className="text-black" value="all">All Professors</option>
                        {selectDeptProfessors.map(prof => (
                          <option key={prof.id} value={prof.id} className="text-black">{prof.name}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 rounded-xl bg-brand py-2 text-xs font-bold text-white transition hover:bg-brand-dark shadow-sm"
                    >
                      Explore Publications
                    </button>
                  </form>
                </div>
              ) : (
                /* STAGE 2 Scope Details inside the banner image (floating panel styling!) */
                <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 text-white lg:pl-12">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Current Explorer Scope</span>
                    <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-4xl lg:text-[42px] lg:leading-[52px]">
                      {scopeDept === "all" ? COLLEGE_DETAILS.title : scopeProf === "all" ? scopeDept : ALL_PROFESSORS.find(p => p.id.toString() === scopeProf.toString())?.name}
                    </h1>
                    <p className="text-xs text-white/85 mt-1.5 font-medium">
                      {scopeDept === "all" ? COLLEGE_DETAILS.subtitle : scopeProf === "all" ? `Showing all research publications from the Department of ${scopeDept}.` : `Showing publications for faculty researcher from Department of ${scopeDept}.`}
                    </p>
                  </div>
                  <button
                    onClick={handleModifySelection}
                    className="rounded-xl border border-white bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-brand shrink-0 shadow-sm"
                  >
                    Change Selection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Explorer Grid: Full Width below top section - NO px padding */}
      {!showSelector && (
        <div className="mx-auto max-w-[1720px] py-8 lg:py-12 px-0 animate-fadeIn">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
            
            {/* 2.1 Left Pane (Profile/Dept/College Card) */}
            <div className="xl:col-span-1 xl:sticky xl:top-6">
              <div className="bg-white border border-cream-dark/40 rounded-3xl p-6 shadow-sm text-center">
                {scopeProfile.type === "college" && (
                  <>
                    <div className="h-20 w-auto flex items-center justify-center mb-6">
                      <img src={scopeProfile.details.logo} alt="IIEST logo" className="max-h-full max-w-[120px] object-contain" />
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-dark leading-snug">{scopeProfile.details.title}</h3>
                    <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-1">{scopeProfile.details.subtitle}</p>
                    <hr className="my-5 border-cream-dark/30" />
                    <p className="text-xs text-black/70 leading-relaxed text-justify mb-5">{scopeProfile.details.description}</p>
                    <hr className="my-5 border-cream-dark/30" />
                    <div className="space-y-3 text-left text-xs text-black/85">
                      <p className="flex items-start gap-2">
                        <span className="font-bold text-brand shrink-0">Address:</span>
                        <span>{scopeProfile.details.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-brand">Email:</span>
                        <a href={`mailto:${scopeProfile.details.email}`} className="hover:underline hover:text-brand">{scopeProfile.details.email}</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-brand">Phone:</span>
                        <span>{scopeProfile.details.phone}</span>
                      </p>
                    </div>
                  </>
                )}

                {scopeProfile.type === "department" && (
                  <>
                    <div className="h-16 w-16 rounded-full bg-cream-dark flex items-center justify-center mx-auto mb-5 text-brand">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-extrabold text-brand-dark leading-snug">{scopeProfile.details.title}</h3>
                    <p className="text-[10px] font-bold text-brand-gold uppercase tracking-wider mt-1">Department View</p>
                    <hr className="my-5 border-cream-dark/30" />
                    <div className="text-left mb-4">
                      <div className="text-[10px] font-bold text-black/40 uppercase tracking-wide">Head of Department</div>
                      <p className="text-sm font-bold text-brand mt-0.5">{scopeProfile.details.hod}</p>
                    </div>
                    <div className="text-left mb-5">
                      <div className="text-[10px] font-bold text-black/40 uppercase tracking-wide mb-1">Research Areas</div>
                      <p className="text-xs text-black/70 leading-relaxed text-justify">{scopeProfile.details.research}</p>
                    </div>
                    <hr className="my-5 border-cream-dark/30" />
                    <div className="space-y-2 text-left text-xs text-black/85">
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-brand">Email:</span>
                        <a href={`mailto:${scopeProfile.details.email}`} className="hover:underline hover:text-brand">{scopeProfile.details.email}</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-brand">Phone:</span>
                        <span>{scopeProfile.details.phone}</span>
                      </p>
                    </div>
                  </>
                )}

                {scopeProfile.type === "professor" && (
                  <div className="group text-center">
                    {/* Photo Container with Figma Leaf shape & Offset Maroon Box */}
                    <div className="relative mx-auto aspect-square w-[87%] pt-[8%] mb-4">
                      {/* Background frame */}
                      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-tl-[48%] rounded-br-[62%] bg-gradient-to-b from-brand to-neutral-900 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] transition duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
                      {/* Image */}
                      <img
                        src={scopeProfile.details.image || "/placeholder.svg"}
                        alt={scopeProfile.details.name}
                        className="absolute inset-0 h-full w-full rounded-tl-[48%] rounded-br-[62%] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="px-8 pb-8 pt-6 text-center flex flex-col">
                      <h3 className="text-2xl font-bold text-brand leading-snug group-hover:underline">
                        {scopeProfile.details.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-brand sm:text-base">
                        {scopeProfile.details.designation}
                      </p>
                      <div className="mt-4 text-sm font-light leading-relaxed text-black">
                        <p>{scopeDept}</p>
                        <div className="mt-4 pt-4 border-t border-cream-dark/20 space-y-1 text-left">
                          <p className="truncate">
                            <span className="font-semibold text-brand">Mail: </span>
                            <a href={`mailto:${scopeProfile.details.email}`} className="hover:underline hover:text-brand truncate">
                              {scopeProfile.details.email}
                            </a>
                          </p>
                          <p>
                            <span className="font-semibold text-brand">Phone: </span>
                            {scopeProfile.details.phone}
                          </p>
                        </div>
                      </div>

                      {scopeProfile.details.research && (
                        <div className="mt-4 pt-3 border-t border-cream-dark/20 text-center">
                          <p className="text-[11px] text-black/60 italic" title={scopeProfile.details.research}>
                            {scopeProfile.details.research}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 2.2 Center Pane (Publications list) */}
            <div className="xl:col-span-2 relative flex flex-col h-[750px] bg-white border border-cream-dark/40 rounded-[32px] shadow-sm overflow-hidden">
              {/* Search bar & Counts badge - Absolute positioning at top */}
              <div className="absolute top-0 left-0 right-0 z-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-white border-b border-cream-dark/20 px-6 py-5 gap-4">
                <h3 className="text-lg font-bold text-brand leading-none">
                  Publications List (<span className="text-brand-gold font-extrabold">{sortedPubs.length}</span>)
                </h3>
                <div className="relative flex-1 max-w-xs">
                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-brand/20 bg-white pl-9 pr-4 py-2.5 text-sm text-black outline-none focus:border-brand"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Scrollable Publications Card List - Offset by header height */}
              <div className="flex-1 overflow-y-auto mt-[120px] sm:mt-[80px] px-6 pb-6 pt-2 flex flex-col gap-5 scrollbar-thin">
                {sortedPubs.length > 0 ? (
                  sortedPubs.map((pub) => (
                    <div
                      key={pub.id}
                      className="bg-white border border-cream-dark/30 rounded-3xl p-6 shadow-sm transition hover:shadow-md border-t-4 border-t-brand"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Rich styled, visually appealing color elements for publication types */}
                          <span className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                            pub.type === "Journal Paper"
                              ? "bg-blue-600/10 text-blue-700 border border-blue-600/20"
                              : pub.type === "Conference Paper"
                              ? "bg-amber-600/10 text-amber-700 border border-amber-600/20"
                              : pub.type === "Book Chapter"
                              ? "bg-purple-600/10 text-purple-700 border border-purple-600/20"
                              : "bg-teal-600/10 text-teal-700 border border-teal-600/20"
                          }`}>
                            {pub.type}
                          </span>
                          {pub.year > 0 && (
                            <span className="bg-brand text-white border border-brand/20 px-3 py-0.5 text-xs font-bold rounded-md shadow-sm">
                              {pub.year}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bigger, more appealing publication title text */}
                      <h4 className="text-xl font-extrabold text-brand-dark mt-4 leading-snug hover:text-brand transition-colors">
                        {pub.title}
                      </h4>

                      {/* Styled authors segment */}
                      <p className="text-sm font-medium text-black/80 mt-3.5 leading-relaxed">
                        <span className="text-brand font-bold mr-1.5">Authors:</span>
                        {pub.authors}
                      </p>

                      {/* Styled published venue segment */}
                      <p className="text-sm text-black/70 mt-1.5 leading-relaxed italic">
                        <span className="text-brand font-bold mr-1.5 not-italic">Published in:</span>
                        {pub.journal}
                      </p>

                      {/* Accordion details toggle */}
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-cream-dark/20 gap-3">
                        <button
                          onClick={() => toggleDetails(pub.id)}
                          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold ${
                            expandedPubIds[pub.id] ? "text-brand-gold" : "text-brand"
                          } hover:underline transition-colors`}
                        >
                          <svg className={`h-4 w-4 transition-transform ${expandedPubIds[pub.id] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                          {expandedPubIds[pub.id] ? "Hide Details" : "Show Details"}
                        </button>

                        {pub.url && pub.url !== "#" && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs sm:text-sm font-bold text-white transition hover:bg-brand-dark shadow-md"
                          >
                            View Paper
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {/* Accordion Detailed Metadata Block */}
                      {expandedPubIds[pub.id] && (
                        <div className="bg-cream/10 border border-brand/20 rounded-2xl p-5 mt-4 text-sm text-black/85 animate-slideDown shadow-inner">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand mb-0.5">DOI Link</span>
                              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-blue-600 hover:underline truncate" title={pub.url}>
                                {pub.url || "N/A"}
                              </a>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand mb-0.5">Publication Type</span>
                              <span className="font-semibold text-black">{pub.type}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand mb-0.5">Volume / Issue</span>
                              <span className="font-semibold text-black">12 / 4 (Default)</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand mb-0.5">SCI/Scopus Indexed</span>
                              <span className="font-semibold text-black">Yes</span>
                            </div>
                            <div className="flex flex-col col-span-1 md:col-span-2 pt-2.5 border-t border-cream-dark/10">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand mb-1">Full Citation</span>
                              <span className="text-xs sm:text-sm text-justify leading-relaxed text-black/90">
                                {pub.authors} ({pub.year}). "{pub.title}". <span className="font-semibold italic text-brand-dark">{pub.journal}</span>.
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center rounded-2xl border border-dashed border-brand/20 bg-cream/10">
                    <p className="text-sm font-medium text-black/55">No publications found matching your active criteria.</p>
                    <button
                      onClick={() => { setSearchQuery(""); setSelectedType("all"); }}
                      className="mt-3 px-4 py-2 rounded-lg bg-brand text-white font-bold text-xs hover:bg-brand-dark transition"
                    >
                      Reset Search Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 2.3 Right Pane (Sort & Category Tabs) */}
            <div className="xl:col-span-1 xl:sticky xl:top-6 flex flex-col gap-6">
              {/* Sort Order Selector */}
              <div className="bg-white border border-cream-dark/40 rounded-2xl p-5 shadow-sm">
                <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-wider mb-3">Sort Order</h4>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full rounded-lg border border-brand/20 bg-white px-3 py-2 text-sm font-semibold text-brand outline-none focus:border-brand cursor-pointer"
                >
                  <option value="year-desc">Year (Newest)</option>
                  <option value="year-asc">Year (Oldest)</option>
                  <option value="title-asc">Title (A-Z)</option>
                </select>
              </div>

              {/* Filter by Type */}
              <div className="bg-white border border-cream-dark/40 rounded-2xl p-5 shadow-sm">
                <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-wider mb-4">Filter by Type</h4>
                <div className="flex flex-col gap-2">
                  {[
                    { type: "all", label: "All Papers", count: categoryCounts.all },
                    { type: "Journal Paper", label: "Journal Papers", count: categoryCounts.journal },
                    { type: "Conference Paper", label: "Conferences", count: categoryCounts.conference },
                    { type: "Book Chapter", label: "Book Chapters", count: categoryCounts.book },
                    { type: "others", label: "Others", count: categoryCounts.others }
                  ].map((item) => (
                    <button
                      key={item.type}
                      onClick={() => setSelectedType(item.type)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold transition-all text-left ${
                        selectedType === item.type
                          ? "bg-brand/10 border-l-4 border-brand-gold text-brand"
                          : "text-black hover:bg-cream/15"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                        selectedType === item.type
                          ? "bg-brand text-white"
                          : "bg-cream-dark text-black/60"
                      }`}>
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </Layout>
  );
}
