import Head from 'next/head';
import React from 'react';

interface OpenGraph {
  title?: string;
  description?: string;
  image?: string;
}

interface NextHeadProps {
  title?: string;
  description?: string;
  openGraph?: OpenGraph;
}

const NextHead: React.FC<NextHeadProps> = ({ title, description, openGraph }) => {
  const ogTitle = openGraph?.title || title;
  const ogDescription = openGraph?.description || description;
  const ogImage = openGraph?.image;

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

export default NextHead;
