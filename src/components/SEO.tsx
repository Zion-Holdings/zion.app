import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  image = "https://ziontechgroup.com/og-image.jpg",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  const siteName = "Zion Tech Group";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    "name": fullTitle,
    "description": fullDescription,
    "url": canonical || "https://ziontechgroup.com",
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    ...(type === "article" && {
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": tags.join(", ")
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

