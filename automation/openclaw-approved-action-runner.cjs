#!/usr/bin/env node
// AUTO-GENERATED STUB - automation/openclaw-approved-action-runner.cjs
// Contract test runner for approved action queue.
const fs = require('fs');
const path = require('path');

function writeTelemetry(dir, data) {
  const p = path.join(dir, 'openclaw-runner-latest.json');
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

function main() {
  const fixtureDir = process.env.OPENCLAW_RUNNER_FIXTURE_DIR;
  if (!fixtureDir) {
    console.error('Missing OPENCLAW_RUNNER_FIXTURE_DIR');
    process.exit(2);
  }

  const queuePath = path.join(fixtureDir, 'openclaw-action-approved-queue-latest.json');
  const policyPath = path.join(fixtureDir, 'openclaw-action-policy-latest.json');

  let queue, policy;
  try { queue = JSON.parse(fs.readFileSync(queuePath, 'utf8')); } catch (e) { queue = { queue: [] }; }
  try { policy = JSON.parse(fs.readFileSync(policyPath, 'utf8')); } catch (e) { policy = { approvedIds: [], denied: [] }; }

  const items = Array.isArray(queue.queue) ? queue.queue : [];

  if (items.length === 0) {
    writeTelemetry(fixtureDir, { exitCode: 0, reason: 'empty_queue' });
    process.exit(0);
  }

  const item = items[0];
  const approvedIds = Array.isArray(policy.approvedIds) ? policy.approvedIds : [];

  if (!approvedIds.includes(item.id)) {
    writeTelemetry(fixtureDir, { exitCode: 1, reason: 'id_not_in_approvedIds' });
    process.exit(1);
  }

  // Approved: dry-run mode
  writeTelemetry(fixtureDir, {
    exitCode: 0,
    reason: 'dry_run_complete',
    dryRunPlanned: items.map(i => ({ id: i.id, recommendedCommand: i.recommendedCommand })),
  });
  process.exit(0);
}

main();
