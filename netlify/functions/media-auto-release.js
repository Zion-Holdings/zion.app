// netlify/functions/media-auto-release.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/newsroom-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/auto-media-release.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/og-image-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/git-sync.cjs || true', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'media-auto-release' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};