// scripts/checks/deploy-watchdog-check.cjs
// Reads the deploy watchdog report, if present, and summarizes health.
const fs = require('fs');
const path = require('path');

const reportPath = path.join(process.cwd(), 'automation/reports/deploy-watchdog-latest.json');

if (!fs.existsSync(reportPath)) {
  console.log('no deploy watchdog report yet');
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const healthyCount = Array.isArray(report.results)
  ? report.results.filter((r) => r && r.status === 'healthy').length
  : typeof report.healthy === 'number'
    ? report.healthy
    : null;

const healthyRatio =
  typeof healthyCount === 'number'
    ? `${healthyCount}/${report.results ? report.results.length : '?'} healthy`
    : 'unknown';

console.log(`deploy watchdog report=${JSON.stringify({
  generatedAt: report.generatedAt ?? report.timestamp,
  healthyRatio,
  unhealthyCount: report.unhealthyCount ?? 'unknown',
  source: report.source ?? 'deploy-watchdog',
})}`);
