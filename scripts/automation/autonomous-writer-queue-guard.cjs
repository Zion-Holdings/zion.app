#!/usr/bin/env node
/**
 * Autonomous Writer Queue Guard
 *
 * Guards the content creation pipeline by:
 * 1. Checking for stale/running workflow runs that may be blocking the queue
 * 2. Optionally cancelling stale runs (stale = older than QUEUE_GUARD_STALE_RUN_MINUTES)
 * 3. Optionally waiting for the queue to clear (with QUEUE_GUARD_WAIT_MAX_MINUTES timeout)
 *
 * CLI flags:
 *   --strict          - Exit non-zero if queue is busy (for CI gating)
 *   --wait            - Wait for queue to clear instead of fast-exit
 *   --cancel-stale    - Cancel stale runs found (requires admin token)
 *
 * Env:
 *   GITHUB_TOKEN      - PAT for API access (or GITHUB_TOKEN from workflow)
 *   GITHUB_REPOSITORY - owner/repo
 *   GITHUB_RUN_ID     - current run ID (excluded from stale check)
 *   QUEUE_GUARD_BRANCH - branch to filter runs (default: main)
 *   QUEUE_GUARD_WAIT_MAX_MINUTES - max wait time (default 15)
 *   QUEUE_GUARD_WAIT_POLL_SECONDS - poll interval (default 20)
 *   QUEUE_GUARD_STALE_RUN_MINUTES - staleness threshold (default 90)
 */
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports', '.runtime');
const REPORT_PATH = path.join(REPORTS_DIR, 'queue-guard-status.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

const flags = {
  strict: process.argv.includes('--strict'),
  wait: process.argv.includes('--wait'),
  cancelStale: process.argv.includes('--cancel-stale')
};

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || '';
const GITHUB_RUN_ID = process.env.GITHUB_RUN_ID || '';
const BRANCH = process.env.QUEUE_GUARD_BRANCH || 'main';
const WAIT_MAX = parseInt(process.env.QUEUE_GUARD_WAIT_MAX_MINUTES || '15', 10);
const WAIT_POLL = parseInt(process.env.QUEUE_GUARD_WAIT_POLL_SECONDS || '20', 10);
const STALE_MINUTES = parseInt(process.env.QUEUE_GUARD_STALE_RUN_MINUTES || '90', 10);

function fetchActiveRuns(onlyStale = false) {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.log('⚠️ No GH_TOKEN or GITHUB_REPOSITORY; assuming queue is clear');
    return { runs: [], total: 0, message: 'no credentials' };
  }

  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const now = Date.now();
  const staleThreshold = STALE_MINUTES * 60 * 1000;

  try {
    const { execSync } = require('child_process');
    const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs?status=in_progress&per_page=50&branch=${BRANCH}`;
    const output = execSync(`curl -sL -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${url}"`, {
      timeout: 30000, encoding: 'utf8'
    });
    const data = JSON.parse(output);

    const allRuns = data.workflow_runs || [];
    // Exclude current run
    const otherRuns = allRuns.filter(r => String(r.id) !== String(GITHUB_RUN_ID));

    if (onlyStale) {
      const stale = otherRuns.filter(r => {
        const runTime = new Date(r.created_at).getTime();
        return (now - runTime) > staleThreshold;
      });
      return { runs: stale, total: stale.length, message: 'stale_runs' };
    }

    return { runs: otherRuns, total: otherRuns.length, message: 'all_active' };
  } catch (e) {
    console.warn('⚠️ Failed to fetch active runs:', (e.message || '').slice(0, 200));
    return { runs: [], total: 0, message: 'api_error', error: e.message };
  }
}

function cancelRun(runId, token, repo) {
  if (!token) return false;
  const [owner, repoName] = repo.split('/');
  try {
    const { execSync } = require('child_process');
    execSync(
      `curl -sL -X POST -H "Authorization: token ${token}" -H "Accept: application/vnd.github+json" "https://api.github.com/repos/${owner}/${repoName}/actions/runs/${runId}/cancel"`,
      { timeout: 15000, encoding: 'utf8' }
    );
    console.log(`   Cancelled stale run #${runId}`);
    return true;
  } catch (e) {
    console.warn(`   Failed to cancel run #${runId}:`, e.message);
    return false;
  }
}

function sleepSeconds(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function writeReport(data) {
  ensureDir(REPORTS_DIR);
  fs.writeFileSync(REPORT_PATH, JSON.stringify(data, null, 2));
}

async function main() {
  console.log(`🛡️  Writer Queue Guard (strict: ${flags.strict}, wait: ${flags.wait}, cancel-stale: ${flags.cancelStale})`);
  console.log(`   Repo: ${GITHUB_REPOSITORY || 'N/A'}, Branch: ${BRANCH}, Current Run: ${GITHUB_RUN_ID || 'N/A'}`);

  const startTime = Date.now();
  let result = { status: 'unknown', active_runs: 0, cancelled: 0, waited_seconds: 0, started_at: new Date().toISOString() };

  // Check for stale runs
  const staleCheck = fetchActiveRuns(true);
  if (staleCheck.runs.length > 0) {
    console.log(`🔴 Found ${staleCheck.runs.length} stale run(s) older than ${STALE_MINUTES}min`);
    for (const run of staleCheck.runs) {
      console.log(`   - Run #${run.id}: ${run.name} created ${run.created_at}`);
      if (flags.cancelStale) {
        if (cancelRun(run.id, GITHUB_TOKEN, GITHUB_REPOSITORY)) {
          result.cancelled++;
        }
      }
    }
    if (flags.cancelStale) {
      // Wait a moment for cancellations to take effect
      await sleepSeconds(15);
    }
  }

  // Check for active runs
  let activeCheck = fetchActiveRuns(false);
  result.active_runs = activeCheck.total;

  if (activeCheck.total === 0) {
    result.status = 'clear';
    console.log('✅ Queue is clear — no active runs');
    result.ended_at = new Date().toISOString();
    writeReport(result);
    process.exit(0);
  }

  console.log(`⚠️ ${activeCheck.total} active run(s) in queue`);

  if (flags.wait) {
    console.log(`⏳ Waiting up to ${WAIT_MAX} minutes for queue to clear (polling every ${WAIT_POLL}s)`);
    const maxWaitMs = WAIT_MAX * 60 * 1000;

    while ((Date.now() - startTime) < maxWaitMs) {
      await sleepSeconds(WAIT_POLL);
      result.waited_seconds += WAIT_POLL;
      activeCheck = fetchActiveRuns(false);
      result.active_runs = activeCheck.total;

      if (activeCheck.total === 0) {
        result.status = 'clear-after-wait';
        console.log('✅ Queue cleared after waiting');
        break;
      }
      console.log(`   Still ${activeCheck.total} active run(s)... (${result.waited_seconds}s elapsed)`);
    }

    if (activeCheck.total > 0) {
      result.status = 'timeout';
      console.log(`⏰ Timeout: queue still has ${activeCheck.total} run(s) after ${WAIT_MAX} minutes`);
    }
  } else {
    // Fast exit mode
    result.status = 'busy';
    if (flags.strict) {
      console.log('❌ STRICT mode: queue is busy, failing guard');
      result.ended_at = new Date().toISOString();
      writeReport(result);
      process.exit(1);
    }
    console.log('⚠️ Queue is busy — exiting (non-strict mode, continue with caution)');
  }

  result.ended_at = new Date().toISOString();
  writeReport(result);
  process.exit(0);
}

main().catch(e => {
  console.error('Fatal error:', e.message);
  writeReport({ status: 'error', error: e.message, started_at: new Date().toISOString() });
  process.exit(0); // Don't fail CI on guard errors
});
