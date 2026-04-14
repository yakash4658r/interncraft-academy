"use client";

import { motion } from "framer-motion";

export default function Counters() {
  const counters = [
    { num: "50", suffix: "K+", label: "Active Learners" },
    { num: "340", suffix: "+", label: "Expert Instructors" },
    { num: "1,200", suffix: "+", label: "Courses Available" },
    { num: "98", suffix: "%", label: "Learner Satisfaction" },
  ];

  return (
    <section className="py-[70px] px-[5%] bg-white border-b border-[#e2e8f0]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {counters.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center p-[30px] rounded-[var(--radius-lg)] bg-[#f1f5f9] border border-[#e2e8f0] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(10,22,40,0.10)] hover:border-[rgba(26,86,219,0.15)] transition-all"
          >
            <div className="font-['Fraunces'] text-[2.4rem] font-bold text-[#0a1628] leading-none">
              {c.num}<span className="text-[#1a56db]">{c.suffix}</span>
            </div>
            <div className="text-[0.85rem] text-[#64748b] mt-2 font-medium">{c.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
