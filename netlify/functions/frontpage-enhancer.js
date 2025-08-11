// Netlify Scheduled Function: Frontpage Enhancer
// Runs homepage advertising and updater automations without GitHub Actions.

const { execFile } = require('child_process');
const path = require('path');

function runNodeScript(scriptRelativePath, args = []) {
  const cwd = path.resolve(__dirname, '../../');
  const scriptPath = path.resolve(cwd, scriptRelativePath);
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = execFile('node', [scriptPath, ...args], { cwd, env: process.env }, (error, stdout, stderr) => {
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
    ['automation/homepage-updater.cjs'],
    ['automation/homepage-promo-orchestrator.cjs', 'once'],
    ['automation/site-promo-orchestrator.cjs', 'once'],
    // Optional UI beautification sweep
    ['automation/ui-evolution-launcher.js', 'beautify'],
  ];

  const results = [];
  for (const [script, arg] of steps) {
    try {
      results.push(await runNodeScript(script, arg ? [arg] : []));
    } catch (err) {
      results.push({ script, ok: false, code: -1, durationMs: 0, stdout: '', stderr: String(err) });
    }
  }

  const ok = results.every(r => r.ok);
  return {
    statusCode: ok ? 200 : 207,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      engine: 'frontpage-enhancer',
      message: ok ? 'Frontpage enhancement completed' : 'Frontpage enhancement completed with warnings',
      results,
      timestamp: new Date().toISOString(),
    }),
  };
};

exports.config = {
  // Run every hour
  schedule: '0 * * * *',
};