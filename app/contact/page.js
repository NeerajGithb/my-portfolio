"use client";

import { Card } from "../components/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "neerajvishwakarma6484@gmail.com",
      href: "mailto:neerajvishwakarma6484@gmail.com",
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+91 0000000000",
      href: "tel:+910000000000",
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Delhi 110092",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/NeerajGithb",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/neeraj-vishwakarma-b87592281",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      href: "https://x.com/NeerajVish89018",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, inquiries, or just to say hello!
          </p>
        </div>

        {/* Contact Information */}
        <Card className="p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            Contact Details
          </h2>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary-100 text-primary-600">
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-neutral-900 mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-neutral-600">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 mb-4">
              Connect on Social Media
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors group"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="w-5 h-5 text-neutral-700"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Card>

        {/* Optional: CTA Card */}
        <Card className="p-6 sm:p-8 text-center bg-primary-50 border-primary-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Available for Opportunities
          </h3>
          <p className="text-sm text-neutral-600">
            I'm currently open to full-time positions and freelance projects.
          </p>
        </Card>
      </div>
    </div>
  );
}
