import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="max-sm:min-h-[60px] max-sm:max-h-[60px] flex items-center justify-between px-2 lg:px-10 xl:py-4 py-2 border-b-2 border-black shadow-lg bg-gradient-to-br from-gray-100 to-gray-300 fixed top-0 w-full z-[10000]">
      <div className="lg:text-xl font-bold flex items-center gap-3">
        <Link
          href={"/"}
          className="hover:scale-105 transition-transform duration-200">
          <AiFillHome />
        </Link>
        <p className="lg:text-lg text-sm font-bold sm:font-extrabold  hover:scale-105 transition-transform duration-300">
          NEERAJ VISHWAKARMA
        </p>
      </div>
      <div className="flex sm:space-x-8 font-bold">
        {/* Useful Links */}
        <Link
          href="/"
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden sm:block">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden xl:block">
          About
        </Link>
        <Link
          href="/skills"
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden xl:block">
          My Skills
        </Link>
        <Link
          href="/projects"
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden xl:block">
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden xl:block">
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
