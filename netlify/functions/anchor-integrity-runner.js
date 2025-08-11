// netlify/functions/anchor-integrity-runner.js
exports.config = { schedule: '17 */6 * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/anchor-integrity-scan.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'anchor-integrity-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};