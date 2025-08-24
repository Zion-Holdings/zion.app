#!/usr/bin/env node

/**
 * Ultimate Redundancy Master V2
 * Enhanced master system for managing ultimate redundancy operations
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class UltimateRedundancyMasterV2 {
  constructor() {
    this.configFile = path.join(__dirname, 'ultimate-redundancy-v2-config.json');
    this.statusFile = path.join(__dirname, 'ultimate-redundancy-v2-status.json');
    this.pidFile = path.join(__dirname, 'ultimate-redundancy-v2.pid');
    this.logsDir = path.join(__dirname, 'logs');
    this.ensureLogsDirectory();
  }

  /**
   * Ensure logs directory exists
   */
  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  /**
   * Start the ultimate redundancy system
   */
  async start() {
    try {
      console.log('🚀 Starting Ultimate Redundancy System V2...');
      
      // Check if already running
      if (this.isRunning()) {
        console.log('⚠️  System is already running');
        return false;
      }

      // Start the main system
      const child = spawn('node', [
        path.join(__dirname, 'ultimate-redundancy-v2-system.cjs'),
        'start'
      ], {
        detached: true,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      // Save PID
      fs.writeFileSync(this.pidFile, child.pid.toString());
      
      // Update status
      this.updateStatus({
        status: 'starting',
        pid: child.pid,
        startedAt: new Date().toISOString()
      });

      console.log(`✅ Ultimate Redundancy System V2 started with PID: ${child.pid}`);
      return true;

    } catch (error) {
      console.error('❌ Error starting system:', error.message);
      this.updateStatus({
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  /**
   * Stop the ultimate redundancy system
   */
  async stop() {
    try {
      console.log('🛑 Stopping Ultimate Redundancy System V2...');
      
      if (!this.isRunning()) {
        console.log('⚠️  System is not running');
        return false;
      }

      const pid = this.getPid();
      if (pid) {
        process.kill(pid, 'SIGTERM');
        
        // Wait a bit then force kill if needed
        setTimeout(() => {
          try {
            process.kill(pid, 'SIGKILL');
          } catch (e) {
            // Process already terminated
          }
        }, 5000);
      }

      // Remove PID file
      if (fs.existsSync(this.pidFile)) {
        fs.unlinkSync(this.pidFile);
      }

      // Update status
      this.updateStatus({
        status: 'stopped',
        stoppedAt: new Date().toISOString()
      });

      console.log('✅ Ultimate Redundancy System V2 stopped');
      return true;

    } catch (error) {
      console.error('❌ Error stopping system:', error.message);
      return false;
    }
  }

  /**
   * Restart the ultimate redundancy system
   */
  async restart() {
    console.log('🔄 Restarting Ultimate Redundancy System V2...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 2000));
    return await this.start();
  }

  /**
   * Check if system is running
   */
  isRunning() {
    try {
      const pid = this.getPid();
      if (!pid) return false;
      
      process.kill(pid, 0);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Get current PID
   */
  getPid() {
    try {
      if (fs.existsSync(this.pidFile)) {
        return parseInt(fs.readFileSync(this.pidFile, 'utf8').trim());
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Get system status
   */
  getStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const statusData = fs.readFileSync(this.statusFile, 'utf8');
        return JSON.parse(statusData);
      }
      return { status: 'unknown' };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  /**
   * Update system status
   */
  updateStatus(newStatus) {
    try {
      const currentStatus = this.getStatus();
      const statusData = {
        ...currentStatus,
        ...newStatus,
        lastUpdated: new Date().toISOString()
      };
      fs.writeFileSync(this.statusFile, JSON.stringify(statusData, null, 2));
    } catch (error) {
      console.error('Error updating status:', error.message);
    }
  }

  /**
   * Get system health
   */
  getHealth() {
    const status = this.getStatus();
    const isRunning = this.isRunning();
    
    return {
      status: status.status || 'unknown',
      running: isRunning,
      pid: isRunning ? this.getPid() : null,
      uptime: status.startedAt ? Date.now() - new Date(status.startedAt).getTime() : 0,
      lastUpdated: status.lastUpdated,
      health: isRunning ? 'healthy' : 'stopped'
    };
  }

  /**
   * Show status
   */
  showStatus() {
    const health = this.getHealth();
    console.log('\n📊 Ultimate Redundancy System V2 Status:');
    console.log('=====================================');
    console.log(`Status: ${health.status}`);
    console.log(`Running: ${health.running ? '✅ Yes' : '❌ No'}`);
    console.log(`PID: ${health.pid || 'N/A'}`);
    console.log(`Uptime: ${this.formatUptime(health.uptime)}`);
    console.log(`Last Updated: ${health.lastUpdated || 'N/A'}`);
    console.log(`Health: ${health.health}`);
    console.log('=====================================\n');
  }

  /**
   * Format uptime
   */
  formatUptime(ms) {
    if (ms === 0) return 'N/A';
    
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }
}

// Export for use in other modules
module.exports = UltimateRedundancyMasterV2;

// Run directly if called from command line
if (require.main === module) {
  const master = new UltimateRedundancyMasterV2();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      master.start();
      break;
    case 'stop':
      master.stop();
      break;
    case 'restart':
      master.restart();
      break;
    case 'status':
      master.showStatus();
      break;
    case 'health':
      console.log(JSON.stringify(master.getHealth(), null, 2));
      break;
    default:
      console.log('Usage: node ultimate-redundancy-master-v2.cjs [start|stop|restart|status|health]');
      master.showStatus();
  }
}
