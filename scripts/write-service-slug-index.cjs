#!/usr/bin/env node
// scripts/write-service-slug-index.cjs
// Scans out/services/*/index.html and writes out/data/service-slug-index.json
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(path.join(__dirname, '..', 'out'));
const svcDir = path.join(outDir, 'services');
const outFile = path.join(outDir, 'data', 'service-slug-index.json');

const slugs = [];
if (fs.existsSync(svcDir)) {
  for (const entry of fs.readdirSync(svcDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (['stage', '__next'].includes(entry.name)) continue;
    const idx = path.join(svcDir, entry.name, 'index.html');
    if (fs.existsSync(idx)) {
      slugs.push({ slug: entry.name, path: `services/${entry.name}/`, status: 'present' });
    }
  }
}

const payload = { generated: new Date().toISOString(), count: slugs.length, slugs };
fs.mkdirSync(path.join(outDir, 'data'), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
console.log(`service-slug-index.json: ${payload.count} slugs -> ${outFile}`);
