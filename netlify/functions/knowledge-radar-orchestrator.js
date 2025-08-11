const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '17 */6 * * *', // every 6 hours with slight offset
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  logStep('repo:knowledge-graph', () => run('automation/repo-knowledge-graph.cjs'));
  logStep('repo:radar-metrics', () => run('automation/repo-radar-metrics.cjs'));
  logStep('docs:indexer', () => run('automation/docs-pages-indexer.cjs'));
  logStep('ai:changelog', () => run('automation/ai-changelog-generator.cjs'));

  logStep('git:sync', () => run('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: logs.join('\n') };
};