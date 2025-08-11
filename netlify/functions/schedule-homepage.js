const path = require('path');
const { exec } = require('child_process');

module.exports.config = { schedule: '0 */6 * * *' };

function run(command) {
  return new Promise((resolve) => {
    const rootCwd = path.resolve(__dirname, '../../');
    const child = exec(command, { cwd: rootCwd, env: process.env }, (error, stdout, stderr) => {
      const output = stdout ? stdout.toString() : '';
      const errors = stderr ? stderr.toString() : '';
      resolve({ code: error ? error.code || 1 : 0, output, errors });
    });
    if (child.stdout) child.stdout.pipe(process.stdout);
    if (child.stderr) child.stderr.pipe(process.stderr);
  });
}

module.exports.handler = async function() {
  const steps = [];
  steps.push({ name: 'homepage-updater', cmd: 'node automation/homepage-updater.cjs' });
  steps.push({ name: 'homepage-auto-advertiser', cmd: 'node automation/homepage-auto-advertiser.cjs' });
  steps.push({ name: 'sitemap', cmd: 'npm run sitemap' });

  const results = [];
  for (const step of steps) {
    const result = await run(step.cmd);
    results.push({ step: step.name, code: result.code, output: result.output.slice(0, 2000), errors: result.errors.slice(0, 2000) });
  }
  const failed = results.filter(r => r.code !== 0);
  return { statusCode: failed.length ? 207 : 200, body: JSON.stringify({ message: failed.length ? 'Completed with some failures' : 'Completed successfully', results }, null, 2) };
};