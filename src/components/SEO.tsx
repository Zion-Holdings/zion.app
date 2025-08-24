import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Zion Tech Group - Revolutionary Technology Solutions",
  description = "Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.",
  keywords = "AI marketplace, tech services, artificial intelligence, IT services, AI developers, technology marketplace, AI solutions, machine learning, digital transformation, micro SaaS",
  image = "https://drive.google.com/uc?export=view&id=0B0iuzhpa3pD7X0RzZ2lmclN3Ymc",
  url = "https://ziontechgroup.com",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href={image} />
      <link rel="apple-touch-icon" href={image} />
      
      {/* Structured data (JSON-LD) for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "${url}",
            "logo": "${image}",
            "description": "${description}",
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://www.facebook.com/ziontechgroup",
              "https://www.linkedin.com/company/zion-tech-group"
            ]
          }
        `}
      </script>
    </Helmet>
  );
}
