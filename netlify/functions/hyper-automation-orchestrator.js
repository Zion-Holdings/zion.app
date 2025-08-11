const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

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

  step('ai-changelog-generator', () => runNode('automation/ai-changelog-generator.cjs'));
  step('docs-pages-indexer', () => runNode('automation/docs-pages-indexer.cjs'));
  step('newsroom-generator', () => runNode('automation/newsroom-generator.cjs'));
  step('repo-radar-metrics', () => runNode('automation/repo-radar-metrics.cjs'));
  step('security-audit', () => runNode('automation/security-audit.cjs'));
  step('og-image-generator', () => runNode('automation/og-image-generator.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};