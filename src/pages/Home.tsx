
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
import { TrustIndicators } from "@/components/TrustIndicators";
import { SecurityHeaders } from "@/components/SecurityHeaders";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "The premier tech & AI marketplace connecting top talent, services, and equipment worldwide. Discover AI experts, tech services, and cutting-edge equipment in one place.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/marketplace?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI and tech talent marketplace services"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - The Future of Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Connect with experts worldwide and scale your business with cutting-edge technology. SOC 2 certified, GDPR compliant."
        keywords="AI marketplace, tech talent, IT services, AI experts, tech equipment, cybersecurity, cloud services, digital transformation"
        canonical="https://ziontechgroup.com/"
        structuredData={structuredData}
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <TrustIndicators />
      
      <SecurityHeaders />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
