import Link from "next/link";
import { Card, TechPill, SectionHeader, Button } from "../components/UI";

export const metadata = {
  title: "Technical Skills & Competencies | Neeraj Vishwakarma",
  description:
    "Production technical skills and engineering domains utilized across ResuPulse and Furniture platforms by Full-Stack Developer Neeraj Vishwakarma.",
};

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      techs: ["TypeScript", "JavaScript (ES6+)", "Python"],
      context:
        "Primary development in strictly-typed TypeScript across client, server, and worker layers. Python utilized for secondary scripting, benchmarks, and data analysis.",
    },
    {
      category: "Frontend Engineering",
      techs: ["Next.js (App Router)", "React 18", "Tailwind CSS", "Zustand", "TanStack Query"],
      context:
        "Building responsive, high-performance interfaces with Server Components (RSC), decoupled client state (Zustand), and reactive server cache synchronization (TanStack Query).",
    },
    {
      category: "Backend & Queuing",
      techs: ["Node.js", "Express.js", "REST APIs", "BullMQ", "Zod", "Razorpay"],
      context:
        "Developing high-throughput REST APIs, asynchronous worker priority lanes, runtime input validation with Zod schemas, and transactional payment workflows.",
    },
    {
      category: "Databases & In-Memory Caching",
      techs: ["MongoDB", "Mongoose", "Redis", "AWS ElastiCache", "Upstash"],
      context:
        "Multi-document ACID transaction sessions, complex compound indexing, in-memory queue broker management, and non-blocking cursor-based SCAN cache invalidation.",
    },
    {
      category: "AI & LLM Orchestration",
      techs: [
        "Groq AI",
        "Multi-Agent Orchestration",
        "Tool Calling",
        "Structured Outputs (Zod)",
        "Prompt Engineering",
        "SSE Streaming",
        "PII Redaction",
      ],
      context:
        "Orchestrating 8 parallel specialist LLM agents with pre-inference structural PII anonymization, deterministic fact grounding, and sub-5s real-time SSE progress streaming.",
    },
    {
      category: "Cloud, Infrastructure & DevOps",
      techs: [
        "AWS EC2",
        "AWS S3",
        "AWS ElastiCache",
        "Cloudflare",
        "Docker",
        "Nginx",
        "PM2",
        "CI/CD (GitHub Actions)",
      ],
      context:
        "Deploying standalone Next.js builds on AWS EC2 (Mumbai) with PM2 zero-downtime rolling reloads, Cloudflare edge proxies, and automated GitHub Actions verification workflows.",
    },
    {
      category: "Security & Access Control",
      techs: ["OAuth 2.0", "JWT", "RBAC", "bcrypt", "CSRF Protection", "HMAC-SHA256"],
      context:
        "Dual-plane auth systems, role-based access control, cryptographic HMAC webhook signature verification, and server-side blanked entitlement projections.",
    },
    {
      category: "Testing, Tools & Tooling",
      techs: ["Vitest", "Postman", "Sentry", "Git", "GitHub"],
      context:
        "Comprehensive unit and integration test suites with Vitest, API contract verification via Postman, production error telemetry via Sentry, and git branching hygiene.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 mb-2">
            EXPERTISE &bull; PRODUCTION TAXONOMY
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
            Technical Skills &amp; Stack Receipts
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Every technology listed below represents practical, production-tested implementation
            backed by real systems code in ResuPulse or Furniture E-Commerce.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((group) => (
            <Card key={group.category} className="p-6 sm:p-7 hover:border-neutral-300 transition-colors bg-white">
              <div className="flex items-baseline justify-between border-b border-neutral-100 pb-2 mb-3">
                <h3 className="text-base font-bold text-neutral-950 tracking-tight">
                  {group.category}
                </h3>
                <span className="text-[11px] font-mono text-neutral-500">
                  {group.techs.length} technologies
                </span>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                {group.context}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {group.techs.map((tech) => (
                  <TechPill key={tech} variant="mono">
                    {tech}
                  </TechPill>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* System Implementation Proof Link */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-900 text-white rounded-sm border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base font-bold">Looking to see these skills in action?</h4>
            <p className="text-xs text-neutral-400">
              Read the ResuPulse architectural breakdown to observe how BullMQ, Redis, Groq multi-agent orchestration, and AWS EC2 operate in production.
            </p>
          </div>
          <Button href="/projects/resupulse" variant="brand" size="md" className="whitespace-nowrap">
            View Architecture Case Study →
          </Button>
        </div>
      </div>
    </div>
  );
}
