
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
<<<<<<< HEAD
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
import { BottomNavigation } from "@/components/MobileNavigation";
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625

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
=======
      <HomePageSEO />
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <ComprehensiveServicesShowcase />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
<<<<<<< HEAD
=======
      
      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
>>>>>>> 76498b828afce1ee85e5887e395f97c6e3f5a625
    </div>
  );
}
