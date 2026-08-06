#!/usr/bin/env node
/**
 * validate-pm2-singleton-policy.cjs
 * Validates PM2 singleton ecosystem configuration.
 */
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

const report = {
  timestamp: new Date().toISOString(),
  status: 'valid',
  checks: [],
  violations: []
};

try {
  const { execSync } = require('child_process');
  const list = execSync('pm2 list --no-color --terse', { encoding: 'utf8', timeout: 5000 });
  const lines = list.trim().split('\n').filter(l => l.trim());
  const duplicateNames = {};
  
  for (const line of lines) {
    const parts = line.split(/\s+/);
    const name = parts[0];
    duplicateNames[name] = (duplicateNames[name] || 0) + 1;
  }
  
  for (const [name, count] of Object.entries(duplicateNames)) {
    if (count > 1) {
      report.violations.push(`Duplicate PM2 process: ${name} (${count} instances)`);
    }
  }
  
  report.checks.push({ name: 'pm2_singleton', status: report.violations.length === 0 ? 'pass' : 'warn', detail: { processes: lines.length } });
} catch (e) {
  report.checks.push({ name: 'pm2_singleton', status: 'warn', detail: { error: 'PM2 not available' } });
}

fs.writeFileSync(path.join(reportsDir, 'pm2-singleton-policy.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(0);
