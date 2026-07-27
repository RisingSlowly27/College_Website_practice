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
    designation: "Associate Professor",
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
  }
];

const FACULTY_ID_MAP = {
  "Apurba Sarkar": 34,
  "Manas Hira": 36,
  "Ashish Kumar Layek": 38,
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

  const filteredFaculty = facultyList.filter((faculty) => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDesignation = designationFilter === "All" || 
      faculty.designation.toLowerCase().includes(designationFilter.toLowerCase());

    return matchesSearch && matchesDesignation;
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
                <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-[60px] lg:leading-[70px]">
                  Faculty <span className="text-brand-gold">Members</span>
                </h1>
                <p className="mt-3 text-xs text-white/80 max-w-xl leading-relaxed">
                  Our distinguished members driving research, academic excellence, and innovation in computer science.
                </p>
                
                {/* Search & Filters overlaid in Hero */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-6 pt-4 border-t border-white/20">
                  <div className="relative flex-1 max-w-xs">
                    <input
                      type="text"
                      placeholder="Search Faculty Name or Area..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-full border border-white/10 bg-white/20 backdrop-blur-md px-5 py-2 text-xs text-white placeholder-white/60 outline-none focus:bg-white focus:text-black focus:placeholder-black/40"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Filter:</span>
                    <select
                      value={designationFilter}
                      onChange={(e) => setDesignationFilter(e.target.value)}
                      className="rounded-full border border-white/10 bg-white/20 backdrop-blur-md px-4 py-2 text-xs text-white font-medium outline-none cursor-pointer focus:bg-white focus:text-black"
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
