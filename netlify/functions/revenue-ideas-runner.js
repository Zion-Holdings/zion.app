const { execSync } = require('child_process');

exports.handler = async () => {
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    run('node automation/revenue-ideas-orchestrator.cjs || true');
    run('node automation/advanced-git-sync.cjs');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'revenue-ideas-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};