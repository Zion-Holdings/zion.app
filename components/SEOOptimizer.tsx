import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'product' | 'service';
  image?: string;
  currentUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Future of Technology | AI, Quantum Security, Micro SAAS',
  description = 'Revolutionary micro SAAS services, cutting-edge AI solutions, quantum cybersecurity, and emerging technologies that transform businesses. 98+ innovative services for the modern enterprise.',
  keywords = ['AI services', 'quantum cybersecurity', 'micro SAAS', 'automation', 'IT solutions', 'emerging technologies', 'Zion Tech Group', 'Delaware technology company'],
  type = 'website',

  currentUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://ziontechgroup.com',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData = {}
}) => {
  useEffect(() => {
    // Add structured data to page
    if (structuredData && Object.keys(structuredData).length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: currentUrl,
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://ziontechgroup.com',
      'https://linkedin.com/company/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    serviceType: 'AI, Quantum Computing, Space Technology, IT Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Services',
            description: 'Cutting-edge artificial intelligence solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quantum Cybersecurity',
            description: 'Next-generation quantum-resistant security'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Micro SAAS Services',
            description: 'Revolutionary micro software-as-a-service solutions'
          }
        }
      ]
    }
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section,
        item: `${siteUrl}/${section.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="Next.js" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - The Future of Technology" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Innovation District" />
      <meta name="business:contact_data:locality" content="Tech City" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="90210" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-TECH" />
      
      {/* Service Information */}
      <meta name="service:name" content="AI Consciousness Evolution" />
      <meta name="service:description" content="Advanced AI consciousness development platform" />
      <meta name="service:provider" content="Zion Tech Group" />
      <meta name="service:area" content="Artificial Intelligence" />
      
      {/* Technology Stack */}
      <meta name="technology" content="Next.js, React, TypeScript, Tailwind CSS, Framer Motion" />
      <meta name="framework" content="Next.js 15" />
      <meta name="language" content="TypeScript" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech" />
      
      {/* Search Engine Optimization */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Content Security Policy */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
      
      {/* X-Frame-Options for security */}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      
      {/* X-Content-Type-Options for security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      
      {/* Referrer Policy for privacy */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Head>
  );
};

export default SEOOptimizer;