import React from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS",
  description = "Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth and innovation.",
  keywords = "AI, artificial intelligence, quantum computing, micro SAAS, technology solutions, business transformation, Zion Tech Group, machine learning, space technology, cybersecurity, enterprise solutions",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogUrl = "https://ziontechgroup.com",
  canonicalUrl = "https://ziontechgroup.com",
  structuredData
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with innovative AI, quantum computing, and space technology solutions.",
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://github.com/Zion-Holdings",
      "https://www.instagram.com/ziontechgroup",
      "https://www.youtube.com/@ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions",
            "description": "Advanced artificial intelligence and machine learning services for enterprise transformation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Services",
            "description": "Next-generation quantum computing solutions for complex computational challenges"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Technology Platform",
            "description": "Innovative space technology applications and satellite management solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SAAS Solutions",
            "description": "Rapid deployment micro SAAS platforms for instant business value"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "award": [
      "Industry Leader 2024",
      "Top AI Solutions Provider",
      "Excellence in Innovation"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Space Technology",
      "Machine Learning",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Micro SAAS",
      "Enterprise Solutions"
    ]
  };

  // WebSite structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Revolutionary technology solutions for business transformation",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/services?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    }
  };

  // BreadcrumbList structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ziontechgroup.com/services"
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - Revolutionary Technology Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Zion Tech Group - Revolutionary Technology Solutions" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="color-scheme" content="dark light" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect and DNS Prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//plausible.io" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance and Analytics */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-ms-validation-code" />
      
      {/* Custom Meta Tags for Zion Tech Group */}
      <meta name="company" content="Zion Tech Group" />
      <meta name="industry" content="Technology, AI, Quantum Computing, Space Technology" />
      <meta name="services" content="AI Solutions, Quantum Computing, Micro SAAS, Space Technology, Cybersecurity" />
      <meta name="location" content="Middletown, Delaware, United States" />
      <meta name="contact" content="+1 302 464 0950" />
      <meta name="email" content="kleber@ziontechgroup.com" />
      
      {/* Enhanced SEO for Technology Services */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      
      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-verification" />
      <meta name="pinterest-site-verification" content="your-pinterest-verification" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1 302 464 0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      <meta name="business:contact_data:website" content="https://ziontechgroup.com" />
      
      {/* Service Categories for SEO */}
      <meta name="service:ai" content="Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks" />
      <meta name="service:quantum" content="Quantum Computing, Quantum Algorithms, Quantum Security, Quantum Machine Learning" />
      <meta name="service:space" content="Space Technology, Satellite Systems, Space Mining, Interplanetary Communication" />
      <meta name="service:enterprise" content="Enterprise Solutions, Cloud Infrastructure, Cybersecurity, DevOps" />
      <meta name="service:microsaas" content="Micro SAAS, Rapid Deployment, Business Applications, Software Solutions" />
      
      {/* Industry Focus */}
      <meta name="industry:healthcare" content="Healthcare Technology, Medical AI, Drug Discovery, Patient Care" />
      <meta name="industry:finance" content="Financial Technology, Quantum Finance, Risk Assessment, Trading Platforms" />
      <meta name="industry:manufacturing" content="Manufacturing 4.0, Industrial AI, Predictive Maintenance, Supply Chain" />
      <meta name="industry:retail" content="Retail Technology, E-commerce Solutions, Customer Analytics, Inventory Management" />
      <meta name="industry:government" content="Government Technology, Public Sector Solutions, Security, Compliance" />
      <meta name="industry:education" content="Educational Technology, Learning Platforms, AI Education, Skill Assessment" />
    </Head>
  );
};

export default SEOOptimizer;