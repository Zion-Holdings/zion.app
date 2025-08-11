// netlify/functions/innovation-lab.js
exports.config = {
  schedule: '*/10 * * * *',
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/auto-discovery-runner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/ai-changelog-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/newsroom-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-futurizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/home-index-visionary.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'innovation-lab' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};