import React from 'react';
import Head from 'next/head';

interface SEOProps {
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
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEOOptimizer: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions 2025",
  description = "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology with cutting-edge micro SAAS services.",
  keywords = "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI, micro SAAS, IT services, AI services, futuristic technology",
  image = "/og-image.svg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Quantum Computing", "Technology", "Innovation"],
  noindex = false,
  nofollow = false,
  canonical
}) => {
  // Default values and fallbacks
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": description,
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup",
      "https://youtube.com/ziontechgroup"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Space Technology",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Machine Learning",
      "Autonomous Systems"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Technology Solutions"
          }
        }
      ]
    }
  };

  // Article structured data if type is article
  if (type === "article" && publishedTime) {
    structuredData["@type"] = "Article";
    structuredData["headline"] = title;
    structuredData["description"] = description;
    structuredData["image"] = fullImage;
    structuredData["author"] = {
      "@type": "Person",
      "name": author
    };
    structuredData["publisher"] = {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.svg"
      }
    };
    structuredData["datePublished"] = publishedTime;
    if (modifiedTime) {
      structuredData["dateModified"] = modifiedTime;
    }
    structuredData["articleSection"] = section;
    structuredData["keywords"] = keywords;
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
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
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="Next.js" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      
      {/* Business Information */}
      <meta name="business:contact:phone" content="+1-302-464-0950" />
      <meta name="business:contact:email" content="kleber@ziontechgroup.com" />
      <meta name="business:contact:address" content="364 E Main St STE 1008, Middletown DE 19709" />
      
      {/* Technology and Industry Tags */}
      <meta name="industry" content="Technology" />
      <meta name="category" content="Artificial Intelligence" />
      <meta name="subject" content="AI, Quantum Computing, Space Technology" />
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Open Graph Tags for Articles */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
        </>
      )}
      
      {/* Additional Open Graph Tags for Business */}
      {type === "website" && (
        <>
          <meta property="og:latitude" content="39.4496" />
          <meta property="og:longitude" content="-75.7163" />
          <meta property="og:street-address" content="364 E Main St STE 1008" />
          <meta property="og:locality" content="Middletown" />
          <meta property="og:region" content="DE" />
          <meta property="og:postal-code" content="19709" />
          <meta property="og:country-name" content="United States" />
          <meta property="og:phone_number" content="+1-302-464-0950" />
          <meta property="og:email" content="kleber@ziontechgroup.com" />
        </>
      )}
    </Head>
  );
};

export default SEOOptimizer;