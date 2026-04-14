"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rahul Sharma", role: "Software Engineer at Google", quote: "Intercraft's Full-Stack program was the turning point. The mentorship, the projects, the community — I got a job offer before I even finished the course!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", salary: "↑ ₹8L → ₹28L per year" },
  { name: "Priya Menon", role: "Data Analyst at Zepto", quote: "I was a marketing executive with zero coding knowledge. After 6 months on the Data Science path, I landed a data analyst role at a startup I love.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b7c5?w=80&h=80&fit=crop", salary: "↑ ₹5L → ₹18L per year" },
  { name: "Arjun Kapoor", role: "Product Designer at Razorpay", quote: "The UI/UX design curriculum is phenomenal. I built a portfolio of 8 projects and the instructor personally reviewed each one. Worth every rupee.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop", salary: "↑ ₹6L → ₹22L per year" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  return (
    <section id="testimonials" className="py-[100px] px-[5%] bg-[#f1f5f9]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            Success Stories
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Students who <em className="text-[#1a56db]">transformed</em><br />their careers
          </h2>
          <p className="text-base text-[#64748b] max-w-[560px] mx-auto leading-[1.7]">
            Real outcomes from real learners. Their success is our greatest achievement.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${idx * 404}px)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[380px] bg-white rounded-[var(--radius-xl)] p-8 shadow-[0_4px_24px_rgba(10,22,40,0.10)] border border-[#e2e8f0]">
                <div className="text-[2.5rem] text-[#1a56db] opacity-20 font-serif leading-none mb-3">"</div>
                <p className="text-[0.95rem] text-[#0f172a] leading-[1.7] mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3.5">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#e2e8f0]" />
                  <div>
                    <div className="font-bold text-[0.9rem] text-[#0a1628]">{t.name}</div>
                    <div className="text-[0.78rem] text-[#64748b] mb-1">{t.role}</div>
                    <div className="text-[0.78rem] font-semibold text-[#059669]">{t.salary}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => setIdx(Math.max(0, idx - 1))} className="w-11 h-11 rounded-full border-2 border-[#e2e8f0] bg-white flex items-center justify-center hover:border-[#1a56db] hover:text-[#1a56db] transition-all">←</button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-[#1a56db] w-6" : "bg-[#e2e8f0]"}`} />
            ))}
          </div>
          <button onClick={() => setIdx(Math.min(testimonials.length - 1, idx + 1))} className="w-11 h-11 rounded-full border-2 border-[#e2e8f0] bg-white flex items-center justify-center hover:border-[#1a56db] hover:text-[#1a56db] transition-all">→</button>
        </div>
      </div>
    </section>
  );
}
