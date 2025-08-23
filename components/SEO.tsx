import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  language?: string;
  charset?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string; type?: string; sizes?: string }>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary Technology Solutions for 2045 and Beyond',
  description = 'Experience the future of technology with our cutting-edge AI consciousness, quantum computing, and autonomous systems. Transform your business with revolutionary micro SAAS solutions.',
  keywords = [
    'AI consciousness', 'quantum computing', 'autonomous systems', 'micro SAAS',
    'technology solutions', 'AI automation', 'quantum technology', 'space technology',
    'cybersecurity', 'business intelligence', 'cloud infrastructure', 'Zion Tech Group'
  ],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/og-image-zion-tech-group.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  structuredData,
  noindex = false,
  nofollow = false,
  robots,
  language = 'en-US',
  charset = 'utf-8',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#000000',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#000000',
  additionalMeta = [],
  additionalLinks = []
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Revolutionary Technology Solutions for 2045 and Beyond',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      contactType: 'customer service'
    },
    sameAs: [
      'https://github.com/Zion-Holdings',
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      description: 'AI consciousness, quantum computing, and autonomous systems solutions',
      category: 'Technology Services'
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Generate robots meta tag
  const robotsContent = robots || [
    noindex && 'noindex',
    nofollow && 'nofollow',
    !noindex && 'index',
    !nofollow && 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].filter(Boolean).join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content={language} />
      <meta charSet={charset} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} type={link.type} sizes={link.sizes} />
      ))}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />

      {/* Business Information */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />

      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      <meta name="pinterest-site-verification" content="your-pinterest-verification-code" />

      {/* Performance and Analytics */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  );
};

export default SEO;