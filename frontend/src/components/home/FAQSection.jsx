"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

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

const faqs = [
  {
    question: "Is this beginner friendly?",
    answer: "Yes, all programs are designed for beginners. No prior experience required.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive an internship certificate after completion.",
  },
  {
    question: "How long is the program?",
    answer: "Typically 30 days depending on the course you choose.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience required. We teach everything from scratch.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            Clear answers to common questions
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <HelpCircle className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-[Poppins] text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-slate-400 font-[Inter]">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}