const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8', shell: true });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/30 * * * *',
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

  // Generate docs pages index and README
  logStep('docs:pages:index', () => runNode('automation/docs-pages-indexer.cjs'));
  logStep('readme:generate', () => runNode('scripts/generate-readme.js'));

  // Attempt to push any changes
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, body: logs.join('\n') };
};