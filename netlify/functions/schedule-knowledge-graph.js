const path = require('path');
const { exec } = require('child_process');

module.exports.config = { schedule: '0 5 * * 1' };

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
  steps.push({ name: 'repo-knowledge-graph', cmd: 'node automation/repo-knowledge-graph.cjs' });
  steps.push({ name: 'repo-radar-metrics', cmd: 'node automation/repo-radar-metrics.cjs' });

  const results = [];
  for (const step of steps) {
    const result = await run(step.cmd);
    results.push({ step: step.name, code: result.code, output: result.output.slice(0, 2000), errors: result.errors.slice(0, 2000) });
  }
  const failed = results.filter(r => r.code !== 0);
  return { statusCode: failed.length ? 207 : 200, body: JSON.stringify({ message: failed.length ? 'Completed with some failures' : 'Completed successfully', results }, null, 2) };
};