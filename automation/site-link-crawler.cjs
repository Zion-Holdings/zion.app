#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const glob = require('glob');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function readJSONSafe(p, fallback) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

function deriveInternalRoutes(pagesDir) {
  const files = glob.sync('**/*.{tsx,jsx,ts,js}', { cwd: pagesDir, nodir: true, absolute: false });
  const ignored = new Set(['_app', '_document', '404', '500']);
  const routes = new Set();

  for (const rel of files) {
    if (rel.startsWith('api/')) continue;
    const noExt = rel.replace(/\.(tsx|jsx|ts|js)$/i, '');
    const parts = noExt.split('/');
    const leaf = parts[parts.length - 1];
    if (ignored.has(leaf)) continue;

    // compute route
    let route;
    if (leaf === 'index') {
      const base = parts.slice(0, -1).join('/');
      route = '/' + (base ? base : '');
    } else {
      route = '/' + noExt;
    }
    route = route.replace(/\\+/g, '/').replace(/\/index$/, '/');
    route = route.replace(/\[(.*?)\]/g, ':$1'); // dynamic route marker to avoid false negatives
    routes.add(route);
  }

  // Normalize: collapse '//' occurrences
  return new Set([...routes].map(r => r.replace(/\/+/g, '/')));
}

async function headOrGet(url, timeoutMs = 8000) {
  try {
    const res = await axios.head(url, { timeout: timeoutMs, maxRedirects: 3, validateStatus: () => true });
    if (res.status >= 200 && res.status < 400) return { ok: true, status: res.status };
    // Some servers block HEAD; fallback to GET lightweight
    const getRes = await axios.get(url, { timeout: timeoutMs, maxRedirects: 3, validateStatus: () => true });
    return { ok: getRes.status >= 200 && getRes.status < 400, status: getRes.status };
  } catch (e) {
    return { ok: false, status: 0, error: String(e.message || e) };
  }
}

async function fetchHTML(url, timeoutMs = 12000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs });
    return { ok: true, html: res.data };
  } catch (e) {
    return { ok: false, html: '', error: String(e.message || e) };
  }
}

function loadSitemapUrls(workspaceRoot) {
  const sitemapPath = path.join(workspaceRoot, 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return [];
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]).filter(Boolean);
  return urls;
}

function sameOrigin(href) {
  try { const u = new URL(href); return false; } catch { return href.startsWith('/'); }
}

async function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const pagesDir = path.join(workspaceRoot, 'pages');
  const reportDir = path.join(workspaceRoot, 'public', 'automation');
  ensureDir(reportDir);

  const baseUrl = process.env.CANONICAL_URL || process.env.SITE_URL || '';

  const internalRoutes = deriveInternalRoutes(pagesDir);

  // Seed crawl targets
  const targets = new Set();
  if (baseUrl) {
    const sitemapUrls = loadSitemapUrls(workspaceRoot);
    if (sitemapUrls.length) sitemapUrls.forEach(u => targets.add(u));
    // Always include base
    targets.add(new URL('/', baseUrl).toString());
  }

  const discoveredInternalHrefs = new Set();
  const externalLinks = new Set();
  const fetchErrors = [];

  // Crawl limited number of pages to avoid excess
  const maxPages = 100;
  let count = 0;
  for (const url of targets) {
    if (count++ >= maxPages) break;
    const { ok, html, error } = await fetchHTML(url);
    if (!ok) { fetchErrors.push({ url, error }); continue; }
    const $ = cheerio.load(html);
    $('a[href]').each((_, el) => {
      const href = String($(el).attr('href') || '').trim();
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
      if (sameOrigin(href)) {
        const clean = href.split('#')[0].split('?')[0] || '/';
        discoveredInternalHrefs.add(clean);
      } else {
        externalLinks.add(href);
      }
    });
  }

  // Validate internal links against known routes (filesystem-derived)
  const internalMissingRoutes = [...discoveredInternalHrefs]
    .filter(h => !internalRoutes.has(h) && !internalRoutes.has(h.replace(/\/$/, '')));

  // Validate external links with HEAD/GET
  const externalFailures = [];
  const externalList = [...externalLinks].slice(0, 200);
  for (const href of externalList) {
    const res = await headOrGet(href);
    if (!res.ok) externalFailures.push({ href, status: res.status, error: res.error || '' });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: baseUrl || null,
    totals: {
      routesKnown: internalRoutes.size,
      internalLinksDiscovered: discoveredInternalHrefs.size,
      internalMissingRoutes: internalMissingRoutes.length,
      externalChecked: externalList.length,
      externalFailures: externalFailures.length,
      fetchErrors: fetchErrors.length,
    },
    internalMissingRoutes,
    externalFailures,
    fetchErrors,
    internalRoutes: [...internalRoutes],
  };

  fs.writeFileSync(path.join(reportDir, 'link-report.json'), JSON.stringify(report, null, 2));
  // Convenience JSON for fixer
  fs.writeFileSync(path.join(reportDir, 'broken-links.json'), JSON.stringify({ internalMissingRoutes }, null, 2));

  console.log('Link crawl complete. Report saved to public/automation/link-report.json');
}

main().catch(err => {
  console.error('Crawler failed:', err);
  process.exit(1);
});