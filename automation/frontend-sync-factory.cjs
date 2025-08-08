#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const REPORT = path.join(ROOT, 'data', 'reports', 'frontend-sync', 'frontend-sync-actions.json');
const OUT_DIR = path.join(__dirname, 'frontend-sync-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const generators = {
  sync_content_metadata: () => ({ name: 'sync_content_metadata', code: `#!/usr/bin/env node\nconsole.log('Syncing content metadata with frontend');\n// TODO: implement content metadata sync logic\n` }),
  sync_pages_components: () => ({ name: 'sync_pages_components', code: `#!/usr/bin/env node\nconsole.log('Syncing pages and components with frontend');\n// TODO: implement pages/components sync logic\n` }),
  rebuild_sitemap: () => ({ name: 'rebuild_sitemap', code: `#!/usr/bin/env node\nconsole.log('Rebuilding sitemap');\n// TODO: implement sitemap rebuild logic\n` })
};

function writeAgent({ name, code }) {
  const fp = path.join(OUT_DIR, `${name}.cjs`);
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, code);
    try { fs.chmodSync(fp, 0o755); } catch {}
  }
  return fp;
}

function ensureReport() {
  if (fs.existsSync(REPORT)) return true;
  // Attempt to generate the report by running the analyzer once
  const analyzerPath = path.join(__dirname, 'frontend-sync-analyzer.cjs');
  if (fs.existsSync(analyzerPath)) {
    const res = spawnSync('node', [analyzerPath], { stdio: 'inherit' });
    return res.status === 0 && fs.existsSync(REPORT);
  }
  return false;
}

function main() {
  if (!ensureReport()) {
    console.error('No frontend sync report found and analyzer could not generate one');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const action of report.actions || []) {
    const gen = generators[action];
    if (!gen) continue;
    created.push(writeAgent(gen()));
  }
  const registry = path.join(__dirname, 'logs', 'frontend-sync-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created/ensured ${created.length} frontend sync agents`);
}

main();


