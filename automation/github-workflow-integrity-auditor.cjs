#!/usr/bin/env node
/**
 * GitHub Workflow Integrity Auditor
 * Audits .github/workflows/ for common issues: invalid `on:` triggers,
 * deprecated action versions, missing permissions, etc.
 *
 * CLI: --no-fail  (exits 0 even on findings, just writes report)
 *
 * Output: automation/reports/github-workflow-integrity-audit-latest.json
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const WORKFLOWS_DIR = path.join(process.cwd(), '.github', 'workflows');
const REPORT_PATH = path.join(REPORTS_DIR, 'github-workflow-integrity-audit-latest.json');

const isNoFail = process.argv.includes('--no-fail');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function auditWorkflow(filePath, content) {
  const findings = [];
  let parsed;
  try {
    parsed = yaml.load(content);
  } catch (e) {
    findings.push({
      file: filePath,
      severity: 'error',
      type: 'yaml-parse-error',
      detail: `YAML parse error: ${e.message.slice(0, 200)}`
    });
    return findings;
  }

  const relPath = path.relative(process.cwd(), filePath);

  // Check for invalid `true:` trigger (common legacy bug)
  if (content.includes('true:') && content.match(/^true:\s*$/m)) {
    findings.push({
      file: relPath,
      severity: 'error',
      type: 'invalid-true-trigger',
      detail: 'Workflow uses invalid `true:` as trigger; should use `on:` mapping'
    });
  }

  // Check for `on:` correctness
  if (parsed.on === true) {
    findings.push({
      file: relPath,
      severity: 'error',
      type: 'invalid-on-trigger',
      detail: 'Workflow uses `on: true` which is invalid; should use `on:` mapping'
    });
  }

  // Check deprecated action versions
  const actionRefs = [...content.matchAll(/uses:\s*([^@\s]+)@([a-f0-9]+|\S+)/g)];
  for (const [, action, ref] of actionRefs) {
    if (ref.startsWith('v1') || ref.startsWith('v2')) {
      findings.push({
        file: relPath,
        severity: 'warning',
        type: 'deprecated-action',
        detail: `Action ${action}@${ref} uses deprecated major version; consider upgrading`
      });
    }
  }

  // Check permissions block
  if (!parsed.permissions && parsed.on && typeof parsed.on === 'object') {
    const triggers = parsed.on;
    if (triggers.push || triggers.workflow_dispatch) {
      findings.push({
        file: relPath,
        severity: 'warning',
        type: 'missing-permissions',
        detail: 'Workflow lacks explicit permissions block; defaults may be restrictive'
      });
    }
  }

  // Check for missing timeout
  if (parsed.jobs) {
    for (const [jobId, job] of Object.entries(parsed.jobs)) {
      if (typeof job === 'object' && !job.timeout_minutes) {
        findings.push({
          file: relPath,
          severity: 'info',
          type: 'missing-timeout',
          detail: `Job '${jobId}' has no timeout-minutes set`
        });
      }
    }
  }

  return findings;
}

function main() {
  ensureDir(REPORTS_DIR);

  if (!fs.existsSync(WORKFLOWS_DIR)) {
    const report = {
      status: 'healthy',
      workflowCount: 0,
      counts: { totalFindings: 0, error: 0, warning: 0, info: 0 },
      findings: [],
      checked_files: [],
      generated_at: new Date().toISOString()
    };
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    console.log('✅ Workflow integrity audit: no workflows found (healthy)');
    return;
  }

  const files = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  const allFindings = [];

  for (const file of files) {
    const filePath = path.join(WORKFLOWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const findings = auditWorkflow(filePath, content);
    allFindings.push(...findings);
  }

  const counts = {
    totalFindings: allFindings.length,
    error: allFindings.filter(f => f.severity === 'error').length,
    warning: allFindings.filter(f => f.severity === 'warning').length,
    info: allFindings.filter(f => f.severity === 'info').length
  };

  // Status is degraded if errors exist
  const status = counts.error > 0 ? 'degraded' : counts.warning > 0 ? 'warning' : 'healthy';

  const report = {
    status,
    workflowCount: files.length,
    counts,
    findings: allFindings.slice(0, 50),
    checked_files: files,
    generated_at: new Date().toISOString()
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`✅ Workflow integrity audit complete: ${files.length} workflows, ${counts.error} errors, ${counts.warning} warnings, ${counts.info} info`);
  console.log(`   Status: ${status}`);
  console.log(`   Report: ${REPORT_PATH}`);

  if (counts.error > 0 && !isNoFail) {
    process.exit(1);
  }
  process.exit(0);
}

main();
