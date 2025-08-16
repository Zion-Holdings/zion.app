#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function isSpecial(name) { return name.startsWith('_') || name.startsWith('['); }

function collectRoutes() {
  const routes = new Set();
  const pagesDir = path.join(ROOT, 'pages');
  if (!fs.existsSync(pagesDir)) return routes;
  function walk(dir, routePrefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const hasIndex = entries.some((e) => e.isFile() && /^(index)\.(tsx|jsx|ts|js)$/i.test(e.name));
    if (hasIndex && routePrefix) {
      routes.add(routePrefix);
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (isSpecial(entry.name)) continue;
        const nextPrefix = path.posix.join(routePrefix || '/', entry.name).replace(/\\/g, '/');
        walk(full, nextPrefix);
      } else if (entry.isFile()) {
        if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
        const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
        if (isSpecial(base)) continue;
        if (base === 'index') continue; // handled above
        const route = path.posix.join(routePrefix || '/', base).replace(/\\/g, '/');
        routes.add(route);
      }
    }
  }
  walk(pagesDir, '');
  routes.add('/');
  return routes;
}

function collectDynamicPatterns() {
  const patterns = [];
  const pagesDir = path.join(ROOT, 'pages');
  function walk(dir, routePrefix = '') {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith('[')) {
          const seg = '([^/]+)';
          const prefix = path.posix.join(routePrefix || '/', seg).replace(/\\/g, '/');
          walk(full, prefix);
        } else if (!entry.name.startsWith('_')) {
          const prefix = path.posix.join(routePrefix || '/', entry.name).replace(/\\/g, '/');
          walk(full, prefix);
        }
      } else if (entry.isFile()) {
        if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
        const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
        if (base === 'index') {
          const rx = new RegExp('^' + (routePrefix || '/') + '$');
          patterns.push(rx);
        } else if (base.startsWith('[')) {
          const rx = new RegExp('^' + path.posix.join(routePrefix || '/', '([^/]+)') + '$');
          patterns.push(rx);
        }
      }
    }
  }
  walk(pagesDir, '');
  return patterns;
}

function loadRedirects() {
  const files = [path.join(ROOT, 'public', '_redirects'), path.join(ROOT, 'zion.app', '_redirects')];
  const map = new Map();
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const parts = trimmed.split(/\s+/);
      if (parts.length < 2) continue;
      const from = parts[0];
      const to = parts[1];
      if (from.startsWith('/') && to.startsWith('/')) map.set(from.replace(/\/$/, ''), to.replace(/\/$/, ''));
    }
  }
  return map;
}

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function extractSiteRelativeHrefs(content) {
  const hrefs = new Set();
  const re = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
  let m;
  while ((m = re.exec(content))) {
    const candidate = m[1] || m[2] || m[3] || m[4] || m[5];
    if (!candidate) continue;
    if (candidate.startsWith('/')) hrefs.add(candidate.replace(/\/$/, ''));
  }
  return Array.from(hrefs);
}

function suggestFix(route, knownRoutes, dynamicPatterns, redirects) {
  const normalized = route.replace(/\/$/, '');
  // If dynamic route matches, do not rewrite automatically
  if (dynamicPatterns.some((rx) => rx.test(normalized))) return null;
  const candidates = new Set([
    normalized,
    normalized.replace(/\/index$/i, ''),
  ]);
  for (const cand of candidates) {
    if (knownRoutes.has(cand)) return cand;
    if (redirects.has(cand)) return redirects.get(cand);
  }
  return null;
}

function buildReplacements(content, href, replacement) {
  const patterns = [
    { re: new RegExp(`href\\s*=\\s*"${escapeRegExp(href)}"`, 'g'), fmt: () => `href="${replacement}"` },
    { re: new RegExp(`href\\s*=\\s*'${escapeRegExp(href)}'`, 'g'), fmt: () => `href='${replacement}'` },
    { re: new RegExp(`href\\s*=\\s*\\{\\s*\\?` + escapeRegExp(href) + `\\?\\s*\\}`, 'g'), fmt: () => `href={\`${replacement}\`}` },
    { re: new RegExp(`href\\s*=\\s*\\{\\s*"${escapeRegExp(href)}"\\s*\\}`, 'g'), fmt: () => `href={"${replacement}"}` },
    { re: new RegExp(`href\\s*=\\s*\\{\\s*'${escapeRegExp(href)}'\\s*\\}`, 'g'), fmt: () => `href={'${replacement}'}` },
  ];
  let changed = content;
  let count = 0;
  for (const p of patterns) {
    const before = changed;
    changed = changed.replace(p.re, p.fmt);
    if (changed !== before) count++;
  }
  return { changed, touched: count > 0 };
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

(async function main() {
  const args = new Set(process.argv.slice(2));
  const write = args.has('--write');
  const dryRun = args.has('--dry-run') || !write;

  const knownRoutes = collectRoutes();
  const dynamicPatterns = collectDynamicPatterns();
  const redirects = loadRedirects();
  const files = SRC_DIRS.flatMap((d) => (fs.existsSync(d) ? Array.from(walkFiles(d)) : []));

  const changes = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = extractSiteRelativeHrefs(content);
    let updated = content;
    let fileTouched = false;
    for (const href of hrefs) {
      if (knownRoutes.has(href) || dynamicPatterns.some((rx) => rx.test(href)) || redirects.has(href)) continue;
      const suggestion = suggestFix(href, knownRoutes, dynamicPatterns, redirects);
      if (!suggestion) continue;
      const { changed, touched } = buildReplacements(updated, href, suggestion);
      if (touched) {
        updated = changed;
        fileTouched = true;
        changes.push({ file: path.relative(ROOT, file), from: href, to: suggestion });
      }
    }
    if (fileTouched && write) {
      fs.writeFileSync(file, updated);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    writeMode: write,
    totalChanges: changes.length,
    changes,
  };
  const out = path.join(REPORT_DIR, `internal-fixes-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(`${write ? 'Wrote' : 'Planned'} ${changes.length} changes. Report: ${out}`);

  if (dryRun && changes.length) process.exitCode = 2; // signal potential changes
})();