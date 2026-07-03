const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = process.cwd();
const outDir = path.join(repo, 'out');
const statePath = path.join(repo, 'automation/reports/build-and-verify-latest.json');
const requiredOutputs = [
  path.join(outDir, 'index.html'),
  path.join(outDir, '404.html'),
  path.join(outDir, 'data', 'services.json'),
];

let buildStatus = 'ok';
try {
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  execSync(cmd + ' next build --webpack', { cwd: repo, stdio: 'inherit', timeout: 20 * 60 * 1000 });
} catch (err) {
  console.error('build failed: ' + err.message);
  buildStatus = 'build_failed';
}

const missing = requiredOutputs.filter((filePath) => !fs.existsSync(filePath));
const state = {
  builtAt: new Date().toISOString(),
  buildStatus,
  stagedFallback: buildStatus !== 'ok' || missing.length > 0,
  stagedOutputsPresent: missing.length === 0,
  outputsChecked: requiredOutputs.length,
  outputsMissing: missing.map((m) => path.relative(repo, m)),
  missingCount: missing.length,
  next: buildStatus !== 'ok' ? 'Build flow reached regression. Inspect logs/build_deploy.log.' : 'verified local static export'
};
fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
console.log(JSON.stringify(state, null, 2));
process.exit(0);
