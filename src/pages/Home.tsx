
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { EnhancedSEO } from "@/components/EnhancedSEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { EnhancedQuickAccess } from "@/components/home/EnhancedQuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* IT Services Hero */}
      <ITServiceRequestHero />
      
      {/* Enhanced Quick Access */}
      <EnhancedQuickAccess />
      
      {/* Feature CTAs */}
      <FeatureCTAs />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      <ServicesShowcase />
      
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings */}
      <FeaturedListingsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
