#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

async function main() {
  const root = process.cwd();
  const talentsFile = path.join(root, 'data', 'talents', 'talents.json');
  const jobsFile = path.join(root, 'data', 'jobs', 'jobs.json');
  const outDir = path.join(root, 'data', 'reports', 'impact');
  await fs.ensureDir(outDir);

  const talents = (await fs.pathExists(talentsFile)) ? await fs.readJSON(talentsFile) : [];
  const jobs = (await fs.pathExists(jobsFile)) ? await fs.readJSON(jobsFile) : [];

  const placed = talents.filter(t => t.certificationStatus === 'completed').length;
  const jobsCreated = jobs.length;
  const grads = talents.filter(t => (t.programTrack || '').toLowerCase().includes('ai')).length;

  const now = new Date().toISOString();
  const report = {
    generatedAt: now,
    metrics: {
      usersPlaced: placed,
      jobsCreated,
      aiGraduates: grads,
    }
  };

  await fs.writeJSON(path.join(outDir, 'impact-latest.json'), report, { spaces: 2 });
  console.log('[impact-metrics] Wrote impact-latest.json');
}

main().catch(err => {
  console.error('[impact-metrics] Failed:', err);
  process.exit(1);
});