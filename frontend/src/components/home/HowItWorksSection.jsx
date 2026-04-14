"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Briefcase, Award } from "lucide-react";

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

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Enroll in your preferred internship",
    description: "Choose from 7 industry-relevant programs",
  },
  {
    icon: BookOpen,
    step: "2",
    title: "Access structured learning modules",
    description: "Learn through step-by-step video lessons",
  },
  {
    icon: Briefcase,
    step: "3",
    title: "Work on real-world projects",
    description: "Build practical skills with hands-on assignments",
  },
  {
    icon: Award,
    step: "4",
    title: "Receive your internship certificate",
    description: "Get certified and boost your resume",
  },
];

export default function HowItWorksSection() {
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
            How It{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            Simple 4-step process to kickstart your career
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-[Poppins] text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 font-[Inter]">
                    {item.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-blue-500/50 to-transparent lg:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
