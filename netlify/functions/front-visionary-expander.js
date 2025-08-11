const path = require('path');
const { execSync } = require('child_process');

exports.config = {
  schedule: '*/3 * * * *', // every 3 minutes for fast iteration
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

  step('node automation/front-visionary-expander.cjs');
  step('node automation/front-index-advertiser.cjs');
  step('node automation/advanced-git-sync.cjs || true');

  return { statusCode: 200, body: logs.join('\n') };
};