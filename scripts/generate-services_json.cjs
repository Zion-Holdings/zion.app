#!/usr/bin/env node
/**
 * generate-services_json.cjs
 * Generates out/services.json from out/service-index.json
 * This is a simple data transformation that the sitemap generator and
 * other postbuild steps consume. Creates a compact services list for the API.
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const idxFile = path.join(outDir, 'service-index.json');
const outFile = path.join(outDir, 'services.json');

function main() {
  if (!fs.existsSync(idxFile)) {
    console.error('service-index.json not found. Run generate_service_index.cjs first.');
    process.exit(1);
  }

  const idx = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
  const services = idx.services || [];

  // Build compact services array for API consumption
  const compact = services.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    category: s.category,
    popular: s.popular,
    href: s.href,
  }));

  const output = {
    generated: new Date().toISOString(),
    count: services.length,
    categories: idx.categories || {},
    services: compact,
  };

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(output, null, 2));
  console.log(`services.json: ${services.length} services → ${outFile}`);

  // Also write to public/ for direct GitHub Pages serving
  const publicOutFile = path.join(process.cwd(), 'public', 'services.json');
  fs.mkdirSync(path.dirname(publicOutFile), { recursive: true });
  fs.writeFileSync(publicOutFile, JSON.stringify(output, null, 2));
  console.log(`public/services.json: ${services.length} services → ${publicOutFile}`);
}

try { main(); } catch(e) { console.error(e); process.exit(1); }
