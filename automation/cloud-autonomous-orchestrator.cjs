#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { generateMetrics, generateOperatorSummary } = require('./lib/metrics-generator.cjs');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function writeMarkdown(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

async function main() {
  const runAt = new Date().toISOString();
  const metrics = generateMetrics({ includeCompare: true });
  const summary = generateOperatorSummary(metrics);

  // Write artifacts
  writeJson(path.join(__dirname, '..', 'public', 'metrics', 'latest.json'), metrics);
  writeJson(path.join(__dirname, '..', 'public', 'automation', 'status.json'), { runAt, ok: true });

  const today = new Date();
  const ymd = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const md = `# Zion Operator Summary (${ymd})\n\n${summary.map((s) => `- ${s}`).join('\n')}\n`;
  writeMarkdown(path.join(__dirname, '..', 'docs', 'reports', `summary-${ymd}.md`), md);

  console.log('Automation run complete:', { runAt, summaryCount: summary.length });
}

main().catch((e) => {
  console.error('Automation run failed', e);
  process.exit(1);
});