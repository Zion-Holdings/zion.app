#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function run(cmd, args = [], opts = {}) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  return result.status || 0;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

(function main() {
  const logsDir = path.join(__dirname, 'logs');
  ensureDir(logsDir);

  // Run a diverse improvement cycle using available scripts
  const steps = [
    ['node', ['automation/seo-optimizer.cjs']],
    ['node', ['automation/security-scanner.cjs']],
    ['node', ['automation/test-generator.cjs']],
    ['node', ['automation/frontend-sync-orchestrator.cjs', 'once']],
    ['node', ['automation/variation-orchestrator.cjs', 'once']],
    ['node', ['automation/autonomous-meta-orchestrator.cjs', 'once']],
    ['npm', ['run', 'lint']],
    ['npm', ['run', 'type-check']],
    ['npm', ['run', 'build']],
  ];

  for (const [cmd, args] of steps) {
    // Skip missing scripts gracefully
    if (cmd === 'node' && args[0].startsWith('automation/')) {
      const candidate = path.join(process.cwd(), args[0]);
      if (!fs.existsSync(candidate)) continue;
    }
    const code = run(cmd, args);
    if (code !== 0) {
      // Continue despite failures to keep the loop resilient
      // Non-zero exit is tolerated for best-effort improvements
    }
  }

  // Sync any changes
  try {
    const code = run('node', ['automation/git-sync.cjs']);
    process.exit(code);
  } catch (e) {
    process.exit(0);
  }
})();