#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');

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
    const res = await axios.get(url, { timeout: timeoutMs, headers: { 'User-Agent': 'robots-auditor/1.0' } });
    return res.data;
  } catch (err) {
    return null;
  }
}

function analyzeRobots(content, baseUrl) {
  const issues = [];
  const warnings = [];
  const lines = (content || '').split(/\r?\n/).map(l => l.trim());
  const hasUserAgentStar = lines.some(l => /^User-agent:\s*\*/i.test(l));
  const sitemapLines = lines.filter(l => /^Sitemap:\s*https?:/i.test(l));
  const hasSitemap = sitemapLines.length > 0;
  if (!hasUserAgentStar) warnings.push('missing-ua-star');
  if (!hasSitemap) warnings.push('missing-sitemap');
  if (hasSitemap) {
    const wrongHost = sitemapLines.filter(l => {
      try {
        const url = new URL(l.replace(/^Sitemap:\s*/i, '').trim());
        return url.origin !== baseUrl;
      } catch { return true; }
    });
    if (wrongHost.length > 0) issues.push('sitemap-host-mismatch');
  }
  return { hasUserAgentStar, hasSitemap, sitemapLines, warnings, issues };
}

function buildHtmlReport(result, baseUrl) {
  const list = (arr) => arr.length ? arr.map(i => `<li>${i}</li>`).join('') : '<li>None</li>';
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Robots.txt Audit</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;background:#0b1020;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e5e7eb">
  <div style="max-width:900px;margin:24px auto;padding:0 16px">
    <h1 style="margin:0 0 8px;font-size:28px;font-weight:700;background:linear-gradient(90deg,#38bdf8,#a78bfa);-webkit-background-clip:text;background-clip:text;color:transparent">Robots.txt Audit</h1>
    <div style="opacity:.8;margin-bottom:12px">Base: ${baseUrl}</div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;margin:12px 0">
      <div style="background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px">Has UA *: <strong>${result.hasUserAgentStar ? 'Yes' : 'No'}</strong></div>
      <div style="background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:10px 12px">Has Sitemap: <strong>${result.hasSitemap ? 'Yes' : 'No'}</strong></div>
    </div>
    <h2 style="margin:16px 0 8px;font-size:18px">Sitemaps</h2>
    <ul>${list(result.sitemapLines)}</ul>
    <h2 style="margin:16px 0 8px;font-size:18px;color:#fbbf24">Warnings</h2>
    <ul>${list(result.warnings)}</ul>
    <h2 style="margin:16px 0 8px;font-size:18px;color:#f87171">Issues</h2>
    <ul>${list(result.issues)}</ul>
    <h2 style="margin:16px 0 8px;font-size:18px">Raw robots.txt</h2>
    <pre style="white-space:pre-wrap;background:#0f172a;border:1px solid #1f2937;border-radius:12px;padding:12px">${(result.raw || '').replace(/[&<>]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[s]))}</pre>
  </div>
</body>
</html>`;
}

(async function main(){
  const baseUrl = (getBaseUrl());
  const content = await fetchText(`${baseUrl}/robots.txt`);
  const analysis = analyzeRobots(content || '', baseUrl);
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    ...analysis,
    raw: content || ''
  };

  const ROOT = process.cwd();
  const outDir = path.join(ROOT, 'public', 'reports', 'robots');
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'index.html'), buildHtmlReport(summary, baseUrl), 'utf8');

  console.log('Robots audit complete');
})();