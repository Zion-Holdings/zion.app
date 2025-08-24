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