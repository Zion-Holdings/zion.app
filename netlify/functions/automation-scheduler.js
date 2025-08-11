const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relativePath, args = []) {
  const absolutePath = path.resolve(__dirname, '..', '..', relativePath);
  const result = spawnSync('node', [absolutePath, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: result.status || 0, stdout: result.stdout || '', stderr: result.stderr || '' };
}

exports.config = {
  // Every hour at minute 15
  schedule: '15 * * * *',
};

exports.handler = async () => {
  const logs = [];
  const logStep = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
    return status;
  };

  // Set defaults consumed by scripts
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  // Core maintenance and observability
  logStep('external-link-check:once', () => runNode('automation/external-link-check.cjs', ['once']));
  logStep('todo-scanner:once', () => runNode('automation/todo-scanner.cjs', ['once']));
  logStep('sitemap-runner:once', () => runNode('automation/sitemap-runner.cjs', ['once']));

  // Content & newsroom
  logStep('newsroom-generator:once', () => runNode('automation/newsroom-generator.cjs', ['once']));
  logStep('og-image-generator:once', () => runNode('automation/og-image-generator.cjs', ['once']));

  // Repo and deps hygiene
  logStep('deps-auto-upgrade:once', () => runNode('automation/deps-auto-upgrade.cjs', ['once']));
  logStep('dead-code-scanner:once', () => runNode('automation/dead-code-scanner.cjs', ['once']));

  return { statusCode: 200, body: logs.join('\n') };
};