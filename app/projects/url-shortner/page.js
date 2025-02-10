"use client";
import React, { useState } from "react";
import Image from "next/image";
import first from "../url-shortener/sc/1.png";
import second from "../url-shortener/sc/2.png";
import third from "../url-shortener/sc/3.png";
import fourth from "../url-shortener/sc/4.png";
import fifth from "../url-shortener/sc/5.png";
import sixth from "../url-shortener/sc/6.png";
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
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 p-4 px-2 sm:px-10"
    >
      <h1 className="text-5xl font-extrabold text-blue-700 text-center">
        🔗 URL Shortener
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
        A simple URL shortener built with Next.js, React, and Tailwind CSS using local storage.
      </p>

      <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-10">
        <div className="bg-white p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800">🛠 Tech Stack</h2>
          <ul className="mt-3 text-gray-600 space-y-1">
            <li>⚡ Next.js & React</li>
            <li>💾 Local Storage for data</li>
            <li>🎨 Tailwind CSS for UI</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800">✨ Features</h2>
          <ul className="mt-3 text-gray-600 space-y-1">
            <li>✂️ Shorten long URLs easily</li>
            <li>📊 View stored URLs</li>
            <li>⚙️ Manage & delete URLs</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800">📖 Learnings</h2>
          <ul className="mt-3 text-gray-600 space-y-1">
            <li>🚀 Managing state in Next.js</li>
            <li>💡 Using Local Storage effectively</li>
          </ul>
        </div>
      </motion.div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10">📸 Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4">
        {[first, second, third, fourth, fifth, sixth].map((image, index) => (
          <motion.div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105"
            onClick={() => openImage(image)}
          >
            <Image
              src={image}
              alt={`URL Shortener Screenshot ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4 sm:gap-6">
        <a
          href="https://quick-n.vercel.app"
          target="_blank"
          className="flex items-center justify-center h-12 w-36 bg-blue-600 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>🔗 Live Demo</span>
        </a>
        <a
          href="https://github.com/NeerajGithb/urlShortner"
          target="_blank"
          className="flex items-center justify-center h-12 w-40 bg-gray-900 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>💻 GitHub Repo</span>
        </a>
      </div>

      <AnimatePresence>
        {selectedImage && !isExiting && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 mt-14"
            onAnimationComplete={() => {
              if (isExiting) {
                setSelectedImage(null);
                setIsExiting(false);
              }
            }}
          >
            <motion.div className="relative p-3 rounded-lg shadow-lg w-full max-h-[85vh]">
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
