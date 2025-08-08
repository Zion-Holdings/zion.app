#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'design', 'design-analysis.json');
const OUT_DIR = path.join(__dirname, 'design-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function makeAgent(name, code) {
  const fp = path.join(OUT_DIR, `${name}.cjs`);
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, code);
    try { fs.chmodSync(fp, 0o755); } catch {}
  }
  return fp;
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No design report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const item of report.items.slice(0, 100)) {
    const file = item.file;
    for (const issue of item.issues) {
      const agentName = `design-fix-${issue}-${path.basename(file).replace(/\W+/g,'-')}`.toLowerCase();
      const code = `#!/usr/bin/env node\nconsole.log('Design agent fixing ${issue} in ${file}');\n// TODO: implement safe, incremental code mod for this issue\n`;
      created.push(makeAgent(agentName, code));
    }
  }
  const registry = path.join(__dirname, 'logs', 'design-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), agents: created }, null, 2));
  console.log(`Created ${created.length} design agents`);
}

main();


