export const handler = async () => {
  const { spawn } = await import('child_process');

  const run = (script: string) => spawn('node', [script], { stdio: 'inherit', env: process.env });

  run('automation/docs-pages-indexer.cjs');
  run('automation/front-index-advertiser.cjs');
  run('automation/front-index-directory-builder.cjs');

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, message: 'Fast front promoter executed' }),
    headers: { 'content-type': 'application/json' },
  };
};