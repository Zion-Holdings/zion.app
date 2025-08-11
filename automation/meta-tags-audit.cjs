#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public', 'reports');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'meta-tags-audit.json');

const REQUIRED_META = [
  { key: 'property', value: 'og:title' },
  { key: 'property', value: 'og:description' },
  { key: 'name', value: 'twitter:card' },
];

function listFilesRecursive(dir, filterExts = ['.tsx', '.jsx']) {
  const results = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFilesRecursive(full, filterExts));
    else if (filterExts.includes(path.extname(entry.name))) results.push(full);
  }
  return results;
}

function toRouteFromFile(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  if (rel === 'index.tsx' || rel === 'index.jsx') return '/';
  const noExt = rel.replace(/\.(tsx|jsx)$/i, '');
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/, '');
  return '/' + noExt;
}

function auditMeta(source) {
  const present = new Set();
  // Heuristic: look for <Head>...</Head> and scan meta tags inside
  // But for simplicity, scan the entire file text.
  for (const req of REQUIRED_META) {
    const pattern = req.key === 'property'
      ? new RegExp(`<meta\\s+[^>]*property=([\"\'])${req.value}\\1`, 'i')
      : new RegExp(`<meta\\s+[^>]*name=([\"\'])${req.value}\\1`, 'i');
    if (pattern.test(source)) present.add(`${req.key}:${req.value}`);
  }
  return REQUIRED_META.map((r) => ({ key: r.key, value: r.value, present: present.has(`${r.key}:${r.value}`) }));
}

(function main() {
  const files = listFilesRecursive(PAGES_DIR);
  const audits = [];
  for (const file of files) {
    if (path.basename(file).startsWith('_')) continue;
    const src = fs.readFileSync(file, 'utf8');
    const result = auditMeta(src);
    const missing = result.filter((r) => !r.present).map((r) => `${r.key}:${r.value}`);
    audits.push({ route: toRouteFromFile(file), file: path.relative(ROOT, file), missing });
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    totalPages: audits.length,
    pagesMissingAny: audits.filter((a) => a.missing.length > 0).length,
    audits,
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(summary, null, 2));
  console.log(`Meta tags audit generated: ${path.relative(ROOT, OUTPUT_FILE)} (pages=${summary.totalPages}, missingAny=${summary.pagesMissingAny})`);
})();