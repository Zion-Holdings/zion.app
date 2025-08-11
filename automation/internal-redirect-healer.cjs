#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'internal-redirect-healer.log');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function log(line) {
  const msg = `[${new Date().toISOString()}] ${line}`;
  console.log(msg);
  ensureDir(LOG_DIR);
  fs.appendFileSync(LOG_FILE, msg + '\n');
}

function normalizePath(p) {
  // Collapse duplicate slashes except the protocol part
  return p.replace(/([^:])\/\/+/, '$1/');
}

function healContent(content) {
  let changed = false;
  let before = content;

  // TSX/JSX/HTML-like href fixes: href="/path/index" => href="/path/"
  const reHrefIndex = /(href=\s*["'])(\/[^"'#]*?)\/?index(?:\.html)?(\/?(?:#[^"']*)?)(["'])/gi;
  content = content.replace(reHrefIndex, (_m, p1, p2, p3, p4) => {
    changed = true;
    const normalized = normalizePath(`${p2.replace(/\/$/, '')}/${p3.startsWith('/') ? p3.slice(1) : p3}`)
      .replace(/\/$?(?:#[^\s"']*)?$/, (s) => s.startsWith('#') ? '/' + s : '/');
    // Re-attach fragment if present
    const hashMatch = /(#.*)$/.exec(p3);
    const out = p1 + (hashMatch ? p2.replace(/\/$/, '') + '/' + hashMatch[1] : p2.replace(/\/$/, '/') ) + p4;
    return out;
  });

  // Markdown link: ](/path/index) -> ](/path/)
  const reMdIndex = /(\]\()(\/[^)\s]*?)\/?index(?:\.html)?(\/?(?:#[^)\s]*)?)(\))/gi;
  content = content.replace(reMdIndex, (_m, a, p2, p3, d) => {
    changed = true;
    const hash = (/#.*$/.exec(p3) || [,''])[1];
    const base = p2.replace(/\/$/, '');
    return `${a}${base}/${hash ? hash : ''}${d}`;
  });

  // Remove trailing '/index.html' on absolute URLs to same site pattern (best-effort, generic)
  const reAbsIndex = /(href=\s*["'])(https?:\/\/[^"']+?)\/?index\.html(#[^"']*)?(["'])/gi;
  content = content.replace(reAbsIndex, (_m, p1, base, hash = '', p4) => {
    changed = true;
    return `${p1}${normalizePath(base + '/')}${hash || ''}${p4}`;
  });

  return { changed, content, before };
}

(function main() {
  log('🚀 Internal Redirect Healer starting');
  const patterns = [
    'pages/**/*.{tsx,ts,jsx,js,md,mdx}',
    'docs/**/*.{md,mdx}'
  ];

  let filesProcessed = 0;
  let filesChanged = 0;
  let totalEdits = 0;

  for (const pattern of patterns) {
    for (const file of glob.sync(pattern, { cwd: ROOT, nodir: true, ignore: ['**/node_modules/**', '**/.next/**', '**/out/**'] })) {
      const abs = path.join(ROOT, file);
      let src = fs.readFileSync(abs, 'utf8');
      const { changed, content } = healContent(src);
      if (changed && content !== src) {
        filesChanged += 1;
        // Count rough number of edits by diffing length of replacements
        totalEdits += Math.abs((src.match(/index(?:\.html)?/g) || []).length - (content.match(/index(?:\.html)?/g) || []).length);
        fs.writeFileSync(abs, content);
        log(`Healed: ${file}`);
      }
      filesProcessed += 1;
    }
  }

  log(`✅ Internal Redirect Healer finished: processed=${filesProcessed}, changed=${filesChanged}, edits≈${totalEdits}`);
})();