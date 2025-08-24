#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const GOV_DIR = path.join(process.cwd(), 'docs/gitbook/governance');
const REPORT_DIR = path.join(process.cwd(), 'data/reports/governance');

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function extractThresholds(text) {
  const quorum = /Quorum:\s*([^\n]+)/i.exec(text)?.[1]?.trim() || null;
  const approval = /Approval:\s*([^\n]+)/i.exec(text)?.[1]?.trim() || null;
  const veto = /Veto:\s*([^\n]+)/i.exec(text)?.[1]?.trim() || null;
  const timing = /##\s*Timing[\s\S]*?\n([\s\S]*?)(?:\n##|$)/i.exec(text)?.[1]?.trim() || null;
  return { quorum, approval, veto, timing };
}

function run() {
  const qvr = read(path.join(GOV_DIR, 'quorum-and-voting-rules.md'));
  const lifecycle = read(path.join(GOV_DIR, 'proposal-lifecycle.md'));
  const tokenRole = read(path.join(GOV_DIR, 'zion-token-role.md'));

  const thresholds = extractThresholds(qvr);
  const summary = {
    updatedAt: new Date().toISOString(),
    thresholds,
    lifecycleHighlights: lifecycle ? lifecycle.split('\n').slice(0, 10).join('\n') : null,
    tokenRoleHighlights: tokenRole ? tokenRole.split('\n').slice(0, 10).join('\n') : null,
  };

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'summary.md'), `# Governance Insights\n\nUpdated: ${summary.updatedAt}\n\n## Thresholds\n\n- Quorum: ${thresholds.quorum || 'n/a'}\n- Approval: ${thresholds.approval || 'n/a'}\n- Veto: ${thresholds.veto || 'n/a'}\n\n## Notes\n\n${summary.lifecycleHighlights || ''}`);
  console.log('Governance insights written to', REPORT_DIR);
}

run();