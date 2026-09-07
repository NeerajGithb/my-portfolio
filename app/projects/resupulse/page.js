import Link from "next/link";
import { TechPill, Card, MetricBadge, Button, SectionHeader } from "../../components/UI";
import ScreenshotGallery from "../../components/ScreenshotGallery";
import sc1 from "./sc/1.png";
import sc2 from "./sc/2.png";
import sc3 from "./sc/3.png";
import sc4 from "./sc/4.png";

export const metadata = {
  title: "ResuPulse Architecture Case Study | Neeraj Vishwakarma",
  description:
    "Engineering deep-dive into ResuPulse: combining 7 deterministic scoring engines with 8 parallel LLM agents into an asynchronous multi-agent pipeline.",
};

export default function ResuPulseCaseStudy() {
  const architecturalSpecs = [
    { label: "Deterministic Engines", value: "7 Units", subtext: "TypeScript layout & ATS fact checks" },
    { label: "Parallel LLM Agents", value: "8 Agents", subtext: "Domain-isolated diagnostic prompts" },
    { label: "Pipeline Stages", value: "6 Stages", subtext: "Async BullMQ & Redis SSE DAG" },
    { label: "Pre-Inference Privacy", value: "100%", subtext: "In-memory PII anonymization" },
  ];

  const deterministicEngines = [
    { name: "ATS Compatibility Engine", desc: "Text stream continuity, header/footer bounds, font subsets, section headers." },
    { name: "Structure & Geometry Engine", desc: "Page budget, margin balance, font hierarchy, bullet point hygiene." },
    { name: "Skills Verification Engine", desc: "Taxonomy mapping, claimed vs demonstrated skills in work experience." },
    { name: "Experience Depth Engine", desc: "Tenure analysis, promotion progression, role density, timeline consistency." },
    { name: "Content & Impact Engine", desc: "Action verbs, quantifiable metric density, outcome-to-effort balance." },
    { name: "Projects Verification Engine", desc: "Architectural proof, repository receipts, technology coherence." },
    { name: "Writing Quality Engine", desc: "Passive voice detection, redundant adverbs, filler phrases, sentence cadence." },
  ];

  const specialistAgents = [
    { name: "Hero Verdict Agent", desc: "Produces overall diagnosis, candidate readiness level, and single most critical fix." },
    { name: "Recruiter Perspective Agent", desc: "Models recruiter hesitation points, credibility gaps, and screening questions." },
    { name: "ATS Diagnostics Agent", desc: "Deep-dives into parse failures, unmapped text blocks, and OCR discrepancies." },
    { name: "Content Impact Specialist", desc: "Generates grounded rewrites highlighting quantifiable achievements." },
    { name: "Skills Gap Specialist", desc: "Identifies missing target competencies and structural skill contradictions." },
    { name: "Experience Depth Specialist", desc: "Evaluates career trajectory, leadership indicators, and domain seniority." },
    { name: "Projects Architecture Specialist", desc: "Verifies technical rigor, architecture depth, and proof of implementation." },
    { name: "Action Plan Orchestrator", desc: "Synthesizes high-priority remediation roadmap with verification steps." },
  ];

  const pipelineStages = [
    {
      step: "01",
      title: "Document Ingestion & Geometry Analysis",
      tech: "Spatial Parsing & OCR Fallback",
      desc: "Deconstructs unstructured PDF documents using bounding-box spatial geometry, text clustering, and font-weight classification. Detects multi-column rails, irregular tables, and initiates OCR fallback when vector text streams are unreadable.",
    },
    {
      step: "02",
      title: "Pre-Inference Structural PII Redaction",
      tech: "In-Memory Privacy Filter",
      desc: "Prior to invoking external LLM providers, all candidate phone numbers, personal email addresses, home addresses, and candidate identifiers are scrubbed and anonymized in-memory. Zero sensitive personal identifiers reach inference endpoints.",
    },
    {
      step: "03",
      title: "Deterministic Fact Extraction",
      tech: "7 Deterministic Scoring Engines",
      desc: "Rules-based TypeScript engines analyze the sanitized document corpus. They calculate factual metrics: page count, margin ratios, metric densities, active/passive verb counts, and skill taxonomy matches with zero hallucination risk.",
    },
    {
      step: "04",
      title: "Distributed Queuing & Concurrency Control",
      tech: "BullMQ Priority Queues on Redis",
      desc: "Workloads are enqueued into BullMQ priority lanes on AWS ElastiCache Redis. Concurrency limiters and rate-limiting token buckets prevent upstream LLM provider throttling while ensuring fair resource allocation across Free and Pro tiers.",
    },
    {
      step: "05",
      title: "Parallel Specialist LLM Inference",
      tech: "8 Specialist Agents via Groq",
      desc: "Deterministic facts and sanitized resume sections are dispatched in parallel to 8 domain-specific LLM agents with structured JSON schema contracts. Downstream specialists reason over specific resume aspects concurrently rather than in a single bloated prompt.",
    },
    {
      step: "06",
      title: "Real-Time Streaming & Canonical Binder",
      tech: "Redis Pub/Sub & Server-Sent Events",
      desc: "Stage progress and agent outputs are streamed to the client in real time via Server-Sent Events (SSE) backed by Redis Pub/Sub. The final orchestrator binds engine facts and specialist verdicts into a strict canonical response contract.",
    },
  ];

  const platformScreenshots = [
    {
      src: sc1,
      title: "AI Resume Analysis & Multi-Dimensional Report",
      caption:
        "Comprehensive candidate evaluation with 7-dimension scoring breakdown, ATS compatibility verdict, recruiter perspective, and high-priority remediation roadmap.",
      tag: "Analysis Report",
    },
    {
      src: sc2,
      title: "Interactive Real-Time Resume Builder",
      caption:
        "Decoupled 3-axis resume engine featuring 14 typography styles, 19 career categories, and live authentic A4 document rendering.",
      tag: "Resume Builder",
    },
    {
      src: sc3,
      title: "ATS Parse Diagnostics & Machine Stream",
      caption:
        "In-depth ATS parsing test: unclipped spatial text stream extraction, section header detection, font subset verification, and machine readability health.",
      tag: "ATS Diagnostics",
    },
    {
      src: sc4,
      title: "Compare Job & Requirements Evidence Matrix",
      caption:
        "Candidate qualification comparison against target job postings, requirements evidence matching, and recruiter screening likelihood.",
      tag: "Job Match",
    },
  ];



  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Top Header Breadcrumb */}
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
            <span className="text-neutral-900 font-medium">ResuPulse</span>
          </div>

          <div className="flex items-center space-x-3">
            <TechPill variant="emerald">Production System</TechPill>
            <TechPill variant="brand">Case Study</TechPill>
          </div>
        </div>
      </div>

      {/* Hero / Executive Summary */}
      <div className="bg-white border-b border-neutral-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-50 border border-brand-200 rounded-sm text-xs font-mono font-medium text-brand-700">
              FLAGSHIP PLATFORM &bull; 2026 -- PRESENT
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              ResuPulse Architecture
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed">
              An AI-powered resume analysis platform combining unstructured document processing,
              seven deterministic scoring engines, and eight parallel LLM specialist agents
              into an asynchronous high-throughput pipeline.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <TechPill variant="mono">Next.js 14</TechPill>
              <TechPill variant="mono">TypeScript</TechPill>
              <TechPill variant="mono">Node.js</TechPill>
              <TechPill variant="mono">Groq AI</TechPill>
              <TechPill variant="mono">BullMQ</TechPill>
              <TechPill variant="mono">Redis</TechPill>
              <TechPill variant="mono">MongoDB</TechPill>
              <TechPill variant="mono">AWS EC2</TechPill>
              <TechPill variant="mono">Cloudflare</TechPill>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                href="https://resupulse.com"
                external
                variant="primary"
                size="md"
              >
                Visit Live Platform ↗
              </Button>
              <Button
                href="https://github.com/NeerajGithb/resupulse-engineering"
                external
                variant="secondary"
                size="md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Engineering Showcase Repo ↗
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Architectural Specifications Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {architecturalSpecs.map((m) => (
            <MetricBadge
              key={m.label}
              label={m.label}
              value={m.value}
              subtext={m.subtext}
              className="shadow-sm bg-white"
            />
          ))}
        </div>
      </div>

      {/* Main Narrative Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* Section: The Core Problem */}
        <div className="space-y-6">
          <SectionHeader
            label="The Engineering Challenge"
            title="Why Pure LLMs and Simple Regex Both Fail at Resume Analysis"
            subtitle="The fundamental architectural dilemma between probabilistic AI hallucinations and rigid regex pattern matchers."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 mb-2">
                Problem: The Pure LLM Approach
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">
                Hallucinations, Cost &amp; Inconsistent Scoring
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed space-y-2">
                Passing an entire raw PDF resume to a single LLM prompt results in high token costs,
                slow latency (15-30s), and volatile scoring variance (the same resume can receive
                scores varying from 65 to 88 across runs). Single-prompt LLMs also fail to reliably count
                words, compute margin distributions, or detect precise layout geometry issues.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 mb-2">
                Problem: The Pure Regex Approach
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">
                Zero Semantic Depth &amp; Rigid Keyword Stuffing
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed space-y-2">
                Legacy ATS checkers rely solely on keyword matching and regex patterns.
                They cannot evaluate whether a candidate actually demonstrated engineering
                leadership versus simply listing a buzzword. They offer no meaningful qualitative advice,
                no recruiter perspective, and no grounded bullet point rewrites.
              </p>
            </Card>
          </div>
        </div>

        {/* Section: Visual Architecture Pipeline Diagram */}
        <div className="space-y-6">
          <SectionHeader
            label="Visual Architecture"
            title="End-to-End Multi-Agent Dataflow &amp; Queue DAG"
            subtitle="How unstructured candidate resumes travel from raw bytes through privacy sanitization, deterministic engines, and parallel agent execution to SSE client delivery."
          />

          <Card className="p-6 sm:p-8 bg-neutral-900 text-white border-neutral-800">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-300 mb-6 flex items-center justify-between border-b border-neutral-800 pb-3">
              <span>Pipeline Dataflow Architecture</span>
              <span className="text-neutral-400">Total Latency: Sub-5s Streaming</span>
            </div>

            {/* Visual Connected Pipeline Steps */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-brand-400 font-bold">STAGE 01</span>
                  <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">PDF Parser</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">Spatial Ingestion</div>
                <div className="text-xs text-neutral-400">
                  Geometry bounding boxes, table detection, OCR fallback for scanned pages.
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">STAGE 02</span>
                  <span className="text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded">In-Memory</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">PII Redaction</div>
                <div className="text-xs text-neutral-400">
                  Zero phone/email/address leaks. All PII tokenized before any external LLM call.
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-brand-400 font-bold">STAGE 03</span>
                  <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">TypeScript</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">7 Fact Engines</div>
                <div className="text-xs text-neutral-400">
                  Deterministic metrics: ATS margins, typography, bullet hygiene, skills taxonomy.
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-amber-400 font-bold">STAGE 04</span>
                  <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">BullMQ + Redis</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">Priority Queuing</div>
                <div className="text-xs text-neutral-400">
                  Tier-based concurrency lanes and token bucket limiters to prevent API throttling.
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-purple-400 font-bold">STAGE 05</span>
                  <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">Groq Llama 3.3</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">8 Parallel Agents</div>
                <div className="text-xs text-neutral-400">
                  Specialized domain prompts evaluating recruiter angles, action plan &amp; rewrites.
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-4 bg-neutral-950 rounded border border-neutral-800 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-sky-400 font-bold">STAGE 06</span>
                  <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">SSE + Zod</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">Real-Time Stream</div>
                <div className="text-xs text-neutral-400">
                  Client receives live stage progress via SSE, bound into a strict canonical contract.
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Section: The Hybrid Solution */}
        <div className="space-y-6">
          <SectionHeader
            label="The Solution"
            title="The Hybrid Architecture: 7 Deterministic Engines + 8 Parallel Specialist Agents"
            subtitle="Combining mathematical certainty for objective facts with specialized LLM reasoning for qualitative diagnosis."
          />

          <Card className="p-6 sm:p-8 bg-white">
            <div className="prose prose-neutral max-w-none text-sm text-neutral-700 leading-relaxed mb-8">
              ResuPulse resolves this dilemma through a decoupled <strong>two-layer architecture</strong>:
              first, <strong>7 deterministic engines</strong> extract and score hard structural, formatting,
              and content facts; second, these verified facts are provided as structured context to
              <strong> 8 parallel specialist LLM agents</strong> running with strict Zod JSON schema validation.
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: 7 Engines */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950">
                    7 Deterministic Engines (TypeScript)
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Zero Hallucinations
                  </span>
                </div>

                <div className="space-y-3">
                  {deterministicEngines.map((engine) => (
                    <div key={engine.name} className="text-xs p-3 bg-neutral-50 rounded-sm border border-neutral-200">
                      <div className="font-semibold text-neutral-900">{engine.name}</div>
                      <div className="text-neutral-600 mt-0.5">{engine.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 8 Agents */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950">
                    8 Parallel Specialist Agents (Groq LLM)
                  </h4>
                  <span className="text-[11px] font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                    Structured Schema
                  </span>
                </div>

                <div className="space-y-3">
                  {specialistAgents.map((agent) => (
                    <div key={agent.name} className="text-xs p-3 bg-brand-50/40 rounded-sm border border-brand-100">
                      <div className="font-semibold text-neutral-900">{agent.name}</div>
                      <div className="text-neutral-600 mt-0.5">{agent.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Section: Authentic Production Interface & Report Showcase */}
        <div className="space-y-6">
          <SectionHeader
            label="Visual Showcase"
            title="Production Platform & Analysis Interface"
            subtitle="Authentic captures of the multi-dimensional scoring report, interactive resume builder, ATS stream extractor, and job match matrix."
          />

          <ScreenshotGallery items={platformScreenshots} />
        </div>



        {/* Section: The Distributed Pipeline Details */}
        <div className="space-y-6">
          <SectionHeader
            label="Pipeline Mechanics"
            title="Detailed Pipeline Execution Stages"
            subtitle="In-depth breakdown of how each asynchronous worker processes candidate payloads."
          />

          <div className="space-y-4">
            {pipelineStages.map((stage) => (
              <Card key={stage.step} className="p-5 sm:p-6 hover:border-neutral-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="font-mono text-xs font-bold text-brand-600 px-2.5 py-1 bg-brand-50 rounded border border-brand-200 self-start">
                    STAGE {stage.step}
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-neutral-950">
                        {stage.title}
                      </h4>
                      <TechPill variant="mono">{stage.tech}</TechPill>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section: Production Scale & Cloud Ops */}
        <div className="space-y-6">
          <SectionHeader
            label="Infrastructure &amp; Reliability"
            title="Production Cloud Operations"
            subtitle="Architected for zero downtime, strict rate limit compliance, and bounded compute cost."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Compute &amp; Deployment
              </div>
              <h4 className="text-sm font-bold text-neutral-950 mb-2">
                AWS EC2 &bull; PM2 Cluster
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Deployed on AWS EC2 (Mumbai region) running a PM2 process manager cluster with
                zero-downtime rolling reload. Cloudflare sits in front as an edge proxy, handling SSL,
                caching, and DDOS mitigation.
              </p>
            </Card>

            <Card className="p-6">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Queue &amp; In-Memory State
              </div>
              <h4 className="text-sm font-bold text-neutral-950 mb-2">
                AWS ElastiCache Redis
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ElastiCache Redis powers BullMQ asynchronous worker queues with distinct priority lanes,
                token-bucket rate limiters for LLM calls, and Redis Pub/Sub for SSE client progress streaming.
              </p>
            </Card>

            <Card className="p-6">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Entitlements &amp; Security
              </div>
              <h4 className="text-sm font-bold text-neutral-950 mb-2">
                Format A Dual-Plane Gating
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Server-side field-level access projection (`&#123; value: T, locked: boolean &#125;`).
                Free users receive server-blanked locked fields with zero paid data transmitted over the wire,
                preventing client-side inspection bypass.
              </p>
            </Card>
          </div>
        </div>

        {/* Public Engineering Repository Card */}
        <div className="p-6 sm:p-8 bg-neutral-900 text-white rounded-sm border border-neutral-800 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              System Architecture &bull; Engineering Deep Dive
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight">
            Explore the Complete Engineering Specifications
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
            Comprehensive system design documentation, multi-agent sequence diagrams, distributed queue state
            machines, and canonical API schemas are published in the open engineering showcase repository.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button
              href="https://github.com/NeerajGithb/resupulse-engineering"
              external
              variant="brand"
              size="md"
            >
              View Engineering Showcase on GitHub ↗
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="md"
            >
              Back to Selected Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
