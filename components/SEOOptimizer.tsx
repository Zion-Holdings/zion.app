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
          "text": "Zion Tech Group offers comprehensive AI, quantum computing, cybersecurity, cloud infrastructure, and blockchain solutions for enterprise clients."
        }
      },
      {
        "@type": "Question",
        "name": "How does Zion Tech Group ensure security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement military-grade cybersecurity protocols, regular security audits, and compliance with international security standards."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Zion Tech Group unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our combination of cutting-edge AI, quantum computing expertise, and autonomous operations sets us apart in the technology industry."
        }
      }
    ]
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Zion Tech Group - Pioneering the Future of Technology with AI, Quantum Computing & Autonomous Solutions</title>
      <meta name="title" content="Zion Tech Group - Pioneering the Future of Technology with AI, Quantum Computing & Autonomous Solutions" />
      <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and autonomous technology solutions. Enterprise-grade security, 24/7 operations, and global reach." />
      <meta name="keywords" content="AI services, quantum computing, autonomous operations, enterprise solutions, technology consulting, innovation, digital transformation, cybersecurity, cloud infrastructure, blockchain solutions" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="business:contact" content="contact@ziontechgroup.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zion Tech Group - Pioneering the Future of Technology with AI, Quantum Computing & Autonomous Solutions" />
      <meta property="og:description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and autonomous technology solutions. Enterprise-grade security, 24/7 operations, and global reach." />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:url" content="https://ziontechgroup.com" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Zion Tech Group - Pioneering the Future of Technology with AI, Quantum Computing & Autonomous Solutions" />
      <meta property="twitter:description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and autonomous technology solutions. Enterprise-grade security, 24/7 operations, and global reach." />
      <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Content Security Policy */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://www.youtube.com;" />

      {/* Service Worker */}
      <link rel="serviceworker" href="/sw.js" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </Head>
  );
};

export default SEOOptimizer;