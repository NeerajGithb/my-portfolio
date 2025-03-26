"use client";

import Image from "next/image";
import React, { useState } from "react";
import first from "../todo/sc/1.png";
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
      <h1 className="text-5xl font-extrabold text-green-500 text-center">
        ✅ Todo App
      </h1>
      <p className="text-lg text-gray-300 mt-4 text-center">
        A simple and powerful Todo App built using React + Vite + LocalStorage.
      </p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-10"
      >
        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-green-400">🛠 Tech Stack</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>⚛️ React + Vite</li>
            <li>🎨 Tailwind CSS</li>
            <li>💾 LocalStorage</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-green-400">✨ Key Features</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>📌 Add, Edit & Delete Tasks</li>
            <li>📆 Mark Tasks as Completed</li>
            <li>🔁 Persistent Storage with LocalStorage</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl shadow-lg transition transform hover:scale-105">
          <h2 className="text-2xl font-bold text-green-400">📖 Learnings</h2>
          <ul className="mt-3 text-gray-400 space-y-1">
            <li>⚡ React Hooks (useState, useEffect)</li>
            <li>📂 Managing LocalStorage</li>
            <li>🎨 Tailwind CSS for Styling</li>
          </ul>
        </div>
      </motion.div>

      <h2 className="text-2xl font-bold text-green-400 mt-10">
        📸 Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {[first].map((image, index) => (
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

      <div className="mt-10 flex justify-center gap-4 sm:gap-6">
        <a
          href="https://my-todo-app-n.vercel.app"
          target="_blank"
          className="flex items-center justify-center h-12 w-36 bg-green-600 text-white font-bold rounded-lg shadow-lg transition hover:scale-105"
        >
          <span>🔗 Live Demo</span>
        </a>
        <a
          href="https://github.com/NeerajGithb/To-Do"
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
