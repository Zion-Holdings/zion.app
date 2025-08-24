exports.config = { schedule: '*/10 * * * *' };

exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    // Curate content and generate changelog
    execSync('node automation/llm-content-curator.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node automation/ai-changelog-generator.cjs || true', { stdio: 'inherit', shell: true });

    // Refresh docs/pages indexes and search
    execSync('node automation/docs-pages-indexer.cjs || true', { stdio: 'inherit', shell: true });
    execSync('node scripts/generate-readme.js || true', { stdio: 'inherit', shell: true });
    execSync('node scripts/generate-search-index.js || true', { stdio: 'inherit', shell: true });

    // Commit and push
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(content): refresh docs/search/changelog [skip ci]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });

    return { statusCode: 200, body: JSON.stringify({ ok: true, task: 'content-refresh-runner' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};