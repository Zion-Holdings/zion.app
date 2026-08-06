#!/usr/bin/env node
/**
 * PM2 Report Budget Agent
 *
 * Checks PM2 process resource usage against budget limits:
 * - Memory budget per process
 * - Total memory budget
 * - Process count budget
 * - Restart count budget
 *
 * CLI:
 *   --fail-on-exceed <0|1>  - Exit non-zero if budget exceeded (default 0 = warn only)
 *
 * Env:
 *   PM2_REPORT_BUDGET_FAIL_ON_EXCEED - '0' = warn only, '1' = fail (default '0')
 *
 * Output: automation/reports/pm2-report-budget-latest.json
 */
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const REPORT_PATH = path.join(REPORTS_DIR, 'pm2-report-budget-latest.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// Budget defaults
const BUDGET = {
  max_processes: parseInt(process.env.PM2_BUDGET_MAX_PROCESSES || '50', 10),
  max_memory_per_process_mb: parseInt(process.env.PM2_BUDGET_MAX_MEM_MB || '512', 10),
  max_total_memory_mb: parseInt(process.env.PM2_BUDGET_MAX_TOTAL_MEM_MB || '4096', 10),
  max_restarts: parseInt(process.env.PM2_BUDGET_MAX_RESTARTS || '50', 10),
};

const failOnExceed = process.argv.includes('--fail-on-exceed') && process.argv[process.argv.indexOf('--fail-on-exceed') + 1] !== '0';

function getPM2Status() {
  try {
    const { execSync } = require('child_process');
    const output = execSync('pm2 jlist 2>/dev/null', {
      timeout: 10000,
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return JSON.parse(output);
  } catch (e) {
    return [];
  }
}

function checkBudget(processes) {
  const violations = [];
  const warnings = [];

  // Process count
  if (processes.length > BUDGET.max_processes) {
    const severity = failOnExceed ? 'error' : 'warning';
    violations.push({
      type: 'process_count_exceeded',
      actual: processes.length,
      budget: BUDGET.max_processes,
      severity,
      detail: `Process count ${processes.length} exceeds budget of ${BUDGET.max_processes}`
    });
  }

  // Per-process memory and restarts
  let totalMemory = 0;
  for (const p of processes) {
    const memMb = p.monkey ? Math.round(p.monkey.mem / 1024 / 1024) : 0;
    totalMemory += memMb;

    const restarts = p.pm2_env ? p.pm2_env.restart_time : 0;

    if (memMb > BUDGET.max_memory_per_process_mb) {
      const severity = failOnExceed ? 'error' : 'warning';
      violations.push({
        type: 'process_memory_exceeded',
        name: p.name,
        pid: p.pid,
        actual_mb: memMb,
        budget_mb: BUDGET.max_memory_per_process_mb,
        severity,
        detail: `Process "${p.name}" (pid ${p.pid}) using ${memMb}MB, budget ${BUDGET.max_memory_per_process_mb}MB`
      });
    }

    if (restarts > BUDGET.max_restarts) {
      const severity = failOnExceed ? 'error' : 'warning';
      violations.push({
        type: 'restart_count_exceeded',
        name: p.name,
        pid: p.pid,
        actual: restarts,
        budget: BUDGET.max_restarts,
        severity,
        detail: `Process "${p.name}" (pid ${p.pid}) restarted ${restarts} times, budget ${BUDGET.max_restarts}`
      });
    }
  }

  // Total memory
  if (totalMemory > BUDGET.max_total_memory_mb) {
    const severity = failOnExceed ? 'error' : 'warning';
    violations.push({
      type: 'total_memory_exceeded',
      actual_mb: totalMemory,
      budget_mb: BUDGET.max_total_memory_mb,
      severity,
      detail: `Total memory ${totalMemory}MB exceeds budget of ${BUDGET.max_total_memory_mb}MB`
    });
  }

  return { violations, totalMemory };
}

function main() {
  ensureDir(REPORTS_DIR);

  const processes = getPM2Status();
  console.log(`📊 PM2 Report Budget Agent`);
  console.log(`   Processes: ${processes.length}`);
  console.log(`   Fail on exceed: ${failOnExceed}`);
  console.log(`   Budget: max ${BUDGET.max_processes} procs, ${BUDGET.max_memory_per_process_mb}MB/proc, ${BUDGET.max_total_memory_mb}MB total, ${BUDGET.max_restarts} restarts`);

  const { violations, totalMemory } = checkBudget(processes);

  const report = {
    generated_at: new Date().toISOString(),
    pm2_available: processes.length > 0,
    process_count: processes.length,
    total_memory_mb: totalMemory,
    budget: BUDGET,
    violations,
    exceeded: violations.some(v => v.severity === 'error'),
    report_path: REPORT_PATH
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  if (violations.length > 0) {
    console.log(`⚠️ ${violations.length} budget violation(s):`);
    for (const v of violations) {
      console.log(`   [${v.severity.toUpperCase()}] ${v.detail}`);
    }
  } else {
    console.log('✅ All PM2 processes within budget');
  }

  if (report.exceeded && failOnExceed) {
    console.log('❌ Budget exceeded — failing due to --fail-on-exceed');
    process.exit(1);
  }
  process.exit(0);
}

main();
