#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUTPUT_JSON = path.join(ROOT, 'data', 'alt-text-suggestions.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'alt-text-suggestions.md');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function walkImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkImages(p));
    else if (/\.(png|jpe?g|gif|webp|svg|ico)$/i.test(entry.name)) results.push(p);
  }
  return results;
}

function toTitleCase(str) {
  return str.replace(/\b\w+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}

function suggestFromFilename(name) {
  const base = name.replace(/\.[^.]+$/, '');
  const cleaned = base
    .replace(/[_-]+/g, ' ')
    .replace(/\b(\d{2,}x\d{2,}|\d{3,})\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const titled = toTitleCase(cleaned || base);
  return titled.length ? titled : 'Illustration';
}

function main() {
  const files = walkImages(PUBLIC_DIR);
  const suggestions = files.map((abs) => {
    const rel = path.relative(ROOT, abs);
    return { path: rel, suggestedAlt: suggestFromFilename(path.basename(abs)) };
  });

  ensureDir(OUTPUT_JSON);
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), count: suggestions.length, suggestions }, null, 2));

  const lines = [];
  lines.push('# Alt Text Suggestions');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  for (const s of suggestions) {
    lines.push(`- ${s.path}: ${'`' + s.suggestedAlt.replace(/`/g, '\\`') + '`'}`);
  }
  ensureDir(OUTPUT_MD);
  fs.writeFileSync(OUTPUT_MD, lines.join('\n'));

  console.log(`Alt text suggestions written to: ${path.relative(ROOT, OUTPUT_JSON)} and ${path.relative(ROOT, OUTPUT_MD)}`);
}

main();