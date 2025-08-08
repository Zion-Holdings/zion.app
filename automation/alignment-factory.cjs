#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureScript(name, content) {
  const fp = path.join(__dirname, name);
  if (!fs.existsSync(fp)) {
    fs.writeFileSync(fp, content);
    try { fs.chmodSync(fp, 0o755); } catch {}
    return true;
  }
  return false;
}

function createAgentFromAction(action, idx) {
  const safe = action.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || `task-${idx}`;
  const filename = `agent-${safe}.cjs`;
  const script = `#!/usr/bin/env node\n\nconsole.log('Executing action: ${action.replace(/'/g, "'")}');\n// TODO: implement task-specific logic\n`;
  return ensureScript(filename, script) ? filename : null;
}

function main() {
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  const reportPath = path.join(outDir, 'alignment-report.json');
  if (!fs.existsSync(reportPath)) {
    console.error('No alignment report found');
    process.exit(1);
  }
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const created = [];
  report.actions.slice(0, 50).forEach((a, i) => {
    const fn = createAgentFromAction(a, i);
    if (fn) created.push(fn);
  });
  const registry = path.join(__dirname, 'logs', 'alignment-agents.json');
  fs.mkdirSync(path.dirname(registry), { recursive: true });
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} alignment agent scripts`);
}

main();


