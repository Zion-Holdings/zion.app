#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = '/workspace';
const AUTOMATION_DIR = path.join(WORKSPACE_ROOT, 'automation');
const OUTPUT = path.join(WORKSPACE_ROOT, 'data', 'reports', 'supervisor', 'managed-scripts.json');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  const list = fs.readdirSync(AUTOMATION_DIR, { withFileTypes: true })
    .filter(d => d.isFile() && /-cron\.sh$/.test(d.name))
    .map(d => ({ name: d.name, path: path.join(AUTOMATION_DIR, d.name) }))
    .sort((a,b)=>a.name.localeCompare(b.name));

  ensureDir(path.dirname(OUTPUT));
  fs.writeFileSync(OUTPUT, JSON.stringify({ timestamp: new Date().toISOString(), scripts: list }, null, 2) + '\n');
  console.log(`✅ Wrote ${list.length} managed scripts to ${OUTPUT}`);
}

main();