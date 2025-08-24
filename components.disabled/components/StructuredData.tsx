import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Pioneering the future of technology with cutting-edge AI, quantum computing, and autonomous solutions that transform businesses worldwide.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI & Machine Learning",
                  "description": "Advanced AI solutions for enterprise automation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Quantum Computing",
                  "description": "Next-generation computational power"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cybersecurity",
                  "description": "Military-grade protection for digital assets"
                }
              }
            ]
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "description": "Leading technology company specializing in AI, quantum computing, and cybersecurity solutions",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Technology Services",
          "description": data.description || "Cutting-edge technology solutions",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "areaServed": "Worldwide",
          "serviceType": data.serviceType || "Technology Consulting"
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "Technology Insights",
          "description": data.description || "Latest insights from Zion Tech Group",
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ziontechgroup.com/logo.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString()
        };

      default:
        return {};
    }
  };

  const structuredData = generateStructuredData();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
};

export default StructuredData;