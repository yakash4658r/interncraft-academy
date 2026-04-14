"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { categories } from "@/lib/internships";
import { Brain, Code, TrendingUp, Terminal, Server, Calculator, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code,
  TrendingUp,
  Terminal,
  Server,
  Calculator,
};

const colorClasses = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-pink-500 to-pink-600",
  "from-green-500 to-green-600",
  "from-orange-500 to-orange-600",
  "from-teal-500 to-teal-600",
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="container-premium">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Categories
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Explore internship tracks
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600">
                Choose from our most popular tracks designed with industry leaders 
                to give you job-ready skills.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              View all internships
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            const gradient = colorClasses[index % colorClasses.length];
            
            return (
              <StaggerItem key={category.slug}>
                <Link href={`/internships/${category.slug}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">
                      {category.count} internships available
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore track
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
