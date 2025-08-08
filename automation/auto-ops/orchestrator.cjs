#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

function run(command, options = {}) {
  return new Promise((resolve) => {
    exec(command, { timeout: 60000, maxBuffer: 10 * 1024 * 1024, ...options }, (error, stdout, stderr) => {
      resolve({ ok: !error, code: error ? (error.code ?? 1) : 0, stdout: String(stdout ?? ''), stderr: String(stderr ?? '') });
    });
  });
}

async function main() {
  const projectRoot = path.resolve(__dirname, '../../');
  const autoOpsDir = path.join(projectRoot, 'automation', 'auto-ops');
  const fixesDir = path.join(autoOpsDir, 'ops-fixes');
  await fs.ensureDir(fixesDir);

  console.log('🔎 Running Auto-Ops detector...');
  await run('node automation/auto-ops/detector.cjs', { cwd: projectRoot, env: { ...process.env, CI: '1' } });

  console.log('🏭 Running Auto-Ops factory...');
  await run('node automation/auto-ops/factory.cjs', { cwd: projectRoot, env: { ...process.env, CI: '1' } });

  // Execute any new fixers created in the last few minutes
  const entries = await fs.readdir(fixesDir).catch(() => []);
  const now = Date.now();
  for (const file of entries) {
    const full = path.join(fixesDir, file);
    const stat = await fs.stat(full).catch(() => null);
    if (!stat || !stat.isFile()) continue;
    if (!file.endsWith('.cjs')) continue;
    if (now - stat.mtimeMs > 5 * 60 * 1000) continue; // only run recent creations
    console.log('🛠️ Executing fixer:', file);
    const res = await run(`node ${JSON.stringify(full)}`, { cwd: projectRoot, env: { ...process.env, CI: '1' } });
    if (!res.ok) {
      console.error('Fixer failed:', file, res.stderr || res.stdout);
    } else {
      console.log('Fixer succeeded:', file);
    }
  }
  console.log('✅ Auto-Ops cycle complete');
}

main().catch((err) => {
  console.error('Auto-Ops orchestrator failed:', err && err.message ? err.message : String(err));
  process.exit(0);
});