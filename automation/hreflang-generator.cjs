#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const publicDir = path.join(ROOT, 'public');
const pagesDir = path.join(ROOT, 'pages');
const outFile = path.join(publicDir, 'hreflang.xml');
const locales = ['en', 'pt', 'es', 'ar'];

function getAllRoutes(dir, base = '') {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name.startsWith('api')) continue;
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) routes.push(...getAllRoutes(full, rel));
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
      const name = entry.name.replace(/index\.(tsx|jsx)$/, '').replace(/\.(tsx|jsx)$/, '');
      const route = '/' + path.join(base, name).replace(/\\/g, '/');
      routes.push(route.endsWith('/') ? route.slice(0, -1) : route);
    }
  }
  return Array.from(new Set(routes)).filter(Boolean);
}

function makeXml(routes) {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
  for (const r of routes) {
    lines.push('  <url>');
    for (const lng of locales) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${lng}" href="https://zion.app${r}" />`);
    }
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  return lines.join('\n');
}

function main() {
  const routes = getAllRoutes(pagesDir).filter((r) => !r.includes('/admin/') && !r.includes('/api/'));
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(outFile, makeXml(routes));
  console.log(`Wrote ${outFile}`);
}

main();