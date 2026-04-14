"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { internships, categories } from "@/lib/internships";
import { Search, Star, Clock, Users, ArrowRight, SlidersHorizontal, TrendingUp, Sparkles } from "lucide-react";

const sortOptions = [
  { value: "trending", label: "Trending", icon: TrendingUp },
  { value: "newest", label: "Newest", icon: Sparkles },
  { value: "rating", label: "Highest Rated", icon: Star },
];

export default function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("trending");

  const filteredInternships = useMemo(() => {
    let result = [...internships];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(query) ||
          i.tagline.toLowerCase().includes(query) ||
          i.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((i) => i.slug === selectedCategory || i.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    // Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "trending":
      default:
        result.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-premium">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Explore Programs
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
                Find your perfect internship
              </h1>
              <p className="text-lg text-slate-600">
                Browse our collection of industry-leading internship programs designed 
                to accelerate your career.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-slate-200 sticky top-16 bg-white/95 backdrop-blur-md z-30">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            {/* Search */}
            <FadeIn className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search internships, skills, or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </FadeIn>

            {/* Sort Dropdown */}
            <FadeIn delay={0.1} className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-slate-600">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Sort by:</span>
              </div>
              <div className="flex gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sortBy === option.value
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{option.label}</span>
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Category Chips */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2 mt-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-premium">
          {filteredInternships.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternships.map((internship) => (
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
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full">
                            {internship.level}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-xs font-semibold text-white rounded-full">
                            {internship.category}
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
                            <span>{(internship.studentsEnrolled / 1000).toFixed(0)}k students</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {internship.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                          {internship.skills.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                              +{internship.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                            View details
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No internships found</h3>
              <p className="text-slate-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
