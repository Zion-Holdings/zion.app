
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
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Futuristic Background */}
      <FuturisticBackground variant="particles" intensity="medium" />
      
      <SEO 
        title="Zion Tech Group - The Leading Tech & AI Marketplace" 
        description="Discover comprehensive micro SAAS, IT infrastructure, and AI services. Connect with top tech talent, find cutting-edge equipment, and transform your business with Zion Tech Group."
        keywords="AI services, micro SAAS, IT infrastructure, tech marketplace, AI development, cybersecurity, digital transformation, tech talent, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      {/* New Comprehensive Services Showcase */}
      <ComprehensiveServicesShowcase />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
