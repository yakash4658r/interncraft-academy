"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Globe, Link2, Share2, Video, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  internships: [
    { name: "Machine Learning", href: "/internships/machine-learning" },
    { name: "Data Structures", href: "/internships/dsa" },
    { name: "Digital Marketing", href: "/internships/digital-marketing" },
    { name: "Python Development", href: "/internships/python-development" },
    { name: "Backend Development", href: "/internships/backend-development" },
    { name: "Accounting & Finance", href: "/internships/accounting-finance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
  social: [
    { name: "Twitter", icon: Globe, href: "#" },
    { name: "LinkedIn", icon: Link2, href: "#" },
    { name: "Instagram", icon: Share2, href: "#" },
    { name: "YouTube", icon: Video, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-premium">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <FadeIn className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Intern<span className="text-blue-400">roll</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                Launch your career with mentor-led internships. Build real projects, 
                earn certificates, and get hired.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Internships */}
            <FadeIn delay={0.1}>
              <h4 className="text-white font-semibold mb-4">Internships</h4>
              <ul className="space-y-3">
                {footerLinks.internships.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Company */}
            <FadeIn delay={0.2}>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Resources */}
            <FadeIn delay={0.3}>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.4}>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 mt-0.5" />
                  <span className="text-sm text-slate-400">hello@internroll.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-500 mt-0.5" />
                  <span className="text-sm text-slate-400">+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 mt-0.5" />
                  <span className="text-sm text-slate-400">
                    Bangalore, India
                  </span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Internroll. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-slate-500 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
