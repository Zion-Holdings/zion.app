#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class AutomationMonitor {
  constructor() {
    this.reportsDir = path.join(__dirname, 'reports');
    this.logsDir = path.join(__dirname, 'logs');
    this.generatedContentDir = path.join(__dirname, 'generated-content');
  }

  async getAutomationStatus() {
    console.log('📊 Zion Tech Group Website Automation Status');
    console.log('=' .repeat(50));
    
    try {
      // Check if automation is running
      const isRunning = await this.checkIfAutomationIsRunning();
      console.log(`🔄 Automation Status: ${isRunning ? 'Running' : 'Stopped'}`);
      
      // Get latest reports
      const reports = await this.getLatestReports();
      console.log(`📊 Reports Generated: ${reports.length}`);
      
      // Get latest logs
      const logs = await this.getLatestLogs();
      console.log(`📝 Log Files: ${logs.length}`);
      
      // Get generated content
      const content = await this.getGeneratedContent();
      console.log(`🎨 Generated Content: ${content.length} items`);
      
      // Display latest activity
      await this.displayLatestActivity();
      
    } catch (error) {
      console.error('❌ Error monitoring automation:', error.message);
    }
  }

  async checkIfAutomationIsRunning() {
    try {
      const { exec } = require('child_process');
      const { promisify } = require('util');
      const execAsync = promisify(exec);
      
      const result = await execAsync('ps aux | grep "run-automation.js" | grep -v grep');
      return result.stdout.trim().length > 0;
    } catch {
      return false;
    }
  }

  async getLatestReports() {
    try {
      const files = await fs.readdir(this.reportsDir);
      return files.filter(file => file.endsWith('.json'));
    } catch {
      return [];
    }
  }

  async getLatestLogs() {
    try {
      const files = await fs.readdir(this.logsDir);
      return files.filter(file => file.endsWith('.log'));
    } catch {
      return [];
    }
  }

  async getGeneratedContent() {
    try {
      const files = await fs.readdir(this.generatedContentDir);
      return files.filter(file => file.endsWith('.json'));
    } catch {
      return [];
    }
  }

  async displayLatestActivity() {
    console.log('\n📈 Latest Activity:');
    
    try {
      // Get the most recent report
      const reports = await this.getLatestReports();
      if (reports.length > 0) {
        const latestReport = reports.sort().pop();
        const reportPath = path.join(this.reportsDir, latestReport);
        const reportData = await fs.readFile(reportPath, 'utf8');
        const report = JSON.parse(reportData);
        
        console.log(`📊 Latest Report: ${latestReport}`);
        console.log(`   Timestamp: ${new Date(report.timestamp).toLocaleString()}`);
        
        if (report.totalPages) {
          console.log(`   Pages Analyzed: ${report.totalPages}`);
        }
        if (report.missingPages) {
          console.log(`   Missing Pages: ${report.missingPages}`);
        }
        if (report.errors) {
          console.log(`   Errors Found: ${report.errors}`);
        }
      }
      
      // Get the most recent log
      const logs = await this.getLatestLogs();
      if (logs.length > 0) {
        const latestLog = logs.sort().pop();
        const logPath = path.join(this.logsDir, latestLog);
        const logData = await fs.readFile(logPath, 'utf8');
        const logLines = logData.split('\n');
        
        console.log(`📝 Latest Log: ${latestLog}`);
        console.log(`   Last Activity: ${logLines[logLines.length - 3] || 'No recent activity'}`);
      }
      
    } catch (error) {
      console.log('   No recent activity found');
    }
  }

  async displayDetailedReport() {
    console.log('\n📋 Detailed Report:');
    
    try {
      const reports = await this.getLatestReports();
      
      for (const report of reports) {
        const reportPath = path.join(this.reportsDir, report);
        const reportData = await fs.readFile(reportPath, 'utf8');
        const reportObj = JSON.parse(reportData);
        
        console.log(`\n📄 ${report}:`);
        console.log(`   Generated: ${new Date(reportObj.timestamp).toLocaleString()}`);
        
        if (reportObj.summary && reportObj.summary.recommendations) {
          console.log(`   Recommendations: ${reportObj.summary.recommendations.length}`);
          reportObj.summary.recommendations.forEach((rec, index) => {
            console.log(`     ${index + 1}. ${rec.message} (${rec.priority})`);
          });
        }
      }
      
    } catch (error) {
      console.log('   No reports available');
    }
  }

  async displaySystemHealth() {
    console.log('\n🏥 System Health:');
    
    try {
      // Check disk space
      const { exec } = require('child_process');
      const { promisify } = require('util');
      const execAsync = promisify(exec);
      
      const diskSpace = await execAsync('df -h . | tail -1');
      console.log(`💾 Disk Space: ${diskSpace.stdout.split(/\s+/)[4]}`);
      
      // Check memory usage
      const memory = await execAsync('free -h | grep Mem');
      console.log(`🧠 Memory Usage: ${memory.stdout.split(/\s+/)[2]}/${memory.stdout.split(/\s+/)[1]}`);
      
      // Check if cron job is active
      const cronJobs = await execAsync('crontab -l 2>/dev/null | grep automation || echo "No cron jobs found"');
      console.log(`⏰ Cron Jobs: ${cronJobs.stdout.includes('automation') ? 'Active' : 'Inactive'}`);
      
    } catch (error) {
      console.log('   Unable to check system health');
    }
  }
}

async function main() {
  const monitor = new AutomationMonitor();
  
  // Display basic status
  await monitor.getAutomationStatus();
  
  // Display detailed report if requested
  if (process.argv.includes('--detailed')) {
    await monitor.displayDetailedReport();
  }
  
  // Display system health if requested
  if (process.argv.includes('--health')) {
    await monitor.displaySystemHealth();
  }
  
  console.log('\n📞 Commands:');
  console.log('  node automation/monitor-automation.js --detailed  # Show detailed reports');
  console.log('  node automation/monitor-automation.js --health    # Show system health');
  console.log('  node automation/run-automation.js                 # Start automation');
  console.log('  ./automation/setup-cron.sh                       # Setup cron job');
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { AutomationMonitor }; 