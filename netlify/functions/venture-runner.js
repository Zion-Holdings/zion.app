exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/venture-orchestrator.cjs once || true', { stdio: 'inherit', shell: true });
    execSync('node automation/venture-services-analyzer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/venture-services-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/ads-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/service-sales-agents-factory.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(venture): update venture artifacts [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'venture-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};

exports.config = {
  schedule: '0 */2 * * *',
};