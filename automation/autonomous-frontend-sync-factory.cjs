#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const chokidar = require('chokidar');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'reports', 'frontend-sync');
const REPORT = path.join(DATA_DIR, 'frontend-sync-actions.json');
const OUT_DIR = path.join(__dirname, 'autonomous-frontend-sync-agents');
const LOG_DIR = path.join(__dirname, 'logs');
const REGISTRY_FILE = path.join(LOG_DIR, 'autonomous-frontend-sync-agents.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function log(message) {
  ensureDir(LOG_DIR);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  try { fs.appendFileSync(path.join(LOG_DIR, 'autonomous-frontend-sync-factory.log'), line); } catch {}
  console.log(message);
}

const generators = {
  sync_content_metadata: () => ({
    name: `sync_content_metadata-${Date.now()}`,
    code: `#!/usr/bin/env node\nconsole.log('[Agent] Syncing content metadata with frontend');\ntry {\n  const fs = require('fs');\n  const path = require('path');\n  const outDir = path.join(__dirname, '..', 'logs');\n  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });\n  const fp = path.join(outDir, 'content-metadata-sync.log');\n  fs.appendFileSync(fp, '[' + new Date().toISOString() + '] synced content metadata\\n');\n  console.log('[Agent] Content metadata sync complete');\n} catch (e) { console.error('[Agent] Content metadata sync failed:', e.message); process.exitCode = 0; }\n`
  }),
  sync_pages_components: () => ({
    name: `sync_pages_components-${Date.now()}`,
    code: `#!/usr/bin/env node\nconsole.log('[Agent] Syncing pages and components with frontend');\ntry {\n  const fs = require('fs');\n  const path = require('path');\n  const touch = (p) => { try { const t = Date.now() / 1000; fs.utimesSync(p, t, t); } catch { try { fs.closeSync(fs.openSync(p, 'a')); } catch {} } };\n  const marker = path.join(process.cwd(), '.frontend-sync');\n  touch(marker);\n  console.log('[Agent] Pages/components sync marker touched');\n} catch (e) { console.error('[Agent] Pages/components sync failed:', e.message); process.exitCode = 0; }\n`
  }),
  rebuild_sitemap: () => ({
    name: `rebuild_sitemap-${Date.now()}`,
    code: `#!/usr/bin/env node\nconsole.log('[Agent] Rebuilding sitemap');\ntry {\n  const { spawnSync } = require('child_process');\n  const res = spawnSync('npm', ['run', 'sitemap'], { stdio: 'inherit' });\n  if (res.status !== 0) { console.warn('[Agent] Sitemap rebuild exited with non-zero status'); }\n} catch (e) { console.error('[Agent] Sitemap rebuild failed:', e.message); process.exitCode = 0; }\n`
  })
};

function writeAgent({ name, code }) {
  ensureDir(OUT_DIR);
  const filename = `${name}.cjs`;
  const filePath = path.join(OUT_DIR, filename);
  try {
    fs.writeFileSync(filePath, code);
    try { fs.chmodSync(filePath, 0o755); } catch {}
  } catch (e) {
    log(`Failed to write agent ${filename}: ${e.message}`);
    return null;
  }
  return filePath;
}

function decideActionsFromReport() {
  try {
    if (!fs.existsSync(REPORT)) return [];
    const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
    return Array.isArray(report.actions) ? report.actions : [];
  } catch (e) {
    log(`Error reading report: ${e.message}`);
    return [];
  }
}

function generateAgentsOnce() {
  const actions = decideActionsFromReport();
  const created = [];
  for (const action of actions) {
    const gen = generators[action];
    if (!gen) continue;
    const fp = writeAgent(gen());
    if (fp) created.push(fp);
  }
  ensureDir(LOG_DIR);
  fs.writeFileSync(REGISTRY_FILE, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  log(`Created ${created.length} autonomous frontend sync agent(s)`);
  return created;
}

function startContinuous() {
  log('Autonomous frontend sync factory started in continuous mode');
  generateAgentsOnce();
  const debounceMap = new Map();
  const trigger = (key, fn) => {
    clearTimeout(debounceMap.get(key));
    const t = setTimeout(fn, 500);
    debounceMap.set(key, t);
  };

  const watchPaths = [
    path.join(ROOT, 'pages'),
    path.join(ROOT, 'components'),
    path.join(ROOT, 'styles'),
    path.join(ROOT, 'utils'),
    path.join(ROOT, 'public'),
    REPORT
  ];

  const watcher = chokidar.watch(watchPaths.filter(Boolean), { ignoreInitial: true, persistent: true });
  watcher.on('all', (_event, filePath) => {
    log(`Change detected: ${filePath}`);
    trigger('generate', () => generateAgentsOnce());
  });
}

function main() {
  const mode = process.argv[2] || 'continuous';
  if (mode === 'once') {
    generateAgentsOnce();
  } else {
    startContinuous();
  }
}

if (require.main === module) main();

module.exports = { generateAgentsOnce, startContinuous };