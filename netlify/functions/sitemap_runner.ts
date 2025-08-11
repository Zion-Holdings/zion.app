import { exec } from 'child_process';

export const handler = async () => {
  const run = (cmd: string) => new Promise<void>((resolve) => {
    exec(cmd, { cwd: process.cwd(), env: process.env }, () => resolve());
  });

  await run('node automation/sitemap-runner.cjs');
  await run('node automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};