import Link from "next/link";
import Image from "next/image";
import { Card, TechPill, Button, SectionHeader } from "../components/UI";

export const metadata = {
  title: "Selected Engineering Work | Neeraj Vishwakarma",
  description:
    "Production software platforms and engineering projects built by Neeraj Vishwakarma, featuring ResuPulse and Furniture E-Commerce.",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 mb-2">
            PORTFOLIO &bull; SELECTED WORK
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
            Systems &amp; Applications Built for Production
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Real software systems engineered with an emphasis on distributed architecture,
            deterministic integrity, transactional consistency, and practical AI orchestration.
          </p>
        </div>

        {/* Project 1: ResuPulse (FLAGSHIP) */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 border-brand-200 hover:border-brand-300 transition-all duration-200 shadow-sm">
            <div className="p-6 sm:p-8 lg:p-10 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-1 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold rounded-sm">
                    FLAGSHIP SYSTEM &bull; 2026 -- PRESENT
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-sm border border-emerald-200">
                    Active Production
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  resupulse.com
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                    ResuPulse &mdash; AI Resume Analysis Platform
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Architected and built ResuPulse end to end, combining <strong>seven deterministic analysis engines</strong> with 
                    <strong> eight parallel LLM specialist agents</strong> into a unified, high-throughput AI document analysis platform.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-600 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Asynchronous Multi-Agent Pipeline:</strong> BullMQ priority queues with separate concurrency lanes,
                        Redis Pub/Sub for real-time progress streaming, and pre-inference structural PII redaction.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-600 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Document Ingestion:</strong> Complex PDF parsing combining spatial layout geometry,
                        table detection algorithms, and OCR fallback for flattened files.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-600 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Production Cloud Infrastructure:</strong> Deployed on AWS EC2 (Mumbai) PM2 cluster,
                        backed by AWS ElastiCache Redis and Cloudflare edge protection.
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Next.js", "TypeScript", "Groq", "BullMQ", "Redis", "MongoDB", "AWS EC2", "Cloudflare"].map((tech) => (
                      <TechPill key={tech} variant="mono">
                        {tech}
                      </TechPill>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button href="/projects/resupulse" variant="brand" size="md">
                      Read Architecture Case Study →
                    </Button>
                    <Button href="https://resupulse.com" external variant="secondary" size="md">
                      Live Platform ↗
                    </Button>
                    <Button href="https://github.com/NeerajGithb/resupulse-engineering" external variant="outline" size="md">
                      Showcase Repo ↗
                    </Button>
                  </div>
                </div>

                {/* Architecture Highlights Card */}
                <div className="p-5 bg-neutral-900 text-white rounded-sm border border-neutral-800 space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-300">
                    System Architecture Overview
                  </div>
                  
                  <div className="space-y-3 text-xs text-neutral-300">
                    <div className="border-b border-neutral-800 pb-2">
                      <div className="text-white font-semibold">15 Specialized Units</div>
                      <div className="text-neutral-400 mt-0.5">7 deterministic fact checkers + 8 LLM diagnostic agents</div>
                    </div>
                    <div className="border-b border-neutral-800 pb-2">
                      <div className="text-white font-semibold">Sub-5s Stream Latency</div>
                      <div className="text-neutral-400 mt-0.5">Redis Pub/Sub SSE stream with stage-by-stage feedback</div>
                    </div>
                    <div className="border-b border-neutral-800 pb-2">
                      <div className="text-white font-semibold">Zero-Leak PII Filter</div>
                      <div className="text-neutral-400 mt-0.5">Scrubs contact &amp; personal identifiers before LLM ingestion</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Format A Monetization</div>
                      <div className="text-neutral-400 mt-0.5">Server-side blanked entitlement fields with zero wire leaks</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/projects/resupulse"
                      className="text-xs text-brand-300 hover:text-brand-200 font-mono flex items-center gap-1"
                    >
                      Deep-dive into the pipeline &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Project 2: Furniture E-Commerce Platform */}
        <div>
          <Card className="overflow-hidden hover:border-neutral-300 transition-all duration-200 shadow-sm">
            <div className="p-6 sm:p-8 lg:p-10 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold rounded-sm">
                    ENGINEERING PROJECT &bull; 2025
                  </span>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  furnitur.online
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                    Furniture E-Commerce Platform
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    A dual-application e-commerce platform featuring decoupled customer storefront and seller/admin
                    portals, built with transactional MongoDB sessions, non-blocking Redis cache synchronization,
                    and a catalog-grounded AI shopping assistant.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Dual-Application Architecture:</strong> Separate customer storefront and seller/admin portals
                        with domain services, repository data access, and validated Zod API boundaries.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Atomic Checkout Transactions:</strong> MongoDB multi-document ACID sessions with conditional
                        bulkWrite stock updates and idempotent Razorpay HMAC webhook verification preventing duplicate fulfillment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Distributed Redis Caching Layer:</strong> Cursor-based, non-blocking SCAN cache invalidation,
                        keeping seller and inventory updates in sync with the customer storefront without blocking the cache.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 font-mono font-bold">&bull;</span>
                      <span>
                        <strong>Catalog-Grounded AI Shopping Assistant:</strong> Natural-language search, fuzzy keyword matching,
                        autocomplete, and a Groq-powered AI shopping assistant constrained strictly to real inventory.
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Next.js", "TypeScript", "MongoDB", "Redis", "Razorpay", "Groq", "Zod", "Zustand"].map((tech) => (
                      <TechPill key={tech} variant="mono">
                        {tech}
                      </TechPill>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button href="/projects/furniture" variant="primary" size="md">
                      View Project Details &amp; Screenshots →
                    </Button>
                    <Button href="https://furnitur.online" external variant="secondary" size="md">
                      Live Platform ↗
                    </Button>
                    <Button href="https://github.com/NeerajGithb/v-furniture-client" external variant="outline" size="md">
                      Client Repository ↗
                    </Button>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="p-5 bg-neutral-50 rounded-sm border border-neutral-200 space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
                    Transactional Depth
                  </div>
                  
                  <div className="space-y-3 text-xs text-neutral-600">
                    <div className="border-b border-neutral-200 pb-2">
                      <div className="font-semibold text-neutral-900">ACID Checkout Sessions</div>
                      <div className="mt-0.5">Atomic inventory locking preventing overselling races</div>
                    </div>
                    <div className="border-b border-neutral-200 pb-2">
                      <div className="font-semibold text-neutral-900">Idempotent Webhooks</div>
                      <div className="mt-0.5">HMAC-SHA256 signature verification &amp; replay defense</div>
                    </div>
                    <div className="border-b border-neutral-200 pb-2">
                      <div className="font-semibold text-neutral-900">Non-Blocking Redis SCAN</div>
                      <div className="mt-0.5">Sweeps tag keys without blocking single-threaded Redis</div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Catalog-Grounded AI</div>
                      <div className="mt-0.5">Groq tool calling with database-bound product retrieval</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/projects/furniture"
                      className="text-xs text-brand-700 hover:text-brand-900 font-mono font-medium flex items-center gap-1"
                    >
                      View architecture &amp; screens &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
