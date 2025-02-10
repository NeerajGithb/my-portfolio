import React from "react";
import Link from "next/link";
const Navbar2 = () => {
  return (
    <div className="flex items-center max-sm:min-h-[40px] max-sm:max-h-[40px] xl:hidden px-2 lg:px-10 py-2 border-t-2  border-b border-black shadow-lg bg-gradient-to-br from-gray-100 to-gray-300 fixed top-[50px] sm:top-[39px] lg:top-[44px]  w-full z-[10000]">
      <div className="flex justify-between w-full items-center sm:space-x-8 font-bold">
        <Link
          href="/about"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          About
        </Link>
        <Link
          href="/skills"
          className="hover:underline hover:scale-105 transition-transform duration-200">
          Skills
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
          className="hover:underline hover:scale-105 transition-transform duration-200 hidden">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
