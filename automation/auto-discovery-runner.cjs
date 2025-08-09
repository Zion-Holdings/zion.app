#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'auto-discovery-runner.log');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(logFile, line + '\n');
}

function run(cmd, args = [], opts = {}) {
  log(`$ ${[cmd, ...args].join(' ')}`);
  const result = spawnSync(cmd, args, { encoding: 'utf8', stdio: 'pipe', ...opts });
  if (result.stdout) log(result.stdout.trim());
  if (result.stderr) log(result.stderr.trim());
  return result;
}

function discoverTasks() {
  const dir = __dirname;
  const entries = fs.readdirSync(dir).filter(f => (f.endsWith('.cjs') || f.endsWith('.js')));
  const exclude = new Set([
    'launch-all-automation.cjs',
    'automation-dashboard.cjs',
    'git-sync.cjs',
    'continuous-automation-improvement-system.js',
    'auto-discovery-runner.cjs',
    'automation-guardian-10min.cjs',
    'cloud-autonomous-orchestrator.cjs'
  ]);
  const candidates = entries.filter(f => !exclude.has(f) && /orchestrator|launcher|analyzer|factory/i.test(f));
  // Prefer orchestrators and launchers first
  candidates.sort((a, b) => {
    const score = (name) => (name.includes('orchestrator') ? 2 : name.includes('launcher') ? 1 : 0);
    return score(b) - score(a);
  });
  return candidates.map(f => ({ name: f.replace(/\.(cjs|js)$/,''), script: f }));
}

function partition(items, index, total) {
  const out = [];
  for (let i = 0; i < items.length; i++) {
    if (i % total === index) out.push(items[i]);
  }
  return out;
}

async function main() {
  const partIndex = parseInt(process.env.PARTITION_INDEX || '0', 10);
  const partTotal = parseInt(process.env.PARTITION_TOTAL || '1', 10);
  const timeoutMs = parseInt(process.env.TASK_TIMEOUT_MS || '180000', 10); // 3 min per task

  log(`🚀 Auto-discovery runner starting (part ${partIndex + 1}/${partTotal})`);

  const tasks = discoverTasks();
  const slice = partition(tasks, partIndex, partTotal);
  log(`Discovered ${tasks.length} tasks; executing ${slice.length} for this partition`);

  for (const t of slice) {
    const scriptPath = path.join(__dirname, t.script);
    const args = t.script.endsWith('.cjs') || t.script.endsWith('.js') ? ['once'] : [];
    const res = run('node', [scriptPath, ...args], { timeout: timeoutMs });
    if (res.error && res.error.code === 'ETIMEDOUT') {
      log(`⏱️ Timeout: ${t.script}`);
    }
  }

  // Quick fix and build to surface issues, then sync
  run('npx', ['eslint', '.', '--ext', '.js,.jsx,.ts,.tsx', '--fix']);
  run('npm', ['run', 'build']);

  // Optional error reporting
  if (process.env.CREATE_ISSUES === 'true') {
    const reporter = path.join(__dirname, 'error-reporter.cjs');
    if (fs.existsSync(reporter)) run('node', [reporter]);
  }

  // Git sync
  const syncPath = path.join(__dirname, 'git-sync.cjs');
  if (fs.existsSync(syncPath)) run('node', [syncPath]);

  log('✅ Auto-discovery runner finished');
}

main().catch(err => {
  log(`Fatal error: ${err.message}`);
  process.exit(1);
});