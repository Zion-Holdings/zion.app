import { exec } from 'child_process';

export const handler = async () => {
  const run = (cmd: string) => new Promise<void>((resolve) => {
    exec(cmd, { cwd: process.cwd(), env: process.env }, () => resolve());
  });

  await Promise.all([
    run('node automation/front-futurizer.cjs'),
    run('node automation/homepage-updater.cjs'),
    run('node automation/frontpage-advertiser.cjs')
  ]);

  await run('node automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: 'ok' };
};