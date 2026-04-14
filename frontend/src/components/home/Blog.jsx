"use client";

import { motion } from "framer-motion";

const posts = [
  { title: "The 10 Most In-Demand AI Skills to Learn in 2025", excerpt: "As generative AI reshapes industries, here are the technical and soft skills that top companies are actively hiring for right now.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop", cat: "AI & ML", author: "Aryan Dev", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop", date: "Apr 2, 2025" },
  { title: "React vs Next.js vs Remix: Which Should You Learn in 2025?", excerpt: "A comprehensive comparison of the three dominant React frameworks, with hiring data and project complexity analysis.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop", cat: "Web Dev", author: "Meera Shah", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b7c5?w=60&h=60&fit=crop", date: "Mar 28, 2025" },
  { title: "How to Negotiate a 40% Salary Hike Using Your New Tech Skills", excerpt: "Real strategies from 200+ Intercraft graduates who successfully negotiated major salary increases after completing their programs.", img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop", cat: "Career", author: "Rohan Pillai", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop", date: "Mar 20, 2025" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-[100px] px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-[14px] py-[5px] bg-[rgba(26,86,219,0.08)] rounded-full text-[0.78rem] font-bold tracking-[0.08em] text-[#1a56db] uppercase mb-4">
            Resources & Insights
          </span>
          <h2 className="font-['Fraunces'] text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#0a1628] mb-[14px] tracking-[-0.025em]">
            Learn from our <em className="text-[#1a56db]">editorial</em>
          </h2>
          <p className="text-base text-[#64748b] max-w-[560px] leading-[1.7]">
            Trending guides, skill deep-dives, and career advice from our team of industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[0_4px_24px_rgba(10,22,40,0.10)] border border-[#e2e8f0] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(10,22,40,0.18)]"
            >
              <div className="h-[200px] overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.3)] to-transparent" />
                <span className="absolute top-3 left-3 px-[10px] py-[4px] bg-white/90 rounded-full text-[0.72rem] font-bold text-[#1a56db]">
                  {post.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-['Fraunces'] text-[1.1rem] font-semibold text-[#0a1628] mb-2 leading-[1.35] line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[0.82rem] text-[#64748b] leading-[1.6] mb-3.5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={post.avatar} alt={post.author} className="w-7 h-7 rounded-full object-cover bg-[#f1f5f9]" />
                    <span className="text-[0.78rem] font-semibold text-[#0a1628]">{post.author}</span>
                  </div>
                  <span className="text-[0.75rem] text-[#64748b]">{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
