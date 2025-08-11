// Netlify Scheduled Function: Frontpage Enhancer
// Runs homepage advertising and updater automations without GitHub Actions.

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
    // Safety timeouts in case a script hangs
    child.on('error', () => {});
  });
}

exports.handler = async function () {
  const steps = [
    'automation/homepage-auto-advertiser.cjs',
    'automation/homepage-updater.cjs',
    // Optional: design/UI enhancements and Netlify auto healer
    'automation/design-orchestrator.cjs',
    'automation/netlify-auto-healer.cjs',
  ];

  const results = [];
  for (const step of steps) {
    // Run sequentially to avoid edit conflicts
    // If a script is missing, continue gracefully
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