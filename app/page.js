"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button, Card } from "./components/UI";

export default function Home() {
  const socialLinks = [
    {
      href: "https://github.com/NeerajGithb",
      icon: faGithub,
      label: "GitHub",
      color: "neutral-900",
    },
    {
      href: "https://www.linkedin.com/in/neeraj-vishwakarma-b87592281",
      icon: faLinkedin,
      label: "LinkedIn",
      color: "primary-600",
    },
    {
      href: "https://x.com/NeerajVish89018",
      icon: faTwitter,
      label: "Twitter",
      color: "primary-500",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 relative rounded-sm overflow-hidden border border-neutral-200 shadow-sm">
              <Image
                src="/images/me.jpeg"
                alt="Neeraj Vishwakarma"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                priority
                style={{ objectFit: "cover" }}
                className="rounded-sm"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-2">
            <div className="space-y-2">
              <p className="text-sm font-medium text-neutral-900">
                Software Engineer
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Neeraj Vishwakarma
              </h1>
              <p className="text-lg text-neutral-600">
                Building fast, reliable, and scalable applications
              </p>
            </div>

            <div className="h-px bg-neutral-200"></div>

            <p className="text-base text-neutral-700 leading-relaxed">
              I&apos;m a passionate software engineer who loves building fast, reliable,
              and user-friendly applications. I work on both front-end and back-end,
              making sure everything runs smoothly. I enjoy solving complex problems
              and turning ideas into real, working solutions with clean and maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" variant="primary">
                View Projects
              </Button>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors group"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="w-5 h-5 text-neutral-700 hover:text-neutral-900 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
