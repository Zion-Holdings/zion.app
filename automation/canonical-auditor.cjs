#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

function getBaseUrl() {
  const raw = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').trim();
  if (raw) return raw.replace(/\/$/, '');
  return 'https://example.org';
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function fetchText(url, timeoutMs = 15000) {
  try {
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'canonical-auditor/1.0' } });
    return res.data;
  } catch (err) {
    return null;
  }
}

function extractUrlsFromSitemap(xml) {
  if (!xml) return [];
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/gi;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    const loc = match[1].trim();
    if (loc) urls.push(loc);
  }
  return Array.from(new Set(urls));
}

function analyzeCanonical(html, pageUrl) {
  const $ = cheerio.load(html || '');
  const href = $('link[rel="canonical"]').attr('href') || '';
  const issues = [];
  let normalized = href;
  try {
    const canon = new URL(href || pageUrl, pageUrl);
    const page = new URL(pageUrl);
    normalized = canon.toString();
    if (canon.origin !== page.origin) issues.push('canonical-cross-origin');
    if (canon.search) issues.push('canonical-has-query');
    if (canon.hash) issues.push('canonical-has-fragment');
  } catch {
    issues.push('canonical-invalid');
  }
  if (!href) issues.push('canonical-missing');
  return { href: normalized || '', issues };
}

function buildHtmlReport(summary) {
  const rows = (summary.pages || []).map(p => `
    <tr>
      <td style=\"padding:6px 10px;border-bottom:1px solid #1f2937;color:#e5e7eb\">${p.url}</td>
      <td style=\"padding:6px 10px;border-bottom:1px solid #1f2937;color:#93c5fd\">${p.canonical}</td>
      <td style=\"padding:6px 10px;border-bottom:1px solid #1f2937;color:#fbbf24\">${(p.issues || []).join('<br/>')}</td>
    </tr>
  `).join('');
  return `<!doctype html>
<html>
<head>
  <meta charset=\"utf-8\" />
  <title>Canonical Audit</title>
  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />
</head>
<body style=\"margin:0;background:#0b1020;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e5e7eb\">
  <div style=\"max-width:1100px;margin:24px auto;padding:0 16px\">
    <h1 style=\"margin:0 0 8px;font-size:28px;font-weight:700;background:linear-gradient(90deg,#60a5fa,#34d399);-webkit-background-clip:text;background-clip:text;color:transparent\">Canonical Audit</h1>
    <div style=\"opacity:.8;margin-bottom:12px\">Generated at ${summary.generatedAt}</div>
    <div style=\"display:flex;gap:16px;flex-wrap:wrap;margin:12px 0\">
      <div style=\"background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px\">Pages scanned: <strong>${summary.totalPages}</strong></div>
      <div style=\"background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px\">Missing canonical: <strong>${summary.missingCanon}</strong></div>
    </div>
    <div style=\"overflow:auto;border-radius:12px;border:1px solid #1f2937\">
      <table style=\"width:100%;border-collapse:collapse;background:#0f172a\">
        <thead>
          <tr>
            <th style=\"text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937\">URL</th>
            <th style=\"text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937\">Canonical</th>
            <th style=\"text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937\">Issues</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>`;
}

(async function main(){
  const baseUrl = (getBaseUrl());
  const sitemapXml = await fetchText(`${baseUrl}/sitemap.xml`);
  let urls = extractUrlsFromSitemap(sitemapXml);
  if (urls.length === 0) {
    urls = ['/', '/main/front', '/automation', '/newsroom'].map(p => `${baseUrl}${p}`);
  }
  const limit = Math.min(urls.length, 60);
  urls = urls.slice(0, limit);

  const pages = [];
  for (const url of urls) {
    const html = await fetchText(url);
    const { href, issues } = analyzeCanonical(html || '', url);
    pages.push({ url, canonical: href, issues });
  }

  const missingCanon = pages.filter(p => p.issues.includes('canonical-missing')).length;
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    totalPages: pages.length,
    missingCanon,
    pages
  };

  const ROOT = process.cwd();
  const outDir = path.join(ROOT, 'public', 'reports', 'canonical');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'index.html'), buildHtmlReport(summary), 'utf8');

  console.log('Canonical audit complete');
})();