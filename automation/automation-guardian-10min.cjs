#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'automation-guardian-10min.log');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(logFile, line + '\n');
}

function run(command, options = {}) {
  log(`$ ${command}`);
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf8', ...options });
    if (output && output.trim()) log(output.trim());
    return { ok: true, output };
  } catch (error) {
    const out = (error.stdout?.toString() || error.message || '').trim();
    if (out) log(out);
    return { ok: false, error };
  }
}

function fileExists(relPath) {
  return fs.existsSync(path.join(process.cwd(), relPath));
}

function nodeFileExists(relPath) {
  return fs.existsSync(path.join(process.cwd(), relPath)) || fs.existsSync(path.join(__dirname, relPath));
}

function tryNode(script, args = '') {
  const scriptPath = path.join('automation', script);
  if (!fileExists(scriptPath)) return { skipped: true };
  return run(`node ${scriptPath} ${args}`);
}

function tryNodeDirect(scriptPath, args = '') {
  if (!fileExists(scriptPath)) return { skipped: true };
  return run(`node ${scriptPath} ${args}`);
}

function collectFactories() {
  const dir = __dirname;
  const entries = fs.readdirSync(dir);
  return entries.filter(name => name.endsWith('-factory.cjs'));
}

async function main() {
  log('🚀 Automation Guardian (10m) starting');

  // Best-effort install if node_modules missing
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules')) && fileExists('package-lock.json')) {
    run('npm ci');
  }

  // Quick status/report from unified launcher if available
  if (nodeFileExists(path.join(__dirname, 'launch-all-automation.cjs'))) {
    tryNode('launch-all-automation.cjs', 'report');
  }

  // Generate smoke-test agents to ensure coverage grows over time
  tryNode('smoke-test-factory.cjs');

  // Lint and quick fixes
  run('npx eslint . --ext .js,.jsx,.ts,.tsx --fix');

  // Targeted repair/improvement pass
  tryNode('continuous-automation-improvement-system.js', 'once');

  // Run a battery of orchestrators in single-cycle where supported
  const singleCycle = [
    'monetization-orchestrator.cjs once',
    'revenue-ideas-orchestrator.cjs once',
    'venture-orchestrator.cjs once',
    'ui-evolution-launcher.js once',
    'spec-dev-orchestrator.cjs once',
    'frontend-sync-autonomous-orchestrator.cjs once 0'
  ];
  for (const entry of singleCycle) {
    const [script, ...args] = entry.split(' ');
    const rel = path.join('automation', script);
    if (fileExists(rel)) {
      run(`node ${rel} ${args.join(' ')}`);
    }
  }

  // Run all discovered *-factory.cjs to keep agents up-to-date (best effort)
  for (const factory of collectFactories()) {
    const rel = path.join('automation', factory);
    tryNodeDirect(rel);
  }

  // Type-check and build as health tests
  const typeCheck = run('npm run type-check');
  if (!typeCheck.ok) {
    log('Type-check failed, attempting quick syntax repair');
    if (fileExists('fix_typescript_syntax_errors.cjs')) run('node fix_typescript_syntax_errors.cjs');
  }
  const build = run('npm run build');
  if (!build.ok) {
    log('Build failed, attempting comprehensive_fix then rebuild');
    if (fileExists('comprehensive_fix.cjs')) run('node comprehensive_fix.cjs');
    run('npm run build');
  }

  // Sync any changes back to the repo
  tryNode('git-sync.cjs');

  log('✅ Automation Guardian (10m) finished');
}

main().catch(err => {
  log(`Fatal error: ${err.message}`);
  process.exit(1);
});