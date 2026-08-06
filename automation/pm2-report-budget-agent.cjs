#!/usr/bin/env node
/**
 * pm2-report-budget-agent.cjs
 * Reports PM2 resource budget usage against configured limits.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BUDGET = {
  cpu: 80, // max total CPU %
  memory: 2048, // max total memory MB
  instances: 50 // max number of processes
};

function checkBudget(failOnExceed) {
  const report = {
    timestamp: new Date().toISOString(),
    budget: BUDGET,
    actual: { cpu: 0, memory: 0, instances: 0 },
    violations: []
  };

  try {
    const pm2List = execSync('pm2 list --no-color --terse', { encoding: 'utf8', timeout: 10000 });
    const lines = pm2List.trim().split('\n').filter(l => l.trim());
    report.actual.instances = lines.length;

    if (lines.length > BUDGET.instances) {
      report.violations.push(`Instance count ${lines.length} exceeds budget ${BUDGET.instances}`);
    }

    for (const line of lines) {
      const parts = line.split(/\s+/);
      if (parts[4]) report.actual.cpu += parseFloat(parts[4]) || 0;
      if (parts[5]) {
        const memMatch = parts[5].match(/([\d.]+)\s*([KMGT]?)B?/);
        if (memMatch) {
          const num = parseFloat(memMatch[1]);
          const unit = memMatch[2];
          let bytes = num;
          switch(unit) {
            case 'K': bytes *= 1024; break;
            case 'M': bytes *= 1024 * 1024; break;
            case 'G': bytes *= 1024 * 1024 * 1024; break;
          }
          report.actual.memory += bytes / (1024 * 1024);
        }
      }
    }

    report.actual.cpu = Math.round(report.actual.cpu);
    report.actual.memory = Math.round(report.actual.memory);

    if (report.actual.cpu > BUDGET.cpu) {
      report.violations.push(`CPU ${report.actual.cpu}% exceeds budget ${BUDGET.cpu}%`);
    }
    if (report.actual.memory > BUDGET.memory) {
      report.violations.push(`Memory ${report.actual.memory}MB exceeds budget ${BUDGET.memory}MB`);
    }

  } catch (e) {
    report.violations.push(`PM2 check error: ${e.message}`);
  }

  report.status = report.violations.length === 0 ? 'within_budget' : 'budget_exceeded';

  // Save report
  const reportsDir = path.join(process.cwd(), 'automation', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'pm2-report-budget-latest.json'),
    JSON.stringify(report, null, 2)
  );

  console.log(JSON.stringify(report, null, 2));
  console.log(`Report saved to automation/reports/pm2-report-budget-latest.json`);

  if (failOnExceed && failOnExceed > 0 && report.violations.length >= failOnExceed) {
    process.exit(1);
  }
  process.exit(0);
}

const failOnExceed = parseInt(process.argv[2]?.replace('--fail-on-exceed', '') || '0');
checkBudget(failOnExceed);
