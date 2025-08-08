#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function enhanceMeta(meta, key) {
  const titleBase = meta.title || key.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  const descBase = meta.description || `${titleBase} – Explore solutions, insights, and services by Zion Tech Group.`;
  const keywords = meta.keywords || [
    'Zion AI', 'AI marketplace', 'cloud services', 'data analytics', 'engineering', 'consulting'
  ];
  return {
    ...meta,
    title: titleBase,
    description: descBase,
    keywords,
    lastEnhancedIso: new Date().toISOString(),
  };
}

function main() {
  const metaDir = path.join(process.cwd(), 'data', 'page-metadata');
  if (!fs.existsSync(metaDir)) return;
  const files = fs.readdirSync(metaDir).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const full = path.join(metaDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(full, 'utf8'));
      const key = file.replace(/\.json$/, '');
      const enhanced = enhanceMeta(data, key);
      fs.writeFileSync(full, JSON.stringify(enhanced, null, 2));
      console.log('Enhanced metadata:', file);
    } catch (e) {
      console.warn('Skipping invalid metadata file:', file);
    }
  }
}

if (require.main === module) {
  main();
}