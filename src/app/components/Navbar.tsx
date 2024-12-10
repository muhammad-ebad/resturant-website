"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link"; // Import Link component from Next.js

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 w-full overflow-hidden">
      <div className="flex justify-center items-center text-2xl font-bold">
        <span className="text-orange-500">Food</span>tuck
      </div>

      <section className="flex items-center justify-between px-4 md:px-[15px] lg:px-[135px]">
        {/* Hamburger Icon for Mobile */}
        <div
          className="text-orange-500 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

        {/* Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Blog", path: "/blog" },
            { name: "Pages", path: "/pages" },
            { name: "About", path: "/about" },
            { name: "Shop", path: "/shop" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="hover:text-orange-500 cursor-pointer px-4 md:px-0"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={item.path}>{item.name}</Link> {/* Correct path */}
            </li>
          ))}
        </ul>

        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
            />
            <CiSearch className="absolute top-2.5 right-3" />
          </div>
          <IoBagHandle className="w-6 h-6" />
        </div>
      </section>
    </nav>
  );
}
  