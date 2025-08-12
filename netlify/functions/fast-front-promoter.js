// Clean top-level to avoid unused variable lints; use child_process within handler

exports.config = {
  // Run every 15 minutes for fast iteration
  schedule: '*/15 * * * *',
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/homepage-updater.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/og-image-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(front): promo refresh [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'fast-front-promoter' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};