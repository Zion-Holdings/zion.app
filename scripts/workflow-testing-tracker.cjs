#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

console.log("📊 GitHub Actions Workflow Testing Tracker\n");

const workflowsDir = ".github/workflows";
const trackerFile = path.resolve(__dirname, "../public/reports/workflows/testing-progress.json");

// Colors for output
const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
  bold: "\x1b[1m"
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function loadProgress() {
  try {
    if (fs.existsSync(trackerFile)) {
      return JSON.parse(fs.readFileSync(trackerFile, "utf8"));
    }
  } catch (err) {
    log(`Warning: Could not load progress file: ${err.message}`, "yellow");
  }
  
  return {
    timestamp: new Date().toISOString(),
    workflows: {},
    summary: {
      total: 0,
      tested: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    }
  };
}

function saveProgress(progress) {
  try {
    const reportDir = path.dirname(trackerFile);
    fs.mkdirSync(reportDir, { recursive: true });
    fs.writeFileSync(trackerFile, JSON.stringify(progress, null, 2));
    log(`Progress saved to: ${trackerFile}`, "green");
  } catch (err) {
    log(`Error saving progress: ${err.message}`, "red");
  }
}

function getWorkflowFiles() {
  if (!fs.existsSync(workflowsDir)) {
    log("❌ No .github/workflows directory found", "red");
    return [];
  }
  
  return fs.readdirSync(workflowsDir)
    .filter(file => file.endsWith(".yml") || file.endsWith(".yaml"))
    .filter(file => !file.includes("broken_workflows_backup"));
}

function displayProgress(progress) {
  const { summary } = progress;
  const total = summary.total;
  const tested = summary.tested;
  const passed = summary.passed;
  const failed = summary.failed;
  const skipped = summary.skipped;
  
  log("\n📊 Testing Progress Summary", "bold");
  log("============================", "bold");
  log(`Total Workflows: ${total}`, "blue");
  log(`Tested: ${tested}`, "cyan");
  log(`Passed: ${passed}`, "green");
  log(`Failed: ${failed}`, "red");
  log(`Skipped: ${skipped}`, "yellow");
  
  if (total > 0) {
    const completionRate = ((tested / total) * 100).toFixed(1);
    log(`Completion Rate: ${completionRate}%`, "magenta");
  }
  
  if (tested > 0) {
    const successRate = ((passed / tested) * 100).toFixed(1);
    log(`Success Rate: ${successRate}%`, "green");
  }
}

function displayWorkflowStatus(progress) {
  log("\n🔍 Individual Workflow Status", "bold");
  log("=============================", "bold");
  
  const workflows = Object.entries(progress.workflows);
  if (workflows.length === 0) {
    log("No workflows tracked yet.", "yellow");
    return;
  }
  
  // Group by status
  const byStatus = {
    passed: [],
    failed: [],
    skipped: [],
    untested: []
  };
  
  workflows.forEach(([name, status]) => {
    if (status.status === 'passed') byStatus.passed.push(name);
    else if (status.status === 'failed') byStatus.failed.push(name);
    else if (status.status === 'skipped') byStatus.skipped.push(name);
    else byStatus.untested.push(name);
  });
  
  if (byStatus.passed.length > 0) {
    log(`\n✅ PASSED (${byStatus.passed.length}):`, "green");
    byStatus.passed.forEach(name => log(`  - ${name}`, "green"));
  }
  
  if (byStatus.failed.length > 0) {
    log(`\n❌ FAILED (${byStatus.failed.length}):`, "red");
    byStatus.failed.forEach(name => {
      const workflow = progress.workflows[name];
      log(`  - ${name}: ${workflow.error || 'Unknown error'}`, "red");
    });
  }
  
  if (byStatus.skipped.length > 0) {
    log(`\n⏭️  SKIPPED (${byStatus.skipped.length}):`, "yellow");
    byStatus.skipped.forEach(name => log(`  - ${name}`, "yellow"));
  }
  
  if (byStatus.untested.length > 0) {
    log(`\n⏳ UNTESTED (${byStatus.untested.length}):`, "blue");
    byStatus.untested.forEach(name => log(`  - ${name}`, "blue"));
  }
}

function updateWorkflowStatus(progress, workflowName, status, details = {}) {
  if (!progress.workflows[workflowName]) {
    progress.workflows[workflowName] = {
      name: workflowName,
      status: 'untested',
      lastUpdated: new Date().toISOString(),
      notes: ''
    };
  }
  
  const workflow = progress.workflows[workflowName];
  const oldStatus = workflow.status;
  
  // Update status
  workflow.status = status;
  workflow.lastUpdated = new Date().toISOString();
  workflow.notes = details.notes || workflow.notes;
  workflow.error = details.error || workflow.error;
  workflow.executionTime = details.executionTime || workflow.executionTime;
  workflow.artifacts = details.artifacts || workflow.artifacts;
  
  // Update summary
  if (oldStatus !== 'untested') {
    if (oldStatus === 'passed') progress.summary.passed--;
    else if (oldStatus === 'failed') progress.summary.failed--;
    else if (oldStatus === 'skipped') progress.summary.skipped--;
  }
  
  if (status === 'passed') progress.summary.passed++;
  else if (status === 'failed') progress.summary.failed++;
  else if (status === 'skipped') progress.summary.skipped++;
  
  progress.summary.tested = progress.summary.passed + progress.summary.failed + progress.summary.skipped;
  
  log(`Updated ${workflowName}: ${oldStatus} → ${status}`, "cyan");
}

function getNextWorkflowToTest(progress) {
  const untested = Object.entries(progress.workflows)
    .filter(([name, workflow]) => workflow.status === 'untested')
    .map(([name, workflow]) => name);
  
  if (untested.length === 0) {
    return null;
  }
  
  // Priority order: critical → high → medium → low
  const priorityOrder = [
    'ci.yml', 'test.yml', 'security.yml', 'playwright-smoke.yml', 'test-suite.yml',
    'workflow-manager.yml', 'workflow-validator.yml', 'performance-monitoring.yml',
    'security-audit.yml', 'performance-audit.yml', 'gitleaks.yml',
    'marketing-daily.yml', 'maintenance.yml'
  ];
  
  // Find first untested workflow in priority order
  for (const priority of priorityOrder) {
    if (untested.includes(priority)) {
      return priority;
    }
  }
  
  // Return first untested if none in priority list
  return untested[0];
}

function showTestingInstructions(workflowName) {
  log(`\n📋 Testing Instructions for: ${workflowName}`, "bold");
  log("=".repeat(50), "bold");
  
  log("\n1. Go to GitHub repository → Actions tab", "blue");
  log("2. Select this workflow from the left sidebar", "blue");
  log("3. Click 'Run workflow' button", "blue");
  log("4. Select branch (usually 'main') and click 'Run workflow'", "blue");
  log("5. Monitor execution in real-time", "blue");
  log("6. Check for any errors or warnings", "blue");
  log("7. Verify artifacts or outputs if any", "blue");
  
  log("\n⏱️  Expected Duration: 10-30 minutes", "yellow");
  
  log("\n🔍 What to Check:", "blue");
  log("  - All steps complete successfully", "green");
  log("  - No error messages", "green");
  log("  - Expected outputs/artifacts generated", "green");
  log("  - Performance within acceptable limits", "green");
  
  log("\n📝 After Testing:", "magenta");
  log("  - Update status: passed/failed/skipped", "magenta");
  log("  - Note any errors or issues", "magenta");
  log("  - Record execution time if available", "magenta");
}

function main() {
  const progress = loadProgress();
  const workflowFiles = getWorkflowFiles();
  
  // Initialize progress if empty
  if (Object.keys(progress.workflows).length === 0) {
    workflowFiles.forEach(name => {
      progress.workflows[name] = {
        name,
        status: 'untested',
        lastUpdated: new Date().toISOString(),
        notes: ''
      };
    });
    progress.summary.total = workflowFiles.length;
    saveProgress(progress);
  }
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // Show status
    displayProgress(progress);
    displayWorkflowStatus(progress);
    
    const nextWorkflow = getNextWorkflowToTest(progress);
    if (nextWorkflow) {
      log(`\n🎯 Next workflow to test: ${nextWorkflow}`, "bold");
      log("Run: node scripts/workflow-testing-tracker.cjs test <workflow-name>", "cyan");
    } else {
      log("\n🎉 All workflows have been tested!", "green");
    }
    
    return;
  }
  
  const command = args[0];
  
  if (command === 'test' && args[1]) {
    const workflowName = args[1];
    
    if (!progress.workflows[workflowName]) {
      log(`❌ Workflow '${workflowName}' not found`, "red");
      return;
    }
    
    showTestingInstructions(workflowName);
    
    log(`\n💡 To update status after testing, run:`, "cyan");
    log(`   node scripts/workflow-testing-tracker.cjs update ${workflowName} <status> [notes]`, "cyan");
    log(`   Status options: passed, failed, skipped`, "cyan");
    
  } else if (command === 'update' && args[1] && args[2]) {
    const workflowName = args[1];
    const status = args[2];
    const notes = args.slice(3).join(' ');
    
    if (!progress.workflows[workflowName]) {
      log(`❌ Workflow '${workflowName}' not found`, "red");
      return;
    }
    
    if (!['passed', 'failed', 'skipped'].includes(status)) {
      log(`❌ Invalid status '${status}'. Use: passed, failed, or skipped`, "red");
      return;
    }
    
    const details = { notes };
    if (status === 'failed') {
      details.error = notes || 'Test failed';
    }
    
    updateWorkflowStatus(progress, workflowName, status, details);
    saveProgress(progress);
    
    displayProgress(progress);
    
  } else if (command === 'reset') {
    log("🔄 Resetting all workflow statuses to untested...", "yellow");
    
    Object.keys(progress.workflows).forEach(name => {
      progress.workflows[name].status = 'untested';
      progress.workflows[name].lastUpdated = new Date().toISOString();
      progress.workflows[name].notes = '';
      progress.workflows[name].error = undefined;
      progress.workflows[name].executionTime = undefined;
      progress.workflows[name].artifacts = undefined;
    });
    
    progress.summary.tested = 0;
    progress.summary.passed = 0;
    progress.summary.failed = 0;
    progress.summary.skipped = 0;
    
    saveProgress(progress);
    log("✅ Progress reset complete", "green");
    
  } else if (command === 'help') {
    log("\n📖 Workflow Testing Tracker Help", "bold");
    log("===============================", "bold");
    log("\nCommands:", "blue");
    log("  (no args)           - Show current progress", "blue");
    log("  test <workflow>     - Show testing instructions for workflow", "blue");
    log("  update <workflow> <status> [notes] - Update workflow status", "blue");
    log("  reset               - Reset all workflow statuses", "blue");
    log("  help                - Show this help message", "blue");
    log("\nStatus options: passed, failed, skipped", "yellow");
    log("\nExamples:", "cyan");
    log("  node scripts/workflow-testing-tracker.cjs", "cyan");
    log("  node scripts/workflow-testing-tracker.cjs test ci.yml", "cyan");
    log("  node scripts/workflow-testing-tracker.cjs update ci.yml passed 'All tests passed'", "cyan");
    log("  node scripts/workflow-testing-tracker.cjs update ci.yml failed 'Build timeout'", "cyan");
    
  } else {
    log("❌ Invalid command. Run 'help' for usage information.", "red");
  }
}

if (typeof main === 'function') {
  main();
}