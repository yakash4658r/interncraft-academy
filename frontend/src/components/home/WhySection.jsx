"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🎯", bg: "rgba(26,86,219,0.1)", title: "Outcome-Driven", desc: "Every course maps to real job skills employers want in 2025." },
  { icon: "🏗️", bg: "rgba(245,158,11,0.1)", title: "Industry Projects", desc: "Build a portfolio with hands-on, real-world capstone projects." },
  { icon: "🧑‍💼", bg: "rgba(16,185,129,0.1)", title: "1:1 Mentorship", desc: "Get dedicated guidance from senior industry professionals." },
  { icon: "💼", bg: "rgba(139,92,246,0.1)", title: "Placement Support", desc: "Resume reviews, interview prep, and direct employer connections." },
  { icon: "🔴", bg: "rgba(6,182,212,0.1)", title: "Live Coding", desc: "Weekly live sessions with real coding environments and Q&A." },
  { icon: "🎓", bg: "rgba(239,68,68,0.1)", title: "Verified Certificates", desc: "Blockchain-verified certificates trusted by 500+ employers." },
];

export default function WhySection() {
  return (
    <section id="why" className="py-[100px] px-[5%] bg-[#f8faff]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
                Why Intercraft
              </span>
              <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
                Everything you need to<br />accelerate your <em className="text-[#1a56db]">career</em>
              </h2>
              <p className="text-base text-[#64748b] max-w-[560px] leading-[1.7] mb-8">
                We don't just teach — we mentor, coach, and connect you with opportunities at every step of your learning journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="bg-white p-5 rounded-[var(--radius-md)] shadow-[0_4px_24px_rgba(10,22,40,0.10)] transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(10,22,40,0.18)] cursor-default"
                >
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[1.2rem] mb-3" style={{ background: f.bg }}>
                    {f.icon}
                  </div>
                  <h4 className="text-[0.9rem] font-bold text-[#0a1628] mb-1">{f.title}</h4>
                  <p className="text-[0.8rem] text-[#64748b] leading-[1.5]">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[var(--radius-xl)] overflow-hidden h-[540px] shadow-[0_16px_48px_rgba(10,22,40,0.18)] relative"
          >
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=700&fit=crop" alt="Mentor guiding student" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
