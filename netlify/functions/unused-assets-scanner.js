const { execSync } = require('child_process');

exports.config = {
  schedule: '13 */6 * * *',
};

exports.handler = async function() {
  try {
    execSync('node automation/unused-assets-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add public/reports/unused-assets.json || true && (git commit -m "chore(report): update unused assets [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'unused-assets-scanner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};