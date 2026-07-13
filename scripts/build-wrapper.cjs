#!/usr/bin/env node
/**
 * build-wrapper.cjs — run Next.js build with preflight checks, then emit automation/reports/build-state.json.
 * Exits with the same code as the underlying build so CI status stays accurate.
 */
const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

function preflightFail(msg) {
  writeState({
    phase: 'preflight-failed',
    error: msg,
    buildExitCode: null,
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  console.error('[build-wrapper] preflight failed:', msg);
  process.exit(1);
}

const buildStart = Date.now();
writeState({ phase: 'wrapper-start' });

try {
  if (!fs.existsSync(path.join(REPO, 'package.json'))) preflightFail('package.json missing');
  if (!fs.existsSync(path.join(REPO, 'node_modules'))) preflightFail('node_modules missing');
  const requiredBinaries = ['node'];
  for (const bin of requiredBinaries) {
    try { execSync('command -v ' + bin, { stdio: 'ignore' }); }
    catch { preflightFail('missing binary: ' + bin); }
  }

  for (const mod of ['react', 'react-dom', 'next']) {
    try { require(mod); }
    catch (e) { preflightFail('required module missing: ' + mod + ' — ' + (e && e.message ? e.message : String(e))); }
  }
} catch (e) {
  preflightFail(String(e.message || e));
}

const child = spawn('npx', ['next', 'build', '--webpack'], {
  cwd: REPO,
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
});

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
  const buildExit = typeof code === 'number' ? code : 1;
  if (buildExit !== 0) {
    writeState({
      phase: 'build-failed',
      buildExitCode: buildExit,
      durationMs: timeMs(buildStart),
      artifacts: probeArtifacts(),
    });
    process.exit(buildExit);
  }

  writeState({ phase: 'after-build', buildExitCode: 0, durationMs: timeMs(buildStart), artifacts: probeArtifacts() });

  let postbuildExit = 0;
  try {
    execSync('npm run postbuild', { cwd: REPO, stdio: 'inherit', shell: process.platform === 'win32' });
  } catch (postErr) {
    postbuildExit = postErr && postErr.status ? postErr.status : 1;
    writeState({
      phase: 'postbuild-failed',
      buildExitCode: 0,
      postbuildExitCode: postbuildExit,
      postbuildError: postErr && postErr.message ? postErr.message : String(postErr),
      durationMs: timeMs(buildStart),
      artifacts: probeArtifacts(),
    });
    process.exit(1);
  }

  writeState({
    phase: 'postbuild-ok',
    buildExitCode: 0,
    postbuildExitCode: 0,
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  process.exit(0);
});

process.on('SIGTERM', () => process.exit(124));
process.on('SIGINT', () => process.exit(130));
