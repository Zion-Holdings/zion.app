// netlify/functions/sitemap-prioritizer.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/sitemap-runner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'sitemap-prioritizer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};