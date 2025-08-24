import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovative IT Solutions & AI Services',
  description = 'Leading provider of micro SAAS, IT services, and AI solutions. Expert cybersecurity, cloud solutions, and digital transformation services.',
  keywords = 'IT services, AI solutions, cybersecurity, cloud computing, micro SAAS, digital transformation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  canonical
}) => {
  const fullTitle = title === 'Zion Tech Group - Innovative IT Solutions & AI Services' 
    ? title 
    : `${title} | Zion Tech Group`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url} />
    </Helmet>
  );
};