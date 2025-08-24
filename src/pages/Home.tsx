
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

export default function Home() {
  // Structured data for the home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "The Tech & AI Marketplace - Discover top AI and tech talent, services, and equipment in one place.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI talent matching, IT services, and tech marketplace solutions"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Global IT support, AI-powered matching, and enterprise solutions for the future of work."
        keywords="AI marketplace, tech talent, IT services, global IT support, AI matching, tech services, enterprise solutions, talent acquisition, IT consulting, AI development"
        canonical="/"
        ogType="website"
        structuredData={structuredData}
      />

      <main>
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
      </main>
    </div>
  );
}
