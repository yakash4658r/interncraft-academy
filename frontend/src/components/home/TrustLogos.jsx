"use client";

export default function TrustLogos() {
  const logos = [
    { name: "Google", color: "#1a73e8", initial: "G" },
    { name: "Microsoft", color: "#0078d4", initial: "M" },
    { name: "Amazon", color: "#ff9900", initial: "A" },
    { name: "IBM", color: "#054ada", initial: "I" },
    { name: "LinkedIn", color: "#0a66c2", initial: "L" },
    { name: "Adobe", color: "#e44c34", initial: "A" },
    { name: "Spotify", color: "#1db954", initial: "S" },
    { name: "Apple", color: "#000", initial: "A" },
  ];

  return (
    <section className="py-12 px-[5%] bg-[#f1f5f9] border-y border-[#e2e8f0]">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-xs font-semibold tracking-[0.1em] text-[#64748b] uppercase mb-7">
          Trusted by learners from top companies worldwide
        </p>
        <div className="overflow-hidden relative">
          <div className="flex gap-[60px] animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-2.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default whitespace-nowrap flex-shrink-0">
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-[0.8rem] font-bold text-white" style={{ background: logo.color }}>
                  {logo.initial}
                </div>
                <span className="font-bold text-[1.05rem] text-[#64748b]">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
