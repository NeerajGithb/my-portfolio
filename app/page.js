"use client";

import Image from "next/image";
import myImage from "./image/me.jpeg";
import Link from "next/link";
// Custom hook to track the zoom level

export default function Home() {
  return (
    <div className="bg-[#f8f4e3] max-w-full overflow-x-hidden relative ">
      {/* Main Content Area */}
      <div className="max-sm:mt-28 max-lg:mt-20">
        <div className="h-[90vh] flex flex-col justify-center">
          <div className="h-20"></div>
          <div className="flex max-xl:flex-col items-center gap-4 justify-center px-3 text-center ">
            <div className="flex items-center gap-4 max-sm:flex-col  max-sm:justify-center max-sm:w-full  max-sm:border-b ">
              <div className="sm:max-w-[300px] w-full text-left border-b border-gray-600 ml-14 ">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 hover:scale-105 transition-transform duration-200">
                  <span className="block">Hello, 👋</span>
                  <span className="block text-3xl">
                    I am Neeraj Vishwakarma
                  </span>
                </h1>
              </div>
              <div>
                <div className="w-48 h-48 relative mb-6 hover:scale-105 transition-transform duration-200">
                  <Image
                    src={myImage}
                    alt="Neeraj"
                    fill // Use fill for responsive image
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw" // Responsive sizes
                    priority // Load image first
                    style={{ objectFit: "cover" }} // Maintain aspect ratio
                    className="rounded-full border-4 border-purple-500"
                  />
                </div>
              </div>
            </div>
            <div className="border-b  text-left bg-white  shadow-md rounded-lg p-6 ml-14">
              <h1 className="text-lg md:text-xl mb-4 max-w-2xl ml-5  font-bold">
                A Bit About Me
              </h1>
              <p className="text-lg  mb-8 max-w-2xl ml-5 text-gray-700 font-semibold italic">
                &quot;I&apos;m Neeraj Vishwakarma, a passionate software
                engineer dedicated to crafting reliable, high-performance
                applications. I thrive on solving complex challenges and
                delivering clean, efficient code. With a strong foundation in
                both front-end and back-end development, I&apos;m eager to
                contribute to innovative projects and lead teams towards
                success.&quot;
              </p>
              <div className="ml-5 mt-24">
                <ul className="list-none flex  gap-6">
                  <li>
                    <Link href="/about">
                      <span className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/skills">
                      <span className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                        Skills
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <span className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                        Projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resume">
                      <span className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                        Resume
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
