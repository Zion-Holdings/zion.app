#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

const AUTOMATION_DIR = __dirname;
const LOG_DIR = path.join(AUTOMATION_DIR, 'logs');
const PID_FILE = path.join(LOG_DIR, 'supervisor-orchestrator.pid');
const LOG_FILE = path.join(LOG_DIR, 'supervisor-orchestrator.log');

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function readJsonSafe(filePath, fallback) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return fallback; }
}

function getConfig() {
  const cfgPath = path.join(AUTOMATION_DIR, 'supervisor-config.json');
  const cfg = readJsonSafe(cfgPath, {});
  cfg.exclude = cfg.exclude || ['supervisor-cron.sh'];
  cfg.protect = cfg.protect || ['self-healing-cron.sh'];
  cfg.intervalSeconds = cfg.intervalSeconds || 300;
  return cfg;
}

function listCronScripts() {
  const entries = fs.readdirSync(AUTOMATION_DIR).filter((f) => f.endsWith('-cron.sh'));
  const cfg = getConfig();
  const filtered = entries.filter((f) => !cfg.exclude.includes(f));
  return filtered.map((file) => ({
    name: file,
    absPath: path.join(AUTOMATION_DIR, file),
    pidFile: path.join(LOG_DIR, file.replace(/\.sh$/, '.pid')),
    logFile: path.join(LOG_DIR, file.replace(/\.sh$/, '.log')),
    protected: cfg.protect.includes(file),
  }));
}

function isProcessRunning(pid) {
  try {
    if (!pid) return false;
    process.kill(pid, 0);
    return true;
  } catch { return false; }
}

function getCronStatus(cron) {
  try {
    if (fs.existsSync(cron.pidFile)) {
      const pidStr = fs.readFileSync(cron.pidFile, 'utf8').trim();
      const pid = parseInt(pidStr, 10);
      if (pid && isProcessRunning(pid)) return { running: true, pid };
    }
  } catch {}
  return { running: false, pid: null };
}

function startCron(cron) {
  const status = getCronStatus(cron);
  if (status.running) { log(`✅ ${cron.name} already running (PID ${status.pid})`); return; }
  try {
    // Run the cron script which backgrounds itself and writes its own PID file
    execSync(`bash "${cron.absPath}"`, { stdio: 'pipe', cwd: AUTOMATION_DIR });
    log(`🚀 Started ${cron.name}`);
  } catch (e) {
    log(`❌ Failed to start ${cron.name}: ${e.message}`);
  }
}

function stopCron(cron) {
  try {
    if (fs.existsSync(cron.pidFile)) {
      const pid = parseInt(fs.readFileSync(cron.pidFile, 'utf8').trim(), 10);
      if (pid && isProcessRunning(pid)) {
        try { process.kill(pid); } catch {}
      }
      try { fs.unlinkSync(cron.pidFile); } catch {}
      log(`🛑 Stopped ${cron.name}`);
    } else {
      log(`ℹ️ ${cron.name} not running (no pid file)`);
    }
  } catch (e) {
    log(`⚠️ Failed to stop ${cron.name}: ${e.message}`);
  }
}

function scanIssues() {
  try {
    const scanner = require(path.join(AUTOMATION_DIR, 'automation-error-scanner.cjs'));
    const result = scanner.scanOnce();
    return result.issues || [];
  } catch (e) {
    log(`⚠️ scanner failed: ${e.message}`);
    return [];
  }
}

function applyFixes(issues) {
  try {
    const fixer = require(path.join(AUTOMATION_DIR, 'automation-error-fixer.cjs'));
    const fixedCount = fixer.runFixes(issues);
    log(`🔧 Applied ${fixedCount} fixes from scanner issues`);
  } catch (e) {
    log(`⚠️ fixer module path failed, falling back to CLI: ${e.message}`);
    try {
      execSync(`node automation/automation-error-fixer.cjs`, { cwd: path.join(AUTOMATION_DIR, '..'), stdio: 'pipe' });
      log(`🔧 Applied fixes via CLI`);
    } catch (e2) {
      log(`❌ fixer CLI failed: ${e2.message}`);
    }
  }
}

function runLocalCodeFixers() {
  const repoRoot = path.join(AUTOMATION_DIR, '..');
  const candidates = [
    'fix_typescript_syntax_errors.cjs',
    'fix_unused_imports.cjs',
    'fix_remaining_errors.cjs',
    'fix_empty_files.cjs',
    'fix_empty_pages.js',
    'fix_corrupted_files.js',
    'fix_utils_files.js',
  ];
  for (const script of candidates) {
    const abs = path.join(repoRoot, script);
    if (!fs.existsSync(abs)) continue;
    try {
      execSync(`node "${abs}"`, { stdio: 'pipe', cwd: repoRoot });
      log(`🧹 Ran ${script}`);
    } catch (e) {
      log(`⚠️ ${script} failed: ${e.message}`);
    }
  }
}

function typeCheckOk() {
  try {
    execSync('npm run -s type-check', { stdio: 'pipe', cwd: path.join(AUTOMATION_DIR, '..') });
    return true;
  } catch { return false; }
}

function evaluateProjectHealth() {
  const issues = scanIssues();
  const typecheck = typeCheckOk();
  return { issues, typecheck };
}

function pauseAll(crons) {
  for (const c of crons) {
    if (c.protected) { log(`🛡️ Skipping protected cron ${c.name}`); continue; }
    stopCron(c);
  }
}

function restartAll(crons) {
  for (const c of crons) {
    startCron(c);
  }
}

function oneCycle() {
  log('🔎 Supervisor cycle begin');
  const crons = listCronScripts();

  // Ensure expected crons are running (keep good ones running)
  for (const cron of crons) {
    const status = getCronStatus(cron);
    if (!status.running) startCron(cron);
  }

  // Evaluate health
  const { issues, typecheck } = evaluateProjectHealth();
  if (issues.length === 0 && typecheck) {
    log('✅ Healthy state');
    return;
  }

  // If unhealthy: pause, fix, restart
  log(`❗ Unhealthy detected: issues=${issues.length}, typecheck=${typecheck}`);
  pauseAll(crons);
  if (issues.length) applyFixes(issues);
  runLocalCodeFixers();

  const typecheckAfter = typeCheckOk();
  log(`📊 Type-check after fixes: ${typecheckAfter}`);

  restartAll(crons);
  log('🔁 Supervisor cycle end');
}

function startContinuous() {
  if (fs.existsSync(PID_FILE)) {
    const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
    if (pid && isProcessRunning(pid)) {
      log(`✅ Supervisor already running (PID ${pid})`);
      return;
    }
  }
  const cfg = getConfig();
  const child = spawn(process.execPath, [__filename, 'run-loop', String(cfg.intervalSeconds)], {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();
  fs.writeFileSync(PID_FILE, String(child.pid));
  log(`🚀 Supervisor started (PID ${child.pid})`);
}

function stopContinuous() {
  if (!fs.existsSync(PID_FILE)) { log('ℹ️ Supervisor not running'); return; }
  const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
  if (pid && isProcessRunning(pid)) {
    try { process.kill(pid); } catch {}
  }
  try { fs.unlinkSync(PID_FILE); } catch {}
  log('🛑 Supervisor stopped');
}

function status() {
  if (fs.existsSync(PID_FILE)) {
    const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
    if (pid && isProcessRunning(pid)) {
      log(`✅ Supervisor running (PID ${pid})`);
    } else {
      log('❌ Supervisor pid file present but process not running');
    }
  } else {
    log('❌ Supervisor not running');
  }
  const crons = listCronScripts();
  for (const c of crons) {
    const s = getCronStatus(c);
    log(`- ${c.name}: ${s.running ? `running (PID ${s.pid})` : 'stopped'}${c.protected ? ' [protected]' : ''}`);
  }
}

function runLoop(intervalSeconds) {
  const interval = Math.max(60, parseInt(intervalSeconds, 10) || 300);
  log(`⏱️ Run-loop every ${interval}s`);
  const tick = () => {
    try { oneCycle(); } catch (e) { log(`💥 Cycle error: ${e.message}`); }
  };
  tick();
  setInterval(tick, interval * 1000);
}

const cmd = process.argv[2] || 'status';
if (cmd === 'start') startContinuous();
else if (cmd === 'stop') stopContinuous();
else if (cmd === 'status') status();
else if (cmd === 'run') oneCycle();
else if (cmd === 'run-loop') runLoop(process.argv[3]);
else if (cmd === 'restart') { stopContinuous(); startContinuous(); }
else {
  console.log('Usage: supervisor-orchestrator.cjs {start|stop|status|run|run-loop <seconds>|restart}');
  process.exit(1);
}