const { execSync } = require('child_process');

exports.config = {
  schedule: '0 */12 * * *' // every 12 hours
};

exports.handler = async function() {
  try {
    execSync('node automation/og-image-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(og): refresh Open Graph images [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'og-image-maker' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};