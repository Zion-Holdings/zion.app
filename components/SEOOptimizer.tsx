import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
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
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Leading AI, Quantum Computing & Space Technology Solutions",
  description = "Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation. Expert consulting, development, and implementation services.",
  keywords = "AI, artificial intelligence, quantum computing, space technology, technology consulting, digital transformation, machine learning, automation, cybersecurity, cloud computing",
  image = "/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Quantum Computing", "Space Technology", "Digital Transformation"]
}) => {
  useEffect(() => {
    // Add structured data to page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI, quantum computing, and space technology solutions",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressLocality": "San Francisco",
        "addressRegion": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "contact@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/zion-tech-group"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Advanced artificial intelligence and machine learning solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Quantum Computing",
              "description": "Next-generation quantum computing solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Space Technology",
              "description": "Revolutionary space exploration and technology solutions"
            }
          }
        ]
      }
    };

    // Add breadcrumb structured data
    const breadcrumbData = {
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
          "name": section,
          "item": `${url}`
        }
      ]
    };

    // Add FAQ structured data if applicable
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive AI, quantum computing, and space technology solutions including consulting, development, implementation, and ongoing support services."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with Zion Tech Group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can get started by contacting us through our website, scheduling a consultation, or requesting a demo of our solutions."
          }
        }
      ]
    };

    // Inject structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
    };
  }, [url, section]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Article Meta Tags (if applicable) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="123 Innovation Drive" />
      <meta name="business:contact_data:locality" content="San Francisco" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="94105" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-555-0123" />
      <meta name="business:contact_data:email" content="contact@ziontechgroup.com" />
      
      {/* Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      
      {/* Preconnect and DNS Prefetch for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.ziontechgroup.com" />
      <link rel="dns-prefetch" href="https://cdn.ziontechgroup.com" />
      
      {/* Critical CSS and Fonts Preload */}
      <link rel="preload" href="/logo.png" as="image" type="image/png" />
      <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="San Francisco" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
    </Head>
  );
};

export default SEOOptimizer;