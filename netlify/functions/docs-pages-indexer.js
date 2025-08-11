exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/docs-pages-indexer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node scripts/generate-sitemap.js || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(index): refresh docs/pages index and sitemap [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'docs-pages-indexer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  // Run every 4 hours
  schedule: '0 */4 * * *',
};