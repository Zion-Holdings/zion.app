import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  twitterCard: string;
  canonicalUrl: string;
  structuredData?: object;
}

interface SEOOptimizerProps {
  seoData?: Partial<SEOData>;
  pageType?: 'homepage' | 'service' | 'blog' | 'about' | 'contact';
  serviceCategory?: string;
  serviceName?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  seoData = {}, 
  pageType = 'homepage',
  serviceCategory,
  serviceName
}) => {
  const router = useRouter();
  
  // Default SEO data
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Leading-edge AI, Quantum Computing, and Space Technology solutions. Transform your business with cutting-edge innovations from Zion Tech Group.',
    keywords: [
      'AI', 'Machine Learning', 'Quantum Computing', 'Space Technology', 
      'Enterprise IT', 'Digital Transformation', 'Innovation', 'Technology Solutions',
      'Artificial Intelligence', 'Quantum Security', 'Autonomous Systems'
    ],
    ogImage: '/og-image.svg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonicalUrl: `https://ziontechgroup.com${router.asPath}`,
  };

  // Merge with provided data
  const finalSEO = { ...defaultSEO, ...seoData };

  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.svg',
      description: finalSEO.description,
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
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings'
      ]
    };

    switch (pageType) {
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName || 'Technology Service',
          description: finalSEO.description,
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          category: serviceCategory || 'Technology Services',
          areaServed: 'Worldwide',
          url: finalSEO.canonicalUrl
        };
      
      case 'blog':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: finalSEO.title,
          description: finalSEO.description,
          author: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          url: finalSEO.canonicalUrl,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString()
        };
      
      case 'homepage':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          description: finalSEO.description,
          url: 'https://ziontechgroup.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/services?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };
      
      default:
        return baseData;
    }
  };

  // Performance optimization: Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => link.rel = 'stylesheet';
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/og-image.svg',
      '/logo.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Generate meta keywords string
  const metaKeywords = finalSEO.keywords.join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalSEO.title}</title>
      <meta name="description" content={finalSEO.description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalSEO.canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalSEO.title} />
      <meta property="og:description" content={finalSEO.description} />
      <meta property="og:type" content={finalSEO.ogType} />
      <meta property="og:url" content={finalSEO.canonicalUrl} />
      <meta property="og:image" content={finalSEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={finalSEO.twitterCard} />
      <meta name="twitter:title" content={finalSEO.title} />
      <meta name="twitter:description" content={finalSEO.description} />
      <meta name="twitter:image" content={finalSEO.ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      {/* Additional Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/logo.svg',
            description: 'Pioneering the future of technology with innovative solutions that drive business transformation',
            foundingDate: '2020',
            industry: 'Technology',
            numberOfEmployees: '50-100',
            offers: {
              '@type': 'Offer',
              description: 'AI, Quantum Computing, and Space Technology solutions',
              category: 'Technology Services'
            }
          })
        }}
      />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Service Worker for PWA capabilities */}
      {typeof window !== 'undefined' && 'serviceWorker' in navigator && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      )}
    </Head>
  );
};

export default SEOOptimizer;