const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();
const outDir = path.join(repo, 'out');
const docsDir = path.join(repo, 'docs');
const statePath = path.join(repo, 'automation/reports/build-and-verify-latest.json');

const exportDir = fs.existsSync(outDir) ? outDir : (fs.existsSync(docsDir) ? docsDir : null);

const REQUIRED = exportDir
  ? [
      path.join(exportDir, 'index.html'),
      path.join(exportDir, '404.html'),
      path.join(exportDir, 'service-index.json'),
    ]
  : [];

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

function hasServiceDataArtifact() {
  return exists(path.join(exportDir || outDir, 'data', 'services.json')) || exists(path.join(exportDir || outDir, 'service-index.json'));
}

function ensureArtifacts(missing) {
  let regenerated = false;
  if (!hasServiceDataArtifact()) {
    console.log('service data missing — generating service-index.json...');
    const ok = tryRun('service-index.json', 'node scripts/generate_service_index.cjs');
    regenerated = ok || regenerated;
  }
  if (!exists(path.join(exportDir || outDir, 'index.html'))) {
    console.log('index.html missing — attempting build...');
    const ok = tryRun('build', 'npm run build');
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

function parseExportMappersCount() {
  const mapperPath = path.join(repo, '.next', 'export-mappers.json')
  if (!exists(mapperPath)) return 0
  try {
    const raw = JSON.parse(fs.readFileSync(mapperPath, 'utf8'))
    const keys = Object.keys(raw)
    const targets = ['/','/portal','/contact','/services/ai-agents-autonomous']
    return keys.filter((k) => targets.includes(k) || targets.some(t => k === t || k.startsWith(`${t}/`))).length
  } catch { return 0 }
}

function routeHtmlCount() {
  const roots = [outDir, path.join(outDir, 'portal'), path.join(outDir, 'contact'), path.join(outDir, 'services', 'ai-agents-autonomous')]
  return roots.filter((r) => exists(path.join(r, 'index.html'))).length
}

function logEntity(rel) {
  const p = path.join(repo, rel)
  if (!exists(p)) return
  try {
    const raw = fs.readFileSync(p, 'utf8')
    console.log(`${rel}: present`)
    if (/export-mappers/.test(rel) && /\/portal|\/contact|\/services\/ai-agents-autonomous/.test(raw)) {
      console.log(`${rel}: route-rooted`)
    }
  } catch {}
}

function main() {
  fs.mkdirSync(path.dirname(statePath), { recursive: true });

  logEntity('.next/export-mappers.json')
  logEntity('.next/build/static/index.html')
  const mapperCount = parseExportMappersCount()
  const htmlCount = routeHtmlCount()
  console.log(`export mapper_route_count=${mapperCount} html_route_count=${htmlCount}`)

  let buildStatus = 'ok';
  let missing = REQUIRED.filter((f) => !exists(f));

  const buildError = detectBuildError();
  if (buildError) {
    buildStatus = 'next-build-worker-failure';
    console.warn(`Next.js build error marker detected: ${buildError}`);
  }

  let regenerated = false;
  if (missing.length > 0) {
    console.warn('required artifacts missing — attempting local build/remediation...');
    const buildOk = tryRun('build', 'npm run build');
    if (!buildOk) {
      console.warn('build failed — skipping further local remediation');
    } else {
      const afterRequired = REQUIRED.filter((f) => !exists(f));
      console.log(`postbuild required_missing=${afterRequired.length} mapper_route_count=${mapperCount} html_route_count=${htmlCount}`)
      if (afterRequired.length) {
        regenerated = ensureArtifacts(afterRequired);
        missing = REQUIRED.filter((f) => !exists(f));
      }
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
