#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

console.log("📋 GitHub Actions Workflow Testing Plan\n");

const workflowsDir = ".github/workflows";

// Workflow categories by priority
const workflowCategories = {
  critical: [
    "ci.yml",
    "test.yml", 
    "build.yml",
    "deploy.yml",
    "security.yml",
    "security-scan.yml",
    "playwright-smoke.yml",
    "test-suite.yml"
  ],
  high: [
    "workflow-manager.yml",
    "workflow-validator.yml",
    "workflow-auto-healer.yml",
    "performance-monitoring.yml",
    "comprehensive-test.yml",
    "release-deploy.yml",
    "dependencies.yml",
    "lint.yml"
  ],
  medium: [
    "security-audit.yml",
    "security-gates.yml",
    "performance-audit.yml",
    "seo-audit.yml",
    "accessibility-audit.yml",
    "lighthouse-live.yml",
    "pa11y.yml",
    "gitleaks.yml"
  ],
  low: [
    "marketing-daily.yml",
    "instagram-marketing.yml",
    "linkedin-marketing.yml",
    "homepage-auto-advertiser.yml",
    "og-image-update.yml",
    "sitemap-daily.yml",
    "maintenance.yml",
    "cleanup.yml"
  ]
};

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

function getWorkflowInfo(filename) {
  const filepath = path.join(workflowsDir, filename);
  if (!fs.existsSync(filepath)) return null;
  
  const content = fs.readFileSync(filepath, "utf8");
  const hasManualTrigger = content.includes("workflow_dispatch");
  const hasSchedule = content.includes("schedule") && content.includes("cron:");
  const hasPushTrigger = content.includes("push:");
  const hasPullRequestTrigger = content.includes("pull_request:");
  
  return {
    filename,
    canBeManuallyTriggered: hasManualTrigger,
    runsAutomatically: hasSchedule,
    hasPushTrigger,
    hasPullRequestTrigger,
    triggerTypes: {
      manual: hasManualTrigger,
      scheduled: hasSchedule,
      push: hasPushTrigger,
      pullRequest: hasPullRequestTrigger
    }
  };
}

function generateTestingInstructions(workflow, category) {
  const instructions = [];
  
  if (workflow.canBeManuallyTriggered) {
    instructions.push("✅ Can be manually triggered via GitHub UI");
  } else {
    instructions.push("⚠️  Cannot be manually triggered - add 'workflow_dispatch: {}' to 'on:' section");
  }
  
  if (workflow.runsAutomatically) {
    instructions.push("✅ Runs automatically on schedule");
  } else {
    instructions.push("ℹ️  No automatic schedule");
  }
  
  if (workflow.hasPushTrigger || workflow.hasPullRequestTrigger) {
    instructions.push("✅ Triggers on code changes");
  } else {
    instructions.push("ℹ️  No automatic triggers on code changes");
  }
  
  return instructions;
}

function generateManualTestingSteps(workflow, category) {
  const steps = [];
  
  if (workflow.canBeManuallyTriggered) {
    steps.push("1. Go to GitHub repository → Actions tab");
    steps.push("2. Select this workflow from the left sidebar");
    steps.push("3. Click 'Run workflow' button");
    steps.push("4. Select branch (usually 'main') and click 'Run workflow'");
    steps.push("5. Monitor execution in real-time");
    steps.push("6. Check for any errors or warnings");
    steps.push("7. Verify artifacts or outputs if any");
  } else {
    steps.push("⚠️  Cannot be manually tested - workflow needs workflow_dispatch trigger");
  }
  
  if (workflow.runsAutomatically) {
    steps.push("8. Wait for scheduled execution or check recent runs");
  }
  
  return steps;
}

function main() {
  if (!fs.existsSync(workflowsDir)) {
    log("❌ No .github/workflows directory found", "red");
    process.exit(1);
  }
  
  log("🎯 Workflow Testing Strategy", "bold");
  log("===========================", "bold");
  log("");
  log("This plan categorizes workflows by priority and provides testing instructions.", "blue");
  log("Test workflows in priority order: Critical → High → Medium → Low", "blue");
  log("");
  
  // Process each category
  for (const [category, workflows] of Object.entries(workflowCategories)) {
    log(`📁 ${category.toUpperCase()} PRIORITY WORKFLOWS`, "bold");
    log("=".repeat(30), "bold");
    
    const validWorkflows = [];
    const invalidWorkflows = [];
    
    for (const filename of workflows) {
      const workflow = getWorkflowInfo(filename);
      if (workflow) {
        validWorkflows.push(workflow);
      } else {
        invalidWorkflows.push(filename);
      }
    }
    
    if (invalidWorkflows.length > 0) {
      log(`⚠️  Missing workflows: ${invalidWorkflows.join(", ")}`, "yellow");
    }
    
    for (const workflow of validWorkflows) {
      log(`\n🔍 ${workflow.filename}`, "cyan");
      
      const instructions = generateTestingInstructions(workflow, category);
      instructions.forEach(instruction => {
        if (instruction.startsWith("✅")) {
          log(`  ${instruction}`, "green");
        } else if (instruction.startsWith("⚠️")) {
          log(`  ${instruction}`, "yellow");
        } else {
          log(`  ${instruction}`, "blue");
        }
      });
      
      log("\n📋 Manual Testing Steps:", "magenta");
      const testingSteps = generateManualTestingSteps(workflow, category);
      testingSteps.forEach(step => log(`  ${step}`, "reset"));
      
      log("\n⏱️  Expected Duration:", "blue");
      if (category === "critical") {
        log("  5-15 minutes (depending on complexity)", "green");
      } else if (category === "high") {
        log("  10-30 minutes", "green");
      } else if (category === "medium") {
        log("  15-45 minutes", "yellow");
      } else {
        log("  20-60 minutes", "yellow");
      }
      
      log("\n🔍 What to Check:", "blue");
      if (category === "critical") {
        log("  - All steps complete successfully", "green");
        log("  - No error messages", "green");
        log("  - Expected outputs/artifacts generated", "green");
        log("  - Performance within acceptable limits", "green");
      } else if (category === "high") {
        log("  - Core functionality works", "green");
        log("  - Error handling works correctly", "green");
        log("  - Timeouts are appropriate", "green");
      } else {
        log("  - Basic execution completes", "yellow");
        log("  - No critical failures", "yellow");
        log("  - Reasonable execution time", "yellow");
      }
    }
    
    log("\n" + "=".repeat(50));
  }
  
  // Generate testing schedule
  log("\n📅 RECOMMENDED TESTING SCHEDULE", "bold");
  log("===============================", "bold");
  log("");
  log("Phase 1 (Day 1-2): Critical workflows", "red");
  log("  - Test all critical workflows first", "red");
  log("  - Fix any issues before proceeding", "red");
  log("");
  log("Phase 2 (Day 3-4): High priority workflows", "yellow");
  log("  - Test high priority workflows", "yellow");
  log("  - Ensure core automation works", "yellow");
  log("");
  log("Phase 3 (Day 5-6): Medium priority workflows", "blue");
  log("  - Test medium priority workflows", "blue");
  log("  - Focus on quality and monitoring", "blue");
  log("");
  log("Phase 4 (Day 7+): Low priority workflows", "cyan");
  log("  - Test remaining workflows", "cyan");
  log("  - Optimize performance if needed", "cyan");
  log("");
  
  // Testing checklist
  log("✅ TESTING CHECKLIST", "bold");
  log("===================", "bold");
  log("");
  log("Before Testing:", "blue");
  log("  ☐ Ensure you have access to GitHub repository", "blue");
  log("  ☐ Check that workflows are not currently running", "blue");
  log("  ☐ Verify you have appropriate permissions", "blue");
  log("");
  log("During Testing:", "blue");
  log("  ☐ Monitor workflow execution in real-time", "blue");
  log("  ☐ Take screenshots of any errors", "blue");
  log("  ☐ Note execution times", "blue");
  log("  ☐ Check resource usage if visible", "blue");
  log("");
  log("After Testing:", "blue");
  log("  ☐ Document any issues found", "blue");
  log("  ☐ Note successful executions", "blue");
  log("  ☐ Update this testing plan if needed", "blue");
  log("  ☐ Share results with team", "blue");
  log("");
  
  // Save detailed plan
  const plan = {
    timestamp: new Date().toISOString(),
    categories: workflowCategories,
    testingInstructions: {},
    schedule: {
      phase1: "Critical workflows (Day 1-2)",
      phase2: "High priority workflows (Day 3-4)", 
      phase3: "Medium priority workflows (Day 5-6)",
      phase4: "Low priority workflows (Day 7+)"
    }
  };
  
  // Add testing instructions for each workflow
  for (const [category, workflows] of Object.entries(workflowCategories)) {
    plan.testingInstructions[category] = {};
    for (const filename of workflows) {
      const workflow = getWorkflowInfo(filename);
      if (workflow) {
        plan.testingInstructions[category][filename] = {
          canBeManuallyTriggered: workflow.canBeManuallyTriggered,
          testingSteps: generateManualTestingSteps(workflow, category),
          expectedDuration: category === "critical" ? "5-15 minutes" : 
                          category === "high" ? "10-30 minutes" :
                          category === "medium" ? "15-45 minutes" : "20-60 minutes"
        };
      }
    }
  }
  
  try {
    const reportDir = path.resolve(__dirname, "../public/reports/workflows");
    fs.mkdirSync(reportDir, { recursive: true });
    const planPath = path.join(reportDir, "workflow-testing-plan.json");
    fs.writeFileSync(planPath, JSON.stringify(plan, null, 2));
    log(`\n📄 Detailed testing plan saved to: ${planPath}`, "green");
  } catch (err) {
    log(`\n⚠️  Could not save testing plan: ${err.message}`, "yellow");
  }
  
  log("\n🚀 Ready to start testing workflows!", "green");
  log("Start with critical workflows and work your way down the priority list.", "green");
}

if (typeof main === 'function') {
  main().catch(err => {
    log(`❌ Error: ${err.message}`, "red");
    process.exit(1);
  });
}