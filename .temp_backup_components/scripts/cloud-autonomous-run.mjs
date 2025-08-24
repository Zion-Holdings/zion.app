#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function run(cmd, opts = {}) {
  const start = Date.now();
  console.log(`\n[cloud-auto] Running: ${cmd}`);
  try {
    const out = execSync(cmd, { stdio: 'inherit', env: process.env, ...opts });
    console.log(`[cloud-auto] Success: ${cmd} (+${Math.round((Date.now()-start)/1000)}s)`);
    return true;
  } catch (e) {
    console.warn(`[cloud-auto] Warning (non-fatal): ${cmd} failed`);
    return false;
  }
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

(async () => {
  const logsDir = path.join(process.cwd(), 'automation_logs');
  ensureDir(logsDir);

  // Keep runs short and safe for CI
  const tasks = [
    'npm run sitemap',
    'node automation/site-link-crawler.cjs || true',
    'node automation/site-link-fixer.cjs || true',
    'node automation/responsive-content-analyzer.cjs || true',
    'node automation/design-analyzer.cjs || true',
    'node automation/spec-dev-chat-fetcher.cjs || true',
    'node automation/spec-dev-analyzer.cjs || true',
    'node automation/automation-error-scanner.cjs || true',
    'node automation/automation-error-fixer.cjs || true',
    'node automation/git-health.cjs --fast || true'
  ];

  let successCount = 0;
  for (const t of tasks) if (run(t)) successCount++;

  const report = {
    runAt: new Date().toISOString(),
    successCount,
    total: tasks.length,
    tasks,
  };
  const outPath = path.join(process.cwd(), 'data', 'reports', 'autonomous', 'last-run.json');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[cloud-auto] Wrote report: ${outPath}`);
})();