const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '11 */4 * * *', // every 4 hours
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

  // Refresh docs and knowledge artifacts
  logStep('docs:index', () => runNode('automation/docs-pages-indexer.cjs'));
  logStep('repo:knowledge-graph', () => runNode('automation/repo-knowledge-graph.cjs'));
  logStep('repo:radar-metrics', () => runNode('automation/repo-radar-metrics.cjs'));

  // Sync changes to main
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};