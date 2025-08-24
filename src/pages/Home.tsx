
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
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      <HeroSection />
      <QuickAccess />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
}
