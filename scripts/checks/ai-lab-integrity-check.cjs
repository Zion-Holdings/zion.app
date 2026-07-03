// scripts/checks/ai-lab-integrity-check.cjs
// Validates current AI lab integrity report and surfaces a score summary.
const fs = require('fs');
const path = require('path');

const reportPath = path.join(process.cwd(), 'automation/reports/ai-lab-integrity-latest.json');

if (!fs.existsSync(reportPath)) {
  console.log('no ai lab integrity report yet');
  process.exit(0);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const score = typeof report.score === 'number' ? report.score : report.score ? Number(report.score) : 'N/A';
const status = typeof report.status === 'string' ? report.status : 'unknown';

console.log(`ai lab integrity availability=${status} score=${score}`);

if (typeof score === 'number' && Number.isNaN(score)) {
  console.error('ai lab integrity score is NaN');
  process.exit(1);
}

process.exit(0);
