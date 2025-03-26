"use client";

import Image from "next/image";
import myImage from "./image/me.jpeg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="bg-[#f8f4e3] max-w-full overflow-x-hidden ">
      {/* Main Content Area */}
      <div className=" p-2">
        <div className="min-h-[90vh] flex flex-col justify-center">
          <div className="h-20"></div>
          <div className="flex max-2xl:flex-col items-center gap-2 justify-center px-2 text-center ">
            <div className="flex items-center gap-4 max-sm:flex-col  max-sm:justify-center   max-sm:border-b ">
              <div className="w-full  text-left border-b border-gray-600 ml-24 sm:ml-14 ">
                <h1 className="text-2xl lg:text-4xl sm:max-w-[300px] font-bold mb-4 text-gray-800 hover:scale-105 transition-transform duration-200">
                  <span className="block">Hello, 👋</span>
                  <span className="block text-xl lg:text-3xl">
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
            <div className="border-b flex-grow  text-left bg-white  shadow-md rounded-lg p-3 md:p-5 2xl:ml-6 2xl:max-w-[40rem] ">
              <h1 className="text-lg md:text-xl mb-4 max-w-2xl ml-5  font-bold">
                A Bit About Me
              </h1>
              <p className="text-lg mb-8 max-w-2xl ml-4 text-gray-700 font-semibold italic">
                "I'm Neeraj Vishwakarma, a passionate software engineer who
                loves building fast, reliable, and user-friendly applications. I
                work on both front-end and back-end, making sure everything runs
                smoothly. I enjoy solving complex problems and turning ideas
                into real, working solutions with clean and maintainable code.
                My goal is to keep learning, improving, and creating digital
                experiences that make a difference."
              </p>

              <div className="ml-5 mx-auto flex flex-col sm:flex-row sm:justify-between max-sm:gap-4">
                <div className="flex justify-between gap-2 work">
                  <Link href="/projects">
                    <span className="link inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                      Explore My Work
                    </span>
                  </Link>

                  <Link href="/contact">
                    <span className="link inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                      Let's Connect
                    </span>
                  </Link>
                </div>

                <div className="p-2 w-full sm:w-[220px] bg-white backdrop-blur-xl  rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-[#f3f3f3]">
                  <ul className="flex items-center justify-around space-x-4">
                    <li>
                      <Link
                        href="https://github.com/NeerajGithb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-8 h-8 border-[2px] border-gray-900 rounded-full overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="w-4 h-4 text-black group-hover:text-white relative z-10 transition duration-300"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/neeraj-vishwakarma-b87592281"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-8 h-8 border-[2px] border-blue-700 rounded-full overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-blue-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-4 h-4 text-blue-700 group-hover:text-white relative z-10 transition duration-300"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/NeerajVish89018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-8 h-8  border-[2px] border-blue-700 rounded-full overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-blue-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="w-4 h-4 text-blue-700 group-hover:text-white relative z-10 transition duration-300"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
