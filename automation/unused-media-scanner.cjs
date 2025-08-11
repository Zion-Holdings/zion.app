#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const SEARCH_DIRS = [
  path.join(ROOT, 'pages'),
  path.join(ROOT, 'components'),
  path.join(ROOT, 'styles'),
  path.join(ROOT, 'data'),
  path.join(ROOT, 'netlify'),
];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'unused-media');
const PUBLIC_REPORT_DIR = path.join(ROOT, 'public', 'reports');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif']);

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listFilesRecursive(dir) {
  const results = [];
  (function walk(current) {
    let entries;
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        results.push(full);
      }
    }
  })(dir);
  return results;
}

function isMedia(file) {
  return IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase());
}

function readFileSafe(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function buildSearchCorpus() {
  const texts = [];
  for (const dir of SEARCH_DIRS) {
    const files = listFilesRecursive(dir).filter((f) => /\.(tsx?|jsx?|mdx?|md|css|scss|json)$/i.test(f));
    for (const f of files) {
      const content = readFileSafe(f);
      if (content) texts.push(content);
    }
  }
  return texts.join('\n');
}

function main() {
  const start = Date.now();
  const mediaFiles = listFilesRecursive(PUBLIC_DIR).filter(isMedia);
  const corpus = buildSearchCorpus();

  const results = [];
  for (const mediaPath of mediaFiles) {
    const relFromPublic = path.relative(PUBLIC_DIR, mediaPath).replace(/\\/g, '/');
    const fileName = path.basename(mediaPath);
    const absWebPath = '/' + relFromPublic; // how Next.js typically serves from public

    const patterns = [
      absWebPath,
      '/' + fileName,
      fileName,
    ];

    let used = false;
    let matchedBy = '';
    for (const p of patterns) {
      const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      if (re.test(corpus)) { used = true; matchedBy = p; break; }
    }

    results.push({
      path: absWebPath,
      fileName,
      sizeBytes: fs.statSync(mediaPath).size,
      used,
      matchedBy,
    });
  }

  const unused = results.filter(r => !r.used).sort((a,b) => b.sizeBytes - a.sizeBytes);
  const used = results.filter(r => r.used);

  const report = {
    generatedAt: new Date().toISOString(),
    durationMs: Date.now() - start,
    totalMedia: results.length,
    usedCount: used.length,
    unusedCount: unused.length,
    topUnusedBySize: unused.slice(0, 50),
  };

  ensureDir(REPORT_DIR);
  ensureDir(PUBLIC_REPORT_DIR);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(REPORT_DIR, `report-${timestamp}.json`), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(PUBLIC_REPORT_DIR, 'unused-media.json'), JSON.stringify(report, null, 2));

  console.log(`Unused media scan complete: ${report.unusedCount}/${report.totalMedia} unused`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}