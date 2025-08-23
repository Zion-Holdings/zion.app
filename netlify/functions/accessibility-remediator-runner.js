// netlify/functions/accessibility-remediator-runner.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/accessibility-remediator.cjs', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(a11y): update <img> alt report [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'accessibility-remediator-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};