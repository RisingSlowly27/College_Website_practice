import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Sidebar from "@/components/site/Sidebar";

const facultyList = [
  {
    name: "Sekhar Mandal",
    designation: "Professor & Head of Department",
    department: "Computer Science and Technology",
    email: "sekhar@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 576",
    specialization: "Document Image Analysis, Computer Vision, Pattern Recognition",
    image: "/assets/faculty/faculty_3.jpg"
  },
  {
    name: "Jaya Sil",
    designation: "Professor",
    department: "Computer Science and Technology",
    email: "jaya@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 560",
    specialization: "Image Processing, Soft Computing, Bioinformatics",
    image: "/assets/faculty/faculty_2.jpg"
  },
  {
    name: "Asit Kumar Das",
    designation: "Professor",
    department: "Computer Science and Technology",
    email: "asit@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 582",
    specialization: "Data Mining, Machine Learning, Bioinformatics",
    image: "/assets/faculty/faculty_1.jpg"
  },
  {
    name: "Biplab Kumar Sikdar",
    designation: "Professor",
    department: "Computer Science and Technology",
    email: "biplab@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 565",
    specialization: "VLSI Design, Testing and Verification",
    image: "/assets/faculty/faculty_3.jpg"
  },
  {
    name: "Abhik Mukherjee",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "abhik@cs.iiests.ac.in",
    ext: "+91 - 33 - 2684561/62/63",
    specialization: "Computer Networks, Cloud Computing, Distributed Systems",
    image: "/assets/faculty/faculty_1.jpg"
  },
  {
    name: "Apurba Sarkar",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "apurba@cs.iiests.ac.in",
    ext: "0332668-576",
    specialization: "Software Engineering, Data Structures, Algorithms",
    image: "/assets/faculty/faculty_4.jpg"
  },
  {
    name: "Malay Kule",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "malay@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 570",
    specialization: "Reconfigurable Computing, VLSI Design",
    image: "/assets/faculty/faculty_1.jpg"
  },
  {
    name: "Amit Kumar Das",
    designation: "Associate Professor",
    department: "Computer Science and Technology",
    email: "amit@cs.iiests.ac.in",
    ext: "+91 - 33 - 2668 4561 Ext. 572",
    specialization: "Cloud Computing, Wireless Networks",
    image: "/assets/faculty/faculty_3.jpg"
  },
  {
    name: "Amit Biswas",
    designation: "Assistant Professor",
    department: "Computer Science and Technology",
    email: "amitbiswas.cs@faculty.iiests.ac.in",
    ext: "+00 - 00 - 00000/00/00",
    specialization: "Machine Learning, Computer Vision, Speech Processing",
    image: "/assets/faculty/faculty_4.jpg"
  },
  {
    name: "Ashish Kumar Layek",
    designation: "Assistant Professor",
    department: "Computer Science and Technology",
    email: "ashish@cs.iiests.ac.in",
    ext: "000000-000",
    specialization: "Cyber Security, Cryptography, Blockchain",
    image: "/assets/faculty/faculty_1.jpg"
  }
];

const FACULTY_ID_MAP = {
  "Apurba Sarkar": 34,
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
                className="group flex flex-col rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-cream/40 transition hover:shadow-[0_15px_40px_rgba(90,11,29,0.06)] cursor-pointer"
              >
                {/* Photo Container with Figma Leaf shape & Offset Maroon Box */}
                <div className="relative mx-auto w-full aspect-square max-w-[200px] mb-8">
                  {/* Background frame */}
                  <div className="absolute inset-0 translate-x-[-8px] translate-y-[8px] rounded-[90px_0_90px_90px] bg-brand transition-transform duration-300 group-hover:translate-x-[-12px] group-hover:translate-y-[12px]" />
                  {/* Image border/container */}
                  <div className="absolute inset-0 overflow-hidden rounded-[90px_0_90px_90px] border-4 border-white bg-cream-light shadow-inner">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-auto flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand leading-snug group-hover:underline">
                    {faculty.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand/85">
                    {faculty.designation}
                  </p>
                  <p className="mt-2 text-xs text-black/50 leading-normal">
                    {faculty.department}
                  </p>

                  <div className="mt-4 pt-4 border-t border-cream-dark/30 space-y-2 text-xs text-black/75">
                    <p className="flex items-center gap-1.5 truncate">
                      <span className="font-semibold text-brand">Mail:</span>
                      <a 
                        href={`mailto:${faculty.email}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="hover:underline hover:text-brand"
                      >
                        {faculty.email}
                      </a>
                    </p>
                    {faculty.ext && (
                      <p className="flex items-center gap-1.5">
                        <span className="font-semibold text-brand">Ext:</span>
                        <span>{faculty.ext}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-cream-dark/20">
                    <p className="text-[11px] text-black/60 italic line-clamp-2" title={faculty.specialization}>
                      {faculty.specialization}
                    </p>
                  </div>
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
