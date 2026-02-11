"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 shadow-lg"
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
