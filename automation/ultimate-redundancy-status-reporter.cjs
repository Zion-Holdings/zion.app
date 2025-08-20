#!/usr/bin/env node

/**
 * Ultimate Redundancy Status Reporter
 * Reports the current status of the ultimate redundancy system
 */

const fs = require('fs');
const path = require('path');

class UltimateRedundancyStatusReporter {
  constructor() {
    this.statusFile = path.join(__dirname, 'ultimate-redundancy-status.json');
    this.configFile = path.join(__dirname, 'ultimate-redundancy-config.json');
  }

  getStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const statusData = fs.readFileSync(this.statusFile, 'utf8');
        return JSON.parse(statusData);
      }
      return { status: 'unknown', message: 'Status file not found' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  getConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        const configData = fs.readFileSync(this.configFile, 'utf8');
        return JSON.parse(configData);
      }
      return { config: 'unknown', message: 'Config file not found' };
    } catch (error) {
      return { config: 'error', message: error.message };
    }
  }

  generateReport() {
    const status = this.getStatus();
    const config = this.getConfig();
    
    const report = {
      timestamp: new Date().toISOString(),
      status,
      config,
      system: 'ultimate-redundancy',
      version: '2.0.0'
    };

    console.log(JSON.stringify(report, null, 2));
    return report;
  }
}

// If run directly, generate and display report
if (require.main === module) {
  const reporter = new UltimateRedundancyStatusReporter();
  reporter.generateReport();
}

module.exports = UltimateRedundancyStatusReporter;