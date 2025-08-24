
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
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ContactInfo } from "@/components/home/ContactInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      {/* Futuristic Background */}
      <FuturisticBackground variant="particles" intensity="medium" className="opacity-20" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <ITServiceRequestHero />

        <div className="py-8">
          <HeroSection />
        </div>
        
        <div className="py-12">
          <QuickAccess />
        </div>
        
        <div className="py-16">
          <FeatureCTAs />
        </div>
        
        <div className="py-16">
          <ServicesShowcase />
        </div>
        
        <div className="py-16">
          <FeatureHighlights />
        </div>
        
        <div className="py-16">
          <CategoriesSection />
        </div>
        
        <div className="py-16">
          <BenefitsSection />
        </div>
        
        <div className="py-16">
          <HowItWorksSection />
        </div>
        
        <div className="py-16">
          <FeaturedListingsSection />
        </div>
        
        <div className="py-16">
          <ContactInfo />
        </div>
        
        <div className="py-16">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
}
