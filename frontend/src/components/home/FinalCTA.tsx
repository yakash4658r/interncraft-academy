"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const benefits = [
  "Industry-recognized certificate",
  "Real projects for your portfolio",
  "1-on-1 mentorship from experts",
  "Job placement support",
];

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-premium">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-6 py-16 lg:px-16 lg:py-20">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span className="text-sm font-medium text-blue-100">
                  Join 10,000+ successful learners
                </span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to launch your career?
              </h2>

              {/* Subtext */}
              <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                Start your internship today and join thousands of learners who have 
                transformed their careers with real projects and expert mentorship.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-blue-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/internships"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Explore Internships
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Log in
                </Link>
              </div>

              {/* Trust text */}
              <p className="mt-8 text-sm text-blue-200">
                14-day money-back guarantee • No questions asked
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
