const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

exports.config = {
  schedule: '*/10 * * * *',
};

exports.handler = async () => {
  const logs = [];
  function step(name, rel, args = []) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = runNode(rel, args);
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  }

  // Audits & anomaly detection
  step('security:audit', 'automation/security-audit.cjs');
  step('dead-code:scan', 'automation/dead-code-scanner.cjs');
  step('code-smell:audit', 'automation/code-smell-audit.cjs');
  step('repo:radar', 'automation/repo-radar-metrics.cjs');

  // Sync any changes
  step('git:sync', 'automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: logs.join('\n') };
};