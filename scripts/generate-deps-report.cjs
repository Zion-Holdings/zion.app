#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  try {
    const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf-8' });
    return out;
  } catch (e) {
    return e.stdout?.toString?.() || '';
  }
}

function safeJson(str) {
  try { return JSON.parse(str); } catch { return null; }
}

function summarizeOutdated(json) {
  const items = json || {};
  const list = Object.keys(items).map(name => ({ name, current: items[name].current, latest: items[name].latest, wanted: items[name].wanted, type: items[name].type }));
  const counts = list.reduce((acc, it) => { acc[it.type] = (acc[it.type] || 0) + 1; return acc; }, {});
  return { total: list.length, byType: counts, items: list.slice(0, 50) };
}

function summarizeAudit(json) {
  if (!json) return { total: 0, critical: 0, high: 0, moderate: 0, low: 0 };
  const { metadata } = json;
  if (metadata && metadata.vulnerabilities) {
    const v = metadata.vulnerabilities;
    return { total: v.total || 0, critical: v.critical || 0, high: v.high || 0, moderate: v.moderate || 0, low: v.low || 0 };
  }
  if (json.vulnerabilities) {
    const v = json.vulnerabilities;
    return { total: (v.critical||0)+(v.high||0)+(v.moderate||0)+(v.low||0), critical: v.critical||0, high: v.high||0, moderate: v.moderate||0, low: v.low||0 };
  }
  return { total: 0, critical: 0, high: 0, moderate: 0, low: 0 };
}

function main() {
  const outdatedStr = run('npm outdated --json || true');
  const auditStr = run('npm audit --json || true');
  const outdatedJson = safeJson(outdatedStr) || {};
  const auditJson = safeJson(auditStr) || {};
  const report = {
    updatedAt: new Date().toISOString(),
    summary: {
      outdated: summarizeOutdated(outdatedJson),
      vulnerabilities: summarizeAudit(auditJson),
    },
  };
  const target = path.join(__dirname, '..', 'data', 'automation', 'deps.json');
  fs.writeFileSync(target, JSON.stringify(report, null, 2));
  console.log('Wrote', target);
}

main();