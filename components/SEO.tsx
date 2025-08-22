import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
}

const DEFAULTS = {
  title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
  description:
    "Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
  url: 'https://ziontechgroup.com',
  image: 'https://ziontechgroup.com/og-default.png'
};

export default function SEO({ title, description, canonical, ogImage, twitterImage }: SEOProps) {
  const router = useRouter();
  const pageTitle = title || DEFAULTS.title;
  const pageDescription = description || DEFAULTS.description;

  const origin = DEFAULTS.url.replace(/\/$/, '');
  const pathWithSlash = router.asPath ? (router.asPath.startsWith('/') ? router.asPath : `/${router.asPath}`) : '/';
  const fullUrl = `${origin}${pathWithSlash}`.replace(/\/+$/, '/') as string;
  const canonicalUrl = canonical || fullUrl;

  const ogImg = ogImage || DEFAULTS.image;
  const twImg = twitterImage || ogImg;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImg} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={twImg} />
    </Head>
  );
}