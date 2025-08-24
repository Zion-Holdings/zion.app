#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIRS = ['pages', 'components'];
const OUTPUT_DIR = path.join(ROOT, 'reports');
const CSV_PATH = path.join(OUTPUT_DIR, 'missing_image_dimensions.csv');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listCodeFiles(dir) {
  const out = [];
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.name.startsWith('.')) continue;
      const abs = path.join(current, ent.name);
      const rel = path.relative(ROOT, abs);
      if (rel.includes(`${path.sep}.next${path.sep}`)) continue;
      if (rel.includes(`${path.sep}node_modules${path.sep}`)) continue;
      if (rel.includes(`${path.sep}out${path.sep}`)) continue;
      if (ent.isDirectory()) {
        walk(abs);
      } else if (/\.(jsx?|tsx?)$/i.test(ent.name)) {
        out.push(abs);
      }
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return out;
}

function scanFile(absPath) {
  const text = fs.readFileSync(absPath, 'utf8');
  const issues = [];

  // <img ...>
  const imgRe = /<img\b[^>]*>/gim;
  let m;
  while ((m = imgRe.exec(text)) !== null) {
    const tag = m[0];
    const hasWidth = /\bwidth\s*=/.test(tag);
    const hasHeight = /\bheight\s*=/.test(tag);
    if (!(hasWidth && hasHeight)) {
      issues.push({ kind: 'img', snippet: tag.slice(0, 120).replace(/\s+/g, ' ') });
    }
  }

  // <Image ...>
  const imageRe = /<Image\b[^>]*>/g;
  while ((m = imageRe.exec(text)) !== null) {
    const tag = m[0];
    const hasWidth = /\bwidth\s*=/.test(tag);
    const hasHeight = /\bheight\s*=/.test(tag);
    const hasFill = /\bfill\b/.test(tag);
    if (!(hasFill || (hasWidth && hasHeight))) {
      issues.push({ kind: 'next-image', snippet: tag.slice(0, 120).replace(/\s+/g, ' ') });
    }
  }

  return issues;
}

(function main() {
  ensureDir(OUTPUT_DIR);
  const rows = [['file','kind','snippet']];
  let totalIssues = 0;

  for (const dir of TARGET_DIRS) {
    const absDir = path.join(ROOT, dir);
    if (!fs.existsSync(absDir)) continue;
    const files = listCodeFiles(absDir);
    for (const abs of files) {
      const issues = scanFile(abs);
      for (const issue of issues) {
        totalIssues++;
        rows.push([path.relative(ROOT, abs), issue.kind, '"' + issue.snippet.replace(/"/g, "'") + '"'].join(','));
      }
    }
  }

  fs.writeFileSync(CSV_PATH, rows.join('\n'));
  console.log(`Image dimension audit complete. Issues: ${totalIssues}`);
  console.log(`CSV report: ${path.relative(ROOT, CSV_PATH)}`);
})();