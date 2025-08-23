import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: any;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string; type?: string }>;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary 2044 Technology Solutions | AI, Quantum Computing, Space Tech",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge 2044 technology.",
  keywords = "AI consciousness, quantum computing, space technology, cybersecurity, autonomous solutions, business intelligence, Zion Tech Group, 2044 technology, AI evolution, quantum neural networks, space resource intelligence, autonomous business intelligence, quantum cloud infrastructure",
  author = "Zion Tech Group",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogTitle,
  ogDescription,
  ogType = "website",
  ogUrl = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogImageAlt = "Zion Tech Group - Revolutionary 2044 Technology Solutions",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  structuredData,
  additionalMeta = [],
  additionalLinks = []
}) => {
  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
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
            "name": "Space Resource Intelligence 2044",
            "description": "AI-powered space exploration with consciousness"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "AI Development",
      "Quantum Computing",
      "Space Technology",
      "Cybersecurity",
      "Business Intelligence",
      "Cloud Infrastructure"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || ogUrl} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to External Domains for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} type={link.type} />
      ))}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load', () => {
                setTimeout(() => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    console.log('Page load time:', loadTime + 'ms');
                  }
                }, 0);
              });
            }
            
            // SEO-friendly error handling
            window.addEventListener('error', (e) => {
              console.error('JavaScript error:', e.error);
            });
            
            // SEO-friendly console logging
            const originalLog = console.log;
            console.log = function(...args) {
              if (process.env.NODE_ENV === 'production') {
                // In production, only log critical information
                if (args.some(arg => typeof arg === 'string' && arg.includes('SEO') || arg.includes('performance'))) {
                  originalLog.apply(console, args);
                }
              } else {
                originalLog.apply(console, args);
              }
            };
          `
        }}
      />
    </Head>
  );
};

export default EnhancedSEO;