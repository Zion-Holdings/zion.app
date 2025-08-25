import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Zion Tech Group - Future Technology Group",
  description = "Leading the future of technology with innovative AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions that transform businesses and industries.",
  url = "https://ziontechgroup.com",
  image = "/og-image.jpg",
  type = "website",
  keywords = "AI, quantum computing, cybersecurity, IT infrastructure, micro SAAS, Zion Tech Group"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </>
  );
};