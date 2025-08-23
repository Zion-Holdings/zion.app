#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } }

const root = process.cwd();
const logsPath = path.join(root, 'data', 'zion-brain', 'logs.json');
const thresholdsPath = path.join(root, 'data', 'zion-brain', 'thresholds.json');
const outDir = path.join(root, 'automation_logs');
const outPath = path.join(outDir, 'stuck-users.json');

ensureDir(outDir);
const logs = readJson(logsPath, { entries: [] });
const thresholds = readJson(thresholdsPath, { latencyStuckMs: 2000, includeLaggy: true });

const stuck = [];
const window = logs.entries.slice(-300);
for (const e of window) {
  const isLag = thresholds.includeLaggy && (e.status === 'laggy');
  const isStuck = e.status === 'stuck' || (e.latencyMs && e.latencyMs > thresholds.latencyStuckMs);
  if (isLag || isStuck) {
    stuck.push({
      id: e.id || `${e.module}-${e.type}-${e.timestamp}`,
      module: e.module,
      type: String(e.type),
      status: e.status,
      latencyMs: e.latencyMs || null,
      timestamp: e.timestamp,
    });
  }
}

const summary = {
  generatedAt: new Date().toISOString(),
  totalWindow: window.length,
  stuckCount: stuck.length,
  items: stuck.slice(-50),
};

fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
console.log('Stuck users scan written:', outPath, 'count=', summary.stuckCount);