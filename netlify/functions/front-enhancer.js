exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes for faster iteration
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/front-futurizer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/front-index-auto-advertiser.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(front): enhance front index [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'front-enhancer' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};