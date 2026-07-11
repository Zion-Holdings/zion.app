#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const execFileP = promisify(execFile);

const REPORT_PATH = path.join(process.cwd(), 'automation', 'reports', 'site-improvement-agent-latest.json');

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function runSiteCheck() {
  // Prefer existing lightweight integrity tooling if available
  const candidates = [
    ['./automation/site_integrity_run.py', 'node'],
    ['./automation/site_integrity_check.py', 'python3'],
    ['./automation/check200.cjs', 'node'],
    ['./automation/verify_200.py', 'python3'],
  ];

  for (const [script, runner] of candidates) {
    if (await exists(script)) {
      try {
        const { stdout } = await execFileP(runner, [script], { maxBuffer: 50 * 1024 * 1024, timeout: 5 * 60 * 1000 });
        return { ok: true, script, runner, output: (stdout || '').slice(0, 20000) };
      } catch (err) {
        return { ok: false, script, runner, output: (err.stdout || err.message || '').slice(0, 20000) };
      }
    }
  }

  return { ok: false, script: null, runner: null, output: 'No usable site check script found.' };
}

async function main() {
  const check = await runSiteCheck();
  const result = {
    timestamp: new Date().toISOString(),
    event: 'scheduled',
    action: 'ai-site-improvement-agent',
    continuation: check.ok,
    script: check.script,
    runner: check.runner,
    output: check.output,
  };

  await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
  await fs.writeFile(REPORT_PATH, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Saved report: ${REPORT_PATH}`);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
