// netlify/functions/media-og-and-optimize.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/og-image-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/optimize-images.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/image-optimizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(media): OG images + optimized assets [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'media-og-and-optimize' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};