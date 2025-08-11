const { execSync } = require('child_process');

exports.config = {
  schedule: '11 */6 * * *',
};

exports.handler = async function() {
  try {
    execSync('node automation/orphan-routes-detector.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add public/reports/orphan-routes.json || true && (git commit -m "chore(report): update orphan routes [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'orphan-routes-detector' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};