#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const META_DIR = path.resolve('data/page-metadata');
const OUT_DIR = path.resolve('data/structured-data');

function listMetaFiles() {
  if (!fs.existsSync(META_DIR)) return [];
  const out = [];
  for (const entry of fs.readdirSync(META_DIR)) {
    const full = path.join(META_DIR, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) continue;
    if (entry.endsWith('.json')) out.push(full);
  }
  return out;
}

function toUrlPath(metaFilename) {
  // reverse mapping used in seo-auto-enhancer (rel replaced / with __)
  const base = path.basename(metaFilename, '.json');
  return '/' + base.replace(/__+/g, '/');
}

function toJsonLd(url, meta) {
  const site = process.env.SITE_ORIGIN || 'https://zion.app';
  const title = meta.title || 'Zion';
  const description = meta.description || 'Zion marketplace';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: site.replace(/\/$/, '') + url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Zion',
      url: site.replace(/\/$/, ''),
    },
  };
}

(() => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let changed = 0;
  const files = listMetaFiles();
  for (const f of files) {
    let meta = null;
    try { meta = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { continue; }
    const url = toUrlPath(f);
    const jsonld = toJsonLd(url, meta);
    const outPath = path.join(OUT_DIR, path.basename(f).replace(/\.json$/, '.jsonld.json'));
    let current = null;
    try { current = JSON.parse(fs.readFileSync(outPath, 'utf8')); } catch {}
    if (!current || JSON.stringify(current) !== JSON.stringify(jsonld)) {
      fs.writeFileSync(outPath, JSON.stringify(jsonld, null, 2) + '\n');
      console.log('[jsonld] Wrote', outPath);
      changed += 1;
    }
  }
  console.log(`[jsonld] Completed. Files changed: ${changed}`);
})();