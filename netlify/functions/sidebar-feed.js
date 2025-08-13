// Netlify function to generate the sidebar feed JSON by invoking the local script
exports.config = { schedule: '*/5 * * * *' };

exports.handler = async function() {
  try {
    const { execSync } = require('child_process');
    execSync('node automation/sidebar-feed.cjs', { stdio: 'inherit', shell: true });
    // Optionally auto-commit updates to public/sidebar/feed.json so the static site can serve it
    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add public/sidebar/feed.json && (git commit -m "chore(sidebar): refresh sidebar feed [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    } catch (e) {}
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};


