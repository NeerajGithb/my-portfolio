import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/NeerajGithb",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/neerajv07/",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/NeerajOnLeet",
    },
    {
      name: "Email",
      href: "mailto:neerajvishwakarma726689@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Selected Work", href: "/projects" },
    { name: "ResuPulse Architecture", href: "/projects/resupulse" },
    { name: "Furniture Platform", href: "/projects/furniture" },
    { name: "Technical Skills", href: "/skills" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-neutral-950 rounded-sm flex items-center justify-center font-mono font-bold text-xs text-white">
                NV
              </div>
              <span className="text-sm font-bold tracking-tight text-neutral-950">
                Neeraj Vishwakarma
              </span>
            </div>

            <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
              Full-Stack Developer building AI-powered products across the stack, from
              API design and backend systems to LLM orchestration and cloud infrastructure.
              Creator of ResuPulse.
            </p>

            <div className="text-xs font-mono text-neutral-500 pt-1">
              Based in Delhi NCR, India &bull; Open for remote &amp; on-site opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 mb-3">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-600 hover:text-neutral-950 transition-colors inline-flex items-center gap-1.5"
                  >
                    {item.name}
                    <span className="text-neutral-400 text-[10px]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
          <div>
            &copy; {currentYear} Neeraj Vishwakarma. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="font-mono text-[11px] text-neutral-400">
            Engineered for production scale
          </div>
        </div>
      </div>
    </footer>
  );
}