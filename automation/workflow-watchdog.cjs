#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const watchdogLogFile = path.join(logsDir, 'workflow-watchdog.log');
const failureHistoryFile = path.join(logsDir, 'workflow-failure-history.json');

if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

class WorkflowWatchdog {
  constructor() {
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.failureHistory = this.loadFailureHistory();
    this.watchdogConfig = this.loadWatchdogConfig();
  }

  loadFailureHistory() {
    try {
      if (fs.existsSync(failureHistoryFile)) {
        return JSON.parse(fs.readFileSync(failureHistoryFile, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new failure history file');
    }
    return {};
  }

  loadWatchdogConfig() {
    const configPath = path.join(__dirname, 'workflow-watchdog-config.json');
    try {
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.log('Creating new watchdog config file');
    }

    return {
      maxRetries: 3,
      retryDelayMinutes: 15,
      autoRestart: true,
      criticalWorkflows: [
        'ci.yml',
        'deploy.yml',
        'workflow-health-monitor.yml'
      ],
      ignoredWorkflows: [
        'workflow-health-monitor.yml' // Don't restart the watchdog itself
      ],
      failureThresholds: {
        critical: 2,    // Restart after 2 failures
        high: 3,        // Restart after 3 failures
        medium: 5,      // Restart after 5 failures
        low: 10         // Restart after 10 failures
      },
      healthCheckInterval: 30, // Check every 30 minutes
      maxConcurrentRestarts: 2
    };
  }

  saveFailureHistory() {
    try {
      fs.writeFileSync(failureHistoryFile, JSON.stringify(this.failureHistory, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save failure history: ${error.message}`);
    }
  }

  saveWatchdogConfig() {
    const configPath = path.join(__dirname, 'workflow-watchdog-config.json');
    try {
      fs.writeFileSync(configPath, JSON.stringify(this.watchdogConfig, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save watchdog config: ${error.message}`);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(watchdogLogFile, logMessage + '\n');
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

  getWorkflowPriority(workflowName) {
    if (this.watchdogConfig.criticalWorkflows.includes(workflowName)) {
      return 'critical';
    }
    // You can implement more sophisticated priority logic here
    return 'medium';
  }

  getFailureThreshold(priority) {
    return this.watchdogConfig.failureThresholds[priority] || 5;
  }

  recordFailure(workflowName, error = 'Unknown error') {
    if (!this.failureHistory[workflowName]) {
      this.failureHistory[workflowName] = {
        failures: [],
        lastFailure: null,
        totalFailures: 0,
        priority: this.getWorkflowPriority(workflowName)
      };
    }

    const workflow = this.failureHistory[workflowName];
    const failure = {
      timestamp: new Date().toISOString(),
      error: error,
      retryCount: 0
    };

    workflow.failures.push(failure);
    workflow.lastFailure = failure.timestamp;
    workflow.totalFailures++;

    // Keep only recent failures (last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    workflow.failures = workflow.failures.filter(f => 
      new Date(f.timestamp) > oneDayAgo
    );

    this.saveFailureHistory();
    this.log(`📝 Recorded failure for ${workflowName}: ${error}`);
  }

  shouldRestartWorkflow(workflowName) {
    if (this.watchdogConfig.ignoredWorkflows.includes(workflowName)) {
      return false;
    }

    const workflow = this.failureHistory[workflowName];
    if (!workflow) {
      return false;
    }

    const threshold = this.getFailureThreshold(workflow.priority);
    const recentFailures = workflow.failures.filter(f => {
      const failureTime = new Date(f.timestamp);
      const retryDelay = this.watchdogConfig.retryDelayMinutes * 60 * 1000;
      return Date.now() - failureTime.getTime() > retryDelay;
    });

    return recentFailures.length >= threshold;
  }

  async restartWorkflow(workflowName) {
    this.log(`🔄 Attempting to restart workflow: ${workflowName}`);
    
    try {
      // Check if workflow is currently running
      const isRunning = await this.isWorkflowRunning(workflowName);
      if (isRunning) {
        this.log(`⚠️ Workflow ${workflowName} is already running, skipping restart`);
        return false;
      }

      // Trigger workflow manually
      const result = await this.triggerWorkflow(workflowName);
      if (result.ok) {
        this.log(`✅ Successfully triggered restart of ${workflowName}`);
        
        // Clear failure history for this workflow
        if (this.failureHistory[workflowName]) {
          this.failureHistory[workflowName].failures = [];
          this.failureHistory[workflowName].totalFailures = 0;
          this.saveFailureHistory();
        }
        
        return true;
      } else {
        this.log(`❌ Failed to restart ${workflowName}: ${result.error}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting ${workflowName}: ${error.message}`);
      return false;
    }
  }

  async isWorkflowRunning(workflowName) {
    // This is a simplified check - in a real implementation, you'd use GitHub API
    // to check actual workflow run status
    try {
      const result = this.runCommand(`gh run list --workflow=${workflowName} --limit=1 --json status`);
      if (result.ok) {
        const runs = JSON.parse(result.output);
        return runs.length > 0 && runs[0].status === 'in_progress';
      }
    } catch (error) {
      // If GitHub CLI is not available, assume workflow is not running
      return false;
    }
    return false;
  }

  async triggerWorkflow(workflowName) {
    try {
      // Try to trigger via GitHub CLI first
      const result = this.runCommand(`gh workflow run ${workflowName}`);
      if (result.ok) {
        return { ok: true, method: 'github-cli' };
      }
    } catch (error) {
      // Fallback to manual trigger via git push
      this.log(`GitHub CLI failed, trying manual trigger for ${workflowName}`);
    }

    // Manual trigger by creating a trigger file
    try {
      const triggerDir = path.join(process.cwd(), '.github', 'triggers');
      if (!fs.existsSync(triggerDir)) {
        fs.mkdirSync(triggerDir, { recursive: true });
      }

      const triggerFile = path.join(triggerDir, `${workflowName}.trigger`);
      fs.writeFileSync(triggerFile, new Date().toISOString());
      
      // Commit and push the trigger
      this.runCommand('git add .github/triggers/');
      this.runCommand('git commit -m "chore: trigger workflow restart"');
      this.runCommand('git push origin HEAD:main');
      
      // Clean up trigger file
      setTimeout(() => {
        try {
          fs.unlinkSync(triggerFile);
        } catch (error) {
          // Ignore cleanup errors
        }
      }, 5000);

      return { ok: true, method: 'manual-trigger' };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  }

  async checkWorkflowHealth() {
    this.log('🏥 Starting workflow health check...');
    
    const healthData = this.loadHealthData();
    if (!healthData.failingWorkflows) {
      this.log('⚠️ No health data available, skipping health check');
      return;
    }

    let restartsAttempted = 0;
    const maxRestarts = this.watchdogConfig.maxConcurrentRestarts;

    for (const failingWorkflow of healthData.failingWorkflows) {
      if (restartsAttempted >= maxRestarts) {
        this.log(`⚠️ Reached maximum concurrent restarts (${maxRestarts}), stopping`);
        break;
      }

      const workflowName = failingWorkflow.file;
      
      if (this.shouldRestartWorkflow(workflowName)) {
        this.log(`🚨 Workflow ${workflowName} meets restart criteria`);
        
        if (this.watchdogConfig.autoRestart) {
          const restarted = await this.restartWorkflow(workflowName);
          if (restarted) {
            restartsAttempted++;
          }
        } else {
          this.log(`⚠️ Auto-restart disabled, manual intervention required for ${workflowName}`);
        }
      } else {
        this.log(`ℹ️ Workflow ${workflowName} doesn't meet restart criteria yet`);
      }
    }

    this.log(`✅ Health check completed. Restarts attempted: ${restartsAttempted}`);
  }

  loadHealthData() {
    const healthPath = path.join(__dirname, 'logs', 'workflow-health-report.json');
    try {
      if (fs.existsSync(healthPath)) {
        return JSON.parse(fs.readFileSync(healthPath, 'utf8'));
      }
    } catch (error) {
      this.log(`❌ Failed to load health data: ${error.message}`);
    }
    return { failingWorkflows: [] };
  }

  async monitorWorkflows() {
    this.log('👀 Starting workflow monitoring...');
    
    // Check health every configured interval
    setInterval(async () => {
      await this.checkWorkflowHealth();
    }, this.watchdogConfig.healthCheckInterval * 60 * 1000);

    // Initial health check
    await this.checkWorkflowHealth();
    
    this.log(`✅ Workflow monitoring active. Health checks every ${this.watchdogConfig.healthCheckInterval} minutes`);
  }

  generateWatchdogReport() {
    const report = {
      timestamp: new Date().toISOString(),
      config: this.watchdogConfig,
      failureHistory: this.failureHistory,
      summary: {
        totalWorkflows: Object.keys(this.failureHistory).length,
        workflowsWithFailures: Object.values(this.failureHistory).filter(w => w.totalFailures > 0).length,
        criticalWorkflows: this.watchdogConfig.criticalWorkflows.length,
        ignoredWorkflows: this.watchdogConfig.ignoredWorkflows.length
      },
      recommendations: this.generateRecommendations()
    };

    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for workflows with excessive failures
    Object.entries(this.failureHistory).forEach(([workflowName, workflow]) => {
      if (workflow.totalFailures > 10) {
        recommendations.push({
          type: 'excessive_failures',
          workflow: workflowName,
          message: `Workflow has ${workflow.totalFailures} total failures - consider investigation`,
          priority: 'high'
        });
      }
    });

    // Check for critical workflows with failures
    this.watchdogConfig.criticalWorkflows.forEach(workflowName => {
      const workflow = this.failureHistory[workflowName];
      if (workflow && workflow.totalFailures > 0) {
        recommendations.push({
          type: 'critical_workflow_failing',
          workflow: workflowName,
          message: `Critical workflow has ${workflow.totalFailures} failures`,
          priority: 'critical'
        });
      }
    });

    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Workflow Watchdog...');
    
    try {
      if (process.argv.includes('--monitor')) {
        await this.monitorWorkflows();
        // Keep the process running
        process.on('SIGINT', () => {
          this.log('🛑 Watchdog stopped by user');
          process.exit(0);
        });
      } else {
        await this.checkWorkflowHealth();
        const report = this.generateWatchdogReport();
        this.log('📊 Watchdog Report:');
        this.log(`   Total Workflows Monitored: ${report.summary.totalWorkflows}`);
        this.log(`   Workflows with Failures: ${report.summary.workflowsWithFailures}`);
        this.log(`   Critical Workflows: ${report.summary.criticalWorkflows}`);
        
        if (report.recommendations.length > 0) {
          this.log('\n💡 Recommendations:');
          report.recommendations.forEach(rec => {
            this.log(`   - ${rec.workflow}: ${rec.message} (Priority: ${rec.priority})`);
          });
        }
        
        this.log('\n✅ Workflow Watchdog completed');
      }
    } catch (error) {
      this.log(`❌ Workflow Watchdog failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const watchdog = new WorkflowWatchdog();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'check';
  
  switch (command) {
    case 'check':
      watchdog.run().catch(console.error);
      break;
    case 'monitor':
      process.argv.push('--monitor');
      watchdog.run().catch(console.error);
      break;
    case 'report':
      const report = watchdog.generateWatchdogReport();
      console.log(JSON.stringify(report, null, 2));
      break;
    case 'config':
      console.log(JSON.stringify(watchdog.watchdogConfig, null, 2));
      break;
    default:
      console.log('Usage: node workflow-watchdog.cjs [check|monitor|report|config]');
      process.exit(1);
  }
}

module.exports = WorkflowWatchdog;
