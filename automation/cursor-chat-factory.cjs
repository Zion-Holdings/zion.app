#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'cursor', 'cursor-prompts.json');
const OUT_DIR = path.join(__dirname, 'cursor-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function agentForPrompt(p) {
  return `#!/usr/bin/env node\nconsole.log('Cursor prompt ready: ${p.title}');\nconsole.log(${JSON.stringify(p.prompt)});\n// Integrate with local Cursor via CLI/API if available; otherwise, save prompt for manual pickup.`;
}

function main() {
  if (!fs.existsSync(REPORT)) { console.error('No cursor prompts report found'); process.exit(1); }
  ensureDir(OUT_DIR);
  const data = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  (data.prompts || []).forEach((p, idx) => {
    const fp = path.join(OUT_DIR, `task-${idx + 1}.cjs`);
    if (!fs.existsSync(fp)) {
      fs.writeFileSync(fp, agentForPrompt(p));
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  });
  const registry = path.join(__dirname, 'logs', 'cursor-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Cursor agents created: ${created.length}`);
}

main();


