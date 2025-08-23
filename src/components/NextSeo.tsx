import React from 'react';
import Head from 'next/head';

interface OpenGraphImage {
  url: string;
}

interface OpenGraph {
  title?: string;
  description?: string;
  images?: OpenGraphImage[];
}

export interface NextSeoProps {
  title?: string;
  description?: string;
  openGraph?: OpenGraph;
}

export const NextSeo: React.FC<NextSeoProps> = ({ title, description, openGraph }) => {
  const ogTitle = openGraph?.title || title;
  const ogDescription = openGraph?.description || description;
  const ogImage = openGraph?.images && openGraph.images[0]?.url;

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Head>
  );
};
