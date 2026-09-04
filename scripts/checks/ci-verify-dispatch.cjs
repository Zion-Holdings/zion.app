const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = process.cwd();
const STATE_DIR = path.join(REPO, 'automation', 'reports');
const VERIFY_STATE = path.join(STATE_DIR, 'build-and-verify-latest.json');
const SITEMAP_STATE = path.join(STATE_DIR, 'sitemap-validate-latest.json');
const DISPATCH_STATE = path.join(STATE_DIR, 'ci-dispatch-latest.json');

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}
function nowIso() {
  return new Date().toISOString();
}
function writeState(file, state) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(state, null, 2));
}
function run(label, cmd) {
  try {
    const out = execSync(cmd, { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { ok: true, stdout: out || '' };
  } catch (e) {
    const tail = [e.stdout, e.stderr].filter(Boolean).join('\n').split('\n').slice(-20).join('\n');
    return { ok: false, error: tail || e.message };
  }
}
function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function main() {
  const build = run('build-and-verify', 'node scripts/checks/build-and-verify.cjs');
  const sitemap = run('sitemap-validate', 'node scripts/checks/sitemap-validate-check.cjs');

  const buildState = build.ok ? readJson(VERIFY_STATE) : null;
  const sitemapState = sitemap.ok ? readJson(SITEMAP_STATE) : null;

  const dispatch = {
    checkedAt: nowIso(),
    build,
    buildState,
    sitemap,
    sitemapState,
    summary:
      (build.ok && (!buildState || buildState.next === 'verified local static export')) &&
      (sitemap.ok && /sitemap validate ok/.test(sitemap.stdout || ''))
        ? 'pass'
        : 'fail',
    next: 'dispatch_payload_ready',
  };

  writeState(DISPATCH_STATE, dispatch);
  console.log(JSON.stringify(dispatch, null, 2));
  process.exit(dispatch.summary === 'pass' ? 0 : 2);
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
