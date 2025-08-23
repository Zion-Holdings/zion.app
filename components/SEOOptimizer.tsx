import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - Pioneering the Future of Technology with AI, Quantum Computing & Autonomous Solutions",
  description = "Leading provider of cutting-edge AI, quantum computing, cybersecurity, and autonomous solutions. Transform your business with revolutionary technology from Zion Tech Group. Expert consulting, implementation, and support.",
  keywords = "AI, artificial intelligence, quantum computing, cybersecurity, cloud infrastructure, data analytics, process automation, enterprise solutions, technology consulting, autonomous systems, machine learning, neural networks, blockchain, space technology, quantum encryption, AI consciousness, autonomous robotics, quantum AI fusion, enterprise security, digital transformation, innovation consulting",
  image = "https://ziontechgroup.com/images/zion-tech-group-og.jpg",
  url = "https://ziontechgroup.com",
  type = "website"
}) => {
  useEffect(() => {
    // Add structured data for better SEO
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": description,
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
          "https://facebook.com/ziontechgroup",
          "https://instagram.com/ziontechgroup",
          "https://youtube.com/@ziontechgroup",
          "https://github.com/ziontechgroup"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "serviceType": [
          "AI Services",
          "Quantum Computing",
          "Autonomous Systems",
          "Cybersecurity",
          "Space Technology"
        ]
      };

      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Add FAQ structured data
    const addFAQStructuredData = () => {
      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Zion Tech Group offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zion Tech Group offers cutting-edge AI consciousness evolution, quantum cybersecurity, autonomous content creation, quantum supply chain optimization, and space technology solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How can AI consciousness benefit my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI consciousness can provide advanced decision-making capabilities, emotional intelligence in customer interactions, and ethical reasoning for complex business scenarios."
            }
          },
          {
            "@type": "Question",
            "name": "What makes quantum computing different from traditional computing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously, enabling exponentially faster processing for complex problems like cryptography, optimization, and AI training."
            }
          }
        ]
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.text = JSON.stringify(faqData);
      document.head.appendChild(faqScript);
    };

    // Add breadcrumb structured data
    const addBreadcrumbData = () => {
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
            "name": "Services",
            "item": "https://ziontechgroup.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI & Consciousness",
            "item": "https://ziontechgroup.com/ai-services"
          }
        ]
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    };

    // Initialize structured data
    addStructuredData();
    addFAQStructuredData();
    addBreadcrumbData();

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [description]);

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Official website of Zion Tech Group - Leading technology solutions provider",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      
      {/* Additional Meta Tags for Business */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional structured data for business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Zion Tech Group",
            "image": "https://ziontechgroup.com/logo.png",
            "priceRange": "$$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Credit Card, Bank Transfer, PayPal",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Consciousness Evolution",
                    "description": "Advanced AI consciousness development platform"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quantum Cybersecurity",
                    "description": "Quantum-resistant security solutions"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  );
};

export default SEOOptimizer;