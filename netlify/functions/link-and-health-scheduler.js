// netlify/functions/link-and-health-scheduler.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/site-link-crawler.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/external-link-check.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node scripts/generate-sitemap.js || true', { stdio: 'inherit', shell: true });
    execSync('node automation/sitemap-runner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(health): link checks + sitemap refresh [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'link-and-health-scheduler' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  // Run every 6 hours
  schedule: '0 */6 * * *',
};