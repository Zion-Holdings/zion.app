import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
  description:
    "Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
  url: 'https://ziontechgroup.com'
};

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const router = useRouter();

  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;

  // Derive canonical from router when not explicitly provided
  const asPath = router?.asPath || '/';
  const pathWithoutQueryOrHash = asPath.split('#')[0].split('?')[0];
  const normalizedPath = pathWithoutQueryOrHash.endsWith('/') ? pathWithoutQueryOrHash : `${pathWithoutQueryOrHash}/`;
  const derivedCanonical = `${DEFAULTS.url}${normalizedPath === '/' ? '' : normalizedPath}`;
  const canonicalUrl = canonical || derivedCanonical;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl || DEFAULTS.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Head>
  );
}