const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *',
};

exports.handler = async () => {
  const output = [];
  function step(name, rel, args = []) {
    output.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) output.push(stdout);
    if (stderr) output.push(stderr);
    output.push(`exit=${status}`);
    return status;
  }

  step('homepage-promo:analyze', 'automation/homepage-promo-analyzer.cjs');
  step('homepage-promo:factory', 'automation/homepage-promo-factory.cjs');
  step('homepage-promo:apply', 'automation/homepage-promo-applier.cjs');
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: output.join('\n') };
};