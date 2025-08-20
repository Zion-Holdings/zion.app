import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import { marked } from 'marked';

type DocPageProps = {
  title: string;
  html: string;
};

const DOC_FILES: string[] = [
  'README.md',
  'ARCHITECTURE.md',
  'API.md',
  'CONTRIBUTING.md',
  'DEPLOYMENT.md',
  'SECURITY.md',
  'TESTING.md',
  'README_GITHUB_ACTIONS.md',
  'SERVICE_GENERATION_README.md',
  'content-generation-report.md',
  'performance-weekly-report.md',
  'lighthouse-live-report.md',
  'lighthouse-budgets-report.md',
  'netlify-monitor-report.md',
  'ci-lint-types-build-report.md',
  'dependencies-report.md',
  'AUTOMATION_COMPLETION_REPORT.md',
  'README_COMPREHENSIVE_REDUNDANCY.md',
  'README_ULTIMATE_REDUNDANCY.md',
  'README_PM2_REDUNDANCY_COMPLETE.md'
];

export default function DocPage({ title, html }: DocPageProps) {
  return (
    <>
      <Head>
        <title>{title} | Zion Tech Group Docs</title>
        <meta name="description" content={`${title} - Documentation`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
            <span className="mx-2 text-white/40">/</span>
            <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 transition-colors">Docs</Link>
          </nav>
          <article className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = DOC_FILES.map((file) => ({
    params: { slug: file.replace(/\.md$/i, '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  const rootDir = process.cwd();
  const candidates = [
    `${slug}.md`,
    `${slug.toUpperCase()}.md`,
    `${slug.toLowerCase()}.md`
  ];

  let filePath: string | null = null;
  for (const candidate of candidates) {
    const abs = path.join(rootDir, candidate);
    if (fs.existsSync(abs)) {
      filePath = abs;
      break;
    }
  }

  if (!filePath) {
    const match = DOC_FILES.find((f) => f.replace(/\.md$/i, '') === slug);
    if (match) {
      filePath = path.join(rootDir, match);
    }
  }

  if (!filePath) {
    return { notFound: true };
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const html = marked.parse(source);
  const title = path.basename(filePath).replace(/\.md$/i, '');

  return {
    props: { title, html }
  };
}

