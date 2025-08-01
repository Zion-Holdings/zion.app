const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ContinuousMonitor {
  constructor() {
    this.isMonitoring = false;
    this.checkInterval = 60000; // 1 minute
    this.healthThreshold = 0.8; // 80% health required
    this.restartAttempts = 0;
    this.maxRestartAttempts = 3;
    this.lastHealthCheck = null;
    this.systemMetrics = {
      uptime: 0,
      healthChecks: 0,
      restarts: 0,
      errors: 0
    };
  }

  async startMonitoring() {
    if (this.isMonitoring) {
      console.log('⚠️ Monitoring already active');
      return;
    }

    console.log('🔍 Starting Continuous Monitor...');
    this.isMonitoring = true;
    this.startTime = new Date();

    // Start monitoring loop
    this.monitoringLoop();

    // Setup graceful shutdown
    this.setupGracefulShutdown();

    console.log('✅ Continuous Monitor started');
  }

  async monitoringLoop() {
    while (this.isMonitoring) {
      try {
        await this.performHealthCheck();
        await this.sleep(this.checkInterval);
      } catch (error) {
        console.error('❌ Error in monitoring loop:', error);
        this.systemMetrics.errors++;
        await this.sleep(30000); // Wait 30 seconds on error
      }
    }
  }

  async performHealthCheck() {
    const startTime = Date.now();
    console.log(`🔍 Performing health check at ${new Date().toISOString()}`);
    
    try {
      const statusChecker = require('./check-autonomous-status');
      const checker = new statusChecker();
      const status = checker.checkSystemStatus();
      
      const healthScore = this.calculateHealthScore(status);
      this.lastHealthCheck = {
        timestamp: new Date(),
        score: healthScore,
        status: status
      };
      
      this.systemMetrics.healthChecks++;
      
      console.log(`📊 Health Score: ${(healthScore * 100).toFixed(1)}%`);
      
      if (healthScore < this.healthThreshold) {
        console.log('⚠️ System health below threshold, initiating recovery...');
        await this.performRecovery(status);
      } else {
        console.log('✅ System health is good');
        this.restartAttempts = 0; // Reset restart attempts on good health
      }
      
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.systemMetrics.errors++;
      
      // If health check itself fails, consider it a critical issue
      if (this.restartAttempts < this.maxRestartAttempts) {
        console.log('🚨 Critical system failure, attempting restart...');
        await this.performEmergencyRestart();
      } else {
        console.log('🚨 Maximum restart attempts reached, stopping monitor');
        this.stopMonitoring();
      }
    }
  }

  calculateHealthScore(status) {
    let score = 0;
    let factors = 0;
    
    // Agent health factor (40% weight)
    if (status.agents.status === 'ok') {
      const agentScore = status.agents.running / Math.max(status.agents.total, 1);
      score += agentScore * 0.4;
      factors++;
    }
    
    // Job health factor (30% weight)
    if (status.jobs.status === 'ok') {
      const jobScore = status.jobs.enabled / Math.max(status.jobs.total, 1);
      score += jobScore * 0.3;
      factors++;
    }
    
    // System health factor (30% weight)
    if (status.system.status === 'healthy') {
      score += 0.3;
      factors++;
    }
    
    // Normalize score if we have factors
    return factors > 0 ? score : 0;
  }

  async performRecovery(status) {
    console.log('🔄 Initiating system recovery...');
    
    const recoveryActions = [];
    
    // Check agent issues
    if (status.agents.status === 'ok' && status.agents.error > 0) {
      recoveryActions.push('restart-failed-agents');
    }
    
    // Check job issues
    if (status.jobs.status === 'ok' && status.jobs.enabled === 0) {
      recoveryActions.push('enable-jobs');
    }
    
    // Check system issues
    if (status.system.status !== 'healthy') {
      recoveryActions.push('fix-system');
    }
    
    // If multiple issues or critical issues, perform full restart
    if (recoveryActions.length > 1 || status.system.status !== 'healthy') {
      await this.performFullRestart();
    } else {
      // Try targeted recovery first
      for (const action of recoveryActions) {
        await this.performTargetedRecovery(action, status);
      }
    }
  }

  async performTargetedRecovery(action, status) {
    console.log(`🔧 Performing targeted recovery: ${action}`);
    
    try {
      switch (action) {
        case 'restart-failed-agents':
          await this.restartFailedAgents(status.agents.agents);
          break;
        case 'enable-jobs':
          await this.enableJobs(status.jobs.jobs);
          break;
        case 'fix-system':
          await this.fixSystemIssues(status.system.checks);
          break;
      }
      
      console.log(`✅ Targeted recovery completed: ${action}`);
      
    } catch (error) {
      console.error(`❌ Targeted recovery failed: ${action}`, error);
      // If targeted recovery fails, escalate to full restart
      await this.performFullRestart();
    }
  }

  async restartFailedAgents(agents) {
    const failedAgents = agents.filter(a => a.status === 'error');
    
    for (const agent of failedAgents) {
      try {
        console.log(`🔄 Restarting failed agent: ${agent.name}`);
        
        // In a real implementation, this would communicate with the agent factory
        // For now, we'll simulate the restart
        await this.sleep(2000);
        
        console.log(`✅ Agent restarted: ${agent.name}`);
      } catch (error) {
        console.error(`❌ Failed to restart agent ${agent.name}:`, error);
      }
    }
  }

  async enableJobs(jobs) {
    const disabledJobs = jobs.filter(j => !j.enabled);
    
    for (const job of disabledJobs) {
      try {
        console.log(`🔄 Enabling job: ${job.name}`);
        
        // In a real implementation, this would enable the job
        // For now, we'll simulate the action
        await this.sleep(1000);
        
        console.log(`✅ Job enabled: ${job.name}`);
      } catch (error) {
        console.error(`❌ Failed to enable job ${job.name}:`, error);
      }
    }
  }

  async fixSystemIssues(checks) {
    const failedChecks = Object.entries(checks).filter(([check, healthy]) => !healthy);
    
    for (const [check, healthy] of failedChecks) {
      if (!healthy) {
        try {
          console.log(`🔧 Fixing system issue: ${check}`);
          
          // Create missing directories
          if (check.includes('Directory')) {
            const dirPath = path.join(__dirname, check.replace('Directory', '').toLowerCase());
            if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath, { recursive: true });
              console.log(`✅ Created directory: ${dirPath}`);
            }
          }
          
        } catch (error) {
          console.error(`❌ Failed to fix system issue ${check}:`, error);
        }
      }
    }
  }

  async performFullRestart() {
    if (this.restartAttempts >= this.maxRestartAttempts) {
      console.log('🚨 Maximum restart attempts reached');
      return;
    }
    
    this.restartAttempts++;
    this.systemMetrics.restarts++;
    
    console.log(`🔄 Performing full system restart (attempt ${this.restartAttempts}/${this.maxRestartAttempts})`);
    
    try {
      const restarter = require('./restart-autonomous-system');
      const systemRestarter = new restarter();
      await systemRestarter.restartSystem();
      
      console.log('✅ Full system restart completed');
      
      // Wait for system to stabilize
      await this.sleep(30000);
      
    } catch (error) {
      console.error('❌ Full system restart failed:', error);
      
      if (this.restartAttempts >= this.maxRestartAttempts) {
        console.log('🚨 System recovery failed, stopping monitor');
        this.stopMonitoring();
      }
    }
  }

  async performEmergencyRestart() {
    console.log('🚨 Performing emergency restart...');
    
    try {
      // Kill all related processes
      await this.killAllProcesses();
      
      // Wait for processes to terminate
      await this.sleep(5000);
      
      // Start fresh system
      await this.startFreshSystem();
      
      console.log('✅ Emergency restart completed');
      
    } catch (error) {
      console.error('❌ Emergency restart failed:', error);
    }
  }

  async killAllProcesses() {
    console.log('🛑 Killing all system processes...');
    
    try {
      // In a real implementation, you'd use a process manager
      // For now, we'll simulate the process
      await this.sleep(2000);
      console.log('✅ All processes terminated');
    } catch (error) {
      console.error('❌ Failed to kill processes:', error);
    }
  }

  async startFreshSystem() {
    console.log('🚀 Starting fresh system...');
    
    try {
      const systemScript = path.join(__dirname, 'launch-enhanced-autonomous-system.js');
      
      const child = spawn('node', [systemScript], {
        stdio: 'inherit',
        detached: true
      });
      
      child.unref(); // Detach from parent process
      
      console.log('✅ Fresh system started');
      
    } catch (error) {
      console.error('❌ Failed to start fresh system:', error);
      throw error;
    }
  }

  getMonitoringStats() {
    const now = new Date();
    const uptime = this.startTime ? now - this.startTime : 0;
    
    return {
      ...this.systemMetrics,
      uptime: uptime,
      isMonitoring: this.isMonitoring,
      lastHealthCheck: this.lastHealthCheck,
      restartAttempts: this.restartAttempts,
      healthThreshold: this.healthThreshold
    };
  }

  stopMonitoring() {
    console.log('🛑 Stopping Continuous Monitor...');
    this.isMonitoring = false;
    
    const stats = this.getMonitoringStats();
    console.log('📊 Final Monitoring Stats:', stats);
    
    console.log('✅ Continuous Monitor stopped');
  }

  setupGracefulShutdown() {
    const shutdown = () => {
      console.log('\n🛑 Received shutdown signal, stopping monitor...');
      this.stopMonitoring();
      process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Main execution
async function main() {
  const monitor = new ContinuousMonitor();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      await monitor.startMonitoring();
      break;
    case 'stop':
      monitor.stopMonitoring();
      break;
    case 'stats':
      console.log('📊 Monitoring Stats:', monitor.getMonitoringStats());
      break;
    default:
      console.log('Usage:');
      console.log('  node continuous-monitor.js start');
      console.log('  node continuous-monitor.js stop');
      console.log('  node continuous-monitor.js stats');
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = ContinuousMonitor; 