#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function log(line) {
  const msg = `[${new Date().toISOString()}] ${line}`;
  console.log(msg);
  ensureDir(LOG_DIR);
  fs.appendFileSync(path.join(LOG_DIR, 'alt-text-improver.log'), msg + '\n');
}

function altFromSrc(src) {
  try {
    const clean = src.replace(/^["']|["']$/g, '');
    const base = path.basename(clean).replace(/\.[a-zA-Z0-9]+$/, '');
    return base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  } catch {
    return 'image';
  }
}

function improveTsx(content) {
  let changed = false;
  // naive approach: <img src="..." ...> without alt= => inject alt="..."
  content = content.replace(/<img\s+([^>]*?)>/gi, (m, attrs) => {
    if (/\balt\s*=/.test(attrs)) return m; // already has alt
    const srcMatch = attrs.match(/\bsrc\s*=\s*("[^"]+"|'[^']+'|[^\s>]+)/i);
    const alt = altFromSrc(srcMatch ? srcMatch[1] : 'image');
    changed = true;
    const withAlt = `<img ${attrs.trim()} alt="${alt}">`;
    return withAlt;
  });
  return { content, changed };
}

function improveMarkdown(content) {
  let changed = false;
  // ![alt](src) where alt is empty => set
  content = content.replace(/!\[(?:\s*|image|img|photo)?\]\(([^)]+)\)/gi, (m, src) => {
    changed = true;
    const alt = altFromSrc(src);
    return `![${alt}](${src})`;
  });
  return { content, changed };
}

(function main() {
  log('🚀 Alt Text Improver starting');
  const patterns = [
    'pages/**/*.{tsx,jsx}',
    'docs/**/*.{md,mdx}'
  ];

  let filesProcessed = 0;
  let filesChanged = 0;

  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, { cwd: ROOT, nodir: true, ignore: ['**/node_modules/**', '**/.next/**', '**/out/**'] })) {
      const abs = path.join(ROOT, file);
      let src = fs.readFileSync(abs, 'utf8');
      let res;
      if (/\.(tsx|jsx)$/i.test(file)) res = improveTsx(src);
      else res = improveMarkdown(src);
      if (res.changed && res.content !== src) {
        fs.writeFileSync(abs, res.content);
        filesChanged += 1;
        log(`Updated alt text: ${file}`);
      }
      filesProcessed += 1;
    }
  }

  log(`✅ Alt Text Improver finished: processed=${filesProcessed}, changed=${filesChanged}`);
})();