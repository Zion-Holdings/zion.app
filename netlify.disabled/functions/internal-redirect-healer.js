const path = require('path');
const { execFile } = require('child_process');

function runNodeScript(relPath, args = []) {
  const cwd = path.resolve(__dirname, '..', '..');
  const abs = path.resolve(cwd, relPath);
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = execFile('node', [abs, ...args], { cwd, env: process.env }, (error, stdout, stderr) => {
      resolve({
        script: relPath,
        ok: !error,
        code: error ? error.code : 0,
        durationMs: Date.now() - startedAt,
        stdout: stdout ? stdout.toString() : '',
        stderr: stderr ? stderr.toString() : '',
      });
    });
    child.on('error', () => {});
  });
}

exports.config = { schedule: '17 */6 * * *' };

exports.handler = async () => {
  const steps = [
    'automation/internal-redirect-healer.cjs',
    'automation/advanced-git-sync.cjs',
  ];
  const results = [];
  for (const step of steps) {
    try { results.push(await runNodeScript(step)); }
    catch (err) { results.push({ script: step, ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) }); }
  }
  const ok = results.every(r => r.ok || /No changes needed|unchanged|updated|Healed/i.test(r.stdout));
  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ engine: 'internal-redirect-healer', results, timestamp: new Date().toISOString() })
  };
};