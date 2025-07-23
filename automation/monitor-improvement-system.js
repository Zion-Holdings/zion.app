#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ImprovementSystemMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'efficient-improvement-report.json');
  }

  async monitor() {
    console.log('📊 Monitoring Improvement System...');
    
    setInterval(async () => {
      await this.checkStatus();
    }, 10000); // Check every 10 seconds
  }

  async checkStatus() {
    try {
      // Check if the system is running
      const { execSync } = require('child_process');
      const isRunning = execSync('ps aux | grep efficient-improvement-system | grep -v grep', { stdio: 'pipe' }).toString().trim();
      
      if (isRunning) {
        console.log(`🟢 System is running - ${new Date().toISOString()}`);
        
        // Check for recent reports
        await this.checkReports();
        
        // Check git status
        await this.checkGitStatus();
        
      } else {
        console.log(`🔴 System is not running - ${new Date().toISOString()}`);
      }
      
    } catch (error) {
      console.log(`❌ Error checking status: ${error.message}`);
    }
  }

  async checkReports() {
    try {
      const reportsDir = path.join(this.projectRoot, 'reports');
      if (fs.existsSync(reportsDir)) {
        const files = fs.readdirSync(reportsDir);
        const recentFiles = files.filter(f => f.endsWith('.json')).slice(-5);
        
        if (recentFiles.length > 0) {
          console.log(`📄 Recent reports: ${recentFiles.join(', ')}`);
        }
      }
    } catch (error) {
      console.log(`❌ Error checking reports: ${error.message}`);
    }
  }

  async checkGitStatus() {
    try {
      const { execSync } = require('child_process');
      const status = execSync('git status --porcelain', { stdio: 'pipe' }).toString().trim();
      
      if (status) {
        console.log(`📝 Git changes detected: ${status.split('\n').length} files modified`);
      } else {
        console.log('✅ Git working directory clean');
      }
    } catch (error) {
      console.log(`❌ Error checking git status: ${error.message}`);
    }
  }

  async showSummary() {
    try {
      if (fs.existsSync(this.reportPath)) {
        const report = JSON.parse(fs.readFileSync(this.reportPath, 'utf8'));
        
        console.log('\n📊 Improvement System Summary');
        console.log('============================');
        console.log(`Total Cycles: ${report.summary.totalCycles}`);
        console.log(`Total Improvements: ${report.summary.totalImprovements}`);
        console.log(`Total Errors: ${report.summary.totalErrors}`);
        console.log(`Duration: ${Math.round(report.summary.duration / 1000)} seconds`);
        
        if (report.improvements.length > 0) {
          console.log('\nRecent Improvements:');
          report.improvements.slice(-5).forEach(imp => {
            console.log(`  - ${imp.type} (${imp.priority}): ${imp.description}`);
          });
        }
        
        if (report.errors.length > 0) {
          console.log('\nRecent Errors:');
          report.errors.slice(-3).forEach(err => {
            console.log(`  - Cycle ${err.cycle}: ${err.error}`);
          });
        }
      } else {
        console.log('No report found yet. System may still be running.');
      }
    } catch (error) {
      console.log(`❌ Error reading report: ${error.message}`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new ImprovementSystemMonitor();
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'monitor') {
    console.log('🔍 Starting continuous monitoring...');
    monitor.monitor();
  } else if (command === 'summary') {
    monitor.showSummary();
  } else {
    console.log('Usage:');
    console.log('  node monitor-improvement-system.js monitor  - Start continuous monitoring');
    console.log('  node monitor-improvement-system.js summary  - Show current summary');
  }
}

module.exports = ImprovementSystemMonitor; 