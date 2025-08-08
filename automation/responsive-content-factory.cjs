#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'responsive', 'responsive-analysis.json');
const OUT_DIR = path.join(__dirname, 'responsive-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function agentFor(issue, file) {
  const name = `responsive-${issue}-${path.basename(file).replace(/\W+/g,'-')}`.toLowerCase();
  const code = `#!/usr/bin/env node\nconsole.log('Responsive agent fixing ${issue} in ${file}');\n// TODO: implement safe codemod to address ${issue}\n`;
  return { name, code };
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No responsive report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const item of report.items.slice(0, 200)) {
    for (const issue of item.issues) {
      const { name, code } = agentFor(issue, item.filePath);
      const fp = path.join(OUT_DIR, `${name}.cjs`);
      if (!fs.existsSync(fp)) {
        fs.writeFileSync(fp, code);
        try { fs.chmodSync(fp, 0o755); } catch {}
        created.push(fp);
      }
    }
  }
  const registry = path.join(__dirname, 'logs', 'responsive-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} responsive agents`);
}

main();


