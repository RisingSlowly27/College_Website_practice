import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/nav-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="bg-cream">
        <div className="mx-auto flex max-w-[1720px] flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:py-5 lg:px-10">
          <div className="flex items-center gap-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4fd7b16aee8f34c73342ccc67508424664a8da01?width=330"
              alt="IIEST Shibpur logo"
              className="h-16 w-16 shrink-0 sm:h-[110px] sm:w-[110px]"
            />
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-black sm:text-sm md:text-base">
                ভারতীয় প্রকৌশল বিজ্ঞান এবং প্রযুক্তিবিদ্যা প্রতিষ্ঠান, শিবপুর
              </p>
              <p className="truncate text-[11px] font-medium text-black sm:text-sm md:text-base">
                भारतीय अभियांत्रिकी विज्ञान एवं प्रौद्योगिकी संस्थान, शिवपुर
              </p>
              <p className="truncate text-[11px] font-medium leading-tight text-black sm:text-sm md:text-base">
                INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLOGY, SHIBPUR
              </p>
              <p className="mt-1 text-[11px] font-medium text-brand sm:text-sm">
                Erstwhile B.E. College, Estd. 1856
              </p>
              <p className="text-[10px] font-medium text-black/60 sm:text-xs">
                An Institute of National Importance under Ministry of
                Education, Government of India
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-5">
            <div className="flex items-center gap-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/468786b7c314a40ce722d4067329a3d270500cba?width=574"
                alt="170 Glorious Years"
                className="h-10 w-auto sm:h-12"
              />
              <p className="hidden max-w-[190px] text-[11px] font-medium text-brand-gold lg:block">
                Glorious Years (1856-2026) of Dedicated Service to the Nation
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-[5px] bg-brand px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-dark">
                Old Website
              </button>
              <button className="rounded-[5px] border border-brand px-4 py-2 text-xs font-medium text-brand transition hover:bg-brand hover:text-white">
                Alumni Portal
              </button>
              {localStorage.getItem("token") ? (
                <Link to="/dashboard" className="rounded-[5px] bg-brand-gold px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-dark">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login" className="rounded-[5px] bg-brand px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-dark">
                  Logon
                </Link>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button className="rounded-[5px] bg-brand px-2.5 py-1.5 text-[10px] font-medium text-white">
                EN
              </button>
              <button className="rounded-[5px] bg-black/10 px-2.5 py-1.5 text-[10px] font-medium text-[#151515]">
                हिन्दी
              </button>
              <button className="rounded-[5px] bg-black/10 px-2.5 py-1.5 text-[10px] font-medium text-[#151515]">
                বাংলা
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-medium text-black">
              <button aria-label="Decrease font size">A−</button>
              <button aria-label="Reset font size">A</button>
              <button aria-label="Increase font size">A+</button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-brand">
        <div className="mx-auto flex max-w-[1720px] items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden flex-wrap items-center justify-center gap-1 py-1 md:flex lg:gap-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition lg:text-base ${
                      isActive
                        ? "bg-cream-dark text-brand"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                  end
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {mobileOpen && (
          <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-cream-dark text-brand"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                  end
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className="flex items-center gap-4 bg-brand px-4 py-2.5 sm:px-6 lg:px-10">
        <span className="shrink-0 rounded-full bg-cream-dark px-4 py-1.5 text-sm font-medium text-brand sm:text-base">
          Announcements
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-sm font-medium text-white sm:text-base">
            <span>
              Applications are invited for Admission to 5-Year BS-MS (Dual
              Degree) programs in Applied Geology, Chemistry and Physics
              through the IISER Aptitude Test (IAT) 2026 (Notice
              No.279/ACAD/2026 Date: July 03, 2026) New
            </span>
            <span aria-hidden="true">
              Applications are invited for Admission to 5-Year BS-MS (Dual
              Degree) programs in Applied Geology, Chemistry and Physics
              through the IISER Aptitude Test (IAT) 2026 (Notice
              No.279/ACAD/2026 Date: July 03, 2026) New
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
