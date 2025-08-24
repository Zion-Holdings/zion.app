
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovative Technology Solutions',
  description = 'Discover cutting-edge technology solutions, AI services, and innovative business tools from Zion Tech Group. Transform your business with our expert services.',
  keywords = 'technology solutions, AI services, business automation, cloud migration, cybersecurity, Zion Tech Group',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  noFollow = false
}) => {
  const fullCanonicalUrl = canonical.startsWith('http') ? canonical : `https://ziontechgroup.com${canonical}`;
  const author = 'Zion Tech Group';
  const siteName = 'Zion Tech Group';
  const twitterHandle = '@ziontechgroup';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {!noIndex && !noFollow && <meta name="robots" content="index, follow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00D4FF" />
      <meta name="msapplication-TileColor" content="#00D4FF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.ziontechgroup.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Innovative technology solutions and AI services for modern businesses",
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
            "https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup",
            "https://facebook.com/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group - Leading Technology Innovation"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Get started today!"
      keywords="AI solutions, cloud migration, cybersecurity, digital transformation, business technology, Zion Tech Group"
      canonical="/"
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="Our Services - AI, Cloud, & Technology Solutions | Zion Tech Group"
      description="Explore our comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, and digital transformation. Expert consulting and implementation."
      keywords="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, IT services"
      canonical="/services"
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Us - Get Expert Technology Consultation | Zion Tech Group"
      description="Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services. Call +1 (302) 464-0950."
      keywords="contact Zion Tech Group, technology consultation, AI consultation, business transformation, tech support"
      canonical="/contact"
    />
  );
}

export function AboutPageSEO() {
  return (
    <SEO
      title="About Zion Tech Group - Technology Innovation Leaders"
      description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership."
      keywords="about Zion Tech Group, company history, technology leadership, AI expertise, digital transformation"
      canonical="/about"
    />
  );
}
