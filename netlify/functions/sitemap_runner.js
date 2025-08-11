// netlify/functions/sitemap_runner.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node scripts/generate-sitemap.js || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): refresh sitemap [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'sitemap_runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '0 */6 * * *',
};