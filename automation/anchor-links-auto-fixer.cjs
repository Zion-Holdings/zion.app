#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const anchors = Array.from(text.matchAll(/href=["']#([A-Za-z0-9_-]+)["']/g)).map(m => m[1]);
  const ids = new Set(Array.from(text.matchAll(/id=["']([A-Za-z0-9_-]+)["']/g)).map(m => m[1]));
  const headings = Array.from(text.matchAll(/^\s*#+\s+(.+)$/gm)).map(h => h[1].trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-'));
  const allTargets = new Set([...ids, ...headings]);
  const missing = anchors.filter(a => !allTargets.has(a));
  return { file: filePath, anchors: anchors.length, missing };
}

const files = glob.sync('{pages,docs}/**/*.{md,mdx,ts,tsx,jsx,js}', { nodir: true });
const results = files.map(scanFile).filter(r => r.missing.length > 0);

const md = ['# Anchor Links Report', '', `Generated: ${new Date().toISOString()}`, '']
  .concat(results.map(r => `- ${r.file}: missing anchors -> ${r.missing.join(', ')}`))
  .join('\n');

writeFile(path.resolve(process.cwd(), 'docs/anchor-link-report.md'), md);
console.log('Anchor links report written to docs/anchor-link-report.md');