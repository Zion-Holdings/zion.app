import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  twitterHandle?: string;
}

const defaultSEO = {
  title: 'Zion Tech Group - Pioneering the Future of Technology',
  description: 'Leading technology company specializing in AI, quantum computing, space technology, and enterprise solutions. Transform your business with cutting-edge innovation.',
  keywords: [
    'AI', 'artificial intelligence', 'quantum computing', 'space technology', 
    'enterprise solutions', 'technology consulting', 'digital transformation',
    'machine learning', 'automation', 'cloud computing', 'cybersecurity'
  ],
  author: 'Zion Tech Group',
  image: '/images/zion-tech-group-og.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  canonical: 'https://ziontechgroup.com',
  twitterCard: 'summary_large_image' as const,
  twitterHandle: '@ziontechgroup',
  facebookAppId: '123456789'
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical = defaultSEO.canonical,
  structuredData,
  twitterCard = defaultSEO.twitterCard,
  facebookAppId = defaultSEO.facebookAppId,
  twitterHandle = defaultSEO.twitterHandle
}: SEOProps) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || `${defaultSEO.url}${url}`;
  const fullImage = image.startsWith('http') ? image : `${defaultSEO.url}${image}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation",
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
      "https://github.com/Zion-Holdings"
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
            "description": "Advanced artificial intelligence and machine learning solutions"
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
            "name": "Space Technology Solutions",
            "description": "Innovative space technology and exploration services"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "European Union"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Quantum Computing",
      "Space Technology",
      "Cloud Computing",
      "Cybersecurity",
      "Digital Transformation",
      "Enterprise Solutions"
    ]
  };

  // Enhanced structured data for services
  const serviceStructuredData = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services"
    }
  } : null;

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
        "item": fullUrl
      }
    ]
  };

  // FAQ structured data for service pages
  const faqStructuredData = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive technology solutions including AI, quantum computing, space technology, and enterprise IT services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Zion Tech Group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us through our website or call +1-302-464-0950 to discuss your technology needs and get a customized solution."
        }
      }
    ]
  } : null;

  const finalStructuredData = structuredData || [defaultStructuredData, serviceStructuredData, breadcrumbStructuredData, faqStructuredData].filter(Boolean);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Facebook Meta Tags */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      
      {/* Article Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
    </Head>
  );
}