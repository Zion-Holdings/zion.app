#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'site-links');
const HUMAN_REPORT_DIR = path.join(process.cwd(), 'public', 'reports', 'links');
const NEXT_CONFIG_FILE = path.join(process.cwd(), 'next.config.js');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function loadLatestReport() {
  const latestPath = path.join(REPORT_DIR, 'latest.json');
  if (!fs.existsSync(latestPath)) return null;
  try { return JSON.parse(fs.readFileSync(latestPath, 'utf8')); } catch { return null; }
}

function generateRedirects(missingPaths) {
  // Conservative: redirect missing internal paths to the homepage
  // Avoid duplicates and avoid existing '/'
  const unique = Array.from(new Set(missingPaths.map((m) => m.path))).filter((p) => p && p !== '/');
  return unique.map((p) => ({ source: p, destination: '/', permanent: true }));
}

function mergeRedirectsIntoNextConfig(redirectsToAdd) {
  let source = fs.readFileSync(NEXT_CONFIG_FILE, 'utf8');

  // Try to locate existing redirects() array and merge into it.
  const redirectsFuncRegex = /async\s+redirects\s*\(\)\s*{[\s\S]*?return\s*\[([\s\S]*?)\];[\s\S]*?}/m;
  const match = source.match(redirectsFuncRegex);

  if (match) {
    const existingArrayBody = match[1].trim();
    // Parse existing entries by a simple heuristic; we will append new JSON
    const existingEntriesText = existingArrayBody.length ? existingArrayBody + ',\n' : '';
    const appended = existingEntriesText + redirectsToAdd.map((r) => `      { source: '${r.source}', destination: '${r.destination}', permanent: ${r.permanent} }`).join(',\n');
    const newFunc = match[0].replace(existingArrayBody, appended);
    source = source.replace(redirectsFuncRegex, newFunc);
  } else {
    // No redirects() defined; add one to nextConfig
    const nextConfigRegex = /const\s+nextConfig\s*=\s*{([\s\S]*?)};\s*\n/m;
    const m2 = source.match(nextConfigRegex);
    const redirectsText = `  async redirects() {\n    return [\n${redirectsToAdd.map((r) => `      { source: '${r.source}', destination: '${r.destination}', permanent: ${r.permanent} }`).join(',\n')}\n    ];\n  },\n`;
    if (m2) {
      const body = m2[1];
      const bodyWithRedirects = (body.trim().length ? body.replace(/\n$/, '') + '\n' : '') + redirectsText;
      const replaced = m2[0].replace(m2[1], bodyWithRedirects);
      source = source.replace(nextConfigRegex, replaced);
    } else {
      // Fallback: recreate minimal next.config.js
      source = `/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  async redirects() {\n    return [\n${redirectsToAdd.map((r) => `      { source: '${r.source}', destination: '${r.destination}', permanent: ${r.permanent} }`).join(',\n')}\n    ];\n  },\n};\n\nmodule.exports = nextConfig;\n`;
    }
  }

  fs.writeFileSync(NEXT_CONFIG_FILE, source);
}

function writeHumanReport(report, addedRedirects) {
  ensureDir(HUMAN_REPORT_DIR);
  const html = `<!doctype html><html><head><meta charset="utf-8"/><title>Link Integrity Report</title><style>body{font-family:system-ui;margin:24px;}table{border-collapse:collapse;width:100%;}th,td{border:1px solid #ddd;padding:6px;font-size:14px;}th{background:#f7f7f7;text-align:left}</style></head><body><h1>Link Integrity Report</h1><p>Generated: ${new Date().toLocaleString()}</p><h2>Stats</h2><ul><li>Pages crawled: ${report?.stats?.pagesCrawled || 0}</li><li>Discovered internal: ${report?.stats?.discoveredInternal || 0}</li><li>Missing internal: ${report?.stats?.missing || 0}</li><li>Redirects added: ${addedRedirects.length}</li></ul><h2>Missing Internal Paths</h2><table><thead><tr><th>Path</th><th>Status</th></tr></thead><tbody>${(report?.missingInternalPaths || []).map(m => `<tr><td>${m.path}</td><td>${m.status}</td></tr>`).join('')}</tbody></table><h2>New Redirects</h2><table><thead><tr><th>Source</th><th>Destination</th><th>Permanent</th></tr></thead><tbody>${addedRedirects.map(r => `<tr><td>${r.source}</td><td>${r.destination}</td><td>${r.permanent}</td></tr>`).join('')}</tbody></table></body></html>`;
  fs.writeFileSync(path.join(HUMAN_REPORT_DIR, 'index.html'), html);
}

function main() {
  const report = loadLatestReport();
  if (!report) {
    console.log('No crawl report found. Run site-link-crawler first.');
    process.exit(0);
  }
  const redirects = generateRedirects(report.missingInternalPaths || []);
  if (!redirects.length) {
    console.log('No missing internal paths detected.');
    writeHumanReport(report, []);
    return;
  }
  mergeRedirectsIntoNextConfig(redirects);
  writeHumanReport(report, redirects);
  console.log(`Added ${redirects.length} redirects to next.config.js`);
}

main();