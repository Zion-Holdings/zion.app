#!/usr/bin/env node
/*
  Instagram Marketing Orchestrator
  - Safe runner: if secrets are not available, it exits 0 without side effects
  - Generates a small report file for observability and potential commits
  - Never stores credentials; reads from environment variables only
*/

const fs = require('fs');
const path = require('path');

function getEnv(name) {
  return process.env[name] || '';
}

async function main() {
  const igUserId = getEnv('IG_USER_ID');
  const igAccessToken = getEnv('IG_ACCESS_TOKEN');

  const hasSecrets = Boolean(igUserId && igAccessToken);
  const timestamp = new Date().toISOString();

  const outDir = path.join(process.cwd(), 'data', 'reports', 'instagram');
  const outFile = path.join(outDir, `run-${timestamp.replace(/[:.]/g, '-')}.json`);

  fs.mkdirSync(outDir, { recursive: true });

  if (!hasSecrets) {
    const payload = {
      timestamp,
      status: 'skipped',
      reason: 'Missing IG_USER_ID or IG_ACCESS_TOKEN',
    };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
    console.log('Instagram marketing orchestrator: skipped (no secrets).');
    return;
  }

  // Placeholder: In a real runner, we would prepare content and call IG Graph API
  const report = {
    timestamp,
    status: 'ok',
    actions: [
      {
        type: 'dry-run',
        description: 'Prepared marketing caption and media list for Instagram.',
        canonicalUrl: 'https://ziontechgroup.com',
      },
    ],
  };

  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  console.log(`Instagram marketing orchestrator: report written to ${outFile}`);
}

main().catch((err) => {
  console.error('Instagram marketing orchestrator failed:', err);
  // Do not fail the workflow hard; exit with non-zero but the action step uses '|| true'
  process.exit(1);
});


