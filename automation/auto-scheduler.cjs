#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const repoFull = process.env.GITHUB_REPOSITORY || '';
  if (!token || !repoFull) {
    console.log('Missing GITHUB_TOKEN or GITHUB_REPOSITORY; skipping auto-scheduler');
    process.exit(0);
  }
  const [owner, repo] = repoFull.split('/');

  const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
  const logDir = path.join(process.cwd(), 'automation', 'logs');
  const logFile = path.join(logDir, 'auto-scheduler.log');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

  function log(msg) {
    const line = `[${new Date().toISOString()}] ${msg}`;
    console.log(line);
    fs.appendFileSync(logFile, line + '\n');
  }

  // Target workflows and boundaries
  // min and max are in minutes
  const targets = [
    { file: 'autonomous-ultrafast.yml', name: 'Autonomous Ultrafast Orchestrator', min: 1, max: 10 },
    { file: 'autonomous-cloud-fast.yml', name: 'Autonomous Cloud (Fast)', min: 1, max: 15 },
    { file: 'autonomous-cloud.yml', name: 'Autonomous Cloud Orchestrator', min: 5, max: 60 },
    { file: 'rapid-git-sync.yml', name: 'Rapid Git Sync (1m)', min: 1, max: 10 },
    { file: 'autonomous-auto-discovery.yml', name: 'Autonomous Auto-Discovery (7m)', min: 3, max: 30 },
  ];

  // Helper: map minute frequency to a cron string
  function freqToCron(mins) {
    if (mins <= 1) return '* * * * *';
    if (mins >= 60) return '0 * * * *';
    return `*/${Math.max(1, Math.min(59, Math.round(mins)))} * * * *`;
  }

  function inferCurrentFrequencyFromCron(cron) {
    if (!cron) return null;
    if (cron.trim() === '* * * * *') return 1;
    const m = cron.match(/\*\/(\d+) \* \* \* \*/);
    if (m) return parseInt(m[1], 10);
    if (/^0 \* \* \* \*$/.test(cron.trim())) return 60;
    return null;
  }

  async function gh(url, init = {}) {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
      },
      ...init,
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub API error ${res.status}: ${body}`);
    }
    return res.json();
  }

  // Build a mapping from workflow name -> workflow id
  log('Fetching repository workflows...');
  const workflowsList = await gh(`https://api.github.com/repos/${owner}/${repo}/actions/workflows`);
  const nameToWorkflow = new Map();
  for (const wf of workflowsList.workflows || []) {
    nameToWorkflow.set(wf.name, wf);
  }

  let changes = 0;

  for (const t of targets) {
    const wf = nameToWorkflow.get(t.name);
    if (!wf) {
      log(`Skip: workflow not found by name: ${t.name}`);
      continue;
    }

    // Pull recent runs
    let runs;
    try {
      const data = await gh(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/${wf.id}/runs?per_page=30`);
      runs = data.workflow_runs || [];
    } catch (e) {
      log(`Error fetching runs for ${t.name}: ${e.message}`);
      continue;
    }
    if (runs.length === 0) {
      log(`No runs for ${t.name}; skipping adjustment`);
      continue;
    }

    const total = runs.length;
    const successes = runs.filter(r => r.conclusion === 'success').length;
    const failures = runs.filter(r => r.conclusion === 'failure' || r.conclusion === 'cancelled' || r.conclusion === 'timed_out').length;
    const successRate = successes / total;

    // Read file and current cron
    const filePath = path.join(workflowsDir, t.file);
    if (!fs.existsSync(filePath)) {
      log(`File not found for ${t.name}: ${t.file}`);
      continue;
    }
    const original = fs.readFileSync(filePath, 'utf8');
    const cronMatch = original.match(/cron:\s*['\"]([^'\"]+)['\"]/);
    const currentCron = cronMatch ? cronMatch[1] : null;
    const currentFreq = inferCurrentFrequencyFromCron(currentCron) ?? t.max;

    // Simple policy:
    // - If successRate >= 0.98 and failures === 0, speed up by 1 step (e.g., 15->10->5->1), bounded by t.min
    // - If successRate < 0.85 or failures >= 3, slow down by 1 step, bounded by t.max
    // - Else, leave unchanged
    const steps = [1, 3, 5, 7, 10, 15, 30, 60];
    const boundedSteps = steps.filter(m => m >= t.min && m <= t.max).sort((a,b)=>a-b);
    // Ensure currentFreq in steps by inserting
    if (!boundedSteps.includes(currentFreq)) {
      boundedSteps.push(currentFreq);
      boundedSteps.sort((a,b)=>a-b);
    }
    const idx = Math.max(0, boundedSteps.indexOf(currentFreq));
    let targetIdx = idx;
    if (successRate >= 0.98 && failures === 0 && idx > 0) targetIdx = idx - 1;
    if ((successRate < 0.85 || failures >= 3) && idx < boundedSteps.length - 1) targetIdx = idx + 1;

    const targetFreq = boundedSteps[targetIdx];
    const targetCron = freqToCron(targetFreq);

    log(`${t.name}: successRate=${(successRate*100).toFixed(1)}% failures=${failures} current=${currentFreq}m -> target=${targetFreq}m`);

    if (targetCron !== currentCron) {
      const updated = original.replace(/(cron:\s*['\"]) ([^'\"]+)(['\"])/, (m, p1, _p2, p3) => `${p1}${targetCron}${p3}`)
        .replace(/cron:\s*['\"][^'\"]+['\"]/g, `cron: '${targetCron}'`); // fallback global
      if (updated !== original) {
        fs.writeFileSync(filePath, updated, 'utf8');
        changes++;
        log(`Updated ${t.file} cron to '${targetCron}'`);
      } else {
        log(`No textual change detected for ${t.file}`);
      }
    } else {
      log(`No change needed for ${t.file}`);
    }
  }

  if (changes === 0) {
    log('No schedule changes applied.');
  } else {
    log(`Applied ${changes} schedule change(s).`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});