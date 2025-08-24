#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'automation');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'alt-text.json');

function ensureDirExists(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch {}
}

function walkFiles(startDir, exts) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (exts.includes(ext)) results.push(full);
      }
    }
  }
  walk(startDir);
  return results;
}

function humanizeFilename(name) {
  // Remove extension and split on delimiters
  const base = name.replace(/\.[^.]+$/, '');
  const spaced = base
    .replace(/[._-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  if (!spaced) return '';
  // Capitalize first letter
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function suggestAltForPath(absPath) {
  const rel = path.relative(PUBLIC_DIR, absPath).replace(/\\/g, '/');
  const parts = rel.split('/');
  const file = parts[parts.length - 1];
  const folderHint = parts.length > 1 ? parts.slice(0, -1).slice(-1)[0] : '';
  const fileHint = humanizeFilename(file);
  const folderText = humanizeFilename(folderHint);
  const candidates = [fileHint, folderText]
    .filter(Boolean)
    .map((s) => s.trim())
    .filter((s, i, arr) => s && arr.indexOf(s) === i);
  const alt = candidates.length > 0 ? candidates.join(' — ') : 'Decorative image';
  return { rel, alt };
}

(function main() {
  ensureDirExists(OUTPUT_DIR);
  const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];
  const files = walkFiles(PUBLIC_DIR, exts);
  const entries = files.map((f) => suggestAltForPath(f));
  const summary = {
    generatedAt: new Date().toISOString(),
    total: entries.length,
    items: entries,
  };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`Wrote ${entries.length} alt text suggestions to ${path.relative(ROOT, OUTPUT_FILE)}`);
})();