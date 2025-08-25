
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zion Tech Group - The Future of Tech Services"
        description="Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions."
        keywords="AI, technology, marketplace, services, talent, IT support, global services, tech professionals"
        canonical="https://ziontechgroup.com/"
      />

      <ITServiceRequestHero />
      <HeroSection />
      <FeatureHighlights />
      <TestimonialsSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
    </div>
  );
}
