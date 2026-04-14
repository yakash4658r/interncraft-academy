"use client";

import { motion } from "framer-motion";

const liveClasses = [
  { title: "Building Scalable APIs with Node.js — Live Q&A", status: "LIVE NOW", statusColor: "bg-[rgba(239,68,68,0.9)]", time: "Started 24 mins ago · 1,240 watching", instructor: "Vikram Iyer — Sr. Engineer, Google", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop", btn: "🔴 Join Live Session" },
  { title: "Figma to Code: Advanced Prototyping Workshop", status: "STARTING SOON", statusColor: "bg-[rgba(245,158,11,0.9)]", time: "Starts in 2 hours · 580 registered", instructor: "Aisha Khan — Design Lead, Swiggy", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop", btn: "📅 Reserve Your Seat" },
  { title: "Machine Learning in Production: MLOps Masterclass", status: "UPCOMING", statusColor: "bg-[rgba(139,92,246,0.9)]", time: "Tomorrow · 11:00 AM IST · 1,820 registered", instructor: "Dr. Anand Patel — ML Researcher", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop", btn: "📅 Register Free" },
];

export default function LiveClasses() {
  return (
    <section id="live" className="py-[100px] px-[5%] bg-gradient-to-br from-[#0a1628] to-[#0d1f3c]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(239,68,68,0.15)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#f87171] uppercase mb-4">
            Live & Upcoming
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-white mb-[14px] tracking-[-0.025em]">
            Live classes & <em className="text-[#60a5fa]">expert mentorship</em>
          </h2>
          <p className="text-base text-[rgba(255,255,255,0.5)] max-w-[560px] mx-auto leading-[1.7]">
            Join live sessions, ask questions in real-time, and learn alongside thousands of peers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveClasses.map((live, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-[rgba(26,86,219,0.4)]"
            >
              <div className="h-[180px] overflow-hidden relative">
                <img src={live.img} alt={live.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[0.72rem] font-bold text-white ${live.statusColor}`}>
                  {live.status === "LIVE NOW" && <span className="w-[7px] h-[7px] bg-[#ef4444] rounded-full animate-[livePulse_1.5s_infinite]" />}
                  {live.status}
                </div>
                <style jsx>{`
                  @keyframes livePulse {
                    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
                    50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(239,68,68,0); }
                  }
                `}</style>
              </div>
              <div className="p-5">
                <h3 className="font-['Fraunces'] text-base font-semibold text-white mb-2 leading-[1.35]">{live.title}</h3>
                <p className="text-[0.8rem] text-[rgba(255,255,255,0.5)] mb-3.5">{live.time}</p>
                <div className="flex items-center gap-2.5 mb-3">
                  <img src={live.avatar} alt="Instructor" className="w-8 h-8 rounded-full object-cover border-2 border-[rgba(255,255,255,0.15)]" />
                  <span className="text-[0.82rem] text-[rgba(255,255,255,0.7)] font-medium">{live.instructor}</span>
                </div>
                <a href="#" className="block mt-3.5 py-2.5 bg-[rgba(26,86,219,0.25)] border border-[rgba(26,86,219,0.4)] rounded-[10px] text-center text-[0.82rem] font-semibold text-[#60a5fa] hover:bg-[#1a56db] hover:text-white hover:border-[#1a56db] transition-all">
                  {live.btn}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
