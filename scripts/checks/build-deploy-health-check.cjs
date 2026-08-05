const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const statePaths = [
  path.join(repoRoot, 'automation', 'reports', 'build-deploy-runner-latest.json'),
  path.join(repoRoot, 'automation', 'reports', 'continuous-build-deploy-latest.json'),
];
const outDir = path.join(repoRoot, 'out');
const statePath = path.join(repoRoot, 'automation', 'reports', 'build-deploy-health-latest.json');

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

const states = statePaths.map(readJson).filter(Boolean);
const latest = states[states.length - 1] || null;

const outExists = fs.existsSync(outDir);
const indexHtmlExists = outExists && fs.existsSync(path.join(outDir, 'index.html'));

const now = new Date().toISOString();
const report = {
  checkedAt: now,
  outExists,
  indexHtmlExists,
  artifacts: latest || null,
  sourceReports: states.map((s, i) => ({ path: statePaths[i], object: s })),
};

fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
