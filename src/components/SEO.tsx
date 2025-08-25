import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
<<<<<<< HEAD
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
=======
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || `https://ziontechgroup.com${window.location.pathname}`;
  const defaultOgImage = 'https://ziontechgroup.com/og-image.jpg';

>>>>>>> feature-branch-merge
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
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
=======
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Your comprehensive marketplace for all things technology and AI",
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
            "https://facebook.com/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://instagram.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
}

>>>>>>> feature-branch-merge
