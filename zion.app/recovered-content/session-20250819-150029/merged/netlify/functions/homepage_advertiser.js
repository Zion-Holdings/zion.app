// homepage_advertiser.js
const { spawn } = require('child_process');
const path = require('path');

exports.config = {
  schedule: '*/10 * * * *', // every 10 minutes
};

function runNodeScript(scriptPath, args = []) {
  return new Promise((resolve) => {
    const child = spawn('node', [scriptPath, ...args], {
      cwd: path.join(__dirname, '..', '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (d) => { stdout += d.toString(); });
    child.stderr.on('data', (d) => { stderr += d.toString(); });

    child.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });
  });
}

exports.handler = async () => {
  const script = path.join(process.cwd(), 'automation', 'homepage-auto-advertiser.cjs');
  const result = await runNodeScript(script);

  const ok = result.code === 0 || /Homepage updated between markers|No changes needed/.test(result.stdout);

  return {
    statusCode: ok ? 200 : 500,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ok,
      code: result.code,
      stdout: result.stdout.slice(-4000),
      stderr: result.stderr.slice(-4000),
      ran: 'automation/homepage-auto-advertiser.cjs',
    }),
  };
};