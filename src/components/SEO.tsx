import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Innovation & Enterprise IT Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cybersecurity, cloud computing, and enterprise IT services. Expert technology consulting for modern businesses.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'cybersecurity',
    'cloud computing',
    'enterprise IT',
    'digital transformation',
    'machine learning',
    'IT consulting',
    'business technology',
    'Zion Tech Group'
  ],
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;
  
  // Handle keywords - convert string to array if needed
  const keywordsArray = Array.isArray(keywords) ? keywords : keywords.split(',').map(k => k.trim());
  
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered innovation and enterprise IT solutions",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.3185,
        "longitude": -75.5071
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
            "name": "AI-Powered CRM Solutions",
            "description": "Intelligent customer relationship management with predictive analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Platform",
            "description": "Comprehensive threat detection and response system"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Cost Optimization",
            "description": "AI-driven cloud cost management solutions"
          }
        }
      ]
    }
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI-powered innovation and enterprise IT solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsArray.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Additional SEO optimizations */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Performance optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="modulepreload" href="/js/react-vendor.js" />
      <link rel="modulepreload" href="/js/ui-vendor.js" />
    </Helmet>
  );
};

export default SEO;

