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
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'structured-data-auditor/1.0' } });
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

function parseJsonLdFromHtml(html) {
  const $ = cheerio.load(html || '');
  const blocks = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const text = $(el).text();
    try {
      const json = JSON.parse(text);
      const types = [];
      const collect = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        if (obj['@type']) types.push(Array.isArray(obj['@type']) ? obj['@type'].join(',') : String(obj['@type']));
        if (Array.isArray(obj)) obj.forEach(collect);
        else Object.values(obj).forEach(collect);
      };
      collect(json);
      blocks.push({ json, types: Array.from(new Set(types)) });
    } catch (e) {
      blocks.push({ error: 'invalid-json' });
    }
  });
  return blocks;
}

function buildHtmlReport(summary) {
  const rows = (summary.pages || []).map(p => `
    <tr>
      <td style="padding:6px 10px;border-bottom:1px solid #1f2937;color:#e5e7eb">${p.url}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #1f2937;color:${p.hasJsonLd ? '#10b981' : '#f43f5e'}">${p.hasJsonLd ? 'Yes' : 'No'}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #1f2937;color:#e5e7eb">${(p.types || []).join(' · ')}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #1f2937;color:#eab308">${(p.issues || []).join('<br/>')}</td>
    </tr>
  `).join('');
  const typeRows = Object.entries(summary.byTypeCount || {}).sort((a,b)=>b[1]-a[1]).map(([t,c])=>`
    <div style="margin:2px 0">${t}: <strong>${c}</strong></div>
  `).join('');
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Structured Data Audit</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;background:#0b1020;font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e5e7eb">
  <div style="max-width:1100px;margin:24px auto;padding:0 16px">
    <h1 style="margin:0 0 8px;font-size:28px;font-weight:700;background:linear-gradient(90deg,#f0abfc,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent">Structured Data Audit</h1>
    <div style="opacity:.8;margin-bottom:12px">Generated at ${summary.generatedAt}</div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin:12px 0">
      <div style="background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px">Pages scanned: <strong>${summary.totalPages}</strong></div>
      <div style="background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px">With JSON‑LD: <strong>${summary.withJsonLd}</strong></div>
      <div style="background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px">Coverage: <strong>${summary.coveragePercent.toFixed(1)}%</strong></div>
    </div>
    <h2 style="margin:16px 0 8px;font-size:18px">Types</h2>
    <div>${typeRows || '<em>No types found</em>'}</div>
    <h2 style="margin:16px 0 8px;font-size:18px">Pages</h2>
    <div style="overflow:auto;border-radius:12px;border:1px solid #1f2937">
      <table style="width:100%;border-collapse:collapse;background:#0f172a">
        <thead>
          <tr>
            <th style="text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937">URL</th>
            <th style="text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937">JSON‑LD</th>
            <th style="text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937">Types</th>
            <th style="text-align:left;padding:8px 10px;border-bottom:1px solid #1f2937">Issues</th>
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

(async function main() {
  const baseUrl = getBaseUrl();
  const sitemapXml = await fetchText(`${baseUrl}/sitemap.xml`);
  let urls = extractUrlsFromSitemap(sitemapXml);
  if (urls.length === 0) {
    urls = [
      '/', '/main/front', '/automation', '/newsroom', '/reports/seo', '/reports/ai-trends'
    ].map(p => `${baseUrl}${p}`);
  }
  const limit = Math.min(urls.length, 60);
  urls = urls.slice(0, limit);

  const pages = [];
  for (const url of urls) {
    const html = await fetchText(url);
    const blocks = parseJsonLdFromHtml(html || '');
    const hasJsonLd = (blocks || []).some(b => !b.error);
    const types = Array.from(new Set(blocks.flatMap(b => b.types || []))).filter(Boolean);
    const issues = [];
    if (!hasJsonLd) issues.push('missing-json-ld');
    if (hasJsonLd && types.length === 0) issues.push('types-not-detected');
    pages.push({ url, hasJsonLd, types, issues });
  }

  const withJsonLd = pages.filter(p => p.hasJsonLd).length;
  const byTypeCount = {};
  for (const p of pages) for (const t of p.types) byTypeCount[t] = (byTypeCount[t] || 0) + 1;

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    totalPages: pages.length,
    withJsonLd,
    coveragePercent: pages.length ? (withJsonLd / pages.length) * 100 : 0,
    byTypeCount,
    pages
  };

  const ROOT = process.cwd();
  const outDir = path.join(ROOT, 'public', 'reports', 'structured-data');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'index.html'), buildHtmlReport(summary), 'utf8');

  console.log(`Structured Data Audit complete. Pages=${pages.length} coverage=${summary.coveragePercent.toFixed(1)}%`);
})();