// netlify/functions/autonomous-invention-orchestrator.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/auto-discovery-runner.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-futurizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/home-index-visionary.cjs || true', { stdio: 'inherit', shell: true });
    // New: ensure redirects and crosslinks are kept fresh
    try { execSync('curl -sS $URL/.netlify/functions/smart-redirector || true', { stdio: 'inherit', shell: true }); } catch {}
    try { execSync('curl -sS $URL/.netlify/functions/semantic-crosslinker || true', { stdio: 'inherit', shell: true }); } catch {}
    execSync('node automation/advanced-git-sync.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "feat(autonomy): invention orchestrator updates [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'autonomous-invention-orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};