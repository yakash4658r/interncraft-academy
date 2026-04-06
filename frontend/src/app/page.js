import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProgramOverview from "@/components/home/ProgramOverview";
import CategoriesSection from "@/components/home/CategoriesSection";
import TrustSection from "@/components/home/TrustSection";
import WhatYouWillGet from "@/components/home/WhatYouWillGet";
import ProgramDetails from "@/components/home/ProgramDetails";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProgramOverview />
      <CategoriesSection />
      <TrustSection />
      <WhatYouWillGet />
      <ProgramDetails />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}