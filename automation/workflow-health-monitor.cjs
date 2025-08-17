#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const healthReportFile = path.join(logsDir, 'workflow-health-report.json');
const workflowStatusFile = path.join(logsDir, 'workflow-status.json');

if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

class WorkflowHealthMonitor {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.healthData = this.loadHealthData();
    this.workflowStatus = this.loadWorkflowStatus();
  }

  loadHealthData() {
    try {
      if (fs.existsSync(healthReportFile)) {
        return JSON.parse(fs.readFileSync(healthReportFile, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new health data file');
    }
    return {
      lastCheck: new Date().toISOString(),
      totalWorkflows: 0,
      activeWorkflows: 0,
      disabledWorkflows: 0,
      failingWorkflows: [],
      recommendations: [],
      fixesApplied: []
    };
  }

  loadWorkflowStatus() {
    try {
      if (fs.existsSync(workflowStatusFile)) {
        return JSON.parse(fs.readFileSync(workflowStatusFile, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new workflow status file');
    }
    return {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    const logFile = path.join(logsDir, 'workflow-health-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, options = {}) {
    try {
      const output = execSync(command, { 
        stdio: 'pipe', 
        encoding: 'utf8', 
        ...options 
      });
      return { ok: true, output: output.trim() };
    } catch (error) {
      return { 
        ok: false, 
        error: error.message,
        stdout: error.stdout?.toString() || '',
        stderr: error.stderr?.toString() || ''
      };
    }
  }

  async analyzeWorkflows() {
    this.log('🔍 Starting workflow health analysis...');
    
    const workflowFiles = this.getWorkflowFiles();
    this.healthData.totalWorkflows = workflowFiles.length;
    
    let activeCount = 0;
    let disabledCount = 0;
    const failingWorkflows = [];
    const recommendations = [];

    for (const workflowFile of workflowFiles) {
      const analysis = await this.analyzeWorkflow(workflowFile);
      
      if (analysis.isActive) {
        activeCount++;
        this.workflowStatus[workflowFile] = {
          ...analysis,
          lastChecked: new Date().toISOString(),
          status: 'active'
        };
      } else {
        disabledCount++;
        this.workflowStatus[workflowFile] = {
          ...analysis,
          lastChecked: new Date().toISOString(),
          status: 'disabled'
        };
      }

      if (analysis.issues.length > 0) {
        failingWorkflows.push({
          file: workflowFile,
          issues: analysis.issues,
          severity: analysis.severity
        });
      }

      if (analysis.recommendations.length > 0) {
        recommendations.push(...analysis.recommendations);
      }
    }

    this.healthData.activeWorkflows = activeCount;
    this.healthData.disabledWorkflows = disabledCount;
    this.healthData.failingWorkflows = failingWorkflows;
    this.healthData.recommendations = recommendations;
    this.healthData.lastCheck = new Date().toISOString();

    this.log(`📊 Analysis complete: ${activeCount} active, ${disabledCount} disabled, ${failingWorkflows.length} with issues`);
  }

  getWorkflowFiles() {
    try {
      const files = fs.readdirSync(this.workflowsDir);
      return files.filter(file => 
        file.endsWith('.yml') || file.endsWith('.yaml')
      ).map(file => path.join(this.workflowsDir, file));
    } catch (error) {
      this.log(`❌ Error reading workflows directory: ${error.message}`);
      return [];
    }
  }

  async analyzeWorkflow(workflowPath) {
    const filename = path.basename(workflowPath);
    const analysis = {
      file: filename,
      isActive: false,
      issues: [],
      recommendations: [],
      severity: 'low',
      schedule: null,
      triggers: [],
      lastModified: null
    };

    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      const stats = fs.statSync(workflowPath);
      analysis.lastModified = stats.mtime.toISOString();

      // Check if workflow is active
      if (content.includes('on:') && !content.includes('disabled: true')) {
        analysis.isActive = true;
      }

      // Extract triggers
      if (content.includes('workflow_dispatch')) {
        analysis.triggers.push('manual');
      }
      if (content.includes('push:')) {
        analysis.triggers.push('push');
      }
      if (content.includes('pull_request:')) {
        analysis.triggers.push('pull_request');
      }

      // Extract schedule
      const scheduleMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
      if (scheduleMatch) {
        analysis.schedule = scheduleMatch[1];
        analysis.triggers.push('scheduled');
      }

      // Check for common issues
      const issues = this.detectWorkflowIssues(content, filename);
      analysis.issues = issues;
      
      if (issues.some(issue => issue.severity === 'high')) {
        analysis.severity = 'high';
      } else if (issues.some(issue => issue.severity === 'medium')) {
        analysis.severity = 'medium';
      }

      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);

    } catch (error) {
      analysis.issues.push({
        type: 'parse_error',
        message: `Failed to parse workflow file: ${error.message}`,
        severity: 'high'
      });
    }

    return analysis;
  }

  detectWorkflowIssues(content, filename) {
    const issues = [];

    // Check for excessive frequency
    const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
    if (cronMatch) {
      const cron = cronMatch[1];
      if (cron.includes('*/5') || cron.includes('*/10') || cron.includes('*/15')) {
        issues.push({
          type: 'excessive_frequency',
          message: `Workflow runs very frequently (${cron}), may cause resource conflicts`,
          severity: 'medium',
          fix: 'Consider increasing interval to */30 or */60 minutes'
        });
      }
    }

    // Check for missing concurrency control
    if (content.includes('schedule:') && !content.includes('concurrency:')) {
      issues.push({
        type: 'missing_concurrency',
        message: 'Scheduled workflow missing concurrency control',
        severity: 'medium',
        fix: 'Add concurrency group to prevent overlapping runs'
      });
    }

    // Check for missing error handling
    if (content.includes('node automation/') && !content.includes('if: always()')) {
      issues.push({
        type: 'missing_error_handling',
        message: 'Automation script may fail workflow on errors',
        severity: 'low',
        fix: 'Add error handling or continue-on-error: true'
      });
    }

    // Check for missing timeouts
    if (content.includes('runs-on:') && !content.includes('timeout-minutes:')) {
      issues.push({
        type: 'missing_timeout',
        message: 'Workflow missing timeout, may run indefinitely',
        severity: 'low',
        fix: 'Add timeout-minutes: 30 or appropriate value'
      });
    }

    // Check for backup files
    if (filename.includes('.backup')) {
      issues.push({
        type: 'backup_file',
        message: 'Backup workflow file should be removed',
        severity: 'low',
        fix: 'Remove backup file to reduce confusion'
      });
    }

    return issues;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    if (analysis.schedule && analysis.schedule.includes('*/15')) {
      recommendations.push({
        type: 'frequency_optimization',
        message: `Consider reducing frequency from ${analysis.schedule} to */30 or */60 minutes`,
        priority: 'high'
      });
    }

    if (!analysis.triggers.includes('manual')) {
      recommendations.push({
        type: 'add_manual_trigger',
        message: 'Add workflow_dispatch for manual execution during debugging',
        priority: 'medium'
      });
    }

    if (analysis.issues.length > 0) {
      recommendations.push({
        type: 'fix_issues',
        message: `Fix ${analysis.issues.length} detected issues to improve reliability`,
        priority: 'high'
      });
    }

    return recommendations;
  }

  async applyFixes() {
    this.log('🔧 Applying automatic fixes...');
    
    let fixesApplied = 0;
    const fixResults = [];

    for (const failingWorkflow of this.healthData.failingWorkflows) {
      const fixResult = await this.fixWorkflow(failingWorkflow);
      if (fixResult.fixed) {
        fixesApplied++;
        fixResults.push(fixResult);
      }
    }

    this.healthData.fixesApplied = fixResults;
    this.log(`✅ Applied ${fixesApplied} fixes`);

    return fixResults;
  }

  async fixWorkflow(failingWorkflow) {
    const workflowPath = path.join(this.workflowsDir, failingWorkflow.file);
    const result = {
      file: failingWorkflow.file,
      fixed: false,
      changes: [],
      errors: []
    };

    try {
      let content = fs.readFileSync(workflowPath, 'utf8');
      let modified = false;

      // Fix excessive frequency
      if (failingWorkflow.issues.some(issue => issue.type === 'excessive_frequency')) {
        const oldContent = content;
        content = content.replace(/cron:\s*['"`](\*\/[0-9]+)['"`]/g, (match, cron) => {
          const interval = parseInt(cron.split('/')[1]);
          if (interval <= 15) {
            const newInterval = Math.min(interval * 2, 60);
            modified = true;
            result.changes.push(`Reduced frequency from ${cron} to */${newInterval}`);
            return `cron: '*/${newInterval}'`;
          }
          return match;
        });
      }

      // Add concurrency control
      if (failingWorkflow.issues.some(issue => issue.type === 'missing_concurrency')) {
        if (content.includes('on:') && !content.includes('concurrency:')) {
          const concurrencyBlock = `
concurrency:
  group: github.workflow-github.ref
  cancel-in-progress: true

`;
          content = content.replace(/(on:[\s\S]*?)(permissions:|jobs:)/, `$1${concurrencyBlock}$2`);
          modified = true;
          result.changes.push('Added concurrency control');
        }
      }

      // Add timeout
      if (failingWorkflow.issues.some(issue => issue.type === 'missing_timeout')) {
        if (content.includes('runs-on:') && !content.includes('timeout-minutes:')) {
          content = content.replace(/(runs-on:[^\n]*)/, `$1\n    timeout-minutes: 30`);
          modified = true;
          result.changes.push('Added 30-minute timeout');
        }
      }

      // Add error handling
      if (failingWorkflow.issues.some(issue => issue.type === 'missing_error_handling')) {
        if (content.includes('node automation/') && !content.includes('continue-on-error: true')) {
          content = content.replace(/(\s+-\s+name:[^\n]*\n\s+runs-on:[^\n]*)/, `$1\n      continue-on-error: true`);
          modified = true;
          result.changes.push('Added continue-on-error for automation scripts');
        }
      }

      if (modified) {
        // Create backup
        const backupPath = `${workflowPath}.backup-${Date.now()}`;
        fs.writeFileSync(backupPath, fs.readFileSync(workflowPath, 'utf8'));
        
        // Write modified content
        fs.writeFileSync(workflowPath, content);
        result.fixed = true;
      }

    } catch (error) {
      result.errors.push(`Failed to apply fixes: ${error.message}`);
    }

    return result;
  }

  async cleanupBackupFiles() {
    this.log('🧹 Cleaning up backup files...');
    
    const backupFiles = fs.readdirSync(this.workflowsDir)
      .filter(file => file.includes('.backup'))
      .map(file => path.join(this.workflowsDir, file));

    let cleanedCount = 0;
    for (const backupFile of backupFiles) {
      try {
        fs.unlinkSync(backupFile);
        cleanedCount++;
      } catch (error) {
        this.log(`⚠️ Failed to remove backup file ${backupFile}: ${error.message}`);
      }
    }

    this.log(`✅ Cleaned up ${cleanedCount} backup files`);
    return cleanedCount;
  }

  generateHealthReport() {
    const report = {
      summary: {
        totalWorkflows: this.healthData.totalWorkflows,
        activeWorkflows: this.healthData.activeWorkflows,
        disabledWorkflows: this.healthData.disabledWorkflows,
        failingWorkflows: this.healthData.failingWorkflows.length,
        healthScore: this.calculateHealthScore()
      },
      failingWorkflows: this.healthData.failingWorkflows,
      recommendations: this.healthData.recommendations,
      fixesApplied: this.healthData.fixesApplied,
      lastCheck: this.healthData.lastCheck
    };

    return report;
  }

  calculateHealthScore() {
    const total = this.healthData.totalWorkflows;
    const failing = this.healthData.failingWorkflows.length;
    const disabled = this.healthData.disabledWorkflows;
    
    if (total === 0) return 100;
    
    const activeScore = ((total - disabled) / total) * 100;
    const failurePenalty = (failing / total) * 50;
    
    return Math.max(0, Math.round(activeScore - failurePenalty));
  }

  async saveData() {
    try {
      fs.writeFileSync(healthReportFile, JSON.stringify(this.healthData, null, 2));
      fs.writeFileSync(workflowStatusFile, JSON.stringify(this.workflowStatus, null, 2));
      this.log('💾 Health data saved');
    } catch (error) {
      this.log(`❌ Failed to save health data: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting Workflow Health Monitor...');
    
    try {
      await this.analyzeWorkflows();
      await this.applyFixes();
      await this.cleanupBackupFiles();
      
      const report = this.generateHealthReport();
      await this.saveData();
      
      this.log('📋 Health Report:');
      this.log(`   Total Workflows: ${report.summary.totalWorkflows}`);
      this.log(`   Active: ${report.summary.activeWorkflows}`);
      this.log(`   Disabled: ${report.summary.disabledWorkflows}`);
      this.log(`   Failing: ${report.summary.failingWorkflows}`);
      this.log(`   Health Score: ${report.summary.healthScore}/100`);
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`   - ${rec.message} (Priority: ${rec.priority})`);
        });
      }
      
      if (report.fixesApplied.length > 0) {
        this.log('\n🔧 Fixes Applied:');
        report.fixesApplied.forEach(fix => {
          this.log(`   - ${fix.file}: ${fix.changes.join(', ')}`);
        });
      }
      
      this.log('\n✅ Workflow Health Monitor completed successfully');
      
    } catch (error) {
      this.log(`❌ Workflow Health Monitor failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new WorkflowHealthMonitor();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'run';
  
  switch (command) {
    case 'run':
      monitor.run().catch(console.error);
      break;
    case 'analyze':
      monitor.analyzeWorkflows().then(() => {
        const report = monitor.generateHealthReport();
        console.log(JSON.stringify(report, null, 2));
      }).catch(console.error);
      break;
    case 'fix':
      monitor.applyFixes().then(fixes => {
        console.log(`Applied ${fixes.length} fixes`);
      }).catch(console.error);
      break;
    case 'cleanup':
      monitor.cleanupBackupFiles().then(count => {
        console.log(`Cleaned up ${count} backup files`);
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node workflow-health-monitor.cjs [run|analyze|fix|cleanup]');
      process.exit(1);
  }
}

module.exports = WorkflowHealthMonitor;