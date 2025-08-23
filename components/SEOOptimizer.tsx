import React from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: string;
  wordCount?: number;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions",
  description = "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology.",
  keywords = "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI",
  image = "/og-image.svg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  readingTime,
  wordCount
}) => {
  // Enhanced structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ziontechgroup.com/logo.svg",
      "width": 512,
      "height": 512
    },
    "description": description,
    "foundingDate": "2024",
    "industry": "Technology",
    "numberOfEmployees": "50-200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "technical support",
        "email": "support@ziontechgroup.com",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://youtube.com/@ziontechgroup",
      "https://github.com/Zion-Holdings",
      "https://facebook.com/ziontechgroup"
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
            "name": "Autonomous Systems",
            "description": "Self-operating intelligent systems"
          }
        }
      ]
    },
    "serviceType": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Autonomous Systems",
      "Business Intelligence",
      "Cybersecurity",
      "Space Technology",
      "Cloud Solutions",
      "Digital Transformation"
    ],
    "award": [
      "Innovation Excellence Award 2024",
      "AI Technology Leader 2024",
      "Quantum Computing Pioneer 2024"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Quantum Computing",
      "Autonomous Systems",
      "Cybersecurity",
      "Space Technology",
      "Digital Transformation",
      "Business Intelligence"
    ]
  };

  // Article structured data (if applicable)
  const articleStructuredData = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.svg"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": section,
    "keywords": keywords,
    "wordCount": wordCount,
    "timeRequired": readingTime
  } : null;

  // WebSite structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading technology solutions provider specializing in AI, quantum computing, and autonomous systems",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://youtube.com/@ziontechgroup"
    ]
  };

  // Local Business structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "image": "https://ziontechgroup.com/office.jpg",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.4496,
      "longitude": -75.7163
    },
    "url": "https://ziontechgroup.com",
    "telephone": "+1-302-464-0950",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "USD"
  };

  // Breadcrumb structured data
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
        "name": section || "Services",
        "item": url
      }
    ]
  };

  // FAQ structured data (if applicable)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive technology solutions including AI & Machine Learning, Quantum Computing, Autonomous Systems, Cybersecurity, Space Technology, and Digital Transformation services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Zion Tech Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us at +1-302-464-0950, email us at kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Zion Tech Group unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in cutting-edge technologies like quantum computing, AI consciousness, and autonomous systems, positioning us at the forefront of technological innovation and digital transformation."
        }
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData)
        }}
      />
      
      {articleStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData)
          }}
        />
      )}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Service Worker */}
      <link rel="serviceworker" href="/sw.js" />
    </Head>
  );
};

export default SEOOptimizer;