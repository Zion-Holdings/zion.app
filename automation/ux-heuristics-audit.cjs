#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function extractBetween(str, startTag, endTag) {
  const start = str.indexOf(startTag);
  const end = str.indexOf(endTag, start + startTag.length);
  if (start === -1 || end === -1) return null;
  return str.slice(start + startTag.length, end).trim();
}

function hasMetaDescription(tsx) {
  return /<meta[^>]+name=["']description["'][^>]*>/i.test(tsx);
}

function countH1(tsx) {
  const matches = tsx.match(/<h1\b[^>]*>/gi);
  return matches ? matches.length : 0;
}

function scoreHeuristics(info) {
  let score = 100;
  if (!info.title || info.title.length < 3) score -= 20;
  if (!info.hasDescription) score -= 25;
  if (info.h1Count === 0) score -= 25;
  if (info.h1Count > 1) score -= 10;
  if (info.title && info.title.length > 72) score -= 5;
  return Math.max(0, Math.min(100, score));
}

async function main() {
  const root = process.cwd();
  const files = await glob(['pages/**/*.{tsx,jsx,ts,js}'], {
    cwd: root,
    nodir: true,
    ignore: ['**/_app.*', '**/_document.*', '**/_error.*', '**/api/**']
  });

  const results = [];
  for (const rel of files) {
    const abs = path.join(root, rel);
    const tsx = readFileSafe(abs);
    if (!tsx) continue;

    // Title from <Head><title>...</title></Head>
    const title = extractBetween(tsx, '<title>', '</title>');
    const hasDescription = hasMetaDescription(tsx);
    const h1Count = countH1(tsx);

    const route = '/' + rel.replace(/^pages\//, '').replace(/index\.(tsx|jsx|ts|js)$/i, '').replace(/\.(tsx|jsx|ts|js)$/i, '').replace(/\/+/g, '/');
    const normalizedRoute = route === '//' || route === '/' ? '/' : route.replace(/\/$/, '');

    const info = {
      file: rel,
      route: normalizedRoute || '/',
      title: title || '',
      titleLength: (title || '').length,
      hasDescription,
      h1Count,
    };
    info.score = scoreHeuristics(info);
    results.push(info);
  }

  results.sort((a, b) => a.score - b.score);

  const summary = {
    generatedAt: new Date().toISOString(),
    totals: {
      pages: results.length,
      perfect: results.filter(r => r.score === 100).length,
      needsMeta: results.filter(r => !r.hasDescription).length,
      needsTitle: results.filter(r => !r.title).length,
      multipleH1: results.filter(r => r.h1Count > 1).length,
      missingH1: results.filter(r => r.h1Count === 0).length,
    },
    lowest: results.slice(0, 10),
  };

  const outDir = path.join(root, 'public', 'reports', 'ux');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify({ summary, results }, null, 2), 'utf8');

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>UX Heuristics Audit</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;padding:24px;background:#0b1020;color:#e6e9ef} h1{margin:0 0 8px;font-size:22px} .muted{opacity:.7} table{width:100%;border-collapse:collapse;margin-top:16px} td,th{border-bottom:1px solid #2a2f4a;padding:8px 6px;text-align:left} .score{font-weight:600} .bad{color:#ff6b6b} .ok{color:#ffd166} .good{color:#7bd88f}</style>
</head>
<body>
<h1>UX Heuristics Audit <span class="muted">(auto)</span></h1>
<p class="muted">Generated at ${summary.generatedAt}. Checks for title, meta description, single H1.</p>
<table>
<thead><tr><th>Route</th><th>Score</th><th>Title</th><th>Meta</th><th>H1s</th></tr></thead>
<tbody>
${results.map(r => `<tr><td>${r.route}</td><td class="score ${r.score<70?'bad':r.score<90?'ok':'good'}">${r.score}</td><td>${(r.title||'').replace(/</g,'&lt;')}</td><td>${r.hasDescription?'yes':'no'}</td><td>${r.h1Count}</td></tr>`).join('\n')}
</tbody>
</table>
</body>
</html>`;
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

  console.log(`UX audit complete for ${results.length} pages.`);
}

main().catch(err => { console.error(err); process.exit(1); });