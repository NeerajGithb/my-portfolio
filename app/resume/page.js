"use client";

import Link from "next/link";
import { Button } from "../components/UI";

export default function Resume() {
  return (
    <div className="min-h-screen bg-neutral-100 py-10 print:py-0 print:bg-white print:min-h-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0 print:max-w-full print:mx-0">
        {/* Top Action Bar (Hidden on print) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-sm border border-neutral-200 shadow-sm print:hidden">
          <div>
            <h1 className="text-xl font-bold text-neutral-950">Curriculum Vitae</h1>
            <p className="text-xs text-neutral-600">
              Synchronized with master resume &bull; Optimized for 1-page A4 PDF output
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-sm hover:bg-neutral-800 transition-colors text-xs font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Download / Print PDF
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-neutral-100 text-neutral-800 rounded-sm hover:bg-neutral-200 transition-colors text-xs font-medium border border-neutral-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Printable Resume Sheet (Mirrors main.tex 1-to-1) */}
        <div
          id="resume-content"
          className="bg-white border border-neutral-300 rounded-sm p-8 sm:p-10 shadow-sm print:border-0 print:shadow-none print:p-0 print:text-[8.5pt]"
        >
          {/* Header */}
          <header className="text-center border-b border-neutral-300 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-neutral-950 tracking-tight mb-1 print:text-[16pt]">
              Neeraj Vishwakarma
            </h2>
            <div className="text-sm font-semibold text-neutral-700 mb-2 print:text-[10pt]">
              Full-Stack Developer
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-600 print:text-[8.5pt]">
              <span>Phone: +91 8287168307</span>
              <span className="text-neutral-300">|</span>
              <a
                href="mailto:neerajvishwakarma726689@gmail.com"
                className="text-brand-700 hover:underline"
              >
                neerajvishwakarma726689@gmail.com
              </a>
              <span className="text-neutral-300">|</span>
              <a
                href="https://www.linkedin.com/in/neerajv07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:underline"
              >
                LinkedIn
              </a>
              <span className="text-neutral-300">|</span>
              <a
                href="https://github.com/NeerajGithb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:underline"
              >
                GitHub
              </a>
              <span className="text-neutral-300">|</span>
              <a
                href="https://leetcode.com/NeerajOnLeet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:underline"
              >
                LeetCode
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs text-neutral-700 leading-relaxed print:text-[8.5pt]">
              Full-Stack Developer specializing in AI-powered products end to end. Most recently built and scaled
              ResuPulse, an AI resume-analysis platform with a distributed multi-agent architecture.
              Engineers across the stack, from API and backend systems to LLM orchestration and cloud infrastructure.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Experience
            </h3>

            <div className="space-y-2">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="text-xs font-bold text-neutral-950 print:text-[9pt]">
                    Full-Stack Developer, ResuPulse
                  </div>
                  <div className="text-xs font-mono text-neutral-600 print:text-[8pt]">
                    2026 -- Present
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-neutral-600 italic mb-1.5 print:text-[8pt]">
                  <span>Next.js, TypeScript, Groq, BullMQ, Redis, MongoDB, AWS, Cloudflare</span>
                  <a
                    href="https://resupulse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline not-italic font-mono"
                  >
                    resupulse.com
                  </a>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700 leading-relaxed print:text-[8.5pt]">
                  <li>
                    Architected and built ResuPulse end to end, combining seven deterministic analysis engines with eight parallel LLM agents into a production AI analysis platform.
                  </li>
                  <li>
                    Scaled the platform to 13K+ registered users and 50K+ monthly visitors, handling 1M+ requests on its peak day.
                  </li>
                  <li>
                    Designed an asynchronous multi-agent inference pipeline using BullMQ priority queues, Redis Pub/Sub for real-time progress streaming, and pre-inference PII redaction.
                  </li>
                  <li>
                    Built an unstructured document ingestion pipeline for complex PDF layouts, combining spatial geometry analysis, table detection, and OCR fallback.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Projects
            </h3>

            <div className="space-y-2">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="text-xs font-bold text-neutral-950 print:text-[9pt]">
                    Furniture E-Commerce Platform
                  </div>
                  <div className="text-xs font-mono text-neutral-600 print:text-[8pt]">
                    2025
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-neutral-600 italic mb-1.5 print:text-[8pt]">
                  <span>Next.js, TypeScript, MongoDB, Redis, Razorpay, Groq, Zod</span>
                  <a
                    href="https://furnitur.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline not-italic font-mono"
                  >
                    furnitur.online
                  </a>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700 leading-relaxed print:text-[8.5pt]">
                  <li>
                    Built a dual-application e-commerce platform with separate customer and seller/admin portals, using domain services, repository-based data access, and validated API boundaries.
                  </li>
                  <li>
                    Implemented atomic checkout transactions using MongoDB multi-document ACID sessions, bulkWrite stock updates, and idempotent Razorpay webhook processing to prevent duplicate fulfillment.
                  </li>
                  <li>
                    Developed a Redis caching layer with cursor-based, non-blocking SCAN invalidation, keeping seller/admin updates synchronized with the customer storefront.
                  </li>
                  <li>
                    Designed product discovery and customer interaction features using natural-language search, fuzzy matching, autocomplete, and a catalog-grounded AI shopping assistant.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Technical Skills
            </h3>

            <div className="space-y-1 text-xs text-neutral-700 print:text-[8.5pt] print:space-y-0.5 leading-snug">
              <div>
                <strong className="text-neutral-900">Languages:</strong> TypeScript, JavaScript, Python
              </div>
              <div>
                <strong className="text-neutral-900">Frontend:</strong> Next.js, React, Tailwind CSS, Zustand, TanStack Query
              </div>
              <div>
                <strong className="text-neutral-900">Backend:</strong> Node.js, Express.js, REST APIs, BullMQ, Zod, Razorpay
              </div>
              <div>
                <strong className="text-neutral-900">Databases &amp; Caching:</strong> MongoDB, Redis, Mongoose
              </div>
              <div>
                <strong className="text-neutral-900">AI &amp; LLM:</strong> Groq, Multi-Agent Orchestration, Tool Calling, SSE Streaming, Prompt Engineering
              </div>
              <div>
                <strong className="text-neutral-900">Cloud &amp; DevOps:</strong> AWS (EC2, S3, ElastiCache), Azure, Cloudflare, Docker, Nginx, Load Balancing, CI/CD (GitHub Actions)
              </div>
              <div>
                <strong className="text-neutral-900">Security:</strong> OAuth 2.0, JWT, RBAC, bcrypt, CSRF Protection, HMAC-SHA256
              </div>
              <div>
                <strong className="text-neutral-900">Testing &amp; Tools:</strong> Vitest, Postman, Git
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Education
            </h3>

            <div className="flex flex-wrap items-baseline justify-between gap-1 text-xs">
              <div>
                <div className="font-bold text-neutral-900 print:text-[9pt]">
                  Bachelor of Computer Applications (BCA)
                </div>
                <div className="text-neutral-600">IPEM College, Ghaziabad, Uttar Pradesh</div>
              </div>
              <div className="text-xs font-mono text-neutral-600 print:text-[8pt]">
                2023 -- 2026
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Achievements
            </h3>
            <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 print:text-[8.5pt]">
              <li>Secured 1st place in a college coding contest at IPEM College.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
