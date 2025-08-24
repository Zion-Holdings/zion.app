const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes
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

  logStep('promo:factory', () => run('automation/homepage-promo-factory.cjs'));
  logStep('promo:apply', () => run('automation/homepage-promo-applier.cjs'));
  logStep('front:index:directory', () => run('automation/front-index-directory-builder.cjs'));

  logStep('git:sync', () => run('automation/advanced-git-sync.cjs'));

  return { statusCode: 200, headers: { 'Content-Type': 'text/plain' }, body: logs.join('\n') };
};