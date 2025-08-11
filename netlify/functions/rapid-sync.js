exports.config = {
  schedule: '*/2 * * * *',
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/advanced-git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, engine: 'rapid-sync' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};