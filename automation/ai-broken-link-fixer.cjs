#!/usr/bin/env node
// Non-LLM stub: basic site-link/codebase contract checks and deterministic report.
const fs = require('node:fs');
const path = require('node:path');

const offline = String(process.env.OFFLINE_MODE || '').trim() === '1';
const reportDir = path.join(process.cwd(), 'automation', 'reports');
const reportPath = path.join(reportDir, 'broken-link-fixer-latest-report.json');

const candidates = [
  'app/partners/page.tsx',
  'app/solutions/page.tsx',
  'app/products/page.tsx',
  'app/free-consultation/page.tsx',
  'app/industry-solutions/page.tsx',
  'app/service-comparison/page.tsx',
  'app/configurator/page.tsx',
];

const findings = candidates.map((file) => {
  const full = path.join(process.cwd(), file);
  const exists = fs.existsSync(full);
  let hasH1 = false;
  let hasTitle = false;
  let words = 0;
  if (exists) {
    const text = fs.readFileSync(full, 'utf8');
    hasH1 = /<h1[\s\S]*?>/i.test(text);
    hasTitle = /export\s+const\s+metadata[\s\S]*?title:/i.test(text);
    words = text.split(/\s+/).filter(Boolean).length;
  }
  return { file, exists, hasH1, hasTitle, words };
});

const report = {
  generatedAt: new Date().toISOString(),
  mode: process.argv[2] || 'run',
  offline,
  findings,
  summary: {
    files: findings.length,
    missing: findings.filter((f) => !f.exists).map((f) => f.file),
    lowContent: findings.filter((f) => f.words < 300).map((f) => f.file),
  },
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('broken link report:', reportPath);
console.log(JSON.stringify(report.summary, null, 2));
if (report.summary.missing.length) {
  console.log('missing files:', report.summary.missing.join(', '));
  process.exit(1);
}
