"use client";

import { motion } from "framer-motion";

export default function MobileApp() {
  return (
    <section id="app" className="py-[100px] px-[5%] bg-[#f8faff]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
                Mobile App
              </span>
              <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
                Learn anywhere,<br /><em className="text-[#1a56db]">anytime — even offline</em>
              </h2>
              <p className="text-base text-[#64748b] max-w-[560px] leading-[1.7] mb-10">
                Our award-winning app makes it effortless to learn on the go. Download lessons, track progress, and stay motivated.
              </p>
            </motion.div>

            <div className="space-y-6 mb-10">
              {[
                { icon: "📲", title: "Offline Downloads", desc: "Download full lessons and watch without internet — perfect for travel." },
                { icon: "📊", title: "Progress Tracking", desc: "Smart progress tracking with daily streaks, reminders, and milestones." },
                { icon: "🔔", title: "Smart Notifications", desc: "Never miss a live class, assignment deadline, or mentor session." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-[46px] h-[46px] bg-gradient-to-br from-[rgba(26,86,219,0.12)] to-[rgba(6,182,212,0.08)] rounded-xl flex items-center justify-center text-[1.2rem] border border-[rgba(26,86,219,0.15)] flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[0.95rem] text-[#0a1628] mb-1">{f.title}</h4>
                    <p className="text-[0.82rem] text-[#64748b] leading-[1.5]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-[#e2e8f0] rounded-[14px] hover:border-[#1a56db] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(10,22,40,0.10)] transition-all">
                <span className="text-[1.6rem]">🍎</span>
                <div className="text-left">
                  <div className="text-[0.7rem] text-[#64748b]">Download on the</div>
                  <div className="text-[0.9rem] font-bold text-[#0a1628]">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 px-5 py-3 bg-white border-2 border-[#e2e8f0] rounded-[14px] hover:border-[#1a56db] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(10,22,40,0.10)] transition-all">
                <span className="text-[1.6rem]">🤖</span>
                <div className="text-left">
                  <div className="text-[0.7rem] text-[#64748b]">Get it on</div>
                  <div className="text-[0.9rem] font-bold text-[#0a1628]">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-[220px]">
              <div className="bg-[#0a1628] rounded-[44px] overflow-hidden shadow-[0_40px_80px_rgba(10,22,40,0.35)] border-[8px] border-[#0a1628] relative">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[60px] h-2 bg-black/40 rounded-full z-10" />
                <div className="aspect-[9/19.5] bg-gradient-to-br from-[#0f2044] to-[#0a1628] p-6 pt-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[0.75rem] font-bold text-white">My Learning</span>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="User" className="w-7 h-7 rounded-full object-cover" />
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-3.5 mb-3 border border-white/[0.08]">
                    <div className="h-20 rounded-lg overflow-hidden mb-2.5 bg-[#475569]">
                      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=240&h=120&fit=crop" alt="Course" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[0.7rem] font-semibold text-white mb-1.5">Full-Stack Development</div>
                    <div className="text-[0.62rem] text-white/40 mb-1.5">68% complete · Module 4 of 6</div>
                    <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[68%] h-full bg-gradient-to-r from-[#1a56db] to-[#06b6d4] rounded-full" />
                    </div>
                  </div>
                  <div className="text-[0.68rem] font-semibold text-white/50 uppercase tracking-[0.05em] mb-2">Up Next</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg p-2 border border-white/[0.06]">
                      <div className="w-7 h-7 rounded-lg bg-[rgba(26,86,219,0.3)] flex items-center justify-center text-[0.7rem]">▶</div>
                      <span className="text-[0.65rem] text-white/70 flex-1 leading-[1.3]">REST API Authentication</span>
                      <span className="text-[0.7rem] text-[#10b981]">✓</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[rgba(26,86,219,0.15)] rounded-lg p-2 border border-[rgba(26,86,219,0.3)]">
                      <div className="w-7 h-7 rounded-lg bg-[rgba(26,86,219,0.5)] flex items-center justify-center text-[0.7rem]">▶</div>
                      <span className="text-[0.65rem] text-white flex-1 leading-[1.3]">JWT & OAuth 2.0</span>
                      <span className="text-[0.6rem] text-[#1a56db] font-semibold">14m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
