// netlify/functions/homepage_advertiser.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/homepage-updater.cjs', { stdio: 'inherit' });
    execSync('node automation/homepage-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(home): auto-update explore section [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'homepage_advertiser' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};