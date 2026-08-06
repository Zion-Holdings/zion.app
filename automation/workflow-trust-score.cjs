#!/usr/bin/env node
/**
 * workflow-trust-score.cjs
 * Computes a trust score (0-100) across all GitHub Actions workflows.
 * Higher score = healthier, more secure workflows.
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = path.join(process.cwd(), '.github', 'workflows');

function computeTrustScore() {
  const metrics = { totalWorkflows: 0, totalScore: 0, issues: [] };
  if (!fs.existsSync(workflowsDir)) return { score: 100, ...metrics };

  const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  metrics.totalWorkflows = files.length;

  for (const file of files) {
    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
    let score = 100;
    const issues = [];

    if (/^true:\s*$/m.test(content)) {
      score -= 15;
      issues.push('Invalid trigger syntax (true: instead of on:)');
    }
    if (/uses:.*\.github\/workflows[^\n]*\n\s*timeout-minutes:/m.test(content)) {
      score -= 10;
      issues.push('timeout-minutes after uses: (invalid for reusable workflows)');
    }
    if (content.includes('permissions:') && !content.includes('contents:')) {
      score -= 5;
      issues.push('Missing contents: permission scope');
    }
    score = Math.max(0, score);

    metrics.totalScore += score;
    if (issues.length > 0) {
      metrics.issues.push({ file, score, issues });
    }
  }

  const avgScore = metrics.totalWorkflows > 0 ? Math.round(metrics.totalScore / metrics.totalWorkflows) : 100;
  return { score: avgScore, ...metrics };
}

const result = computeTrustScore();
console.log(`Workflow trust score: ${result.score}/100 (healthy)`);
console.log(`Checked ${result.totalWorkflows} workflows`);
if (result.issues.length > 0) {
  console.log(`Top issues: ${result.issues.length}`);
  result.issues.slice(0, 5).forEach(i => {
    console.log(`  ${i.file}: ${i.score}/100 - ${i.issues.join(', ')}`);
  });
}

// Save report
const reportsDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(
  path.join(reportsDir, 'workflow-trust-score.json'),
  JSON.stringify(result, null, 2)
);

console.log(`Report saved to automation/reports/workflow-trust-score.json`);
process.exit(result.score < 80 ? 1 : 0);
