const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = process.cwd();
const OUT_DIR = path.join(REPO, 'out');
const STATE_DIR = path.join(REPO, 'automation', 'reports');
const STATE_PATH = path.join(STATE_DIR, 'continuous-build-deploy-latest.json');
const DEPLOY_SCRIPT = path.join(REPO, 'scripts', 'deploy-gh-pages-contents.cjs');

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}
function nowIso() {
  return new Date().toISOString();
}
function writeState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function checkRequired() {
  const checks = [
    path.join(OUT_DIR, 'index.html'),
    path.join(OUT_DIR, 'service-index.json'),
    path.join(OUT_DIR, '404.html'),
  ];
  for (const p of checks) {
    if (!exists(p)) throw new Error('missing required artifact: ' + path.relative(REPO, p));
  }
}

function build() {
  try {
    const output = execSync('npm run build', { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log(output);
    return true;
  } catch (err) {
    const tail = [err.stdout, err.stderr].filter(Boolean).join('\n').split('\n').slice(-20).join('\n');
    console.warn('build failed:\n' + tail);
    return false;
  }
}

function deploy(branch = 'main') {
  try {
    const output = execSync(`node ${DEPLOY_SCRIPT} ${branch}`, { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log(output);
    return { ok: true };
  } catch (err) {
    const tail = [err.stdout, err.stderr].filter(Boolean).join('\n').split('\n').slice(-20).join('\n');
    console.warn('deploy failed:\n' + tail);
    return { ok: false, error: tail || err.message };
  }
}

function main() {
  const state = {
    checkedAt: nowIso(),
    reason: null,
    action: null,
    result: null,
  };

  try {
    if (
      exists(path.join(OUT_DIR, 'index.html')) &&
      exists(path.join(OUT_DIR, 'service-index.json')) &&
      exists(path.join(OUT_DIR, '404.html'))
    ) {
      state.reason = 'existing-static-export-valid';
      state.action = 'deploy-existing-out';
      state.result = deploy('main');
    } else {
      state.reason = 'build-required-export-missing';
      state.action = 'build-then-deploy';
      const buildOk = build();
      state.build = buildOk ? 'ok' : 'failed';

      if (!buildOk) {
        state.action = 'none';
        state.result = { ok: false, error: 'build failed' };
      } else {
        try {
          checkRequired();
          state.result = deploy('main');
        } catch (e) {
          state.result = { ok: false, error: e.message };
        }
      }
    }
  } catch (err) {
    state.reason = 'runner-error';
    state.result = { ok: false, error: err.message };
  }

  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(JSON.stringify(state, null, 2));
  process.exit(state.result?.ok ? 0 : 1);
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
