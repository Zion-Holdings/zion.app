import fs from 'fs';
import path from 'path';
import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from '@/components/NextSeo';

interface PageMeta {
  title?: string;
  description?: string;
}

interface PageProps {
  content: string | null;
  meta: PageMeta | null;
}

function parseMarkdown(filePath: string): { meta: PageMeta; content: string } {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match) return { meta: {}, content: raw };
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  return { meta, content };
}

const StaticPage: React.FC<PageProps> = ({ content, meta }) => {
  if (!content) {
    return <div>Page not found</div>;
  }
  return (
    <>
      <NextSeo title={meta?.title} description={meta?.description} />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentPagesDir = path.join(process.cwd(), 'content', 'pages');
  const mainPagesDir = path.join(process.cwd(), 'pages');

  const contentFiles = fs.readdirSync(contentPagesDir).filter((f) => f.endsWith('.md'));

  const paths = contentFiles
    .map((f) => {
      const slug = f.replace(/\.md$/, '');
      return { params: { slug } };
    })
    .filter(p => {
      // Check if a dedicated page exists for this slug in the main 'pages' directory
      // e.g., pages/privacy.tsx, pages/terms.js etc.
      const potentialPagePathTs = path.join(mainPagesDir, `${p.params.slug}.tsx`);
      const potentialPagePathJs = path.join(mainPagesDir, `${p.params.slug}.js`);
      const potentialPagePathJsx = path.join(mainPagesDir, `${p.params.slug}.jsx`); // Added jsx check

      if (fs.existsSync(potentialPagePathTs) || fs.existsSync(potentialPagePathJs) || fs.existsSync(potentialPagePathJsx)) {
        // If a dedicated page exists, exclude this slug from being handled by [slug].tsx
        return false;
      }
      // Otherwise, include it
      return true;
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', 'pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const { meta, content } = parseMarkdown(filePath);
  return { props: { meta, content } };
};

export default StaticPage;
