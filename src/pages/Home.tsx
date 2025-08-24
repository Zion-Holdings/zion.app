
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
import { FuturisticBackground } from "@/components/FuturisticBackground";

export default function Home() {
  return (
    <FuturisticBackground intensity="medium" showParticles={true} showGrid={true} showNeon={true}>
      <div className="min-h-screen bg-background">
        <SEO 
          title="Zion Tech Group - AI-Powered Micro SAAS & IT Services Marketplace" 
          description="Discover cutting-edge AI solutions, micro SAAS tools, enterprise IT services, and connect with top tech talent. Transform your business with Zion's comprehensive technology ecosystem."
          keywords="AI services, micro SAAS, IT consulting, cloud migration, cybersecurity, AI development, tech talent, enterprise solutions"
          canonical="https://ziontechgroup.com/"
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
    </FuturisticBackground>
  );
}
