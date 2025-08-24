import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  author?: string;
  robots?: string;
}

export function EnhancedSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  author = 'Zion Tech Group',
  robots
}: EnhancedSEOProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "The Future of Tech & AI Marketplace",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  const robotsValue = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsValue} />
      <meta name="language" content={language} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Marketplace */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/marketplace?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Marketplace",
              "item": "https://ziontechgroup.com/marketplace"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}

// Specialized SEO components for different page types
export function MarketplaceSEO() {
  return (
    <EnhancedSEO
      title="AI & Tech Marketplace - Zion Tech Group"
      description="Browse thousands of AI engineers, tech services, and cutting-edge equipment. Find the perfect match for your project with our AI-powered marketplace."
      keywords="AI marketplace, tech talent, AI services, tech equipment, machine learning, data science, software development"
      canonical="https://ziontechgroup.com/marketplace"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AI & Tech Marketplace",
        "description": "Browse AI engineers, tech services, and equipment",
        "url": "https://ziontechgroup.com/marketplace",
        "numberOfItems": 10000,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Engineers",
            "url": "https://ziontechgroup.com/talent"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tech Services",
            "url": "https://ziontechgroup.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tech Equipment",
            "url": "https://ziontechgroup.com/equipment"
          }
        ]
      }}
    />
  );
}

export function TalentDirectorySEO() {
  return (
    <EnhancedSEO
      title="AI & Tech Talent Directory - Zion Tech Group"
      description="Discover verified AI engineers, data scientists, developers, and tech professionals. Browse profiles, skills, and connect with top talent worldwide."
      keywords="AI engineers, tech talent, data scientists, developers, programmers, tech professionals, hiring"
      canonical="https://ziontechgroup.com/talent"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AI & Tech Talent Directory",
        "description": "Browse verified tech professionals",
        "url": "https://ziontechgroup.com/talent",
        "numberOfItems": 50000,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Engineers",
            "url": "https://ziontechgroup.com/talent?category=ai-engineering"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Data Scientists",
            "url": "https://ziontechgroup.com/talent?category=data-science"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Software Developers",
            "url": "https://ziontechgroup.com/talent?category=software-development"
          }
        ]
      }}
    />
  );
}

export function ServicesSEO() {
  return (
    <EnhancedSEO
      title="Tech & AI Services - Zion Tech Group"
      description="Professional tech services including AI development, cloud migration, cybersecurity, and more. Connect with verified service providers worldwide."
      keywords="AI services, tech consulting, software development, cloud migration, cybersecurity, IT services"
      canonical="https://ziontechgroup.com/services"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Tech & AI Services",
        "description": "Professional tech services marketplace",
        "url": "https://ziontechgroup.com/services",
        "numberOfItems": 5000,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Development",
            "url": "https://ziontechgroup.com/services?category=ai-development"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cloud Migration",
            "url": "https://ziontechgroup.com/services?category=cloud-migration"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Cybersecurity",
            "url": "https://ziontechgroup.com/services?category=cybersecurity"
          }
        ]
      }}
    />
  );
}