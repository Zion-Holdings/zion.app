#!/usr/bin/env node
/**
 * Workflow Trust Score
 * Computes a trust/reliability score for GitHub Actions workflows based on
 * pinned actions, presence of timeouts, permissions, and test coverage patterns.
 *
 * Output: automation/reports/workflow-trust-score-latest.json
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const WORKFLOWS_DIR = path.join(process.cwd(), '.github', 'workflows');
const REPORT_PATH = path.join(REPORTS_DIR, 'workflow-trust-score-latest.json');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function sha256(str) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(str).digest('hex').substring(0, 8);
}

function scoreWorkflow(filePath, content, parsed) {
  let score = 100;
  const issues = [];
  const improvements = [];

  // Deduct for unpinned actions (using @main or branch refs)
  const actionUsages = [...content.matchAll(/uses:\s*([^@\s]+)@(\S+)/g)];
  for (const [, action, ref] of actionUsages) {
    if (ref === 'main' || ref === 'master' || ref.startsWith('v3') || ref.startsWith('v2')) {
      score -= 5;
      issues.push(`Unpinned or old action: ${action}@${ref}`);
    } else if (/^[a-f0-9]{40}$/.test(ref)) {
      // Fully pinned - good
      improvements.push(`Pinned action: ${action}@${ref.slice(0, 8)}`);
    } else {
      score -= 2;
      issues.push(`Partially pinned action: ${action}@${ref}`);
    }
  }

  // Deduct for missing permissions
  if (!parsed.permissions) {
    score -= 10;
    issues.push('Missing explicit permissions block');
  }

  // Deduct for missing timeout on jobs
  if (parsed.jobs) {
    for (const [jobId, job] of Object.entries(parsed.jobs)) {
      if (typeof job === 'object') {
        if (!job.timeout_minutes) {
          score -= 3;
          issues.push(`Job '${jobId}' missing timeout-minutes`);
        }
      }
    }
  }

  // Deduct for using `pull_request_target` without additional safety
  if (content.includes('pull_request_target')) {
    score -= 10;
    issues.push('Uses pull_request_target (security consideration)');
  }

  // Check for continue-on-error on critical steps
  if (content.includes('continue-on-error: true')) {
    // This is informational, minor deduction
    score -= 1;
    issues.push('Uses continue-on-error (may mask failures)');
  }

  // Bonus for caching
  if (content.includes('actions/cache') || content.includes('cache:')) {
    score += 5;
    improvements.push('Uses caching');
  }

  // Bonus for setup-node with cache
  if (content.includes('setup-node') && content.includes('cache:')) {
    score += 3;
    improvements.push('Node.js dependency caching');
  }

  return { score: Math.max(0, Math.min(100, score)), issues, improvements };
}

function main() {
  ensureDir(REPORTS_DIR);

  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('⚠️ No workflows directory found');
    const report = { trust_score: 100, status: 'healthy', workflowCount: 0, workflows: [], generated_at: new Date().toISOString() };
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    return;
  }

  const files = fs.readdirSync(WORKFLOWS_DIR).filter(f => (f.endsWith('.yml') || f.endsWith('.yaml')) && !f.includes('.disabled'));
  const workflows = [];

  let totalScore = 0;
  for (const file of files) {
    const filePath = path.join(WORKFLOWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    let parsed;
    try {
      parsed = yaml.load(content);
    } catch (e) {
      continue;
    }

    const { score, issues, improvements } = scoreWorkflow(filePath, content, parsed);
    totalScore += score;

    workflows.push({
      name: parsed.name || file,
      file,
      score,
      issues,
      improvements,
      fingerprint: sha256(file)
    });
  }

  const avgScore = files.length > 0 ? Math.round(totalScore / files.length) : 100;
  const status = avgScore >= 90 ? 'healthy' : avgScore >= 70 ? 'warning' : 'degraded';

  const report = {
    trust_score: avgScore,
    status,
    workflowCount: files.length,
    workflows,
    top_issues: workflows
      .flatMap(w => w.issues.map(i => ({ issue: i, workflow: w.name, score: w.score })))
      .sort((a, b) => a.score - b.score)
      .slice(0, 20),
    generated_at: new Date().toISOString()
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`📊 Workflow trust score: ${avgScore}/100 (${status})`);
  console.log(`   Checked ${files.length} workflows`);
  console.log(`   Top issues: ${report.top_issues.length}`);
  process.exit(0);
}

main();
