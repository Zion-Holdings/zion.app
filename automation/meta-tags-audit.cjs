#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUT_DIR = path.join(ROOT, 'public', 'automation');
const OUT_PATH = path.join(OUT_DIR, 'meta-tags-audit.json');

function listFilesRecursive(dir, exts = new Set(['.tsx', '.jsx'])) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith('api')) continue;
      results.push(...listFilesRecursive(full, exts));
      continue;
    }
    const ext = path.extname(e.name);
    if (!exts.has(ext)) continue;
    results.push(full);
  }
  return results;
}

function routeFromFile(filePath) {
  // Convert pages/*.tsx into route paths; handle index files
  const rel = path.relative(PAGES_DIR, filePath);
  const noExt = rel.replace(/\.(tsx|jsx)$/i, '');
  if (noExt === 'index') return '/';
  const parts = noExt.split(path.sep);
  // Skip special Next files
  if (parts[0].startsWith('_')) return null;
  if (parts[0] === 'api') return null;
  // Remove trailing index
  if (parts[parts.length - 1] === 'index') parts.pop();
  const route = '/' + parts.join('/')
    .replace(/\[.*?\]/g, ':param')
    .replace(/\\/g, '/');
  return route || '/';
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hasHeadImport = /import\s+Head\s+from\s+'next\/head'\s*;?/.test(content);
  const hasHeadTag = /<Head[\s>]/.test(content);
  const hasTitle = /<title>[\s\S]*?<\/title>/.test(content);
  const hasDescription = /<meta\s+name=["']description["']/.test(content);
  const hasOgTitle = /og:title/.test(content);
  const hasOgDesc = /og:description/.test(content);
  const hasOgImage = /og:image/.test(content);
  const suggestions = [];
  if (!hasHeadImport) suggestions.push('Import Head from next/head');
  if (!hasHeadTag) suggestions.push('Add <Head> section');
  if (!hasTitle) suggestions.push('Add <title>');
  if (!hasDescription) suggestions.push('Add <meta name="description" ...>');
  if (!hasOgTitle) suggestions.push('Add <meta property="og:title" ...>');
  if (!hasOgDesc) suggestions.push('Add <meta property="og:description" ...>');
  if (!hasOgImage) suggestions.push('Add <meta property="og:image" ...>');
  return { hasHeadImport, hasHeadTag, hasTitle, hasDescription, hasOgTitle, hasOgDesc, hasOgImage, suggestions };
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = listFilesRecursive(PAGES_DIR);
  const report = {
    generatedAt: new Date().toISOString(),
    summary: { total: 0, ok: 0, needsAttention: 0 },
    items: [],
  };
  for (const f of files) {
    const route = routeFromFile(f);
    if (!route) continue;
    const analysis = analyzeFile(f);
    const ok = analysis.hasHeadImport && analysis.hasHeadTag && analysis.hasTitle && analysis.hasDescription;
    report.items.push({ file: path.relative(ROOT, f), route, ...analysis, ok });
    report.summary.total += 1;
    if (ok) report.summary.ok += 1; else report.summary.needsAttention += 1;
  }
  fs.writeFileSync(OUT_PATH, JSON.stringify(report, null, 2));
  console.log('Wrote', path.relative(ROOT, OUT_PATH));
}

try { main(); } catch (e) { console.error(e); process.exitCode = 1; }