exports.config = { schedule: '*/10 * * * *' };

exports.handler = async () => {
  const { execSync } = require('child_process');
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    run('node automation/repo-knowledge-graph.cjs || true');
    run('node automation/repo-radar-metrics.cjs || true');
    run('node automation/homepage-updater.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(automation): update repo knowledge graph and radar metrics [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'knowledge-graph-orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};