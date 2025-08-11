// Orchestrates all front-related futuristic enhancements, promos, and syncs every minute. Replaces GitHub Actions cadence.
const path = require('path');
const { execSync } = require('child_process');

function sh(cmd) {
  try {
    return execSync(cmd, { stdio: 'inherit', shell: true });
  } catch (e) {
    // Continue even if a step fails; we aggregate best-effort
    return null;
  }
}

exports.config = {
  schedule: '*/1 * * * *',
};

exports.handler = async function() {
  const cwd = path.resolve(__dirname, '..', '..');
  try {
    process.chdir(cwd);
    sh('node automation/front-index-auto-advertiser.cjs');
    sh('node automation/front-index-advertiser.cjs');
    sh('node automation/homepage-updater.cjs');
    sh('node automation/homepage-auto-advertiser.cjs');
    sh('node automation/front-futurizer.cjs');
    sh('node automation/advanced-git-sync.cjs');

    // Fallback direct commit if advanced sync didn't push
    sh('git config user.name "zion-bot" && git config user.email "bot@zion.app"');
    sh('git add -A');
    sh('(git commit -m "chore(front): hyper-runner applied futuristic promos [skip ci]" || true)');
    sh('(git push origin main || true)');

    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'hyper-front-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};