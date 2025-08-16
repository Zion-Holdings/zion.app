#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const SRC_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'link-sentinel');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function isSpecial(name) { return name.startsWith('_') || name.startsWith('['); }

function collectRoutes() {
  const routes = new Set();
  function walk(dir, routePrefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // if directory has index.* treat as routePrefix
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
  walk(PAGES_DIR, '');
  // root index exists implicitly at '/'
  routes.add('/');
  return routes;
}

function collectDynamicPatterns() {
  const patterns = [];
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
  walk(PAGES_DIR, '');
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

function suggestFix(route, knownRoutes, redirects) {
  // Remove trailing '/index' or trailing slash
  const candidates = new Set([
    route.replace(/\/$/, ''),
    route.replace(/\/index$/i, ''),
  ]);
  for (const cand of candidates) {
    if (knownRoutes.has(cand)) return cand;
    if (redirects.has(cand)) return redirects.get(cand);
  }
  return null;
}

function isValidInternalRoute(route, knownRoutes, dynamicPatterns, redirects) {
  if (knownRoutes.has(route)) return true;
  if (redirects.has(route)) return true;
  for (const rx of dynamicPatterns) {
    if (rx.test(route)) return true;
  }
  return false;
}

(function main() {
  const knownRoutes = collectRoutes();
  const dynamicPatterns = collectDynamicPatterns();
  const redirects = loadRedirects();
  const files = SRC_DIRS.flatMap((d) => (fs.existsSync(d) ? listSourceFiles(d) : []));

  const broken = [];
  const seen = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = extractSiteRelativeHrefs(content);
    for (const href of hrefs) {
      const normalized = href.replace(/\/$/, '');
      if (isValidInternalRoute(normalized, knownRoutes, dynamicPatterns, redirects)) continue;
      const key = `${normalized}::${file}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const suggestion = suggestFix(normalized, knownRoutes, redirects);
      broken.push({ file: path.relative(ROOT, file), href: normalized, suggestion });
    }
  }

  const report = { generatedAt: new Date().toISOString(), knownRoutes: Array.from(knownRoutes).sort(), results: broken };
  const out = path.join(REPORT_DIR, `internal-report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(`Internal Link Sentinel report saved to ${out}`);
})();

function listSourceFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listSourceFiles(full));
    else if (/\.(tsx|ts|js|jsx|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}