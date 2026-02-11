"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./lib/Loder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  const isResumePage = pathname === "/resume";

  return (
    <>
      {loading && <Loader />}
      {!isResumePage && <Navbar />}

      <main
        className={`${loading ? "hidden" : "block"} ${isResumePage ? "no-margin" : ""
          }`}
      >
        {children}
      </main>

      {!isResumePage && <Footer />}
    </>
  );
}
