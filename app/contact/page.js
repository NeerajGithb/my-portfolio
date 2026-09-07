import Link from "next/link";
import { Card, TechPill, Button, SectionHeader } from "../components/UI";

export const metadata = {
  title: "Contact & Hiring | Neeraj Vishwakarma",
  description:
    "Get in touch with Neeraj Vishwakarma, Full-Stack Developer building AI-powered products, for engineering roles and collaborations.",
};

export default function Contact() {
  const contactDetails = [
    {
      label: "Direct Email",
      value: "neerajvishwakarma726689@gmail.com",
      href: "mailto:neerajvishwakarma726689@gmail.com",
      description: "Best channel for job opportunities, inquiries, and technical discussion.",
      actionLabel: "Send Email",
    },
    {
      label: "Phone / WhatsApp",
      value: "+91 8287168307",
      href: "tel:+918287168307",
      description: "Available during standard business hours (IST / UTC+5:30).",
      actionLabel: "Call Directly",
    },
    {
      label: "Location",
      value: "Delhi NCR, India",
      href: null,
      description: "Open to local on-site, hybrid, and worldwide remote opportunities.",
      actionLabel: null,
    },
  ];

  const onlineProfiles = [
    {
      platform: "GitHub",
      handle: "@NeerajGithb",
      url: "https://github.com/NeerajGithb",
      description: "Public repositories, open-source code, and ResuPulse engineering showcase.",
    },
    {
      platform: "LinkedIn",
      handle: "neerajv07",
      url: "https://www.linkedin.com/in/neerajv07/",
      description: "Professional background, verified credentials, and networking.",
    },
    {
      platform: "LeetCode",
      handle: "NeerajOnLeet",
      url: "https://leetcode.com/NeerajOnLeet",
      description: "Algorithmic problem solving, data structures, and contest history.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600">
            CONNECT &bull; HIRING INQUIRIES
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Get in Touch
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
            I am actively looking for Full-Stack Developer and AI Systems Engineering roles.
            Whether you have an open position, an engineering question about ResuPulse, or an interesting problem to solve, feel free to reach out.
          </p>
        </div>

        {/* Availability Banner */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-emerald-900">
              Active Status: Open for full-time engineering roles (Remote &bull; Hybrid &bull; On-site)
            </span>
          </div>
          <div className="text-xs font-mono text-emerald-700 hidden sm:block">
            IST (UTC+5:30)
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
            Direct Communication Channels
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactDetails.map((item) => (
              <Card key={item.label} className="p-6 bg-white hover:border-neutral-300 transition-colors">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                  {item.label}
                </div>
                <div className="text-base font-bold text-neutral-950 mb-1">
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    className="text-xs font-mono font-semibold text-brand-600 hover:text-brand-700 transition-colors inline-flex items-center gap-1"
                  >
                    {item.actionLabel} &rarr;
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Online Profiles */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
            Professional &amp; Code Profiles
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {onlineProfiles.map((profile) => (
              <Card key={profile.platform} className="p-5 bg-white hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-neutral-950">
                    {profile.platform}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">↗</span>
                </div>
                <div className="text-xs font-mono text-brand-600 mb-2">
                  {profile.handle}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {profile.description}
                </p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold text-neutral-900 hover:text-brand-600 transition-colors"
                >
                  Visit Profile &rarr;
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Direct Action Card */}
        <div className="p-6 sm:p-8 bg-neutral-950 text-white rounded-sm border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-md">
            <h3 className="text-base font-bold">Need a copy of my resume?</h3>
            <p className="text-xs text-neutral-400">
              Download the 1-page A4 PDF synchronized with my latest verified production metrics and skills.
            </p>
          </div>
          <Button href="/resume" variant="brand" size="md" className="whitespace-nowrap">
            View / Print Resume →
          </Button>
        </div>
      </div>
    </div>
  );
}
