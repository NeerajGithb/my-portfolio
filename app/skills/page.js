"use client";

import { Card } from "../components/UI";

export default function Skills() {
  const skills = [
    {
      name: "Data Structures & Algorithms",
      level: "Intermediate",
      desc: "Problem-solving skills for writing optimized and efficient code"
    },
    {
      name: "JavaScript",
      level: "Advanced",
      desc: "Expert in building interactive web applications using modern JavaScript"
    },
    {
      name: "React.js & Next.js",
      level: "Advanced",
      desc: "Building dynamic, efficient, and reusable UI components for scalable applications"
    },
    {
      name: "Node.js & Express.js",
      level: "Advanced",
      desc: "Developing scalable server-side applications and RESTful APIs"
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      desc: "NoSQL database for building modern applications with flexible data schemas"
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      desc: "Utility-first CSS framework for crafting beautiful user interfaces efficiently"
    },
    {
      name: "Git & GitHub",
      level: "Advanced",
      desc: "Version control, branching strategies, and collaborative development"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            A showcase of the technologies and tools I use to create modern,
            responsive, and scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6" hover>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {skill.name}
                </h3>
                <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {skill.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
