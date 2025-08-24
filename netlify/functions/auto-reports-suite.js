exports.config = { schedule: '*/5 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });
  try {
    // Generate site reports and search indexes
    run('node scripts/seo-audit.js || true');
    run('node scripts/generate-search-index.js || true');
    run('node scripts/ai-trends-radar.js || true');

    // Repo intelligence and docs indexing
    run('node automation/docs-pages-indexer.cjs || true');
    run('node automation/repo-knowledge-graph.cjs || true');
    run('node automation/repo-radar-metrics.cjs || true');

    // Commit and push
    run('git config user.name "zion-bot"');
    run('git config user.email "bot@zion.app"');
    run('git add -A');
    run('git commit -m "chore(reports): auto-generate reports and indexes [skip ci]" || true');
    run('git push origin main || true');

    return { statusCode: 200, body: JSON.stringify({ ok: true, tool: 'auto-reports-suite' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};