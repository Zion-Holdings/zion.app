const { execFile } = require('child_process');
const path = require('path');

function run(script) {
  const cwd = path.resolve(__dirname, '../../');
  const abs = path.resolve(cwd, script);
  return new Promise((resolve) => {
    const started = Date.now();
    execFile('node', [abs], { cwd, env: process.env }, (error, stdout, stderr) => {
      resolve({ script, ok: !error, code: error ? error.code : 0, ms: Date.now() - started, stdout: String(stdout || ''), stderr: String(stderr || '') });
    });
  });
}

exports.config = {
  schedule: '*/15 * * * *', // every 15 minutes
};

exports.handler = async () => {
  const steps = [
    'automation/front-index-auto-advertiser.cjs',
    'automation/homepage-auto-advertiser.cjs',
    'automation/homepage-updater.cjs',
  ];

  const results = [];
  for (const s of steps) {
    try {
      results.push(await run(s));
    } catch (e) {
      results.push({ script: s, ok: false, code: -1, ms: 0, stdout: '', stderr: String(e) });
    }
  }

  const ok = results.every(r => r.ok);
  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ engine: 'feature-catalog', ok, results, at: new Date().toISOString() }),
  };
};