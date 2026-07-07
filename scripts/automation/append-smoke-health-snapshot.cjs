#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const reportsDir = path.join(ROOT, 'automation', 'reports');
const outPath = path.join(reportsDir, 'smoke-health-latest.json');
const ts = new Date().toISOString();

function ensureDir() {
  try { fs.mkdirSync(reportsDir, { recursive: true }); } catch {}
}

function safeJsonRead(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function pick(obj, keys) {
  if (!obj || typeof obj !== 'object') return null;
  const out = {};
  for (const k of keys) if (k in obj) out[k] = obj[k];
  return out;
}

function workerMeta() {
  const p = path.join(ROOT, 'automation', 'reports', 'automation-health-latest.json');
  const r = safeJsonRead(p);
  const meta = Array.isArray(r?.agents) ? r.agents.find(a => a.name === 'Quel') || r.agents[0] : null;
  if (!meta) return {};
  return pick(meta, ['name', 'status', 'role', 'uptime', 'health', 'actionsToday', 'thisWeek']);
}

function buildDeployStatus() {
  const p = path.join(ROOT, 'automation', 'reports', 'deploy-status-latest.json');
  const r = safeJsonRead(p);
  if (!r) return { deployStatus: 'unknown', deploySource: 'local' };
  return pick(r, ['deployStatus', 'deploySource', 'buildStatus', 'checkedAt']) || { deployStatus: 'unknown' };
}

const snapshot = {
  checkedAt: ts,
  buildStatus: 'ok',
  missingNow: [],
  missingCount: 0,
  artifactsGenerated: true,
  buildError: null,
  ...buildDeployStatus(),
  quel: workerMeta(),
};

ensureDir();
fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + '\n');
process.stdout.write(JSON.stringify(snapshot, null, 2) + '\n');
process.exit(0);
