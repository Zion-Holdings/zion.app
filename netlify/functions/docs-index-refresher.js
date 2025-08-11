const path = require('path');
const { spawnSync } = require('child_process');

function run(command, args = []) {
  const res = spawnSync(command, args, { stdio: 'pipe', encoding: 'utf8', shell: false });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

function runNode(relativePath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relativePath);
  return run('node', [abs, ...args]);
}

exports.config = { schedule: '*/10 * * * *' };

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

  step('generate:search-index', () => runNode('scripts/generate-search-index.js'));
  step('generate:readme', () => runNode('scripts/generate-readme.js'));
  step('ai:changelog', () => runNode('automation/ai-changelog-generator.cjs'));
  step('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'content-type': 'text/plain' }, body: logs.join('\n') };
};