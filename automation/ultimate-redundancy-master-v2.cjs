#!/usr/bin/env node

/**
 * Ultimate Redundancy Master V2
 * Master controller for the ultimate redundancy system version 2
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class UltimateRedundancyMasterV2 {
  constructor() {
    this.configFile = path.join(__dirname, 'ultimate-redundancy-v2-config.json');
    this.statusFile = path.join(__dirname, 'ultimate-redundancy-v2-status.json');
    this.pidFile = path.join(__dirname, 'ultimate-redundancy-v2-master.pid');
    this.isRunning = false;
  }

  async start() {
    try {
      console.log('🚀 Starting Ultimate Redundancy Master V2...');
      
      if (this.isRunning) {
        console.log('⚠️  Master is already running');
        return false;
      }

      // Start the main system
      const systemProcess = spawn('node', [
        path.join(__dirname, 'ultimate-redundancy-system-v2.cjs'),
        'start'
      ], {
        stdio: 'inherit',
        detached: true
      });

      // Save PID
      fs.writeFileSync(this.pidFile, systemProcess.pid.toString());
      
      this.isRunning = true;
      console.log('✅ Ultimate Redundancy Master V2 started successfully');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to start Ultimate Redundancy Master V2:', error.message);
      return false;
    }
  }

  async stop() {
    try {
      console.log('🛑 Stopping Ultimate Redundancy Master V2...');
      
      if (fs.existsSync(this.pidFile)) {
        const pid = fs.readFileSync(this.pidFile, 'utf8').trim();
        process.kill(parseInt(pid), 'SIGTERM');
        fs.unlinkSync(this.pidFile);
      }
      
      this.isRunning = false;
      console.log('✅ Ultimate Redundancy Master V2 stopped successfully');
      
      return true;
    } catch (error) {
      console.error('❌ Failed to stop Ultimate Redundancy Master V2:', error.message);
      return false;
    }
  }

  async status() {
    try {
      const status = {
        isRunning: this.isRunning,
        pid: null,
        config: null,
        timestamp: new Date().toISOString()
      };

      if (fs.existsSync(this.pidFile)) {
        status.pid = fs.readFileSync(this.pidFile, 'utf8').trim();
      }

      if (fs.existsSync(this.configFile)) {
        status.config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      }

      return status;
    } catch (error) {
      return {
        isRunning: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async health() {
    try {
      const status = await this.status();
      const health = {
        status: 'healthy',
        checks: {
          master: status.isRunning,
          pid: !!status.pid,
          config: !!status.config
        },
        timestamp: new Date().toISOString()
      };

      if (!health.checks.master || !health.checks.pid || !health.checks.config) {
        health.status = 'unhealthy';
      }

      return health;
    } catch (error) {
      return {
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}

// CLI execution
if (require.main === module) {
  const master = new UltimateRedundancyMasterV2();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      master.start().catch(console.error);
      break;
    case 'stop':
      master.stop().catch(console.error);
      break;
    case 'status':
      master.status().then(console.log).catch(console.error);
      break;
    case 'health':
      master.health().then(console.log).catch(console.error);
      break;
    default:
      console.log('Usage: node ultimate-redundancy-master-v2.cjs [start|stop|status|health]');
  }
}

module.exports = UltimateRedundancyMasterV2;
