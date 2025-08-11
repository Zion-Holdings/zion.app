exports.config = { schedule: '*/3 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    run('node automation/automation-guardian-10min.cjs || true');
    run('node automation/netlify-auto-healer.cjs || true');
    run('node automation/image-optimizer.cjs || true');
    run('node automation/broken-image-scanner.cjs || true');

    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(heal): guardian-ultra auto-heal and optimize [skip ci]" || true');
    run('git push origin main || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'guardian-ultra' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};