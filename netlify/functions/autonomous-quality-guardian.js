const { execSync } = require('child_process');

exports.config = {
  schedule: '*/11 * * * *', // every 11 minutes
};

exports.handler = async () => {
  const logs = [];
  const step = (cmd) => {
    try {
      logs.push(`$ ${cmd}`);
      execSync(cmd, { stdio: 'inherit', shell: true });
      logs.push('ok=true');
    } catch (e) {
      logs.push(`error=${String(e)}`);
    }
  };

  step('node automation/dead-code-scanner.cjs || true');
  step('node automation/external-link-check.cjs || true');
  step('node automation/security-audit.cjs || true');
  step('node automation/netlify-auto-healer.cjs || true');
  step('node automation/advanced-git-sync.cjs || true');

  return { statusCode: 200, body: logs.join('\n') };
};