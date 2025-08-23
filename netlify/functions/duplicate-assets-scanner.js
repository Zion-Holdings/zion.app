const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
}

exports.config = {
  schedule: '41 */12 * * *',
};

exports.handler = async () => {
  const logs = [];
  function step(title, relPath, args = []) {
    logs.push(`\n=== ${title} ===`);
    const res = runNode(relPath, args);
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);
    logs.push(`exit=${res.status || 0}`);
    return res.status || 0;
  }

  step('assets:duplicate-scan', 'automation/duplicate-assets-scanner.cjs');
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};