const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '9 */2 * * *', // every 2 hours staggered
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

  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  logStep('content:curate', () => run('automation/llm-content-curator.cjs'));
  logStep('newsroom:generate', () => run('automation/newsroom-generator.cjs'));
  logStep('og-image:generate', () => run('automation/og-image-generator.cjs'));
  logStep('front:advertise', () => run('automation/front-index-advertiser.cjs'));

  logStep('git:sync', () => run('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: logs.join('\n') };
};