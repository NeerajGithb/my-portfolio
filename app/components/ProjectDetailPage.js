"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Button, TechPill, SectionHeader } from "./UI";

/**
 * Production-grade Technical Project Detail Page Component
 */
export default function ProjectDetailPage({
  title,
  subtitle,
  category = "PROJECT",
  year = "2025",
  description,
  techStack = [],
  architectureHighlights = [],
  keyFeatures = [],
  engineeringChallenges = [],
  screenshots = [],
  liveUrl,
  githubUrl,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Top Breadcrumb */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-neutral-900 transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{title}</span>
          </div>

          <div className="flex items-center space-x-2">
            <TechPill variant="mono">{category}</TechPill>
            <TechPill variant="mono">{year}</TechPill>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-neutral-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              {category} &bull; {year}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
                {subtitle}
              </p>
            )}

            <p className="text-sm text-neutral-600 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <TechPill key={tech} variant="mono">
                  {tech}
                </TechPill>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {liveUrl && (
                <Button href={liveUrl} external variant="primary" size="md">
                  Visit Live Site ↗
                </Button>
              )}
              {githubUrl && (
                <Button href={githubUrl} external variant="secondary" size="md">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  View Code on GitHub ↗
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Architecture & Engineering Depth */}
        {architectureHighlights.length > 0 && (
          <div className="space-y-4">
            <SectionHeader
              label="Systems Engineering"
              title="Architecture & Implementation Depth"
              subtitle="Core distributed systems patterns, database transactions, and cache consistency."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {architectureHighlights.map((item, index) => (
                <Card key={index} className="p-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700 mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Key Features Grid */}
        {keyFeatures.length > 0 && (
          <div className="space-y-4">
            <SectionHeader
              label="Capabilities"
              title="Key Features & Workflows"
              subtitle="End-to-end functionality across customer and administrative portals."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="p-4">
                  <div className="font-semibold text-xs text-neutral-900 mb-1">
                    {feature.title || feature}
                  </div>
                  {feature.description && (
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Challenges & Solutions */}
        {engineeringChallenges.length > 0 && (
          <div className="space-y-4">
            <SectionHeader
              label="Problem Solving"
              title="Technical Trade-offs & Solutions"
              subtitle="Difficult edge cases encountered and engineered during development."
            />

            <div className="space-y-3">
              {engineeringChallenges.map((challenge, index) => (
                <Card key={index} className="p-5">
                  <div className="font-semibold text-sm text-neutral-900 mb-1">
                    {challenge.problem}
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    <span className="font-semibold text-neutral-800">Resolution: </span>
                    {challenge.solution}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Screenshot Gallery */}
        {screenshots && screenshots.length > 0 && (
          <div className="space-y-4">
            <SectionHeader
              label="Visual Evidence"
              title="Interface & Experience Screenshots"
              subtitle="Production captures of customer catalog, cart, checkout, and admin platform."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-neutral-100 rounded-sm overflow-hidden cursor-pointer border border-neutral-200 hover:border-neutral-400 transition-colors group"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <Image
                    src={screenshot}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: "contain" }}
                    className="p-1 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono bg-neutral-900/80 text-white px-2 py-0.5 rounded">
                      Expand
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center bg-white/20 text-white hover:bg-white/40 rounded-full transition-colors text-sm"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>
            <div className="relative w-full h-[70vh] rounded-sm overflow-hidden">
              <Image
                src={selectedImage}
                alt="Expanded screenshot preview"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
