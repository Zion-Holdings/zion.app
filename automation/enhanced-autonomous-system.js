const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const cron = require('node-cron');

class EnhancedAutonomousSystem {
  constructor() {
    this.agents = new Map();
    this.orchestrators = new Map();
    this.systemMetrics = {
      totalAgents: 0,
      activeAgents: 0,
      totalTasks: 0,
      completedTasks: 0,
      systemHealth: 'good',
      avgResponseTime: 0,
      errorRate: 0
    };
    this.logs = [];
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading config:', error);
    }
    return {
      maxAgents: 50,
      maxConcurrentTasks: 10,
      healthCheckInterval: 30000,
      backupInterval: 3600000,
      logRetention: 7,
      autoScaling: true,
      performanceThreshold: 0.8
    };
  }

  async initialize() {
    console.log('🚀 Initializing Enhanced Autonomous System...');
    
    // Create necessary directories
    this.ensureDirectories();
    
    // Initialize database tables
    await this.initializeDatabase();
    
    // Start system monitoring
    this.startSystemMonitoring();
    
    // Start cron jobs
    this.startCronJobs();
    
    // Create initial agents
    await this.createInitialAgents();
    
    console.log('✅ Enhanced Autonomous System initialized successfully');
  }

  ensureDirectories() {
    const directories = [
      'logs',
      'agents',
      'orchestrators',
      'backups',
      'analytics',
      'reports',
      'templates',
      'market-research',
      'content-generation',
      'marketing-agents',
      'sales-agents',
      'analytics-agents'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initializeDatabase() {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    try {
      // Create autonomous_agents table
      await supabase.rpc('create_autonomous_agents_table', {});
      
      // Create system_metrics table
      await supabase.rpc('create_system_metrics_table', {});
      
      // Create agent_logs table
      await supabase.rpc('create_agent_logs_table', {});
      
      console.log('✅ Database tables initialized');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  startSystemMonitoring() {
    setInterval(() => {
      this.updateSystemMetrics();
      this.checkSystemHealth();
      this.performAutoScaling();
    }, this.config.healthCheckInterval);
  }

  startCronJobs() {
    // Daily backup at 2 AM
    cron.schedule('0 2 * * *', () => {
      this.performBackup();
    });

    // Hourly analytics collection
    cron.schedule('0 * * * *', () => {
      this.collectAnalytics();
    });

    // Every 5 minutes - agent health check
    cron.schedule('*/5 * * * *', () => {
      this.checkAgentHealth();
    });

    // Every 10 minutes - performance optimization
    cron.schedule('*/10 * * * *', () => {
      this.optimizePerformance();
    });

    // Every 30 minutes - market research
    cron.schedule('*/30 * * * *', () => {
      this.performMarketResearch();
    });

    console.log('✅ Cron jobs scheduled');
  }

  async createInitialAgents() {
    console.log('🤖 Creating initial agents...');
    
    const initialAgents = [
      {
        id: 'market-research-agent',
        name: 'Market Research Agent',
        type: 'research',
        script: 'autonomous-market-research-agent.js',
        status: 'active',
        schedule: '0 */6 * * *',
        priority: 'high'
      },
      {
        id: 'content-generator-agent',
        name: 'Content Generator Agent',
        type: 'content',
        script: 'continuous-content-generator.js',
        status: 'active',
        schedule: '*/30 * * * *', // Every 30 seconds (continuous)
        priority: 'high'
      },
      {
        id: 'solution-creator-agent',
        name: 'Solution Creator Agent',
        type: 'creation',
        script: 'autonomous-solution-creator-agent.js',
        status: 'active',
        schedule: '0 */12 * * *',
        priority: 'medium'
      },
      {
        id: 'sales-agent',
        name: 'Sales Agent',
        type: 'sales',
        script: 'autonomous-sales-agent.js',
        status: 'active',
        schedule: '0 */8 * * *',
        priority: 'medium'
      },
      {
        id: 'agent-creator',
        name: 'Agent Creator',
        type: 'orchestration',
        script: 'continuous-agent-creator.js',
        status: 'active',
        schedule: '0 0 * * 0',
        priority: 'low'
      }
    ];

    for (const agentConfig of initialAgents) {
      try {
        await this.createAgent(agentConfig);
        console.log(`✅ Created agent: ${agentConfig.name}`);
      } catch (error) {
        console.error(`❌ Failed to create agent ${agentConfig.name}:`, error.message);
      }
    }
  }

  async createAgent(config) {
    const agentId = `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const agent = {
      id: agentId,
      name: config.name,
      type: config.type,
      status: 'idle',
      workload: 0,
      currentTask: 'Initializing...',
      nextSteps: [],
      services: config.services,
      capabilities: config.capabilities,
      dependencies: [],
      performance: {
        tasksCompleted: 0,
        successRate: 100,
        avgResponseTime: 0
      },
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      config: {
        autoRestart: true,
        maxRetries: 3,
        timeout: 300000,
        priority: 'normal'
      }
    };

    this.agents.set(agentId, agent);
    
    // Save to database
    await this.saveAgentToDatabase(agent);
    
    // Create agent script
    await this.createAgentScript(agent);
    
    // Start agent
    await this.startAgent(agentId);
    
    console.log(`✅ Created agent: ${agent.name} (${agentId})`);
    return agentId;
  }

  async saveAgentToDatabase(agent) {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    try {
      const { error } = await supabase
        .from('autonomous_agents')
        .upsert([{
          id: agent.id,
          name: agent.name,
          type: agent.type,
          status: agent.status,
          workload: agent.workload,
          current_task: agent.currentTask,
          next_steps: agent.nextSteps,
          services: agent.services,
          capabilities: agent.capabilities,
          dependencies: agent.dependencies,
          performance: agent.performance,
          created_at: agent.createdAt,
          last_active: agent.lastActive,
          config: agent.config
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Error saving agent to database:', error);
    }
  }

  async createAgentScript(agent) {
    const scriptTemplate = this.getAgentScriptTemplate(agent);
    const scriptPath = path.join(__dirname, 'agents', `${agent.id}.js`);
    
    fs.writeFileSync(scriptPath, scriptTemplate);
    
    // Make script executable
    fs.chmodSync(scriptPath, '755');
  }

  getAgentScriptTemplate(agent) {
    return `
const fs = require('fs');
const path = require('path');

class ${agent.name.replace(/\s+/g, '')}Agent {
  constructor() {
    this.id = '${agent.id}';
    this.name = '${agent.name}';
    this.type = '${agent.type}';
    this.capabilities = ${JSON.stringify(agent.capabilities)};
    this.services = ${JSON.stringify(agent.services)};
    this.status = 'idle';
    this.workload = 0;
    this.currentTask = 'Initializing...';
    this.performance = {
      tasksCompleted: 0,
      successRate: 100,
      avgResponseTime: 0
    };
  }

  async initialize() {
    console.log(\`🚀 Initializing \${this.name}...\`);
    this.status = 'active';
    this.updateStatus();
    
    // Start continuous operation
    this.startContinuousOperation();
  }

  async startContinuousOperation() {
    setInterval(async () => {
      if (this.status === 'active' && this.workload < 100) {
        await this.performTask();
      }
    }, 5000);
  }

  async performTask() {
    try {
      this.currentTask = 'Performing task...';
      this.workload = Math.min(100, this.workload + Math.random() * 20);
      this.updateStatus();

      // Simulate task execution
      await this.simulateTaskExecution();

      this.performance.tasksCompleted++;
      this.performance.successRate = Math.max(80, this.performance.successRate - Math.random() * 5);
      this.workload = Math.max(0, this.workload - Math.random() * 30);
      
      this.currentTask = 'Task completed, waiting for next task...';
      this.updateStatus();
    } catch (error) {
      console.error(\`Error in \${this.name}:\`, error);
      this.status = 'error';
      this.updateStatus();
    }
  }

  async simulateTaskExecution() {
    const taskTypes = this.services;
    const randomTask = taskTypes[Math.floor(Math.random() * taskTypes.length)];
    
    console.log(\`\${this.name} performing: \${randomTask}\`);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
  }

  updateStatus() {
    const statusData = {
      id: this.id,
      status: this.status,
      workload: this.workload,
      currentTask: this.currentTask,
      performance: this.performance,
      lastActive: new Date().toISOString()
    };

    // Save status to file
    const statusPath = path.join(__dirname, '..', 'logs', \`\${this.id}_status.json\`);
    fs.writeFileSync(statusPath, JSON.stringify(statusData, null, 2));
  }

  async stop() {
    this.status = 'stopped';
    this.updateStatus();
    console.log(\`\${this.name} stopped\`);
  }
}

// Start the agent
const agent = new ${agent.name.replace(/\s+/g, '')}Agent();
agent.initialize().catch(console.error);

module.exports = agent;
`;
  }

  async startAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) return;

    try {
      const scriptPath = path.join(__dirname, 'agents', `${agentId}.js`);
      
      exec(`node "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error starting agent ${agentId}:`, error);
          agent.status = 'error';
        } else {
          agent.status = 'active';
        }
        this.saveAgentToDatabase(agent);
      });

      console.log(`✅ Started agent: ${agent.name}`);
    } catch (error) {
      console.error(`Error starting agent ${agentId}:`, error);
      agent.status = 'error';
      this.saveAgentToDatabase(agent);
    }
  }

  async updateSystemMetrics() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    const totalTasks = Array.from(this.agents.values()).reduce((sum, a) => sum + a.performance.tasksCompleted, 0);
    const avgResponseTime = Array.from(this.agents.values()).reduce((sum, a) => sum + a.performance.avgResponseTime, 0) / this.agents.size || 0;
    const errorRate = Array.from(this.agents.values()).filter(a => a.status === 'error').length / this.agents.size * 100 || 0;

    this.systemMetrics = {
      totalAgents: this.agents.size,
      activeAgents: activeAgents.length,
      totalTasks,
      completedTasks: totalTasks,
      systemHealth: errorRate > 20 ? 'critical' : errorRate > 10 ? 'warning' : 'good',
      avgResponseTime,
      errorRate
    };

    // Save metrics to database
    await this.saveSystemMetrics();
  }

  async saveSystemMetrics() {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    try {
      const { error } = await supabase
        .from('system_metrics')
        .upsert([{
          id: 'current',
          ...this.systemMetrics,
          updated_at: new Date().toISOString()
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Error saving system metrics:', error);
    }
  }

  checkSystemHealth() {
    const errorAgents = Array.from(this.agents.values()).filter(a => a.status === 'error');
    
    if (errorAgents.length > 0) {
      console.log(`⚠️  Found ${errorAgents.length} agents with errors`);
      
      errorAgents.forEach(agent => {
        if (agent.config.autoRestart) {
          console.log(`🔄 Restarting agent: ${agent.name}`);
          this.restartAgent(agent.id);
        }
      });
    }
  }

  async restartAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) return;

    console.log(`🔄 Restarting agent: ${agent.name}`);
    
    // Stop current process
    // This would require process management in a real implementation
    
    // Reset agent status
    agent.status = 'idle';
    agent.workload = 0;
    agent.currentTask = 'Restarting...';
    
    // Start agent again
    await this.startAgent(agentId);
  }

  performAutoScaling() {
    if (!this.config.autoScaling) return;

    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    const avgWorkload = activeAgents.reduce((sum, a) => sum + a.workload, 0) / activeAgents.length || 0;

    if (avgWorkload > 80 && this.agents.size < this.config.maxAgents) {
      console.log('📈 High workload detected, creating new agent...');
      this.createAgent({
        name: `Auto-Scaled Agent ${Date.now()}`,
        type: 'auto-scaled',
        capabilities: ['General automation'],
        services: ['Task processing']
      });
    } else if (avgWorkload < 20 && this.agents.size > 5) {
      console.log('📉 Low workload detected, stopping idle agents...');
      const idleAgents = Array.from(this.agents.values())
        .filter(a => a.status === 'active' && a.workload < 10)
        .slice(0, 1);
      
      idleAgents.forEach(agent => {
        console.log(`🛑 Stopping idle agent: ${agent.name}`);
        agent.status = 'stopped';
        this.saveAgentToDatabase(agent);
      });
    }
  }

  async performBackup() {
    console.log('💾 Performing system backup...');
    
    const backupData = {
      agents: Array.from(this.agents.values()),
      systemMetrics: this.systemMetrics,
      config: this.config,
      timestamp: new Date().toISOString()
    };

    const backupPath = path.join(__dirname, 'backups', `backup_${Date.now()}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
    
    console.log(`✅ Backup saved to: ${backupPath}`);
  }

  async collectAnalytics() {
    console.log('📊 Collecting analytics...');
    
    const analytics = {
      timestamp: new Date().toISOString(),
      agentCount: this.agents.size,
      activeAgents: Array.from(this.agents.values()).filter(a => a.status === 'active').length,
      totalTasks: Array.from(this.agents.values()).reduce((sum, a) => sum + a.performance.tasksCompleted, 0),
      avgWorkload: Array.from(this.agents.values()).reduce((sum, a) => sum + a.workload, 0) / this.agents.size || 0,
      errorRate: Array.from(this.agents.values()).filter(a => a.status === 'error').length / this.agents.size * 100 || 0
    };

    const analyticsPath = path.join(__dirname, 'analytics', `analytics_${Date.now()}.json`);
    fs.writeFileSync(analyticsPath, JSON.stringify(analytics, null, 2));
  }

  checkAgentHealth() {
    Array.from(this.agents.values()).forEach(agent => {
      const statusPath = path.join(__dirname, 'logs', `${agent.id}_status.json`);
      
      if (fs.existsSync(statusPath)) {
        try {
          const statusData = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
          Object.assign(agent, statusData);
          this.saveAgentToDatabase(agent);
        } catch (error) {
          console.error(`Error reading status for agent ${agent.id}:`, error);
        }
      }
    });
  }

  optimizePerformance() {
    console.log('⚡ Optimizing system performance...');
    
    // Analyze agent performance and optimize
    Array.from(this.agents.values()).forEach(agent => {
      if (agent.performance.successRate < 80) {
        console.log(`🔧 Optimizing agent: ${agent.name}`);
        // Implement optimization logic
      }
    });
  }

  async performMarketResearch() {
    console.log('🔍 Performing market research...');
    
    // This would integrate with external APIs for market research
    const researchData = {
      timestamp: new Date().toISOString(),
      trends: ['AI automation', 'Content marketing', 'Digital transformation'],
      opportunities: ['New market segments', 'Emerging technologies', 'Competitive gaps'],
      recommendations: ['Expand AI capabilities', 'Enhance content generation', 'Improve analytics']
    };

    const researchPath = path.join(__dirname, 'market-research', `research_${Date.now()}.json`);
    fs.writeFileSync(researchPath, JSON.stringify(researchData, null, 2));
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      systemMetrics: this.systemMetrics
    };

    this.logs.push(logEntry);
    
    // Keep only recent logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }

    // Save to file
    const logPath = path.join(__dirname, 'logs', `system_${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  getStatus() {
    return {
      agents: Array.from(this.agents.values()),
      systemMetrics: this.systemMetrics,
      config: this.config,
      uptime: process.uptime(),
      logs: this.logs.slice(-10)
    };
  }
}

// Export the system
module.exports = EnhancedAutonomousSystem;

// If run directly, start the system
if (require.main === module) {
  const system = new EnhancedAutonomousSystem();
  system.initialize().catch(console.error);
} 