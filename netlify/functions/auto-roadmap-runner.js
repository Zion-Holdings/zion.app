const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */2 * * *',
};

exports.handler = async () => {
  const logs = [];
  const step = (name, rel, args = []) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  // Generate upstream signals first where available
  step('hotspots:generate', 'automation/code-hotspots-radar.cjs');
  step('type-health:generate', 'automation/type-health-monitor.cjs');
  step('roadmap:generate', 'automation/auto-roadmap-generator.cjs');

  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};