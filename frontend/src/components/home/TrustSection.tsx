"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { stats, companyLogos } from "@/lib/internships";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

const statIcons = [Users, Users, Building2, TrendingUp];

export default function TrustSection() {
  return (
    <section className="py-16 bg-slate-50/50">
      <div className="container-premium">
        {/* Company Logos */}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Trusted by learners at leading companies
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-16">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ opacity: 0.8 }}
                className="text-xl lg:text-2xl font-bold text-slate-400 transition-opacity cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Trust Badges */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: Award, text: "Industry-recognized certificates" },
              { icon: Users, text: "Expert mentorship from top companies" },
              { icon: Building2, text: "100+ hiring partners" },
            ].map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-slate-600"
              >
                <badge.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
