import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
  pageType?: 'homepage' | 'service' | 'company' | 'resource';
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Future of Technology | AI, Quantum Security, Micro SAAS',
  description = 'Revolutionary micro SAAS services, cutting-edge AI solutions, quantum cybersecurity, and emerging technologies that transform businesses. 98+ innovative services for the modern enterprise.',
  keywords = 'AI services, quantum cybersecurity, micro SAAS, automation, IT solutions, emerging technologies, Zion Tech Group, Delaware technology company, enterprise solutions, digital transformation',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://ziontechgroup.com',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData = {},
  pageType = 'homepage'
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

  // Enhanced structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    alternateName: 'Zion Tech',
    url: 'https://ziontechgroup.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ziontechgroup.com/logo.png',
      width: '512',
      height: '512'
    },
    description: 'Revolutionary technology solutions including AI, quantum cybersecurity, and micro SAAS services.',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://ziontechgroup.com',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/Zion-Holdings'
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Services',
            description: 'Cutting-edge artificial intelligence solutions',
            category: 'Artificial Intelligence'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quantum Cybersecurity',
            description: 'Next-generation quantum-resistant security',
            category: 'Cybersecurity'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Micro SAAS Services',
            description: 'Revolutionary micro software-as-a-service solutions',
            category: 'Software as a Service'
          }
        }
      ]
    },
    // Add FAQ schema for better search visibility
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Zion Tech Group offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zion Tech Group offers cutting-edge AI services, quantum cybersecurity solutions, micro SAAS platforms, and comprehensive IT infrastructure services for modern enterprises.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Zion Tech Group located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zion Tech Group is located in Middletown, Delaware, serving clients across the United States with innovative technology solutions.'
        }
      }
    ]
  };

  const finalStructuredData = Object.keys(structuredData).length > 0 ? structuredData : defaultStructuredData;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance and Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
      
      {/* Additional page-specific meta tags based on page type */}
      {pageType === 'homepage' && (
        <>
          <meta name="google-site-verification" content="your-verification-code" />
          <meta name="msvalidate.01" content="your-bing-verification-code" />
        </>
      )}
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Head>
  );
};

export default SEOOptimizer;