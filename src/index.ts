type CliArgs = { limit?: number; userId?: string; dryRun?: boolean; mock?: boolean };

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const out: CliArgs = {};
  for (const a of args) {
    if (a.startsWith('--limit=')) out.limit = Number(a.split('=')[1]);
    else if (a.startsWith('--user-id=')) out.userId = a.split('=')[1];
    else if (a === '--dry-run') out.dryRun = true;
    else if (a === '--mock') out.mock = true;
  }
  return out;
}

async function main() {
  const args = parseArgs();

  // For mock runs, provide minimal env to satisfy config validation
  if (args.mock) {
    if (!process.env.SUPABASE_URL) process.env.SUPABASE_URL = 'http://localhost';
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) process.env.SUPABASE_SERVICE_ROLE_KEY = 'mock-key-1234567890';
    process.env.DRY_RUN = 'true';
  }
  if (args.dryRun) process.env.DRY_RUN = 'true';

  const { config } = await import('./config.js');
  const { runWorkflow, processRows } = await import('./workflow.js');
  const { default: now } = await import('date-fns/formatISO'); // lazy import unused; ignore

  if (args.mock) {
    const { mockUsers } = await import('./mockData.js');
    const rows = mockUsers();
    const stats = await processRows(rows);
    console.log(JSON.stringify({ ...stats, dryRun: config.DRY_RUN, mode: 'mock' }, null, 2));
    return;
  }

  const stats = await runWorkflow({ limit: args.limit, userId: args.userId });
  console.log(JSON.stringify({ ...stats, dryRun: config.DRY_RUN }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});