"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Navigate: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#integrations" },
    { name: "Contact", href: "#contact" },
  ],
  Work: [
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "X", href: "https://x.com" },
  { name: "Dribbble", href: "https://dribbble.com" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display text-white">Aviral</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-6 max-w-xs text-sm">
                Video editor crafting bold, dynamic content with cinematic color and modern motion design.
              </p>

              <div className="space-y-2 mb-8 text-sm">
                <a
                  href="mailto:aviral12312@gmail.com"
                  className="block text-white/50 hover:text-white transition-colors"
                >
                  aviral12312@gmail.com
                </a>
                <a
                  href="tel:+917906470113"
                  className="block text-white/50 hover:text-white transition-colors"
                >
                  +91 7906470113
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2025 Aviral. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
