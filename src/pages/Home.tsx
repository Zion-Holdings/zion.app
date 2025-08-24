
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
import { MicroSaasShowcase } from "@/components/home/MicroSaasShowcase";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zion-purple/3 to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-zion-purple/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-zion-cyan/8 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <MicroSaasShowcase />
      
      <FeatureHighlights />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
