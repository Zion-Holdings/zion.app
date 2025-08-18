#!/usr/bin/env node

/**
 * Workflow Health Checker
 * Checks the health of all GitHub Actions workflows
 */

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

class WorkflowHealthChecker {
  constructor() {
    this.workflowsDir = '.github/workflows';
    this.issues = [];
    this.healthyCount = 0;
    this.totalCount = 0;
  }

  async checkWorkflowHealth() {
    console.log('🔍 Checking workflow health...');
    
    try {
      const workflowFiles = this.getWorkflowFiles();
      this.totalCount = workflowFiles.length;
      
      if (this.totalCount === 0) {
        console.log('⚠️ No workflow files found');
        return false;
      }
      
      console.log(`📁 Found ${this.totalCount} workflow files`);
      
      for (const file of workflowFiles) {
        await this.validateWorkflow(file);
      }
      
      this.healthyCount = this.totalCount - this.issues.length;
      
      return this.issues.length === 0;
    } catch (error) {
      console.error('❌ Error checking workflow health:', error.message);
      return false;
    }
  }

  getWorkflowFiles() {
    try {
      if (!fs.existsSync(this.workflowsDir)) {
        return [];
      }
      
      return fs.readdirSync(this.workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .map(file => path.join(this.workflowsDir, file));
    } catch (error) {
      console.error('❌ Error reading workflow directory:', error.message);
      return [];
    }
  }

  async validateWorkflow(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      
      // Check YAML syntax
      try {
        yaml.parse(content);
      } catch (error) {
        this.issues.push({
          file: fileName,
          type: 'yaml-syntax',
          message: `Invalid YAML syntax: ${error.message}`
        });
        return;
      }
      
      // Check for common issues
      if (content.includes('\\n') && content.includes('"')) {
        this.issues.push({
          file: fileName,
          type: 'malformed-commands',
          message: 'Malformed multi-line commands detected'
        });
      }
      
      if (!content.includes('timeout-minutes')) {
        this.issues.push({
          file: fileName,
          type: 'missing-timeout',
          message: 'Missing timeout configuration'
        });
      }
      
      if (!content.includes('concurrency')) {
        this.issues.push({
          file: fileName,
          type: 'missing-concurrency',
          message: 'Missing concurrency control'
        });
      }
      
      // Check for missing required fields
      if (!content.includes('name:') || !content.includes('on:') || !content.includes('jobs:')) {
        this.issues.push({
          file: fileName,
          type: 'missing-required-fields',
          message: 'Missing required workflow fields (name, on, jobs)'
        });
      }
      
    } catch (error) {
      this.issues.push({
        file: path.basename(filePath),
        type: 'file-read-error',
        message: `File read error: ${error.message}`
      });
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.totalCount,
        healthy: this.healthyCount,
        issues: this.issues.length
      },
      issues: this.issues
    };
    
    return report;
  }

  printReport() {
    const report = this.generateReport();
    
    console.log('\n📊 Workflow Health Report');
    console.log('========================');
    console.log(`Total workflows: ${report.summary.total}`);
    console.log(`Healthy workflows: ${report.summary.healthy}`);
    console.log(`Issues found: ${report.summary.issues}`);
    
    if (report.issues.length > 0) {
      console.log('\n❌ Issues found:');
      report.issues.forEach((issue, index) => {
        console.log(`  ${index + 1}. ${issue.file}: ${issue.message}`);
      });
      
      console.log('\n🔧 Recommendations:');
      console.log('  - Fix YAML syntax errors');
      console.log('  - Add proper timeout configurations');
      console.log('  - Implement concurrency controls');
      console.log('  - Fix malformed multi-line commands');
      
      return false;
    } else {
      console.log('\n✅ All workflows are healthy!');
      return true;
    }
  }

  async run() {
    try {
      const isHealthy = await this.checkWorkflowHealth();
      const report = this.printReport();
      
      // Exit with appropriate code for CI/CD
      if (isHealthy) {
        process.exit(0);
      } else {
        process.exit(1);
      }
    } catch (error) {
      console.error('❌ System error:', error.message);
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const checker = new WorkflowHealthChecker();
  checker.run();
}

module.exports = WorkflowHealthChecker;
