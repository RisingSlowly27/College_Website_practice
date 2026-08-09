import { NavLink } from "react-router-dom";
import { departmentNav } from "@/lib/nav-data";

export default function Sidebar() {
  return (
    <aside className="lg:w-[280px] lg:shrink-0">
      <div className="rounded-[41px] bg-cream-dark p-5 lg:sticky lg:top-6">
        <div className="mb-4 inline-block rounded-full bg-brand px-8 py-3">
          <h2 className="text-2xl font-medium text-white">Menu</h2>
        </div>
        <ul className="space-y-1">
          {departmentNav.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end
                className={({ isActive }) =>
                  `block text-sm transition-all py-1.5 ${
                    isActive 
                      ? "font-extrabold text-brand border-l-4 border-brand pl-3" 
                      : "font-semibold text-brand/80 hover:text-brand hover:pl-2"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
