#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const url = require('url');

const WORKSPACE = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(WORKSPACE, 'pages');
const PUBLIC_DIR = path.join(WORKSPACE, 'public');
const LINK_REPORT = path.join(WORKSPACE, 'link_report.csv');

function getRoutes(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  for (const e of entries) {
    if (e.name.startsWith('_')) continue;
    if (e.isDirectory()) {
      if (e.name === 'api') continue;
      routes.push(...getRoutes(path.join(dir, e.name), base + '/' + e.name));
    } else if (e.isFile()) {
      if (!e.name.match(/\.(tsx|jsx|mdx|js|ts)$/)) continue;
      const name = e.name.replace(/\.(tsx|jsx|mdx|js|ts)$/, '');
      if (name === 'index') routes.push(base || '/');
      else if (!name.startsWith('[')) routes.push(base + '/' + name);
    }
  }
  return Array.from(new Set(routes)).sort();
}

function readCsv(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const lines = raw.split(/\r?\n/).filter(Boolean);
    const header = lines.shift();
    const cols = header.split(',');
    const rows = lines.map(l => {
      const parts = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < l.length; i += 1) {
        const ch = l[i];
        if (ch === '"') { inQuotes = !inQuotes; continue; }
        if (ch === ',' && !inQuotes) { parts.push(current); current = ''; }
        else { current += ch; }
      }
      parts.push(current);
      const obj = {};
      cols.forEach((c, idx) => obj[c] = (parts[idx] ?? '').trim());
      return obj;
    });
    return rows;
  } catch { return []; }
}

function pathOf(u) {
  try { return new url.URL(u).pathname || '/'; }
  catch { try { return new url.URL('https://example.com' + (u.startsWith('/') ? '' : '/') + u).pathname; } catch { return '/'; } }
}

function buildPopularity(routes, rows) {
  const counts = new Map(routes.map(r => [r, 0]));
  for (const row of rows) {
    const internal = String(row.is_internal || '').toLowerCase() === 'true';
    if (!internal) continue;
    const p1 = pathOf(row.link_url || '');
    const p2 = pathOf(row.final_url || '');
    if (counts.has(p1)) counts.set(p1, counts.get(p1) + 1);
    if (counts.has(p2)) counts.set(p2, counts.get(p2) + 1);
  }
  const max = Math.max(1, ...counts.values());
  const score = new Map();
  for (const r of routes) {
    const c = counts.get(r) || 0;
    const normalized = c / max;
    // home should top at 1.0
    const priority = r === '/' ? 1.0 : Math.min(1.0, 0.4 + 0.6 * normalized);
    const changefreq = priority > 0.85 ? 'daily' : priority > 0.6 ? 'weekly' : 'monthly';
    score.set(r, { priority: priority.toFixed(2), changefreq });
  }
  return score;
}

function renderSitemap(baseUrl, routes, scores) {
  const lastmod = new Date().toISOString();
  const body = routes.map(r => {
    const { priority, changefreq } = scores.get(r) || { priority: '0.5', changefreq: 'monthly' };
    return (
      `  <url>\n` +
      `    <loc>${baseUrl}${r}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`
    );
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

(function main() {
  const baseUrl = process.env.SITEMAP_BASE_URL || 'https://ziontechgroup.com';
  const routes = getRoutes(PAGES_DIR);
  const rows = readCsv(LINK_REPORT);
  const scores = buildPopularity(routes, rows);
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  const xml = renderSitemap(baseUrl, routes, scores);
  const out = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(out, xml);
  console.log(`[sitemap-prioritizer] Wrote ${out} with ${routes.length} routes.`);
})();