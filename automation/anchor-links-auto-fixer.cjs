#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'anchor-links');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function listMarkdown(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMarkdown(full));
    else if (/\.(md|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

(function main() {
  const files = listMarkdown(DOCS_DIR);
  const changes = [];
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const lines = original.split(/\r?\n/);
    let modified = false;
    for (let i = 0; i < lines.length; i++) {
      const m = /^(#{1,6})\s+(.+?)(\s*\{#.+\})?$/.exec(lines[i]);
      if (!m) continue;
      const hashes = m[1];
      const title = m[2].replace(/\{#.*\}$/,'').trim();
      const hasId = /\{#.+\}\s*$/.test(lines[i]);
      if (!hasId) {
        const id = slugify(title);
        lines[i] = `${hashes} ${title} {#${id}}`;
        modified = true;
      }
    }
    if (modified) {
      fs.writeFileSync(file, lines.join('\n'));
      changes.push({ file: path.relative(ROOT, file) });
    }
  }
  const report = { generatedAt: new Date().toISOString(), totalFiles: files.length, changed: changes.length, changes };
  fs.writeFileSync(path.join(REPORT_DIR, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`Anchor Links Auto-Fixer updated ${changes.length} files.`);
})();