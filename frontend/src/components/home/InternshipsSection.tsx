"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { fetchInternships } from "@/lib/internshipApi";
import type { Internship } from "@/lib/internships";
import { Star, Clock, BarChart3, ArrowRight } from "lucide-react";

export default function InternshipsSection() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInternships() {
      const response = await fetchInternships();
      if (response.success && response.data) {
        setInternships(response.data);
      }
      setLoading(false);
    }
    loadInternships();
  }, []);

  if (loading) {
    return (
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container-premium text-center">
          <p className="text-slate-600">Loading internships...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Internships
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our most popular internship programs designed to help you 
              launch your career in tech.
            </p>
          </FadeIn>
        </div>

        {/* Internship Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {internships.map((internship) => (
            <StaggerItem key={internship.id}>
              <Link href={`/internships/${internship.slug}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-coursera h-full flex flex-col overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">
                      {internship.title.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">
                      {internship.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2 flex-1">
                      {internship.tagline}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-amber-700">{internship.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(internship.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">
                        ({internship.reviewCount.toLocaleString()})
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="w-4 h-4" />
                        <span>{internship.level}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-3 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
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
