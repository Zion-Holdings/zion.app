import React from 'react';
import Head from 'next/head';

const SEOOptimizer: React.FC = () => {
  const siteConfig = {
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Empowering businesses with cutting-edge AI, quantum computing, and innovative technology solutions. Transform your operations with Zion Tech Group\'s comprehensive suite of services.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    twitterHandle: '@ziontechgroup',
    image: '/og-image.jpg',
    type: 'website',
    keywords: [
      'AI services',
      'Machine Learning',
      'Quantum Computing',
      'Technology Solutions',
      'Business Automation',
      'IT Services',
      'Digital Transformation',
      'Cloud Solutions',
      'Cybersecurity',
      'Data Analytics'
    ].join(', '),
    author: 'Zion Tech Group',
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: 'Technology Services',
    tag: 'AI, Quantum Computing, Technology'
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation",
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
    "foundingDate": "2020",
    "numberOfEmployees": "50+",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions",
            "description": "Advanced artificial intelligence and machine learning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Services",
            "description": "Next-generation quantum computing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Automation",
            "description": "Intelligent automation solutions for business processes"
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteConfig.url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:image" content={`${siteConfig.url}${siteConfig.image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={siteConfig.type} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.image}`} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon and App Icons */}
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
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
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
      
      {/* Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* PWA Meta Tags */}
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:image:alt" content="Zion Tech Group - Technology Solutions" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={`${siteConfig.url}${siteConfig.image}`} />
      
      {/* Article Specific Meta Tags */}
      <meta property="article:published_time" content={siteConfig.publishedTime} />
      <meta property="article:modified_time" content={siteConfig.modifiedTime} />
      <meta property="article:section" content={siteConfig.section} />
      <meta property="article:tag" content={siteConfig.tag} />
      
      {/* Language and Region */}
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="de_DE" />
      
      {/* Business Hours and Contact */}
      <meta property="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta property="business:contact_data:locality" content="Middletown" />
      <meta property="business:contact_data:region" content="DE" />
      <meta property="business:contact_data:postal_code" content="19709" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta property="business:contact_data:email" content="kleber@ziontechgroup.com" />
    </Head>
  );
};

export default SEOOptimizer;