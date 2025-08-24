const path = require('path');
const { execFileSync } = require('child_process');

function runNode(relPath, args = []) {
  const root = path.resolve(__dirname, '..', '..');
  const abs = path.resolve(root, relPath);
  try {
    const out = execFileSync('node', [abs, ...args], { cwd: root, stdio: 'pipe', encoding: 'utf8' });
    return { ok: true, stdout: out || '', stderr: '' };
  } catch (e) {
    return { ok: false, stdout: e.stdout?.toString() || '', stderr: e.stderr?.toString() || e.message };
  }
}

exports.config = {
  schedule: '*/3 * * * *',
};

exports.handler = async () => {
  const logs = [];
  const steps = [
    ['front:fcb-promote', 'automation/front-fcb-promoter.cjs'],
    ['front:ads', 'automation/front-index-ads.cjs'],
    ['front:directory', 'automation/front-index-directory-builder.cjs'],
    ['git:sync', 'automation/advanced-git-sync.cjs'],
  ];
  for (const [name, rel] of steps) {
    logs.push(`\n=== ${name} ===`);
    const res = runNode(rel);
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);
    logs.push(`ok=${res.ok}`);
  }
  return { statusCode: 200, body: logs.join('\n') };
};