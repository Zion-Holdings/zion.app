// Netlify Scheduled Function: Marketing & Features Promo
// Periodically generates or refreshes homepage promotions and deep links.

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
    'automation/site-promo-orchestrator.cjs',
    'automation/site-promo-analyzer.cjs',
    'automation/homepage-promo-applier.cjs',
    'automation/homepage-promo-orchestrator.cjs',
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
    body: JSON.stringify({
      engine: 'marketing-and-features-promo',
      message: ok ? 'Homepage promos updated' : 'Homepage promos updated with warnings',
      results,
      timestamp: new Date().toISOString(),
    }),
  };
};

exports.config = {
  // Run every 2 hours
  schedule: '0 */2 * * *',
};