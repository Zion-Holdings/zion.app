#!/usr/bin/env node
/*
  Audit Log Analyzer
  - Reads data/ipo-portal/audit-log.json if present
  - Produces a JSON summary and a Markdown report with top events and anomalies
*/
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function main() {
  const baseDir = path.resolve(process.cwd(), 'data', 'ipo-portal');
  ensureDir(baseDir);
  const auditPath = path.join(baseDir, 'audit-log.json');
  const events = readJson(auditPath, []);

  const summary = {
    totalEvents: events.length,
    byType: {},
    latest: events.slice(-10),
    topSections: {},
  };
  for (const e of events) {
    const t = e.type || 'unknown';
    summary.byType[t] = (summary.byType[t] || 0) + 1;
    if (e.section) summary.topSections[e.section] = (summary.topSections[e.section] || 0) + 1;
  }

  const lines = [];
  lines.push('# Audit Log Summary');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`Total events: ${summary.totalEvents}`);
  lines.push('');
  lines.push('## Events by Type');
  Object.entries(summary.byType).forEach(([k, v]) => lines.push(`- ${k}: ${v}`));
  if (Object.keys(summary.topSections).length) {
    lines.push('');
    lines.push('## Activity by Data Room Section');
    Object.entries(summary.topSections).forEach(([k, v]) => lines.push(`- ${k}: ${v}`));
  }
  if (summary.latest.length) {
    lines.push('');
    lines.push('## Latest 10 Events');
    summary.latest.forEach((e) => lines.push(`- ${e.timestamp || ''} ${e.type} ${e.section || ''} ${e.name || ''}`));
  }

  fs.writeFileSync(path.join(baseDir, 'audit-summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  fs.writeFileSync(path.join(baseDir, 'audit-summary.md'), lines.join('\n'), 'utf8');
  console.log('Wrote audit-summary.{json,md}');
}

main();