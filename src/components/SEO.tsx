
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  image,
  type
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonicalUrl = canonical || 'https://ziontechgroup.com';
  const fullImageUrl = (image || ogImage).startsWith('http') ? (image || ogImage) : `https://ziontechgroup.com${image || ogImage}`;
  const fullOgType = type || ogType;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "The premier AI and tech marketplace connecting talent, services, and innovation.",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "areaServed": "Worldwide"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={fullOgType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://ziontechgroup.com" />
    </Helmet>
  );
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion - The Tech & AI Marketplace"
      description="Discover top AI and tech talent, services, and equipment in one place. Connect with experts, find innovative solutions, and accelerate your tech projects."
      keywords="AI marketplace, tech talent, IT services, tech equipment, AI experts, developers, tech consulting, innovation"
      canonical="/"
      image="/images/zion-homepage-og.jpg"
      structuredData={{
        "@type": "WebSite",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }}
    />
  );
}

export function ServicePageSEO({ 
  serviceName, 
  description, 
  category 
}: { 
  serviceName: string;
  description: string;
  category: string;
}) {
  return (
    <SEO
      title={`${serviceName} - Zion Tech Group`}
      description={description}
      keywords={`${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`}
      canonical={`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      type="product"
      structuredData={{
        "@type": "Service",
        "name": serviceName,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "category": category,
        "areaServed": "Worldwide"
      }}
    />
  );
}

export function TalentPageSEO({ 
  talentName, 
  skills, 
  description 
}: { 
  talentName: string;
  skills: string[];
  description: string;
}) {
  return (
    <SEO
      title={`${talentName} - Tech Talent | Zion Tech Group`}
      description={description}
      keywords={`${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`}
      canonical={`/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`}
      type="profile"
      structuredData={{
        "@type": "Person",
        "name": talentName,
        "description": description,
        "knowsAbout": skills,
        "worksFor": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      }}
    />
  );
}
