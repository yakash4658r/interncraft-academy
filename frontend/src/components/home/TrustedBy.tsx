"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", 
  "Apple", "Adobe", "Spotify", "Airbnb", "Uber"
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="container-premium">
        <FadeIn>
          <p className="text-center text-sm text-slate-500 mb-6">
            Trusted by students from top companies & universities
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="text-lg lg:text-xl font-bold text-slate-300 hover:text-slate-400 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
