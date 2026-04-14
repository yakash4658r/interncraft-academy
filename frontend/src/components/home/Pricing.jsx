"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-[100px] px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            Plans & Pricing
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Simple, <em className="text-[#1a56db]">transparent</em> pricing
          </h2>
          <p className="text-base text-[#64748b] max-w-[560px] mx-auto leading-[1.7]">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-[0.9rem] font-medium text-[#64748b]">Monthly</span>
          <button onClick={() => setYearly(!yearly)} className={`w-[52px] h-7 rounded-full relative cursor-pointer transition-all ${yearly ? "bg-[#1a56db]" : "bg-[#1a56db]"}`}>
            <div className={`absolute top-[3px] w-[22px] h-[22px] bg-white rounded-full transition-all shadow-[0_2px_8px_rgba(0,0,0,0.15)] ${yearly ? "left-[27px]" : "left-[3px]"}`} />
          </button>
          <span className="text-[0.9rem] font-medium text-[#64748b]">Annual</span>
          <span className="px-[10px] py-[3px] bg-[rgba(16,185,129,0.1)] rounded-full text-[0.75rem] font-bold text-[#059669]">Save 40%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[var(--radius-xl)] p-9 border-2 border-[#e2e8f0] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(10,22,40,0.18)]"
          >
            <h3 className="text-[1.1rem] font-semibold text-[#0a1628] mb-1.5">Free</h3>
            <p className="text-[0.82rem] text-[#64748b] mb-5">Explore and discover</p>
            <div className="mb-7">
              <span className="font-['Fraunces'] text-[2.8rem] font-bold text-[#0a1628]">₹0</span>
              <span className="text-[0.875rem] text-[#64748b]">/month</span>
            </div>
            <ul className="space-y-3 mb-7">
              {["Access to 50+ free courses", "Community forums", "Course previews"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[0.875rem] text-[#0f172a]">
                  <span className="w-5 h-5 bg-[rgba(26,86,219,0.1)] rounded-full flex items-center justify-center text-[0.68rem] text-[#1a56db]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 border-2 border-[#1a56db] text-[#1a56db] rounded-[var(--radius-md)] font-semibold text-[0.9rem] hover:bg-[#1a56db] hover:text-white transition-all">
              Get Started Free
            </button>
          </motion.div>

          {/* Plus */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[var(--radius-xl)] p-9 border-2 border-[#1a56db] relative"
            style={{ background: "linear-gradient(160deg, rgba(26,86,219,0.02), rgba(6,182,212,0.02))" }}
          >
            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 px-4 py-[5px] bg-gradient-to-r from-[#1a56db] to-[#06b6d4] rounded-full text-[0.75rem] font-bold text-white whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="text-[1.1rem] font-semibold text-[#0a1628] mb-1.5">Plus</h3>
            <p className="text-[0.82rem] text-[#64748b] mb-5">For serious learners</p>
            <div className="mb-7">
              <span className="font-['Fraunces'] text-[2.8rem] font-bold text-[#0a1628]">{yearly ? "₹899" : "₹1,499"}</span>
              <span className="text-[0.875rem] text-[#64748b]">/month</span>
            </div>
            <ul className="space-y-3 mb-7">
              {["Unlimited course access", "Verified certificates", "Monthly mentor Q&A", "Offline downloads", "Priority support"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[0.875rem] text-[#0f172a]">
                  <span className="w-5 h-5 bg-[rgba(26,86,219,0.1)] rounded-full flex items-center justify-center text-[0.68rem] text-[#1a56db]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 bg-gradient-to-r from-[#1a56db] to-[#1d4ed8] text-white rounded-[var(--radius-md)] font-semibold text-[0.9rem] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,86,219,0.4)] transition-all">
              Start 7-Day Free Trial
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[var(--radius-xl)] p-9 border-2 border-[#e2e8f0] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(10,22,40,0.18)]"
          >
            <h3 className="text-[1.1rem] font-semibold text-[#0a1628] mb-1.5">Enterprise</h3>
            <p className="text-[0.82rem] text-[#64748b] mb-5">For teams & businesses</p>
            <div className="mb-7">
              <span className="font-['Fraunces'] text-[2.8rem] font-bold text-[#0a1628]">Custom</span>
            </div>
            <ul className="space-y-3 mb-7">
              {["Everything in Plus", "Dedicated account manager", "Custom learning paths", "Advanced analytics", "SSO & LMS integration"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[0.875rem] text-[#0f172a]">
                  <span className="w-5 h-5 bg-[rgba(26,86,219,0.1)] rounded-full flex items-center justify-center text-[0.68rem] text-[#1a56db]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 border-2 border-[#1a56db] text-[#1a56db] rounded-[var(--radius-md)] font-semibold text-[0.9rem] hover:bg-[#1a56db] hover:text-white transition-all">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
