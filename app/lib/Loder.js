"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-brand-600 z-50 shadow-sm"
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
}
