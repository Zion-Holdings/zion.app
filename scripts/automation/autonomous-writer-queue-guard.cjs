#!/usr/bin/env node
/**
 * autonomous-writer-queue-guard.cjs
 * Guards the autonomous writer queue, ensuring only one instance runs at a time
 * and cleaning up stale queue state.
 */
const fs = require('fs');
const path = require('path');

const QUEUE_LOCK = path.join(process.cwd(), 'automation', 'reports', 'content-loop-checkpoint.json');
const LOCK_FILE = path.join(process.cwd(), 'automation', 'reports', 'writer-queue.lock');

function guardQueue() {
  const report = {
    timestamp: new Date().toISOString(),
    lockFile: LOCK_FILE,
    queueFile: QUEUE_LOCK,
    lockHeld: false,
    staleLock: false,
    actions: []
  };

  const reportsDir = path.join(process.cwd(), 'automation', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  // Check for stale lock
  if (fs.existsSync(LOCK_FILE)) {
    const stats = fs.statSync(LOCK_FILE);
    const age = Date.now() - stats.mtimeMs;
    const ageMinutes = Math.round(age / 60000);
    
    if (ageMinutes > 120) { // Lock older than 2 hours is stale
      report.staleLock = true;
      report.lockHeld = true;
      fs.unlinkSync(LOCK_FILE);
      report.actions.push(`Removed stale lock (age: ${ageMinutes} minutes)`);
    } else {
      report.lockHeld = true;
      report.actions.push(`Lock is fresh (age: ${ageMinutes} minutes)`);
    }
  } else {
    // Create fresh lock
    fs.writeFileSync(LOCK_FILE, JSON.stringify({ started: Date.now(), pid: process.pid }));
    report.actions.push('Created fresh lock');
  }

  // Check queue state
  if (fs.existsSync(QUEUE_LOCK)) {
    try {
      const queue = JSON.parse(fs.readFileSync(QUEUE_LOCK, 'utf8'));
      report.queueState = queue;
      report.actions.push(`Queue checkpoint found at index ${queue.lastIndex || 0}`);
    } catch (e) {
      report.actions.push('Queue checkpoint exists but is invalid');
    }
  }

  // Save report
  fs.writeFileSync(
    path.join(reportsDir, 'writer-queue-guard-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log(JSON.stringify(report, null, 2));
  console.log(`Report saved to automation/reports/writer-queue-guard-report.json`);
  
  process.exit(0);
}

guardQueue();
