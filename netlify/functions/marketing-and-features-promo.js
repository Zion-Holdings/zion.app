// netlify/functions/marketing-and-features-promo.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/site-promo-orchestrator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-promo-analyzer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-promo-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-promo-applier.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(marketing): refresh homepage promos [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'marketing-and-features-promo' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  // Run every 2 hours
  schedule: '0 */2 * * *',
};