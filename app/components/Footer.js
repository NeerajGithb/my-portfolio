"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navigation = {
        main: [
            { name: "About", href: "/about" },
            { name: "Skills", href: "/skills" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
            { name: "Resume", href: "/resume" },
        ],
        social: [
            {
                name: "GitHub",
                href: "https://github.com/NeerajGithb",
                icon: faGithub,
            },
            {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/neeraj-vishwakarma-b87592281",
                icon: faLinkedin,
            },
            {
                name: "Twitter",
                href: "https://x.com/NeerajVish89018",
                icon: faTwitter,
            },
        ],
    };

    return (
        <footer className="bg-white border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-neutral-900 rounded-sm flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">NV</span>
                            </div>
                            <span className="text-sm font-semibold text-neutral-900">
                                Neeraj Vishwakarma
                            </span>
                        </div>
                        <p className="text-sm text-neutral-600 max-w-xs">
                            Software Engineer building fast, reliable, and user-focused applications.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-3">Connect</h3>
                        <div className="flex space-x-3">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-sm border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors"
                                    aria-label={item.name}
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="w-4 h-4 text-neutral-700"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600 text-center">
                        © {currentYear} Neeraj Vishwakarma. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
