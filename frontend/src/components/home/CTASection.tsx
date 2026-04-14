"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-900">
      <div className="container-premium">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Start Your Internship Journey Today
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Join 50,000+ learners who have transformed their careers with Internroll.
              Get started with our industry-recognized internships.
            </p>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-lg px-8 py-4 rounded hover:bg-slate-100 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
