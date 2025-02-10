"use client";
import React, { useState } from "react";
import Image from "next/image";
import first from "../portfolio/sc/1.png";
import second from "../portfolio/sc/2.png";
import third from "../portfolio/sc/3.png";
import fourth from "../portfolio/sc/4.png";
import fifth from "../portfolio/sc/5.png";
import sixth from "../portfolio/sc/6.png";
import { motion, AnimatePresence } from "framer-motion";
const Page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  // Function to open image and reset exiting state
  const openImage = (image) => {
    setIsExiting(false); // Reset exit state
    setSelectedImage(image);
  };
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 ,ease: "easeOut"  }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-3 sm:px-10"
    >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center">
        🌐 Portfolio Website
      </h1>
      <p className="text-lg text-gray-700 mt-4 text-center">
        A professional portfolio website to showcase my projects and skills.
      </p>

      {/* Tech Stack & Features */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 mt-8 bg-white rounded-xl shadow-lg"
      >
        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-semibold">🛠 Tech Stack</h2>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-2">
            <li>Next.js & React.js</li>
            <li>Tailwind CSS for styling</li>
            <li>CSS animations for smooth UI</li>
            <li>GitHub Pages / Vercel for deployment</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold">✨ Features</h2>
          <ul className="list-disc ml-6 text-gray-800 mt-2 space-y-2">
            <li>🎨 Modern & Responsive UI</li>
            <li>📸 Image Gallery for projects</li>
            <li>🔗 Social media & GitHub links</li>
            <li>📩 Contact Form</li>
          </ul>
        </div>
      </motion.div>

      {/* Learnings */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-lg mt-8"
      >
        <h2 className="text-2xl font-semibold">📖 What I Learned</h2>
        <p className="text-gray-800 mt-2 leading-relaxed">
          - Mastered **Next.js** for SSR & better performance.
          <br />
          - Improved **UI/UX** skills with **Tailwind CSS**.
          <br />
          - Used **CSS animations** for smooth transitions.
          <br />
          - Optimized for **SEO & performance** using Next.js best practices.
          <br />
        </p>
      </motion.div>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold mt-8 text-center">
        📸 Screenshots
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
        {[first, second, third, fourth, fifth, sixth].map((image, index) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105"
            onClick={() => openImage(image)}
          >
            <Image
              src={image}
              alt={`Portfolio Screenshot ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Links */}
      <div className="mt-10 flex justify-center gap-4 sm:gap-6">
        <a
          href="https://music-n.vercel.app"
          target="_blank"
          className="flex items-center justify-center h-12 w-36 bg-blue-600 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>🔗 Live Portfolio</span>
        </a>
        <a
          href="https://github.com/NeerajGithb/Music-Web"
          target="_blank"
          className="flex items-center justify-center h-12 w-40 bg-gray-900 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>💻 GitHub Repo</span>
        </a>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && !isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 mt-14"
            onAnimationComplete={() => {
              if (isExiting) {
                setSelectedImage(null);
                setIsExiting(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-3 rounded-lg shadow-lg w-full max-h-[85vh]"
            >
              <button
                className="absolute top-1 right-2 bg-white/80 backdrop-blur-md h-10 w-10 rounded-full text-black font-bold shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
                onClick={() => setIsExiting(true)}
              >
                ✖
              </button>

              <div className="flex justify-center items-center">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
