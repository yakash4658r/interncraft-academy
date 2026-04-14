"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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

const testimonials = [
  {
    name: "Rahul S.",
    role: "Machine Learning Intern",
    content: "This internship helped me gain real confidence and practical skills. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Python Programming Intern",
    content: "I finally built projects that I can show in interviews. Worth every rupee!",
    rating: 5,
  },
  {
    name: "Arjun M.",
    role: "Digital Marketing Intern",
    content: "Simple, beginner-friendly, and very useful for career growth.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Students Say
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            Join 1000+ students who transformed their careers
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <Quote className="mb-4 h-8 w-8 text-blue-400" />
                
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="mb-4 text-slate-300 font-[Inter]">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                    <span className="text-sm font-bold text-blue-400">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">— {testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
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
