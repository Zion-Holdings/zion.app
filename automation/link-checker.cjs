#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const http = require('http');
const https = require('https');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'links');
const REPORT_FILE = path.join(REPORT_DIR, `link-check-${Date.now()}.json`);
const REPORT_LATEST = path.join(REPORT_DIR, 'latest.json');
const PUBLIC_REPORT_DIR = path.join(ROOT, 'public', 'reports', 'links');
const PUBLIC_LATEST = path.join(PUBLIC_REPORT_DIR, 'latest.json');

const PAGES_DIR = path.join(ROOT, 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DOCS_DIR = path.join(ROOT, 'docs');

function listFiles(dir, exts = ['.tsx', '.ts', '.js', '.jsx', '.md', '.mdx', '.html']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) stack.push(full);
      else if (exts.includes(path.extname(entry))) results.push(full);
    }
  }
  return results;
}

function extractLinks(content) {
  const links = new Set();
  const hrefRegex = /href\s*=\s*['\"]([^'\"]+)['\"]/gi;
  const srcRegex = /src\s*=\s*['\"]([^'\"]+)['\"]/gi;
  let m;
  while ((m = hrefRegex.exec(content))) links.add(m[1]);
  while ((m = srcRegex.exec(content))) links.add(m[1]);
  return Array.from(links);
}

function mapPathToPage(p) {
  // Map "/a/b" to possible page file candidates
  if (!p.startsWith('/')) return null;
  const clean = p.replace(/[#?].*$/, '').replace(/\/+$/, '');
  const candidates = [];
  const base = path.join(PAGES_DIR, clean);
  candidates.push(base + '.tsx', base + '.ts', base + '.jsx', base + '.js');
  // index fallback
  candidates.push(path.join(PAGES_DIR, clean, 'index.tsx'));
  candidates.push(path.join(PAGES_DIR, clean, 'index.ts'));
  candidates.push(path.join(PAGES_DIR, clean, 'index.jsx'));
  candidates.push(path.join(PAGES_DIR, clean, 'index.js'));
  // static public asset
  const publicAsset = path.join(PUBLIC_DIR, clean);
  candidates.push(publicAsset);
  return candidates;
}

function existsAny(paths) {
  for (const p of paths) {
    if (fs.existsSync(p)) return true;
  }
  return false;
}

function checkExternal(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve({ ok: res.statusCode && res.statusCode < 400, status: res.statusCode });
      req.destroy();
    });
    req.on('timeout', () => { resolve({ ok: false, status: 'timeout' }); req.destroy(); });
    req.on('error', () => { resolve({ ok: false, status: 'error' }); });
    req.end();
  });
}

async function main() {
  const files = [
    ...listFiles(PAGES_DIR),
    ...listFiles(PUBLIC_DIR, ['.html']),
    ...listFiles(DOCS_DIR, ['.md', '.mdx']),
  ];
  const results = [];
  const externalCache = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content);
    for (const link of links) {
      if (!link || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:')) continue;
      if (link.startsWith('http://') || link.startsWith('https://')) {
        if (!externalCache.has(link)) {
          // eslint-disable-next-line no-await-in-loop
          externalCache.set(link, await checkExternal(link));
        }
        const { ok, status } = externalCache.get(link);
        results.push({ file, link, type: 'external', ok, status });
      } else if (link.startsWith('/')) {
        const candidates = mapPathToPage(link);
        const ok = existsAny(candidates);
        results.push({ file, link, type: 'internal', ok, status: ok ? 200 : 404 });
      } else {
        // relative paths
        const abs = path.resolve(path.dirname(file), link);
        const ok = fs.existsSync(abs);
        results.push({ file, link, type: 'relative', ok, status: ok ? 200 : 404 });
      }
    }
  }

  const summary = {
    timestamp: new Date().toISOString(),
    totals: {
      checked: results.length,
      broken: results.filter((r) => !r.ok).length,
      external: results.filter((r) => r.type === 'external').length,
      internal: results.filter((r) => r.type === 'internal').length,
      relative: results.filter((r) => r.type === 'relative').length,
    },
  };

  await fse.ensureDir(REPORT_DIR);
  await fse.ensureDir(PUBLIC_REPORT_DIR);
  await fse.writeJSON(REPORT_FILE, { summary, results }, { spaces: 2 });
  await fse.writeJSON(REPORT_LATEST, { summary, results }, { spaces: 2 });
  await fse.writeJSON(path.join(PUBLIC_REPORT_DIR, `report-${Date.now()}.json`), { summary, results }, { spaces: 2 });
  await fse.writeJSON(PUBLIC_LATEST, { summary, results }, { spaces: 2 });
  console.log(`Link check complete. Broken: ${summary.totals.broken}/${summary.totals.checked}`);
}

main().catch((err) => { console.error(err); process.exit(1); });