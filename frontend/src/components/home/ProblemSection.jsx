"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const problems = [
  "No practical experience",
  "No real projects to show",
  "No internships → No job opportunities",
  "Confused about where to start",
];

export default function ProblemSection() {
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
            Feeling Stuck Without{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Real Skills
            </span>{" "}
            or Internship Experience?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            Most students struggle because colleges focus on theory — not real-world skills.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid max-w-3xl gap-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-4 backdrop-blur-sm"
              >
                <XCircle className="h-6 w-6 shrink-0 text-red-400" />
                <span className="text-left font-[Inter] text-slate-200">{problem}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-slate-400"
          >
            You&apos;re not alone. And this is exactly why Learn Mythos exists.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
