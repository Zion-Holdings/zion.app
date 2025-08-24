#!/usr/bin/env node
/*
  Service Catalog Sync
  - Scans pages/services for .json and .tsx pages
  - Merges entries into data/services/services.json
  - Ensures sorted, unique by slug, and consistent fields
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

function readJsonSafe(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function main(cwd = process.cwd()) {
  const servicesJsonPath = path.join(cwd, 'data', 'services', 'services.json');
  const servicesDir = path.join(cwd, 'pages', 'services');

  const existing = fs.existsSync(servicesJsonPath) ? readJsonSafe(servicesJsonPath) : [];
  const bySlug = new Map();
  if (Array.isArray(existing)) {
    for (const item of existing) {
      if (item && item.slug) {
        bySlug.set(item.slug, { ...item });
      }
    }
  }

  if (fs.existsSync(servicesDir)) {
    const entries = fs.readdirSync(servicesDir);

    for (const entry of entries) {
      const full = path.join(servicesDir, entry);
      const stat = fs.statSync(full);

      if (stat.isFile() && entry.endsWith('.json')) {
        const json = readJsonSafe(full) || {};
        const slug = String(json.slug || path.basename(entry, '.json'));
        const name = String(json.name || toTitleCaseFromSlug(slug));
        const next = {
          slug,
          name,
          description: json.description || null,
          category: json.category || null,
          priceRangeUSD: Array.isArray(json.priceRangeUSD) && json.priceRangeUSD.length === 2
            ? [Number(json.priceRangeUSD[0]), Number(json.priceRangeUSD[1])] : null,
          createdAt: json.createdAt || new Date().toISOString(),
        };
        bySlug.set(slug, { ...bySlug.get(slug), ...next });
      }
    }

    for (const entry of entries) {
      const full = path.join(servicesDir, entry);
      const stat = fs.statSync(full);
      if (stat.isFile() && entry.endsWith('.tsx') && entry !== 'index.tsx') {
        const slug = path.basename(entry, '.tsx');
        const prev = bySlug.get(slug) || {};
        const next = {
          slug,
          name: prev.name || toTitleCaseFromSlug(slug),
          description: prev.description || null,
          category: prev.category || null,
          priceRangeUSD: Array.isArray(prev.priceRangeUSD) && prev.priceRangeUSD.length === 2 ? prev.priceRangeUSD : null,
          createdAt: prev.createdAt || new Date().toISOString(),
        };
        bySlug.set(slug, { ...prev, ...next });
      }
    }
  }

  const out = Array.from(bySlug.values()).sort((a, b) => String(a.name).localeCompare(String(b.name)));
  fs.mkdirSync(path.dirname(servicesJsonPath), { recursive: true });
  fs.writeFileSync(servicesJsonPath, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`Updated ${servicesJsonPath} with ${out.length} services.`);
}

if (require.main === module) {
  main();
}

module.exports = { main };