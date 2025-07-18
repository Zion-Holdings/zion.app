import React from 'react;
import Head from 'next/head;

interface OpenGraphImage {
  url: string;

interface OpenGraph {
  title?: string;
  description?: string;
  images?: OpenGraphImage[];

export interface NextSeoProps {
  title?: string;
  description?: string;
  openGraph?: OpenGraph;

export const NextSeo: React.FC<NextSeoProps> = ({ title, description, openGraph }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {openGraph && (
        <>
          {openGraph.title && <meta property="og:title" content={openGraph.title} />}
          {openGraph.description && <meta property="og:description" content={openGraph.description} />}
          {openGraph.images && openGraph.images.map((image, index) => (
            <meta key={index} property="og:image' content={image.url} />
          ))}
        </>
      )}
    </Head>
  );
};';;