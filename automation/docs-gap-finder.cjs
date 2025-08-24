#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SCAN_DIRS = ['pages', 'components', 'automation', 'scripts'];
const OUTPUT_MD = path.join(ROOT, 'docs', 'docs-gaps.md');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (!/\.(png|jpe?g|gif|webp|svg|ico|mp4|mp3|woff2?)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  const hits = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/(TODO|FIXME|TBD)\b/.test(line)) {
      hits.push({ line: i + 1, content: line.trim().slice(0, 200) });
    }
  }
  return hits;
}

function main() {
  const files = [];
  for (const d of SCAN_DIRS) {
    const abs = path.join(ROOT, d);
    if (fs.existsSync(abs)) files.push(...walk(abs));
  }

  const results = [];
  for (const f of files) {
    const rel = path.relative(ROOT, f);
    const hits = scanFile(f);
    if (hits.length) results.push({ file: rel, hits });
  }

  const lines = [];
  lines.push('# Docs Gaps Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  if (results.length === 0) {
    lines.push('No TODO/FIXME/TBD markers found.');
  } else {
    for (const r of results) {
      lines.push(`## ${r.file}`);
      for (const h of r.hits) {
        lines.push(`- line ${h.line}: ${'`' + h.content.replace(/`/g, '\\`') + '`'}`);
      }
      lines.push('');
    }
  }

  ensureDir(OUTPUT_MD);
  fs.writeFileSync(OUTPUT_MD, lines.join('\n'));
  console.log(`Docs gaps written to: ${path.relative(ROOT, OUTPUT_MD)}`);
}

main();