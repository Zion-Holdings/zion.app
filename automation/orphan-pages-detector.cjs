#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'orphan-pages');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFilesRecursive(dir) {
  const results = [];
  (function walk(current) {
    let entries;
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full); else results.push(full);
    }
  })(dir);
  return results;
}

function toRoute(file) {
  const rel = path.relative(PAGES_DIR, file).replace(/\\/g, '/');
  if (rel.startsWith('api/')) return null;
  if (rel.startsWith('_')) return null;
  if (!/\.(tsx|jsx|ts|js)$/.test(rel)) return null;
  const noExt = rel.replace(/\.(tsx|jsx|ts|js)$/,'');
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/,'');
  if (noExt === 'index') return '/';
  return '/' + noExt;
}

function buildCorpus() {
  const searchDirs = [path.join(ROOT, 'pages'), path.join(ROOT, 'components'), path.join(ROOT, 'data'), path.join(ROOT, 'netlify')];
  let corpus = '';
  for (const dir of searchDirs) {
    const files = listFilesRecursive(dir).filter(f => /\.(tsx?|jsx?|mdx?|md|css|scss|json)$/i.test(f));
    for (const f of files) {
      try { corpus += fs.readFileSync(f, 'utf8') + '\n'; } catch {}
    }
  }
  return corpus;
}

function main() {
  const start = Date.now();
  const pages = listFilesRecursive(PAGES_DIR).map(toRoute).filter(Boolean);
  const corpus = buildCorpus();

  const orphans = [];
  for (const route of pages) {
    if (route === '/') continue;
    // consider referenced if any mention of the route exists outside its own file path
    const re = new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![a-zA-Z0-9_\-])', 'g');
    const count = (corpus.match(re) || []).length;
    if (count <= 1) { // likely only defined in its own file
      orphans.push({ route, references: count });
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    durationMs: Date.now() - start,
    totalPages: pages.length,
    orphanCount: orphans.length,
    orphans: orphans.sort((a,b) => a.route.localeCompare(b.route)).slice(0, 200),
  };

  ensureDir(REPORT_DIR);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(REPORT_DIR, `report-${timestamp}.json`), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));

  console.log(`Orphan pages detected: ${report.orphanCount}/${report.totalPages}`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}