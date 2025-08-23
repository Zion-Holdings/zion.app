#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const url = require('url');

const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'site-links');
const LOG_DIR = path.join(__dirname, 'logs');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
ensureDir(LOG_DIR); ensureDir(REPORT_DIR);
const LOG_FILE = path.join(LOG_DIR, 'site-link-fixer.log');
function log(message) { const line = `[${new Date().toISOString()}] ${message}`; console.log(line); fs.appendFileSync(LOG_FILE, line + '\n'); }

function readJson(filePath, fallback) { try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return fallback; } }

function toRoutePath(u) {
  try {
    const parsed = new url.URL(u);
    return decodeURIComponent(parsed.pathname);
  } catch { return null; }
}

function findNearestExistingRoute(routePath) {
  // naive heuristic: try without trailing slash, index, and case variants
  if (!routePath) return null;
  const candidates = new Set();
  const base = routePath.endsWith('/') && routePath !== '/' ? routePath.slice(0, -1) : routePath;
  candidates.add(base);
  candidates.add(base + '/index');
  candidates.add(base.toLowerCase());
  candidates.add(base.toLowerCase() + '/index');

  for (const c of candidates) {
    const tsx = path.join(PAGES_DIR, `${c}.tsx`);
    const ts = path.join(PAGES_DIR, `${c}.ts`);
    const js = path.join(PAGES_DIR, `${c}.js`);
    const md = path.join(PAGES_DIR, `${c}.md`);
    if (fs.existsSync(tsx) || fs.existsSync(ts) || fs.existsSync(js) || fs.existsSync(md)) {
      return c;
    }
  }
  return null;
}

function loadBrokenLinks() {
  const file = path.join(REPORT_DIR, 'broken-links.json');
  const broken = readJson(file, []);
  return Array.isArray(broken) ? broken : [];
}

function proposeRedirects(brokenList) {
  const proposals = [];
  for (const item of brokenList) {
    const route = toRoutePath(item.url);
    if (!route || route === '/') continue;
    const fallback = findNearestExistingRoute(route);
    if (fallback) {
      proposals.push({ source: route, destination: fallback.startsWith('/') ? fallback : `/${fallback}`, permanent: true, status: item.status });
    }
  }
  return proposals;
}

function writeRedirects(proposals) {
  if (!proposals.length) return null;
  const redirectsPath = path.join(REPORT_DIR, 'proposed-redirects.json');
  fs.writeFileSync(redirectsPath, JSON.stringify({ generatedAt: new Date().toISOString(), redirects: proposals }, null, 2));
  return redirectsPath;
}

function scanAndFixLocalReferences(brokenList) {
  // Attempt to fix local content files referencing broken internal links
  // We do a best-effort search-and-replace based on nearest existing route
  const filesToCheck = [];
  function collect(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) collect(full);
      else if (/\.(tsx|ts|js|jsx|md|mdx|html)$/i.test(entry)) filesToCheck.push(full);
    }
  }
  collect(path.join(__dirname, '..', 'pages'));
  collect(path.join(__dirname, '..', 'components'));
  collect(path.join(__dirname, '..', 'data'));

  let changes = 0;
  for (const broken of brokenList) {
    const from = toRoutePath(broken.url);
    if (!from) continue;
    const to = findNearestExistingRoute(from);
    if (!to) continue;
    const fromEscaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(fromEscaped, 'g');
    for (const file of filesToCheck) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (re.test(content)) {
          const updated = content.replace(re, to.startsWith('/') ? to : `/${to}`);
          if (updated !== content) {
            fs.writeFileSync(file, updated);
            changes++;
          }
        }
      } catch (_) {}
    }
  }
  return changes;
}

async function main() {
  log('🔧 Site link fixer started');
  const broken = loadBrokenLinks();
  if (!broken.length) { log('✅ No broken links found'); return; }

  const internalBroken = broken.filter(b => {
    try {
      const u = new url.URL(b.url);
      const start = new url.URL(process.env.APP_SITE_URL || 'https://ziontechgroup.com');
      return u.host === start.host;
    } catch { return false; }
  });

  const redirects = proposeRedirects(internalBroken);
  const redirectsPath = writeRedirects(redirects);
  const refFixes = scanAndFixLocalReferences(internalBroken);

  const summary = {
    timestamp: new Date().toISOString(),
    brokenTotal: broken.length,
    internalBroken: internalBroken.length,
    proposedRedirects: redirects.length,
    redirectsPath: redirectsPath || null,
    localReferenceFixesApplied: refFixes
  };
  fs.writeFileSync(path.join(REPORT_DIR, 'fix-summary.json'), JSON.stringify(summary, null, 2));
  log(`✅ Fix summary: ${JSON.stringify(summary)}`);
}

if (require.main === module) {
  main().catch(e => { log(`Fatal: ${e.message}`); process.exitCode = 1; });
}


