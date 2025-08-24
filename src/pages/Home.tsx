
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
