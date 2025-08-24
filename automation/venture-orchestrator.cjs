#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'venture-orchestrator.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(m) {
  const line = `[${new Date().toISOString()}] ${m}\n`;
  console.log(m);
  fs.appendFileSync(LOG, line);
}

function run(cmd, args) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf8' });
  if (res.stdout) fs.appendFileSync(LOG, res.stdout);
  if (res.stderr) fs.appendFileSync(LOG, res.stderr);
  return res.status === 0;
}

function cycle() {
  run('node', [path.join(__dirname, 'venture-services-analyzer.cjs')]);
  run('node', [path.join(__dirname, 'venture-services-factory.cjs')]);
  run('node', [path.join(__dirname, 'ads-generator.cjs')]);
  run('node', [path.join(__dirname, 'service-sales-agents-factory.cjs')]);
}

function start(mode = 'continuous') {
  log('🚀 Venture orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 24 * 60 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

function status() {
  const servicesRegistry = path.join(__dirname, '..', 'data', 'services', 'services.json');
  let count = 0;
  try {
    const list = JSON.parse(fs.readFileSync(servicesRegistry, 'utf8'));
    count = list.length;
  } catch {}
  log(`Status: ${count} services in registry`);
  console.log(JSON.stringify({ services: count }, null, 2));
}

function report() {
  const reportDir = path.join(__dirname, '..', 'data', 'reports', 'venture');
  const adsDir = path.join(__dirname, '..', 'data', 'ads');
  const out = {
    reports: fs.existsSync(reportDir) ? fs.readdirSync(reportDir).length : 0,
    adSets: fs.existsSync(adsDir) ? fs.readdirSync(adsDir).length : 0,
  };
  console.log(JSON.stringify(out, null, 2));
}

if (require.main === module) {
  const cmd = process.argv[2] || 'continuous';
  if (cmd === 'once') start('once');
  else if (cmd === 'status') status();
  else if (cmd === 'report') report();
  else start('continuous');
}

module.exports = { start, status, report };