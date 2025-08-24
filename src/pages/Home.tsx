
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { HomePageSEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
import { BottomNavigation } from "@/components/MobileNavigation";
import { MicroSaasServicesSection } from "@/components/home/MicroSaasServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HomePageSEO />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasServicesSection />
      
      <FeatureHighlights />
      
      <EnhancedServicesShowcase />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      
      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
