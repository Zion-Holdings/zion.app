#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class WorkflowTemplateStandardizer {
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
    console.log("🔧 Standardizing workflows...");
    
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
      reason: result.reason || 'No changes needed'
    };
  }

  async applySafeStandardization(content) {
    let modified = false;
    const changes = [];
    let newContent = content;
    
    // Add timeout if missing
    if (!content.includes('timeout-minutes:') && content.includes('runs-on:')) {
      newContent = newContent.replace(
        /(runs-on:\s*[^\n]+)/,
        '$1\n      timeout-minutes: 10'
      );
      modified = true;
      changes.push('Added timeout-minutes: 10');
    }
    
    // Ensure proper YAML formatting
    if (content.includes('on:') && !content.includes('on:\n')) {
      newContent = newContent.replace(/on:\s*([^\n]+)/g, 'on:\n  $1');
      modified = true;
      changes.push('Fixed YAML formatting for triggers');
    }
    
    return {
      modified,
      content: newContent,
      changes
    };
  }

  generateRecommendations(report) {
    const recommendations = [];
    
    if (report.failed.length > 0) {
      recommendations.push('Review failed workflow standardizations');
    }
    
    if (report.standardized.length > 0) {
      recommendations.push('Test standardized workflows to ensure they still function correctly');
    }
    
    return recommendations;
  }

  saveStandardizationReport(report) {
    const reportPath = path.join(this.reportsDir, `workflow-standardization-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Standardization report saved to: ${reportPath}`);
  }

  async run() {
    try {
      const result = await this.standardizeWorkflows();
      console.log(`✅ Workflow standardization completed. ${result.standardized.length} workflows standardized, ${result.failed.length} failed.`);
      return result;
    } catch (error) {
      console.error('❌ Workflow standardization failed:', error.message);
      throw error;
    }
  }
}

// CLI support
if (require.main === module) {
  const standardizer = new WorkflowTemplateStandardizer();
  standardizer.run().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
  });
}

module.exports = WorkflowTemplateStandardizer;