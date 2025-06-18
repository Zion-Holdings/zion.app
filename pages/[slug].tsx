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
  const dir = path.join(process.cwd(), 'content', 'pages');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  // List of slugs that have dedicated pages and should be excluded from [slug].tsx
  const reservedSlugs = ['about', 'careers', 'innovation', 'roadmap', 'privacy', 'terms', 'status'];

  const paths = files
    .map((f) => ({ params: { slug: f.replace(/\.md$/, '') } }))
    .filter(p => !reservedSlugs.includes(p.params.slug));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }: { params?: { slug?: string } }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', 'pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const { meta, content } = parseMarkdown(filePath);
  return { props: { meta, content } };
};

export default StaticPage;
