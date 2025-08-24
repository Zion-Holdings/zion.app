#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const LOG = path.join(__dirname, 'logs', 'app-growth-applier.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function runScript(fp) {
  log(`▶ node ${fp}`);
  const res = spawnSync('node', [fp], { stdio: 'pipe', encoding: 'utf8' });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
}

function main() {
  const REPORT = path.join(__dirname, '..', 'data', 'reports', 'app-growth', 'app-growth-actions.json');
  if (!fs.existsSync(REPORT)) {
    log('No app-growth report found');
    process.exit(1);
  }
  const { actions } = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const dir = path.join(__dirname, 'app-growth-agents');
  if (!fs.existsSync(dir)) {
    log('No app-growth agents directory');
    process.exit(1);
  }
  for (const action of actions) {
    const fp = path.join(dir, `${action}.cjs`);
    if (fs.existsSync(fp)) runScript(fp);
  }
  log('✅ App growth applier completed');
}

main();