exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/front-index-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'front-index-advertiser' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = { schedule: '*/10 * * * *' };