#!/usr/bin/env node
// Non-LLM stub: verify key automation files and write a deterministic report.
const fs = require('node:fs');
const path = require('node:path');

const offline = String(process.env.OFFLINE_MODE || '').trim() === '1';
const reportDir = path.join(process.cwd(), 'automation', 'reports');
const reportPath = path.join(reportDir, 'ai-automation-audit-latest.json');

const checks = [
  ['automation/ai-automation-audit-agent.cjs', fs.existsSync(path.join(process.cwd(), 'automation/ai-automation-audit-agent.cjs'))],
  ['automation/ai-broken-link-fixer.cjs', fs.existsSync(path.join(process.cwd(), 'automation/ai-broken-link-fixer.cjs'))],
  ['automation/ai-automation-health-monitor.cjs', fs.existsSync(path.join(process.cwd(), 'automation/ai-automation-health-monitor.cjs'))],
  ['automation/ai-automation-self-healing-agent.cjs', fs.existsSync(path.join(process.cwd(), 'automation/ai-automation-self-healing-agent.cjs'))],
];

const missing = checks.filter(([,ok]) => !ok).map(([p]) => p);
const report = {
  generatedAt: new Date().toISOString(),
  status: missing.length ? 'degraded' : 'ok',
  offline,
  missing,
  checks: Object.fromEntries(checks),
  notes: offline
    ? 'Running in offline deterministic mode; LLM audit skipped.'
    : 'Deterministic preflight complete; LLM audit would run if enabled.',
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('automation audit report:', reportPath);
if (missing.length) {
  console.log('missing:', missing.join(', '));
  process.exit(1);
}
