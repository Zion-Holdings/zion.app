
import React from 'react';
import { EnhancedCategoriesSection } from "@/components/EnhancedCategoriesSection";
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
import { MicroSaasHero } from "@/components/home/MicroSaasHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with our comprehensive micro SAAS solutions."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, cybersecurity, cloud management, DevOps, blockchain, quantum computing"
        canonical="https://ziontechgroup.com/"
      />

      {/* New Micro SAAS Hero Section */}
      <MicroSaasHero />

      {/* Original Hero Section */}
      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <EnhancedCategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
