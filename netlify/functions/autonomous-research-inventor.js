const { execSync } = require('child_process');

exports.config = {
  schedule: '*/7 * * * *', // every 7 minutes
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

  step('node automation/auto-discovery-runner.cjs');
  step('node automation/repo-knowledge-graph.cjs');
  step('node automation/repo-radar-metrics.cjs');
  step('node automation/ai-changelog-generator.cjs');
  step('node automation/advanced-git-sync.cjs || true');

  return { statusCode: 200, body: logs.join('\n') };
};