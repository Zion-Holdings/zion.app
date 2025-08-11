exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/dead-code-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'dead-code-scanner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '30 3 * * *',
};