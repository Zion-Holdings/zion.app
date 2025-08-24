#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'adaptive-cloud-factory.log');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(logFile, line + '\n');
}

function run(command) {
  log(`$ ${command}`);
  try {
    execSync(command, { stdio: 'inherit', shell: true });
    return true;
  } catch (e) {
    log(`! ${e.message}`);
    return false;
  }
}

function readJSON(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

(function main() {
  log('🚀 Adaptive Cloud Factory starting');

  const complexityPath = path.join(process.cwd(), 'data', 'reports', 'repo-complexity.json');
  const complexity = readJSON(complexityPath);
  const avgLines = complexity?.averages?.linesPerFile || 0;
  const avgFns = complexity?.averages?.functionsPerFile || 0;

  // Simple heuristic to decide what to prioritize
  if (avgLines > 300 || avgFns > 25) {
    log('Mode: Maintainability — running scanners and audits');
    if (fs.existsSync(path.join(__dirname, 'dead-code-scanner.cjs'))) run('node automation/dead-code-scanner.cjs');
    if (fs.existsSync(path.join(__dirname, 'security-audit.cjs'))) run('node automation/security-audit.cjs');
  } else {
    log('Mode: Growth — refreshing front and homepage');
    if (fs.existsSync(path.join(__dirname, 'front-futurizer.cjs'))) run('node automation/front-futurizer.cjs');
    if (fs.existsSync(path.join(__dirname, 'homepage-updater.cjs'))) run('node automation/homepage-updater.cjs');
  }

  // Always refresh knowledge graph occasionally
  if (Math.random() < 0.5 && fs.existsSync(path.join(__dirname, 'repo-knowledge-graph.cjs'))) {
    run('node automation/repo-knowledge-graph.cjs');
  }

  // Best-effort quick lint and build
  run('npx eslint . --ext .js,.jsx,.ts,.tsx --fix || true');
  run('npm run build || true');

  // Sync any changes
  if (fs.existsSync(path.join(__dirname, 'git-sync.cjs'))) run('node automation/git-sync.cjs');

  log('✅ Adaptive Cloud Factory finished');
})();