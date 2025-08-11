// netlify/functions/dead-code-audit.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/dead-code-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/broken-image-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(audit): dead code + broken image reports [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'dead-code-audit' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};