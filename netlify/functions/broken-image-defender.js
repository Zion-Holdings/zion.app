const { execSync } = require('child_process');

exports.config = {
  schedule: '0 */3 * * *' // every 3 hours
};

exports.handler = async function() {
  try {
    execSync('node automation/broken-image-scanner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/optimize-images.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(images): fix broken refs and optimize [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'broken-image-defender' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};