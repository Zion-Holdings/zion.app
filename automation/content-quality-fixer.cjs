#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');

function ensureDir(dir) { try { fs.mkdirSync(dir, { recursive: true }); } catch {} }

function listRecentUpdateFiles(limit = 50) {
  if (!fs.existsSync(UPDATES_DIR)) return [];
  return fs.readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => ({ name: f, full: path.join(UPDATES_DIR, f), mtime: fs.statSync(path.join(UPDATES_DIR, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, limit);
}

function deriveCanonicalFromFilename(filename) {
  const basename = filename.replace(/\.tsx$/, '');
  return `https://ziontechgroup.com/reports/updates/${basename}`;
}

function has(content, needle) { return content.includes(needle); }

function upsertInHead(tsx, insertLines) {
  const headOpenIdx = tsx.indexOf('<Head>');
  const headCloseIdx = tsx.indexOf('</Head>');
  if (headOpenIdx === -1 || headCloseIdx === -1 || headCloseIdx < headOpenIdx) return tsx;
  const before = tsx.slice(0, headCloseIdx);
  const after = tsx.slice(headCloseIdx);
  const insertion = '\n' + insertLines.join('\n') + '\n';
  return before + insertion + after;
}

function buildJsonLd(canonical, title, description) {
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title || 'Autonomous Update',
    description: description || 'Autonomously generated update with curated highlights.',
    author: { '@type': 'Organization', name: 'Zion Tech Group' },
    mainEntityOfPage: canonical,
    url: canonical,
  };
  return `<script type="application/ld+json">{JSON.stringify(${JSON.stringify(obj)})}</script>`;
}

function extractBetween(tsx, startTag, endTag) {
  const s = tsx.indexOf(startTag);
  const e = tsx.indexOf(endTag);
  if (s === -1 || e === -1 || e <= s) return '';
  return tsx.slice(s + startTag.length, e);
}

function fixFile(filePath, filename) {
  let tsx = fs.readFileSync(filePath, 'utf8');
  if (!tsx.includes('<Head>')) return false;

  const canonical = deriveCanonicalFromFilename(filename);
  const title = (extractBetween(tsx, '<title>', '</title>') || '').trim();
  const description = (extractBetween(tsx, '<meta name="description" content="', '" />') || '').trim();

  const insertLines = [];
  if (!has(tsx, 'rel="canonical"') && !has(tsx, 'rel=\"canonical\"')) {
    insertLines.push(`        <link rel="canonical" href="${canonical}" />`);
  }
  if (!has(tsx, 'meta name="keywords"')) {
    insertLines.push('        <meta name="keywords" content="AI, automation, autonomous systems, product updates, engineering, Trends" />');
  }
  if (!has(tsx, 'property="og:image"')) {
    insertLines.push('        <meta property="og:image" content="https://ziontechgroup.com/og/zion-tech-group.svg" />');
  }
  if (!has(tsx, 'name="twitter:image"')) {
    insertLines.push('        <meta name="twitter:image" content="https://ziontechgroup.com/og/zion-tech-group.svg" />');
  }
  if (!has(tsx, 'application/ld+json')) {
    insertLines.push('        ' + buildJsonLd(canonical, title, description));
  }

  if (insertLines.length === 0) return false;
  const updated = upsertInHead(tsx, insertLines);
  fs.writeFileSync(filePath, updated);
  return true;
}

function main() {
  const files = listRecentUpdateFiles(50);
  let changed = 0;
  for (const f of files) {
    try {
      if (fixFile(f.full, f.name)) {
        changed += 1;
        process.stdout.write(`[content-quality-fixer] updated ${f.name}\n`);
      }
    } catch (e) {
      process.stderr.write(`[content-quality-fixer] failed ${f.name}: ${e.message}\n`);
    }
  }
  process.stdout.write(`[content-quality-fixer] completed. Files updated: ${changed}\n`);
}

main();


