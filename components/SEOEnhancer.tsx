import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  companyName?: string;
  companyDescription?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  companyLogo?: string;
  services?: string[];
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Pioneering the Future of Technology",
  description = "Leading provider of AI, quantum computing, and space technology solutions. Transform your business with cutting-edge innovation and proven expertise.",
  keywords = "AI, artificial intelligence, quantum computing, space technology, automation, cybersecurity, cloud infrastructure, business transformation",
  image = "/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  companyName = "Zion Tech Group",
  companyDescription = "Pioneering the future of technology with innovative solutions that drive business transformation",
  companyPhone = "+1 302 464 0950",
  companyEmail = "kleber@ziontechgroup.com",
  companyLogo = "/logo.png",
  services = [
    "AI & Machine Learning",
    "Quantum Computing",
    "Process Automation",
    "Space Technology",
    "Cybersecurity",
    "Cloud Infrastructure"
  ]
}) => {
  // Generate structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "description": companyDescription,
    "url": url,
    "logo": `${url}${companyLogo}`,
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
      "telephone": companyPhone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/Zion-Holdings",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup",
      "https://instagram.com/ziontechgroup",
      "https://youtube.com/@ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "knowsAbout": services
  };

  // Generate structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": companyName,
    "url": url,
    "description": companyDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Generate structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyName,
    "description": companyDescription,
    "url": url,
    "telephone": companyPhone,
    "email": companyEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.4496",
      "longitude": "-75.7163"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "USD"
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={companyName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${companyName} - ${description}`} />
      
      {/* Business Hours Schema */}
      <meta property="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta property="business:contact_data:locality" content="Middletown" />
      <meta property="business:contact_data:region" content="DE" />
      <meta property="business:contact_data:postal_code" content="19709" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content={companyPhone} />
      <meta property="business:contact_data:email" content={companyEmail} />
      
      {/* Service Schema */}
      {services.map((service, index) => (
        <meta key={index} property="business:service:name" content={service} />
      ))}
    </Head>
  );
};

export default SEOEnhancer;