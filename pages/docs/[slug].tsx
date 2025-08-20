import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import type { GetStaticPaths, GetStaticProps } from 'next';

type DocSlug = keyof typeof DOCS_MAP;

const DOCS_MAP = {
  readme: 'README.md',
  architecture: 'ARCHITECTURE.md',
  api: 'API.md',
  deployment: 'DEPLOYMENT.md',
  contributing: 'CONTRIBUTING.md',
  testing: 'TESTING.md',
  performance: 'PERFORMANCE.md',
  security: 'SECURITY.md',
  'github-actions-improvements': 'GITHUB_ACTIONS_IMPROVEMENTS.md',
  'comprehensive-redundancy': 'README_COMPREHENSIVE_REDUNDANCY.md',
  'ultimate-redundancy': 'README_ULTIMATE_REDUNDANCY.md',
  'pm2-redundancy': 'README_PM2_REDUNDANCY_COMPLETE.md',
  'automation-completion-report': 'AUTOMATION_COMPLETION_REPORT.md',
  'lighthouse-live-report': 'lighthouse-live-report.md',
  'lighthouse-budgets-report': 'lighthouse-budgets-report.md',
  'performance-weekly-report': 'performance-weekly-report.md'
} as const;

interface DocsPageProps {
  title: string;
  html: string;
}

export default function DocsPage({ title, html }: DocsPageProps) {
  return (
    <>
      <Head>
        <title>{title} | Zion Tech Group Docs</title>
        <meta name="description" content={`${title} — Project documentation`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </nav>
          <article className="prose prose-invert max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </main>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(DOCS_MAP).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async (context) => {
  const slugParam = context.params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  if (!slug || !(slug in DOCS_MAP)) {
    return { notFound: true };
  }

  const filename = DOCS_MAP[slug as DocSlug];
  const filePath = path.join(process.cwd(), filename);
  const markdown = fs.readFileSync(filePath, 'utf8');

  const { marked } = await import('marked');
  const parsed = marked.parse(markdown);
  const html = typeof parsed === 'string' ? parsed : await parsed;

  const prettyTitle = filename.replace(/\.md$/i, '').replace(/[_-]+/g, ' ');

  return {
    props: {
      title: prettyTitle,
      html
    }
  };
};

