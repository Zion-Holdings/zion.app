import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type DocSlug =
  | 'readme'
  | 'architecture'
  | 'deployment'
  | 'api'
  | 'security'
  | 'testing'
  | 'performance'
  | 'ultimate-redundancy'
  | 'comprehensive-redundancy'
  | 'pm2-redundancy';

const slugToFileMap: Record<DocSlug, string> = {
  readme: 'README.md',
  architecture: 'ARCHITECTURE.md',
  deployment: 'DEPLOYMENT.md',
  api: 'API.md',
  security: 'SECURITY.md',
  testing: 'TESTING.md',
  performance: 'PERFORMANCE.md',
  'ultimate-redundancy': 'README_ULTIMATE_REDUNDANCY.md',
  'comprehensive-redundancy': 'README_COMPREHENSIVE_REDUNDANCY.md',
  'pm2-redundancy': 'README_PM2_REDUNDANCY_COMPLETE.md'
};

interface DocsPageProps {
  slug: DocSlug;
  title: string;
  content: string;
}

export default function DocsPage({ slug, title, content }: DocsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>{`${title} — Documentation`}</title>
        <meta name="description" content={`${title} documentation and guide`} />
      </Head>
      <main className="container mx-auto px-6 py-10">
        <nav className="mb-8">
          <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
        </nav>
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </article>
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-xl font-semibold mb-4 text-white/90">More Docs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(slugToFileMap)
              .filter(([key]) => key !== slug)
              .map(([key]) => (
                <Link key={key} href={`/docs/${key}`} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white/90">
                  {formatTitle(key as DocSlug)}
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function formatTitle(slug: DocSlug): string {
  switch (slug) {
    case 'readme':
      return 'Project Overview (README)';
    case 'architecture':
      return 'Architecture Guide';
    case 'deployment':
      return 'Deployment Guide';
    case 'api':
      return 'API Reference';
    case 'security':
      return 'Security';
    case 'testing':
      return 'Testing';
    case 'performance':
      return 'Performance';
    case 'ultimate-redundancy':
      return 'Ultimate Redundancy';
    case 'comprehensive-redundancy':
      return 'Comprehensive Redundancy';
    case 'pm2-redundancy':
      return 'PM2 Redundancy';
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(slugToFileMap).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { slug: DocSlug } }) {
  const slug = context.params.slug;
  const fileName = slugToFileMap[slug];
  const filePath = path.join(process.cwd(), fileName);
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    content = '# Not Found\n\nThe requested document could not be loaded.';
  }

  return {
    props: {
      slug,
      title: formatTitle(slug),
      content
    }
  };
}

