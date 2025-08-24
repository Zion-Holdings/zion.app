
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
<<<<<<< HEAD
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { EnhancedServicesOverview } from "@/components/home/EnhancedServicesOverview";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
>>>>>>> origin/main

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
<<<<<<< HEAD
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
      
      <FeatureHighlights />
      
      <EnhancedServicesOverview />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zion-blue mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover top AI and tech talent, services, and equipment in one place.
            Your comprehensive marketplace for all things technology and AI.
          </p>
        </div>
        
        <FeatureCTAs />
        
        <ServicesShowcase />
        
        <CategoriesSection />
      </div>
>>>>>>> origin/main
    </div>
  );
}
