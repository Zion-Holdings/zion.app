#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'continuous-automation-improvement-system.log');
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
    log(`Command failed: ${command}`);
    log(error.stdout?.toString() || error.message);
    return { ok: false, error };
  }
}

function fileExists(relPath) {
  return fs.existsSync(path.join(process.cwd(), relPath));
}

async function improvementPass() {
  log('🚀 Starting improvement pass');

  // Best-effort install if node_modules missing and package-lock exists
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules')) && fileExists('package-lock.json')) {
    run('npm ci');
  }

  // Lint fix
  run('npx eslint . --ext .js,.jsx,.ts,.tsx --fix');

  // Targeted repair scripts (best-effort, continue on failure)
  const repairCommands = [
    'node fix_typescript_syntax_errors.cjs',
    'node fix_all_typescript_errors.cjs',
    'node comprehensive_fix.cjs',
    'node fix_unused_imports.cjs',
    'node final_fix.cjs'
  ];

  for (const cmd of repairCommands) {
    if (fileExists(cmd.split(' ')[1])) {
      run(cmd);
    }
  }

  // Type-check and attempt quick lint fix again
  const typeCheck = run('npm run type-check');
  if (!typeCheck.ok) {
    log('Type-check failed. Running an additional lint --fix pass.');
    run('npx eslint . --ext .js,.jsx,.ts,.tsx --fix');
  }

  // Build to verify integrity
  const build = run('npm run build');
  if (!build.ok) {
    log('Build failed. Attempting another syntax fix pass.');
    if (fileExists('fix_typescript_syntax_errors.cjs')) run('node fix_typescript_syntax_errors.cjs');
    run('npm run build');
  }

  // Sync to Git if there are changes
  run('node automation/git-sync.cjs');

  log('✅ Improvement pass finished');
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const mode = process.argv[2] || 'continuous';
  if (mode === 'once') {
    await improvementPass();
    return;
  }

  const intervalMinutes = parseInt(process.env.IMPROVEMENT_INTERVAL_MIN || '60', 10);
  log(`⏳ Continuous mode enabled; interval ${intervalMinutes}m`);
  while (true) {
    await improvementPass();
    await sleep(intervalMinutes * 60 * 1000);
  }
}

main().catch(err => {
  log(`Fatal error: ${err.message}`);
  process.exit(1);
});
