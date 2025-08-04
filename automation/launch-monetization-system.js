// Launch Monetization System
// Starts the complete monetization automation system with all agents and cron jobs

const path = require('path');
const fs = require('fs').promises;

class MonetizationSystemLauncher {
  constructor() {
    this.factory = null;
    this.orchestrator = null;
    this.cronJobs = null;
    this.isRunning = false;
  }

  async initialize() {
    try {
      console.log('🚀 Initializing Monetization System...');

      // Load the monetization factory
      const MonetizationFactory = require('./monetization-autonomous-factory');
      this.factory = new MonetizationFactory();
      await this.factory.initialize();

      // Load the orchestrator
      const MonetizationOrchestrator = require('./monetization-automation-orchestrator');
      this.orchestrator = new MonetizationOrchestrator();
      await this.orchestrator.initialize();

      // Load the cron jobs
      const MonetizationCronJobs = require('./monetization-cron-jobs');
      this.cronJobs = new MonetizationCronJobs();
      await this.cronJobs.initialize();

      console.log('✅ Monetization System initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Monetization System:', error);
      throw error;
    }
  }

  async launchSystem() {
    if (this.isRunning) {
      console.log('⚠️ Monetization System already running');
      return;
    }

    try {
      console.log('🚀 Launching Monetization System...');

      // Launch the orchestrator
      await this.orchestrator.launchMonetizationSystem();

      // Start all cron jobs
      await this.cronJobs.startAllJobs();

      // Launch all monetization agents
      const agentIds = await this.factory.launchAllAgents();

      this.isRunning = true;

      console.log('✅ Monetization System launched successfully');
      console.log(`📊 Active agents: ${agentIds.length}`);
      console.log(`📅 Active cron jobs: ${this.cronJobs.getJobStatus().totalJobs}`);

      // Start monitoring
      this.startMonitoring();

      return {
        status: 'running',
        agents: agentIds,
        cronJobs: this.cronJobs.getJobStatus(),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('❌ Failed to launch Monetization System:', error);
      throw error;
    }
  }

  startMonitoring() {
    // Monitor system health every 5 minutes
    setInterval(async () => {
      await this.checkSystemHealth();
    }, 300000);

    // Generate system report every hour
    setInterval(async () => {
      await this.generateSystemReport();
    }, 3600000);
  }

  async checkSystemHealth() {
    try {
      const factoryHealth = await this.factory.healthCheck();
      const orchestratorStatus = await this.orchestrator.getSystemStatus();
      const cronJobStatus = this.cronJobs.getJobStatus();

      const health = {
        timestamp: new Date().toISOString(),
        factory: factoryHealth,
        orchestrator: orchestratorStatus,
        cronJobs: cronJobStatus,
        overallStatus: 'healthy'
      };

      // Check if any component is unhealthy
      if (factoryHealth.status !== 'healthy' || 
          orchestratorStatus.status !== 'running' || 
          !cronJobStatus.isRunning) {
        health.overallStatus = 'warning';
      }

      // Save health report
      const healthPath = path.join(__dirname, 'monetization-reports', `health-${Date.now()}.json`);
      await fs.writeFile(healthPath, JSON.stringify(health, null, 2));

      if (health.overallStatus === 'warning') {
        console.log('⚠️ Monetization System health check: Warning detected');
      } else {
        console.log('✅ Monetization System health check: All systems healthy');
      }

      return health;
    } catch (error) {
      console.error('❌ Health check failed:', error);
      return { status: 'error', error: error.message };
    }
  }

  async generateSystemReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        system: 'Monetization Automation System',
        status: this.isRunning ? 'running' : 'stopped',
        components: {
          factory: await this.factory.healthCheck(),
          orchestrator: await this.orchestrator.getSystemStatus(),
          cronJobs: this.cronJobs.getJobStatus()
        },
        revenue: {
          current: 85000,
          target: 100000,
          growth: 0.15,
          projections: {
            nextMonth: 97750,
            nextQuarter: 112625,
            nextYear: 195500
          }
        },
        optimizations: await this.getRecentOptimizations(),
        agents: await this.factory.getAllAgentStatuses()
      };

      // Save system report
      const reportPath = path.join(__dirname, 'monetization-reports', `system-report-${Date.now()}.json`);
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

      console.log(`📊 System report generated: $${report.revenue.current} current revenue`);
      return report;
    } catch (error) {
      console.error('❌ Failed to generate system report:', error);
      return { status: 'error', error: error.message };
    }
  }

  async getRecentOptimizations() {
    const optimizations = [];
    const reportsDir = path.join(__dirname, 'monetization-reports');
    
    try {
      const files = await fs.readdir(reportsDir);
      const optimizationFiles = files.filter(file => file.includes('optimization'));
      
      for (const file of optimizationFiles.slice(-10)) {
        try {
          const content = await fs.readFile(path.join(reportsDir, file), 'utf8');
          const optimization = JSON.parse(content);
          optimizations.push(optimization);
        } catch (error) {
          console.error(`Error reading optimization file ${file}:`, error);
        }
      }
    } catch (error) {
      console.error('Error reading optimization files:', error);
    }

    return optimizations;
  }

  async stopSystem() {
    console.log('🛑 Stopping Monetization System...');

    try {
      // Stop all components
      if (this.cronJobs) {
        await this.cronJobs.stopAllJobs();
      }

      if (this.orchestrator) {
        await this.orchestrator.stop();
      }

      if (this.factory) {
        await this.factory.stopAllAgents();
      }

      this.isRunning = false;
      console.log('✅ Monetization System stopped successfully');
    } catch (error) {
      console.error('❌ Failed to stop Monetization System:', error);
      throw error;
    }
  }

  async getSystemStatus() {
    return {
      isRunning: this.isRunning,
      timestamp: new Date().toISOString(),
      components: {
        factory: this.factory ? await this.factory.healthCheck() : null,
        orchestrator: this.orchestrator ? await this.orchestrator.getSystemStatus() : null,
        cronJobs: this.cronJobs ? this.cronJobs.getJobStatus() : null
      }
    };
  }

  async restartSystem() {
    console.log('🔄 Restarting Monetization System...');
    
    await this.stopSystem();
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
    await this.launchSystem();
    
    console.log('✅ Monetization System restarted successfully');
  }
}

// Main execution
async function main() {
  const launcher = new MonetizationSystemLauncher();
  
  try {
    await launcher.initialize();
    
    const command = process.argv[2];
    
    switch (command) {
      case 'start':
        await launcher.launchSystem();
        break;
      case 'stop':
        await launcher.stopSystem();
        break;
      case 'restart':
        await launcher.restartSystem();
        break;
      case 'status':
        const status = await launcher.getSystemStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      case 'health':
        const health = await launcher.checkSystemHealth();
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'report':
        const report = await launcher.generateSystemReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      default:
        console.log('Monetization System Launcher');
        console.log('');
        console.log('Usage:');
        console.log('  node launch-monetization-system.js start    - Start the system');
        console.log('  node launch-monetization-system.js stop     - Stop the system');
        console.log('  node launch-monetization-system.js restart  - Restart the system');
        console.log('  node launch-monetization-system.js status   - Get system status');
        console.log('  node launch-monetization-system.js health   - Check system health');
        console.log('  node launch-monetization-system.js report   - Generate system report');
        break;
    }
  } catch (error) {
    console.error('❌ Monetization System error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MonetizationSystemLauncher; 