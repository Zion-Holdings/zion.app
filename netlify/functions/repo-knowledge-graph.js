exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/repo-knowledge-graph.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'repo-knowledge-graph' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '0 */6 * * *',
};