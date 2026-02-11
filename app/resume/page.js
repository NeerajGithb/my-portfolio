"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Resume</h1>
          <p className="text-base text-neutral-600">
            A brief overview of my education, work experience, and skills.
          </p>
        </div>

        {/* Resume Content */}
        <div className="bg-white border border-neutral-200 rounded-sm p-8 shadow-sm">
          {/* Header Info */}
          <div className="text-center border-b border-neutral-200 pb-6 mb-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Neeraj Vishwakarma
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-primary-600">
              <a href="mailto:neerajvishwakarma6484@gmail.com" className="hover:underline">
                neerajvishwakarma6484@gmail.com
              </a>
              <span className="text-neutral-400">|</span>
              <a href="tel:+918287168307" className="hover:underline">
                +91 8287168307
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mt-4">
              <Link
                href="https://www.linkedin.com/in/neeraj-vishwakarma-b87592281"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-neutral-300 hover:bg-neutral-50 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-neutral-700" />
              </Link>
              <Link
                href="https://github.com/NeerajGithb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-neutral-300 hover:bg-neutral-50 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4 text-neutral-700" />
              </Link>
            </div>
          </div>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Skills</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium text-neutral-900">Language:</span> <span className="text-neutral-700">C++, JavaScript</span></div>
              <div><span className="font-medium text-neutral-900">Frontend:</span> <span className="text-neutral-700">Next.js, React.js, HTML, CSS, Tailwind CSS</span></div>
              <div><span className="font-medium text-neutral-900">Backend:</span> <span className="text-neutral-700">Node.js, Express.js</span></div>
              <div><span className="font-medium text-neutral-900">Database:</span> <span className="text-neutral-700">MongoDB</span></div>
              <div><span className="font-medium text-neutral-900">Development Tools:</span> <span className="text-neutral-700">Git, GitHub</span></div>
              <div><span className="font-medium text-neutral-900">API & Security:</span> <span className="text-neutral-700">REST APIs, JWT Authentication</span></div>
              <div><span className="font-medium text-neutral-900">Computer Science:</span> <span className="text-neutral-700">DSA (Basic), OOPs</span></div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Projects</h3>
            <div className="space-y-5">
              <ProjectItem
                name="Furniture E-Commerce Website (Full Stack)"
                techStack="Next.js, React, Tailwind CSS, Node.js, MongoDB, Mongoose, Razorpay, Cloudinary, JWT, Vercel"
                points={[
                  "Production-ready e-commerce platform with secure authentication and payment integration",
                  "Dynamic product catalog with search and filtering capabilities",
                  "JWT-based authentication with protected routes",
                  "Razorpay payment integration with webhook verification",
                  "Order management and status tracking system",
                  "Cloudinary image optimization for product images",
                  "Learned: Building scalable e-commerce platforms and payment gateway integration"
                ]}
              />
              <ProjectItem
                name="Facebook Clone"
                techStack="Next.js, MongoDB, Cloudinary, Tailwind CSS, Node.js, Express.js, JWT"
                points={[
                  "Full-stack social media platform with posts, likes, comments, and shares",
                  "Secure JWT authentication for user login and session management",
                  "Uses Cloudinary for efficient media storage and handling",
                  "Learned: Implementing authentication and managing user sessions securely"
                ]}
              />
              <ProjectItem
                name="URL Shortener"
                techStack="Next.js, React, Node.js, MongoDB, Tailwind CSS"
                points={[
                  "Full-stack app for shortening and managing URLs",
                  "Users can generate short links and retrieve original URLs",
                  "Uses local storage and API calls for seamless state management",
                  "Learned: Efficient API handling and state management"
                ]}
              />
              <ProjectItem
                name="Music Streaming App"
                techStack="HTML, CSS, JavaScript"
                points={[
                  "Music player with play, pause, seek, and custom audio controls",
                  "Fully responsive design for smooth playback across devices",
                  "Learned: Handling JavaScript event listeners for interactive media elements"
                ]}
              />
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Education</h3>
            <div className="space-y-1 text-sm text-neutral-700">
              <div className="font-medium text-neutral-900">Bachelor of Computer Applications (BCA)</div>
              <div>Institute of Professional Excellence & Management (IPEM College)</div>
              <div>Ghaziabad, Uttar Pradesh</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Project Item Component
function ProjectItem({ name, techStack, points }) {
  return (
    <div className="text-sm">
      <div className="font-semibold text-neutral-900 mb-1">
        {name} <span className="text-primary-600">- {techStack}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-neutral-700 ml-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
