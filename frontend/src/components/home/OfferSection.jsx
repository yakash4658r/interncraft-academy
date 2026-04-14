"use client";

import { motion } from "framer-motion";
import { Clock, Users, Sparkles } from "lucide-react";
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

export default function OfferSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-8 shadow-2xl backdrop-blur-md sm:p-12"
        >
          {/* Background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/30 blur-[100px]" />
          
          <div className="relative">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-300">
                <Sparkles className="h-4 w-4" />
                Limited Time Offer 🚀
              </div>
              
              <h2 className="font-[Poppins] text-3xl font-bold text-white sm:text-4xl">
                Special Discounted Price
              </h2>
              
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                Get access to internship programs at a special discounted price. 
                Join 1000+ students already learning.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-slate-400 line-through">₹4999</span>
                  <span className="text-6xl font-bold text-white sm:text-7xl">₹999</span>
                </div>
                <span className="text-lg text-slate-300">Only</span>
                <div className="mt-2">
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                    80% OFF - Limited Time
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-400" />
                <span className="text-red-300">⚠️ Limited seats available per batch</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40"
              >
                🔴 Enroll Now Before Price Increases
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
