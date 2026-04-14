"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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

const results = [
  "Gain job-ready skills",
  "Build a strong project portfolio",
  "Get real internship experience",
  "Improve confidence for interviews",
];

export default function ResultsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-[Poppins] text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            What You&apos;ll{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Achieve
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            By the end of your internship, you will:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid max-w-3xl gap-4"
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/10 px-6 py-4 backdrop-blur-sm"
              >
                <CheckCircle className="h-6 w-6 shrink-0 text-green-400" />
                <span className="text-left font-[Inter] text-lg text-slate-200">{result}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
