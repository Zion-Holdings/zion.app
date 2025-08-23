#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = path.join(LOG_DIR, 'code-health-factory.log');

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function run(cmd) {
  log(`$ ${cmd}`);
  try {
    const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8', cwd: ROOT });
    if (out && out.trim()) log(out.trim());
    return true;
  } catch (e) {
    const out = (e.stdout || e.stderr || e.message || '').toString();
    if (out && out.trim()) log(out.trim());
    return false;
  }
}

function main() {
  const mode = process.argv[2] || 'generate';
  switch (mode) {
    case 'generate':
      // Nothing to generate; ensure orchestrator is present
      const orchestrator = path.join(__dirname, 'code-health-orchestrator.cjs');
      if (fs.existsSync(orchestrator)) {
        log('✅ Code health orchestrator verified');
      } else {
        log('❌ Orchestrator missing');
        process.exit(1);
      }
      break;
    case 'check':
      run('node automation/code-health-orchestrator.cjs check --build');
      break;
    case 'fix':
      run('node automation/code-health-orchestrator.cjs fix');
      break;
    case 'continuous':
      run('node automation/code-health-orchestrator.cjs continuous');
      break;
    case 'status':
      run('node automation/code-health-orchestrator.cjs status');
      break;
    default:
      console.log('Usage: node automation/code-health-factory.cjs [generate|check|fix|continuous|status]');
  }
}

main();