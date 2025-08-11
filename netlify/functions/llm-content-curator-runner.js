exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/llm-content-curator.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'llm-content-curator-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = { schedule: '*/20 * * * *' };