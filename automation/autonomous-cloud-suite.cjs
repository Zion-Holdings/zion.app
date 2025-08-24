#!/usr/bin/env node
/*
  Autonomous Cloud Suite Orchestrator
  - Runs in CI (GitHub Actions)
  - Executes autonomous modules
  - Writes artifacts to data/autonomy
*/
const path = require('path');
const fs = require('fs');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function runInvestorAutopilot() {
  const mod = require('./modules/investor-autopilot.cjs');
  return mod.run();
}

async function main() {
  const outDir = path.join(__dirname, '..', 'data', 'autonomy');
  await ensureDir(outDir);

  const results = [];
  try {
    const investor = await runInvestorAutopilot();
    results.push({ name: 'investor-autopilot', ok: true, ...investor });
  } catch (e) {
    console.error('Investor autopilot failed:', e);
    results.push({ name: 'investor-autopilot', ok: false, error: String(e?.message || e) });
  }

  const reportPath = path.join(outDir, `run-report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2));
  console.log('Autonomous suite completed. Report:', reportPath);
}

main().catch((e) => {
  console.error('Autonomous suite fatal error:', e);
  process.exit(1);
});