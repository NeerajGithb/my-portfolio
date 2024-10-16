import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4  border-b-2 border-black shadow-lg bg-[#f8f4e3] fixed top-0 w-full z-[10000]">
      <div className="text-xl font-bold flex items-center gap-3">
        <Link
          href={"/"}
          className="hover:scale-105 transition-transform duration-200">
          <AiFillHome />
        </Link>
        <p className="text-lg font-extrabold  hover:scale-105 transition-transform duration-300">
          NEERAJ VISHWAKARMA
        </p>
      </div>
      <div className="flex space-x-8 font-bold">
        {/* Useful Links */}
        <Link
          href="/"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          About
        </Link>
        <Link
          href="/skills"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          My Skills
        </Link>
        <Link
          href="/projects"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          Contact
        </Link>
        <Link
          href="/resume"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
