#!/usr/bin/env node
/**
 * ai-pm2-ops-digest-agent.cjs
 * Generates a PM2 process monitoring digest report.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function generateDigest() {
  const report = {
    timestamp: new Date().toISOString(),
    checks: [],
    pm2Processes: [],
    budget: { cpu: 0, memory: 0, instances: 0 }
  };

  try {
    const pm2List = execSync('pm2 list --no-color --terse', { encoding: 'utf8', timeout: 10000 });
    const lines = pm2List.trim().split('\n').filter(l => l.trim());
    for (const line of lines) {
      const parts = line.split(/\s+/);
      if (parts.length >= 5) {
        report.pm2Processes.push({
          name: parts[0] || 'unknown',
          mode: parts[1] || '',
          pid: parts[2] || '',
          status: parts[3] || '',
          cpu: parts[4] || '',
          memory: parts[5] || ''
        });
      }
    }
    report.checks.push({ name: 'pm2_list', status: 'pass', detail: { processCount: report.pm2Processes.length } });
  } catch (e) {
    report.checks.push({ name: 'pm2_list', status: 'warn', detail: { error: 'PM2 not available or no processes running' } });
  }

  // Budget report
  const budgetUsage = { cpu: 0, memory: 0, instances: report.pm2Processes.length };
  for (const proc of report.pm2Processes) {
    if (proc.cpu && proc.cpu !== 'N/A') {
      budgetUsage.cpu += parseFloat(proc.cpu) || 0;
    }
    if (proc.memory && proc.memory !== 'N/A') {
      const memMatch = proc.memory.match(/([\d.]+)\s*([KMGT]?)B?/);
      if (memMatch) {
        const num = parseFloat(memMatch[1]);
        const unit = memMatch[2];
        let bytes = num;
        switch(unit) {
          case 'K': bytes *= 1024; break;
          case 'M': bytes *= 1024 * 1024; break;
          case 'G': bytes *= 1024 * 1024 * 1024; break;
          case 'T': bytes *= 1024 * 1024 * 1024 * 1024; break;
        }
        budgetUsage.memory += bytes;
      }
    }
  }

  report.budget = {
    cpu: Math.round(budgetUsage.cpu),
    memory: budgetUsage.memory,
    instances: budgetUsage.instances,
    memoryMB: Math.round(budgetUsage.memory / (1024 * 1024))
  };

  report.checks.push({
    name: 'budget_report',
    status: 'pass',
    detail: report.budget
  });

  return report;
}

const result = generateDigest();

// Save report
const reportsDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(
  path.join(reportsDir, 'pm2-ops-digest-latest.json'),
  JSON.stringify(result, null, 2)
);

console.log('PM2 Ops Digest Report generated:');
console.log(JSON.stringify(result, null, 2));
console.log(`Report saved to automation/reports/pm2-ops-digest-latest.json`);

process.exit(0);
