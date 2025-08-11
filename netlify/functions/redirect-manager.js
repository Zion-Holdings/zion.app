// netlify/functions/redirect-manager.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/site-link-crawler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/site-link-fixer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'redirect-manager' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};