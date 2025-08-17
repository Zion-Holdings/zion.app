#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import all health monitoring components
const WorkflowHealthMonitor = require('./workflow-health-monitor.cjs');
const WorkflowPrioritizer = require('./workflow-prioritizer.cjs');
const WorkflowWatchdog = require('./workflow-watchdog.cjs');
const WorkflowHealthDashboard = require('./workflow-health-dashboard.cjs');

class WorkflowHealthOrchestrator {
  constructor() {
    this.logsDir = path.join(__dirname, 'logs');
    this.orchestratorLogFile = path.join(this.logsDir, 'orchestrator.log');
    
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.orchestratorLogFile, logMessage + '\n');
  }

  async runHealthMonitor() {
    this.log('🔍 Running Workflow Health Monitor...');
    
    try {
      const monitor = new WorkflowHealthMonitor();
      await monitor.run();
      this.log('✅ Health Monitor completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Health Monitor failed: ${error.message}`);
      return false;
    }
  }

  async runPrioritizer() {
    this.log('🎯 Running Workflow Prioritizer...');
    
    try {
      const prioritizer = new WorkflowPrioritizer();
      await prioritizer.prioritizeWorkflows();
      this.log('✅ Prioritizer completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Prioritizer failed: ${error.message}`);
      return false;
    }
  }

  async runWatchdog() {
    this.log('👀 Running Workflow Watchdog...');
    
    try {
      const watchdog = new WorkflowWatchdog();
      await watchdog.run();
      this.log('✅ Watchdog completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Watchdog failed: ${error.message}`);
      return false;
    }
  }

  async generateDashboard() {
    this.log('📊 Generating Health Dashboard...');
    
    try {
      const dashboard = new WorkflowHealthDashboard();
      await dashboard.run();
      this.log('✅ Dashboard generated successfully');
      return true;
    } catch (error) {
      this.log(`❌ Dashboard generation failed: ${error.message}`);
      return false;
    }
  }

  async cleanupOldLogs() {
    this.log('🧹 Cleaning up old log files...');
    
    try {
      const files = fs.readdirSync(this.logsDir);
      const now = Date.now();
      const oneWeekAgo = 7 * 24 * 60 * 60 * 1000;
      let cleanedCount = 0;
      
      for (const file of files) {
        const filePath = path.join(this.logsDir, file);
        const stats = fs.statSync(filePath);
        
        if (now - stats.mtime.getTime() > oneWeekAgo) {
          fs.unlinkSync(filePath);
          cleanedCount++;
        }
      }
      
      this.log(`✅ Cleaned up ${cleanedCount} old log files`);
      return cleanedCount;
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`);
      return 0;
    }
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    const healthChecks = {
      logsDirectory: fs.existsSync(this.logsDir),
      healthReport: fs.existsSync(path.join(this.logsDir, 'workflow-health-report.json')),
      workflowStatus: fs.existsSync(path.join(this.logsDir, 'workflow-status.json')),
      failureHistory: fs.existsSync(path.join(this.logsDir, 'workflow-failure-history.json')),
      dashboard: fs.existsSync(path.join(this.logsDir, 'workflow-health-dashboard.html'))
    };
    
    const allHealthy = Object.values(healthChecks).every(check => check);
    
    this.log('📋 System Health Check Results:');
    Object.entries(healthChecks).forEach(([check, status]) => {
      const emoji = status ? '✅' : '❌';
      this.log(`   ${emoji} ${check}: ${status ? 'OK' : 'Missing'}`);
    });
    
    return allHealthy;
  }

  async runFullHealthAssessment() {
    this.log('🚀 Starting Full Workflow Health Assessment...');
    this.log('='.repeat(60));
    
    const startTime = Date.now();
    const results = {
      healthMonitor: false,
      prioritizer: false,
      watchdog: false,
      dashboard: false,
      cleanup: false,
      systemHealth: false
    };
    
    try {
      // Step 1: Health Monitoring
      results.healthMonitor = await this.runHealthMonitor();
      
      // Step 2: Workflow Prioritization
      results.prioritizer = await this.runPrioritizer();
      
      // Step 3: Watchdog Check
      results.watchdog = await this.runWatchdog();
      
      // Step 4: Generate Dashboard
      results.dashboard = await this.generateDashboard();
      
      // Step 5: Cleanup
      results.cleanup = await this.cleanupOldLogs();
      
      // Step 6: System Health Check
      results.systemHealth = await this.checkSystemHealth();
      
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      
      this.log('\n📊 Assessment Results:');
      this.log('='.repeat(40));
      Object.entries(results).forEach(([step, success]) => {
        const emoji = success ? '✅' : '❌';
        this.log(`${emoji} ${step}: ${success ? 'Success' : 'Failed'}`);
      });
      
      this.log(`\n⏱️ Total Duration: ${duration}s`);
      
      const successCount = Object.values(results).filter(Boolean).length;
      const totalSteps = Object.keys(results).length;
      const successRate = ((successCount / totalSteps) * 100).toFixed(1);
      
      this.log(`📈 Success Rate: ${successRate}% (${successCount}/${totalSteps})`);
      
      if (successRate >= 80) {
        this.log('🎉 Health assessment completed successfully!');
      } else if (successRate >= 60) {
        this.log('⚠️ Health assessment completed with some issues');
      } else {
        this.log('🚨 Health assessment encountered significant issues');
      }
      
      return results;
      
    } catch (error) {
      this.log(`❌ Full health assessment failed: ${error.message}`);
      throw error;
    }
  }

  async runContinuousMonitoring(intervalMinutes = 30) {
    this.log(`👀 Starting continuous monitoring (every ${intervalMinutes} minutes)...`);
    
    // Initial run
    await this.runFullHealthAssessment();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log(`\n🔄 Running scheduled health assessment...`);
      try {
        await this.runFullHealthAssessment();
      } catch (error) {
        this.log(`❌ Scheduled assessment failed: ${error.message}`);
      }
    }, intervalMinutes * 60 * 1000);
    
    // Keep the process running
    process.on('SIGINT', () => {
      this.log('🛑 Continuous monitoring stopped by user');
      process.exit(0);
    });
    
    this.log('✅ Continuous monitoring active. Press Ctrl+C to stop.');
  }

  async generateOrchestratorReport() {
    this.log('📋 Generating Orchestrator Report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        orchestratorVersion: '1.0.0',
        systemHealth: await this.checkSystemHealth(),
        lastAssessment: {
          timestamp: new Date().toISOString(),
          duration: 'N/A'
        },
        components: {
          healthMonitor: 'WorkflowHealthMonitor',
          prioritizer: 'WorkflowPrioritizer',
          watchdog: 'WorkflowWatchdog',
          dashboard: 'WorkflowHealthDashboard'
        },
        logs: {
          orchestrator: this.orchestratorLogFile,
          healthMonitor: path.join(this.logsDir, 'workflow-health-monitor.log'),
          watchdog: path.join(this.logsDir, 'workflow-watchdog.log')
        },
        recommendations: [
          'Run full assessment to identify workflow issues',
          'Check dashboard for visual health overview',
          'Review watchdog logs for failure patterns',
          'Use prioritizer to optimize workflow scheduling'
        ]
      };
      
      const reportPath = path.join(this.logsDir, 'orchestrator-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`✅ Orchestrator report saved to: ${reportPath}`);
      return report;
      
    } catch (error) {
      this.log(`❌ Failed to generate orchestrator report: ${error.message}`);
      return null;
    }
  }

  async run() {
    const args = process.argv.slice(2);
    const command = args[0] || 'assess';
    
    try {
      switch (command) {
        case 'assess':
          await this.runFullHealthAssessment();
          break;
          
        case 'monitor':
          const interval = parseInt(args[1]) || 30;
          await this.runContinuousMonitoring(interval);
          break;
          
        case 'health':
          await this.runHealthMonitor();
          break;
          
        case 'prioritize':
          await this.runPrioritizer();
          break;
          
        case 'watchdog':
          await this.runWatchdog();
          break;
          
        case 'dashboard':
          await this.generateDashboard();
          break;
          
        case 'cleanup':
          await this.cleanupOldLogs();
          break;
          
        case 'report':
          await this.generateOrchestratorReport();
          break;
          
        case 'status':
          await this.checkSystemHealth();
          break;
          
        default:
          this.log('Usage: node orchestrate-workflow-health.cjs [assess|monitor|health|prioritize|watchdog|dashboard|cleanup|report|status]');
          this.log('\nCommands:');
          this.log('  assess     - Run full health assessment');
          this.log('  monitor    - Start continuous monitoring');
          this.log('  health     - Run health monitor only');
          this.log('  prioritize - Run prioritizer only');
          this.log('  watchdog   - Run watchdog only');
          this.log('  dashboard  - Generate dashboard only');
          this.log('  cleanup    - Clean up old logs');
          this.log('  report     - Generate orchestrator report');
          this.log('  status     - Check system health');
          process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Orchestrator failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new WorkflowHealthOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = WorkflowHealthOrchestrator;
