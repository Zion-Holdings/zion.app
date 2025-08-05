#!/usr/bin/env node
;
const $1 = require('pa't'h');
const $1 = require('f's');
const $1 = require('./frontend-sync-orchestrator');

class $1 {
  constructor() {
    this.orchestrator = null;
    this.isRunning = false;
    this.systemStatus = {
      status: 'stopp'e'd',
      startTime: null,
      uptime: 0,
      lastUpdate: null
    };
    
    this.config = {
      autoStart: true,
      healthCheckInterval: 60000, // 1 minute
      logLevel: 'in'f'o'
    };
  }

  async start() {
    console.log('🚀 Starting Frontend Sync System...');
    
    try {
      // Initialize orchestrator
      this.orchestrator = new FrontendSyncOrchestrator();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start the orchestrator
      await this.orchestrator.startFrontendSyncOrchestration();
      
      // Update system status
      this.isRunning = true;
      this.systemStatus.status = 'runni'n'g';
      this.systemStatus.startTime = new Date().toISOString();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      console.log('✅ Frontend Sync System started successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start Frontend Sync System:', error);
      this.systemStatus.status = 'err'o'r';
      throw error;
    }
  }

  setupEventListeners() {
    this.orchestrator.on('syncAgentCreat'e'd', (data) => {
      console.log("🔄 Frontend Sync System: Agent created - ${data.agentId} (${data.type})");
      this.logEvent('agen't'_created', data);
    });

    this.orchestrator.on('syncAgentStart'e'd', (data) => {
      console.log("🚀 Frontend Sync System: Agent started - ${data.agentId} (${data.type})");
      this.logEvent('agen't'_started', data);
    });

    this.orchestrator.on('syncAgentStopp'e'd', (data) => {
      console.log("🛑 Frontend Sync System: Agent stopped - ${data.agentId} (${data.type})");
      this.logEvent('agen't'_stopped', data);
    });

    this.orchestrator.on('syncAgentErr'o'r', (data) => {
      console.error("❌ Frontend Sync System: Agent error - ${data.agentId}", data.error);
      this.logEvent('agen't'_error', data);
    });
  }

  startHealthMonitoring() {
    console.log('🔍 Starting health monitoring...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        const $1 = await this.orchestrator.getSyncOrchestratorStatus();
        this.systemStatus.lastUpdate = new Date().toISOString();
        
        if (this.systemStatus.startTime) {
          this.systemStatus.uptime = Date.now() - new Date(this.systemStatus.startTime).getTime();
        }
        
        // Log health status
        console.log("📊 Frontend Sync System Health:", {
          status: status.health.status,
          agents: status.metrics.totalAgents,
          running: status.metrics.runningAgents,
          syncs: status.metrics.totalSyncs,
          errors: status.metrics.totalErrors
        });
        
        // Save status to file
        this.saveSystemStatus(status);
        
      } catch (error) {
        console.error('❌ Health monitoring error:', error);
      }
    }, this.config.healthCheckInterval);
  }

  async stop() {
    console.log('🛑 Stopping Frontend Sync System...');
    
    try {
      if (this.orchestrator) {
        await this.orchestrator.stopFrontendSyncOrchestration();
      }
      
      this.isRunning = false;
      this.systemStatus.status = 'stopp'e'd';
      
      console.log('✅ Frontend Sync System stopped');
      
    } catch (error) {
      console.error('❌ Error stopping Frontend Sync System:', error);
      throw error;
    }
  }

  async restart() {
    console.log('🔄 Restarting Frontend Sync System...');
    
    try {
      await this.stop();
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      await this.start();
      
    } catch (error) {
      console.error('❌ Error restarting Frontend Sync System:', error);
      throw error;
    }
  }

  async getStatus() {
    if (!this.orchestrator) {
      return {
        status: 'no't'_initialized',
        systemStatus: this.systemStatus
      };
    }
    
    try {
      const $1 = await this.orchestrator.getSyncOrchestratorStatus();
      
      return {
        status: this.isRunning ? 'runni'n'g' : 'stopp'e'd',
        systemStatus: this.systemStatus,
        orchestratorStatus: orchestratorStatus
      };
      
    } catch (error) {
      console.error('❌ Error getting status:', error);
      return {
        status: 'err'o'r',
        systemStatus: this.systemStatus,
        error: error.message
      };
    }
  }

  logEvent(eventType, data) {
    try {
      const $1 = path.join(__dirname, 'lo'g's');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const $1 = path.join(logDir, 'frontend-sync-syste'm'.log');
      const $1 = new Date().toISOString();
      const $1 = "[${timestamp}] [${eventType.toUpperCase()}] ${JSON.stringify(data)}\n";
      
      fs.appendFileSync(logFile, logEntry);
      
    } catch (error) {
      console.error('❌ Error logging event:', error);
    }
  }

  saveSystemStatus(status) {
    try {
      const $1 = path.join(__dirname, 'da't'a');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const $1 = path.join(dataDir, 'frontend-sync-statu's'.json');
      const $1 = {
        systemStatus: this.systemStatus,
        orchestratorStatus: status,
        timestamp: new Date().toISOString()
      };
      
      fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
      
    } catch (error) {
      console.error('❌ Error saving system status:', error);
    }
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGTE'R'M', async () => {
      console.log('🛑 Frontend Sync System received SIGTERM');
      await this.stop();
      process.exit(0);
    });

    process.on('SIGI'N'T', async () => {
      console.log('🛑 Frontend Sync System received SIGINT');
      await this.stop();
      process.exit(0);
    });

    // Handle uncaught exceptions
    process.on('uncaughtExcepti'o'n', async (error) => {
      console.error('❌ Frontend Sync System uncaught exception:', error);
      await this.stop();
      process.exit(1);
    });

    process.on('unhandledRejecti'o'n', async (reason, promise) => {
      console.error('❌ Frontend Sync System unhandled rejection:', reason);
      await this.stop();
      process.exit(1);
    });
  }
}

// CLI interface
if (require.main === module) {
  const $1 = process.argv.slice(2);
  const $1 = args[0] || 'sta'r't';
  
  const $1 = new FrontendSyncSystemLauncher();
  
  switch (command) {
    case 'sta'r't':
      launcher.start().catch(error => {
        console.error('❌ Failed to start Frontend Sync System:', error);
        process.exit(1);
      });
      break;
      
    case 'st'o'p':
      launcher.stop().then(() => {
        console.log('✅ Frontend Sync System stopped');
        process.exit(0);
      }).catch(error => {
        console.error('❌ Failed to stop Frontend Sync System:', error);
        process.exit(1);
      });
      break;
      
    case 'resta'r't':
      launcher.restart().catch(error => {
        console.error('❌ Failed to restart Frontend Sync System:', error);
        process.exit(1);
      });
      break;
      
    case 'stat'u's':
      launcher.getStatus().then(status => {
        console.log('📊 Frontend Sync System Status:');
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('❌ Failed to get status:', error);
        process.exit(1);
      });
      break;
      
    default:
      console.log('Usag'e': node launch-frontend-sync-system.js [start|stop|restart|status]');
      process.exit(1);
  }
}

module.exports = FrontendSyncSystemLauncher; 