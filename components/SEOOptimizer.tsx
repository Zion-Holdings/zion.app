import React from 'react';
import Head from 'next/head';

const SEOOptimizer: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
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
            "name": "AI & Machine Learning Solutions",
            "description": "Advanced artificial intelligence solutions for enterprise automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Services",
            "description": "Next-generation computational power for complex problems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Solutions",
            "description": "Military-grade protection for digital assets"
          }
        }
      ]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive technology solutions including AI & Machine Learning, Quantum Computing, Cybersecurity, Cloud Infrastructure, Data Analytics, and Blockchain Solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How can Zion Tech Group help transform my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine cutting-edge technology with proven expertise to deliver solutions that streamline operations, enhance security, improve decision-making, and accelerate business growth."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Zion Tech Group different from other tech companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our unique combination of AI-first approach, quantum computing expertise, military-grade security, and global reach sets us apart. We focus on innovation and deliver measurable business impact."
        }
      }
    ]
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Zion Tech Group - Pioneering the Future of Technology | AI, Quantum Computing & Cybersecurity</title>
      <meta name="title" content="Zion Tech Group - Pioneering the Future of Technology | AI, Quantum Computing & Cybersecurity" />
      <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge technology solutions. AI, Machine Learning, Quantum Computing, Cybersecurity, and more. 500+ clients worldwide trust us." />
      <meta name="keywords" content="AI, artificial intelligence, machine learning, quantum computing, cybersecurity, cloud infrastructure, data analytics, blockchain, business transformation, technology solutions, enterprise software" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com/" />
      <meta property="og:title" content="Zion Tech Group - Pioneering the Future of Technology" />
      <meta property="og:description" content="Transform your business with cutting-edge AI, Quantum Computing, and Cybersecurity solutions. Join 500+ companies already leveraging our technology." />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ziontechgroup.com/" />
      <meta property="twitter:title" content="Zion Tech Group - Pioneering the Future of Technology" />
      <meta property="twitter:description" content="Transform your business with cutting-edge AI, Quantum Computing, and Cybersecurity solutions." />
      <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com/" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="Next.js" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="color-scheme" content="dark" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business:contact:phone" content="+1-800-ZION-TECH" />
      <meta name="business:contact:email" content="info@ziontechgroup.com" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      
      {/* Service Worker */}
      <link rel="serviceworker" href="/sw.js" />
    </Head>
  );
};

export default SEOOptimizer;