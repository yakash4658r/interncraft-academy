"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] pt-24 lg:pt-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-premium relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left Content */}
          <div className="space-y-6">
            <FadeIn delay={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                Achieve Your Career Goals with{" "}
                <span className="text-blue-600">Internroll</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Gain real-world experience with industry-level internships. Learn from experts, 
                work on live projects, and build a portfolio that gets you hired.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/internships"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/25"
                >
                  Explore Internships
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-lg px-8 py-4 rounded-lg transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Video
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-2 text-sm text-slate-500 pt-2">
                <span className="font-semibold text-slate-700">Trusted by 50,000+</span> students from top companies & universities
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Student Illustration */}
          <FadeIn delay={0.2} direction="left" className="relative hidden lg:block">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Main illustration placeholder */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-800">Learn by Doing</p>
                    <p className="text-slate-600 mt-2">Real projects, real experience</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Verified</p>
                    <p className="text-xs text-slate-500">Certificate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
