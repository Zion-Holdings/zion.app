const { execSync } = require('child_process');

exports.config = {
  schedule: '*/4 * * * *', // every 4 minutes
};

exports.handler = async () => {
  const logs = [];
  function step(cmd) {
    try {
      logs.push(`$ ${cmd}`);
      execSync(cmd, { stdio: 'inherit', shell: true });
      logs.push('ok=true');
    } catch (e) {
      logs.push(`error=${String(e)}`);
    }
  }

  step('node automation/home-index-visionary.cjs');
  step('node automation/homepage-auto-advertiser.cjs || true');
  step('node automation/advanced-git-sync.cjs || true');

  return { statusCode: 200, body: logs.join('\n') };
};