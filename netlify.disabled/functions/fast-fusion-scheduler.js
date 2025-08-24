const { execFile } = require('child_process');
const path = require('path');

function runNodeScript(scriptRelativePath) {
  const cwd = path.resolve(__dirname, '../../');
  const scriptPath = path.resolve(cwd, scriptRelativePath);
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = execFile('node', [scriptPath], { cwd, env: process.env }, (error, stdout, stderr) => {
      resolve({
        script: scriptRelativePath,
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

exports.handler = async function () {
  const steps = [
    'automation/front-index-advertiser.cjs',
    'automation/homepage-auto-advertiser.cjs',
    'automation/homepage-updater.cjs',
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
  const ok = results.every(r => r.ok);
  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ engine: 'fast-fusion-scheduler', results, timestamp: new Date().toISOString() }),
  };
};

exports.config = {
  schedule: '*/10 * * * *', // run every 10 minutes
};