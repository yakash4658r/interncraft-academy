"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-[120px] px-[5%] bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] relative overflow-hidden text-center">
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(26,86,219,0.18)_0%,transparent_65%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[800px] mx-auto"
      >
        <span className="inline-block px-[14px] py-[5px] bg-[rgba(96,165,250,0.15)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#60a5fa] uppercase mb-5">
          Start Today
        </span>
        <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.2rem)] font-bold text-white mb-5 tracking-[-0.02em] leading-[1.15]">
          Start learning from the<br />world&apos;s <em className="text-[#60a5fa]">best mentors</em>
        </h2>
        <p className="text-[1.05rem] text-[rgba(255,255,255,0.6)] max-w-[540px] mx-auto mb-10 leading-[1.7]">
          Join 50,000+ learners who&apos;ve transformed their careers with Intercraft Academy. Your next chapter starts now.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-9 py-4 bg-white text-[#0a1628] rounded-full font-bold text-base hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(255,255,255,0.25)] transition-all">
            Explore All Courses →
          </button>
          <button className="px-9 py-4 bg-[rgba(255,255,255,0.08)] text-white border-2 border-[rgba(255,255,255,0.2)] rounded-full font-semibold text-base backdrop-blur hover:bg-[rgba(255,255,255,0.15)] hover:-translate-y-[2px] transition-all">
            Watch Success Stories
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 text-[0.85rem] text-[rgba(255,255,255,0.55)]">
          <span>✓ Free 7-day trial</span>
          <span className="w-1 h-1 bg-[rgba(255,255,255,0.25)] rounded-full" />
          <span>✓ No credit card needed</span>
          <span className="w-1 h-1 bg-[rgba(255,255,255,0.25)] rounded-full" />
          <span>✓ Cancel anytime</span>
        </div>
      </motion.div>
    </section>
  );
}
