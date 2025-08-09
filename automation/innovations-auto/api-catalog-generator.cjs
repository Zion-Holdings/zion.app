#!/usr/bin/env node
/*
  API Catalog Generator
  - Scans pages/api recursively
  - Writes docs/api-catalog.json and docs/api-catalog.md
*/
const fs = require('fs');
const path = require('path');

function toTitleCaseFromSlug(slug) {
  return String(slug)
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function walk(dir) {
  const items = [];
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      items.push(...walk(full));
    } else if (stat.isFile() && /\.(ts|tsx|js)$/i.test(entry)) {
      const nameNoExt = entry.replace(/\.(ts|tsx|js)$/i, '');
      items.push({ fullPath: full, parts: [], name: nameNoExt });
    }
  }
  return items;
}

function collectApi(cwd = process.cwd()) {
  const apiDir = path.join(cwd, 'pages', 'api');
  const results = [];

  function recur(dir, baseParts = []) {
    const entries = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) recur(full, [...baseParts, entry]);
      else if (stat.isFile() && /\.(ts|tsx|js)$/i.test(entry)) {
        const nameNoExt = entry.replace(/\.(ts|tsx|js)$/i, '');
        const slug = [...baseParts, nameNoExt].join('/');
        results.push({ slug, name: toTitleCaseFromSlug(slug.replace(/^admin\//, '')), href: `/api/${slug}`, scope: slug.startsWith('admin/') ? 'admin-api' : 'api' });
      }
    }
  }

  recur(apiDir);
  // Dedupe
  const bySlug = new Map();
  for (const r of results) bySlug.set(r.slug, r);
  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function writeOutputs(items, cwd = process.cwd()) {
  const jsonPath = path.join(cwd, 'docs', 'api-catalog.json');
  const mdPath = path.join(cwd, 'docs', 'api-catalog.md');

  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(items, null, 2) + '\n', 'utf8');

  const lines = [];
  lines.push('# API Catalog');
  lines.push('');
  lines.push('| Endpoint | Scope |');
  lines.push('| --- | --- |');
  for (const item of items) {
    lines.push(`| ${item.href} | ${item.scope} |`);
  }
  lines.push('');
  fs.writeFileSync(mdPath, lines.join('\n') + '\n', 'utf8');
}

function main() {
  const items = collectApi(process.cwd());
  writeOutputs(items, process.cwd());
  console.log(`Generated API catalog with ${items.length} endpoints.`);
}

if (require.main === module) main();

module.exports = { main };