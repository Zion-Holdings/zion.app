const path = require('path');
const { spawnSync } = require('child_process');

function runNodeIfExists(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  try {
    const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
    return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
  } catch (e) {
    return { status: 0, stdout: '', stderr: '' };
  }
}

exports.config = { schedule: '*/5 * * * *' };

exports.handler = async () => {
  const logs = [];
  const step = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  step('ai:trends-researcher', () => runNodeIfExists('automation/ai-trends-researcher.cjs'));
  step('innovation:orchestrator', () => runNodeIfExists('automation/innovation-orchestrator.cjs'));
  step('repo:knowledge-graph', () => runNodeIfExists('automation/repo-knowledge-graph.cjs'));
  step('git:sync', () => runNodeIfExists('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};