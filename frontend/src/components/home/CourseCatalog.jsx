"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  { id: 1, cat: "tech", title: "The Complete Web Developer Bootcamp 2025", instructor: "Dr. Rohan Mehta", uni: "IIT Alumni", rating: 4.9, reviews: "28.4K", learners: "124K", duration: "52 hrs", level: "Beginner", badge: "Bestseller", badgeColor: "bg-[#f59e0b]", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop", tags: ["HTML", "CSS", "JavaScript", "React"] },
  { id: 2, cat: "data", title: "Machine Learning & AI: From Zero to Hero", instructor: "Dr. Priya Sharma", uni: "IIM Alumni", rating: 4.8, reviews: "19.2K", learners: "89K", duration: "64 hrs", level: "Intermediate", badge: "Top Rated", badgeColor: "bg-[#1a56db]", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop", tags: ["Python", "TensorFlow", "PyTorch"] },
  { id: 3, cat: "design", title: "UI/UX Design Mastery: Figma & Design Systems", instructor: "Kavya Reddy", uni: "NID Alumni", rating: 4.9, reviews: "14.8K", learners: "67K", duration: "38 hrs", level: "All Levels", badge: "New", badgeColor: "bg-[#0d9488]", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop", tags: ["Figma", "UX Research", "Prototyping"] },
  { id: 4, cat: "tech", title: "AWS Cloud Architecture Professional", instructor: "Sanjay Kumar", uni: "AWS Certified", rating: 4.7, reviews: "11.2K", learners: "54K", duration: "44 hrs", level: "Advanced", badge: "Certified", badgeColor: "bg-[#1a56db]", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=240&fit=crop", tags: ["AWS", "Docker", "Kubernetes"] },
  { id: 5, cat: "business", title: "Product Management: Strategy to Launch", instructor: "Ananya Singh", uni: "ISB Alumni", rating: 4.8, reviews: "9.6K", learners: "43K", duration: "28 hrs", level: "Intermediate", badge: "Popular", badgeColor: "bg-[#f59e0b]", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop", tags: ["Agile", "Roadmaps", "OKRs"] },
  { id: 6, cat: "data", title: "Data Analytics with Python & Tableau", instructor: "Rohit Nair", uni: "Manipal Alumni", rating: 4.7, reviews: "8.8K", learners: "39K", duration: "36 hrs", level: "Beginner", badge: "Trending", badgeColor: "bg-[#0d9488]", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop", tags: ["Python", "Tableau", "SQL"] },
  { id: 7, cat: "design", title: "Motion Design & After Effects Mastery", instructor: "Divya Krishnan", uni: "NIFT Alumni", rating: 4.6, reviews: "6.4K", learners: "28K", duration: "30 hrs", level: "Intermediate", badge: "New", badgeColor: "bg-[#0d9488]", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop", tags: ["After Effects", "Motion", "Branding"] },
  { id: 8, cat: "business", title: "Financial Modelling & Valuation", instructor: "CA Arpit Gupta", uni: "CFA Institute", rating: 4.9, reviews: "7.2K", learners: "31K", duration: "22 hrs", level: "Advanced", badge: "Top Rated", badgeColor: "bg-[#1a56db]", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop", tags: ["Excel", "Finance", "Valuation"] },
];

const tabs = [
  { id: "all", label: "All Courses" },
  { id: "tech", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "design", label: "Design" },
  { id: "data", label: "Data Science" },
];

export default function CourseCatalog() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? courses : courses.filter((c) => c.cat === activeTab);

  return (
    <section id="courses" className="py-[100px] px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[52px]"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            Course Catalog
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Top-rated courses<br />across every <em className="text-[#1a56db]">discipline</em>
          </h2>
          <p className="text-base text-[#64748b] max-w-[560px] leading-[1.7]">
            Explore thousands of courses taught by real industry practitioners — with certificates recognized by top employers.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-[18px] py-[9px] rounded-full border-[1.5px] text-[0.875rem] font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#1a56db] text-white border-[#1a56db]"
                  : "border-[#e2e8f0] text-[#64748b] hover:bg-[#1a56db] hover:text-white hover:border-[#1a56db]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[0_4px_24px_rgba(10,22,40,0.10)] transition-all hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_16px_48px_rgba(10,22,40,0.18)] border border-black/[0.05] cursor-pointer"
            >
              <div className="h-[170px] overflow-hidden relative">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.07]" />
                <span className={`absolute top-3 left-3 px-[10px] py-[4px] rounded-full text-[0.72rem] font-bold tracking-[0.04em] text-white ${course.badgeColor}`}>
                  {course.badge}
                </span>
                <button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur rounded-full border-none flex items-center justify-center text-[0.9rem] hover:bg-[#1a56db] hover:text-white transition-all">
                  🔖
                </button>
              </div>
              <div className="p-4 pb-4.5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[22px] h-[22px] rounded bg-[#f1f5f9] flex items-center justify-center text-[0.65rem] font-bold text-[#64748b]">
                    {course.uni[0]}
                  </div>
                  <span className="text-[0.75rem] text-[#64748b] font-medium">{course.uni}</span>
                </div>
                <h3 className="font-['Fraunces'] text-base font-semibold text-[#0a1628] mb-2.5 leading-[1.3] line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-[0.78rem] text-[#64748b] mb-2.5">by {course.instructor}</p>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-[#f59e0b] text-[0.8rem] tracking-[1px]">★★★★★</span>
                  <span className="text-[0.8rem] font-semibold text-[#1e293b]">{course.rating}</span>
                  <span className="text-[0.76rem] text-[#64748b]">({course.reviews})</span>
                </div>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-[10px] py-[3px] bg-[#f1f5f9] rounded-full text-[0.72rem] text-[#64748b] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                  <span className="flex items-center gap-[5px] text-[0.76rem] font-semibold text-[#1a56db]">🏆 Certificate</span>
                  <span className="text-[0.76rem] text-[#64748b]">⏱ {course.duration} · {course.level}</span>
                </div>
                <button className="w-full mt-2.5 py-2 bg-gradient-to-r from-[#1a56db] to-[#1d4ed8] text-white border-none rounded-lg text-[0.78rem] font-semibold hover:opacity-90 hover:-translate-y-px transition-all">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-[13px] rounded-full border-2 border-[#1a56db] text-[#1a56db] bg-transparent font-semibold text-[0.9rem] hover:bg-[#1a56db] hover:text-white transition-all">
            View All 1,200+ Courses →
          </button>
        </div>
      </div>
    </section>
  );
}
