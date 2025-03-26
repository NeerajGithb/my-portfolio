"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../image/me.jpeg";
export default function About() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#f8f4e3] grid grid-rows px-3 py-10 sm:p-10 sm:pl-[10vw]"
    >
      {/* Hero Section */}
      <div className="flex max-2xl:flex-col gap-5 mb-10">
        <div className="relative min-w-40 min-h-40 max-w-40 max-h-40 max-lg:ml-10 mb-4 p-6 transform transition-transform hover:scale-105">
          <Image
            src={myImage}
            alt="Neeraj Vishwakarma"
            layout="fill"
            className="rounded-full border-4 border-purple-500 object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 30vw"
          />
        </div>
        <div className="flex flex-col bg-white p-4 shadow-md rounded-lg">
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
          </div>
          <div>
            <p className="text-lg max-w-5xl min-h-40 mx-auto">
              I&apos;m Neeraj Vishwakarma, a passionate BCA student and
              full-stack developer. My journey into tech began with a deep
              curiosity about web technologies, and since then, I have dedicated
              myself to building scalable, responsive, and efficient
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Story */}
      <div className="grid grid-rows 2xl:ml-44">
        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg max-w-2xl mx-auto">
            My journey started with simple HTML and CSS, evolving into mastering
            JavaScript, React, and backend technologies like Node.js and
            MongoDB. Facing real-world challenges helped me refine my
            problem-solving skills and create impactful projects.
          </p>
        </section>

        <section className="mb-10 bg-slate-200 p-4 shadow-lg rounded-lg max-w-[66rem] border border-gray-300">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
            Skills & Expertise
          </h2>
          <ul className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">JavaScript</h3>
              <p className="text-gray-600">
                Expert in building interactive web applications.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">React.js</h3>
              <p className="text-gray-600">
                Building efficient and scalable UI components.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">
                Node.js & Express.js
              </h3>
              <p className="text-gray-600">
                Developing backend services and RESTful APIs.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">MongoDB</h3>
              <p className="text-gray-600">
                Working with NoSQL databases for scalable solutions.
              </p>
            </li>
            <li className="text-center bg-white p-6 shadow-lg hover:shadow-xl rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-bold text-lg text-gray-700">Tailwind CSS</h3>
              <p className="text-gray-600">
                Designing modern, responsive UI components.
              </p>
            </li>
          </ul>
        </section>

        {/* Values and Philosophy */}
        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">My Values</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I believe in writing clean, maintainable code, focusing on user
            experience, and continuously learning new technologies to stay ahead
            in the industry.
          </p>
        </section>

        <section className="mb-10 bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="https://quick-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 1: URL Shortener
              </a>
            </li>
            <li>
              <a
                href="https://facebook-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 2: Full-Stack Facebook Clone
              </a>
            </li>
            <li>
              <a
                href="https://x-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 3: Twitter Frontend Clone
              </a>
            </li>
            <li>
              <a
                href="https://netflix-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 4: Netflix Frontend Clone
              </a>
            </li>
            <li>
              <a
                href="https://music-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 5: Music Streaming App
              </a>
            </li>
            <li>
              <a
                href="https://amazon-n.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project 5: Amazone Frontend Clone
              </a>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white p-4 shadow-md rounded-lg max-w-[66rem]">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
          <p className="text-lg mb-4">
            I would love to collaborate and bring ideas to life. Let’s discuss
            how we can work together!
          </p>
          <a
            href="/contact"
            className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
          >
            Contact Me
          </a>
        </section>
      </div>
    </motion.div>
  );
}
