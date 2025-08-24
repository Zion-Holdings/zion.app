// netlify/functions/orphan-asset-report-runner.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/orphan-asset-scanner.cjs', { stdio: 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): update orphan assets report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'orphan-asset-report-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};