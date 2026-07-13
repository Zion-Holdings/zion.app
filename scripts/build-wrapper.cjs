#!/usr/bin/env node
/**
 * build-wrapper.cjs — run Next.js build, then emit automation/reports/build-state.json.
 * Exits with the same code as the underlying build so CI status stays accurate.
 * Also emits a state artifact even when the wrapper is killed/cancelled.
 */
const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('process');

const REPO = path.resolve(path.join(__dirname, '..'));
const STATE_DIR = path.join(REPO, 'automation', 'reports');
const STATE_FILE = path.join(STATE_DIR, 'build-state.json');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (e) {}
}

function writeState(payload) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(STATE_FILE, JSON.stringify({ ...payload, wroteAt: new Date().toISOString() }, null, 2), 'utf8');
}

function probeArtifacts() {
  const outDir = path.join(REPO, 'out');
  const dataDir = path.join(outDir, 'data');
  let servicesJsonExists = false;
  try { servicesJsonExists = fs.existsSync(path.join(dataDir, 'services.json')); } catch (e) {}
  return {
    out_exists: fs.existsSync(outDir),
    out_index_html_exists: fs.existsSync(path.join(outDir, 'index.html')),
    out_404_html_exists: fs.existsSync(path.join(outDir, '404.html')),
    out_service_index_exists: fs.existsSync(path.join(outDir, 'service-index.json')),
    out_services_data_exists: servicesJsonExists,
  };
}

function timeMs(start) {
  return Math.round((Date.now() - start) / 1000 * 1000) / 1000;
}

writeState({ phase: 'wrapper-start', repo: REPO });

const buildStart = Date.now();
const child = spawn('npx', ['next', 'build', '--webpack'], {
  cwd: REPO,
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
});

let buildExit = null;
child.on('error', (err) => {
  writeState({
    phase: 'spawn-error',
    error: err && err.message ? err.message : String(err),
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  process.exit(1);
});

child.on('close', (code) => {
  buildExit = typeof code === 'number' ? code : 1;
  const exited = buildExit === 0;
  writeState({
    phase: exited ? 'after-build' : 'build-failed',
    buildExitCode: buildExit,
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  console.log(`[build-wrapper] next build exit=${buildExit}`);
  process.exit(buildExit);
});

process.on('SIGTERM', () => {
  if (buildExit === null) {
    writeState({ phase: 'sigterm', durationMs: timeMs(buildStart) });
    process.exit(124);
  }
});
process.on('SIGINT', () => {
  if (buildExit === null) {
    writeState({ phase: 'sigint', durationMs: timeMs(buildStart) });
    process.exit(130);
  }
});
