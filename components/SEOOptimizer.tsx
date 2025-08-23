import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;

}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Pioneering the Future of Technology",
  description = "Leading technology company specializing in AI, quantum computing, space technology, and innovative solutions that drive business transformation. 500+ services, 98% client satisfaction, 24/7 support.",
  keywords = [
    "AI", "artificial intelligence", "machine learning", "quantum computing", 
    "space technology", "cybersecurity", "cloud solutions", "digital transformation",
    "enterprise technology", "innovation", "technology consulting", "AI solutions",
    "quantum algorithms", "space mining", "satellite systems", "cyber security",
    "cloud infrastructure", "business transformation", "technology services",
    "Zion Tech Group", "Delaware technology company", "AI consulting"
  ],
  image = "https://ziontechgroup.com/og-image.jpg",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology Services",

}) => {
  const router = useRouter();
  const canonicalUrl = `https://ziontechgroup.com${router.asPath}`;
  const currentYear = new Date().getFullYear();

  // Enhanced structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://youtube.com/@ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "areaServed": "US",
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
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential.",
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
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
            "description": "Advanced artificial intelligence solutions for enterprise transformation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Services",
            "description": "Next-generation quantum solutions for complex computational challenges"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Technology Solutions",
            "description": "Innovative space tech solutions for terrestrial and extraterrestrial applications"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Additional structured data for the current page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "mainEntity": type === "article" ? {
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
          "url": "https://ziontechgroup.com/logo.png"
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "articleSection": section,
      "keywords": keywords.join(", "),
      "articleBody": description
    } : undefined
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en" />
      <meta property="og:locale" content="en_US" />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - Technology Innovation" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Zion Tech Group - Technology Innovation" />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={image} />
      
      {/* Business and Contact Information */}
      <meta property="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta property="business:contact_data:locality" content="Middletown" />
      <meta property="business:contact_data:region" content="DE" />
      <meta property="business:contact_data:postal_code" content="19709" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta property="business:contact_data:email" content="contact@ziontechgroup.com" />
      <meta property="business:contact_data:website" content="https://ziontechgroup.com" />
      
      {/* Business Hours */}
      <meta property="business:business_hours:day_of_week" content="Monday" />
      <meta property="business:business_hours:opens" content="09:00" />
      <meta property="business:business_hours:closes" content="18:00" />
      <meta property="business:business_hours:day_of_week" content="Tuesday" />
      <meta property="business:business_hours:day_of_week" content="Wednesday" />
      <meta property="business:business_hours:day_of_week" content="Thursday" />
      <meta property="business:business_hours:day_of_week" content="Friday" />
      
      {/* Geo-location */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Mobile and Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Theme and Colors */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="msapplication-navbutton-color" content="#06b6d4" />
      
      {/* Icons and Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#06b6d4" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Resource Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {type === "article" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageStructuredData)
          }}
        />
      )}
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Performance and Analytics */}
      <meta name="google-analytics" content="your-ga-code" />
      <meta name="google-tag-manager" content="your-gtm-code" />
      
      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      <meta name="pinterest-site-verification" content="your-pinterest-verification-code" />
      
      {/* Additional Business Information */}
      <meta property="business:contact_data:fax_number" content="+1-302-464-0951" />
      <meta property="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta property="business:contact_data:website" content="https://ziontechgroup.com" />
      
      {/* Industry and Business Type */}
      <meta property="business:business_type" content="Technology Services" />
      <meta property="business:industry" content="Information Technology" />
      <meta property="business:number_of_employees" content="50-100" />
      <meta property="business:year_founded" content="2020" />
      
      {/* Service Areas */}
      <meta property="business:service_area:radius" content="50" />
      <meta property="business:service_area:unit" content="miles" />
      
      {/* Awards and Certifications */}
      <meta property="business:awards" content="Industry Leader 2024, 98% Client Satisfaction" />
      <meta property="business:certifications" content="ISO 27001, SOC 2 Type II" />
      
      {/* Copyright */}
      <meta name="copyright" content={`© ${currentYear} Zion Tech Group. All rights reserved.`} />
      
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="31536000" />
      <meta httpEquiv="Pragma" content="no-cache" />
    </Head>
  );
};

export default SEOOptimizer;