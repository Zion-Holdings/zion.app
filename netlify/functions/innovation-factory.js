const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  step('auto-discovery:runner', 'automation/auto-discovery-runner.cjs');
  step('repo:knowledge-graph', 'automation/repo-knowledge-graph.cjs');
  step('changelog:ai-generator', 'automation/ai-changelog-generator.cjs');

  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};