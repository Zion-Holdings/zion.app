
import React from 'react';
<<<<<<< HEAD
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
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
<<<<<<< HEAD
<<<<<<< HEAD
      <HomePageSEO />
=======
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />
>>>>>>> cursor/website-audit-and-enhancement-e844

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <EnhancedServicesShowcase />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      
      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
=======
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zion Tech Group - The Tech & AI Marketplace
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover top AI and tech talent, services, and equipment in one place.
        </p>
        
        <ServicesShowcase />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
>>>>>>> f3114b5ec6e0762a89ac302f1e1c77234f5ec6df
    </div>
  );
}
