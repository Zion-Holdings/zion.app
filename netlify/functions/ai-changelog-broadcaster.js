exports.config = { schedule: '13 */2 * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    run('node automation/ai-changelog-generator.cjs || true');
    run('node automation/newsroom-generator.cjs || true');

    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(content): refresh AI changelog and newsroom [skip ci]" || true');
    run('git push origin main || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'ai-changelog-broadcaster' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};