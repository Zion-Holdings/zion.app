#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'cloud-autonomous-orchestrator.log');
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

async function main() {
  log('🚀 Cloud Autonomous Orchestrator (fast) starting');

  // Lightweight improvement and rule refresh
  if (fileExists('automation/cursor-rules-generator.cjs')) run('node automation/cursor-rules-generator.cjs');

  // Run selective single-cycle orchestrations (fast movers only)
  const tasks = [
    ['automation/revenue-ideas-orchestrator.cjs', 'once'],
    ['automation/venture-orchestrator.cjs', 'once'],
    ['automation/spec-dev-orchestrator.cjs', 'once'],
    ['automation/frontend-sync-autonomous-orchestrator.cjs', 'once 0'],
    ['automation/ui-evolution-launcher.js', 'once']
  ];

  for (const [script, args] of tasks) {
    if (fileExists(script)) run(`node ${script} ${args}`);
  }

  // Quick lint --fix (best effort)
  run('npx eslint . --ext .js,.jsx,.ts,.tsx --fix');

  // Fast build to surface breaking issues (best effort)
  run('npm run build');
  // Ensure footers are injected on build artifacts
  run('node automation/footer-injector.cjs');

  // Sync any changes
  if (fileExists('automation/git-sync.cjs')) run('node automation/git-sync.cjs');

  log('✅ Cloud Autonomous Orchestrator finished');
}

main().catch(err => {
  log(`Fatal error: ${err.message}`);
  process.exit(1);
});