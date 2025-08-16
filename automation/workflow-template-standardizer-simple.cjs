#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class SimpleWorkflowStandardizer {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.reportsDir = path.resolve(__dirname, "reports");
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async standardizeWorkflows() {
    console.log("🔧 Standardizing workflows (Safe Mode)...");
    
    const workflows = this.getActiveWorkflows();
    const standardizationReport = {
      timestamp: new Date().toISOString(),
      totalWorkflows: workflows.length,
      standardized: [],
      failed: [],
      recommendations: []
    };
    
    for (const workflow of workflows) {
      try {
        const result = await this.standardizeWorkflow(workflow);
        if (result.standardized) {
          standardizationReport.standardized.push({
            name: workflow.name,
            changes: result.changes,
            reason: result.reason
          });
        } else {
          standardizationReport.failed.push({
            name: workflow.name,
            reason: result.reason
          });
        }
      } catch (error) {
        console.error(`❌ Error standardizing ${workflow.name}:`, error.message);
        standardizationReport.failed.push({
          name: workflow.name,
          reason: error.message
        });
      }
    }
    
    // Generate recommendations
    standardizationReport.recommendations = this.generateRecommendations(standardizationReport);
    
    // Save report
    this.saveStandardizationReport(standardizationReport);
    
    return standardizationReport;
  }

  getActiveWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) return [];
    
    return fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.workflowsDir, f)
      }));
  }

  async standardizeWorkflow(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    const originalContent = content;
    let modified = false;
    const changes = [];
    
    // Only make minimal, safe changes
    const result = await this.applySafeStandardization(content);
    
    if (result.modified) {
      modified = true;
      changes.push(...result.changes);
      
      // Create backup before modifying
      const backupPath = workflow.path + '.backup-' + Date.now();
      fs.writeFileSync(backupPath, originalContent, 'utf8');
      
      fs.writeFileSync(workflow.path, result.content, 'utf8');
      console.log(`✅ Standardized ${workflow.name} (backup: ${backupPath})`);
    }
    
    return {
      standardized: modified,
      changes,
      reason: modified ? 'Applied safe standardizations' : 'No safe changes needed'
    };
  }

  async applySafeStandardization(content) {
    let modified = false;
    const changes = [];
    let newContent = content;
    
    // Rule 1: Update deprecated actions (safe)
    const actionUpdates = this.updateActions(newContent);
    if (actionUpdates.modified) {
      newContent = actionUpdates.content;
      modified = true;
      changes.push('Updated deprecated actions');
    }
    
    // Rule 2: Add missing permissions (safe)
    if (!newContent.includes('permissions:')) {
      newContent = this.addBasicPermissions(newContent);
      modified = true;
      changes.push('Added basic permissions');
    }
    
    // Rule 3: Fix basic YAML issues (safe)
    const yamlFixes = this.fixBasicYamlIssues(newContent);
    if (yamlFixes.modified) {
      newContent = yamlFixes.content;
      modified = true;
      changes.push('Fixed basic YAML issues');
    }
    
    return { modified, changes, content: newContent };
  }

  updateActions(content) {
    let modified = false;
    let newContent = content;
    
    // Update checkout action
    if (newContent.includes('actions/checkout@v3') || newContent.includes('actions/checkout@v2')) {
      newContent = newContent.replace(/actions\/checkout@v[23]/g, 'actions/checkout@v4');
      modified = true;
    }
    
    // Update setup-node action
    if (newContent.includes('actions/setup-node@v3') || newContent.includes('actions/setup-node@v2')) {
      newContent = newContent.replace(/actions\/setup-node@v[23]/g, 'actions/setup-node@v4');
      modified = true;
    }
    
    // Update upload-artifact action
    if (newContent.includes('actions/upload-artifact@v3') || newContent.includes('actions/upload-artifact@v2')) {
      newContent = newContent.replace(/actions\/upload-artifact@v[23]/g, 'actions/upload-artifact@v4');
      modified = true;
    }
    
    // Update download-artifact action
    if (newContent.includes('actions/download-artifact@v3') || newContent.includes('actions/download-artifact@v2')) {
      newContent = newContent.replace(/actions\/download-artifact@v[23]/g, 'actions/download-artifact@v4');
      modified = true;
    }
    
    // Update codecov action
    if (newContent.includes('codecov/codecov-action@v3') || newContent.includes('codecov/codecov-action@v2')) {
      newContent = newContent.replace(/codecov\/codecov-action@v[23]/g, 'codecov/codecov-action@v4');
      modified = true;
    }
    
    // Update CodeQL actions
    if (newContent.includes('github/codeql-action/init@v3')) {
      newContent = newContent.replace(/github\/codeql-action\/init@v3/g, 'github/codeql-action/init@v2');
      modified = true;
    }
    
    if (newContent.includes('github/codeql-action/autobuild@v3')) {
      newContent = newContent.replace(/github\/codeql-action\/autobuild@v3/g, 'github/codeql-action/autobuild@v2');
      modified = true;
    }
    
    if (newContent.includes('github/codeql-action/analyze@v3')) {
      newContent = newContent.replace(/github\/codeql-action\/analyze@v3/g, 'github/codeql-action/analyze@v2');
      modified = true;
    }
    
    return { modified, content: newContent };
  }

  addBasicPermissions(content) {
    const permissionBlock = '\npermissions:\n  contents: read\n  actions: read\n';
    
    // Insert after 'on:' section
    const onIndex = content.indexOf('on:');
    if (onIndex !== -1) {
      const nextSectionIndex = content.indexOf('\n\n', onIndex);
      if (nextSectionIndex !== -1) {
        return content.slice(0, nextSectionIndex) + permissionBlock + content.slice(nextSectionIndex);
      }
    }
    
    return content + permissionBlock;
  }

  fixBasicYamlIssues(content) {
    let modified = false;
    let newContent = content;
    
    // Fix timeout-minutes indentation (6 spaces to 4 spaces)
    if (newContent.includes('      timeout-minutes:')) {
      newContent = newContent.replace(/      timeout-minutes:/g, '    timeout-minutes:');
      modified = true;
    }
    
    // Fix step indentation issues
    if (newContent.includes('            - name:')) {
      newContent = newContent.replace(/            - name:/g, '      - name:');
      modified = true;
    }
    
    // Fix job indentation issues
    if (newContent.includes('        jobs:')) {
      newContent = newContent.replace(/        jobs:/g, 'jobs:');
      modified = true;
    }
    
    return { modified, content: newContent };
  }

  generateRecommendations(report) {
    const recommendations = [];
    
    if (report.failed.length > 0) {
      recommendations.push('Review failed standardizations and fix manually');
    }
    
    if (report.standardized.length > 0) {
      recommendations.push('Test standardized workflows to ensure they work correctly');
    }
    
    if (report.totalWorkflows > 20) {
      recommendations.push('Consider implementing workflow templates for new workflows');
    }
    
    return recommendations;
  }

  saveStandardizationReport(report) {
    const reportPath = path.join(this.reportsDir, `simple-standardization-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`💾 Standardization report saved to: ${reportPath}`);
  }

  printStandardizationSummary(report) {
    console.log('\n📊 Simple Workflow Standardization Summary');
    console.log('==========================================');
    console.log(`Total workflows: ${report.totalWorkflows}`);
    console.log(`Standardized: ${report.standardized.length}`);
    console.log(`Failed: ${report.failed.length}`);
    console.log(`Timestamp: ${report.timestamp}`);
    
    if (report.standardized.length > 0) {
      console.log('\n✅ Successfully standardized workflows:');
      report.standardized.forEach(wf => {
        console.log(`  - ${wf.name}: ${wf.changes.join(', ')}`);
      });
    }
    
    if (report.failed.length > 0) {
      console.log('\n❌ Failed standardizations:');
      report.failed.forEach(wf => {
        console.log(`  - ${wf.name}: ${wf.reason}`);
      });
    }
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
    }
  }
}

// Run the standardizer if called directly
if (require.main === module) {
  (async () => {
    try {
      console.log("🚀 Starting Simple Workflow Template Standardizer...");
      
      const standardizer = new SimpleWorkflowStandardizer();
      
      const report = await standardizer.standardizeWorkflows();
      
      standardizer.printStandardizationSummary(report);
      
    } catch (error) {
      console.error("❌ Error running simple workflow template standardizer:", error);
      process.exit(1);
    }
  })();
}

module.exports = SimpleWorkflowStandardizer;
