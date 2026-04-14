"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", 
  "Apple", "Adobe", "Spotify", "Airbnb", "Uber"
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[var(--navy-800)]" style={{ fontFamily: 'var(--font-body)' }}>
      <div className="container-premium">
        <FadeIn>
          <p className="text-center text-sm text-[var(--navy-300)] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Trusted by students from top companies & universities
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="text-lg lg:text-xl font-bold text-[var(--navy-400)] hover:text-[var(--navy-300)] transition-colors"
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
