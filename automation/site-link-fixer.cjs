#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.APP_MARKETING_URL || process.env.BASE_URL || 'https://ziontechgroup.com';
const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'links');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'site-link-fixer.log');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(LOG_DIR);
ensureDir(REPORT_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${line}\n`);
}

function loadLatestCrawl() {
  const latest = path.join(REPORT_DIR, 'crawl-latest.json');
  if (fs.existsSync(latest)) {
    try {
      return JSON.parse(fs.readFileSync(latest, 'utf8'));
    } catch (e) {
      log(`❌ Failed to parse latest crawl: ${e.message}`);
    }
  }
  // fallback to most recent by timestamp
  const files = fs.readdirSync(REPORT_DIR).filter(f => f.startsWith('crawl-') && f.endsWith('.json')).sort().reverse();
  for (const f of files) {
    try {
      return JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8'));
    } catch (e) {}
  }
  return null;
}

function groupBroken(results) {
  const broken = results.filter(r => !r.ok || (r.status && r.status >= 400));
  const byHost = broken.reduce((acc, r) => {
    try {
      const u = new URL(r.url);
      const b = new URL(BASE_URL);
      const key = u.hostname === b.hostname ? 'internal' : 'external';
      acc[key] = acc[key] || [];
      acc[key].push(r);
    } catch (e) {
      acc.misc = acc.misc || [];
      acc.misc.push(r);
    }
    return acc;
  }, {});
  return byHost;
}

function findCandidateFix(url) {
  // Simple redirect-based fix: if the finalUrl is ok and differs from url, propose replacing url with finalUrl
  // Otherwise attempt to strip trailing slashes or add them and check if a corresponding page exists under pages/ as a heuristic
  try {
    const u = new URL(url);
    const withoutSlash = u.pathname.endsWith('/') ? u.pathname.slice(0, -1) : `${u.pathname}/`;
    return [
      `${u.origin}${withoutSlash}`
    ];
  } catch {
    return [];
  }
}

function collectFiles(rootDir) {
  const exts = ['.md', '.mdx', '.tsx', '.jsx', '.ts', '.js'];
  const ignored = new Set(['node_modules', '.git', '.next', 'data/reports']);
  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      const rel = path.relative(rootDir, full);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if ([...ignored].some(i => rel.startsWith(i))) continue;
        walk(full);
      } else if (exts.includes(path.extname(entry))) {
        files.push(full);
      }
    }
  }
  walk(rootDir);
  return files;
}

function applyFixes(brokenInternal, allResults) {
  const repoRoot = process.cwd();
  const files = collectFiles(repoRoot);
  const fixes = [];

  // Map for quick lookup of successful final URLs
  const okFinals = new Map();
  for (const r of allResults) {
    if (r.ok && r.finalUrl) okFinals.set(r.url, r.finalUrl);
  }

  for (const issue of brokenInternal) {
    const target = issue.url;
    const replacement = okFinals.get(target) || findCandidateFix(target).find(Boolean);
    if (!replacement || replacement === target) continue;

    for (const file of files) {
      try {
        const original = fs.readFileSync(file, 'utf8');
        if (!original.includes(target)) continue;
        const updated = original.split(target).join(replacement);
        if (updated !== original) {
          fs.writeFileSync(file, updated);
          fixes.push({ file, from: target, to: replacement });
          log(`🛠️ Replaced in ${file}: ${target} -> ${replacement}`);
        }
      } catch (e) {
        log(`⚠️ Could not process ${file}: ${e.message}`);
      }
    }
  }

  return fixes;
}

function saveFixReport(summary) {
  const out = path.join(REPORT_DIR, `fix-${new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0,12)}.json`);
  fs.writeFileSync(out, JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'fix-latest.json'), JSON.stringify(summary, null, 2));
  log(`📄 Saved fix report: ${out}`);
}

async function main() {
  const crawl = loadLatestCrawl();
  if (!crawl) {
    log('ℹ️ No crawl report found; skipping fixes');
    return;
  }
  const grouped = groupBroken(crawl.results || []);
  const internalBroken = grouped.internal || [];
  log(`🔎 Internal broken links: ${internalBroken.length}`);

  const fixes = applyFixes(internalBroken, crawl.results || []);
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    attempted: internalBroken.length,
    applied: fixes.length,
    fixes
  };
  saveFixReport(report);
}

if (require.main === module) {
  main().catch(e => { log(`❌ Fix run failed: ${e.message}`); process.exitCode = 1; });
}

module.exports = {};


