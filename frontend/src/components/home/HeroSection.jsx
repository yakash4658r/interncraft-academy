"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen pt-[140px] pb-20 px-[5%] bg-white relative overflow-hidden flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[200px] -right-[100px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(26,86,219,0.08)_0%,transparent_70%)] animate-[blobFloat_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[150px] -left-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.07)_0%,transparent_70%)] animate-[blobFloat_10s_ease-in-out_infinite_reverse]" />
      </div>

      <style jsx>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-[14px] py-[6px] bg-gradient-to-r from-[rgba(26,86,219,0.1)] to-[rgba(6,182,212,0.1)] border border-[rgba(26,86,219,0.2)] rounded-full text-[0.8rem] font-semibold text-[#1a56db] mb-6 tracking-[0.02em]">
            <span className="w-2 h-2 bg-[#1a56db] rounded-full animate-[pulse_2s_infinite]" />
            50,000+ learners worldwide
          </div>
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.6; transform: scale(0.85); }
            }
          `}</style>

          <h1 className="font-['Fraunces'] text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold text-[#0a1628] mb-5 tracking-[-0.03em] leading-[1.1]">
            Learn without limits.<br />
            <em className="text-[#1a56db]">Build your future</em><br />
            with Intercraft.
          </h1>

          <p className="text-[1.05rem] text-[#64748b] mb-9 max-w-[480px] leading-[1.7] font-normal">
            Access world-class courses from top industry experts. Earn certificates, land better jobs, and transform your career — entirely online.
          </p>

          <div className="flex items-center bg-white border-2 border-[#e2e8f0] rounded-[14px] p-[6px] pl-5 gap-2 mb-5 shadow-[0_4px_20px_rgba(10,22,40,0.08)] max-w-[520px] focus-within:border-[#1a56db] focus-within:shadow-[0_4px_20px_rgba(26,86,219,0.15)] transition-all">
            <svg className="w-[18px] h-[18px] text-[#94a3b8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="What do you want to learn today?" className="flex-1 border-none outline-none text-[0.95rem] font-['DM_Sans'] text-[#0f172a] bg-transparent" />
            <button className="px-6 py-[11px] bg-gradient-to-r from-[#1a56db] to-[#1d4ed8] text-white border-none rounded-[10px] font-semibold text-[0.875rem] hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(26,86,219,0.4)] transition-all whitespace-nowrap">
              Search Courses
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["🖥️ Web Dev", "📊 Data Science", "🤖 AI / ML", "🎨 UI Design", "☁️ Cloud", "💼 MBA"].map((chip) => (
              <span key={chip} className="px-[14px] py-[7px] bg-[#f1f5f9] border-[1.5px] border-[#e2e8f0] rounded-full text-[0.82rem] font-medium text-[#64748b] cursor-pointer hover:bg-[rgba(26,86,219,0.06)] hover:border-[#1a56db] hover:text-[#1a56db] transition-all">
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <div className="font-['Fraunces'] text-[1.6rem] font-bold text-[#0a1628]">1,200+</div>
              <div className="text-[0.8rem] text-[#64748b] font-medium">Courses Available</div>
            </div>
            <div>
              <div className="font-['Fraunces'] text-[1.6rem] font-bold text-[#0a1628]">340+</div>
              <div className="text-[0.8rem] text-[#64748b] font-medium">Expert Instructors</div>
            </div>
            <div>
              <div className="font-['Fraunces'] text-[1.6rem] font-bold text-[#0a1628]">98%</div>
              <div className="text-[0.8rem] text-[#64748b] font-medium">Job Placement</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-[var(--radius-xl)] overflow-hidden aspect-[4/5] max-h-[580px] shadow-[0_32px_80px_rgba(10,22,40,0.20)]">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=750&fit=crop" alt="Students collaborating" className="w-full h-full object-cover" />
          </div>
          
          {/* Floating cards */}
          <div className="absolute bottom-[30%] -left-[60px] bg-white rounded-[var(--radius-md)] px-[18px] py-[14px] shadow-[0_16px_48px_rgba(10,22,40,0.18)] flex items-center gap-3 z-10 animate-[floatCard_6s_ease-in-out_infinite]">
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#fef3c7] to-[#fde68a] flex items-center justify-center text-[1.2rem]">🏆</div>
            <div>
              <div className="text-[0.82rem] font-bold text-[#0a1628] mb-0.5">Certificate Earned</div>
              <div className="text-[0.73rem] text-[#64748b]">Full-Stack Development</div>
            </div>
          </div>
          <style jsx>{`
            @keyframes floatCard {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
          `}</style>

          <div className="absolute top-[15%] -right-[50px] bg-white rounded-[var(--radius-md)] px-[18px] py-[14px] shadow-[0_16px_48px_rgba(10,22,40,0.18)] flex items-center gap-3 z-10 animate-[floatCard_6s_ease-in-out_infinite]" style={{ animationDelay: "3s" }}>
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#d1fae5] to-[#6ee7b7] flex items-center justify-center text-[1.2rem]">📈</div>
            <div>
              <div className="text-[0.82rem] font-bold text-[#0a1628] mb-0.5">Salary Boosted</div>
              <div className="text-[0.73rem] text-[#64748b]">+68% avg increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

