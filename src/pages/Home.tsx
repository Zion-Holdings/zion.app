
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { EnhancedServicesShowcase } from "@/components/services/EnhancedServicesShowcase";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - The Future of Tech Services" 
        description="Discover cutting-edge AI, cloud, cybersecurity, and development services from verified experts. Transform your business with innovative technology solutions."
        keywords="AI, technology, marketplace, services, talent, cloud, cybersecurity, development, blockchain, web3"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />

      {/* Quick Access */}
      <QuickAccess />
      
      {/* Feature CTAs */}
      <FeatureCTAs />
      
      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Featured Listings */}
      <FeaturedListingsSection />
      
      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
