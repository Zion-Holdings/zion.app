import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({ 
  title = 'Zion Tech Group - AI, IT, and Micro SAAS Solutions',
  description = 'Discover innovative micro SAAS solutions, cutting-edge AI services, and professional IT solutions designed to transform your business',
  keywords = 'AI services, IT solutions, micro SAAS, business automation, cybersecurity, cloud computing',
  ogImage = '/og-image.jpg',
  canonical = 'https://ziontechgroup.com'
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
    </>
  );
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group - Revolutionary Micro SaaS & AI Solutions"
      description="Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services. Transform your business with our innovative solutions."
      keywords="micro SaaS, AI solutions, cloud infrastructure, cybersecurity, machine learning, React, Node.js, AWS, Azure, business automation"
      canonical="/"
      ogImage="/images/zion-homepage-og.jpg"
      ogType="website"
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
      ogType="product"
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
      ogType="profile"
    />
  );
}
