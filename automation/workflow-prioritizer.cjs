#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class WorkflowPrioritizer {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.priorityConfig = this.loadPriorityConfig();
    this.healthData = this.loadHealthData();
  }

  loadPriorityConfig() {
    const configPath = path.join(__dirname, 'workflow-priority-config.json');
    try {
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new priority config file');
    }

    // Default priority configuration
    return {
      critical: [
        'ci.yml',
        'deploy.yml',
        'security-scan.yml'
      ],
      high: [
        'rapid-git-sync.yml',
        'autonomous-cloud-runner.yml',
        'workflow-health-monitor.yml'
      ],
      medium: [
        'autonomous-lighthouse.yml',
        'seo-audit.yml',
        'dependency-maintenance.yml'
      ],
      low: [
        'ui-evolution-weekly-beautify.yml',
        'performance-weekly.yml',
        'marketing-daily.yml'
      ],
      disabled: [
        // Workflows that should be temporarily disabled
      ],
      frequencyLimits: {
        critical: '*/30',    // Every 30 minutes max
        high: '*/60',        // Every hour max
        medium: '0 */4 * * *', // Every 4 hours max
        low: '0 0 * * *'     // Daily max
      },
      concurrencyLimits: {
        critical: 2,
        high: 3,
        medium: 5,
        low: 10
      }
    };
  }

  loadHealthData() {
    const healthPath = path.join(__dirname, 'logs', 'workflow-health-report.json');
    try {
      if (fs.existsSync(healthPath)) {
        return JSON.parse(fs.readFileSync(healthPath, 'utf8'));
      }
    } catch (error) {
      console.log('No health data available');
    }
    return { failingWorkflows: [] };
  }

  savePriorityConfig() {
    const configPath = path.join(__dirname, 'workflow-priority-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.priorityConfig, null, 2));
  }

  getWorkflowPriority(workflowName) {
    for (const [priority, workflows] of Object.entries(this.priorityConfig)) {
      if (priority !== 'frequencyLimits' && priority !== 'concurrencyLimits' && priority !== 'disabled') {
        if (workflows.includes(workflowName)) {
          return priority;
        }
      }
    }
    return 'low'; // Default priority
  }

  isWorkflowDisabled(workflowName) {
    return this.priorityConfig.disabled.includes(workflowName);
  }

  getFrequencyLimit(priority) {
    return this.priorityConfig.frequencyLimits[priority] || '0 0 * * *';
  }

  getConcurrencyLimit(priority) {
    return this.priorityConfig.concurrencyLimits[priority] || 10;
  }

  async analyzeWorkflowHealth(workflowPath) {
    const filename = path.basename(workflowPath);
    const priority = this.getWorkflowPriority(filename);
    const isDisabled = this.isWorkflowDisabled(filename);
    
    const analysis = {
      filename,
      priority,
      isDisabled,
      health: 'unknown',
      issues: [],
      recommendations: []
    };

    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Check if workflow is healthy
      const failingWorkflows = this.healthData.failingWorkflows || [];
      const failingWorkflow = failingWorkflows.find(w => w.file === filename);
      
      if (failingWorkflow) {
        analysis.health = 'failing';
        analysis.issues = failingWorkflow.issues;
      } else {
        analysis.health = 'healthy';
      }

      // Check frequency compliance
      const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
      if (cronMatch) {
        const currentCron = cronMatch[1];
        const recommendedCron = this.getFrequencyLimit(priority);
        
        if (this.isMoreFrequent(currentCron, recommendedCron)) {
          analysis.recommendations.push({
            type: 'frequency_optimization',
            message: `Reduce frequency from ${currentCron} to ${recommendedCron}`,
            priority: 'high'
          });
        }
      }

      // Check concurrency compliance
      if (!content.includes('concurrency:')) {
        analysis.recommendations.push({
          type: 'add_concurrency',
          message: `Add concurrency control (limit: ${this.getConcurrencyLimit(priority)})`,
          priority: 'medium'
        });
      }

      // Check for missing timeouts
      if (!content.includes('timeout-minutes:')) {
        analysis.recommendations.push({
          type: 'add_timeout',
          message: 'Add timeout to prevent indefinite runs',
          priority: 'low'
        });
      }

    } catch (error) {
      analysis.health = 'error';
      analysis.issues.push({
        type: 'parse_error',
        message: error.message
      });
    }

    return analysis;
  }

  isMoreFrequent(currentCron, recommendedCron) {
    // Simple frequency comparison - can be enhanced
    const currentInterval = this.extractInterval(currentCron);
    const recommendedInterval = this.extractInterval(recommendedCron);
    
    return currentInterval < recommendedInterval;
  }

  extractInterval(cron) {
    if (cron.includes('*/')) {
      return parseInt(cron.split('*/')[1]);
    }
    if (cron.includes('* * * *')) {
      return 1; // Every minute
    }
    if (cron.includes('0 */')) {
      const match = cron.match(/0 \*\/(\d+)/);
      return match ? parseInt(match[1]) : 60;
    }
    return 60; // Default to hourly
  }

  async optimizeWorkflow(workflowPath) {
    const analysis = await this.analyzeWorkflowHealth(workflowPath);
    const filename = path.basename(workflowPath);
    
    if (analysis.health === 'healthy' && analysis.recommendations.length === 0) {
      return { filename, optimized: false, reason: 'Already optimal' };
    }

    try {
      let content = fs.readFileSync(workflowPath, 'utf8');
      let modified = false;
      const changes = [];

      // Apply frequency optimization
      if (analysis.recommendations.some(r => r.type === 'frequency_optimization')) {
        const recommendation = analysis.recommendations.find(r => r.type === 'frequency_optimization');
        const newCron = this.getFrequencyLimit(analysis.priority);
        
        content = content.replace(/cron:\s*['"`]([^'"`]+)['"`]/g, `cron: '${newCron}'`);
        modified = true;
        changes.push(`Optimized frequency to ${newCron}`);
      }

      // Add concurrency control
      if (analysis.recommendations.some(r => r.type === 'add_concurrency')) {
                  const concurrencyBlock = `
concurrency:
  group: github.workflow-github.ref
  cancel-in-progress: true

`;
        content = content.replace(/(on:[\s\S]*?)(permissions:|jobs:)/, `$1${concurrencyBlock}$2`);
        modified = true;
        changes.push('Added concurrency control');
      }

      // Add timeout
      if (analysis.recommendations.some(r => r.type === 'add_timeout')) {
        const timeoutValue = analysis.priority === 'critical' ? 15 : 
                           analysis.priority === 'high' ? 30 : 60;
        
        content = content.replace(/(runs-on:[^\n]*)/, `$1\n    timeout-minutes: ${timeoutValue}`);
        modified = true;
        changes.push(`Added ${timeoutValue}-minute timeout`);
      }

      if (modified) {
        // Create backup
        const backupPath = `${workflowPath}.backup-${Date.now()}`;
        fs.writeFileSync(backupPath, fs.readFileSync(workflowPath, 'utf8'));
        
        // Write optimized content
        fs.writeFileSync(workflowPath, content);
        
        return { filename, optimized: true, changes };
      }

      return { filename, optimized: false, reason: 'No changes needed' };

    } catch (error) {
      return { filename, optimized: false, reason: `Error: ${error.message}` };
    }
  }

  async prioritizeWorkflows() {
    console.log('🎯 Starting workflow prioritization...');
    
    const workflowFiles = this.getWorkflowFiles();
    const prioritizationResults = [];
    
    for (const workflowFile of workflowFiles) {
      const analysis = await this.analyzeWorkflowHealth(workflowFile);
      const optimization = await this.optimizeWorkflow(workflowFile);
      
      prioritizationResults.push({
        ...analysis,
        optimization
      });
    }

    // Generate prioritization report
    const report = this.generatePrioritizationReport(prioritizationResults);
    
    // Save report
    const reportPath = path.join(__dirname, 'logs', 'workflow-prioritization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Prioritization Report:');
    console.log(`   Total Workflows: ${report.summary.total}`);
    console.log(`   Critical: ${report.summary.critical}`);
    console.log(`   High: ${report.summary.high}`);
    console.log(`   Medium: ${report.summary.medium}`);
    console.log(`   Low: ${report.summary.low}`);
    console.log(`   Optimized: ${report.summary.optimized}`);
    
    return report;
  }

  getWorkflowFiles() {
    try {
      const files = fs.readdirSync(this.workflowsDir);
      return files.filter(file => 
        file.endsWith('.yml') || file.endsWith('.yaml')
      ).map(file => path.join(this.workflowsDir, file));
    } catch (error) {
      console.log(`❌ Error reading workflows directory: ${error.message}`);
      return [];
    }
  }

  generatePrioritizationReport(results) {
    const summary = {
      total: results.length,
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      optimized: 0,
      healthy: 0,
      failing: 0
    };

    const byPriority = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };

    results.forEach(result => {
      summary[result.priority]++;
      if (result.optimization.optimized) summary.optimized++;
      if (result.health === 'healthy') summary.healthy++;
      if (result.health === 'failing') summary.failing++;
      
      byPriority[result.priority].push(result);
    });

    return {
      summary,
      byPriority,
      recommendations: this.generateRecommendations(results),
      timestamp: new Date().toISOString()
    };
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    // Check for critical workflows with issues
    const criticalWithIssues = results.filter(r => r.priority === 'critical' && r.health === 'failing');
    if (criticalWithIssues.length > 0) {
      recommendations.push({
        type: 'critical_issues',
        message: `${criticalWithIssues.length} critical workflows have issues - immediate attention required`,
        priority: 'critical'
      });
    }

    // Check for excessive high-priority workflows
    const highPriorityCount = results.filter(r => r.priority === 'high').length;
    if (highPriorityCount > 10) {
      recommendations.push({
        type: 'too_many_high_priority',
        message: `Too many high-priority workflows (${highPriorityCount}). Consider demoting some to medium priority.`,
        priority: 'high'
      });
    }

    // Check for workflows without concurrency control
    const withoutConcurrency = results.filter(r => 
      r.recommendations.some(rec => rec.type === 'add_concurrency')
    );
    if (withoutConcurrency.length > 0) {
      recommendations.push({
        type: 'missing_concurrency',
        message: `${withoutConcurrency.length} workflows missing concurrency control`,
        priority: 'medium'
      });
    }

    return recommendations;
  }

  async disableWorkflow(workflowName, reason = 'Temporarily disabled') {
    if (!this.priorityConfig.disabled.includes(workflowName)) {
      this.priorityConfig.disabled.push(workflowName);
      this.savePriorityConfig();
      
      // Add disable comment to workflow file
      const workflowPath = path.join(this.workflowsDir, workflowName);
      if (fs.existsSync(workflowPath)) {
        let content = fs.readFileSync(workflowPath, 'utf8');
        if (!content.includes('disabled: true')) {
          content = content.replace(/^(name:.*)/m, `$1\n# ${reason}\ndisabled: true`);
          fs.writeFileSync(workflowPath, content);
        }
      }
      
      console.log(`✅ Disabled workflow: ${workflowName}`);
      return true;
    }
    return false;
  }

  async enableWorkflow(workflowName) {
    const index = this.priorityConfig.disabled.indexOf(workflowName);
    if (index > -1) {
      this.priorityConfig.disabled.splice(index, 1);
      this.savePriorityConfig();
      
      // Remove disable comment from workflow file
      const workflowPath = path.join(this.workflowsDir, workflowName);
      if (fs.existsSync(workflowPath)) {
        let content = fs.readFileSync(workflowPath, 'utf8');
        content = content.replace(/^#.*\n?/gm, '').replace(/^disabled: true\n?/gm, '');
        fs.writeFileSync(workflowPath, content);
      }
      
      console.log(`✅ Enabled workflow: ${workflowName}`);
      return true;
    }
    return false;
  }
}

// CLI interface
if (require.main === module) {
  const prioritizer = new WorkflowPrioritizer();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'prioritize';
  
  switch (command) {
    case 'prioritize':
      prioritizer.prioritizeWorkflows().then(report => {
        console.log('\n✅ Workflow prioritization completed');
      }).catch(console.error);
      break;
    case 'disable':
      if (args[1]) {
        prioritizer.disableWorkflow(args[1], args[2] || 'Temporarily disabled').then(disabled => {
          if (disabled) {
            console.log(`Workflow ${args[1]} has been disabled`);
          } else {
            console.log(`Workflow ${args[1]} was already disabled`);
          }
        });
      } else {
        console.log('Usage: node workflow-prioritizer.cjs disable <workflow-name> [reason]');
      }
      break;
    case 'enable':
      if (args[1]) {
        prioritizer.enableWorkflow(args[1]).then(enabled => {
          if (enabled) {
            console.log(`Workflow ${args[1]} has been enabled`);
          } else {
            console.log(`Workflow ${args[1]} was already enabled`);
          }
        });
      } else {
        console.log('Usage: node workflow-prioritizer.cjs enable <workflow-name>');
      }
      break;
    case 'status':
      prioritizer.prioritizeWorkflows().then(report => {
        console.log(JSON.stringify(report, null, 2));
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node workflow-prioritizer.cjs [prioritize|disable|enable|status]');
      process.exit(1);
  }
}

module.exports = WorkflowPrioritizer;
