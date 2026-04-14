"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Heart } from "lucide-react";

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

export default function FounderSection() {
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
            Built to Bridge the Gap Between{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Learning & Real Skills
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-400"
          >
            Learn Mythos was created with one mission — to help students move beyond theory 
            and gain real-world skills that actually matter in today&apos;s job market.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-500/20 bg-blue-500/10 px-8 py-6 backdrop-blur-sm"
          >
            <p className="text-xl font-semibold text-white font-[Poppins]">
              &ldquo;Practical learning + real projects = real success.&rdquo;
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid gap-6 sm:grid-cols-3"
          >
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Fresh, industry-relevant curriculum" },
              { icon: Target, title: "Focus", desc: "Skills that employers actually want" },
              { icon: Heart, title: "Passion", desc: "Dedicated to student success" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/20 p-3">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-[Poppins] text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 font-[Inter]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
