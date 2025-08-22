import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  url?: string;
}

const DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
  description:
    "Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
  url: 'https://ziontechgroup.com'
};

export default function SEO({ title, description, canonical, url }: SEOProps) {
  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;
  const canonicalUrl = canonical;
  const pageUrl = url || canonicalUrl || DEFAULTS.url;

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://instagram.com/ziontechgroup',
      'https://youtube.com/@ziontechgroup',
      'https://github.com/Zion-Holdings'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+13024640950',
        email: 'kleber@ziontechgroup.com',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    }
  } as const;

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/services?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  } as const;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
    </Head>
  );
}