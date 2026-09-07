import Image from "next/image";
import Link from "next/link";
import { Card, TechPill, Button, SectionHeader } from "../components/UI";

export const metadata = {
  title: "About & Engineering Philosophy | Neeraj Vishwakarma",
  description:
    "Engineering philosophy, background, and production experience of Full-Stack Developer Neeraj Vishwakarma.",
};

export default function About() {
  const principles = [
    {
      title: "Deterministic Integrity Over Hallucination",
      description:
        "AI models excel at qualitative synthesis, but fail at exact math and strict layout geometry. I design hybrid systems where deterministic code guarantees factual truth while LLMs provide context.",
    },
    {
      title: "Asynchronous Workloads & Bounded Latency",
      description:
        "Long-running tasks belong in distributed queues with clear concurrency limits, rate-limit token buckets, and real-time streaming feedback rather than blocking HTTP request threads.",
    },
    {
      title: "Transactional Rigor in Data Access",
      description:
        "Race conditions and duplicate fulfillments destroy trust. I implement atomic database transactions, idempotency keys, and validated API boundaries as first-class architectural constraints.",
    },
    {
      title: "Pragmatic Cloud Operations",
      description:
        "Modern software is useless if it cannot be deployed, monitored, and scaled reliably. I prioritize automated CI/CD pipelines, process clustering, and zero-downtime rolling releases.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Profile Introduction */}
        <div className="bg-white p-8 sm:p-12 rounded-sm border border-neutral-200 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
                BACKGROUND &bull; FULL-STACK DEVELOPER
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                Neeraj Vishwakarma
              </h1>
              <p className="text-base text-neutral-700 leading-relaxed">
                Full-Stack Developer specializing in AI-powered products end to end.
                Most recently built and operate <strong>ResuPulse</strong>, an AI resume-analysis platform with a distributed multi-agent architecture.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Engineers across the stack, from API design and backend systems to LLM orchestration and cloud infrastructure.
                Focused on practical engineering: decoupling multi-agent LLM pipelines from synchronous request cycles,
                building deterministic engines that eliminate AI hallucinations, and enforcing strict transactional integrity across payments and inventory.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/resume" variant="primary" size="md">
                  View Master Resume
                </Button>
                <Button href="/contact" variant="secondary" size="md">
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-sm overflow-hidden border-2 border-neutral-200 bg-neutral-100 shadow-sm relative">
                <Image
                  src="/images/me.jpeg"
                  alt="Neeraj Vishwakarma"
                  fill
                  sizes="240px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="space-y-6">
          <SectionHeader
            label="How I Think &amp; Build"
            title="Engineering Principles"
            subtitle="Core technical convictions that guide how I architect, write, and operate software systems."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <Card key={principle.title} className="p-6 bg-white hover:border-neutral-300 transition-colors">
                <h3 className="text-sm font-bold text-neutral-950 mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Systems Built Summary */}
        <div className="space-y-6">
          <SectionHeader
            label="Verified Production Systems"
            title="Key Platforms &amp; Contributions"
            subtitle="Concrete implementations showcasing technical ownership and architectural rigor."
          />

          <div className="space-y-4">
            <Card className="p-6 bg-white">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h4 className="text-base font-bold text-neutral-950">
                  ResuPulse &mdash; AI Resume Analysis Platform
                </h4>
                <span className="text-xs font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                  2026 -- Present
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                Architected and deployed a production platform combining document geometry parsing, 7 deterministic scoring engines,
                and 8 parallel specialist LLM agents. Managed BullMQ priority queues, Redis Pub/Sub SSE streaming,
                and pre-inference PII redaction on AWS EC2.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
                <span>Architecture: Multi-Agent DAG</span>
                <span>&bull;</span>
                <span>Infrastructure: AWS EC2 &amp; Redis</span>
                <span>&bull;</span>
                <Link href="/projects/resupulse" className="text-brand-600 hover:underline">
                  View Case Study &rarr;
                </Link>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h4 className="text-base font-bold text-neutral-950">
                  Furniture E-Commerce Platform
                </h4>
                <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300">
                  2025
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                Built a dual-application platform with separate customer and seller/admin portals.
                Engineered atomic checkout transactions with MongoDB ACID sessions, bulkWrite inventory updates,
                idempotent Razorpay webhooks, cursor-based Redis SCAN invalidation, and a catalog-grounded Groq AI assistant.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
                <span>Architecture: Dual Apps</span>
                <span>&bull;</span>
                <span>Database: MongoDB ACID</span>
                <span>&bull;</span>
                <Link href="/projects/furniture" className="text-brand-600 hover:underline">
                  View Project &rarr;
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="space-y-6">
          <SectionHeader
            label="Credentials"
            title="Education &amp; Achievements"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-6 bg-white">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Degree
              </div>
              <h4 className="text-sm font-bold text-neutral-950 mb-1">
                Bachelor of Computer Applications (BCA)
              </h4>
              <div className="text-xs text-neutral-600">IPEM College, Ghaziabad, Uttar Pradesh</div>
              <div className="text-xs font-mono text-neutral-500 mt-2">2023 -- 2026</div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Recognition
              </div>
              <h4 className="text-sm font-bold text-neutral-950 mb-1">
                1st Place &mdash; College Coding Contest
              </h4>
              <div className="text-xs text-neutral-600">IPEM College</div>
              <div className="text-xs text-neutral-500 mt-2">
                Secured top honors in competitive programming and algorithmic problem-solving.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
