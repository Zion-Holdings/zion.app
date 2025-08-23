#!/usr/bin/env node

/**
 * Ultimate Redundancy Status Reporter
 * Reports the status of the ultimate redundancy system
 */

const fs = require('fs');
const path = require('path');

class UltimateRedundancyStatusReporter {
  constructor() {
    this.statusFile = path.join(__dirname, 'ultimate-redundancy-status.json');
    this.configFile = path.join(__dirname, 'ultimate-redundancy-config.json');
  }

  /**
   * Get current status
   */
  getStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const statusData = fs.readFileSync(this.statusFile, 'utf8');
        return JSON.parse(statusData);
      }
      return { status: 'unknown', timestamp: new Date().toISOString() };
    } catch (error) {
      console.error('Error reading status:', error.message);
      return { status: 'error', error: error.message, timestamp: new Date().toISOString() };
    }
  }

  /**
   * Update status
   */
  updateStatus(newStatus) {
    try {
      const statusData = {
        ...newStatus,
        timestamp: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      };
      fs.writeFileSync(this.statusFile, JSON.stringify(statusData, null, 2));
      return true;
    } catch (error) {
      console.error('Error updating status:', error.message);
      return false;
    }
  }

  /**
   * Generate status report
   */
  generateReport() {
    const status = this.getStatus();
    const config = this.getConfig();
    
    return {
      system: 'Ultimate Redundancy System',
      status: status.status || 'unknown',
      timestamp: status.timestamp,
      config: config,
      uptime: this.getUptime(),
      health: this.getHealthStatus()
    };
  }

  /**
   * Get configuration
   */
  getConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        const configData = fs.readFileSync(this.configFile, 'utf8');
        return JSON.parse(configData);
      }
      return {};
    } catch (error) {
      console.error('Error reading config:', error.message);
      return {};
    }
  }

  /**
   * Get uptime information
   */
  getUptime() {
    try {
      const pidFile = path.join(__dirname, 'ultimate-redundancy.pid');
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'utf8').trim();
        // Check if process is running
        try {
          process.kill(pid, 0);
          return { running: true, pid: pid };
        } catch (e) {
          return { running: false, pid: pid };
        }
      }
      return { running: false, pid: null };
    } catch (error) {
      return { running: false, error: error.message };
    }
  }

  /**
   * Get health status
   */
  getHealthStatus() {
    const status = this.getStatus();
    const uptime = this.getUptime();
    
    if (status.status === 'error') {
      return 'critical';
    }
    
    if (!uptime.running) {
      return 'warning';
    }
    
    return 'healthy';
  }
}

// Export for use in other modules
module.exports = UltimateRedundancyStatusReporter;

// Run directly if called from command line
if (require.main === module) {
  const reporter = new UltimateRedundancyStatusReporter();
  const report = reporter.generateReport();
  console.log(JSON.stringify(report, null, 2));
}