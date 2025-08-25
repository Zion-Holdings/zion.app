import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = `${title} | Zion Tech Group - AI-Powered Innovation & Enterprise Solutions`;
  const fullDescription = `${description} Zion Tech Group delivers cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services for modern enterprises.`;
  const fullKeywords = keywords 
    ? `${keywords}, AI solutions, cybersecurity, cloud computing, digital transformation, enterprise IT, Zion Tech Group`
    : 'AI solutions, cybersecurity, cloud computing, digital transformation, enterprise IT, Zion Tech Group, artificial intelligence, machine learning, quantum computing, blockchain, IoT, AR/VR';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00e5ff" />
      <meta name="msapplication-TileColor" content="#00e5ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Zion Tech Group delivers cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services for modern enterprises.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
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
            "https://github.com/Zion-Holdings"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.7447,
              "longitude": -75.5484
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI & IT Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI-Powered Business Intelligence",
                  "description": "Advanced analytics and insights powered by artificial intelligence"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cybersecurity Solutions",
                  "description": "Comprehensive threat detection and response systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Infrastructure",
                  "description": "Scalable cloud solutions and infrastructure management"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: "AI-Powered Innovation & Enterprise Solutions",
    description: "Transform your business with cutting-edge artificial intelligence solutions, comprehensive IT services, and digital transformation expertise.",
    keywords: "AI solutions, artificial intelligence, enterprise IT, cybersecurity, cloud computing, digital transformation",
    ogType: "website" as const,
  },
  services: {
    title: "Comprehensive AI & IT Services",
    description: "Explore our full range of AI-powered services including business intelligence, cybersecurity, cloud infrastructure, and emerging technologies.",
    keywords: "AI services, IT services, cybersecurity, cloud migration, DevOps, blockchain, IoT",
    ogType: "website" as const,
  },
  about: {
    title: "About Zion Tech Group",
    description: "Learn about our mission to revolutionize business through AI innovation, our expert team, and our commitment to delivering exceptional results.",
    keywords: "about us, company history, team, mission, vision, values",
    ogType: "website" as const,
  },
  contact: {
    title: "Contact Zion Tech Group",
    description: "Get in touch with our team to discuss your AI and IT needs. We're here to help transform your business with innovative technology solutions.",
    keywords: "contact us, get quote, consultation, support, sales",
    ogType: "website" as const,
  },
  pricing: {
    title: "Transparent Pricing Plans",
    description: "Discover our competitive pricing for AI solutions, IT services, and enterprise packages. Transparent costs with no hidden fees.",
    keywords: "pricing, costs, packages, plans, enterprise pricing, AI pricing",
    ogType: "website" as const,
  },
  blog: {
    title: "AI & Technology Insights",
    description: "Stay updated with the latest trends in AI, cybersecurity, cloud computing, and emerging technologies through our expert insights and analysis.",
    keywords: "blog, articles, insights, technology trends, AI news, cybersecurity updates",
    ogType: "website" as const,
  },
};

export default SEOHead;