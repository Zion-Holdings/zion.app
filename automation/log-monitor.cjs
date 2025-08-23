#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..', '..');
const logsDir = path.join(projectRoot, 'automation', 'logs');
const monitorLog = path.join(logsDir, 'log-monitor.log');

function ensureDir(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch {}
}

ensureDir(logsDir);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  try { fs.appendFileSync(monitorLog, line + '\n', 'utf8'); } catch {}
  process.stdout.write(line + '\n');
}

function listLogFiles() {
  try {
    return fs.readdirSync(logsDir)
      .filter((name) => name.endsWith('.log'))
      .map((name) => path.join(logsDir, name));
  } catch {
    return [];
  }
}

function fileContainsError(filePath) {
  try {
    const text = fs.readFileSync(filePath, 'utf8');
    return /(\bfatal\b|\berror\b|\bexception\b|\bfailed\b|\bcrash\b)/i.test(text);
  } catch {
    return false;
  }
}

function run(command, opts = {}) {
  const options = { stdio: 'inherit', cwd: projectRoot, env: process.env, ...opts };
  log(`$ ${command}`);
  try {
    execSync(command, options);
    return true;
  } catch (err) {
    log(`Command failed: ${err.message}`);
    return false;
  }
}

function remediate() {
  log('Starting remediation steps');

  // Quick eslint fix to catch trivial issues
  run('npm run lint --silent -- --fix || true');

  // TypeScript and syntax focused fixers (best-effort)
  const fixers = [
    'node fix_typescript_syntax_errors.cjs',
    'node fix_all_typescript_errors.cjs',
    'node fix_unused_imports.cjs',
    'node final_fix.cjs'
  ];
  for (const fixer of fixers) {
    run(`${fixer} || true`);
  }

  // Optional: basic build check to surface compile errors back into logs
  run('npm run build | cat || true');

  log('Remediation steps finished');
}

function main() {
  log('Log monitor started');
  const files = listLogFiles();
  if (!files.length) {
    log('No log files found; creating directory and exiting');
    ensureDir(logsDir);
    return;
  }

  let foundProblems = false;
  for (const file of files) {
    const hasError = fileContainsError(file);
    log(`${path.basename(file)} => ${hasError ? 'issues detected' : 'no issues'}`);
    if (hasError) foundProblems = true;
  }

  if (foundProblems) {
    remediate();
  } else {
    log('No problems detected across logs');
  }
}

main();