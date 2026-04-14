"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function FinalCTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl backdrop-blur-md sm:p-12"
        >
          {/* Background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />
          
          <div className="relative text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-[Poppins] text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Start Your Career Journey{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Today 🚀
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
            >
              Don&apos;t wait. Take the first step towards building real skills and real opportunities.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Join Internship Now
                <Rocket className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm text-slate-500"
            >
              Join 1000+ students already learning • Limited spots available
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
