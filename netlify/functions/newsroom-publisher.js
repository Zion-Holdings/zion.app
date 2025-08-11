const { execSync } = require('child_process');

exports.config = {
  schedule: '*/45 * * * *' // every 45 minutes
};

exports.handler = async function() {
  try {
    execSync('node automation/newsroom-generator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(newsroom): publish curated updates [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'newsroom-publisher' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};