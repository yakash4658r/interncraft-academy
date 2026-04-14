"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { fetchInternshipBySlug, fetchInternships } from "@/lib/internshipApi";
import type { Internship } from "@/lib/internships";
import { 
  Star, Clock, Users, Check, ChevronDown, ChevronUp, Globe, 
  PlayCircle, FileText, Award, User, ChevronLeft
} from "lucide-react";

// Generate static params for all 7 internships
export function generateStaticParams() {
  return [
    { slug: "machine-learning" },
    { slug: "dsa" },
    { slug: "digital-marketing" },
    { slug: "python-development" },
    { slug: "web-development" },
    { slug: "ui-ux-design" },
    { slug: "full-stack" },
  ];
}

export default function InternshipDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [internship, setInternship] = useState<Internship | null>(null);
  const [relatedInternships, setRelatedInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  useEffect(() => {
    async function loadData() {
      if (!slug) return;
      
      const [internshipRes, allInternshipsRes] = await Promise.all([
        fetchInternshipBySlug(slug),
        fetchInternships()
      ]);
      
      if (internshipRes.success && internshipRes.data) {
        setInternship(internshipRes.data);
      }
      
      if (allInternshipsRes.success && allInternshipsRes.data) {
        // Filter related internships by same category
        const current = internshipRes.data;
        if (current) {
          const related = allInternshipsRes.data
            .filter((i: Internship) => i.id !== current.id && i.category === current.category)
            .slice(0, 4);
          setRelatedInternships(related);
        }
      }
      
      setLoading(false);
    }
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container-premium pt-32 pb-20 text-center">
          <p className="text-slate-600">Loading internship...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!internship) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="container-premium pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Internship not found</h1>
          <Link href="/internships" className="text-blue-600 hover:underline">
            Browse all internships
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Top Section - Udemy Style */}
      <section className="pt-24 pb-8 bg-slate-900 text-white">
        <div className="container-premium">
          {/* Breadcrumb */}
          <FadeIn>
            <Link 
              href="/internships" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to internships
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  {internship.title}
                </h1>
                <p className="text-lg text-slate-300 mb-4">
                  {internship.tagline}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-amber-400">{internship.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(internship.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-500"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400">({internship.reviewCount.toLocaleString()} ratings)</span>
                  </div>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-300">{internship.studentsEnrolled.toLocaleString()} students</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-300">Last updated {internship.lastUpdated}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-300">
                  <Globe className="w-4 h-4" />
                  <span>{internship.language}</span>
                  <span className="mx-2">|</span>
                  <User className="w-4 h-4" />
                  <span>{internship.instructor.name}</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Card */}
            <FadeIn delay={0.2} className="lg:col-span-1">
              <div className="bg-white text-slate-900 rounded-lg overflow-hidden shadow-xl">
                {/* Video/Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="w-16 h-16 mx-auto text-slate-500 mb-2" />
                    <span className="text-sm text-slate-600">Preview this internship</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-slate-500" />
                      <span className="text-sm"><strong>{internship.duration}</strong> of content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-slate-500" />
                      <span className="text-sm">Online (self-paced)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-slate-500" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors mb-3">
                    Enroll Now
                  </button>
                  
                  <p className="text-center text-xs text-slate-500">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <FadeIn>
                <div className="border border-slate-200 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">What you&apos;ll learn</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {internship.learnings.slice(0, 6).map((learning, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700">{learning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Internship Includes */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">This internship includes:</h2>
                  <div className="space-y-3">
                    {internship.includes.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          {index === 0 && <PlayCircle className="w-4 h-4 text-slate-500" />}
                          {index === 1 && <FileText className="w-4 h-4 text-slate-500" />}
                          {index === 2 && <Award className="w-4 h-4 text-slate-500" />}
                          {index >= 3 && <Check className="w-4 h-4 text-slate-500" />}
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Requirements */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    {internship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Description */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Description</h2>
                  <p className="text-slate-700 leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </FadeIn>

              {/* Curriculum - Accordion */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Internship content</h2>
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    {internship.modules.map((module, index) => (
                      <div key={index} className="border-b border-slate-200 last:border-b-0">
                        <button
                          onClick={() => toggleModule(index)}
                          className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-sm font-semibold text-slate-700">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">{module.title}</h3>
                              <p className="text-sm text-slate-500">{module.duration}</p>
                            </div>
                          </div>
                          {expandedModules.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </button>
                        {expandedModules.includes(index) && (
                          <div className="p-4 bg-white">
                            <ul className="space-y-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-center gap-2 text-sm text-slate-600">
                                  <PlayCircle className="w-4 h-4" />
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Instructor */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Instructor</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-xl font-bold text-slate-600">
                      {internship.instructor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{internship.instructor.name}</h3>
                      <p className="text-slate-600">{internship.instructor.role} at {internship.instructor.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span>{internship.instructor.students.toLocaleString()} students</span>
                        <span>{internship.instructor.internships} internships</span>
                      </div>
                      <p className="mt-3 text-slate-700 text-sm">{internship.instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Reviews */}
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Student Reviews</h2>
                  <div className="space-y-4">
                    {internship.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-700 mb-2">{testimonial.review}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">{testimonial.name}</span>
                          <span className="text-slate-500 text-sm">- Verified Student</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Sidebar - Related */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-28">
                  <h3 className="font-bold text-slate-900 mb-4">Related Internships</h3>
                  <div className="space-y-4">
                    {relatedInternships.map((related: Internship) => (
                        <Link
                          key={related.id}
                          href={`/internships/${related.slug}`}
                          className="flex gap-3 group"
                        >
                          <div className="w-20 h-12 bg-slate-200 rounded flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-slate-500 text-sm">
                              {related.title.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                              {related.title}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-amber-700 font-bold text-sm">{related.rating}</span>
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-slate-400 text-xs">({related.reviewCount})</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
