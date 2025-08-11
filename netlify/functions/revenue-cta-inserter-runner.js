exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/revenue-ideas-agents/generate_paid_consultation_booking_component.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/homepage-updater.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "feat(growth): auto-insert revenue CTA components [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'revenue-cta-inserter-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};