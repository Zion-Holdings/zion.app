#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class WorkflowHealthMonitor {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.disabledDir = path.resolve(__dirname, "../.github/workflows.disabled");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.healthData = {};
    this.failurePatterns = {
      highComplexity: [],
      missingTimeouts: [],
      unsafeOperations: [],
      outdatedActions: [],
      resourceIntensive: []
    };
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async analyzeWorkflowHealth() {
    console.log("🔍 Analyzing workflow health...");
    
    const activeWorkflows = this.getActiveWorkflows();
    const disabledWorkflows = this.getDisabledWorkflows();
    
    // Analyze each active workflow
    for (const workflow of activeWorkflows) {
      await this.analyzeWorkflow(workflow, 'active');
    }
    
    // Analyze disabled workflows for patterns
    for (const workflow of disabledWorkflows) {
      await this.analyzeWorkflow(workflow, 'disabled');
    }
    
    // Identify failure patterns
    this.identifyFailurePatterns();
    
    // Suggest optimizations
    this.suggestOptimizations();
    
    // Generate comprehensive health report
    this.generateHealthReport();
    
    // Save health data
    this.saveHealthData();
  }

  getActiveWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) return [];
    
    return fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.workflowsDir, f),
        status: 'active'
      }));
  }

  getDisabledWorkflows() {
    if (!fs.existsSync(this.disabledDir)) return [];
    
    return fs.readdirSync(this.disabledDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.disabledDir, f),
        status: 'disabled'
      }));
  }

  async analyzeWorkflow(workflow, status) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    const analysis = {
      name: workflow.name,
      status,
      path: workflow.path,
      size: content.length,
      lines: content.split('\n').length,
      triggers: this.extractTriggers(content),
      jobs: this.extractJobs(content),
      timeouts: this.extractTimeouts(content),
      permissions: this.extractPermissions(content),
      concurrency: this.extractConcurrency(content),
      issues: this.identifyIssues(content) || [],
      recommendations: []
    };

    // Add specific recommendations
    analysis.recommendations = this.generateRecommendations(analysis);
    
    this.healthData[workflow.name] = analysis;
  }

  extractTriggers(content) {
    const triggers = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('on:')) {
        // Look for trigger types
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith(' ')) {
          const triggerLine = lines[j].trim();
          if (triggerLine.includes('push:') || triggerLine.includes('pull_request:') || 
              triggerLine.includes('schedule:') || triggerLine.includes('workflow_dispatch:')) {
            triggers.push(triggerLine.replace(':', ''));
          }
          j++;
        }
        break;
      }
    }
    
    return triggers;
  }

  extractJobs(content) {
    const jobs = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:$/)) {
        const jobName = line.replace(':', '');
        if (jobName !== 'on' && jobName !== 'permissions' && jobName !== 'concurrency' && jobName !== 'env') {
          jobs.push(jobName);
        }
      }
    }
    
    return jobs;
  }

  extractTimeouts(content) {
    const timeouts = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('timeout-minutes:')) {
        const timeout = line.split(':')[1].trim();
        timeouts.push(parseInt(timeout) || 0);
      }
    }
    
    return timeouts;
  }

  extractPermissions(content) {
    const permissions = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('permissions:')) {
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith(' ')) {
          const permLine = lines[j].trim();
          if (permLine.includes(':')) {
            const [perm, value] = permLine.split(':').map(s => s.trim());
            permissions.push({ permission: perm, value });
          }
          j++;
        }
        break;
      }
    }
    
    return permissions;
  }

  extractConcurrency(content) {
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('concurrency:')) {
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith(' ')) {
          const concurrencyLine = lines[j].trim();
          if (concurrencyLine.includes('group:')) {
            return concurrencyLine.split(':')[1].trim();
          }
          j++;
        }
        break;
      }
    }
    
    return null;
  }

  identifyIssues(content) {
    const issues = [];
    
    // Check for common problems
    if (content.includes('npm ci') && !content.includes('cache:')) {
      issues.push('missing_npm_cache');
    }
    
    if (content.includes('timeout-minutes:') && content.includes('timeout-minutes: 0')) {
      issues.push('zero_timeout');
    }
    
    if (content.includes('git push') && !content.includes('if:') && !content.includes('github.ref ==')) {
      issues.push('unsafe_git_push');
    }
    
    if (content.includes('actions/checkout@v3') || content.includes('actions/checkout@v2')) {
      issues.push('outdated_checkout_action');
    }
    
    if (content.includes('ubuntu-16.04') || content.includes('ubuntu-18.04')) {
      issues.push('outdated_runner');
    }
    
    return issues;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.issues.includes('missing_npm_cache')) {
      recommendations.push('Add npm cache to improve build performance');
    }
    
    if (analysis.issues.includes('zero_timeout')) {
      recommendations.push('Set appropriate timeout-minutes to prevent hanging workflows');
    }
    
    if (analysis.issues.includes('unsafe_git_push')) {
      recommendations.push('Add branch protection to git push operations');
    }
    
    if (analysis.issues.includes('outdated_checkout_action')) {
      recommendations.push('Update to actions/checkout@v4 for better security and performance');
    }
    
    if (analysis.issues.includes('outdated_runner')) {
      recommendations.push('Update to ubuntu-latest for better performance and security');
    }
    
    if (analysis.timeouts.length === 0) {
      recommendations.push('Add timeout-minutes to prevent infinite hanging');
    }
    
    if (analysis.triggers.includes('schedule') && !analysis.triggers.includes('workflow_dispatch')) {
      recommendations.push('Add workflow_dispatch trigger for manual testing');
    }
    
    if (analysis.jobs.length > 3) {
      recommendations.push('Consider splitting into smaller workflows for better maintainability');
    }
    
    return recommendations;
  }

  identifyFailurePatterns() {
    console.log("🔍 Identifying failure patterns...");
    
    // Group workflows by common characteristics
    const patterns = {
      highComplexity: [],
      missingTimeouts: [],
      unsafeOperations: [],
      outdatedActions: [],
      resourceIntensive: []
    };
    
    for (const [name, data] of Object.entries(this.healthData)) {
      if (data.jobs.length > 5) {
        patterns.highComplexity.push(name);
      }
      
      if (data.timeouts.length === 0) {
        patterns.missingTimeouts.push(name);
      }
      
      if (data.issues.includes('unsafe_git_push')) {
        patterns.unsafeOperations.push(name);
      }
      
      if (data.issues.includes('outdated_checkout_action')) {
        patterns.outdatedActions.push(name);
      }
      
      if (data.size > 5000) {
        patterns.resourceIntensive.push(name);
      }
    }
    
    this.failurePatterns = patterns;
  }

  suggestOptimizations() {
    console.log("💡 Generating optimization suggestions...");
    
    const optimizations = {
      immediate: [],
      shortTerm: [],
      longTerm: []
    };
    
    // Immediate fixes
    for (const workflow of this.failurePatterns.missingTimeouts) {
      optimizations.immediate.push(`Add timeout-minutes to ${workflow}`);
    }
    
    for (const workflow of this.failurePatterns.outdatedActions) {
      optimizations.immediate.push(`Update actions in ${workflow} to latest versions`);
    }
    
    // Short term improvements
    for (const workflow of this.failurePatterns.unsafeOperations) {
      optimizations.shortTerm.push(`Add branch protection to ${workflow}`);
    }
    
    // Long term optimizations
    for (const workflow of this.failurePatterns.highComplexity) {
      optimizations.longTerm.push(`Refactor ${workflow} into smaller, focused workflows`);
    }
    
    this.healthData.optimizations = optimizations;
  }

  generateHealthReport() {
    console.log("📊 Generating health report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalWorkflows: Object.keys(this.healthData).length,
        activeWorkflows: Object.values(this.healthData).filter(w => w.status === 'active').length,
        disabledWorkflows: Object.values(this.healthData).filter(w => w.status === 'disabled').length,
        workflowsWithIssues: Object.values(this.healthData).filter(w => w.issues && w.issues.length > 0).length,
        totalIssues: Object.values(this.healthData).reduce((sum, w) => sum + (w.issues ? w.issues.length : 0), 0)
      },
      patterns: this.failurePatterns,
      workflows: this.healthData,
      recommendations: this.healthData.optimizations || {}
    };
    
    const reportPath = path.join(this.reportsDir, 'workflow-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Health report saved to: ${reportPath}`);
    this.printSummary(report);
  }

  printSummary(report) {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 WORKFLOW HEALTH SUMMARY");
    console.log("=".repeat(60));
    console.log(`Total Workflows: ${report.summary.totalWorkflows}`);
    console.log(`Active: ${report.summary.activeWorkflows}`);
    console.log(`Disabled: ${report.summary.disabledWorkflows}`);
    console.log(`With Issues: ${report.summary.workflowsWithIssues}`);
    console.log(`Total Issues: ${report.summary.totalIssues}`);
    
    if (report.recommendations.immediate && report.recommendations.immediate.length > 0) {
      console.log("\n🔴 IMMEDIATE ACTIONS NEEDED:");
      report.recommendations.immediate.forEach(rec => console.log(`  • ${rec}`));
    }
    
    if (report.recommendations.shortTerm && report.recommendations.shortTerm.length > 0) {
      console.log("\n🟡 SHORT TERM IMPROVEMENTS:");
      report.recommendations.shortTerm.forEach(rec => console.log(`  • ${rec}`));
    }
    
    if (report.recommendations.longTerm && report.recommendations.longTerm.length > 0) {
      console.log("\n🟢 LONG TERM OPTIMIZATIONS:");
      report.recommendations.longTerm.forEach(rec => console.log(`  • ${rec}`));
    }
    
    console.log("=".repeat(60));
  }

  saveHealthData() {
    const dataPath = path.join(this.reportsDir, 'workflow-health-data.json');
    fs.writeFileSync(dataPath, JSON.stringify(this.healthData, null, 2));
    console.log(`💾 Health data saved to: ${dataPath}`);
  }
}

// Run the monitor
async function main() {
  try {
    const monitor = new WorkflowHealthMonitor();
    await monitor.analyzeWorkflowHealth();
  } catch (error) {
    console.error("❌ Error running workflow health monitor:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = WorkflowHealthMonitor;