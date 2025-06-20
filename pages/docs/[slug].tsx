import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps } from 'next';

interface DocProps {
  content: string | null;
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

export const getStaticProps: GetStaticProps<DocProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'docs', 'gitbook', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return { props: { content } };
};

export default Doc;
