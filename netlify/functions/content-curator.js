exports.config = { schedule: '*/3 * * * *' };

exports.handler = async () => {
  const { execSync } = require('child_process');
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    run('node automation/llm-content-curator.cjs || true');
    run('node automation/homepage-updater.cjs || true');
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(content): LLM curator refresh and homepage update [skip ci]" || true');
    run('git push origin main || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'content-curator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};