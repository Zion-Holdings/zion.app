exports.config = {
  schedule: '*/3 * * * *',
};

exports.handler = async function() {
  const { execSync } = require('child_process');
  const steps = [
    'node automation/metadata-optimizer.cjs || true',
    'node automation/ai-changelog-generator.cjs || true',
    'node automation/docs-pages-indexer.cjs || true',
    'node scripts/generate-readme.js || true',
    'node automation/advanced-git-sync.cjs || true'
  ];
  try {
    for (const cmd of steps) {
      execSync(cmd, { stdio: 'inherit', shell: true });
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, engine: 'autonomous-meta-orchestrator' }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};