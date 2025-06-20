import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

interface DocProps {
  content: string | null;
}

interface DocPageParams extends ParsedUrlQuery {
  slug: string;
}

const Doc: React.FC<DocProps> = ({ content }) => {
  if (!content) {
    return <div>Document not found</div>;
  }
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'docs', 'gitbook');
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md' && f !== 'SUMMARY.md');
  const paths = files.map((f) => ({ params: { slug: f.replace(/\.md$/, '') } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DocProps, DocPageParams> = async ({ params }: { params: DocPageParams }) => {
  // params is now typed as DocPageParams, so params.slug is a string
  // However, if fallback: 'blocking' or fallback: true is used, params might be initially undefined
  // or some params might be missing during the first render.
  // Given fallback: false in getStaticPaths, params and params.slug should always be defined here.
  const slug = params.slug;
  const filePath = path.join(process.cwd(), 'docs', 'gitbook', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return { props: { content } };
};

export default Doc;
