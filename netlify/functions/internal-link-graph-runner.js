// netlify/functions/internal-link-graph-runner.js
exports.config = { schedule: '7 */6 * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/internal-link-graph.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'internal-link-graph-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};