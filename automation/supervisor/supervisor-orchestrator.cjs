#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync, execSync } = require('child_process');
const os = require('os');

// Configuration
const WORKSPACE_ROOT = '/workspace';
const AUTOMATION_DIR = path.join(WORKSPACE_ROOT, 'automation');
const LOG_DIR = path.join(AUTOMATION_DIR, 'logs');
const SUPERVISOR_LOG = path.join(LOG_DIR, 'supervisor.log');
const STATUS_REPORT = path.join(WORKSPACE_ROOT, 'data', 'reports', 'supervisor', 'status.json');
const CONFIG_PATH = path.join(AUTOMATION_DIR, 'supervisor', 'supervisor-config.json');

ensureDirectory(LOG_DIR);
ensureDirectory(path.dirname(STATUS_REPORT));

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(SUPERVISOR_LOG, line + os.EOL);
}

function readConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    }
  } catch (e) {
    log(`⚠️ Failed to read config: ${e.message}`);
  }
  return {
    includePatterns: ['*-cron.sh'],
    exclude: [],
    errorKeywords: ['error', 'fatal', 'TypeError', 'ReferenceError', 'UnhandledPromiseRejection', 'ENOENT', 'EADDRINUSE'],
    tailLines: 200,
    intervalSeconds: 180,
  };
}

function listCronScripts(config) {
  const entries = fs.readdirSync(AUTOMATION_DIR, { withFileTypes: true });
  const files = entries
    .filter(e => e.isFile() && config.includePatterns.some(p => matchPattern(e.name, p)))
    .map(e => e.name)
    .filter(name => !config.exclude.includes(name));
  return files.sort();
}

function matchPattern(filename, pattern) {
  // very small glob support: '*' wildcard
  if (pattern === '*') return true;
  const escaped = pattern.replace(/[-/\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*');
  const regex = new RegExp(`^${escaped}$`);
  return regex.test(filename);
}

function getBaseFromCronScript(cronScript) {
  // example: variation-cron.sh -> variation-cron
  return path.basename(cronScript, '.sh');
}

function getPidPath(base) {
  // convention used by existing scripts
  return path.join(LOG_DIR, `${base}.pid`);
}

function getLogPath(base) {
  return path.join(LOG_DIR, `${base}.log`);
}

function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return false;
  }
}

function tailFile(filePath, maxLines) {
  if (!fs.existsSync(filePath)) return '';
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const lines = raw.split(/\r?\n/);
    return lines.slice(-maxLines).join('\n');
  } catch (e) {
    return '';
  }
}

function detectErrorsInLog(logContent, keywords) {
  const lower = logContent.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()))
}

function runCommand(argv, opts = {}) {
  const [cmd, ...args] = argv;
  try {
    const result = spawnSync(cmd, args, { encoding: 'utf8', stdio: 'pipe', ...opts });
    const code = result.status ?? 0;
    return { ok: code === 0, code, stdout: result.stdout || '', stderr: result.stderr || '' };
  } catch (e) {
    return { ok: false, code: 1, stdout: '', stderr: e.message };
  }
}

function tryStartCron(scriptPath) {
  // Try with explicit start, then without args
  let result = runCommand(['bash', scriptPath, 'start']);
  if (!result.ok) {
    result = runCommand(['bash', scriptPath]);
  }
  return result;
}

function tryStopCron(scriptPath, pidPath) {
  // Try graceful stop, else kill PID file
  let result = runCommand(['bash', scriptPath, 'stop']);
  if (!result.ok) {
    if (fs.existsSync(pidPath)) {
      const pidText = fs.readFileSync(pidPath, 'utf8').trim();
      const pid = Number(pidText);
      if (Number.isFinite(pid)) {
        try { process.kill(pid, 'SIGTERM'); } catch (_) {}
        // give a moment, then SIGKILL if needed
        setTimeout(() => { try { process.kill(pid, 'SIGKILL'); } catch (_) {} }, 500);
      }
      try { fs.unlinkSync(pidPath); } catch (_) {}
    }
  }
  return result;
}

function runFixRoutines() {
  if (process.env.SUPERVISOR_DISABLE_FIXES === '1') {
    log('⏭️ Fix routines disabled by SUPERVISOR_DISABLE_FIXES=1');
    return;
  }
  const fixes = [
    '/workspace/fix_typescript_syntax_errors.cjs',
    '/workspace/fix_unused_imports.cjs',
    '/workspace/fix_empty_files.cjs',
    '/workspace/fix_empty_pages.js',
    '/workspace/fix_corrupted_files.js',
    '/workspace/fix_utils_files.js',
    '/workspace/comprehensive_fix.cjs',
    '/workspace/final_fix.cjs',
  ];
  for (const script of fixes) {
    if (!fs.existsSync(script)) continue;
    log(`🛠️ Running fix: ${path.basename(script)}`);
    try {
      const out = execSync(`node ${script}`, { encoding: 'utf8', stdio: 'pipe' });
      if (out && out.trim()) log(out.trim());
    } catch (e) {
      log(`⚠️ Fix failed (${path.basename(script)}): ${(e.stdout || e.message || '').toString().slice(0, 500)}`);
    }
  }
  // quick type check to validate
  try {
    log('🔎 Running type-check...');
    const out = execSync('npm run -s type-check', { cwd: WORKSPACE_ROOT, encoding: 'utf8', stdio: 'pipe' });
    if (out && out.trim()) log(out.trim());
  } catch (e) {
    log(`⚠️ Type-check reported issues: ${(e.stdout || e.message || '').toString().slice(0, 500)}`);
  }
}

function writeStatusReport(status) {
  try {
    fs.writeFileSync(STATUS_REPORT, JSON.stringify(status, null, 2) + '\n');
  } catch (e) {
    log(`⚠️ Failed to write status report: ${e.message}`);
  }
}

function supervisorOnce() {
  const config = readConfig();
  const cronScripts = listCronScripts(config);
  const timestamp = new Date().toISOString();

  const summary = { timestamp, managed: [], totals: { ok: 0, restarted: 0, fixed: 0, errors: 0, started: 0, stopped: 0 } };

  for (const scriptName of cronScripts) {
    const scriptPath = path.join(AUTOMATION_DIR, scriptName);
    const base = getBaseFromCronScript(scriptName); // e.g., variation-cron
    const pidPath = getPidPath(base);
    const logPath = getLogPath(base);

    let running = false;
    let pid = null;
    if (fs.existsSync(pidPath)) {
      const pidText = fs.readFileSync(pidPath, 'utf8').trim();
      const pidNum = Number(pidText);
      if (Number.isFinite(pidNum) && isProcessAlive(pidNum)) {
        running = true;
        pid = pidNum;
      }
    }

    const logTail = tailFile(logPath, config.tailLines);
    const hasErrors = detectErrorsInLog(logTail, config.errorKeywords);

    const entry = { script: scriptName, base, pid, running, logPath, pidPath, hasErrors, actions: [] };

    if (!running) {
      log(`ℹ️ ${base}: not running. Starting...`);
      const startRes = tryStartCron(scriptPath);
      entry.actions.push('start');
      if (!startRes.ok) {
        summary.totals.errors += 1;
        log(`❌ ${base}: failed to start (${startRes.code}). ${startRes.stderr || startRes.stdout}`);
      } else {
        summary.totals.started += 1;
        log(`✅ ${base}: started`);
      }
    } else if (hasErrors) {
      log(`⚠️ ${base}: errors detected. Stopping, fixing, and restarting...`);
      tryStopCron(scriptPath, pidPath);
      summary.totals.stopped += 1;
      entry.actions.push('stop');

      runFixRoutines();
      summary.totals.fixed += 1;
      entry.actions.push('fix');

      const startRes = tryStartCron(scriptPath);
      entry.actions.push('restart');
      if (!startRes.ok) {
        summary.totals.errors += 1;
        log(`❌ ${base}: failed to restart (${startRes.code}). ${startRes.stderr || startRes.stdout}`);
      } else {
        summary.totals.restarted += 1;
        log(`✅ ${base}: restarted`);
      }
    } else {
      summary.totals.ok += 1;
      log(`✅ ${base}: running healthy (PID ${pid || 'n/a'})`);
    }

    summary.managed.push(entry);
  }

  writeStatusReport(summary);
  return summary;
}

function startContinuous(intervalSeconds) {
  log('🚀 Supervisor started (continuous mode)');
  // immediate run
  supervisorOnce();
  setInterval(() => {
    try {
      supervisorOnce();
    } catch (e) {
      log(`💥 Supervisor iteration failed: ${e.message}`);
    }
  }, Math.max(30, intervalSeconds) * 1000);
}

(function main() {
  const arg = process.argv[2] || 'continuous';
  const config = readConfig();
  switch (arg) {
    case 'run-once':
      supervisorOnce();
      break;
    case 'continuous':
    default:
      startContinuous(config.intervalSeconds || 180);
      break;
  }
})();