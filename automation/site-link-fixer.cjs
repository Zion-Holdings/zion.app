#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPORT = path.join(__dirname, '..', 'data', 'reports', 'link-monitor', 'site-link-report.json');
const FIX_DIR = path.join(__dirname, 'link-fix-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function fixAgentFor(url, status) {
  return `#!/usr/bin/env node
console.log('Attempting to fix link:', ${JSON.stringify(url)}, 'status:', ${JSON.stringify(status)});
// TODO: Implement rule-based fixer (e.g., update internal references, add redirects in Next.js, validate routes)
`;
}

function main() {
  if (!fs.existsSync(REPORT)) { console.error('No link report found'); process.exit(1); }
  ensureDir(FIX_DIR);
  const data = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const broken = data.broken || [];
  const created = [];
  broken.slice(0, 50).forEach((b, i) => {
    const safe = b.url.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase();
    const fp = path.join(FIX_DIR, `fix-${i + 1}-${safe}.cjs`);
    if (!fs.existsSync(fp)) {
      fs.writeFileSync(fp, fixAgentFor(b.url, b.status));
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  });
  const registry = path.join(__dirname, 'logs', 'link-fix-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Link fix agents created: ${created.length}`);
}

main();


