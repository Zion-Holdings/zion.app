import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  noindex?: boolean;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Pioneering the Future of Technology',
  description = 'Leading technology solutions provider specializing in AI, quantum computing, space technology, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords = ['technology', 'AI', 'quantum computing', 'space technology', 'business solutions', 'innovation'],
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  canonical,
  openGraph,
  twitter
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullUrl = canonical || url;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with innovative solutions that drive business transformation",
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
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50+",
    "industry": "Technology",
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Space Technology",
      "Business Automation",
      "Cloud Infrastructure",
      "Cybersecurity"
    ]
  };

  // Service-specific structured data
  const getServiceStructuredData = () => {
    if (type === 'service' && title) {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": fullDescription,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": section || "Technology Service",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": fullUrl
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Technology Services"
        }
      };
    }
    return null;
  };

  // Article structured data
  const getArticleStructuredData = () => {
    if (type === 'article' && publishedTime) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": fullDescription,
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
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullUrl
        }
      };
    }
    return null;
  };

  // Breadcrumb structured data
  const getBreadcrumbStructuredData = () => {
    const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean) : [];
    if (pathSegments.length > 0) {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        }
      ];

      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://ziontechgroup.com${currentPath}`
        });
      });

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };
    }
    return null;
  };

  // FAQ structured data
  const getFAQStructuredData = () => {
    // This could be dynamically generated based on page content
    const faqs = [
      {
        "question": "What services does Zion Tech Group offer?",
        "answer": "Zion Tech Group offers comprehensive technology solutions including AI development, quantum computing, space technology, business automation, and enterprise IT services."
      },
      {
        "question": "How can I get started with Zion Tech Group?",
        "answer": "You can get started by contacting us at +1-302-464-0950 or emailing kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Combine all structured data
  const allStructuredData = [
    defaultStructuredData,
    getServiceStructuredData(),
    getArticleStructuredData(),
    getBreadcrumbStructuredData(),
    getFAQStructuredData(),
    structuredData
  ].filter(Boolean);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page view
      if ('gtag' in window) {
        (window as any).gtag('config', 'G-XXXXXXXXXX', {
          page_title: fullTitle,
          page_location: fullUrl,
          custom_map: {
            custom_dimension1: type,
            custom_dimension2: section || 'general'
          }
        });
      }

      // Track Core Web Vitals
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              // Track LCP
              if ('gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(entry.startTime),
                  non_interaction: true
                });
              }
            }
          }
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Fallback for older browsers
        }
      }
    }
  }, [fullTitle, fullUrl, type, section]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={openGraph?.title || fullTitle} />
      <meta property="og:description" content={openGraph?.description || fullDescription} />
      <meta property="og:image" content={openGraph?.image || image} />
      <meta property="og:url" content={openGraph?.url || fullUrl} />
      <meta property="og:type" content={openGraph?.type || type} />
      <meta property="og:site_name" content={openGraph?.siteName || 'Zion Tech Group'} />
      <meta property="og:locale" content={openGraph?.locale || 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:site" content={twitter?.site || '@ziontechgroup'} />
      <meta name="twitter:creator" content={twitter?.creator || '@ziontechgroup'} />
      <meta name="twitter:title" content={twitter?.title || fullTitle} />
      <meta name="twitter:description" content={twitter?.description || fullDescription} />
      <meta name="twitter:image" content={twitter?.image || image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//ziontechgroup.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Additional SEO optimizations */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Favicon and app icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Verification tokens */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
    </Head>
  );
};

export default SEO;