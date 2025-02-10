"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import Loader from "./lib/Loder";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Show loader when navigating

    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after content is loaded
    }, 200); // 500ms delay to simulate component loading

    return () => clearTimeout(timer);
  }, [pathname]); // Runs every time the route changes

  return (
    <>
      {loading && <Loader />} 
      <Navbar />
      <Navbar2 />
      <main className={loading ? "hidden" : "block"}>{children}</main>
    </>
  );
}
