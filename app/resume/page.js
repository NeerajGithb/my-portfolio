"use client";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Page = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    const element = resumeRef.current;
    if (!element) return;

    let progressValue = 0;

    // 🔥 Progress bar background me continuously badhta rahega
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 95) {
          progressValue += 3; // Har update pe +3% karega
          return progressValue;
        } else {
          return prev;
        }
      });
    }, 300); // 300ms me har bar progress update hoga

    try {
      // 🌟 Image capture process (background me)
      const canvasPromise = html2canvas(element, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const canvas = await canvasPromise;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, "FAST");

      // ⏹️ Stop progress increment at 95%
      clearInterval(progressInterval);
      setProgress(95);

      // 🕒 Delay for smooth 100% transition (Har 100ms me +2% badhata rahega)
      const completeProgressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 2;
          } else {
            clearInterval(completeProgressInterval);
            return 100;
          }
        });
      }, 100);

      // 📂 Save PDF (2 sec delay to match progress smoothness)
      setTimeout(() => {
        pdf.save("Neeraj_Vishwakarma_Resume.pdf");
      }, 2000);

      // 🔄 Reset after complete download
      setTimeout(() => {
        setIsDownloading(false);
        setProgress(0);
      }, 2500);
    } catch (error) {
      console.error("Download error:", error);
      setIsDownloading(false);
      setProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-3"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="2xl:text-5xl text-4xl font-bold text-gray-800 tracking-wide mb-4 font-[Merriweather]">
          My Resume
        </h1>
        <p className="text-xl text-gray-600 font-[Inter]">
          A brief overview of my education, work experience, and skills.
        </p>
      </div>

      {/* Resume Content */}

      <div
        ref={resumeRef}
        className="w-[794px] h-[1123px] mx-auto bg-white px-4 py-6 shadow-lg rounded-lg"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold font-[Merriweather]">
            Neeraj Vishwakarma
          </h1>
        </div>

        <address
          className="flex items-center justify-center gap-3 p-2 text-blue-700 font-semibold not-italic text-center"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          <a
            href="mailto:neerajvishwakarma6484@gmail.com"
            style={{ flexShrink: 0 }}
          >
            neerajvishwakarma6484@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+918287168307" style={{ flexShrink: 0 }}>
            +91 8287168307
          </a>
        </address>

        {/* Social Links */}
        <div className="w-full flex justify-between items-center px-4 my-3">
          <SocialLink
            href="https://www.linkedin.com/in/neeraj-vishwakarma-b87592281"
            icon={faLinkedin}
            borderColor="border-blue-700"
            bgColor="bg-blue-700"
          />
          <SocialLink
            href="https://github.com/NeerajGithb"
            icon={faGithub}
            borderColor="border-gray-900"
            bgColor="bg-black"
          />
        </div>

        {/* Skills Section */}
        <Section title="Skills">
          <SkillItem title="Language" skills="C++, JavaScript" />
          <SkillItem
            title="Frontend"
            skills="Next.js, React.js, HTML, CSS, Tailwind CSS"
          />
          <SkillItem title="Backend" skills="Node.js, Express.js" />
          <SkillItem title="Database" skills="MongoDB" />
          <SkillItem title="Development Tools" skills="Git, GitHub" />
          <SkillItem
            title="API & Security"
            skills="REST APIs, JWT Authentication"
          />
          <SkillItem title="Computer Science" skills="DSA (Basic), OOPs" />
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <ProjectItem
            name="URL Shortener"
            techStack="Next.js, React, Node.js, MongoDB, Tailwind CSS"
            description={[
              "Full-stack app for shortening and managing URLs.",
              "Users can generate short links and retrieve original URLs.",
              "Uses local storage and API calls for seamless state management.",
            ]}
            learned="Efficient API handling and state management in a full-stack environment."
          />
          <ProjectItem
            name="Facebook Clone"
            techStack="Next.js, MongoDB, Cloudinary, Tailwind CSS, Node.js, Express.js, JWT"
            description={[
              "Full-stack social media platform where users can create posts, like, comment, and share.",
              "Secure JWT authentication for user login and session management.",
              "Uses Cloudinary for efficient media storage and handling.",
              "Real-time updates and interactive UI enhance user experience.",
            ]}
            learned="Implementing authentication and managing user sessions securely."
          />
          <ProjectItem
            name="Music Streaming App"
            techStack="HTML, CSS, JavaScript"
            description={[
              "Music player with play, pause, seek, and custom audio controls.",
              "Features a fully responsive design for smooth playback across devices.",
              "Optimized UI/UX for an intuitive and engaging user experience.",
            ]}
            learned="Handling JavaScript event listeners for interactive media elements."
          />
          <ProjectItem
            name="Twitter & Netflix Clones"
            techStack="HTML, CSS, JavaScript"
            description={[
              "Frontend clones of Twitter & Netflix with replicated UI and interactions.",
              "Features a fully responsive design with animations and hover effects.",
              "Utilizes CSS Grid, Flexbox, and transitions for a pixel-perfect layout.",
            ]}
            learned="Advanced CSS techniques for achieving modern UI designs."
          />
        </Section>

        {/* Education Section */}
        <Section title="Education">
          <ul className="list-disc list-inside font-normal text-gray-700">
            <li>
              <span className="text-blue-600">
                Bachelor of Computer Applications (BCA)
              </span>
            </li>
            <li>
              <span className="text-blue-600">
                Institute of Professional Excellence & Management (IPEM
                College), Ghaziabad, Uttar Pradesh
              </span>
            </li>
          </ul>
        </Section>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <div className="relative flex items-center space-x-2">
                <span className="text-white text-sm">Downloading...</span>

                <div className="relative w-8 h-8">
                  <svg className="w-full h-full" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="125.6"
                      strokeDashoffset={125.6 * (1 - progress / 100)}
                      strokeLinecap="round"
                      className="transition-[stroke-dashoffset] duration-100 ease-linear"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">
                    {progress}%
                  </span>
                </div>
              </div>
            </>
          ) : (
            "Download Resume as PDF"
          )}
        </button>
      </div>
    </motion.div>
  );
};

// Social Link Component
const SocialLink = ({ href, icon, borderColor, bgColor }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-center w-8 h-8 border-2 ${borderColor} rounded-full overflow-hidden relative`}
  >
    <span
      className={`absolute inset-0 ${bgColor} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
    ></span>
    <FontAwesomeIcon
      icon={icon}
      className="w-4 h-4 text-current group-hover:text-white relative z-10 transition duration-300"
    />
  </Link>
);

// Section Wrapper Component
const Section = ({ title, children }) => (
  <div className="px-4 my-6">
    <h1 className="text-2xl font-bold font-[Lora]">{title}:</h1>
    <div className="pl-10">{children}</div>
  </div>
);

// Skill Item Component
const SkillItem = ({ title, skills }) => (
  <li className="text-black">
    <span className="font-semibold font-[Montserrat]">{title}</span> -{" "}
    <span className="text-blue-700 font-medium font-[Poppins]">{skills}</span>
  </li>
);

// Project Item Component
const ProjectItem = ({ name, techStack, description, learned }) => (
  <li className="font-bold text-black mb-4 font-[Lora]">
    {name} - <span className="text-blue-600">{techStack}</span>
    <ul className="list-disc list-inside font-normal text-gray-700 font-[Poppins]">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
      <li>
        <span className="text-blue-600">Learned:</span> {learned}
      </li>
    </ul>
  </li>
);

export default Page;
