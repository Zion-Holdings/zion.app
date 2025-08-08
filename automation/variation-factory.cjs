#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'variation', 'variation-report.json');
const OUT_DIR = path.join(__dirname, 'variation-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const blueprints = [
  (pattern) => ({ name: `rotate-topic-${pattern}`, code: `#!/usr/bin/env node\nconsole.log('Rotating topic for ${pattern}');\n` }),
  (pattern) => ({ name: `expand-coverage-${pattern}`, code: `#!/usr/bin/env node\nconsole.log('Expanding coverage for ${pattern}');\n` }),
  (pattern) => ({ name: `introduce-new-category-${pattern}`, code: `#!/usr/bin/env node\nconsole.log('Introducing new category from ${pattern}');\n` })
];

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('No variation report found');
    process.exit(1);
  }
  ensureDir(OUT_DIR);
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const created = [];
  for (const dup of report.duplicates.slice(0, 50)) {
    const pattern = dup.pattern;
    for (const bp of blueprints) {
      const { name, code } = bp(pattern);
      const fp = path.join(OUT_DIR, `${name}.cjs`);
      if (!fs.existsSync(fp)) {
        fs.writeFileSync(fp, code);
        try { fs.chmodSync(fp, 0o755); } catch {}
        created.push(fp);
      }
    }
  }
  const registry = path.join(__dirname, 'logs', 'variation-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Created ${created.length} variation agents`);
}

main();


