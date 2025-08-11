export const handler = async () => {
  const { spawn } = await import('child_process');

  // Kick off the runner without blocking the function
  const child = spawn('node', ['automation/continuous-front-runner.cjs'], {
    stdio: 'inherit',
    env: process.env,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, pid: child.pid, message: 'Front enhancer started' }),
    headers: { 'content-type': 'application/json' },
  };
};