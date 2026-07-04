const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();
const outDir = path.join(repo, 'out');
const statePath = path.join(repo, 'automation/reports/build-and-verify-latest.json');

const REQUIRED = [
  path.join(outDir, 'index.html'),
  path.join(outDir, '404.html'),
  path.join(outDir, 'data', 'services.json'),
  path.join(outDir, 'service-index.json'),
];

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

function tryRun(label, cmd) {
  try {
    const out = execSync(cmd, { cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log(`${label}: ok`);
    return true;
  } catch (e) {
    console.warn(`${label} failed: ${e.stderr?.split('\n').slice(-3).join('\n') || e.message}`);
    return false;
  }
}

function ensureArtifacts(missing) {
  const needServicesJson = missing.includes(path.join(outDir, 'data', 'services.json'));
  const needServiceIndex = missing.includes(path.join(outDir, 'service-index.json'));
  let regenerated = false;
  if (needServicesJson) {
    console.log('services.json missing — generating...');
    const ok = tryRun('services.json', 'node scripts/generate_services_json.cjs');
    regenerated = ok || regenerated;
  }
  if (needServiceIndex) {
    console.log('service-index.json missing — generating...');
    const ok = tryRun('service-index.json', 'node scripts/generate_service_index.cjs');
    regenerated = ok || regenerated;
  }
  return regenerated;
}

function detectBuildError() {
  const candidates = [
    path.join(repo, '.next', 'diagnostics', 'build-diagnostics.json'),
    path.join(repo, 'logs', 'build_deploy.log'),
  ];
  for (const p of candidates) {
    if (!exists(p)) continue;
    try {
      const raw = fs.readFileSync(p, 'utf8');
      if (/\bworker exited\b|\bexit code:\s*1\b|\bENOMEM\b|\bOOM\b/i.test(raw)) {
        return 'next-build-worker-failure';
      }
    } catch {}
  }
  return null;
}

function main() {
  fs.mkdirSync(path.dirname(statePath), { recursive: true });

  let buildStatus = 'ok';
  let missing = REQUIRED.filter((f) => !exists(f));

  const buildError = detectBuildError();
  if (buildError) {
    buildStatus = 'next-build-worker-failure';
    console.warn(`Next.js build error marker detected: ${buildError}`);
  }

  let regenerated = false;
  if (missing.length > 0) {
    const before = [...missing];
    regenerated = ensureArtifacts(missing);
    missing = REQUIRED.filter((f) => !exists(f));
    if (!regenerated) {
      console.warn('Artifact regeneration did not complete.');
    }
  }

  const state = {
    checkedAt: new Date().toISOString(),
    buildStatus,
    missingNow: missing.map((m) => path.relative(repo, m)),
    missingCount: missing.length,
    artifactsGenerated: regenerated,
    buildError,
    next: missing.length === 0
      ? 'verified local static export'
      : 'build regression — inspect referenced scripts/logs',
  };

  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
  console.log(JSON.stringify(state, null, 2));
  process.exit(missing.length === 0 ? 0 : 2);
}

try { main(); } catch (e) { console.error(e); process.exit(1); }
