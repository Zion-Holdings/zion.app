#!/usr/bin/env node
// Non-LLM stub: deterministic self-healing checks; write report and exit.
const fs = require('node:fs');
const path = require('node:path');

const reportDir = path.join(process.cwd(), 'automation', 'reports');
const reportPath = path.join(reportDir, 'self-healing-latest.json');

const report = {
  generatedAt: new Date().toISOString(),
  status: 'ok',
  offline: String(process.env.OFFLINE_MODE || '').trim() === '1',
  checks: {
    layout: fs.existsSync(path.join(process.cwd(), 'app/layout.tsx')),
    redirects: fs.existsSync(path.join(process.cwd(), 'public/_redirects')),
    workflows: fs.existsSync(path.join(process.cwd(), '.github/workflows/gh-pages.yml')),
  },
  notes: 'Self-heal stub; no external model dependency.',
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('self-healing report:', reportPath);
process.exit(0);
