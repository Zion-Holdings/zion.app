#!/usr/bin/env node
/**
 * OpenClaw Anomaly Trend Breach Guard
 * Monitors recent GitHub Actions runs for failure trends and raises
 * warning/critical issues when anomaly thresholds are breached.
 *
 * Env vars:
 *   GH_TOKEN / GITHUB_TOKEN  - for API access
 *   WINDOW_HOURS             - lookback window (default 24)
 *   BREACH_WARN_MIN_CRITICAL - warn threshold (default 3)
 *   BREACH_CRIT_MIN_CRITICAL - critical threshold (default 5)
 *   ISSUE_FINGERPRINT_WARN   - fingerprint for warning issue
 *   ISSUE_TITLE_WARN         - title for warning issue
 *   ISSUE_LABELS_WARN        - labels for warning issue
 *   ISSUE_FINGERPRINT_CRIT   - fingerprint for critical issue
 *   ISSUE_TITLE_CRIT         - title for critical issue
 *   ISSUE_LABELS_CRIT        - labels for critical issue
 *   WARN_WEBHOOK_URL         - optional webhook for warnings
 *   CRIT_WEBHOOK_URL         - optional webhook for critical
 */
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const REPORT_PATH = path.join(REPORTS_DIR, 'openclaw-anomaly-trend-breach-latest.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

const WINDOW_HOURS = parseInt(process.env.WINDOW_HOURS || '24', 10);
const BREACH_WARN = parseInt(process.env.BREACH_WARN_MIN_CRITICAL || '3', 10);
const BREACH_CRIT = parseInt(process.env.BREACH_CRIT_MIN_CRITICAL || '5', 10);
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || '';
const GITHUB_RUN_ID = process.env.GITHUB_RUN_ID || '';

const ISSUE_FINGERPRINT_WARN = process.env.ISSUE_FINGERPRINT_WARN || 'openclaw-runner-anomaly-trend-breach|24h|v1';
const ISSUE_TITLE_WARN = process.env.ISSUE_TITLE_WARN || '[automation] OpenClaw anomaly trend breach';
const ISSUE_LABELS_WARN = process.env.ISSUE_LABELS_WARN || 'automation,openclaw,automation-slo-warning';
const ISSUE_FINGERPRINT_CRIT = process.env.ISSUE_FINGERPRINT_CRIT || 'openclaw-runner-anomaly-trend-breach|24h|critical|v1';
const ISSUE_TITLE_CRIT = process.env.ISSUE_TITLE_CRIT || '[automation] OpenClaw anomaly trend breach critical';
const ISSUE_LABELS_CRIT = process.env.ISSUE_LABELS_CRIT || 'automation,openclaw,automation-slo-critical';

const WARN_WEBHOOK_URL = process.env.WARN_WEBHOOK_URL || '';
const CRIT_WEBHOOK_URL = process.env.CRIT_WEBHOOK_URL || '';

async function fetchFailedRuns() {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.log('⚠️ No GH_TOKEN or GITHUB_REPOSITORY set; skipping API fetch');
    return [];
  }

  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs?status=completed&per_page=100`;

  try {
    // Use subprocess curl since fetch may not be available in CommonJS
    const { execSync } = require('child_process');
    const output = execSync(`curl -sL -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${url}"`, {
      timeout: 30000,
      encoding: 'utf8'
    });
    const data = JSON.parse(output);
    const now = Date.now();
    const windowMs = WINDOW_HOURS * 3600 * 1000;

    const failed = (data.workflow_runs || []).filter(run => {
      if (run.conclusion !== 'failure') return false;
      const runTime = new Date(run.created_at).getTime();
      if (isNaN(runTime)) return false;
      return (now - runTime) <= windowMs;
    });

    // Exclude current run from count
    return failed.filter(run => String(run.id) !== String(GITHUB_RUN_ID));
  } catch (e) {
    console.warn('⚠️ Failed to fetch workflow runs:', (e.message || '').slice(0, 200));
    return [];
  }
}

async function postToWebhook(url, payload) {
  if (!url) return;
  try {
    const { execSync } = require('child_process');
    const body = JSON.stringify(payload);
    execSync(`curl -sL -X POST -H "Content-Type: application/json" -d '${body.replace(/'/g, "'\\''")}' "${url}"`, {
      timeout: 10000,
      encoding: 'utf8'
    });
    console.log(`✅ Posted alert to webhook: ${url.slice(0, 40)}...`);
  } catch (e) {
    console.warn('⚠️ Webhook post failed:', (e.message || '').slice(0, 200));
  }
}

async function createGitHubIssue(title, body, labels, fingerprint) {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.log('⚠️ No GH_TOKEN or GITHUB_REPOSITORY for issue creation');
    return null;
  }

  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const { execSync } = require('child_process');

  try {
    // Search for existing issue with same fingerprint
    const searchUrl = `https://api.github.com/search/issues?q=repo:${owner}/${repo}+${encodeURIComponent(fingerprint)}&per_page=1`;
    const searchOut = execSync(`curl -sL -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${searchUrl}"`, {
      timeout: 15000, encoding: 'utf8'
    });
    const searchData = JSON.parse(searchOut);
    const existing = searchData.items && searchData.items[0];

    const issueUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;
    const payload = { title, body, labels: labels.split(',').map(l => l.trim()) };

    if (existing && existing.state === 'open') {
      // Update existing issue comment
      const commentPayload = { body: `[${new Date().toISOString().slice(0,10)}] Re-evaluated: ${body}` };
      execSync(
        `curl -sL -X POST -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${issueUrl}/${existing.number}/comments" -d '${JSON.stringify(commentPayload).replace(/'/g, "'\\''")}'`,
        { timeout: 15000, encoding: 'utf8' }
      );
      console.log(`✅ Updated existing issue #${existing.number}`);
      return { number: existing.number, updated: true };
    } else {
      const createPayload = JSON.stringify(payload);
      const result = execSync(
        `curl -sL -X POST -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${issueUrl}" -d '${createPayload.replace(/'/g, "'\\''")}'`,
        { timeout: 15000, encoding: 'utf8' }
      );
      const created = JSON.parse(result);
      if (created.number) {
        console.log(`✅ Created issue #${created.number}: ${title}`);
        return { number: created.number, created: true };
      }
    }
  } catch (e) {
    console.warn('⚠️ Issue creation failed:', (e.message || '').slice(0, 200));
  }
  return null;
}

async function closeIssue(fingerprint) {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) return;
  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const { execSync } = require('child_process');

  try {
    const searchUrl = `https://api.github.com/search/issues?q=repo:${owner}/${repo}+${encodeURIComponent(fingerprint)}+is:open&per_page=5`;
    const searchOut = execSync(`curl -sL -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${searchUrl}"`, {
      timeout: 15000, encoding: 'utf8'
    });
    const searchData = JSON.parse(searchOut);
    for (const issue of (searchData.items || [])) {
      execSync(
        `curl -sL -X PATCH -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "${GITHUB_TOKEN}" "${issue.pull_request ? '' : ''}" https://api.github.com/repos/${owner}/${repo}/issues/${issue.number} -d '{"state":"closed","state_reason":"completed"}'`,
        { timeout: 15000, encoding: 'utf8' }
      );
      console.log(`✅ Auto-closed issue #${issue.number} (recovered: breach below threshold)`);
    }
  } catch (e) {
    // Non-blocking
  }
}

async function main() {
  ensureDir(REPORTS_DIR);

  console.log(`🔍 OpenClaw anomaly trend breach guard: window=${WINDOW_HOURS}h, warn>=${BREACH_WARN}, crit>=${BREACH_CRIT}`);

  const failedRuns = await fetchFailedRuns();
  const failedCount = failedRuns.length;

  console.log(`📊 Failed runs in last ${WINDOW_HOURS}h: ${failedCount} (excluding current run ${GITHUB_RUN_ID || 'N/A'})`);

  const report = {
    window_hours: WINDOW_HOURS,
    failed_runs_count: failedCount,
    warn_threshold: BREACH_WARN,
    crit_threshold: BREACH_CRIT,
    failed_runs: failedRuns.map(r => ({
      id: r.id,
      name: r.name,
      created_at: r.created_at,
      html_url: r.html_url
    })),
    decision: 'none',
    generated_at: new Date().toISOString()
  };

  let exitCode = 0;

  if (failedCount >= BREACH_CRIT) {
    report.decision = 'critical';
    const body = `## OpenClaw Anomaly Trend Breach (CRITICAL)\n\n**Window:** Last ${WINDOW_HOURS} hours\n\n**Failed runs:** ${failedCount} (threshold: ${BREACH_CRIT})\n\n` +
      failedRuns.slice(0, 10).map(r => `- [Run #${r.id}](${r.html_url}) \`${r.name}\` @ ${r.created_at}`).join('\n') +
      `\n\n---\nfingerprint: ${ISSUE_FINGERPRINT_CRIT}`;

    await createGitHubIssue(ISSUE_TITLE_CRIT, body, ISSUE_LABELS_CRIT, ISSUE_FINGERPRINT_CRIT);
    await postToWebhook(CRIT_WEBHOOK_URL, {
      text: `🔴 CRITICAL: ${failedCount} failed CI runs in last ${WINDOW_HOURS}h (threshold: ${BREACH_CRIT})`,
      failures: failedCount
    });
    console.log(`🔴 CRITICAL breach: ${failedCount} failures`);
  } else if (failedCount >= BREACH_WARN) {
    report.decision = 'warning';
    const body = `## OpenClaw Anomaly Trend Breach (WARNING)\n\n**Window:** Last ${WINDOW_HOURS} hours\n\n**Failed runs:** ${failedCount} (threshold: ${BREACH_WARN})\n\n` +
      failedRuns.slice(0, 10).map(r => `- [Run #${r.id}](${r.html_url}) \`${r.name}\` @ ${r.created_at}`).join('\n') +
      `\n\n---\nfingerprint: ${ISSUE_FINGERPRINT_WARN}`;

    await createGitHubIssue(ISSUE_TITLE_WARN, body, ISSUE_LABELS_WARN, ISSUE_FINGERPRINT_WARN);
    await postToWebhook(WARN_WEBHOOK_URL, {
      text: `🟡 WARNING: ${failedCount} failed CI runs in last ${WINDOW_HOURS}h (threshold: ${BREACH_WARN})`,
      failures: failedCount
    });
    console.log(`🟡 Warning breach: ${failedCount} failures`);
  } else {
    report.decision = 'healthy';
    // Close any open issues from this fingerprint (recovery)
    await closeIssue(ISSUE_FINGERPRINT_WARN);
    await closeIssue(ISSUE_FINGERPRINT_CRIT);
    console.log(`✅ Healthy: ${failedCount} failures below thresholds`);
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`Report written to: ${REPORT_PATH}`);

  // Never fail the run — this is a monitoring guard
  process.exit(0);
}

main().catch(e => {
  console.error('Fatal error:', e);
  // Still write a minimal report
  ensureDir(REPORTS_DIR);
  fs.writeFileSync(REPORT_PATH, JSON.stringify({
    window_hours: WINDOW_HOURS,
    failed_runs_count: 0,
    decision: 'error',
    error: e.message,
    generated_at: new Date().toISOString()
  }, null, 2));
  process.exit(0); // Don't fail CI on guard errors
});
