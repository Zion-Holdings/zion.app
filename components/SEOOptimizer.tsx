import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Pioneering the Future of Technology',
  description = 'Zion Tech Group delivers innovative AI, quantum computing, and process automation solutions that drive business transformation. Expert technology consulting and implementation services.',
  keywords = 'AI, Machine Learning, Quantum Computing, Process Automation, Technology Consulting, Business Transformation, Zion Tech Group',
  ogImage = '/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Pioneering the future of technology with innovative solutions that drive business transformation',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    offers: {
      '@type': 'AggregateOffer',
      offers: [
        {
          '@type': 'Offer',
          name: 'AI & Machine Learning Solutions',
          description: 'Advanced artificial intelligence solutions for modern businesses',
          price: '999',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '999',
            priceCurrency: 'USD',
            billingIncrement: 'P1M'
          }
        },
        {
          '@type': 'Offer',
          name: 'Quantum Computing Solutions',
          description: 'Next-generation computing solutions for complex problems',
          price: '1999',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1999',
            priceCurrency: 'USD',
            billingIncrement: 'P1M'
          }
        },
        {
          '@type': 'Offer',
          name: 'Process Automation Solutions',
          description: 'Intelligent automation to streamline your operations',
          price: '799',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '799',
            priceCurrency: 'USD',
            billingIncrement: 'P1M'
          }
        }
      ]
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Add page-specific structured data
  useEffect(() => {
    // Add WebPage structured data
    const webPageData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: canonicalUrl,
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      }
    };

    // Inject structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(webPageData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonicalUrl]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
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
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
    </Head>
  );
};

export default SEOOptimizer;