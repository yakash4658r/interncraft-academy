"use client";

import { motion } from "framer-motion";

const paths = [
  { icon: "🚀", title: "Full-Stack Developer Path", sub: "From HTML basics to deploying production apps on AWS.", steps: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "AWS"], duration: "6 months", progress: 65, cert: "Professional Certificate" },
  { icon: "🧠", title: "AI & Data Science Path", sub: "Master machine learning, deep learning, and real-world data projects.", steps: ["Python", "Statistics", "ML", "Deep Learning", "NLP"], duration: "8 months", progress: 30, cert: "Data Science Certificate" },
  { icon: "🎨", title: "Product Design Path", sub: "Research, prototype, and ship beautiful digital products.", steps: ["UX Research", "Figma", "Design Systems", "Usability"], duration: "4 months", progress: 0, cert: "Design Certificate" },
  { icon: "☁️", title: "Cloud & DevOps Engineer", sub: "Build, automate, and scale infrastructure like a senior engineer.", steps: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"], duration: "5 months", progress: 0, cert: "Cloud Certificate" },
  { icon: "📊", title: "Business Analytics Path", sub: "Turn data into decisions with Python, SQL, and Tableau.", steps: ["SQL", "Python", "Tableau", "Power BI", "ML Basics"], duration: "4 months", progress: 45, cert: "Analytics Certificate" },
  { icon: "💼", title: "Tech Product Manager Path", sub: "Lead products from idea to launch with industry-proven frameworks.", steps: ["Strategy", "Agile", "Roadmapping", "Analytics", "GTM"], duration: "3 months", progress: 0, cert: "PM Certificate" },
];

export default function LearningPaths() {
  return (
    <section id="paths" className="py-[100px] px-[5%] bg-gradient-to-br from-[#0a1628] to-[#0f2044]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[52px]"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(96,165,250,0.15)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#60a5fa] uppercase mb-4">
            Learning Paths
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-white mb-[14px] tracking-[-0.025em]">
            Structured paths from<br />beginner to <em className="text-[#60a5fa]">expert</em>
          </h2>
          <p className="text-base text-[rgba(255,255,255,0.55)] max-w-[560px] mx-auto leading-[1.7]">
            Follow a guided curriculum with checkpoints, projects, and a recognized certificate at the end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] p-7 cursor-pointer transition-all hover:-translate-y-1 hover:border-[rgba(26,86,219,0.5)] hover:bg-[rgba(255,255,255,0.08)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,86,219,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[rgba(26,86,219,0.3)] to-[rgba(6,182,212,0.2)] flex items-center justify-center text-[1.5rem] mb-[18px] border border-[rgba(255,255,255,0.1)]">
                  {path.icon}
                </div>
                <h3 className="font-['Fraunces'] text-[1.2rem] font-semibold text-white mb-2.5">{path.title}</h3>
                <p className="text-[0.875rem] text-[rgba(255,255,255,0.55)] leading-[1.6] mb-[18px]">{path.sub}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {path.steps.map((step, j) => (
                    <span key={j} className={`px-[10px] py-[4px] rounded-full text-[0.72rem] font-semibold border ${j < Math.floor(path.steps.length * path.progress / 100) ? "bg-[rgba(16,185,129,0.15)] text-[#6ee7b7] border-[rgba(16,185,129,0.25)]" : "bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] border-[rgba(255,255,255,0.12)]"}`}>
                      {step}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[0.8rem] text-[rgba(255,255,255,0.5)]">⏱ {path.duration}</span>
                  <span className="text-[0.78rem] text-[#60a5fa] font-semibold">🏆 {path.cert}</span>
                </div>
                <div className="h-1 bg-[rgba(255,255,255,0.1)] rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#1a56db] to-[#06b6d4] rounded-full transition-all duration-1000" style={{ width: `${path.progress}%` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
