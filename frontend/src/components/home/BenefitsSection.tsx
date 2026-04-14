"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Briefcase, FolderGit2, Award } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Learn Real-World Skills",
    description: "Gain practical, job-ready skills through hands-on projects designed by industry experts. Work on actual challenges faced by companies today."
  },
  {
    icon: FolderGit2,
    title: "Work on Live Projects",
    description: "Build your portfolio with real-world projects that demonstrate your abilities. Show employers what you can actually do, not just what you know."
  },
  {
    icon: Award,
    title: "Get Certified Experience",
    description: "Earn industry-recognized certificates that validate your skills. Stand out to recruiters with verified credentials from top companies."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-premium">
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
