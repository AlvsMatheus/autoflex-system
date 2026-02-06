"use client";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <aside
      className={`${isOpen ? "w-64" : "w-16"} relative flex px-5 flex-col gap-20 h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 shadow-lg`}
    >
      <h1 className="text-lg mt-10 uppercase font-bold tracking-wide text-slate-200 ">
        {isOpen ? "Production Control" : "PC"}
      </h1>

      <ul className="flex flex-col items-start justify-center w-full text-black">
        <li className="w-full">
        <Link
          href=""
          className={`flex items-center ${
            isOpen ? "justify-start" : "justify-center"
          } gap-3 px-3 py-2 w-full text-white hover:bg-blue-400/20 hover:border-l-4 border-blue-500 transition-all`}
        >
          <span className="text-lg">📦</span>
          {isOpen && <span>Products</span>}
        </Link>
      </li>
      <li className="w-full">
        <Link
          href=""
          className={`flex items-center ${
            isOpen ? "justify-start" : "justify-center"
          } gap-3 px-3 py-2 w-full text-white hover:bg-blue-400/20 hover:border-l-4 border-blue-500 transition-all`}
        >
          <span className="text-lg">📦</span>
          {isOpen && <span>Raw-Materials</span>}
        </Link>
      </li>
      <li className="w-full">
        <Link
          href=""
          className={`flex items-center ${
            isOpen ? "justify-start" : "justify-center"
          } gap-3 px-3 py-2 w-full text-white hover:bg-blue-400/20 hover:border-l-4 border-blue-500 transition-all`}
        >
          <span className="text-lg">📦</span>
          {isOpen && <span>Production</span>}
        </Link>
      </li>
      </ul>
      <button
  onClick={() => setIsOpen(!isOpen)}
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
