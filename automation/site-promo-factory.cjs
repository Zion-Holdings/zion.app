#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROMO_REPORT = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo', 'homepage-promo-actions.json');
const OUT_DIR = path.join(__dirname, 'site-promo-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function createAgent(type, data) {
  const title = `Automate homepage updates for ${data.count} page(s)`;
  const body = `#!/usr/bin/env node\nconsole.log(${JSON.stringify(title)});\n// TODO: leverage homepage-promo-applier to ensure all pages have links/cards\n`;
  return body;
}

function main() {
  if (!fs.existsSync(PROMO_REPORT)) { console.error('No homepage promo report found'); process.exit(1); }
  const report = JSON.parse(fs.readFileSync(PROMO_REPORT, 'utf8'));
  ensureDir(OUT_DIR);
  const fp = path.join(OUT_DIR, 'ensure-homepage-links.cjs');
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, createAgent('homepage', { count: (report.discoveredPages || []).length }));
    try { fs.chmodSync(fp, 0o755); } catch {}
  }
  const registry = path.join(__dirname, 'logs', 'site-promo-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created: [fp] }, null, 2));
  console.log('Site promo agents generated');
}

main();


