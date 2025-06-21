import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps } from 'next'; // Removed GetStaticPropsContext
import { ParsedUrlQuery } from 'querystring';

// Simplified DocProps back for maximum stability against timeouts
interface DocProps {
  content: string | null; // Or even just `any` if we are always returning notFound
  __prevent_build?: boolean; // Keep the marker prop if getStaticProps returns it
}

interface DocPageParams extends ParsedUrlQuery {
  slug?: string;
}

const Doc: React.FC<DocProps> = ({ content }) => {
  // This component body won't really matter if getStaticProps always returns notFound: true
  if (!content) {
    return <div>Document not found (build-time)</div>;
  }
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Prevent path generation during build for testing
  return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<DocProps, DocPageParams> = async (
  { params }: { params: DocPageParams }
) => {
  // Minimal version to prevent timeouts
  return { props: { content: null, __prevent_build: true }, notFound: true };
};

export default Doc;
