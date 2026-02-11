"use client";

import Image from "next/image";
import { Card, Button } from "../components/UI";

export default function About() {
  const skills = [
    { name: "JavaScript", description: "Building interactive web applications" },
    { name: "React.js & Next.js", description: "Efficient and scalable UI components" },
    { name: "Node.js & Express", description: "Backend services and RESTful APIs" },
    { name: "MongoDB", description: "NoSQL databases for scalable solutions" },
    { name: "Tailwind CSS", description: "Modern, responsive UI design" },
  ];

  const projects = [
    { name: "Furniture E-Commerce", url: "https://your-furniture-site.vercel.app" },
    { name: "Facebook Clone", url: "https://facebook-n.vercel.app" },
    { name: "URL Shortener", url: "https://quick-n.vercel.app" },
    { name: "Music Streaming App", url: "https://music-n.vercel.app" },
    { name: "Todo App", url: "#" },
    { name: "Portfolio Website", url: "https://neerajvishwakarma.vercel.app" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="w-48 h-48 relative mx-auto lg:mx-0 rounded-sm overflow-hidden border border-neutral-200">
              <Image
                src="/images/me.jpeg"
                alt="Neeraj Vishwakarma"
                fill
                sizes="192px"
                style={{ objectFit: "cover" }}
                className="rounded-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              About Me
            </h1>
            <p className="text-base text-neutral-700 leading-relaxed">
              I'm Neeraj Vishwakarma, a passionate BCA student and full-stack developer.
              My journey into tech began with a deep curiosity about web technologies,
              and since then, I have dedicated myself to building scalable, responsive,
              and efficient applications.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-12">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              My Journey
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              My journey started with simple HTML and CSS, evolving into mastering
              JavaScript, React, and backend technologies like Node.js and MongoDB.
              Facing real-world challenges helped me refine my problem-solving skills
              and create impactful projects.
            </p>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-5" hover>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              My Values
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              I believe in writing clean, maintainable code, focusing on user experience,
              and continuously learning new technologies to stay ahead in the industry.
            </p>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Featured Projects
          </h2>
          <Card className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
                >
                  {project.name} →
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
            Let's Connect!
          </h2>
          <p className="text-base text-neutral-700 mb-6 max-w-2xl mx-auto">
            I would love to collaborate and bring ideas to life. Let's discuss
            how we can work together!
          </p>
          <Button href="/contact" variant="primary">
            Contact Me
          </Button>
        </Card>
      </div>
    </div>
  );
}
