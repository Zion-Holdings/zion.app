const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/2 * * * *', // every 2 minutes
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

  // Ensure canonical URL available to scripts if needed
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  // Meta tasks: docs index, README, repo knowledge graph, radar metrics, TODO summary, search index
  logStep('meta:docs-index', () => runNode('automation/docs-pages-indexer.cjs'));
  logStep('meta:readme', () => runNode('scripts/generate-readme.js'));
  logStep('meta:repo-graph', () => runNode('automation/repo-knowledge-graph.cjs'));
  logStep('meta:repo-radar', () => runNode('automation/repo-radar-metrics.cjs'));
  logStep('meta:todo-scanner', () => runNode('automation/todo-scanner.cjs'));
  logStep('meta:search-index', () => runNode('scripts/generate-search-index.js'));

  // Attempt to push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};