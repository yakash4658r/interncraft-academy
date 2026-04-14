"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Desai",
    role: "Data Scientist",
    company: "Amazon",
    quote: "This internship transformed my career. The hands-on projects gave me confidence to crack interviews at top tech companies.",
    rating: 5,
    avatar: "PD"
  },
  {
    name: "Rahul Mehta",
    role: "ML Engineer",
    company: "Freshworks",
    quote: "Best investment I've made in my career. The curriculum is perfectly structured and the real-world projects helped me land my dream job.",
    rating: 5,
    avatar: "RM"
  },
  {
    name: "Ananya Patel",
    role: "AI Researcher",
    company: "TCS Research",
    quote: "From knowing basic Python to building production ML models in 8 weeks. The mentorship and community support made all the difference.",
    rating: 5,
    avatar: "AP"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-premium">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            What Our Students Say
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="border border-slate-200 rounded-lg p-6 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
