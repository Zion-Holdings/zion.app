import React from 'react';
import Head from 'next/head';

const EnhancedSEO: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CA",
      "addressLocality": "Tech Valley"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://facebook.com/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://instagram.com/ziontechgroup",
      "https://youtube.com/@ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Revolutionary Technology Services 2044",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consciousness Evolution 2044",
            "description": "Next-generation AI consciousness with emotional intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Neural Networks 2044",
            "description": "Quantum-powered AI with consciousness integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Cybersecurity 2044",
            "description": "Quantum-resistant security with AI consciousness"
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>Zion Tech Group - Revolutionary 2044 Technology Solutions | AI Consciousness & Quantum Computing</title>
      <meta name="description" content="Experience the future with Zion Tech Group's cutting-edge AI consciousness, quantum computing, and autonomous solutions. Transform your business with revolutionary 2044 technology." />
      <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business transformation, AI evolution 2044, quantum neural networks, space resource intelligence" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
      <meta property="og:description" content="Experience the future with Zion Tech Group's cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses." />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - Revolutionary Technology Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
      <meta name="twitter:description" content="Experience the future with Zion Tech Group's cutting-edge AI consciousness, quantum computing, and autonomous solutions." />
      <meta name="twitter:image" content="https://ziontechgroup.com/twitter-card.jpg" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Tech Valley, California" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Innovation Drive" />
      <meta name="business:contact_data:locality" content="Tech Valley" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="94000" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-123-4567" />
      <meta name="business:contact_data:email" content="contact@ziontechgroup.com" />
      
      {/* Service Categories for SEO */}
      <meta name="service:ai_consciousness" content="AI Consciousness Evolution 2044, Emotional AI Intelligence, Quantum AI Cognitive" />
      <meta name="service:quantum_computing" content="Quantum Neural Networks, Quantum Cybersecurity, Quantum Cloud Infrastructure" />
      <meta name="service:space_technology" content="Space Resource Intelligence, Space Mining Automation, Interplanetary Communication" />
      <meta name="service:cybersecurity" content="Zero Trust Security, Quantum Encryption, Autonomous Security Operations" />
      <meta name="service:business_intelligence" content="Autonomous Business Intelligence, AI Customer Success, Autonomous DevOps" />
    </Head>
  );
};

export default EnhancedSEO;