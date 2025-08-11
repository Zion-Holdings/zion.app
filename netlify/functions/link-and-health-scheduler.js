// Netlify Scheduled Function: Link & Health Scheduler
// Replaces GH Actions for link integrity, health scans, and sitemap generation.

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
    'automation/external-link-check.cjs',
    'automation/site-maintenance-orchestrator.cjs',
    'automation/sitemap-runner.cjs',
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
      engine: 'link-and-health-scheduler',
      message: ok ? 'Health checks completed' : 'Health checks completed with warnings',
      results,
      timestamp: new Date().toISOString(),
    }),
  };
};

exports.config = {
  // Run every 6 hours
  schedule: '0 */6 * * *',
};