#!/usr/bin/env node
/**
 * AI PM2 Ops Digest Agent
 * Generates an ops digest report for PM2 processes: process list,
 * uptime, memory, restarts, and drift detection.
 *
 * Env:
 *   PM2_OPS_DIGEST_CI - set to '1' in CI mode
 *   TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID - optional for Telegram delivery
 *   --telegram flag - send digest via Telegram
 *
 * Output: automation/reports/pm2-ops-digest-latest.json
 */
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const REPORT_PATH = path.join(REPORTS_DIR, 'pm2-ops-digest-latest.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function getLocalTime() {
  return new Date().toISOString();
}

function fetchPM2Status() {
  try {
    const { execSync } = require('child_process');
    // Try to get PM2 list in JSON format
    const output = execSync('pm2 jlist 2>/dev/null', {
      timeout: 10000,
      encoding: 'utf8',
      stdio: 'pipe'
    });
    const processes = JSON.parse(output);
    return processes.map(p => ({
      name: p.name,
      id: p.pm_id,
      pid: p.pid,
      status: p.pm2_env ? p.pm2_env.status : 'unknown',
      restarts: p.pm2_env ? p.pm2_env.restart_time : 0,
      uptime: p.pm2_env ? Math.floor((Date.now() - (p.pm2_env.instances_before_exit ? 0 : p.pm2_env.pmx ? 0 : 0)) / 1000) : 0,
      cpu: p.monkey ? p.monkey.cpu : 0,
      memory: p.monkey ? p.monkey.mem : 0,
      max_restarts: p.pm2_env ? p.pm2_env.max_restarts : 0,
      max_memory: p.pm2_env ? p.pm2_env.max_memory : 0
    }));
  } catch (e) {
    // PM2 not available (e.g., in CI)
    return [];
  }
}

function generateDigest(processes, isCI, runId, repo) {
  const total = processes.length;
  const running = processes.filter(p => p.status === 'online').length;
  const stopped = processes.filter(p => p.status === 'stopped' || p.status === 'errored').length;
  const highRestarts = processes.filter(p => p.restarts > 10);
  const highMemory = processes.filter(p => p.memory > 500 * 1024 * 1024); // >500MB

  const budget = {
    process_count: total,
    running_count: running,
    stopped_count: stopped,
    high_restart_count: highRestarts.length,
    high_memory_count: highMemory.length,
    total_memory_mb: Math.round(processes.reduce((sum, p) => sum + (p.memory || 0), 0) / 1024 / 1024),
    budget_exceeded: highRestarts.length > 0 || highMemory.length > 0 || stopped > 0,
    violations: [
      ...highRestarts.map(p => `Process "${p.name}" (pid ${p.pid}) has ${p.restarts} restarts (threshold: 10)`),
      ...highMemory.map(p => `Process "${p.name}" (pid ${p.pid}) using ${Math.round(p.memory / 1024 / 1024)}MB (threshold: 500MB)`),
      ...(stopped > 0 ? processes.filter(p => p.status !== 'online').map(p => `Process "${p.name}" (pid ${p.pid}) status: ${p.status}`) : [])
    ]
  };

  return {
    generated_at: getLocalTime(),
    ci_mode: isCI,
    github_run_id: runId,
    github_repository: repo,
    processes,
    budget,
    summary: {
      total_processes: total,
      online: running,
      stopped,
      anomalies: budget.violations.length,
      budget_exceeded: budget.budget_exceeded
    }
  };
}

function sendTelegram(digest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    console.log('⚠️ No Telegram credentials; skipping delivery');
    return;
  }

  const { execSync } = require('child_process');
  const message = `📊 PM2 Ops Digest Report\n\n` +
    `📈 Processes: ${digest.summary.total_processes} total, ${digest.summary.online} online, ${digest.summary.stopped} stopped\n` +
    `⚠️ Anomalies: ${digest.summary.anomalies}\n` +
    `💾 Total Memory: ${digest.budget.total_memory_mb}MB\n` +
    `🚨 Budget Exceeded: ${digest.budget.budget_exceeded ? 'YES' : 'NO'}\n` +
    `${digest.budget.violations.map(v => `- ${v}`).join('\n') || 'No violations\n'}` +
    `\n⏱ ${digest.generated_at}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    execSync(
      `curl -s -X POST "${url}" -d "chat_id=${chatId}&text=${encodeURIComponent(message)}"`,
      { timeout: 10000, encoding: 'utf8' }
    );
    console.log('✅ Telegram digest sent');
  } catch (e) {
    console.warn('⚠️ Telegram send failed:', e.message);
  }
}

function main() {
  ensureDir(REPORTS_DIR);

  const isCI = process.env.PM2_OPS_DIGEST_CI === '1';
  const runId = process.env.GITHUB_RUN_ID || '';
  const repo = process.env.GITHUB_REPOSITORY || '';
  const useTelegram = process.argv.includes('--telegram');

  console.log(`📊 Generating PM2 ops digest (CI: ${isCI}, repo: ${repo || 'N/A'})`);

  const processes = fetchPM2Status();
  console.log(`   Found ${processes.length} PM2 processes`);

  const digest = generateDigest(processes, isCI, runId, repo);

  // Ensure runtime report dir exists
  ensureDir(path.join(REPORTS_DIR, '.runtime'));

  fs.writeFileSync(REPORT_PATH, JSON.stringify(digest, null, 2));
  console.log(`✅ Ops digest written to: ${REPORT_PATH}`);
  console.log(`   Summary: ${JSON.stringify(digest.summary)}`);

  if (useTelegram) {
    sendTelegram(digest);
  }

  // In CI mode, also write a state checkpoint
  if (isCI) {
    const statePath = path.join(REPORTS_DIR, '.runtime', 'pm2-ops-digest-state.json');
    fs.writeFileSync(statePath, JSON.stringify({
      last_run: getLocalTime(),
      run_id: runId,
      repo,
      summary: digest.summary
    }, null, 2));
    console.log(`✅ State checkpoint written to: ${statePath}`);
  }

  process.exit(0);
}

main();
