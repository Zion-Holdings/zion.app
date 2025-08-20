import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type DocProps = {
  title: string;
  html: string;
};

const slugToFile: Record<string, string> = {
  'ultimate-redundancy': 'README_ULTIMATE_REDUNDANCY.md',
  'comprehensive-redundancy': 'README_COMPREHENSIVE_REDUNDANCY.md',
  'pm2-redundancy-complete': 'README_PM2_REDUNDANCY_COMPLETE.md',
  'performance': 'PERFORMANCE.md',
  'security': '',
  'testing': ''
};

export async function getStaticPaths() {
  const paths = Object.keys(slugToFile).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

function markdownToHtml(markdown: string): string {
  // Minimal markdown handling to keep dependencies light
  let html = markdown
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  // headings
  html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  // bold & italics
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // code blocks
  html = html.replace(/```[\s\S]*?```/g, (block) => {
    const code = block.replace(/```/g, '');
    return `<pre><code>${code.trim()}</code></pre>`;
  });
  // inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400">$1</a>');
  // paragraphs
  html = html.replace(/^(?!<h\d|<pre|<ul|<li|<p|<blockquote)(.+)$/gm, '<p>$1</p>');
  return html;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fileName = slugToFile[slug] || '';

  let title = 'Documentation';
  let html = '';

  if (fileName) {
    const filePath = path.join(process.cwd(), fileName);
    if (fs.existsSync(filePath)) {
      const md = fs.readFileSync(filePath, 'utf8');
      title = md.split('\n')[0]?.replace(/^#\s*/, '') || title;
      html = markdownToHtml(md);
    }
  }

  if (!html) {
    if (slug === 'security') {
      title = 'Security & Compliance';
      html = markdownToHtml(`# Security & Compliance\n\n- Automated security scanning\n- Vulnerability assessments\n- Compliance monitoring\n- Threat detection & response\n- Zero-trust architecture`);
    } else if (slug === 'testing') {
      title = 'Testing & Quality Assurance';
      html = markdownToHtml(`# Testing & Quality\n\n- Automated testing suites\n- Performance & security testing\n- Continuous validation\n- Quality gates in CI/CD`);
    } else {
      title = 'Documentation';
      html = markdownToHtml(`# Documentation\n\nContent coming soon.`);
    }
  }

  return { props: { title, html } };
}

export default function DocPage({ title, html }: DocProps) {
  return (
    <>
      <Head>
        <title>{title} — Zion Tech Group</title>
        <meta name="description" content={`${title} documentation`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400">← Back to Home</Link>
          </div>
          <article className="prose prose-invert max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
        </main>
      </div>
    </>
  );
}

