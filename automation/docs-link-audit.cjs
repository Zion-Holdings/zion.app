#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const OUTPUT_DIR = path.join(ROOT, 'reports');
const CSV_PATH = path.join(OUTPUT_DIR, 'docs_link_audit.csv');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listMarkdown(dir) {
  const files = [];
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.name.startsWith('.')) continue;
      const abs = path.join(current, ent.name);
      if (ent.isDirectory()) {
        walk(abs);
      } else if (/\.(md|mdx)$/i.test(ent.name)) {
        files.push(abs);
      }
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return files;
}

function extractLinks(markdown) {
  const links = [];
  const re = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g; // [text](url "title")
  let m;
  while ((m = re.exec(markdown)) !== null) {
    links.push(m[1]);
  }
  return links;
}

(function main() {
  ensureDir(OUTPUT_DIR);
  const files = listMarkdown(DOCS_DIR);
  const rows = [['file','link','status']];

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    const dir = path.dirname(abs);
    const content = fs.readFileSync(abs, 'utf8');
    const links = extractLinks(content);
    for (const href of links) {
      // Skip external and anchors and mailto
      if (/^(https?:)?\/\//i.test(href)) continue;
      if (href.startsWith('#')) continue;
      if (href.startsWith('mailto:')) continue;

      let target = href;
      if (href.startsWith('/')) {
        // Repo-root relative; map /docs/... to docs
        target = path.join(ROOT, href.replace(/^\//, ''));
      } else {
        target = path.resolve(dir, href);
      }

      // Normalize removing anchors and query
      target = target.split('#')[0].split('?')[0];

      // If referencing a directory, allow README.md fallback
      let ok = fs.existsSync(target);
      if (!ok && fs.existsSync(target + '.md')) ok = true;
      if (!ok && fs.existsSync(target + '.mdx')) ok = true;
      if (!ok && fs.existsSync(path.join(target, 'README.md'))) ok = true;

      rows.push([rel, href, ok ? 'ok' : 'missing'].join(','));
    }
  }

  fs.writeFileSync(CSV_PATH, rows.join('\n'));
  console.log(`Docs link audit complete. Files: ${files.length}`);
  console.log(`CSV report: ${path.relative(ROOT, CSV_PATH)}`);
})();