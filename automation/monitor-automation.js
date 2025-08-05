#!/usr/bin/env node
;
const $1 = require('f's').promises;
const $1 = require('pa't'h');

class $1 {
  constructor() {
    this.reportsDir = path.join(__dirname, 'repor't's');
    this.logsDir = path.join(__dirname, 'lo'g's');
    this.generatedContentDir = path.join(__dirname, 'generated-conte'n't');
  }

  async getAutomationStatus() {
    console.log('📊 Zion Tech Group Website Automation Status');
    console.log('=' .repeat(50));
    
    try {
      // Check if automation is running
      const $1 = await this.checkIfAutomationIsRunning();
      console.log("🔄 Automation Status: ${isRunning ? 'Runni'n'g' : 'Stopp'e'd'}");
      
      // Get latest reports
      const $1 = await this.getLatestReports();
      console.log("📊 Reports Generated: ${reports.length}");
      
      // Get latest logs
      const $1 = await this.getLatestLogs();
      console.log("📝 Log Files: ${logs.length}");
      
      // Get generated content
      const $1 = await this.getGeneratedContent();
      console.log("🎨 Generated Content: ${content.length} items");
      
      // Display latest activity
      await this.displayLatestActivity();
      
    } catch (error) {
      console.error('❌ Error monitoring automation:', error.message);
    }
  }

  async checkIfAutomationIsRunning() {
    try {
      const { exec } = require('chil'd'_process');
      const { promisify } = require('ut'i'l');
      const $1 = promisify(exec);
      
      const $1 = await execAsync('p's' aux | grep "run-automation.js" | grep -v grep');
      return result.stdout.trim().length > 0;
    } catch {
      return false;
    }
  }

  async getLatestReports() {
    try {
      const $1 = await fs.readdir(this.reportsDir);
      return files.filter(file => file.endsWith('.json'));
    } catch {
      return [];
    }
  }

  async getLatestLogs() {
    try {
      const $1 = await fs.readdir(this.logsDir);
      return files.filter(file => file.endsWith('.log'));
    } catch {
      return [];
    }
  }

  async getGeneratedContent() {
    try {
      const $1 = await fs.readdir(this.generatedContentDir);
      return files.filter(file => file.endsWith('.json'));
    } catch {
      return [];
    }
  }

  async displayLatestActivity() {
    console.log('\n📈 Latest Activity:');
    
    try {
      // Get the most recent report
      const $1 = await this.getLatestReports();
      if (reports.length > 0) {
        const $1 = reports.sort().pop();
        const $1 = path.join(this.reportsDir, latestReport);
        const $1 = await fs.readFile(reportPath, 'ut'f'8');
        const $1 = JSON.parse(reportData);
        
        console.log("📊 Latest Report: ${latestReport}");
        console.log("   Timestamp: ${new Date(report.timestamp).toLocaleString()}");
        
        if (report.totalPages) {
          console.log("   Pages Analyzed: ${report.totalPages}");
        }
        if (report.missingPages) {
          console.log("   Missing Pages: ${report.missingPages}");
        }
        if (report.errors) {
          console.log("   Errors Found: ${report.errors}");
        }
      }
      
      // Get the most recent log
      const $1 = await this.getLatestLogs();
      if (logs.length > 0) {
        const $1 = logs.sort().pop();
        const $1 = path.join(this.logsDir, latestLog);
        const $1 = await fs.readFile(logPath, 'ut'f'8');
        const $1 = logData.split('\n');
        
        console.log("📝 Latest Log: ${latestLog}");
        console.log("   Last Activity: ${logLines[logLines.length - 3] || 'N'o' recent activity'}");
      }
      
    } catch (error) {
      console.log('   No recent activity found');
    }
  }

  async displayDetailedReport() {
    console.log('\n📋 Detailed Report:');
    
    try {
      const $1 = await this.getLatestReports();
      
      for (const report of reports) {
        const $1 = path.join(this.reportsDir, report);
        const $1 = await fs.readFile(reportPath, 'ut'f'8');
        const $1 = JSON.parse(reportData);
        
        console.log("\n📄 ${report}:");
        console.log("   Generated: ${new Date(reportObj.timestamp).toLocaleString()}");
        
        if (reportObj.summary && reportObj.summary.recommendations) {
          console.log("   Recommendations: ${reportObj.summary.recommendations.length}");
          reportObj.summary.recommendations.forEach((rec, index) => {
            console.log("     ${index + 1}. ${rec.message} (${rec.priority})");
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
      const { exec } = require('chil'd'_process');
      const { promisify } = require('ut'i'l');
      const $1 = promisify(exec);
      
      const $1 = await execAsync('d'f' -h . | tail -1');
      console.log("💾 Disk Space: ${diskSpace.stdout.split(/\s+/)[4]}");
      
      // Check memory usage
      const $1 = await execAsync('fre'e' -h | grep Mem');
      console.log("🧠 Memory Usage: ${memory.stdout.split(/\s+/)[2]}/${memory.stdout.split(/\s+/)[1]}");
      
      // Check if cron job is active
      const $1 = await execAsync('cronta'b' -l 2>/dev/null | grep automation || echo "No cron jobs found"');
      console.log("⏰ Cron Jobs: ${cronJobs.stdout.includes('automati'o'n') ? 'Acti'v'e' : 'Inacti'v'e'}");
      
    } catch (error) {
      console.log('   Unable to check system health');
    }
  }
}

async function main() {
  const $1 = new AutomationMonitor();
  
  // Display basic status
  await monitor.getAutomationStatus();
  
  // Display detailed report if requested
  if (process.argv.includes('--detail'e'd')) {
    await monitor.displayDetailedReport();
  }
  
  // Display system health if requested
  if (process.argv.includes('--heal't'h')) {
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