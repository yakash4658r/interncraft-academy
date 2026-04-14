"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Terminal, Calculator, Video, Megaphone } from "lucide-react";
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

const programs = [
  {
    icon: Brain,
    title: "Machine Learning Basics 🤖",
    description: "Learn how machines think and build intelligent models from scratch.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Code2,
    title: "Data Structures & Algorithms 💻",
    description: "Master problem-solving and crack technical interviews with confidence.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Terminal,
    title: "Python Programming 🐍",
    description: "Build a strong programming foundation with one of the most in-demand languages.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Calculator,
    title: "Accounting 📊",
    description: "Understand financial systems, tools, and real-world business accounting.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Code2,
    title: "Backend Development 🌐",
    description: "Learn to build powerful server-side applications and APIs.",
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: Video,
    title: "Video Editing 🎬",
    description: "Create professional content using modern editing tools and techniques.",
    color: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing 📱",
    description: "Master social media, ads, and strategies to grow any business online.",
    color: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
  },
];

export default function ProgramsSection() {
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
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Career Path
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            7 industry-relevant internship programs designed to get you job-ready
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <div className="relative">
                  <div className={`mb-4 inline-flex rounded-xl bg-white/10 p-3`}>
                    <program.icon className={`h-6 w-6 ${program.iconColor}`} />
                  </div>
                  
                  <h3 className="font-[Poppins] text-lg font-semibold text-white">
                    {program.title}
                  </h3>
                  
                  <p className="mt-2 text-sm text-slate-400 font-[Inter]">
                    {program.description}
                  </p>
                  
                  <Link
                    href="/login"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:text-blue-300 hover:gap-3"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
