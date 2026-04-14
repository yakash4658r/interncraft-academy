"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Are the certificates recognized by employers?", a: "Yes! Our certificates are blockchain-verified and recognized by 500+ companies including Google, Amazon, IBM, and major startups. Many of our hiring partners actively source candidates through our platform." },
  { q: "How long does it take to complete a course?", a: "Course durations vary from 10 hours (for skill-specific courses) to 6 months (for full learning paths). Most learners spend 8-10 hours per week and complete path programs in 4-6 months." },
  { q: "Do I need prior experience to enroll?", a: "Not at all! We have beginner-friendly paths designed for complete newcomers. All you need is curiosity and a commitment to learning. Our instructors guide you from day one." },
  { q: "Can I get a refund if I'm not satisfied?", a: "Absolutely. We offer a 30-day money-back guarantee on all paid plans, no questions asked. We want you to be completely confident in your learning investment." },
  { q: "Is there placement assistance?", a: "Yes! Our Plus and Enterprise plans include career services: resume reviews, LinkedIn optimization, mock interviews with industry professionals, and direct connections to our 300+ hiring partners." },
  { q: "Can I access courses on mobile?", a: "Yes! Our app is available for iOS and Android. You can download courses for offline viewing, track your progress, join live sessions, and message your mentors — all from your phone." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-[100px] px-[5%] bg-[#f1f5f9]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            FAQs
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Got questions?<br />We&apos;ve got <em className="text-[#1a56db]">answers</em>
          </h2>
        </motion.div>

        <div className="max-w-[760px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-[var(--radius-md)] border overflow-hidden transition-all ${open === i ? "border-[#1a56db]" : "border-[#e2e8f0] hover:border-[#1a56db]"}`}
            >
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full px-6 py-5 flex justify-between items-center text-left">
                <span className="text-[0.975rem] font-semibold text-[#0a1628]">{faq.q}</span>
                <span className={`w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#1a56db] transition-all ${open === i ? "bg-[#1a56db] text-white rotate-45" : ""}`}>+</span>
              </button>
              <div className={`px-6 overflow-hidden transition-all ${open === i ? "pb-5 max-h-[300px]" : "max-h-0"}`}>
                <p className="text-[0.9rem] text-[#64748b] leading-[1.7]">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
