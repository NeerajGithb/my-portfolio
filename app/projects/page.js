import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-10 pl-[10vw]">
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
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="E-commerce Platform"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              E-commerce Platform
            </h3>
            <p className="text-gray-500 mb-4">
              An advanced e-commerce website with features such as product
              listing, payment gateway integration, and a user-friendly admin
              dashboard.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>

        {/* Repeat for other project cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Portfolio Website"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-500 mb-4">
              A premium and responsive portfolio website to showcase my skills,
              achievements, and previous work.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
