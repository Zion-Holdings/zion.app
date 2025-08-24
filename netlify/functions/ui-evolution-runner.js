exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/ui-evolution-launcher.js analyze || true', { stdio: 'inherit', shell: true });
    execSync('node automation/ui-evolution-launcher.js beautify || true', { stdio: 'inherit', shell: true });
    execSync('node automation/ui-evolution-launcher.js once || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(ui): evolve and beautify UI [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'ui-evolution-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '*/10 * * * *',
};