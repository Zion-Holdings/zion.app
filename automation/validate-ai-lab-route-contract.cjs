#!/usr/bin/env node
/**
 * validate-ai-lab-route-contract.cjs
 * Validates AI lab route contracts.
 */
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

const report = {
  timestamp: new Date().toISOString(),
  status: 'valid',
  contractsChecked: 0,
  violations: []
};

const aiLabDir = path.join(process.cwd(), 'app', 'ai-lab');
if (fs.existsSync(aiLabDir)) {
  const files = fs.readdirSync(aiLabDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
  report.contractsChecked = files.length;
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(aiLabDir, file), 'utf8');
    // Check for basic issues
    if (content.includes('export default function') && content.includes('export')) {
      // Looks fine
    } else if (!content.includes('export')) {
      report.violations.push(`${file} may be missing exports`);
    }
  }
}

report.status = report.violations.length === 0 ? 'valid' : 'violations_found';

fs.writeFileSync(path.join(reportsDir, 'ai-lab-route-contract.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.violations.length > 0 ? 1 : 0);
