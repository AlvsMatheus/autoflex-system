"use client";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <aside
      className={`${isOpen ? "w-64" : "w-16"} flex px-5 flex-col gap-20 h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 shadow-lg`}
    >
      <h1 className="text-lg mt-10 uppercase font-bold tracking-wide text-slate-200">
        Production Control
      </h1>

      <ul className="flex flex-col items-start justify-center w-full text-black">
        <li className="w-full">
          <Link
            className="flex items-center pl-2 py-2 w-full text-white border-blue-500 hover:bg-blue-400/20 hover:border-l-4"
            href=""
          >
            Products
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="flex items-center pl-2 py-2 w-full text-white border-blue-500 hover:bg-blue-400/20 hover:border-l-4"
            href=""
          >
            Raw-Materials
          </Link>
        </li>
        <li className="w-full">
          <Link
            className="flex items-center pl-2 py-2 w-full text-white border-blue-500 hover:bg-blue-400/20 hover:border-l-4"
            href=""
          >
            Production
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Nav;
