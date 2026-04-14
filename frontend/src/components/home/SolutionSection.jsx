"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Users, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const solutions = [
  {
    icon: GraduationCap,
    title: "Structured, beginner-friendly learning",
    description: "Step-by-step curriculum designed for complete beginners",
  },
  {
    icon: Code,
    title: "Hands-on real-world projects",
    description: "Build actual projects that you can showcase to employers",
  },
  {
    icon: Users,
    title: "Guidance & mentorship support",
    description: "Expert guidance throughout your learning journey",
  },
  {
    icon: Award,
    title: "Internship Certificate on completion",
    description: "Industry-recognized certificate to boost your resume",
  },
];

export default function SolutionSection() {
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
            A Smarter Way to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Learn, Build & Get Ahead
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            At Learn Mythos, we don&apos;t just teach — we prepare you for the real world.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.08]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/20 p-3">
                  <solution.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-[Poppins] text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 font-[Inter]">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
