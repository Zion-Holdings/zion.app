import { exec } from 'child_process';

export const handler = async () => {
  const run = (cmd: string) => new Promise<void>((resolve) => {
    exec(cmd, { cwd: process.cwd(), env: process.env }, () => resolve());
  });

  await Promise.all([
    run('node automation/front-futurizer.cjs'),
    run('node automation/front-index-auto-advertiser.cjs'),
    run('node automation/front-index-advertiser.cjs')
  ]);

  await run('node automation/advanced-git-sync.cjs');

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};