"use client";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion OS",
    "description": "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
    "url": "https://ziontechgroup.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    },
    "featureList": [
      "Marketplace & Jobs",
      "AI Governance",
      "Token Systems",
      "Identity & KYC",
      "AI-Powered Tools",
      "Modular Architecture"
    ],
    "screenshot": "https://ziontechgroup.com/screenshot.png",
    "softwareVersion": "1.0.0",
    "releaseNotes": "Initial release with core features for launching digital economies",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}