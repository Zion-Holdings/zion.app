#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ACTIONS = path.join(__dirname, '..', 'data', 'reports', 'spec-dev', 'spec-dev-actions.json');
const OUT_DIR = path.join(__dirname, 'spec-dev-agents');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function agentForDevTask(prompt, idx) {
  return `#!/usr/bin/env node\nconsole.log('Spec-dev task ${idx}:');\nconsole.log(${JSON.stringify(prompt)});\n// TODO: implement autonomous dev agent to apply edits accordingly.`;
}

function agentForHomepage(pages) {
  return `#!/usr/bin/env node\nconsole.log('Ensure homepage advertises pages:', ${JSON.stringify(pages.slice(0, 20))});\n// TODO: reuse homepage-promo-applier and site-promo analyzers.`;
}

function main() {
  if (!fs.existsSync(ACTIONS)) { console.error('No spec-dev actions found'); process.exit(1); }
  ensureDir(OUT_DIR);
  const data = JSON.parse(fs.readFileSync(ACTIONS, 'utf8'));
  const created = [];
  let i = 1;
  for (const a of (data.actions || [])) {
    if (a.type === 'dev_task') {
      const fp = path.join(OUT_DIR, `dev-task-${i++}.cjs`);
      if (!fs.existsSync(fp)) fs.writeFileSync(fp, agentForDevTask(a.prompt, i));
      try { fs.chmodSync(fp, 0o755); } catch {}
      created.push(fp);
    }
  }
  const hp = path.join(OUT_DIR, 'ensure-homepage-ads.cjs');
  if (!fs.existsSync(hp)) {
    fs.writeFileSync(hp, agentForHomepage(data.actions.find(x => x.type === 'homepage_advertise')?.pages || []));
    try { fs.chmodSync(hp, 0o755); } catch {}
    created.push(hp);
  }
  const registry = path.join(__dirname, 'logs', 'spec-dev-agents.json');
  ensureDir(path.dirname(registry));
  fs.writeFileSync(registry, JSON.stringify({ timestamp: new Date().toISOString(), created }, null, 2));
  console.log(`Spec-dev agents created: ${created.length}`);
}

main();


