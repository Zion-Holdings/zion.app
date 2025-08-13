#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');
const REPORTS_DIR = path.join(ROOT, 'public', 'reports', 'content-quality');

function ensureDir(dir) { try { fs.mkdirSync(dir, { recursive: true }); } catch {} }

function listUpdateFiles(limit = 50) {
  if (!fs.existsSync(UPDATES_DIR)) return [];
  return fs.readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ name: f, full: path.join(UPDATES_DIR, f), mtime: fs.statSync(path.join(UPDATES_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit);
}

function readFileSafe(fp) { try { return fs.readFileSync(fp, 'utf8'); } catch { return ''; } }

function analyzeDiversity(contents) {
  const templatePhrases = [
    'Autonomously generated update',
    'autonomous publishing',
    'Learn more at',
    'Latest Autonomous Content',
    'Today\'s Highlight',
  ];
  let duplicateCount = 0;
  const lengths = [];
  const seoOk = [];
  for (const content of contents) {
    lengths.push(content.length);
    const found = templatePhrases.filter((p) => content.includes(p));
    if (found.length >= 3) duplicateCount += 1;
    const hasDesc = content.includes('meta name="description"') || content.includes("meta name=\"description\"");
    const hasKeywords = content.includes('meta name="keywords"') || content.includes("meta name=\"keywords\"");
    const hasCanonical = content.includes('rel="canonical"') || content.includes('rel=\"canonical\"');
    const hasLink = content.includes('href="https://ziontechgroup.com"') || content.includes('href="https://www.ziontechgroup.com"') || content.includes('ziontechgroup.com');
    const hasJsonLd = content.includes('application/ld+json') || content.includes('type="application/ld+json"');
    seoOk.push(hasDesc && hasKeywords && hasLink && hasCanonical && hasJsonLd);
  }
  const avgLen = lengths.length ? Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length) : 0;
  const diversityScore = Math.max(0, 100 - Math.round((duplicateCount / Math.max(1, contents.length)) * 100));
  const seoScore = Math.round((seoOk.filter(Boolean).length / Math.max(1, seoOk.length)) * 100);
  return { diversityScore, avgLen, duplicateCount, seoScore };
}

function main() {
  ensureDir(REPORTS_DIR);
  const files = listUpdateFiles(100);
  const contents = files.map((f) => readFileSafe(f.full));
  const summary = analyzeDiversity(contents);
  const report = {
    generatedAt: new Date().toISOString(),
    files: files.map((f) => f.name),
    metrics: summary,
    guidance: [
      'Aim for varied intros, highlights, and CTAs across updates.',
      'Keep meta description and keywords present for each page.',
      'Include at least one external source highlight when available.',
      'Target 300–1000 characters per update for skim-ability.',
    ],
  };
  const out = path.join(REPORTS_DIR, `report-${Date.now()}.json`);
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORTS_DIR, 'latest.json'), JSON.stringify(report, null, 2));
  process.stdout.write(`[content-quality] Wrote report: ${path.relative(ROOT, out)}\n`);
}

main();


