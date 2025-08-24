import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  companyName?: string;
  companyLogo?: string;
  companyUrl?: string;
  companyDescription?: string;
  companyAddress?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  companyContact?: {
    telephone: string;
    email: string;
  };
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  robots,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology Services',
  tags = [],
  companyName = 'Zion Tech Group',
  companyLogo = '/logo.png',
  companyUrl = 'https://ziontechgroup.com',
  companyDescription = 'Revolutionary Technology Solutions for 2045 and Beyond',
  companyAddress = {
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  },
  companyContact = {
    telephone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  }
}) => {
  const defaultKeywords = [
    'AI technology',
    'quantum computing',
    'cybersecurity',
    'space technology',
    'micro SAAS',
    'business solutions',
    'IT infrastructure',
    'automation',
    'machine learning',
    'blockchain',
    'cloud computing',
    'edge computing',
    'data analytics',
    'IoT solutions',
    'digital transformation'
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];
  
  const robotsValue = robots || `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "url": companyUrl,
    "logo": `${companyUrl}${companyLogo}`,
    "description": companyDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyAddress.streetAddress,
      "addressLocality": companyAddress.addressLocality,
      "addressRegion": companyAddress.addressRegion,
      "postalCode": companyAddress.postalCode,
      "addressCountry": companyAddress.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyContact.telephone,
      "contactType": "customer service",
      "email": companyContact.email
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Cybersecurity",
      "Space Technology",
      "Micro SAAS Solutions",
      "IT Infrastructure"
    ]
  };

  // Article structured data if publishedTime is provided
  const articleStructuredData = publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": companyName
    },
    "publisher": {
      "@type": "Organization",
      "name": companyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${companyUrl}${companyLogo}`
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical || companyUrl
    },
    "articleSection": section,
    "keywords": allKeywords.join(', '),
    "articleBody": description
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
        "item": companyUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": section,
        "item": `${companyUrl}/${section.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonical || companyUrl
      }
    ]
  };

  // FAQ structured data for common questions
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers revolutionary AI consciousness, quantum computing, cybersecurity, space technology, and autonomous systems solutions for businesses looking to transform their operations with cutting-edge technology."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Zion Tech Group services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get started by contacting us at kleber@ziontechgroup.com or calling +1 302 464 0950. Our team will assess your needs and recommend the best solutions for your business."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Zion Tech Group different from other technology companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in futuristic technology solutions that are 10-20 years ahead of the market, including AI consciousness, quantum computing, and autonomous systems that provide unprecedented competitive advantages."
        }
      }
    ]
  };

  const finalStructuredData = structuredData || [
    defaultStructuredData,
    breadcrumbStructuredData,
    faqStructuredData,
    ...(articleStructuredData ? [articleStructuredData] : [])
  ];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title} | {companyName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsValue} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || companyUrl} />
      <meta property="og:image" content={`${companyUrl}${ogImage}`} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${companyUrl}${ogImage}`} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      
      {/* Article Meta Tags */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime || publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={companyName} />
      <meta name="apple-mobile-web-app-title" content={companyName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Business Meta Tags */}
      <meta name="business:contact:phone" content={companyContact.telephone} />
      <meta name="business:contact:email" content={companyContact.email} />
      <meta name="business:contact:address" content={`${companyAddress.streetAddress}, ${companyAddress.addressLocality}, ${companyAddress.addressRegion} ${companyAddress.postalCode}`} />
    </Head>
  );
};

export default EnhancedSEO;