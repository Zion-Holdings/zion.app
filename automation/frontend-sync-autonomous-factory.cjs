#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const REPORT = path.join(ROOT, 'data', 'reports', 'frontend-sync', 'autonomous', 'frontend-sync-autonomous-actions.json');
const OUT_DIR = path.join(__dirname, 'frontend-sync-autonomous-agents');
const REGISTRY = path.join(__dirname, 'logs', 'frontend-sync-autonomous-agents.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const generators = {
  sync_content_metadata: () => ({ name: 'sync_content_metadata', code: `#!/usr/bin/env node\nconsole.log('Autonomous: Syncing content metadata with frontend');\n// TODO: implement content metadata sync logic (e.g., update JSON manifests, meta tags)\n` }),
  sync_pages_components: () => ({ name: 'sync_pages_components', code: `#!/usr/bin/env node\nconsole.log('Autonomous: Syncing pages and components with frontend');\n// TODO: implement sync logic (e.g., check /pages and /components, trigger rebuild if needed)\n` }),
  rebuild_sitemap: () => ({ name: 'rebuild_sitemap', code: `#!/usr/bin/env node\nconsole.log('Autonomous: Rebuilding sitemap');\ntry { require('child_process').execSync('npm run sitemap', { stdio: 'inherit' }); } catch (e) { console.error('Sitemap rebuild failed:', e.message); process.exitCode = 1; }\n` }),
  refresh_styles: () => ({ name: 'refresh_styles', code: `#!/usr/bin/env node\nconsole.log('Autonomous: Refreshing styles (tailwind/postcss cache invalidation)');\n// TODO: implement style refresh (e.g., touch tailwind.config.js or rebuild)\n` }),
  refresh_auto_pages: () => ({ name: 'refresh_auto_pages', code: `#!/usr/bin/env node\nconsole.log('Autonomous: Refreshing auto pages');\n// TODO: implement any special handling for pages/auto content\n` })
};

function writeAgent({ name, code }) {
  const fp = path.join(OUT_DIR, `${name}.cjs`);
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, code);
    try { fs.chmodSync(fp, 0o755); } catch {}
  }
  return fp;
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No autonomous frontend sync report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  ensureDir(path.dirname(REGISTRY));
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const action of report.actions || []) {
    const gen = generators[action];
    if (!gen) continue;
    created.push(writeAgent(gen()));
  }
  fs.writeFileSync(REGISTRY, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created/ensured ${created.length} autonomous frontend sync agents`);
}

if (require.main === module) {
  main();
}

module.exports = { main };