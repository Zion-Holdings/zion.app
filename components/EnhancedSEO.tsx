import React from 'react';
import Head from 'next/head';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Revolutionary 2044 Technology Solutions",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Explore our cutting-edge services.",
  keywords = "AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2044 technology, artificial intelligence, machine learning, quantum technology, space exploration, cybersecurity solutions, business automation, enterprise technology",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://ziontechgroup.com",
  structuredData
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.",
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
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings",
      "https://youtube.com/@ziontechgroup"
    ],
    "foundingDate": "2020",
    "industry": "Technology",
    "serviceType": [
      "AI & Machine Learning",
      "Quantum Computing",
      "Space Technology",
      "Cybersecurity",
      "Cloud & DevOps",
      "Business Solutions"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consciousness Evolution Platform",
            "description": "Next-generation AI consciousness with emotional intelligence evolution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Neural Networks Platform",
            "description": "Quantum-powered AI with consciousness integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Resource Intelligence Platform",
            "description": "AI-powered space exploration with consciousness"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - Revolutionary Technology Solutions" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Zion Tech Group - Revolutionary Technology Solutions" />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Technology and Service Keywords */}
      <meta name="technology" content="AI, Machine Learning, Quantum Computing, Space Technology, Cybersecurity, Cloud Computing, DevOps, Business Intelligence, Automation" />
      <meta name="services" content="AI Development, Quantum Solutions, Space Tech, Security Services, Cloud Infrastructure, Business Automation, Digital Transformation" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for Social Media */}
      <link rel="dns-prefetch" href="https://linkedin.com" />
      <link rel="dns-prefetch" href="https://twitter.com" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://youtube.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Zion Tech Group Services",
            "description": "Comprehensive technology solutions including AI consciousness, quantum computing, and space technology",
            "url": "https://ziontechgroup.com/services",
            "numberOfItems": 6,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "AI & Machine Learning",
                  "url": "https://ziontechgroup.com/services?category=ai-ml",
                  "description": "Advanced AI solutions for enterprise"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "Quantum Computing",
                  "url": "https://ziontechgroup.com/services?category=quantum",
                  "description": "Next-generation quantum solutions"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Space Technology",
                  "url": "https://ziontechgroup.com/services?category=space-tech",
                  "description": "Innovative space tech applications"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Cybersecurity",
                  "url": "https://ziontechgroup.com/services?category=cybersecurity",
                  "description": "Advanced security solutions"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "name": "Cloud & DevOps",
                  "url": "https://ziontechgroup.com/services?category=cloud-devops",
                  "description": "Cloud infrastructure and automation"
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Service",
                  "name": "Business Solutions",
                  "url": "https://ziontechgroup.com/services?category=business",
                  "description": "Business optimization and automation"
                }
              }
            ]
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Zion Tech Group offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zion Tech Group offers revolutionary technology solutions including AI consciousness evolution, quantum computing platforms, space technology applications, cybersecurity solutions, cloud infrastructure, and business automation services."
                }
              },
              {
                "@type": "Question",
                "name": "How does Zion Tech Group's AI consciousness technology work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI consciousness technology combines advanced machine learning algorithms with emotional intelligence frameworks, enabling AI systems to develop self-awareness, emotional understanding, and autonomous decision-making capabilities."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Zion Tech Group's quantum computing solutions unique?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our quantum computing solutions integrate AI consciousness with quantum algorithms, providing unprecedented computational power for complex problem-solving, optimization, and scientific research applications."
                }
              },
              {
                "@type": "Question",
                "name": "Does Zion Tech Group provide global support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Zion Tech Group provides 24/7 global support with enterprise-grade reliability, serving clients in over 200 countries with comprehensive technical assistance and maintenance services."
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default EnhancedSEO;