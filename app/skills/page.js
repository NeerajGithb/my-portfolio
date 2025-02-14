"use client";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-16 px-3 sm:px-10"
    >
      {/* Page Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="2xl:text-5xl text-4xl font-bold text-gray-800 tracking-wide mb-4">
          My Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600">
          A showcase of the technologies and tools I have mastered to create
          modern, responsive, and scalable applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Data Structures & Algorithms", level: "Advanced", desc: "Problem-solving skills for writing optimized and efficient code." },
          { name: "JavaScript", level: "Advanced", desc: "Expert in building interactive web applications using modern JavaScript frameworks and libraries." },
          { name: "TypeScript", level: "Intermediate", desc: "Strongly typed JavaScript for scalable and maintainable applications." },
          { name: "React.js & Next.js", level: "Advanced", desc: "Building dynamic, efficient, and reusable UI components for fast and scalable web applications." },
          { name: "Node.js & Express.js", level: "Advanced", desc: "Developing scalable server-side applications and RESTful APIs." },
          { name: "MongoDB", level: "Intermediate", desc: "NoSQL database for building modern applications with flexible data schemas." },
          { name: "PostgreSQL & MySQL", level: "Intermediate", desc: "Relational database management and optimization." },
          { name: "AWS & Cloud Services", level: "Intermediate", desc: "Cloud infrastructure for hosting, scaling, and managing modern applications." },
          { name: "Docker & Kubernetes", level: "Intermediate", desc: "Containerization and orchestration for scalable deployments." },
          { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first CSS framework for crafting beautiful user interfaces efficiently." },
          { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching strategies, and collaborative development." },
          { name: "CI/CD & DevOps", level: "Intermediate", desc: "Continuous integration, delivery, and automation for software deployment." },
          { name: "System Design & Architecture", level: "Intermediate", desc: "Designing scalable and high-performance applications." },
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-500 mb-4">{skill.desc}</p>
              <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default page;
