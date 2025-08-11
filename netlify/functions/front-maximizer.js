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

exports.config = {
  // High-frequency run to keep the front fresh
  schedule: '*/5 * * * *',
};

exports.handler = async () => {
  const steps = [
    'automation/frontpage-advertiser.cjs',
    'automation/front-index-auto-advertiser.cjs',
    'automation/front-futurizer.cjs',
    'automation/homepage-auto-advertiser.cjs',
    'automation/homepage-updater.cjs',
    // Push any changes
    'automation/advanced-git-sync.cjs',
  ];

  const results = [];
  for (const step of steps) {
    try {
      results.push(await runNodeScript(step));
    } catch (err) {
      results.push({ script: step, ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) });
    }
  }

  const ok = results.every(r => r.ok || /No changes needed|unchanged|updated/i.test(r.stdout));

  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      engine: 'front-maximizer',
      message: ok ? 'Front maximizer completed' : 'Front maximizer completed with warnings',
      results,
      timestamp: new Date().toISOString(),
    }),
  };
};