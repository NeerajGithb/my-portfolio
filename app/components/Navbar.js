"use client"; // Ensure client-side rendering
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration happens only after mounting
  }, []);

  const navLinks = [
    { href: "/", label: "Home", hiddenClass: "hidden sm:block" },
    { href: "/about", label: "About", hiddenClass: "hidden xl:block" },
    { href: "/skills", label: "My Skills", hiddenClass: "hidden xl:block" },
    { href: "/projects", label: "Projects", hiddenClass: "hidden xl:block" },
    { href: "/contact", label: "Contact", hiddenClass: "hidden xl:block" },
    { href: "/resume", label: "Resume", hiddenClass: "" }, // Always visible
  ];

  return (
    <div className="max-sm:min-h-[50px] max-sm:max-h-[50px] flex items-center justify-between px-2 lg:px-10 xl:py-4 py-2 shadow-lg bg-gradient-to-br from-gray-100 to-gray-300 fixed top-0 w-full z-[10000]">
      <div className="lg:text-xl font-bold flex items-center gap-3">
        <Link href={"/"} className="hover:scale-105 transition-transform duration-200">
          <AiFillHome />
        </Link>
        {/* Changed inner <p> to <span> to avoid HTML nesting error */}
        <span className="lg:text-lg text-sm font-bold sm:font-extrabold hover:scale-105 transition-transform duration-300">
          NEERAJ VISHWAKARMA
        </span>
      </div>

      <div className="flex sm:space-x-8 font-bold">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:underline hover:scale-105 transition-transform duration-200 ${link.hiddenClass} ${
              mounted && pathname === link.href ? "text-blue-600 underline font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
