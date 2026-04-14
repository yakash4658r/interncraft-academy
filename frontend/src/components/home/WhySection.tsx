"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Briefcase, GraduationCap, Users, Trophy, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Real Projects",
    description: "Build portfolio-worthy projects that solve actual industry problems. Not tutorials—real work that impresses recruiters.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description: "Learn directly from engineers and leaders at Google, Amazon, Meta, and top startups. Get personalized feedback on your work.",
    color: "purple",
  },
  {
    icon: GraduationCap,
    title: "Verified Certificate",
    description: "Earn a certificate that 500+ companies recognize and trust. Stand out in job applications with verified credentials.",
    color: "green",
  },
  {
    icon: Trophy,
    title: "Career Outcomes",
    description: "85% of our graduates land jobs within 6 months. We provide interview prep, resume reviews, and direct referrals to hiring partners.",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600" },
  green: { bg: "bg-green-50", icon: "text-green-600" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600" },
};

export default function WhySection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Why Internroll
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Learn differently. Get hired faster.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600">
              We don&apos;t just teach theory—we immerse you in real work. 
              Our internship model ensures you graduate with skills, projects, and confidence.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => {
            const colors = colorClasses[feature.color];
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Additional Stats */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl">
            {[
              { value: "24+", label: "Live Sessions" },
              { value: "5-10", label: "Real Projects" },
              { value: "1:1", label: "Mentorship" },
              { value: "Lifetime", label: "Access" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {item.value}
                </p>
                <p className="text-blue-100 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
