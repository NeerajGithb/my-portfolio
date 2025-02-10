"use client";

import React, { useState } from "react";
import Image from "next/image";
import first from "../netflix/sc/1.png";
import second from "../netflix/sc/2.png";
import third from "../netflix/sc/3.png";
import fourth from "../netflix/sc/4.png";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const openImage = (image) => {
    setIsExiting(false);
    setSelectedImage(image);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black text-white py-16 p-4 px-2 sm:px-10"
    >
      <h1 className="text-5xl font-extrabold text-red-600 text-center">
        🎬 Netflix Clone
      </h1>
      <p className="text-lg text-gray-300 mt-4 text-center">
        A responsive Netflix UI built using HTML & CSS.
      </p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-10"
      >
        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-red-500">🛠 Tech Stack</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>⚡ HTML</li>
            <li>🎨 CSS</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-red-500">✨ Key Features</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>🎬 Netflix-style homepage</li>
            <li>📱 Fully responsive UI</li>
            <li>🎨 Smooth animations</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-red-500">📖 Learnings</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>📺 CSS Flexbox & Grid</li>
            <li>💡 Responsive Web Design</li>
            <li>🎨 Advanced UI Styling</li>
          </ul>
        </div>
      </motion.div>

      <h2 className="text-2xl font-bold text-red-500 mt-10">📸 Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {[first, second, third,fourth].map((image, index) => (
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
              alt={`Netflix Screenshot ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4 sm:gap-6">
        <a
          href="https://netflix-n.vercel.app"
          target="_blank"
          className="flex items-center justify-center h-12 w-36 bg-red-600 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>🔗 Live Demo</span>
        </a>
        <a
          href="https://github.com/NeerajGithb/Netflix"
          target="_blank"
          className="flex items-center justify-center h-12 w-40 bg-gray-800 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>💻 GitHub Repo</span>
        </a>
      </div>

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
