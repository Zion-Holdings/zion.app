const path = require('path');
const { execFileSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  try {
    const output = execFileSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
    return { ok: true, stdout: output || '', stderr: '' };
  } catch (error) {
    return { ok: false, stdout: error.stdout?.toString() || '', stderr: error.stderr?.toString() || error.message };
  }
}

exports.config = {
  schedule: '*/5 * * * *',
};

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const res = runNode(rel, args);
    if (res.stdout) logs.push(res.stdout);
    if (res.stderr) logs.push(res.stderr);
    logs.push(`ok=${res.ok}`);
    return res.ok;
  }

  step('front:futurize', 'automation/front-futurizer.cjs');
  step('front:advertise', 'automation/front-index-advertiser.cjs');
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};