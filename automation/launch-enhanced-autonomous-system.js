
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() })
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now()
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k)
        }
      }
    }
  }
}

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER)
}

const fs = require('fs').promises;
const path = require('path');

// Import required modules
let AgentOrchestrator;
try {
  AgentOrchestrator = require('./agent-orchestrator');
} catch (error) {
  console.log('Agent orchestrator not found, creating basic version');
  AgentOrchestrator = class BasicAgentOrchestrator {
    constructor() {}
    async submitTask(task) { return { id: Date.now(), status: 'submitted' }; }
    async getTaskStatus(taskId) { return { status: 'completed' }; }
    getSystemMetrics() { return { totalTasks: 0, completedTasks: 0 }; }
    async shutdown() { console.log('Shutting down orchestrator'); }
  }
}

class AutonomousAgentFactory {
  constructor() {
    this.agents = new Map();
  }
  
  async createAgent(type, config) {
    const agentId = `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const agent = {
      id: agentId,
      type,
      config,
      status: 'created',
      health: { status: 'healthy', lastCheck: Date.now() }
    };
    this.agents.set(agentId, agent);
    return agentId;
  }
  
  async startAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'running';
      console.log(`Started agent: ${agent.config.name || agentId}`);
    }
  }
  
  getAllAgents() {
    return Array.from(this.agents.values());
  }
  
  getRunningAgents() {
    return this.getAllAgents().filter(agent => agent.status === 'running');
  }
  
  async healthCheck() {
    const results = [];
    for (const [id, agent] of this.agents.entries()) {
      results.push({ agentId: id, health: agent.health });
    }
    return results;
  }
  
  async restartAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'running';
      agent.health.status = 'healthy';
      console.log(`Restarted agent: ${agent.config.name || agentId}`);
    }
  }
  
  async stopAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'stopped';
      console.log(`Stopped agent: ${agent.config.name || agentId}`);
    }
  }
  
  getSystemMetrics() {
    return {
      totalAgents: this.agents.size,
      runningAgents: this.getRunningAgents().length
    };
  }
}

class EnhancedCronSystem {
  constructor(orchestrator) {
    this.orchestrator = orchestrator;
    this.jobs = new Map();
  }
  
  async createScheduledTasks() {
    const tasks = [
      { name: 'health-check', interval: 60000, handler: () => this.healthCheck() },
      { name: 'metrics-update', interval: 30000, handler: () => this.updateMetrics() },
      { name: 'cleanup', interval: 300000, handler: () => this.cleanup() }
    ];
    
    const results = [];
    for (const task of tasks) {
      try {
        const jobId = setInterval(task.handler, task.interval);
        this.jobs.set(task.name, { id: jobId, task });
        results.push({ success: true, name: task.name });
      } catch (error) {
        results.push({ success: false, name: task.name, error: error.message });
      }
    }
    return results;
  }
  
  async healthCheck() {
    console.log('Performing health check...');
  }
  
  async updateMetrics() {
    console.log('Updating metrics...');
  }
  
  async cleanup() {
    console.log('Performing cleanup...');
  }
  
  async shutdown() {
    for (const [name, job] of this.jobs.entries()) {
      clearInterval(job.id);
    }
    this.jobs.clear();
  }
  
  getSystemMetrics() {
    return {
      activeJobs: this.jobs.size
    };
  }
}

class EnhancedAutonomousSystem {
  constructor() {
    this.agentFactory = null;
    this.orchestrator = null;
    this.cronSystem = null;
    this.isRunning = false;
    this.startTime = null;
    this.systemMetrics = {
      uptime: "0",
      totalAgents: "0",
      activeAgents: "0",
      totalTasks: "0",
      completedTasks: "0",
      systemHealth: "unknown"
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
    const directories = ['data', 'logs', 'agents', 'templates', 'backups'];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, dir);
      if (!require('fs').existsSync(dirPath)) {
        require('fs').mkdirSync(dirPath, { recursive: true });
      }
    }
  }

  setupEventListeners() {
    // Basic event logging
    console.log('📡 Event listeners configured');
  }

  async createInitialAgents() {
    console.log('🤖 Creating initial agents...');
    
    const agents = [{
      type: 'deep-search',
      config: {
        name: 'Primary Deep Search Agent',
        capabilities: ['web-scraping', 'data-analysis', 'pattern-recognition'],
        services: ['market-research', 'competitive-analysis', 'trend-detection'],
        config: {
          maxConcurrentSearches: 5,
          searchDepth: 3,
          timeout: 200,
          retryAttempts: 3
        }
      }
    }, {
      type: 'content-generation',
      config: {
        name: 'Content Generation Agent',
        capabilities: ['text-generation', 'content-optimization', 'seo-writing'],
        services: ['blog-writing', 'product-descriptions', 'marketing-copy'],
        config: {
          maxConcurrentTasks: 3,
          qualityLevel: 'high',
          outputFormat: 'markdown'
        }
      }
    }, {
      type: 'data-analysis',
      config: {
        name: 'Data Analysis Agent',
        capabilities: ['statistical-analysis', 'trend-detection', 'predictive-modeling'],
        services: ['performance-analytics', 'user-behavior-analysis', 'market-insights'],
        config: {
          analysisDepth: 'comprehensive',
          reportFormat: 'detailed',
          updateFrequency: 'real-time'
        }
      }
    }, {
      type: 'optimization',
      config: {
        name: 'System Optimization Agent',
        capabilities: ['performance-monitoring', 'resource-optimization', 'efficiency-analysis'],
        services: ['speed-optimization', 'cost-reduction', 'scalability-improvement'],
        config: {
          monitoringInterval: 300,
          optimizationThreshold: 0.8,
          alertLevel: 'moderate'
        }
      }
    }];
    
    const results = [];
    for (const agentConfig of agents) {
      try {
        const agentId = await this.agentFactory.createAgent(agentConfig.type, agentConfig.config);
        await this.agentFactory.startAgent(agentId);
        results.push({ success: true, agentId, type: agentConfig.type, name: agentConfig.config.name });
        console.log(`✅ Created and started agent: ${agentConfig.config.name}`);
      } catch (error) {
        results.push({ success: false, type: agentConfig.type, error: error.message });
        console.error(`❌ Failed to create agent ${agentConfig.type}:`, error.message);
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
    const errorCount = agents.filter(agent => agent.health.status === 'error').length;
    const warningCount = agents.filter(agent => agent.health.status === 'warning').length;
    
    if (errorCount > agents.length * 0.2) return 'critical';
    if (errorCount > 0 || warningCount > agents.length * 0.3) return 'warning';
    return 'good';
  }

  logSystemStatus() {
    const uptimeMs = this.systemMetrics.uptime;
    const uptimeMinutes = Math.floor(uptimeMs / 1000 / 60);
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
      const unhealthyAgents = healthResults.filter(r => r.health.status !== 'healthy');
      
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
            if (agent.status === 'running') {
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

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  }

  async getSystemStatus() {
    if (!this.isRunning) {
      return { status: "stopped" };
    }

    const agentMetrics = this.agentFactory.getSystemMetrics();
    const orchestratorMetrics = this.orchestrator.getSystemMetrics();
    const cronMetrics = this.cronSystem.getSystemMetrics();

    return {
      status: "running",
      uptime: this.systemMetrics.uptime,
      agents: agentMetrics,
      orchestrator: orchestratorMetrics,
      cron: cronMetrics,
      systemHealth: this.systemMetrics.systemHealth
    };
  }

  async submitTask(task) {
    if (!this.isRunning) {
      throw new Error('System is not running');
    }
    
    return await this.orchestrator.submitTask(task);
  }

  async getTaskStatus(taskId) {
    return this.orchestrator.getTaskStatus(taskId);
  }

  async createAgent(type, config) {
    if (!this.isRunning) {
      throw new Error('System is not running');
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
    await this.setupGracefulShutdown();
  }
}

// Main execution
async function main() {
  const system = new EnhancedAutonomousSystem();
  
  try {
    await system.start();
    
    // Keep the process running
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
    
  } catch (error) {
    console.error('Failed to start system:', error);
    process.exit(1);
  }
}

// Export for use as module
if (require.main === module) {
  main();
} else {
  module.exports = EnhancedAutonomousSystem;
} 