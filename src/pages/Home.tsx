
import React from 'react';
import { SEO } from "@/components/SEO";
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zion Tech Group - The Tech & AI Marketplace
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover top AI and tech talent, services, and equipment in one place.
        </p>
        
        <TrustIndicators />
        <SecurityHeaders />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p><strong>Mobile:</strong> +1 302 464 0950</p>
            <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}
