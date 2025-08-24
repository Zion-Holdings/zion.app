#!/usr/bin/env node

/**
 * Continuous Cloud Agents
 * Manages continuous operation of cloud-based automation agents
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ContinuousCloudAgents {
  constructor() {
    this.configFile = path.join(__dirname, '..', 'automation', 'cloud-agents-config.json');
    this.logDir = path.join(__dirname, '..', 'automation', 'logs');
    this.agents = new Map();
    this.isRunning = false;
  }

  async loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        const config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
        return config;
      } else {
        // Create default config
        const defaultConfig = {
          agents: [
            {
              name: 'cloud-crawler',
              script: './automation/cloud-site-crawler.cjs',
              args: ['continuous'],
              interval: 300000, // 5 minutes
              maxMemory: '512M',
              autoRestart: true
            },
            {
              name: 'cloud-factory',
              script: './automation/cloud-content-factory.cjs',
              args: ['continuous'],
              interval: 600000, // 10 minutes
              maxMemory: '1G',
              autoRestart: true
            },
            {
              name: 'cloud-advertiser',
              script: './automation/cloud-content-advertiser.cjs',
              args: ['continuous'],
              interval: 900000, // 15 minutes
              maxMemory: '512M',
              autoRestart: true
            }
          ],
          monitoring: {
            enabled: true,
            healthCheckInterval: 60000, // 1 minute
            logRetention: 7 // days
          }
        };
        
        this.ensureLogDirectory();
        fs.writeFileSync(this.configFile, JSON.stringify(defaultConfig, null, 2));
        return defaultConfig;
      }
    } catch (error) {
      console.error('❌ Failed to load config:', error.message);
      return null;
    }
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  async startAgent(agentConfig) {
    try {
      const agentName = agentConfig.name;
      console.log(`🚀 Starting cloud agent: ${agentName}`);
      
      if (this.agents.has(agentName)) {
        console.log(`⚠️  Agent ${agentName} is already running`);
        return false;
      }

      const logFile = path.join(this.logDir, `${agentName}.log`);
      const errorFile = path.join(this.logDir, `${agentName}-error.log`);
      
      const agentProcess = spawn('node', [
        agentConfig.script,
        ...agentConfig.args
      ], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });

      // Set up logging
      const logStream = fs.createWriteStream(logFile, { flags: 'a' });
      const errorStream = fs.createWriteStream(errorFile, { flags: 'a' });
      
      agentProcess.stdout.pipe(logStream);
      agentProcess.stderr.pipe(errorStream);

      // Store agent info
      this.agents.set(agentName, {
        process: agentProcess,
        config: agentConfig,
        startTime: new Date(),
        logStream,
        errorStream,
        status: 'running'
      });

      // Handle process events
      agentProcess.on('exit', (code) => {
        console.log(`🔄 Agent ${agentName} exited with code ${code}`);
        this.agents.delete(agentName);
        
        if (agentConfig.autoRestart && this.isRunning) {
          console.log(`🔄 Restarting agent ${agentName} in 5 seconds...`);
          setTimeout(() => this.startAgent(agentConfig), 5000);
        }
      });

      agentProcess.on('error', (error) => {
        console.error(`❌ Agent ${agentName} error:`, error.message);
        this.agents.delete(agentName);
      });

      console.log(`✅ Cloud agent ${agentName} started successfully`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to start agent ${agentConfig.name}:`, error.message);
      return false;
    }
  }

  async startAllAgents() {
    const config = await this.loadConfig();
    if (!config) return false;

    console.log('🚀 Starting all cloud agents...');
    this.isRunning = true;

    for (const agentConfig of config.agents) {
      await this.startAgent(agentConfig);
      // Small delay between starts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`✅ Started ${this.agents.size} cloud agents`);
    return true;
  }

  async stopAllAgents() {
    console.log('🛑 Stopping all cloud agents...');
    this.isRunning = false;

    for (const [name, agent] of this.agents) {
      try {
        console.log(`🛑 Stopping agent: ${name}`);
        agent.process.kill('SIGTERM');
        
        // Close log streams
        agent.logStream.end();
        agent.errorStream.end();
        
        this.agents.delete(name);
      } catch (error) {
        console.error(`❌ Error stopping agent ${name}:`, error.message);
      }
    }

    console.log('✅ All cloud agents stopped');
  }

  async getStatus() {
    const status = {
      isRunning: this.isRunning,
      agents: [],
      timestamp: new Date().toISOString()
    };

    for (const [name, agent] of this.agents) {
      status.agents.push({
        name,
        status: agent.status,
        startTime: agent.startTime,
        uptime: Date.now() - agent.startTime.getTime(),
        memory: agent.process.memoryUsage()
      });
    }

    return status;
  }

  async healthCheck() {
    const status = await this.getStatus();
    const health = {
      status: 'healthy',
      checks: {
        running: status.isRunning,
        agents: status.agents.length > 0,
        memory: true
      },
      issues: [],
      timestamp: new Date().toISOString()
    };

    if (!health.checks.running) {
      health.status = 'stopped';
      health.issues.push('Service is not running');
    }

    if (!health.checks.agents) {
      health.status = 'warning';
      health.issues.push('No agents are running');
    }

    // Check memory usage
    for (const agent of status.agents) {
      if (agent.memory.heapUsed > 500 * 1024 * 1024) { // 500MB
        health.checks.memory = false;
        health.issues.push(`Agent ${agent.name} using high memory: ${Math.round(agent.memory.heapUsed / 1024 / 1024)}MB`);
      }
    }

    if (health.issues.length > 0) {
      health.status = health.checks.running ? 'warning' : 'unhealthy';
    }

    return health;
  }
}

// CLI execution
async function main() {
  const cloudAgents = new ContinuousCloudAgents();
  const command = process.argv[2];

  try {
    switch (command) {
      case 'start':
        await cloudAgents.startAllAgents();
        break;
        
      case 'stop':
        await cloudAgents.stopAllAgents();
        break;
        
      case 'status':
        const status = await cloudAgents.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
        
      case 'health':
        const health = await cloudAgents.healthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
        
      case 'restart':
        await cloudAgents.stopAllAgents();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await cloudAgents.startAllAgents();
        break;
        
      default:
        console.log('Continuous Cloud Agents Manager');
        console.log('==============================');
        console.log('');
        console.log('Usage:');
        console.log('  node continuous-cloud-agents.cjs start    - Start all agents');
        console.log('  node continuous-cloud-agents.cjs stop     - Stop all agents');
        console.log('  node continuous-cloud-agents.cjs restart  - Restart all agents');
        console.log('  node continuous-cloud-agents.cjs status  - Show agent status');
        console.log('  node continuous-cloud-agents.cjs health  - Show health status');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ContinuousCloudAgents;