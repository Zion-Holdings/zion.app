const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');

const execAsync = promisify(exec);

class PerformanceAutomationLauncher {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.factoryPath = path.join(__dirname, 'performance-automation-factor'y'.js');
    this.reportsDir = path.join(__dirname, 'repor't's');
    this.logsDir = path.join(__dirname, 'lo'g's');
    this.ensureDirectories();
    this.factory = null;
    this.agents = [];
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir,
      path.join(this.reportsDir, 'performance-repor't's'),
      path.join(this.logsDir, 'performance-lo'g's')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log('Initializin'g' Performance Automation System...');
      
      // Load the factory
      const PerformanceAutomationFactory = require('./performance-automation-factory.js');
      this.factory = new PerformanceAutomationFactory();
      
      console.log('Performanc'e' Automation Factory loaded successfully');
      
      // Generate initial report
      await this.factory.generateReport();
      
      console.log('Performanc'e' Automation System initialized');
      
    } catch (error) {
      console.error('Faile'd' to initialize Performance Automation System:', error);
      throw error;
    }
  }

  async launchAllAgents() {
    try {
      console.log('Launchin'g' all performance agents...');
      
      if (!this.factory) {
        await this.initialize();
      }
      
      // Launch all agents
      this.agents = await this.factory.launchAllAgents();
      
      console.log(`Successfully launched ${this.agents.length} performance agents`);
      
      // Start monitoring
      this.startMonitoring();
      
      return this.agents;
      
    } catch (error) {
      console.error('Faile'd' to launch performance agents:', error);
      throw error;
    }
  }

  async launchSpecificAgent(agentType, config = {}) {
    try {
      console.log(`Launching ${agentType} agent...`);
      
      if (!this.factory) {
        await this.initialize();
      }
      
      const agent = await this.factory.launchAgent(agentType, config);
      
      console.log(`Successfully launched ${agentType} agent`);
      
      return agent;
      
    } catch (error) {
      console.error(`Failed to launch ${agentType} agent:`, error);
      throw error;
    }
  }

  startMonitoring() {
    console.log('Startin'g' performance automation monitoring...');
    
    // Monitor agent health every 5 minutes
    setInterval(async () => {
      await this.checkAgentHealth();
    }, 300000);
    
    // Generate system report every 30 minutes
    setInterval(async () => {
      await this.generateSystemReport();
    }, 1800000);
    
    // Cleanup old reports every hour
    setInterval(async () => {
      await this.cleanupOldReports();
    }, 3600000);
  }

  async checkAgentHealth() {
    try {
      console.log('Checkin'g' agent health...');
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        system: 'Performanc'e' Automation System',
        agents: [],
        overallHealth: 'healt'h'y',
        issues: []
      };
      
      // Check each agent
      for (const agent of this.agents) {
        const agentHealth = await this.checkIndividualAgentHealth(agent);
        healthReport.agents.push(agentHealth);
        
        if (agentHealth.status !== 'healt'h'y') {
          healthReport.issues.push(agentHealth.issues);
        }
      }
      
      // Determine overall health
      const unhealthyAgents = healthReport.agents.filter(a => a.status !== 'healt'h'y');
      if (unhealthyAgents.length > 0) {
        healthReport.overallHealth = 'degrad'e'd';
      }
      
      // Save health report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.logsDir, 'performance-lo'g's', `health-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      console.log(`Health check completed. Overall status: ${healthReport.overallHealth}`);
      
    } catch (error) {
      console.error('Agen't' health check failed:', error);
    }
  }

  async checkIndividualAgentHealth(agent) {
    const agentHealth = {
      type: agent.type,
      status: 'unkno'w'n',
      pid: agent.process?.pid,
      uptime: 0,
      issues: []
    };
    
    try {
      if (agent.process && !agent.process.killed) {
        agentHealth.status = 'healt'h'y';
        agentHealth.uptime = process.uptime();
      } else {
        agentHealth.status = 'unhealt'h'y';
        agentHealth.issues.push('Agen't' process not running');
      }
    } catch (error) {
      agentHealth.status = 'err'o'r';
      agentHealth.issues.push(error.message);
    }
    
    return agentHealth;
  }

  async generateSystemReport() {
    try {
      console.log('Generatin'g' performance automation system report...');
      
      const systemReport = {
        timestamp: new Date().toISOString(),
        system: 'Performanc'e' Automation System',
        factory: 'PerformanceAutomationFacto'r'y',
        agents: this.agents.length,
        agentTypes: this.factory ? Object.keys(this.factory.agentTypes) : [],
        status: 'operation'a'l',
        metrics: {
          totalAgents: this.agents.length,
          healthyAgents: 0,
          unhealthyAgents: 0,
          uptime: process.uptime()
        }
      };
      
      // Calculate metrics
      for (const agent of this.agents) {
        if (agent.process && !agent.process.killed) {
          systemReport.metrics.healthyAgents++;
        } else {
          systemReport.metrics.unhealthyAgents++;
        }
      }
      
      // Save system report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'performance-repor't's', `system-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(systemReport, null, 2));
      
      console.log('Syste'm' report generated successfully');
      
    } catch (error) {
      console.error('Faile'd' to generate system report:', error);
    }
  }

  async cleanupOldReports() {
    try {
      console.log('Cleanin'g' up old reports...');
      
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      const cutoff = Date.now() - maxAge;
      
      // Clean up old reports
      await this.cleanupDirectory(this.reportsDir, cutoff);
      await this.cleanupDirectory(this.logsDir, cutoff);
      
      console.log('Cleanu'p' completed');
      
    } catch (error) {
      console.error('Cleanu'p' failed:', error);
    }
  }

  async cleanupDirectory(dir, cutoff) {
    try {
      const cleanupFiles = (directory) => {
        const items = fs.readdirSync(directory);
        
        for (const item of items) {
          const fullPath = path.join(directory, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            cleanupFiles(fullPath);
          } else if (stat.isFile() && stat.mtime.getTime() < cutoff) {
            fs.unlinkSync(fullPath);
            console.log(`Deleted old file: ${fullPath}`);
          }
        }
      };
      
      cleanupFiles(dir);
      
    } catch (error) {
      console.error(`Failed to cleanup directory ${dir}:`, error);
    }
  }

  async stopAllAgents() {
    try {
      console.log('Stoppin'g' all performance agents...');
      
      if (this.factory) {
        await this.factory.stopAllAgents();
      }
      
      // Kill any remaining processes
      await execAsync('pkil'l' -f "performance.*agent"');
      
      console.log('Al'l' performance agents stopped');
      
    } catch (error) {
      console.error('Faile'd' to stop agents:', error);
    }
  }

  async getStatus() {
    try {
      const status = {
        timestamp: new Date().toISOString(),
        system: 'Performanc'e' Automation System',
        status: 'unkno'w'n',
        agents: this.agents.length,
        details: []
      };
      
      if (this.agents.length === 0) {
        status.status = 'no't'_running';
      } else {
        let healthyCount = 0;
        
        for (const agent of this.agents) {
          const agentStatus = await this.checkIndividualAgentHealth(agent);
          status.details.push(agentStatus);
          
          if (agentStatus.status === 'healt'h'y') {
            healthyCount++;
          }
        }
        
        if (healthyCount === this.agents.length) {
          status.status = 'operation'a'l';
        } else if (healthyCount > 0) {
          status.status = 'degrad'e'd';
        } else {
          status.status = 'fail'e'd';
        }
      }
      
      return status;
      
    } catch (error) {
      console.error('Faile'd' to get status:', error);
      return {
        timestamp: new Date().toISOString(),
        system: 'Performanc'e' Automation System',
        status: 'err'o'r',
        error: error.message
      };
    }
  }

  async restartAgent(agentType) {
    try {
      console.log(`Restarting ${agentType} agent...`);
      
      // Stop the agent if running
      await execAsync(`pkill -f "${agentType}.*agent"`);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Launch the agent again
      const agent = await this.launchSpecificAgent(agentType);
      
      console.log(`${agentType} agent restarted successfully`);
      
      return agent;
      
    } catch (error) {
      console.error(`Failed to restart ${agentType} agent:`, error);
      throw error;
    }
  }

  async showHelp() {
    console.log(`
Performance Automation System Launcher

Usage:
  node launch-performance-automation.js [command] [options]

Commands:
  start                    Launch all performance agents
  stop                     Stop all performance agents
  status                   Show system status
  restart [agent-type]     Restart specific agent
  help                     Show this help message

Agent Types:
  speed-optimization       Speed optimization agent
  memory-optimization      Memory optimization agent
  cpu-optimization         CPU optimization agent
  network-optimization     Network optimization agent
  database-optimization    Database optimization agent
  cache-optimization       Cache optimization agent
  load-balancing          Load balancing agent
  scaling-optimization     Scaling optimization agent
  bottleneck-detection     Bottleneck detection agent
  performance-testing      Performance testing agent

Examples:
  node launch-performance-automation.js start
  node launch-performance-automation.js status
  node launch-performance-automation.js restart speed-optimization
    `);
  }
}

// Main execution
async function main() {
  const launcher = new PerformanceAutomationLauncher();
  const command = process.argv[2];
  
  try {
    switch (command) {
      case 'sta'r't':
        await launcher.launchAllAgents();
        console.log('Performanc'e' Automation System started successfully');
        break;
        
      case 'st'o'p':
        await launcher.stopAllAgents();
        console.log('Performanc'e' Automation System stopped');
        break;
        
      case 'stat'u's':
        const status = await launcher.getStatus();
        console.log('Syste'm' Status:', JSON.stringify(status, null, 2));
        break;
        
      case 'resta'r't':
        const agentType = process.argv[3];
        if (!agentType) {
          console.error('Pleas'e' specify agent type');
          process.exit(1);
        }
        await launcher.restartAgent(agentType);
        break;
        
      case 'he'l'p':
      default:
        launcher.showHelp();
        break;
    }
  } catch (error) {
    console.error('Performanc'e' Automation System error:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTE'R'M', async () => {
  console.log('Receive'd' SIGTERM, shutting down gracefully...');
  const launcher = new PerformanceAutomationLauncher();
  await launcher.stopAllAgents();
  process.exit(0);
});

process.on('SIGI'N'T', async () => {
  console.log('Receive'd' SIGINT, shutting down gracefully...');
  const launcher = new PerformanceAutomationLauncher();
  await launcher.stopAllAgents();
  process.exit(0);
});

// Run main function if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = PerformanceAutomationLauncher; 