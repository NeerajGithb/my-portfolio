import Image from "next/image";
import Link from "next/link";
import { Button, Card, TechPill, MetricBadge, SectionHeader } from "./components/UI";

export const metadata = {
  title: "Neeraj Vishwakarma | Full-Stack Developer & AI Systems Engineer",
  description:
    "Full-Stack Developer building AI-powered products across the stack, from API design and backend systems to LLM orchestration and cloud infrastructure. Builder of ResuPulse.",
};

export default function Home() {
  const engineeringPillars = [
    {
      title: "AI & LLM Orchestration",
      description:
        "Building multi-agent inference pipelines, structured JSON schema outputs, tool calling, real-time SSE streaming, and structural pre-inference PII sanitization to protect user data.",
      skills: ["Multi-Agent DAG", "Structured Outputs", "Prompt Engineering", "PII Redaction", "SSE Streaming", "Groq"],
    },
    {
      title: "Distributed Backend Systems",
      description:
        "Designing asynchronous queue workloads, concurrency limiters, token-bucket rate limiters, multi-document ACID transactions, and non-blocking in-memory caching.",
      skills: ["Node.js", "Express.js", "BullMQ", "Redis Pub/Sub", "MongoDB ACID", "Zod"],
    },
    {
      title: "Full-Stack Web Engineering",
      description:
        "Crafting responsive, type-safe web applications using modern Server Component patterns, accessible component design systems, and resilient client-side state management.",
      skills: ["Next.js (App Router)", "TypeScript", "React", "Tailwind CSS", "Zustand", "TanStack Query"],
    },
    {
      title: "Cloud & Production Reliability",
      description:
        "Managing standalone builds, PM2 process clusters, edge proxies, DDOS mitigation, cryptographic HMAC webhook verification, and zero-downtime rolling deployments.",
      skills: ["AWS EC2", "AWS ElastiCache", "Cloudflare", "Docker", "Nginx", "CI/CD (GitHub Actions)"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Text Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-mono text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Full-Stack &amp; AI Engineering Roles</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                  Full-Stack Developer building AI-powered products across the stack.
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 font-medium">
                  From API design and backend systems to LLM orchestration and cloud infrastructure.
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
                Specializing in AI-powered products end to end. Built and operate <strong>ResuPulse</strong>, an AI resume-analysis platform with a distributed multi-agent architecture.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/projects/resupulse" variant="brand" size="md">
                  Explore ResuPulse Architecture →
                </Button>
                <Button href="/resume" variant="primary" size="md">
                  View Resume
                </Button>
                <Button
                  href="https://github.com/NeerajGithb"
                  external
                  variant="secondary"
                  size="md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  GitHub
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Contact
                </Button>
              </div>
            </div>

            {/* Right: Technical Profile Frame (4 cols) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-sm overflow-hidden border-2 border-neutral-200 bg-neutral-100 shadow-sm relative">
                  <Image
                    src="/images/me.jpeg"
                    alt="Neeraj Vishwakarma"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Tech Terminal Card Overlay */}
                <div className="absolute -bottom-3 -left-3 bg-neutral-900 text-white px-3 py-1.5 rounded-sm border border-neutral-800 shadow-md font-mono text-[11px]">
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>AWS EC2 &bull; Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Work Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-12">
        <SectionHeader
          label="Featured Work"
          title="Production Systems &amp; Engineering Projects"
          subtitle="Direct technical ownership across architecture, backend transactions, distributed queues, and production scale."
        />

        {/* ResuPulse Flagship Showcase Card */}
        <Card className="border-2 border-brand-200 hover:border-brand-300 transition-all p-6 sm:p-8 lg:p-10 shadow-sm bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold rounded-sm">
                FLAGSHIP PRODUCT &bull; 2026 -- PRESENT
              </span>
            </div>
            <div className="text-xs font-mono text-neutral-500">resupulse.com</div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              ResuPulse &mdash; Production AI Resume Analysis Platform
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
              An AI-powered resume analysis platform combining document ingestion,
              seven deterministic scoring engines, and eight parallel specialist LLM agents.
            </p>

            {/* Architecture Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-3 py-2">
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">Hybrid Scoring Paradigm</div>
                <div className="text-neutral-600">
                  7 deterministic engines for hard layout &amp; ATS facts cross-validated by 8 LLM diagnostic agents.
                </div>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">Asynchronous Queuing &amp; SSE</div>
                <div className="text-neutral-600">
                  BullMQ priority queues with concurrency lanes and Redis Pub/Sub for real-time progress streaming.
                </div>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">In-Memory PII Redaction</div>
                <div className="text-neutral-600">
                  Structural pre-inference anonymization ensuring personal contact data never reaches LLM endpoints.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "TypeScript", "Groq", "BullMQ", "Redis", "MongoDB", "AWS EC2", "Cloudflare"].map((tech) => (
                <TechPill key={tech} variant="mono">
                  {tech}
                </TechPill>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-100">
              <Button href="/projects/resupulse" variant="brand" size="md">
                View Architecture Case Study →
              </Button>
              <Button href="https://resupulse.com" external variant="secondary" size="md">
                Live Platform ↗
              </Button>
              <Button href="https://github.com/NeerajGithb/resupulse-engineering" external variant="outline" size="md">
                Showcase Repository ↗
              </Button>
            </div>
          </div>
        </Card>

        {/* Furniture Project Card */}
        <Card className="hover:border-neutral-300 transition-all p-6 sm:p-8 lg:p-10 shadow-sm bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold rounded-sm">
                ENGINEERING PROJECT &bull; 2025
              </span>
            </div>
            <div className="text-xs font-mono text-neutral-500">furnitur.online</div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
              Furniture E-Commerce Platform
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
              Dual-application platform with decoupled customer storefront and seller/admin portals.
              Engineered with MongoDB multi-document ACID checkout transactions, bulkWrite inventory locking,
              cursor-based non-blocking Redis cache invalidation, and a catalog-grounded Groq AI assistant.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 py-2">
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">Atomic ACID Transactions</div>
                <div className="text-neutral-600">
                  Guarantees zero overselling during concurrent user checkouts with conditional bulkWrite updates.
                </div>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">Non-Blocking Redis SCAN</div>
                <div className="text-neutral-600">
                  Maintains storefront sync on admin changes without blocking Redis with heavy KEYS queries.
                </div>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs">
                <div className="font-semibold text-neutral-900 mb-1">Idempotent Razorpay Webhooks</div>
                <div className="text-neutral-600">
                  HMAC-SHA256 signature verification with idempotency keys preventing duplicate fulfillments.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "TypeScript", "MongoDB", "Redis", "Razorpay", "Groq", "Zod", "Zustand"].map((tech) => (
                <TechPill key={tech} variant="mono">
                  {tech}
                </TechPill>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-100">
              <Button href="/projects/furniture" variant="primary" size="md">
                View Project Details &amp; Screenshots →
              </Button>
              <Button href="https://furnitur.online" external variant="secondary" size="md">
                Live Site ↗
              </Button>
              <Button href="https://github.com/NeerajGithb/v-furniture-client" external variant="outline" size="md">
                Client Repo ↗
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Core Engineering Strengths Matrix */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionHeader
          label="Technical Breadth"
          title="Core Engineering Competencies"
          subtitle="Proven capability spanning user-facing applications, asynchronous distributed processing, and cloud deployment."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {engineeringPillars.map((pillar) => (
            <Card key={pillar.title} className="p-6 sm:p-7 hover:border-neutral-300 transition-colors bg-white">
              <h4 className="text-lg font-bold text-neutral-950 mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pillar.skills.map((skill) => (
                  <TechPill key={skill} variant="mono">
                    {skill}
                  </TechPill>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center text-xs font-mono font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Explore complete technical skills taxonomy &rarr;
          </Link>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-sm border border-neutral-800 space-y-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-400">
              Direct Contact &bull; Ready to Deploy
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Looking for an engineer who builds real, resilient systems?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I am actively seeking Full-Stack and AI Engineering roles where I can contribute to high-impact products,
              distributed backends, and practical LLM systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/resume" variant="brand" size="md">
              Download / Print Resume
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Get In Touch
            </Button>
            <Button
              href="mailto:neerajvishwakarma726689@gmail.com"
              external
              variant="outline"
              size="md"
              className="text-white border-neutral-700 hover:bg-neutral-900"
            >
              Email Me Directly ↗
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
