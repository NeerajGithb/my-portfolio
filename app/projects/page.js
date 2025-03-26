"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import musicImg from "../image/music.png";
import portfoloImg from "../image/portfolio.png";
import netflixImg from "../image/netflix.png";
import twitterImg from "../image/twitter.png";
import todoImg from "../image/todo.png";
import facebookImg from "../image/facebook.png";
import urlImg from "../image/url.png";
import Link from "next/link";
const Page = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-3 "
    >
      {/* Page Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="2xl:text-5xl text-4xl font-bold text-gray-800 tracking-wide mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600">
          Explore some of the key projects I have built, showcasing my skills in
          development, design, and innovation.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={musicImg}
            alt="E-commerce Platform"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between ">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            🎵 Music Streaming App
            </h3>
            <p className="text-gray-500 mb-4">
              A lightweight music player with a clean UI & responsive design.
            </p>
            <Link
              href="/projects/music-web"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>

        {/* Repeat for other project cards */}
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={portfoloImg}
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between ">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            🌐 Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <Link
              href="/projects/portfolio"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={netflixImg}
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between ">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            🎬 Netflix Clone
            </h3>
            <p className="text-gray-500 mb-4">
              A responsive Netflix UI built using HTML & CSS.
            </p>
            <Link
              href="/projects/netflix"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={twitterImg}
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
           <div>
           <h3 className="text-2xl font-semibold text-gray-700 mb-2">
           🐦 X (Twitter) Clone 
            </h3>
            <p className="text-gray-500 mb-4">
              A modern, fully responsive Twitter clone built with HTML, CSS, and
              JavaScript.
            </p>
           </div>
            <Link
              href="/projects/twitter"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg "
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={todoImg}
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between ">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            ✅ Todo App
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <Link
              href="/projects/todo"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={facebookImg}
            alt="Facebook clone"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between ">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            📘 Full Stack Facebook Clone
            </h3>
            <p className="text-gray-500 mb-4">
              A fully functional Facebook clone built using Next.js, MongoDB,
              and Cloudinary. This project closely mimics the real Facebook app,
              providing an in-depth learning experience in full-stack
              development.
            </p>
            <Link
              href="/projects/facebook"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src={urlImg}
            alt="Url Shortener"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            🔗 URL Shortener
            </h3>
            <p className="text-gray-500 mb-4">
              A simple URL shortener built with Next.js, React, and Tailwind CSS using local storage.
            </p>
            <Link
              href="/projects/url-shortner"
              className=" bg-gray-800 text-white px-4 py-2  flex items-center justify-center rounded-lg"
            >
              <span className="font-semibold text-sm">View Project</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
