import { exec } from 'child_process';

export const handler = async () => {
  const run = (cmd: string) => new Promise<void>((resolve) => {
    exec(cmd, { cwd: process.cwd(), env: process.env }, () => resolve());
  });

  await Promise.all([
    run('node automation/automation-guardian-10min.cjs'),
    run('node automation/auto-discovery-runner.cjs'),
    run('node automation/repo-radar-metrics.cjs')
  ]);

  await run('node automation/advanced-git-sync.cjs');

  return { statusCode: 200, body: 'ok' };
};