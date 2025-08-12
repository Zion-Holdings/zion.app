#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const REPORTS_DIR = path.join(ROOT, 'public', 'reports');
const OUT_DIR = path.join(ROOT, 'public', 'automation');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(OUT_DIR);

function listFiles(dir, exts) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, exts));
    else if (exts.some((e) => entry.name.toLowerCase().endsWith(e))) out.push(full);
  }
  return out;
}

(function main() {
  const docs = listFiles(DOCS_DIR, ['.md', '.mdx']).map((f) => path.relative(ROOT, f).replace(/\\/g, '/'));
  const reports = listFiles(REPORTS_DIR, ['.json', '.html']).map((f) => path.relative(ROOT, f).replace(/\\/g, '/'));
  const pack = {
    generatedAt: new Date().toISOString(),
    docs,
    reports,
    links: [
      { title: 'Automation Hub', href: '/automation' },
      { title: 'Site Health', href: '/site-health' },
      { title: 'SEO Audit Report', href: '/reports/seo' },
      { title: 'AI Trends', href: '/reports/ai-trends' }
    ]
  };
  const out = path.join(OUT_DIR, 'knowledge-pack.json');
  fs.writeFileSync(out, JSON.stringify(pack, null, 2));
  console.log(`Knowledge pack written to ${out}`);
})();