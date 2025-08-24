#!/usr/bin/env node
/*
  IPO Readiness Watchdog
  - Aggregates key KPIs and computes traffic-light statuses
  - Writes a Markdown report to data/ipo-portal/watchdog-report.md
*/
const fs = require('fs');
const path = require('path');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function generateMetrics() {
  // Replace with real data source integrations as needed
  return [
    { key: 'MRR', value: 220450, target: 200000, unit: 'USD', trendPct: 8.2 },
    { key: 'GMV', value: 4800000, target: 4000000, unit: 'USD', trendPct: 5.1 },
    { key: 'Active Users (Monthly)', value: 18452, target: 15000, unit: '', trendPct: 3.9 },
    { key: 'Active Users (TTM)', value: 162340, target: 150000, unit: '', trendPct: 12.4 },
    { key: 'Churn Rate', value: 2.4, target: 3.0, unit: '%', trendPct: -0.3 },
    { key: 'CAC/LTV Ratio', value: 5.6, target: 4.0, unit: 'x', trendPct: 0.4 },
  ];
}

function statusFor(metric) {
  // Simple heuristic
  if (metric.key === 'Churn Rate') {
    return metric.value <= metric.target ? 'green' : metric.value <= metric.target + 1 ? 'yellow' : 'red';
  }
  return metric.value >= metric.target ? 'green' : metric.value >= metric.target * 0.8 ? 'yellow' : 'red';
}

function formatCurrency(v) { return `$${v.toLocaleString()}`; }

function format(metric) {
  let val = metric.value;
  if (metric.unit === 'USD') val = formatCurrency(metric.value);
  else if (metric.unit === '%') val = `${metric.value}%`;
  else if (metric.unit === 'x') val = `${metric.value.toFixed(1)}x`;
  return val;
}

function main() {
  const outDir = path.resolve(process.cwd(), 'data', 'ipo-portal');
  ensureDir(outDir);
  const metrics = generateMetrics();

  const statuses = metrics.map(m => ({ key: m.key, status: statusFor(m) }));
  const reds = statuses.filter(s => s.status === 'red').map(s => s.key);
  const yellows = statuses.filter(s => s.status === 'yellow').map(s => s.key);
  const greens = statuses.filter(s => s.status === 'green').map(s => s.key);

  const lines = [];
  lines.push(`# IPO Readiness Watchdog`);
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`Overall: ${reds.length ? 'At Risk' : (yellows.length ? 'Needs Attention' : 'On Track')}`);
  lines.push('');
  lines.push('## KPI Summary');
  metrics.forEach(m => {
    const trend = typeof m.trendPct === 'number' ? (m.trendPct >= 0 ? `+${m.trendPct}%` : `${m.trendPct}%`) : '';
    lines.push(`- ${m.key}: ${format(m)} (${trend}) — Status: ${statusFor(m)}`);
  });
  if (reds.length) {
    lines.push('');
    lines.push('## Critical (Red)');
    reds.forEach(k => lines.push(`- ${k}`));
  }
  if (yellows.length) {
    lines.push('');
    lines.push('## Watchlist (Yellow)');
    yellows.forEach(k => lines.push(`- ${k}`));
  }
  lines.push('');
  lines.push('---');
  lines.push('This report is auto-generated.');

  fs.writeFileSync(path.join(outDir, 'watchdog-report.md'), lines.join('\n'), 'utf8');
  console.log('Wrote watchdog-report.md');
}

main();