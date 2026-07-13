#!/usr/bin/env node
/**
 * build-wrapper.cjs — run Next.js build, then emit automation/reports/build-state.json.
 * Exits with the same code as the underlying build so CI status stays accurate.
 */
const { spawn } = require('child_process');
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
  fs.writeFileSync(STATE_FILE, JSON.stringify(payload, null, 2), 'utf8');
}

function timeMs(start) {
  return Math.round((Date.now() - start) / 1000 * 1000) / 1000;
}

const buildStart = Date.now();
const child = spawn('npx', ['next', 'build', '--webpack'], {
  cwd: REPO,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

child.on('error', (err) => {
  writeState({
    exited: false,
    spawnError: err && err.message ? err.message : String(err),
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  process.exit(1);
});

child.on('close', (code) => {
  const exitCode = typeof code === 'number' ? code : 1;
  if (exitCode === 0) {
    try {
      require('child_process').execSync('npm run postbuild', { cwd: REPO, stdio: 'inherit', shell: process.platform === 'win32' });
    } catch (postErr) {
      writeState({
        exited: true,
        exitCode,
        durationMs: timeMs(buildStart),
        postbuildError: postErr && postErr.message ? postErr.message : String(postErr),
        artifacts: probeArtifacts(),
      });
      process.exit(1);
    }
  }
  writeState({
    exited: true,
    exitCode,
    durationMs: timeMs(buildStart),
    artifacts: probeArtifacts(),
  });
  process.exit(exitCode);
});

function probeArtifacts() {
  const outDir = path.join(REPO, 'out');
  const checks = {
    out_exists: fs.existsSync(outDir),
    out_index_html_exists: fs.existsSync(path.join(outDir, 'index.html')),
    out_sitemap_exists: fs.existsSync(path.join(outDir, 'sitemap.xml')),
  };
  return checks;
}
