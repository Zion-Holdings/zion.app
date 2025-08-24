#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const RESEARCH_DIR = path.join(__dirname, 'research');
const AUTO_DIR = path.join(__dirname, 'innovations-auto');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
if (!fs.existsSync(RESEARCH_DIR)) fs.mkdirSync(RESEARCH_DIR, { recursive: true });
if (!fs.existsSync(AUTO_DIR)) fs.mkdirSync(AUTO_DIR, { recursive: true });

const LOG = path.join(LOG_DIR, 'innovation-orchestrator.log');

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function sanitize(name) { return name.replace(/[^a-z0-9\-_.]/gi, '-').toLowerCase(); }

function findLatestResearch() {
  const files = fs.readdirSync(RESEARCH_DIR).filter(f => f.startsWith('ai-trends-') && f.endsWith('.json'));
  if (!files.length) return null;
  files.sort();
  return path.join(RESEARCH_DIR, files[files.length - 1]);
}

function makeAgentCode(agentName, hint) {
  const escaped = (hint || '').replace(/`/g, '\\`');
  return `#!/usr/bin/env node\nconst fs = require('fs');\nconst path = require('path');\nconsole.log('[innovation-agent] ${agentName}');\nconst logDir = path.join(__dirname, 'logs');\ntry { fs.mkdirSync(logDir, { recursive: true }); } catch {}\nfs.appendFileSync(path.join(logDir, '${sanitize(agentName)}.log'), '['+new Date().toISOString()+'] hint: ${escaped}\n');\n// TODO: extend with concrete POC based on the hint.\n`;
}

function createAgentsFromFindings(research) {
  const created = [];
  const data = JSON.parse(fs.readFileSync(research, 'utf8'));
  const items = [];
  for (const f of data.findings || []) {
    for (const it of f.items || []) {
      if (/agent|autonomous|framework|SDK|tool|benchmark|release/i.test(it)) items.push(it);
    }
  }
  const unique = Array.from(new Set(items)).slice(0, 20);
  for (const idea of unique) {
    const name = `innovation-${sanitize(idea).slice(0, 48)}`;
    const outPath = path.join(AUTO_DIR, `${name}.cjs`);
    if (!fs.existsSync(outPath)) {
      fs.writeFileSync(outPath, makeAgentCode(name, idea));
      try { fs.chmodSync(outPath, 0o755); } catch {}
      created.push(outPath);
    }
  }
  return created;
}

function main(mode = 'once') {
  log('🚀 Innovation Orchestrator start');
  const target = findLatestResearch();
  if (!target) {
    log('ℹ️ No research found yet. Run ai-trends-researcher first.');
    return;
  }
  const created = createAgentsFromFindings(target);
  log(`✅ Created ${created.length} innovation agents`);
  if (created.length) {
    fs.writeFileSync(path.join(LOG_DIR, 'innovation-registry.json'), JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  }
  if (mode === 'continuous') {
    setTimeout(() => main('continuous'), 30 * 60 * 1000);
  }
}

if (require.main === module) {
  main(process.argv[2] || 'once');
}