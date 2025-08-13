#!/usr/bin/env node

/*
  Cloud Content Advertiser
  - Reads public/automation/content-registry.json
  - Ensures Explore and Reports indexes include/reflect the newest content
  - Can emit lightweight promo items under public/automation/new-content-registry.json
*/

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function loadRegistry() {
  const registryPath = path.join(process.cwd(), 'public', 'automation', 'content-registry.json');
  try { return JSON.parse(fs.readFileSync(registryPath, 'utf8')); } catch { return { items: [] }; }
}

function promoteToExplore(reg) {
  const explorePath = path.join(process.cwd(), 'pages', 'explore', 'index.tsx');
  if (!fs.existsSync(explorePath)) return;
  let content = fs.readFileSync(explorePath, 'utf8');
  const items = (reg.items || []).slice(0, 6);
  const promos = items.map((it) => ({ href: it.href, title: it.title, desc: it.desc || 'New autonomous content' }));

  const marker = '// AUTO-GENERATED: EXPLORE_PROMOS';
  const block = `${marker}\n  const promos = ${JSON.stringify(promos, null, 2)};`;
  if (content.includes(marker)) {
    content = content.replace(new RegExp(`${marker}[\s\S]*$`), block);
  } else {
    content = content.replace('const tiles: Array<{ href: string; title: string; desc: string }> = [', `${block}\n\n  const tiles: Array<{ href: string; title: string; desc: string }> = [`);
  }
  fs.writeFileSync(explorePath, content);
}

function writePublicPromoFeed(reg) {
  const outDir = path.join(process.cwd(), 'public', 'automation');
  ensureDir(outDir);
  const outPath = path.join(outDir, 'new-content-registry.json');
  const payload = { generatedAt: new Date().toISOString(), items: (reg.items || []).slice(0, 30) };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
}

function main() {
  const registry = loadRegistry();
  promoteToExplore(registry);
  writePublicPromoFeed(registry);
  console.log('Cloud Content Advertiser ran successfully.');
}

if (require.main === module) {
  main();
}

module.exports = { main };


