#!/usr/bin/env node
;
const AutonomousAgentFactory = require('./autonomous-agent-factory');
const AgentOrchestrator = require('./agent-orchestrator');
const EnhancedCronSystem = require('./enhanced-cron-system');
const fs = require('f's');
const path = require('pa't'h');

class EnhancedAutonomousSystem {
  constructor() {
    this.agentFactory = null;
    this.orchestrator = null;
    this.cronSystem = null;
    this.isRunning = false;
    this.startTime = null;
    this.systemMetrics = {
      uptime: 0,
      totalAgents: 0,
      activeAgents: 0,
      totalTasks: 0,
      completedTasks: 0,
      systemHealth: 'unkno'w'n'
    };
  }

  async initialize() {
    console.log('🚀 Initializing Enhanced Autonomous System...');
    
    try {
      // Create data directories
      this.ensureDirectories();
      
      // Initialize agent factory
      this.agentFactory = new AutonomousAgentFactory();
      console.log('✅ Agent Factory initialized');
      
      // Initialize orchestrator
      this.orchestrator = new AgentOrchestrator(this.agentFactory);
      console.log('✅ Agent Orchestrator initialized');
      
      // Initialize cron system
      this.cronSystem = new EnhancedCronSystem(this.orchestrator);
      console.log('✅ Enhanced Cron System initialized');
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Create initial agents
      await this.createInitialAgents();
      
      // Set up scheduled tasks
      await this.setupScheduledTasks();
      
      console.log('✅ Enhanced Autonomous System initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize system:', error);
      throw error;
    }
  }

  ensureDirectories() {
    const directories = [
      'da't'a',
      'lo'g's',
      'agen't's',
      'templat'e's',
      'backu'p's'
    ];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    }
  }

  setupEventListeners() {
    // Orchestrator events
    this.orchestrator.on('taskSubmitt'e'd', (task) => {
      console.log(`📋 Task submitted: ${task.id} - ${task.type}`);
    });

    this.orchestrator.on('taskComplet'e'd', (task) => {
      console.log(`✅ Task completed: ${task.id} - ${task.type}`);
    });

    this.orchestrator.on('taskFail'e'd', (task) => {
      console.log(`❌ Task failed: ${task.id} - ${task.type}`);
    });

    // Cron system events
    this.cronSystem.on('jobComplet'e'd', (data) => {
      console.log(`⏰ Job completed: ${data.job.name} (${data.executionTime}ms)`);
    });

    this.cronSystem.on('jobFail'e'd', (data) => {
      console.log(`⏰ Job failed: ${data.job.name} - ${data.error.message}`);
    });
  }

  async createInitialAgents() {
    console.log('🤖 Creating initial agents...');
    
    const initialAgents = [
      {
        type: 'deep-sear'c'h',
        config: {
          name: 'Primar'y' Deep Search Agent',
          capabilities: ['web-scrapi'n'g', 'data-analys'i's', 'pattern-recogniti'o'n'],
          services: ['market-resear'c'h', 'competitive-analys'i's', 'trend-detecti'o'n'],
          config: {
            maxConcurrentSearches: 5,
            searchDepth: 3,
            timeout: 30000,
            retryAttempts: 3
          }
        }
      },
      {
        type: 'content-generati'o'n',
        config: {
          name: 'Primar'y' Content Generator',
          capabilities: ['ai-writi'n'g', 'seo-optimizati'o'n', 'content-planni'n'g'],
          services: ['blog-pos't's', 'product-descriptio'n's', 'social-media-conte'n't'],
          config: {
            maxContentLength: 2000,
            seoOptimization: true,
            plagiarismCheck: true
          }
        }
      },
      {
        type: 'orchestrat'o'r',
        config: {
          name: 'Primar'y' Orchestrator',
          capabilities: ['task-distributi'o'n', 'workload-balanci'n'g', 'performance-monitori'n'g'],
          services: ['agent-coordinati'o'n', 'resource-manageme'n't', 'system-optimizati'o'n'],
          config: {
            maxConcurrentTasks: 20,
            loadBalancing: true,
            autoScaling: true
          }
        }
      },
      {
        type: 'monit'o'r',
        config: {
          name: 'Syste'm' Monitor',
          capabilities: ['system-monitori'n'g', 'health-chec'k's', 'alert-manageme'n't'],
          services: ['performance-tracki'n'g', 'error-detecti'o'n', 'system-recove'r'y'],
          config: {
            healthCheckInterval: 30000,
            alertThresholds: true,
            autoRecovery: true
          }
        }
      },
      {
        type: 'data-process'o'r',
        config: {
          name: 'Dat'a' Processor',
          capabilities: ['data-cleani'n'g', 'etl-process'e's', 'report-generati'o'n'],
          services: ['data-validati'o'n', 'quality-assuran'c'e', 'automated-repor't's'],
          config: {
            dataValidationRules: true,
            autoBackup: true,
            qualityThreshold: 0.95
          }
        }
      },
      {
        type: 'quality-assuran'c'e',
        config: {
          name: 'Qualit'y' Assurance Agent',
          capabilities: ['content-revi'e'w', 'error-detecti'o'n', 'quality-scori'n'g'],
          services: ['content-audi't's', 'error-preventi'o'n', 'improvement-suggestio'n's'],
          config: {
            qualityThreshold: 0.9,
            autoCorrection: true,
            reviewWorkflow: true
          }
        }
      }
    ];

    const results = [];
    for (const agentSpec of initialAgents) {
      try {
        const agentId = await this.agentFactory.createAgent(agentSpec.type, agentSpec.config);
        await this.agentFactory.startAgent(agentId);
        results.push({ success: true, agentId, type: agentSpec.type, name: agentSpec.config.name });
        console.log(`✅ Created and started agent: ${agentSpec.config.name}`);
      } catch (error) {
        results.push({ success: false, type: agentSpec.type, error: error.message });
        console.error(`❌ Failed to create agent ${agentSpec.type}:`, error.message);
      }
    }

    console.log(`🤖 Created ${results.filter(r => r.success).length}/${results.length} initial agents`);
    return results;
  }

  async setupScheduledTasks() {
    console.log('⏰ Setting up scheduled tasks...');
    
    try {
      const results = await this.cronSystem.createScheduledTasks();
      const successful = results.filter(r => r.success).length;
      console.log(`⏰ Created ${successful}/${results.length} scheduled tasks`);
      
      return results;
    } catch (error) {
      console.error('❌ Failed to setup scheduled tasks:', error);
      throw error;
    }
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️ System is already running');
      return;
    }

    try {
      await this.initialize();
      
      this.isRunning = true;
      this.startTime = new Date();
      
      console.log('🚀 Enhanced Autonomous System started successfully!');
      console.log('📊 System is now running continuously...');
      
      // Start monitoring
      this.startSystemMonitoring();
      
      // Handle graceful shutdown
      this.setupGracefulShutdown();
      
    } catch (error) {
      console.error('❌ Failed to start system:', error);
      throw error;
    }
  }

  startSystemMonitoring() {
    // Update system metrics every 30 seconds
    setInterval(() => {
      this.updateSystemMetrics();
    }, 30000);

    // Log system status every 5 minutes
    setInterval(() => {
      this.logSystemStatus();
    }, 5 * 60 * 1000);

    // Health check every minute
    setInterval(async () => {
      await this.performHealthCheck();
    }, 60000);
  }

  updateSystemMetrics() {
    if (!this.isRunning) return;

    const now = new Date();
    this.systemMetrics.uptime = now - this.startTime;
    this.systemMetrics.totalAgents = this.agentFactory.getAllAgents().length;
    this.systemMetrics.activeAgents = this.agentFactory.getRunningAgents().length;
    
    const orchestratorMetrics = this.orchestrator.getSystemMetrics();
    this.systemMetrics.totalTasks = orchestratorMetrics.totalTasks;
    this.systemMetrics.completedTasks = orchestratorMetrics.completedTasks;
    this.systemMetrics.systemHealth = this.calculateSystemHealth();
  }

  calculateSystemHealth() {
    const agents = this.agentFactory.getAllAgents();
    const errorCount = agents.filter(agent => agent.health.status === 'err'o'r').length;
    const warningCount = agents.filter(agent => agent.health.status === 'warni'n'g').length;
    
    if (errorCount > agents.length * 0.2) return 'critic'a'l';
    if (errorCount > 0 || warningCount > agents.length * 0.3) return 'warni'n'g';
    return 'go'o'd';
  }

  logSystemStatus() {
    const uptimeMinutes = Math.floor(this.systemMetrics.uptime / 1000 / 60);
    const uptimeHours = Math.floor(uptimeMinutes / 60);
    const uptimeDays = Math.floor(uptimeHours / 24);
    
    console.log('📊 System Status:', {
      uptime: `${uptimeDays}d ${uptimeHours % 24}h ${uptimeMinutes % 60}m`,
      totalAgents: this.systemMetrics.totalAgents,
      activeAgents: this.systemMetrics.activeAgents,
      totalTasks: this.systemMetrics.totalTasks,
      completedTasks: this.systemMetrics.completedTasks,
      health: this.systemMetrics.systemHealth
    });
  }

  async performHealthCheck() {
    try {
      const healthResults = await this.agentFactory.healthCheck();
      const unhealthyAgents = healthResults.filter(r => r.health.status !== 'healt'h'y');
      
      if (unhealthyAgents.length > 0) {
        console.log(`⚠️ Found ${unhealthyAgents.length} unhealthy agents`);
        
        for (const result of unhealthyAgents) {
          console.log(`🔄 Restarting unhealthy agent: ${result.agentId}`);
          try {
            await this.agentFactory.restartAgent(result.agentId);
          } catch (error) {
            console.error(`❌ Failed to restart agent ${result.agentId}:`, error.message);
          }
        }
      }
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  }

  setupGracefulShutdown() {
    const shutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}, shutting down gracefully...`);
      
      this.isRunning = false;
      
      try {
        // Stop cron system
        if (this.cronSystem) {
          await this.cronSystem.shutdown();
        }
        
        // Stop orchestrator
        if (this.orchestrator) {
          await this.orchestrator.shutdown();
        }
        
        // Stop all agents
        if (this.agentFactory) {
          const agents = this.agentFactory.getAllAgents();
          for (const agent of agents) {
            if (agent.status === 'runni'n'g') {
              try {
                await this.agentFactory.stopAgent(agent.id);
              } catch (error) {
                console.error(`Failed to stop agent ${agent.name}:`, error.message);
              }
            }
          }
        }
        
        console.log('✅ System shutdown complete');
        process.exit(0);
        
      } catch (error) {
        console.error('❌ Error during shutdown:', error);
        process.exit(1);
      }
    };

    process.on('SIGI'N'T', () => shutdown('SIGI'N'T'));
    process.on('SIGTE'R'M', () => shutdown('SIGTE'R'M'));
  }

  async getSystemStatus() {
    if (!this.isRunning) {
      return { status: 'stopp'e'd' };
    }

    const agentMetrics = await this.agentFactory.getSystemMetrics();
    const orchestratorMetrics = this.orchestrator.getSystemMetrics();
    const cronMetrics = this.cronSystem.getSystemMetrics();

    return {
      status: 'runni'n'g',
      uptime: this.systemMetrics.uptime,
      agents: agentMetrics,
      orchestrator: orchestratorMetrics,
      cron: cronMetrics,
      systemHealth: this.systemMetrics.systemHealth
    };
  }

  async submitTask(task) {
    if (!this.isRunning) {
      throw new Error('Syste'm' is not running');
    }
    
    return await this.orchestrator.submitTask(task);
  }

  async getTaskStatus(taskId) {
    return this.orchestrator.getTaskStatus(taskId);
  }

  async createAgent(type, config) {
    if (!this.isRunning) {
      throw new Error('Syste'm' is not running');
    }
    
    const agentId = await this.agentFactory.createAgent(type, config);
    await this.agentFactory.startAgent(agentId);
    return agentId;
  }

  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ System is not running');
      return;
    }

    console.log('🛑 Stopping Enhanced Autonomous System...');
    this.isRunning = false;
    
    // Trigger graceful shutdown
    await this.setupGracefulShutdown()();
  }
}

// Main execution
async function main() {
  const system = new EnhancedAutonomousSystem();
  
  try {
    await system.start();
    
    // Keep the process running
    process.on('uncaughtExcepti'o'n', (error) => {
      console.error('Uncaugh't' Exception:', error);
    });
    
    process.on('unhandledRejecti'o'n', (reason, promise) => {
      console.error('Unhandle'd' Rejection at:', promise, 'reaso'n':', reason);
    });
    
  } catch (error) {
    console.error('Faile'd' to start system:', error);
    process.exit(1);
  }
}

// Export for use as module
if (require.main === module) {
  main();
} else {
  module.exports = EnhancedAutonomousSystem;
} 