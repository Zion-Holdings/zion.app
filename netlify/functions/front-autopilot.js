exports.config = { schedule: '*/2 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    // Homepage enhancements
    execSync('node automation/homepage-updater.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });

    // Front index enhancements
    execSync('node automation/front-index-directory-builder.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-futurizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-advertiser.cjs || true', { stdio: 'inherit', shell: true });

    // Visionary expanders
    execSync('node automation/home-index-visionary.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-visionary-expander.cjs || true', { stdio: 'inherit', shell: true });

    // Commit and push
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(front-autopilot): refresh front + homepage [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });

    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'front-autopilot' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};