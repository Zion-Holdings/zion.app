const fs = require('fs');
const path = require('path');
const os = require('os');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
const latestPath = path.join(reportsDir, 'autonomous-runtime-guardian-latest.json');
const historyPath = path.join(reportsDir, 'autonomous-runtime-guardian-history.json');
const warningStatePath = path.join(reportsDir, 'autonomous-runtime-guardian-warning-state.json');

function ensureReports() {
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function checkRuntimeHealth() {
  const checks = [];
  const now = new Date().toISOString();

  try {
    const root = process.platform === 'win32' ? 'C:\\' : '/';
    fs.statSync(root);
    checks.push({ name: 'disk_root_readable', status: 'pass', detail: root, ts: now });
  } catch (e) {
    checks.push({ name: 'disk_root_readable', status: 'fail', detail: e?.message || 'unknown', ts: now });
  }

  const nodeOk = process.versions && process.versions.node;
  checks.push({ name: 'node_runtime', status: nodeOk ? 'pass' : 'fail', detail: process.versions || {}, ts: now });

  const mem = os.totalmem && os.freemem ? { total: os.totalmem(), free: os.freemem() } : null;
  if (mem && mem.total > 0) {
    const freeRatio = mem.free / mem.total;
    checks.push({ name: 'memory_pressure', status: freeRatio > 0.15 ? 'pass' : 'warn', detail: { freeRatio }, ts: now });
  }

  try {
    const sitemapPath1 = path.join(process.cwd(), 'public', 'sitemap.xml');
    const sitemapPath2 = path.join(process.cwd(), 'docs', 'sitemap.xml');
    let st;
    if (fs.existsSync(sitemapPath1)) st = fs.statSync(sitemapPath1);
    else if (fs.existsSync(sitemapPath2)) st = fs.statSync(sitemapPath2);
    if (st) {
      const ageMs = Date.now() - st.mtimeMs;
      const sitemapFresh = ageMs < 1000 * 60 * 60 * 24;
      checks.push({ name: 'sitemap_freshness', status: sitemapFresh ? 'pass' : 'warn', detail: { ageMs, mtime: st.mtime }, ts: now });
    } else {
      checks.push({ name: 'sitemap_freshness', status: 'warn', detail: 'missing', ts: now });
    }
  } catch (e) {
    checks.push({ name: 'sitemap_freshness', status: 'warn', detail: e?.message || 'unknown', ts: now });
  }

  try {
    const { execSync } = require('child_process');
    const status = execSync('git status --porcelain', { encoding: 'utf8', timeout: 120000, stdio: ['ignore', 'pipe', 'ignore'] });
    const dirty = status.split('\n').filter(Boolean).length;
    checks.push({ name: 'repo_dirty', status: dirty === 0 ? 'pass' : 'warn', detail: { dirtyFiles: dirty }, ts: now });
  } catch (e) {
    checks.push({ name: 'repo_dirty', status: 'warn', detail: e?.message || 'unknown', ts: now });
  }

  const fails = checks.filter(c => c.status === 'fail').length;
  const warns = checks.filter(c => c.status === 'warn').length;
  let status = 'ok';
  if (fails > 0) status = 'critical';
  else if (warns > 2) status = 'warning';

  return { status, checks, ts: now };
}

const report = (() => {
  ensureReports();
  const result = checkRuntimeHealth();
  const history = readJson(historyPath, []);
  history.push({ ts: result.ts, status: result.status, failCount: result.checks.filter(c => c.status === 'fail').length });
  if (history.length > 200) history.splice(0, history.length - 200);
  const warningState = readJson(warningStatePath, { streak: 0, lastTs: null });
  if (result.status === 'warning') {
    warningState.streak = (warningState.streak || 0) + 1;
    warningState.lastTs = result.ts;
  } else if (result.status === 'critical') {
    warningState.streak = 0;
    warningState.lastTs = null;
  } else {
    warningState.streak = 0;
    warningState.lastTs = null;
  }

  writeJson(latestPath, result);
  writeJson(historyPath, history);
  writeJson(warningStatePath, warningState);

  const runtimeWarningEscalate = String(warningState.streak >= 3);
  const runtimeWarningClose = String(warningState.streak === 0 && warningState.lastTs !== null ? 1 : 0);

  const outputs = {
    runtime_status: result.status,
    runtime_warning_escalate: runtimeWarningEscalate,
    runtime_warning_close: runtimeWarningClose
  };

  const githubOutput = process.env.GITHUB_OUTPUT;
  if (githubOutput && fs.existsSync(githubOutput)) {
    const lines = Object.entries(outputs).map(([k, v]) => `${k}=${v}`).join('\n') + '\n';
    fs.appendFileSync(githubOutput, lines, 'utf8');
  }

  console.log(JSON.stringify({ ok: true, ...outputs, latest: result, warningState }, null, 2));
})()
