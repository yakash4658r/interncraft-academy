import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import BenefitsSection from "@/components/home/BenefitsSection";
import InternshipsSection from "@/components/home/InternshipsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <BenefitsSection />
      <InternshipsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
