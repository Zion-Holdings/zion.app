#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(process.cwd(), 'pages');
const DATA_DIR = path.join(process.cwd(), 'data', 'page-metadata');
const OUTPUT = path.join(DATA_DIR, 'overrides.json');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function toRoute(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/');
  if (!/\.(tsx|ts|js|jsx)$/.test(rel)) return null;
  if (rel.startsWith('api/') || rel.startsWith('_')) return null;
  const noExt = rel.replace(/\.(tsx|ts|js|jsx)$/i, '');
  const indexless = noExt.endsWith('/index') ? noExt.slice(0, -6) : noExt;
  return '/' + indexless.replace(/\[(.+?)\]/g, '$1');
}

function humanize(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function deriveTitle(route) {
  if (route === '/') return 'Home';
  const parts = route.split('/').filter(Boolean);
  return humanize(parts[parts.length - 1]);
}

function deriveDescription(route) {
  const base = deriveTitle(route);
  if (route.startsWith('/blog')) return `${base}: insights and analysis from Zion Tech Solutions.`;
  if (route.startsWith('/services')) return `${base} services by Zion Tech Solutions.`;
  if (route.startsWith('/category')) return `${base} category at Zion Tech Solutions.`;
  if (route.startsWith('/talent')) return `${base} — explore talent profiles at Zion.`;
  return `${base} — Zion Tech Solutions.`;
}

function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const files = walk(PAGES_DIR);
  const routes = Array.from(new Set(files.map(toRoute).filter(Boolean))).sort();
  const overrides = {};
  for (const r of routes) {
    overrides[r] = {
      title: deriveTitle(r),
      description: deriveDescription(r),
      ogImage: `/og${r === '/' ? '/home' : r}.png`.replace(/\/\//g, '/'),
    };
  }
  fs.writeFileSync(OUTPUT, JSON.stringify({ generatedAt: new Date().toISOString(), routes: overrides }, null, 2));
  console.log(`Generated SEO overrides for ${routes.length} routes → ${path.relative(process.cwd(), OUTPUT)}`);
}

if (require.main === module) main();