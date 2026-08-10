#!/usr/bin/env node
// Non-LLM stub: deterministic health check report for Pages/monitoring purposes.
const fs = require('node:fs');
const path = require('node:path');

const reportDir = path.join(process.cwd(), 'automation', 'reports');
const reportPath = path.join(reportDir, 'health-monitor-latest.json');

const report = {
  generatedAt: new Date().toISOString(),
  status: 'ok',
  offline: String(process.env.OFFLINE_MODE || '').trim() === '1',
  checks: {
    public_redirects: fs.existsSync(path.join(process.cwd(), 'public/_redirects')),
    gh_pages_workflow: fs.existsSync(path.join(process.cwd(), '.github/workflows/gh-pages.yml')),
    partners_page: fs.existsSync(path.join(process.cwd(), 'app/partners/page.tsx')),
  },
  notes: 'Deterministic health monitor; no external model call.',
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('health monitor report:', reportPath);
process.exit(0);
