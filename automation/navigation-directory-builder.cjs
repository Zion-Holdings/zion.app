#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverPages(root) {
  const pagesDir = path.join(root, 'pages');
  const results = [];
  const skipFiles = new Set(['_app.tsx', '_document.tsx', 'index.tsx']);
  const skipDirs = new Set(['api', 'main']);
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.tsx') && !skipFiles.has(e.name)) {
      const base = e.name.replace(/\.tsx$/, '');
      results.push({ href: `/${base}`, label: titleCase(base) });
    }
    if (e.isDirectory() && !skipDirs.has(e.name)) {
      const idx = path.join(pagesDir, e.name, 'index.tsx');
      if (fs.existsSync(idx)) {
        results.push({ href: `/${e.name}`, label: titleCase(e.name) });
      }
    }
  }
  // Sort and unique by href
  const seen = new Set();
  return results
    .filter((r) => !seen.has(r.href) && seen.add(r.href))
    .sort((a, b) => a.label.localeCompare(b.label));
}

function buildPage(items) {
  return `import Head from 'next/head';
import Link from 'next/link';

export default function Directory() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Directory — Zion</title>
        <meta name="description" content="Auto-generated directory of internal pages." />
      </Head>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">Directory</h1>
        <p className="mt-2 text-white/70">Auto-generated links to internal pages.</p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
${items
  .map(
    (it) =>
      `          <Link href="${it.href}"><a className=\"rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30\"><div className=\"text-white/90\">${it.label}</div><div className=\"mt-1 text-xs text-white/70\">${it.href}</div></a></Link>`
  )
  .join('\n')}
        </div>
      </main>
    </div>
  );
}
`;
}

(function main() {
  const root = process.cwd();
  const items = discoverPages(root);
  const outPath = path.join(root, 'pages', 'directory.tsx');
  const content = buildPage(items);
  const original = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
  if (original !== content) {
    fs.writeFileSync(outPath, content, 'utf8');
    console.log('[directory-builder] pages/directory.tsx updated');
  } else {
    console.log('[directory-builder] No changes needed');
  }
})();