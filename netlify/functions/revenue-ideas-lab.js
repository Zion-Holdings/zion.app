const { execSync } = require('child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true });
}

exports.config = { schedule: '*/15 * * * *' };

exports.handler = async () => {
  try {
    run('node automation/revenue-ideas-agents/add_newsletter_paywall_teaser_on_long_posts.cjs || true');
    run('node automation/ai-changelog-generator.cjs || true');
    run('node automation/advanced-git-sync.cjs || true');
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'revenue-ideas-lab' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};