#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const REPORT_DIR = path.join(DATA, 'reports', 'homepage-promo', 'autonomous');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function run(script) {
  try {
    require(script);
  } catch (e) {
    console.error(`❌ Failed to run ${script}:`, e.message);
  }
}

function createPromoSnippet() {
  ensureDir(REPORT_DIR);
  const file = path.join(REPORT_DIR, `snippet-${Date.now()}.md`);
  const content = `---\ntitle: Autonomous Front Page Update\ndate: ${new Date().toISOString()}\n---\n\n- New features and pages were added automatically.\n- The front page has been refreshed to showcase all categories.\n- Explore the latest in AI Services, Products, Talent, and more.\n`;
  fs.writeFileSync(file, content);
  return file;
}

function main() {
  // 1) Generate new pages
  run('./new-autonomous-pages-factory.cjs');
  // 2) Rebuild app pages manifest
  run('./site-map-generator.cjs');
  // 3) Produce promo snippet
  const snippet = createPromoSnippet();
  console.log('📝 Promo snippet created:', path.relative(ROOT, snippet));
}

if (require.main === module) {
  main();
}