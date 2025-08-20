import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type DocsPageProps = {
  title: string;
  content: string;
};

const SLUG_TO_DOC_PATH: Record<string, { title: string; file: string }> = {
  'project-overview': { title: 'Project Overview', file: 'README.md' },
  security: { title: 'Security & Compliance', file: 'SECURITY.md' },
  testing: { title: 'Testing & Quality', file: 'TESTING.md' },
  performance: { title: 'Performance & Monitoring', file: 'PERFORMANCE.md' },
  architecture: { title: 'Architecture', file: 'ARCHITECTURE.md' },
  deployment: { title: 'Deployment & DevOps', file: 'DEPLOYMENT.md' },
  api: { title: 'API Documentation', file: 'API.md' },
  contributing: { title: 'Contributing Guide', file: 'CONTRIBUTING.md' },
  'redundancy-comprehensive': { title: 'Comprehensive Redundancy', file: 'README_COMPREHENSIVE_REDUNDANCY.md' },
  'redundancy-ultimate': { title: 'Ultimate Redundancy', file: 'README_ULTIMATE_REDUNDANCY.md' },
  'redundancy-pm2': { title: 'PM2 Orchestration', file: 'README_PM2_REDUNDANCY_COMPLETE.md' },
  'automation-status': { title: 'Automation Completion Report', file: 'AUTOMATION_COMPLETION_REPORT.md' },
  'content-generation-report': { title: 'AI Content Generation Report', file: 'content-generation-report.md' },
  'github-actions-improvements': { title: 'GitHub Actions Improvements', file: 'GITHUB_ACTIONS_IMPROVEMENTS.md' },
  'performance-weekly-report': { title: 'Performance Weekly Report', file: 'performance-weekly-report.md' }
};

export default function DocsPage({ title, content }: DocsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>{title} — Zion Tech Group Docs</title>
        <meta name="description" content={`${title} — documentation`} />
      </Head>
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
        </div>
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">{title}</h1>
        <article className="max-w-4xl prose prose-invert prose-headings:text-white prose-a:text-cyan-300">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(SLUG_TO_DOC_PATH).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params?: { slug?: string } }) {
  const slug = context.params?.slug ?? '';
  const entry = SLUG_TO_DOC_PATH[slug];
  if (!entry) {
    return { notFound: true };
  }
  const filePath = path.join(process.cwd(), entry.file);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  return {
    props: {
      title: entry.title,
      content
    }
  };
}
