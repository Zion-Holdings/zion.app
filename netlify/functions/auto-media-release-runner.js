exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/auto-media-release.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'auto-media-release-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = { schedule: '0 */4 * * *' };