// netlify/functions/repo-radar-and-graph.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/repo-radar-metrics.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/repo-knowledge-graph.cjs || true', { stdio: 'inherit', shell: true });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(repo): radar metrics + knowledge graph [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'repo-radar-and-graph' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};