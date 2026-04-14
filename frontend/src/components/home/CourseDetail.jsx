"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const modules = [
  { title: "Module 1: HTML, CSS & JavaScript Fundamentals", items: ["Setting up your dev environment", "HTML5 semantic structure", "CSS Grid & Flexbox mastery", "Modern JavaScript (ES2023)"] },
  { title: "Module 2: React & Modern Frontend", items: ["React components & JSX", "Hooks: useState, useEffect, useContext", "Redux Toolkit for state management", "Performance optimization"] },
  { title: "Module 3: Node.js & Express Backend", items: ["REST API design patterns", "MongoDB & Mongoose ORM", "Authentication with JWT", "Middleware and error handling"] },
  { title: "Module 4: Cloud & DevOps", items: ["AWS EC2, S3, RDS setup", "Docker containerization", "CI/CD pipeline with GitHub Actions", "Monitoring and scaling"] },
];

export default function CourseDetail() {
  const [open, setOpen] = useState(0);

  return (
    <section id="detail" className="py-[100px] px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            Featured Course
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Dive deep into any<br /><em className="text-[#1a56db]">course before enrolling</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[var(--radius-xl)] overflow-hidden h-[360px] relative mb-8 shadow-[0_16px_48px_rgba(10,22,40,0.18)]"
            >
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=500&fit=crop" alt="Course banner" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-[72px] h-[72px] rounded-full bg-white/95 border-none flex items-center justify-center text-[1.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-white transition-all">
                  ▶
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="text-[#f59e0b] text-[0.8rem] tracking-[1px]">★★★★★</span>
                <span className="font-semibold text-[#f59e0b]">4.9</span>
                <span className="text-[0.85rem] text-[#64748b]">(12,840 ratings) · 89,200 students</span>
                <span className="px-[10px] py-[3px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.75rem] font-bold text-[#1a56db]">Bestseller</span>
              </div>
              <h3 className="font-['Fraunces'] text-[2rem] font-bold text-[#0a1628] mb-4 tracking-[-0.02em] leading-[1.2]">
                Full-Stack Web Development:<br />React, Node.js & Cloud Deployment
              </h3>
              <div className="flex gap-2 flex-wrap mb-6">
                {["React", "Node.js", "MongoDB", "AWS", "Docker"].map((tag) => (
                  <span key={tag} className="px-3 py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-semibold text-[#1a56db]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="text-base font-bold text-[#0a1628] mb-3.5">What you'll learn</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                {["Build full-stack applications from scratch", "Deploy apps to AWS and cloud platforms", "Design RESTful APIs with Node.js", "Master React hooks and state management", "Implement authentication and security", "Work with Docker and containers"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[0.85rem] text-[#0f172a] leading-[1.4]">
                    <span className="w-5 h-5 bg-[rgba(26,86,219,0.1)] rounded-full flex items-center justify-center text-[0.7rem] text-[#1a56db] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="text-base font-bold text-[#0a1628] mb-3.5 mt-5">Course Curriculum</h4>
              <div className="space-y-2">
                {modules.map((mod, i) => (
                  <div key={i} className="border border-[#e2e8f0] rounded-lg overflow-hidden">
                    <button onClick={() => setOpen(open === i ? -1 : i)} className={`w-full px-4 py-4 flex justify-between items-center text-left ${open === i ? "bg-white" : "bg-[#f1f5f9]"} hover:bg-[rgba(26,86,219,0.04)] transition-all`}>
                      <span className="text-[0.9rem] font-semibold text-[#0a1628]">{mod.title}</span>
                      <span className={`text-[#1a56db] text-[1.1rem] transition-transform ${open === i ? "rotate-180" : ""}`}>▾</span>
                    </button>
                    <div className={`overflow-hidden transition-all ${open === i ? "max-h-[300px] py-3.5 px-4" : "max-h-0"}`}>
                      <ul className="space-y-2">
                        {mod.items.map((item) => (
                          <li key={item} className="text-[0.85rem] text-[#64748b] flex items-center gap-2 pl-2">
                            <span className="text-[0.6rem] text-[#1a56db]">▶</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:sticky lg:top-[90px]">
            <div className="bg-white rounded-[var(--radius-xl)] shadow-[0_16px_48px_rgba(10,22,40,0.18)] overflow-hidden border border-[#e2e8f0]">
              <div className="h-[180px] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" alt="Course preview" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="font-['Fraunces'] text-[2.2rem] font-bold text-[#0a1628] mb-1">₹4,999</div>
                <div className="text-[0.875rem] text-[#64748b] line-through mb-5">₹14,999 · 67% off</div>
                <button className="w-full py-4 bg-gradient-to-r from-[#1a56db] to-[#1d4ed8] text-white rounded-[var(--radius-md)] font-bold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,86,219,0.4)] transition-all mb-3">
                  Enroll Now — Limited Seats
                </button>
                <button className="w-full py-3 bg-transparent text-[#1a56db] border-2 border-[#1a56db] rounded-[var(--radius-md)] font-semibold text-[0.875rem] hover:bg-[rgba(26,86,219,0.06)] transition-all mb-5">
                  Try for Free (7 Days)
                </button>
                <ul className="space-y-2 text-[0.85rem] text-[#64748b]">
                  {["📹 68 hours of HD video", "📁 32 downloadable resources", "📱 Full mobile & TV access", "🔁 Lifetime access", "🏆 Certificate of completion", "💬 English, Hindi, Tamil"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 py-1.5 border-b border-[#f1f5f9] last:border-none">
                      <span className="text-base">{f.split(" ")[0]}</span>
                      {f.slice(2)}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-[#e2e8f0]">
                  <img src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=340&h=200&fit=crop" alt="Certificate" className="rounded-md border-2 border-[#e2e8f0] w-full" />
                  <p className="text-[0.78rem] text-[#64748b] text-center mt-2">🔐 Blockchain-verified certificate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
