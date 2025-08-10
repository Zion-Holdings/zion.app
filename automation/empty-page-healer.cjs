#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFiles(dir, exts) {
  const out = [];
  (function walk(d) {
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p);
      else if (exts.includes(path.extname(name))) out.push(p);
    }
  })(dir);
  return out;
}

function ensureContentForPage(filePath) {
  const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (content.trim().length > 30) return false; // has content
  const rel = filePath.split('pages')[1] || filePath;
  const title = rel.replace(/\\.tsx$/, '').replace(/\\//g, ' ').trim() || 'Page';
  const component = `import React from 'react';\nexport default function Page() {\n  return (\n    <main className=\"min-h-screen bg-black text-zinc-100 p-8\">\n      <section className=\"prose prose-invert max-w-3xl mx-auto\">\n        <h1>${title}</h1>\n        <p>Auto-healed placeholder. Replace with real content.</p>\n      </section>\n    </main>\n  );\n}\n`;
  fs.writeFileSync(filePath, component, 'utf8');
  return true;
}

function ensureAppShim(appPath) {
  const exists = fs.existsSync(appPath);
  const src = exists ? fs.readFileSync(appPath, 'utf8') : '';
  if (/export\s+default\s+function|export\s+default\s*\(/.test(src)) return false;
  const shim = `import type { AppProps } from 'next/app';\nimport '../styles/globals.css';\nexport default function App({ Component, pageProps }: AppProps) {\n  return <Component {...pageProps} />;\n}\n`;
  fs.writeFileSync(appPath, shim, 'utf8');
  return true;
}

function main() {
  const pagesDir = path.join(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) return;
  let changed = false;

  // Heal _app.tsx if needed
  changed = ensureAppShim(path.join(pagesDir, '_app.tsx')) || changed;

  // Heal empty .tsx pages
  const files = listFiles(pagesDir, ['.tsx']);
  for (const f of files) {
    if (/(_app|_document)\.tsx$/.test(f)) continue;
    changed = ensureContentForPage(f) || changed;
  }

  if (changed) console.log('Empty page healer applied changes.');
  else console.log('Empty page healer: no changes needed.');
}

main();