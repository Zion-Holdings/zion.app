#!/usr/bin/env node
/**
 * Exponential Content Loop Runner
 * Runs multiple back-to-back cycles of content-loop-runner.cjs with growing batch sizes
 */
const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const REPO = process.cwd();
const SCRIPT = path.join(REPO, 'automation', 'content-loop', 'content-loop-runner.cjs');
const LOG = path.join(REPO, 'automation', 'content-loop', 'generated', 'exponential-log.jsonl');

function now() { return new Date().toISOString(); }
function logEvent(evt) {
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.appendFileSync(LOG, JSON.stringify({ ts: now(), ...evt }) + '\n', 'utf8');
}
function runCycle(batch) {
  const env = { ...process.env, HERMES_CONTENT_LOOP_POSTS: String(batch) };
  try {
    const out = execSync(`node "${SCRIPT}"`, { cwd: REPO, encoding: 'utf8', stdio: 'pipe', timeout: 120000, env });
    return { ok: true, stdout: String(out.stdout || '').slice(-2000) };
  } catch (e) {
    return { ok: false, stdout: String((e.stdout || '') + (e.stderr || '')).slice(-2000), code: e.status || 1 };
  }
}

function main() {
  const args = process.argv.slice(2);
  const maxCycles = parseInt(args[0]) || 5;
  const baseBatch = parseInt(args[1]) || 3;
  const totalCreated = 0;

  logEvent({ event: 'start', maxCycles, baseBatch });

  for (let i = 1; i <= maxCycles; i++) {
    const batch = baseBatch * i;
    console.log(`\n=== Cycle ${i}/${maxCycles}: batch=${batch} ===\n`, flush=true);
    const result = runCycle(batch);
    logEvent({ event: 'cycle', cycle: i, batch, result });
    console.log(result.stdout.slice(-500), flush=true);
    if (result.code) console.error('Error:', result.code, flush=true);
  }

  logEvent({ event: 'complete' });
  console.log('\nExponential content loop complete.\n', flush=true);
}

main();
