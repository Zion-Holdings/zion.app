// netlify/functions/repo-graph-runner.js
exports.config = { schedule: '0 5 * * 1' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/repo-knowledge-graph.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(knowledge): refresh repo knowledge graph [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'repo-graph-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};