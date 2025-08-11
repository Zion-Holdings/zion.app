const path = require('path');
const { execFile } = require('child_process');

function runNode(relPath, args = []) {
  const cwd = path.resolve(__dirname, '..', '..');
  const abs = path.resolve(cwd, relPath);
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = execFile('node', [abs, ...args], { cwd, env: process.env }, (error, stdout, stderr) => {
      resolve({ ok: !error, code: error ? error.code : 0, durationMs: Date.now() - startedAt, stdout: String(stdout || ''), stderr: String(stderr || '') });
    });
    child.on('error', () => {});
  });
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  const results = [];
  const steps = [
    'automation/ai-changelog-generator.cjs',
    'automation/newsroom-generator.cjs',
    'automation/auto-discovery-runner.cjs',
    'automation/repo-knowledge-graph.cjs',
    'automation/repo-radar-metrics.cjs',
    'automation/advanced-git-sync.cjs',
  ];

  for (const step of steps) {
    try {
      results.push({ step, ...(await runNode(step)) });
    } catch (err) {
      results.push({ step, ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) });
    }
  }

  const ok = results.every(r => r.ok || /No changes needed|unchanged|updated/i.test(r.stdout));
  return { statusCode: ok ? 200 : 207, body: JSON.stringify({ engine: 'ai-innovator', results, at: new Date().toISOString() }) };
};