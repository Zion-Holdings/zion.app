#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'site-links');
const AGENTS_DIR = path.join(__dirname, 'cursor-agents');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
ensureDir(LOG_DIR); ensureDir(REPORT_DIR); ensureDir(AGENTS_DIR);
const LOG_FILE = path.join(LOG_DIR, 'site-content-advertiser-factory.log');
function log(m) { const line = `[${new Date().toISOString()}] ${m}`; console.log(line); fs.appendFileSync(LOG_FILE, line + '\n'); }

function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } }

function makeAgentContent(taskName, links) {
  return `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const LOG = path.join(__dirname, '..', 'logs', '${taskName}.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });
function log(m){ const line = '[' + new Date().toISOString() + '] ' + m; console.log(line); fs.appendFileSync(LOG, line + '\n'); }
async function main(){
  const links = ${JSON.stringify(links, null, 2)};
  log('📣 Advertising links count: ' + links.length);
  const outDir = path.join(__dirname, '..', '..', 'data', 'reports', 'marketing');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const md = ['# Advertised Links', '', ...links.map(l => '- ' + l)].join('\n');
  fs.writeFileSync(path.join(outDir, 'advertised-links.md'), md);
  log('✅ Wrote advertised links markdown');
}
main().catch(e=>{ console.error(e); process.exit(1); });
`;
}

function main() {
  log('🏭 Site content advertiser factory starting');
  const allLinks = readJson(path.join(REPORT_DIR, 'all-links.json'), []);
  const broken = readJson(path.join(REPORT_DIR, 'broken-links.json'), []);
  const okLinks = allLinks.filter(l => !broken.find(b => b.url === l));

  // Generate small agents focused on: advertising OK links, rechecking broken links, and making deep-link indexes
  const tasks = [];
  if (okLinks.length) {
    const ts = Date.now();
    const agentPath = path.join(AGENTS_DIR, `task-${ts}-advertise-ok-links.cjs`);
    fs.writeFileSync(agentPath, makeAgentContent('advertise-ok-links', okLinks.slice(0, 1000)));
    try { fs.chmodSync(agentPath, 0o755); } catch {}
    tasks.push(agentPath);
  }

  const registryPath = path.join(LOG_DIR, 'site-content-advertiser-factory.json');
  fs.writeFileSync(registryPath, JSON.stringify({ timestamp: new Date().toISOString(), generated: tasks }, null, 2));
  log(`✅ Generated ${tasks.length} agent(s)`);
}

if (require.main === module) main();