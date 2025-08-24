#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

const root = process.cwd();
const dataDir = path.join(root, 'data', 'zion-brain');
const logsPath = path.join(dataDir, 'logs.json');
const chainsPath = path.join(dataDir, 'chains.json');

const logs = readJson(logsPath, { entries: [] });
const now = new Date().toISOString();

// Initialize chains if missing
let chainsFile = readJson(chainsPath, null);
if (!chainsFile) {
  chainsFile = {
    updatedAt: now,
    policy: { minWeight: 0.5, maxWeight: 2.0, targetDeviation: 0.2, step: 0.1 },
    chains: {
      resumeBuilder: { weight: 1.0, model: 'gpt-4o-mini' },
      daoExplainer: { weight: 1.0, model: 'gpt-4o-mini' },
      tokenomicsSimulator: { weight: 1.0, model: 'gpt-4o-mini' },
      governanceSummarizer: { weight: 1.0, model: 'gpt-4o-mini' },
      nationAssistant: { weight: 1.0, model: 'gpt-4o-mini' }
    }
  };
}

const counts = { resumeBuilder: 0, daoExplainer: 0, tokenomicsSimulator: 0, governanceSummarizer: 0, nationAssistant: 0 };
for (const e of logs.entries.slice(-200)) {
  const t = String(e.type);
  if (counts[t] !== undefined) counts[t] += 1;
}
const values = Object.values(counts);
const avg = values.length ? values.reduce((a,b)=>a+b,0) / values.length : 0;
const { minWeight, maxWeight, targetDeviation, step } = chainsFile.policy;

let changed = false;
for (const key of Object.keys(chainsFile.chains)) {
  const count = counts[key] || 0;
  let w = chainsFile.chains[key].weight || 1.0;
  if (avg > 0) {
    if (count > avg * (1 + targetDeviation)) w = clamp(w - step, minWeight, maxWeight);
    if (count < avg * (1 - targetDeviation)) w = clamp(w + step, minWeight, maxWeight);
  }
  if (w !== chainsFile.chains[key].weight) { chainsFile.chains[key].weight = w; changed = true; }
}

if (changed) {
  chainsFile.updatedAt = now;
  fs.writeFileSync(chainsPath, JSON.stringify(chainsFile, null, 2));
  console.log('Chain weights tuned:', chainsPath);
} else {
  console.log('No chain tuning needed');
}