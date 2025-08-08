#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT = path.join(__dirname, '..', 'data', 'reports', 'variation');
if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true });

function readLog(file) {
  try { return fs.readFileSync(path.join(__dirname, 'logs', file), 'utf8'); } catch { return ''; }
}

function detectLoops(content) {
  const restarts = (content.match(/restarting/gi) || []).length;
  const started = (content.match(/Starting/gi) || []).length;
  return { restarts, started, loopScore: restarts > 0 ? restarts / Math.max(1, started) : 0 };
}

function listGeneratedAgents() {
  const dirs = [
    path.join(__dirname, 'design-agents'),
    path.join(__dirname, 'responsive-agents'),
    path.join(__dirname, 'diversified-agents'),
  ];
  const agents = [];
  for (const d of dirs) {
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) agents.push({ dir: path.basename(d), file: f });
  }
  return agents;
}

function main() {
  const logFiles = (fs.existsSync(path.join(__dirname, 'logs')) ? fs.readdirSync(path.join(__dirname, 'logs')) : []).filter(f => f.endsWith('.log'));
  const loops = {};
  for (const lf of logFiles) loops[lf] = detectLoops(readLog(lf));
  const agents = listGeneratedAgents();
  const groups = agents.reduce((m, a) => {
    const k = a.file.replace(/-\d+\.cjs$/, '');
    m[k] = (m[k] || 0) + 1;
    return m;
  }, {});
  const duplicates = Object.entries(groups).filter(([, n]) => n > 3).map(([k, n]) => ({ pattern: k, count: n }));
  const report = { timestamp: new Date().toISOString(), loops, duplicates, totals: { agents: agents.length } };
  fs.writeFileSync(path.join(OUTPUT, 'variation-report.json'), JSON.stringify(report, null, 2));
  console.log('Variation analysis completed');
}

main();


