#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'anchor-integrity');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listSourceFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function extractAnchorsAndIds(file, content) {
  const anchors = [];
  const ids = new Set();

  // href="#anchor" and href="/path#anchor"
  const hrefRe = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
  let m;
  while ((m = hrefRe.exec(content))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (!candidate) continue;
    const hashIndex = candidate.indexOf('#');
    if (hashIndex >= 0) {
      const route = candidate.slice(0, hashIndex).trim();
      const fragment = candidate.slice(hashIndex + 1).trim();
      if (fragment) anchors.push({ file, route: route || null, fragment });
    }
  }

  // id="anchor" and id={'anchor'} etc
  const idRe = /id\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
  while ((m = idRe.exec(content))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (candidate) ids.add(candidate.trim());
  }

  // headings with ids from markdown style e.g., <h2 id="x">
  const headingIdRe = /<h[1-6][^>]*\sid=["']([^"']+)["'][^>]*>/gi;
  while ((m = headingIdRe.exec(content))) {
    const candidate = m[1];
    if (candidate) ids.add(candidate.trim());
  }

  return { anchors, ids: Array.from(ids) };
}

function routeToFile(route) {
  if (!route) return null;
  const clean = route.replace(/\/$/, '');
  const candidateFiles = [];
  // Try pages/path/index.tsx and pages/path.tsx
  const parts = clean.split('/').filter(Boolean);
  const base = path.join(ROOT, 'pages', ...parts);
  candidateFiles.push(base + '.tsx');
  candidateFiles.push(base + '.jsx');
  candidateFiles.push(base + '.ts');
  candidateFiles.push(base + '.js');
  candidateFiles.push(path.join(base, 'index.tsx'));
  candidateFiles.push(path.join(base, 'index.jsx'));
  candidateFiles.push(path.join(base, 'index.ts'));
  candidateFiles.push(path.join(base, 'index.js'));
  for (const f of candidateFiles) {
    if (fs.existsSync(f)) return f;
  }
  return null;
}

(function main() {
  const files = SRC_DIRS.flatMap(listSourceFiles);
  const fileToIds = new Map();
  const fileToAnchors = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const { anchors, ids } = extractAnchorsAndIds(file, content);
    fileToIds.set(file, new Set(ids));
    fileToAnchors.set(file, anchors);
  }

  const missing = [];
  for (const [file, anchors] of fileToAnchors.entries()) {
    for (const a of anchors) {
      if (a.route == null) {
        // local fragment on same file
        const ids = fileToIds.get(file) || new Set();
        if (!ids.has(a.fragment)) {
          missing.push({ sourceFile: path.relative(ROOT, file), targetFile: path.relative(ROOT, file), fragment: a.fragment, route: null });
        }
      } else {
        const targetFile = routeToFile(a.route);
        if (!targetFile) {
          missing.push({ sourceFile: path.relative(ROOT, file), targetFile: path.relative(ROOT, a.route), fragment: a.fragment, route: a.route, error: 'Target route not found' });
        } else {
          const ids = fileToIds.get(targetFile) || new Set();
          if (!ids.has(a.fragment)) {
            missing.push({ sourceFile: path.relative(ROOT, file), targetFile: path.relative(ROOT, targetFile), fragment: a.fragment, route: a.route });
          }
        }
      }
    }
  }

  const report = { generatedAt: new Date().toISOString(), totalFiles: files.length, totalIssues: missing.length, issues: missing };
  const outJson = path.join(REPORT_DIR, 'report.json');
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));

  const summary = [
    '# Anchor Integrity Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    `Files scanned: ${files.length}`,
    `Issues: ${missing.length}`,
    '',
    ...missing.slice(0, 100).map((m, idx) => `- [${idx+1}] ${m.sourceFile} -> ${m.route || '(same file)'}#${m.fragment} (target: ${m.targetFile || 'unknown'})`),
  ].join('\n');
  fs.writeFileSync(path.join(REPORT_DIR, 'summary.md'), summary);

  console.log(`Anchor integrity report written to ${path.relative(ROOT, REPORT_DIR)}`);
})();