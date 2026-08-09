import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";

const facultyList = [
  {
    name: "Apurba Sarkar",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "apurba@cs.iiests.ac.in",
    ext: "0332668-576",
    specialization: "Software Engineering, Data Structures, Algorithms",
    image: "/assets/faculty/ApurbaSir.webp"
  },
  {
    name: "Manas Hira",
    designation: "Professor",
    department: "Computer Science and Technology",
    email: "manas@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 575",
    specialization: "Theoretical Computer Science, Circuit Verification using Temporal Logic, Image Generation and Recognition",
    image: "/assets/faculty/ManasSir.webp"
  },
  {
    name: "Surajeet Ghosh",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "surajeet@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 576",
    specialization: "Computer Architecture, Computational Architecture for NGS, FPGA-Based Embedded Systems Design",
    image: "/assets/faculty/surajeetSir.webp"
  },
  {
    name: "Ashish Kumar Layek",
    designation: "Assistant Professor",
    department: "Computer Science and Technology",
    email: "ashish@cs.iiests.ac.in",
    ext: "000000-000",
    specialization: "Cyber Security, Cryptography, Blockchain",
    image: "/assets/faculty/ashishlayek_cst.webp"
  },
  {
    name: "Abhinandan De",
    designation: "Professor",
    department: "Electrical Engineering",
    email: "ade@ee.iiests.ac.in",
    ext: "+91-33-2668-4561",
    specialization: "Power Systems Dynamics, Smart Grid Optimization, High Voltage Engineering, Machine Learning & AI",
    image: "/assets/faculty/abhinandan_de.webp"
  },
  {
    name: "Amal Barman",
    designation: "Associate Professor",
    department: "Electrical Engineering",
    email: "ab@ee.iiests.ac.in",
    ext: "+91-33-2668-4561 Ext. 571",
    specialization: "High Performance Computing, Open Source Software, Computer Applications in Power Systems, Internet of Things",
    image: "/assets/faculty/amal_barman.webp"
  },
  {
    name: "Aparajita Sengupta",
    designation: "Professor",
    department: "Electrical Engineering",
    email: "asg@ee.iiests.ac.in",
    ext: "+91-33-2668-4561 Ext. 558",
    specialization: "Nonlinear Estimation, Robust and Nonlinear Control, Control LMIs, Power Systems Control",
    image: "/assets/faculty/aparajita_sengupta.webp"
  },
  {
    name: "Debabrata Mazumder",
    designation: "Professor",
    department: "Civil Engineering",
    email: "debabrata@civil.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 654",
    specialization: "Environmental Engineering, Wastewater Treatment, Biofilms, Waste Management",
    image: "/assets/faculty/Debabrata_Mazumder.webp"
  },
  {
    name: "Gurudas Kar",
    designation: "Assistant Professor",
    department: "Civil Engineering",
    email: "gurudas@civil.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561",
    specialization: "Computational Mechanics, Crystalline Solids, Finite Element Modelling, Metallurgy",
    image: "/assets/faculty/Gurudas Kar.webp"
  },
  {
    name: "Asok Adak",
    designation: "Professor",
    department: "Civil Engineering",
    email: "asok@civil.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 713",
    specialization: "Environmental Engineering, Adsorption, Water and Wastewater Treatment, Contaminant Remediation, Solid Waste Management",
    image: "/assets/faculty/asok_adak.webp"
  }
];

const FACULTY_ID_MAP = {
  "Apurba Sarkar": 34,
  "Manas Hira": 36,
  "Ashish Kumar Layek": 38,
  "Surajeet Ghosh": 99,
  "Abhinandan De": 48,
  "Amal Barman": 50,
  "Aparajita Sengupta": 46,
  "Debabrata Mazumder": 60,
  "Gurudas Kar": 62,
  "Asok Adak": 64
};

const getPublicationUrl = (faculty) => {
  const mappedId = FACULTY_ID_MAP[faculty.name];
  if (mappedId) {
    return `/publication?dept=${encodeURIComponent(faculty.department)}&prof=${mappedId}`;
  }
  return `/publication?dept=${encodeURIComponent(faculty.department)}&prof=all`;
};

export default function FacultyMembers() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [designationFilter, setDesignationFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");

  const filteredFaculty = facultyList.filter((faculty) => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDesignation = designationFilter === "All" || 
      faculty.designation.toLowerCase().includes(designationFilter.toLowerCase());

    const matchesDept = deptFilter === "All" ||
      faculty.department.toLowerCase().includes(deptFilter.toLowerCase());

    return matchesSearch && matchesDesignation && matchesDept;
  });

  return (
    <Layout>
      {/* Top Section: Sidebar nested INSIDE the main Hero Banner (same as Home page) */}
      <div className="mx-auto max-w-[1720px] py-6 lg:py-8 px-0">
        <div className="relative overflow-hidden rounded-[36px] bg-cream shadow-sm">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[231/130] max-h-[620px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e8e137ce88b520c343c3dcfd6520882346fe123?width=3920"
              alt="Faculty Members page background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark overlay to ensure text/sidebar readability */}
            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 z-10">
              {/* Left Side: Sidebar */}
              <div className="shrink-0">
                <Sidebar />
              </div>

              {/* Right Side: Faculty Members Page Title and Description */}
              <div className="flex-1 flex flex-col justify-center lg:pl-12 text-white">
                <h1 className="text-3xl font-bold leading-tight text-brand drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)] sm:text-5xl lg:text-[64px] lg:leading-[74px]">
                  Faculty Members
                </h1>
                <p className="mt-3 text-xs sm:text-sm text-brand/85 drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)] max-w-xl leading-relaxed font-semibold">
                  Our distinguished members driving research, academic excellence, and innovation in computer science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Search & Filters Bar with Reddish Background (bg-brand) */}
      <div className="mx-auto max-w-[1720px] px-0 mb-8 animate-fadeIn">
        <div className="bg-brand p-5 sm:p-6 rounded-[28px] shadow-[0_4px_25px_rgba(90,11,29,0.18)] flex flex-col md:flex-row items-center justify-between gap-5 text-white">
          <div className="w-full md:max-w-md">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-2 pl-1">Search Researcher</label>
            <input
              type="text"
              placeholder="Search by faculty name or research area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-cream-dark/20 bg-white px-5 py-3 text-sm text-black placeholder-neutral-500 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-end">
            <div className="flex flex-col gap-2 w-full sm:w-[220px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-brand-gold pl-1">Department</label>
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="w-full rounded-2xl border border-cream-dark/20 bg-white px-5 py-3 text-sm text-black font-semibold outline-none cursor-pointer focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all shadow-sm"
              >
                <option className="text-black" value="All">All Departments</option>
                <option className="text-black" value="Computer Science and Technology">Computer Science & Tech (CST)</option>
                <option className="text-black" value="Electrical Engineering">Electrical Engineering (EE)</option>
                <option className="text-black" value="Civil Engineering">Civil Engineering (CE)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-[220px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-brand-gold pl-1">Designation</label>
              <select
                value={designationFilter}
                onChange={(e) => setDesignationFilter(e.target.value)}
                className="w-full rounded-2xl border border-cream-dark/20 bg-white px-5 py-3 text-sm text-black font-semibold outline-none cursor-pointer focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all shadow-sm"
              >
                <option className="text-black" value="All">All Designations</option>
                <option className="text-black" value="Professor">Professors</option>
                <option className="text-black" value="Associate Professor">Associate Professors</option>
                <option className="text-black" value="Assistant Professor">Assistant Professors</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Full Width below top section */}
      <div className="mx-auto max-w-[1720px] py-8 lg:py-12 px-0">
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredFaculty.map((faculty) => (
              <div
                key={faculty.name}
                onClick={() => navigate(getPublicationUrl(faculty))}
                className="relative w-full max-w-[369px] mx-auto rounded-tl-[46%] bg-white shadow-[0_4px_23px_0_rgba(0,0,0,0.16)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(90,11,29,0.12)] cursor-pointer group flex flex-col"
              >
                {/* Photo Container with Figma Leaf shape & Offset Maroon Box */}
                <div className="relative mx-auto aspect-square w-[87%] pt-[8%] mb-4">
                  {/* Background frame */}
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-tl-[48%] rounded-br-[62%] bg-gradient-to-b from-brand to-neutral-900 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] transition duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
                  {/* Image */}
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="absolute inset-0 h-full w-full rounded-tl-[48%] rounded-br-[62%] object-cover shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="px-8 pb-8 pt-6 text-center flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-brand leading-snug group-hover:underline">
                    {faculty.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand sm:text-base">
                    {faculty.designation}
                  </p>
                  <div className="mt-4 text-sm font-light leading-relaxed text-black flex-1 flex flex-col justify-between">
                    <div>
                      <p>{faculty.department}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-cream-dark/20 space-y-1">
                      <p className="truncate">
                        <span className="font-semibold text-brand">Mail: </span>
                        <a 
                          href={`mailto:${faculty.email}`} 
                          onClick={(e) => e.stopPropagation()} 
                          className="hover:underline hover:text-brand"
                        >
                          {faculty.email}
                        </a>
                      </p>
                      {faculty.ext && (
                        <p>
                          <span className="font-semibold text-brand">Ext: </span>
                          {faculty.ext}
                        </p>
                      )}
                    </div>
                  </div>

                  {faculty.specialization && (
                    <div className="mt-4 pt-3 border-t border-cream-dark/20 text-center">
                      <p className="text-[11px] text-black/60 italic line-clamp-2" title={faculty.specialization}>
                        {faculty.specialization}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-brand/20 bg-cream/10">
            <p className="text-lg text-black/55">No faculty members found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setDesignationFilter("All"); }}
              className="mt-4 px-5 py-2.5 rounded-full bg-brand text-white font-medium text-sm hover:bg-brand-dark transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
