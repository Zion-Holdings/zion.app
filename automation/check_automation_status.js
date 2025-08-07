#!/usr/bin/env node

/**
 * Automation Status Checker
 * 
 * This system checks the status of all automation systems and provides
 * comprehensive reporting on their health and performance.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

class AutomationStatusChecker {
  constructor() {
    this.statusData = {
      systems: {},
      overallHealth: 'unknown',
      lastCheck: null,
      errors: [],
      warnings: []
    };
    
    this.registeredSystems = [
      'automation_monitor_and_maintainer_factory',
      'comprehensive_sync_orchestrator',
      'syntax_error_monitor',
      'continuous-syntax-fix',
      'code-quality-automation-system',
      'quick-lint-fix'
    ];
  }

  async checkSystemStatus(systemName) {
    const systemPath = path.join(__dirname, `${systemName}.js`);
    const pidPath = path.join(__dirname, 'pids', `${systemName}.pid`);
    const logPath = path.join(__dirname, 'logs', `${systemName}.log`);

    const status = {
      name: systemName,
      exists: fs.existsSync(systemPath),
      running: false,
      pid: null,
      lastLog: null,
      errors: [],
      warnings: []
    };

    // Check if system file exists
    if (!status.exists) {
      status.errors.push('System file not found');
      return status;
    }

    // Check if process is running
    if (fs.existsSync(pidPath)) {
      try {
        const pid = fs.readFileSync(pidPath, 'utf8').trim();
        status.pid = pid;
        
        // Check if process is actually running
        try {
          process.kill(pid, 0);
          status.running = true;
        } catch (e) {
          status.errors.push('Process not running (stale PID)');
        }
      } catch (e) {
        status.errors.push('Invalid PID file');
      }
    } else {
      status.errors.push('No PID file found');
    }

    // Check recent logs
    if (fs.existsSync(logPath)) {
      try {
        const stats = fs.statSync(logPath);
        status.lastLog = stats.mtime;
        
        // Check if log is recent (within last 5 minutes)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        if (stats.mtime < fiveMinutesAgo) {
          status.warnings.push('No recent log activity');
        }
      } catch (e) {
        status.errors.push('Cannot read log file');
      }
    } else {
      status.warnings.push('No log file found');
    }

    return status;
  }

  async checkAllSystems() {
    console.log('🔍 Checking automation system status...\n');
    
    this.statusData.lastCheck = new Date();
    this.statusData.errors = [];
    this.statusData.warnings = [];

    let healthySystems = 0;
    let totalSystems = this.registeredSystems.length;

    for (const systemName of this.registeredSystems) {
      const status = await this.checkSystemStatus(systemName);
      this.statusData.systems[systemName] = status;

      if (status.running && status.errors.length === 0) {
        healthySystems++;
      }

      // Add system errors to overall errors
      this.statusData.errors.push(...status.errors.map(err => `${systemName}: ${err}`));
      this.statusData.warnings.push(...status.warnings.map(warn => `${systemName}: ${warn}`));
    }

    // Calculate overall health
    const healthPercentage = (healthySystems / totalSystems) * 100;
    if (healthPercentage >= 80) {
      this.statusData.overallHealth = 'healthy';
    } else if (healthPercentage >= 50) {
      this.statusData.overallHealth = 'warning';
    } else {
      this.statusData.overallHealth = 'critical';
    }

    return this.statusData;
  }

  displayStatus() {
    console.log('📊 Automation System Status Report');
    console.log('=====================================\n');

    // Overall health
    const healthEmoji = {
      healthy: '🟢',
      warning: '🟡',
      critical: '🔴'
    };
    
    console.log(`${healthEmoji[this.statusData.overallHealth]} Overall Health: ${this.statusData.overallHealth.toUpperCase()}`);
    console.log(`📅 Last Check: ${this.statusData.lastCheck ? this.statusData.lastCheck.toLocaleString() : 'Never'}\n`);

    // System details
    for (const [systemName, status] of Object.entries(this.statusData.systems)) {
      const statusEmoji = status.running ? '🟢' : '🔴';
      console.log(`${statusEmoji} ${systemName}`);
      
      if (status.pid) {
        console.log(`   PID: ${status.pid}`);
      }
      
      if (status.lastLog) {
        console.log(`   Last Log: ${status.lastLog.toLocaleString()}`);
      }

      if (status.errors.length > 0) {
        console.log(`   ❌ Errors: ${status.errors.join(', ')}`);
      }

      if (status.warnings.length > 0) {
        console.log(`   ⚠️  Warnings: ${status.warnings.join(', ')}`);
      }

      console.log('');
    }

    // Summary
    const runningSystems = Object.values(this.statusData.systems).filter(s => s.running).length;
    const totalSystems = Object.keys(this.statusData.systems).length;
    
    console.log(`📈 Summary: ${runningSystems}/${totalSystems} systems running`);
    
    if (this.statusData.errors.length > 0) {
      console.log(`❌ Total Errors: ${this.statusData.errors.length}`);
    }
    
    if (this.statusData.warnings.length > 0) {
      console.log(`⚠️  Total Warnings: ${this.statusData.warnings.length}`);
    }
  }

  async run() {
    try {
      await this.checkAllSystems();
      this.displayStatus();
      
      // Save status report
      const reportPath = path.join(__dirname, 'status', 'automation-status.json');
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify(this.statusData, null, 2));
      
    } catch (error) {
      console.error('❌ Error checking automation status:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const checker = new AutomationStatusChecker();
  checker.run();
}

module.exports = AutomationStatusChecker;
