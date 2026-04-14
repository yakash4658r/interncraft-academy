"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { internships } from "@/lib/internships";
import { Star, Clock, Users, ArrowRight, BarChart } from "lucide-react";

export default function FeaturedInternships() {
  // Get first 4 internships for featured section
  const featuredInternships = internships.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-premium">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Featured
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Most popular internships
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600">
                Join thousands of learners in our highest-rated internship programs. 
                Start building your career today.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 btn-secondary"
            >
              View all internships
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        {/* Internships Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredInternships.map((internship) => (
            <StaggerItem key={internship.id}>
              <Link href={`/internships/${internship.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group card-premium h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] rounded-t-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {internship.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Level badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full">
                        {internship.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {internship.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
                      {internship.tagline}
                    </p>

                    {/* Rating & Students */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-slate-700">{internship.rating}</span>
                        <span className="text-slate-400">({internship.reviewCount.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Users className="w-4 h-4" />
                        <span>{(internship.studentsEnrolled / 1000).toFixed(0)}k</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-100">
                      <Clock className="w-4 h-4" />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
