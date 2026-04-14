"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Explore", href: "/internships", hasDropdown: true },
  { name: "Categories", href: "#categories" },
  { name: "Success Stories", href: "#testimonials" },
];

const categories = [
  { name: "Machine Learning", href: "/internships/machine-learning" },
  { name: "Data Structures", href: "/internships/dsa" },
  { name: "Digital Marketing", href: "/internships/digital-marketing" },
  { name: "Python Development", href: "/internships/python-development" },
  { name: "Backend Development", href: "/internships/backend-development" },
  { name: "Accounting & Finance", href: "/internships/accounting-finance" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="container-premium">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold text-slate-800">
                Intern<span className="text-blue-600">roll</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setIsExploreOpen(!isExploreOpen)}
                      onMouseEnter={() => setIsExploreOpen(true)}
                      className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExploreOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && isExploreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setIsExploreOpen(false)}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {categories.map((cat) => (
                            <Link
                              key={cat.name}
                              href={cat.href}
                              className="block px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/login"
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/internships"
                className="btn-primary text-sm"
              >
                Start Internship
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
          >
            <div className="p-6 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search internships..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Links */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Categories
                </p>
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-slate-600 hover:text-blue-600 font-medium border-b border-slate-100"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 text-center text-slate-600 font-medium border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/internships"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 text-center btn-primary"
                >
                  Start Internship
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
