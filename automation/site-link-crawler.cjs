#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const urlLib = require('url');
const axios = require('axios');
const cheerio = require('cheerio');

const REPORT_JSON_DIR = path.join(process.cwd(), 'data', 'reports', 'link-integrity');
const REPORT_HTML_DIR = path.join(process.cwd(), 'public', 'reports', 'links');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function normalizeUrl(baseUrl, href) {
  if (!href) return null;
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:') || trimmed.startsWith('javascript:')) return null;
  // ignore pure hash links
  if (trimmed.startsWith('#')) return null;
  try {
    const u = new urlLib.URL(trimmed, baseUrl);
    // Remove hash for canonical link checks
    u.hash = '';
    return u.toString();
  } catch {
    return null;
  }
}

function isSameOrigin(a, b) {
  try {
    const ua = new urlLib.URL(a);
    const ub = new urlLib.URL(b);
    return ua.origin === ub.origin;
  } catch {
    return false;
  }
}

async function fetchPage(url, timeoutMs = 15000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs, maxRedirects: 5, validateStatus: () => true, headers: { 'User-Agent': 'SiteLinkCrawler/1.0' } });
    return { status: res.status, html: res.data, ok: res.status >= 200 && res.status < 400 };
  } catch (e) {
    return { status: 0, html: '', ok: false, error: e.message };
  }
}

function extractLinks(baseUrl, html) {
  const $ = cheerio.load(html || '');
  const links = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const absolute = normalizeUrl(baseUrl, href);
    if (absolute && isSameOrigin(baseUrl, absolute)) {
      links.add(absolute);
    }
  });
  // Also capture links in Next.js Link with child anchor-less patterns (rare)
  $('[href]').each((_, el) => {
    const href = $(el).attr('href');
    const absolute = normalizeUrl(baseUrl, href);
    if (absolute && isSameOrigin(baseUrl, absolute)) {
      links.add(absolute);
    }
  });
  return Array.from(links);
}

async function headOrGet(url) {
  try {
    const res = await axios.head(url, { timeout: 10000, maxRedirects: 5, validateStatus: () => true });
    return { status: res.status, ok: res.status >= 200 && res.status < 400 };
  } catch {
    try {
      const res2 = await axios.get(url, { timeout: 15000, maxRedirects: 5, validateStatus: () => true });
      return { status: res2.status, ok: res2.status >= 200 && res2.status < 400 };
    } catch (e2) {
      return { status: 0, ok: false, error: e2.message };
    }
  }
}

async function crawl({ baseUrl, maxPages = 500 }) {
  const toVisit = [baseUrl];
  const visited = new Set();
  const pages = [];
  const brokenLinks = [];

  while (toVisit.length && visited.size < maxPages) {
    const current = toVisit.shift();
    if (!current || visited.has(current)) continue;
    visited.add(current);

    const pageRes = await fetchPage(current);
    const links = pageRes.ok ? extractLinks(current, pageRes.html) : [];

    pages.push({ url: current, status: pageRes.status, linkCount: links.length, ok: pageRes.ok });

    for (const l of links) {
      // only enqueue same-origin new pages
      if (!visited.has(l) && isSameOrigin(baseUrl, l)) {
        toVisit.push(l);
      }
    }

    // Check links on this page
    const checks = await Promise.all(links.map((l) => headOrGet(l).then((r) => ({ href: l, ...r }))));
    for (const res of checks) {
      if (!res.ok) brokenLinks.push({ from: current, href: res.href, status: res.status, error: res.error || null });
    }
  }

  // De-duplicate broken entries (same from+href)
  const uniqMap = new Map();
  for (const b of brokenLinks) {
    const key = `${b.from} -> ${b.href}`;
    if (!uniqMap.has(key)) uniqMap.set(key, b);
  }

  return {
    baseUrl,
    generatedAt: new Date().toISOString(),
    pagesScanned: pages.length,
    linksChecked: pages.reduce((sum, p) => sum + (p.linkCount || 0), 0),
    broken: Array.from(uniqMap.values()),
    pages,
  };
}

function renderHtmlReport(report) {
  const rows = report.broken.map((b) => `
    <tr>
      <td><a href="${b.from}" target="_blank" rel="noopener">${b.from}</a></td>
      <td><code>${b.status}</code></td>
      <td><a href="${b.href}" target="_blank" rel="noopener">${b.href}</a></td>
      <td>${b.error ? b.error.replace(/</g,'&lt;') : ''}</td>
    </tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Link Integrity Report</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #e5e7eb; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
    code { background: #f3f4f6; padding: 1px 4px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Link Integrity Report</h1>
  <p><strong>Base:</strong> ${report.baseUrl} &nbsp; • &nbsp; <strong>Generated:</strong> ${report.generatedAt}</p>
  <p><strong>Pages scanned:</strong> ${report.pagesScanned} &nbsp; • &nbsp; <strong>Links checked:</strong> ${report.linksChecked} &nbsp; • &nbsp; <strong>Broken:</strong> ${report.broken.length}</p>
  <table>
    <thead>
      <tr><th>From page</th><th>Status</th><th>Broken link</th><th>Error</th></tr>
    </thead>
    <tbody>
      ${rows || '<tr><td colspan="4">No issues found.</td></tr>'}
    </tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const defaultBase = process.env.SITE_BASE_URL || process.env.SITEMAP_BASE_URL || process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://zion.app';
  const baseUrl = (process.argv[2] && process.argv[2].startsWith('http')) ? process.argv[2] : defaultBase;

  ensureDir(REPORT_JSON_DIR);
  ensureDir(REPORT_HTML_DIR);

  const report = await crawl({ baseUrl, maxPages: Number(process.env.LINK_CRAWL_MAX || 500) });

  const jsonPath = path.join(REPORT_JSON_DIR, 'latest.json');
  const htmlPath = path.join(REPORT_HTML_DIR, 'index.html');

  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_JSON_DIR, `report-${Date.now()}.json`), JSON.stringify(report, null, 2));
  fs.writeFileSync(htmlPath, renderHtmlReport(report));

  console.log(`Link crawl complete. Pages: ${report.pagesScanned}. Broken: ${report.broken.length}.`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`HTML: ${htmlPath}`);
}

if (require.main === module) {
  main().catch((e) => { console.error(e); process.exit(1); });
}