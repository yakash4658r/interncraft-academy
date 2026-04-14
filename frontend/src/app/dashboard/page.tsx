"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { BookOpen, Award, Clock, TrendingUp, Calendar, ChevronRight } from "lucide-react";

const enrolledInternships = [
  {
    id: 1,
    title: "Machine Learning Internship",
    progress: 65,
    nextSession: "Tomorrow, 7:00 PM",
    totalModules: 6,
    completedModules: 4,
    color: "blue",
  },
  {
    id: 2,
    title: "Digital Marketing",
    progress: 30,
    nextSession: "Friday, 6:00 PM",
    totalModules: 6,
    completedModules: 2,
    color: "purple",
  },
];

const achievements = [
  { title: "First Project Complete", icon: Award, date: "2 days ago" },
  { title: "7-Day Streak", icon: Calendar, date: "1 week ago" },
  { title: "Top Performer", icon: TrendingUp, date: "2 weeks ago" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container-premium">
          {/* Header */}
          <FadeIn>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Welcome back, Learner!
              </h1>
              <p className="text-slate-600">
                You&apos;re making great progress. Keep it up!
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Internships", value: "2", icon: BookOpen },
                { label: "Completed", value: "6", icon: Award },
                { label: "Hours Learned", value: "48", icon: Clock },
                { label: "Certificates", value: "1", icon: TrendingUp },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Internships */}
              <FadeIn delay={0.2}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">My Internships</h2>
                    <Link 
                      href="/internships" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Browse more
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {enrolledInternships.map((internship) => (
                      <div
                        key={internship.id}
                        className="p-4 bg-slate-50 rounded-xl border border-slate-100"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-slate-900">{internship.title}</h3>
                            <p className="text-sm text-slate-500">
                              Next session: {internship.nextSession}
                            </p>
                          </div>
                          <button className="p-2 hover:bg-white rounded-lg transition-colors">
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                          </button>
                        </div>

                        {/* Progress */}
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-600">Progress</span>
                            <span className="font-medium text-slate-900">{internship.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all"
                              style={{ width: `${internship.progress}%` }}
                            />
                          </div>
                        </div>

                        <p className="text-xs text-slate-500">
                          {internship.completedModules} of {internship.totalModules} modules completed
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Upcoming Schedule */}
              <FadeIn delay={0.3}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Upcoming Sessions</h2>
                  <div className="space-y-4">
                    {[
                      { title: "ML Model Deployment", date: "Today", time: "7:00 PM", type: "Live Session" },
                      { title: "Marketing Analytics", date: "Tomorrow", time: "6:00 PM", type: "Workshop" },
                      { title: "Project Review", date: "Friday", time: "5:00 PM", type: "1-on-1" },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900">{session.title}</h4>
                          <p className="text-sm text-slate-500">{session.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-slate-900">{session.date}</p>
                          <p className="text-sm text-slate-500">{session.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Achievements */}
              <FadeIn delay={0.4}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Achievements</h2>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                          <achievement.icon className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">{achievement.title}</p>
                          <p className="text-xs text-slate-500">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Quick Actions */}
              <FadeIn delay={0.5}>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h2 className="text-lg font-bold mb-4">Need Help?</h2>
                  <p className="text-blue-100 text-sm mb-6">
                    Get support from our mentors and community.
                  </p>
                  <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                    Contact Support
                  </button>
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
