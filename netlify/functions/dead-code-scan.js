exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/dead-code-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(cleanup): dead code scan results [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'dead-code-scan' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  // Run daily at 03:30
  schedule: '30 3 * * *',
};