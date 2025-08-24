#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const chokidar = require('chokidar');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'lint-monitor.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

let lintProc = null;
let pending = false;
let lastRun = 0;
const THROTTLE_MS = 5000;

function runLint(files = []) {
  const now = Date.now();
  if (now - lastRun < THROTTLE_MS) {
    pending = true;
    return;
  }
  lastRun = now;
  pending = false;

  const args = ['--ext', '.js,.jsx,.ts,.tsx'];
  if (files.length > 0) args.push(...files);

  if (lintProc && !lintProc.killed) {
    try { lintProc.kill('SIGTERM'); } catch (_) {}
  }
  log(`Running ESLint ${files.length ? `on ${files.length} file(s)` : 'on repository'}...`);
  lintProc = spawn('npx', ['eslint', '.', ...args], { cwd: path.join(__dirname, '..') });
  lintProc.stdout.on('data', d => log(d.toString().trim()));
  lintProc.stderr.on('data', d => log(`[err] ${d.toString().trim()}`));
  lintProc.on('close', code => {
    log(`ESLint exited with code ${code}`);
    if (pending) runLint();
  });
}

function startWatcher() {
  ensureDir(logsDir);
  log('Starting lint monitor...');
  const watchPaths = [path.join(__dirname, '..', 'pages'), path.join(__dirname, '..', 'components'), path.join(__dirname, '..', 'app'), path.join(__dirname, '..', 'src')];
  const existing = watchPaths.filter(p => fs.existsSync(p));
  const watcher = chokidar.watch(existing, { ignoreInitial: true, ignored: /node_modules|\.next|dist/ });

  watcher.on('all', (event, filePath) => {
    if (!filePath.match(/\.(js|jsx|ts|tsx)$/)) return;
    runLint([filePath]);
  });

  // Periodic full lint to catch missed issues
  setInterval(() => runLint(), 10 * 60 * 1000);

  // Initial run
  runLint();
}

if (require.main === module) startWatcher();
