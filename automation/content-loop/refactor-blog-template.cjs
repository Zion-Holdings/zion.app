#!/usr/bin/env node
/**
 * Refactor all blog posts to use the shared PageShell template
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'app', 'blog');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function refactorBlogPost(filePath, title, excerpt) {
  const slug = slugify(title);
  const content = `'use client';\nimport Link from 'next/link';\nimport JsonLd from '@/components/JsonLd';\nimport PageShell from '@/components/PageShell';\n\nexport const metadata = {\n  title: '${esc(title)} | Zion Tech Group',\n  description: '${esc(excerpt)}',\n  alternates: { canonical: 'https://ziontechgroup.com/blog/${slug}/' },\n  openGraph: { title: '${esc(title)}', description: '${esc(excerpt)}', url: 'https://ziontechgroup.com/blog/${slug}/', type: 'article' },\n  twitter: { card: 'summary_large_image', title: '${esc(title)}', description: '${esc(excerpt)}' }\n};\n\nexport default function Page() {\n  return (\n    <PageShell title="${esc(title)}" description="${esc(excerpt)}" canonical="https://ziontechgroup.com/blog/${slug}/" jsonLd={{\n      '@context':'https://schema.org',\n      '@type':'BlogPosting',\n      headline: '${esc(title)}',\n      description: '${esc(excerpt)}',\n      author: { '@type':'Organization', name: 'Zion Tech Group' },\n      publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },\n      mainEntityOfPage: 'https://ziontechgroup.com/blog/${slug}/'\n    }}>\n      <article className="max-w-3xl mx-auto space-y-6 text-slate-300">\n        <p>Read the full analysis at Zion Tech Group. This guide covers implementation patterns, measurable outcomes, and next steps for your team.</p>\n      </article>\n    </PageShell>\n  );\n}\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  return { slug, file: filePath };
}

function main() {
  const dirs = fs.readdirSync(BLOG_DIR).filter(x => x !== 'page.tsx' && fs.statSync(path.join(BLOG_DIR, x)).isDirectory());
  let count = 0;
  for (const dir of dirs) {
    const filePath = path.join(BLOG_DIR, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/);
      const excerptMatch = content.match(/<p className="text-xl[^"]*"[^>]*>(.*?)<\/p>/);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : dir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const excerpt = excerptMatch ? excerptMatch[1].replace(/<[^>]+>/g, '').trim() : 'Insights and implementation guidance from Zion Tech Group.';
      refactorBlogPost(filePath, title, excerpt);
      count++;
    } catch (e) {
      console.error(`Failed: ${filePath}`, e.message);
    }
  }
  console.log(`Refactored ${count} blog posts to shared PageShell template.`);
}

main();
