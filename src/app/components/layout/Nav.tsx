"use client";
import Link from "next/link";
import { useLayout } from "@/context/LayoutContext";
import { usePathname } from "next/navigation";
import { navItems } from ".";

const Nav = () => {
  const { isNavOpen: isOpen, toggleNav: setIsOpen } = useLayout();
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-16"} relative flex px-5 flex-col gap-20 min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 shadow-lg`}
    >
      <h1 className="text-lg mt-10 uppercase font-bold tracking-wide text-slate-200 ">
        {isOpen ? "Production Control" : "PC"}
      </h1>

      <ul className="flex flex-col items-start justify-center w-full text-black">
        {navItems.map((link) => (
          <li 
          key={link.href}
          className="w-full">
            <Link
              href={link.href}
              className={`flex items-center ${
                isOpen ? "justify-start" : "justify-center"
              } gap-3 px-3 py-2 w-full transition-all
              ${
                isActive(link.href)
                  ? "bg-blue-500/20 border-l-4 border-blue-500"
                  : "hover:bg-blue-400/20 hover:border-l-4 border-blue-500"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {isOpen && <span className="text-white">{link.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={setIsOpen}
        className="absolute w-10 h-10 -right-5 top-1/2 -translate-y-1/2 
                bg-slate-800 border border-slate-700 
                rounded-full flex items-center justify-center
                hover:bg-slate-700 transition-colors"
      >
        ▶
      </button>
    </aside>
  );
};

export default Nav;
