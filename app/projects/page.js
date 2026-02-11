"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Furniture E-Commerce",
      emoji: "🛋️",
      description: "Production-ready e-commerce with Razorpay payments, JWT auth, and scalable APIs.",
      image: "/images/furniture.png",
      link: "/projects/furniture",
      tags: ["Next.js", "MongoDB", "Razorpay"],
    },
    {
      title: "Facebook Clone",
      emoji: "📘",
      description: "Full-stack social platform with posts, likes, comments using Next.js and MongoDB.",
      image: "/images/facebook.png",
      link: "/projects/facebook",
      tags: ["Next.js", "MongoDB", "Cloudinary"],
    },
    {
      title: "URL Shortener",
      emoji: "🔗",
      description: "Fast URL shortening service with click tracking and custom aliases.",
      image: "/images/url.png",
      link: "/projects/url-shortner",
      tags: ["Next.js", "React", "Tailwind"],
    },
    {
      title: "Music Player",
      emoji: "🎵",
      description: "Lightweight music streaming app with clean UI and responsive design.",
      image: "/images/music.png",
      link: "/projects/music-web",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Todo App",
      emoji: "✅",
      description: "Task management application with local storage and modern interface.",
      image: "/images/todo.png",
      link: "/projects/todo",
      tags: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Portfolio",
      emoji: "🌐",
      description: "Personal portfolio showcasing projects and skills with responsive design.",
      image: "/images/portfolio.png",
      link: "/projects/portfolio",
      tags: ["Next.js", "Tailwind", "React"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded-full mb-4">
            Latest Work
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Featured Projects
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Showcasing full-stack applications, APIs, and interactive experiences
          </p>
        </div>

        {/* Projects Grid - 3 per row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group"
            >
              <div className="bg-white rounded-sm border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <div className="flex items-center text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    View Project
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
