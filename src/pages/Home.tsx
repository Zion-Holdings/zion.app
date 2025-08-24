
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { EnhancedSEO } from "@/components/EnhancedSEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { HeroSkeleton } from "@/components/LoadingSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. AI-powered matching for your tech needs."
        keywords={[
          "AI marketplace", 
          "tech services", 
          "artificial intelligence", 
          "IT services", 
          "AI developers", 
          "technology marketplace", 
          "AI solutions", 
          "machine learning", 
          "digital transformation",
          "tech hiring",
          "AI matching",
          "IT consulting",
          "software development",
          "data science",
          "cloud services"
        ]}
        canonical="https://app.ziontechgroup.com/"
        ogType="website"
        structuredData={{
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://app.ziontechgroup.com",
          "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://app.ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
