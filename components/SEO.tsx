import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  canonical?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions 2045",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, cybersecurity, and autonomous solutions. Transform your business with cutting-edge 2045 technology.",
  keywords = "AI consciousness, quantum computing, cybersecurity, autonomous solutions, space technology, Zion Tech Group, 2045 technology, revolutionary services",
  image = "/og-image-zion-tech-group-2045.jpg",
  url = "https://ziontechgroup.com",
  canonical,
  type = "website",
  author = "Zion Tech Group",
  noindex = false,
  structuredData
}) => {
  // Handle keywords as either string or array
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  
  // Use canonical URL if provided, otherwise use url
  const canonicalUrl = canonical || url;
  
  // Determine robots content based on noindex
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering revolutionary AI consciousness, quantum computing, and autonomous solutions for 2045 and beyond.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Revolutionary Technology Services 2045",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consciousness Evolution Platform",
            "description": "Next-generation AI consciousness with emotional intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum AI Fusion Platform",
            "description": "Quantum-powered AI with consciousness integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autonomous DevOps Intelligence",
            "description": "AI-powered DevOps optimization and automation"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Service Worker */}
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default SEO;