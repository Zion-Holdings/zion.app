const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function runGitSync() {
  try {
    const script = path.resolve(process.cwd(), 'automation', 'advanced-git-sync.cjs');
    const res = spawnSync('node', [script], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0 };
  } catch (e) {
    return { status: 1 };
  }
}

exports.handler = async () => {
  const root = process.cwd();
  const pkgPath = path.join(root, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const report = {
    generatedAt: new Date().toISOString(),
    project: pkg.name,
    license: pkg.license || 'UNSPECIFIED',
    repository: (pkg.repository && pkg.repository.url) || '',
    note: 'Dependency license deep-scan requires additional tooling; this is a basic project-level audit.'
  };
  const outDir = path.join(root, 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'license-audit.json'), JSON.stringify(report, null, 2));
  const git = runGitSync();
  return { statusCode: 200, body: JSON.stringify({ ok: true, git }) };
};