
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
      <EnhancedSEO 
        title="Zion - The Future of Tech & AI Marketplace" 
        description="Discover top AI and tech talent, cutting-edge services, and revolutionary equipment in the world's most advanced marketplace. Join 50,000+ users worldwide."
        keywords="AI marketplace, tech talent, AI services, tech equipment, machine learning, data science, software development, cybersecurity"
        canonical="https://ziontechgroup.com/"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        twitterCard="summary_large_image"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Zion - The Future of Tech & AI Marketplace",
          "description": "Discover top AI and tech talent, cutting-edge services, and revolutionary equipment in the world's most advanced marketplace.",
          "url": "https://ziontechgroup.com/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "The Future of Tech & AI Marketplace",
            "url": "https://ziontechgroup.com",
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup"
            ]
          }
        }}
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
