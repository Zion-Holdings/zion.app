#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public', 'reports');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'anchor-integrity.json');

function listFilesRecursive(dir, filterExts = ['.tsx', '.jsx']) {
  const results = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }) : [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...listFilesRecursive(full, filterExts));
    else if (filterExts.includes(path.extname(entry.name))) results.push(full);
  }
  return results;
}

function toRouteFromFile(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  if (rel === 'index.tsx' || rel === 'index.jsx') return '/';
  const noExt = rel.replace(/\.(tsx|jsx)$/i, '');
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/, '');
  return '/' + noExt;
}

function extractAnchors(source) {
  const ids = new Set();
  // id="..." occurrences
  const idRegex = /\bid=\"([^\"]+)\"/g;
  let m;
  while ((m = idRegex.exec(source))) ids.add(m[1]);
  return ids;
}

function extractHashLinks(source) {
  const links = [];
  const hrefHashRegex = /href=\{?"([^"]+#([^"]+))"\}?/g;
  const hrefHashRegexSingle = /href=\{?'([^']+#([^']+))'\}?/g;
  let m;
  while ((m = hrefHashRegex.exec(source))) links.push({ href: m[1], anchor: m[2] });
  while ((m = hrefHashRegexSingle.exec(source))) links.push({ href: m[1], anchor: m[2] });
  return links;
}

(function main() {
  const files = listFilesRecursive(PAGES_DIR);
  const routeToFile = new Map();
  for (const file of files) {
    if (path.basename(file).startsWith('_')) continue;
    routeToFile.set(toRouteFromFile(file), file);
  }

  const issues = [];

  for (const [route, file] of routeToFile.entries()) {
    const src = fs.readFileSync(file, 'utf8');
    const hashLinks = extractHashLinks(src);
    if (hashLinks.length === 0) continue;

    for (const link of hashLinks) {
      // Normalize target route by stripping hash
      const targetRoute = link.href.replace(/[?#].*$/, '').trim() || route;
      const targetFile = routeToFile.get(targetRoute) || (targetRoute === route ? file : undefined);
      if (!targetFile) {
        issues.push({ type: 'missing-target-route', sourceRoute: route, href: link.href });
        continue;
      }
      const targetSrc = targetFile === file ? src : fs.readFileSync(targetFile, 'utf8');
      const targetIds = extractAnchors(targetSrc);
      if (!targetIds.has(link.anchor)) {
        issues.push({ type: 'missing-anchor', sourceRoute: route, targetRoute, anchor: link.anchor, href: link.href });
      }
    }
  }

  const result = { generatedAt: new Date().toISOString(), totalIssues: issues.length, issues };
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`Anchor integrity report generated: ${path.relative(ROOT, OUTPUT_FILE)} (issues=${issues.length})`);
})();