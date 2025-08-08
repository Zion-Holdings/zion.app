import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

async function main() {
  // TODO: Replace with real data pulls from DB, chat logs, app store reviews, etc.
  const items = [
    { timestamp: new Date().toISOString(), feature: 'chatbot', stars: 4, comment: 'Better intents, but sometimes repeats.' },
    { timestamp: new Date().toISOString(), feature: 'rentals', stars: 1, comment: 'Payment fails on iOS 17.5' },
    { timestamp: new Date().toISOString(), feature: 'jobs', stars: 5, comment: 'Love saved searches!' },
    { timestamp: new Date().toISOString(), feature: 'dashboard', stars: 2, comment: 'Filters reset on refresh; annoying' },
  ];

  const baseUrl = process.env.SELF_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/admin/analyze-feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `zion_role=superadmin`,
    },
    body: JSON.stringify({ items }),
  });
  if (!res.ok) throw new Error(`Analyze failed: ${res.status}`);
  const json = await res.json();

  const outPath = path.join(process.cwd(), 'data', 'reports', 'feedback');
  fs.mkdirSync(outPath, { recursive: true });
  fs.writeFileSync(path.join(outPath, 'latest.json'), JSON.stringify(json, null, 2));
  console.log('Wrote latest feedback report');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});