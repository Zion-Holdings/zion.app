#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const outPath = path.join(ROOT, 'public', 'api', 'health.json');

function safeReadJson(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8')); } catch { return null; }
}

const snapshotPath = path.join(ROOT, 'automation', 'reports', 'smoke-health-latest.json');
const buildVerifyPath = path.join(ROOT, 'automation', 'reports', 'build-and-verify-latest.json');
const deployPath = path.join(ROOT, 'automation', 'reports', 'deploy-status-latest.json');

const snapshot = safeReadJson('automation/reports/smoke-health-latest.json');
const buildVerify = safeReadJson('automation/reports/build-and-verify-latest.json');
const deployStatus = safeReadJson('automation/reports/deploy-status-latest.json');

const payload = {
  checkedAt: new Date().toISOString(),
  status: (snapshot?.buildStatus === 'ok' && buildVerify?.buildStatus === 'ok') ? 'healthy' : 'degraded',
  buildStatus: buildVerify?.buildStatus || 'unknown',
  deployStatus: deployStatus?.deployStatus || 'unknown',
  missingCount: snapshot?.missingCount ?? null,
  missingRoutes: snapshot?.missingNow || [],
  artifacts: {
    automationHealth: !!snapshot,
    buildVerify: !!buildVerify,
    deployStatus: !!deployStatus,
  }
};

try {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
  process.stdout.write(JSON.stringify(payload, null, 2) + '\n');
} catch (e) {
  process.stderr.write(String(e.message) + '\n');
  process.exit(1);
}
