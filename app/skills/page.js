import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-16 px-10 pl-[10vw]">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide mb-4">
          My Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600">
          A showcase of the technologies and tools I have mastered to create
          modern, responsive, and scalable applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Skill Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              JavaScript
            </h3>
            <p className="text-gray-500 mb-4">
              Expert in building interactive web applications using modern
              JavaScript frameworks and libraries.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Advanced
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              React.js
            </h3>
            <p className="text-gray-500 mb-4">
              Building dynamic, efficient, and reusable UI components for fast
              and scalable web applications.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Advanced
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Node.js & Express.js
            </h3>
            <p className="text-gray-500 mb-4">
              Developing scalable server-side applications and RESTful APIs.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Advanced
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              MongoDB
            </h3>
            <p className="text-gray-500 mb-4">
              NoSQL database for building modern applications with flexible data
              schemas.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Intermediate
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">AWS</h3>
            <p className="text-gray-500 mb-4">
              Cloud infrastructure for hosting, scaling, and managing modern
              applications.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Intermediate
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Tailwind CSS
            </h3>
            <p className="text-gray-500 mb-4">
              Utility-first CSS framework for crafting beautiful user interfaces
              efficiently.
            </p>
            <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Advanced
            </span>
          </div>
        </div>

        {/* Add more skill cards as necessary */}
      </div>
    </div>
  );
};

export default page;
