const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');

class AutonomousAgentFactory {
  constructor() {
    this.agentsDir = path.join(__dirname, 'agents');
    this.templatesDir = path.join(__dirname, 'templates');
    this.registryFile = path.join(__dirname, 'agent-registry.json');
    this.workloadQueue = [];
    this.activeAgents = new Map();
    
    this.ensureDirectories();
    this.loadRegistry();
  }

  ensureDirectories() {
    const dirs = [this.agentsDir, this.templatesDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadRegistry() {
    if (fs.existsSync(this.registryFile)) {
      this.registry = JSON.parse(fs.readFileSync(this.registryFile, 'utf8'));
    } else {
      this.registry = {
        agents: {},
        templates: {},
        workloadDistribution: {},
        performance: {}
      };
      this.saveRegistry();
    }
  }

  saveRegistry() {
    fs.writeFileSync(this.registryFile, JSON.stringify(this.registry, null, 2));
  }

  createAgentTemplate(type, config) {
    const templateId = `${type}-${Date.now()}`;
    const template = {
      id: templateId,
      type,
      config,
      createdAt: new Date().toISOString(),
      version: '1.0.0'
    };

    this.registry.templates[templateId] = template;
    this.saveRegistry();
    return template;
  }

  generateAgent(templateId, workloadConfig) {
    const template = this.registry.templates[templateId];
    if (!template) {
      throw new Error(`Template ${templateId} not found`);
    }

    const agentId = `agent-${crypto.randomBytes(8).toString('hex')}`;
    const agentDir = path.join(this.agentsDir, agentId);
    
    if (!fs.existsSync(agentDir)) {
      fs.mkdirSync(agentDir, { recursive: true });
    }

    const agentConfig = {
      id: agentId,
      templateId,
      workloadConfig,
      createdAt: new Date().toISOString(),
      status: 'initializing',
      performance: {
        tasksCompleted: 0,
        errors: 0,
        avgResponseTime: 0
      }
    };

    const agentCode = this.generateAgentCode(template, agentConfig);
    const agentFile = path.join(agentDir, 'agent.js');
    
    fs.writeFileSync(agentFile, agentCode);
    fs.writeFileSync(path.join(agentDir, 'config.json'), JSON.stringify(agentConfig, null, 2));

    this.registry.agents[agentId] = agentConfig;
    this.saveRegistry();

    return agentConfig;
  }

  generateAgentCode(template, config) {
    const baseCode = `
const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

class AutonomousAgent {
  constructor(config) {
    this.config = config;
    this.id = config.id;
    this.status = 'running';
    this.events = new EventEmitter();
    this.workloadQueue = [];
    this.performance = {
      tasksCompleted: 0,
      errors: 0,
      startTime: Date.now(),
      avgResponseTime: 0
    };
    
    this.initialize();
  }

  async initialize() {
    try {
      console.log(\`[Agent \${this.id}] Initializing...\`);
      
      // Load workload configuration
      this.workloadConfig = this.config.workloadConfig;
      
      // Initialize specific agent capabilities based on template
      await this.initializeCapabilities();
      
      this.status = 'ready';
      console.log(\`[Agent \${this.id}] Ready for workload\`);
      
      // Start processing workload
      this.processWorkload();
      
    } catch (error) {
      console.error(\`[Agent \${this.id}] Initialization error:\`, error);
      this.status = 'error';
      this.performance.errors++;
    }
  }

  async initializeCapabilities() {
    // Initialize based on agent type
    const type = this.config.templateId.split('-')[0];
    
    switch (type) {
      case 'content':
        await this.initializeContentCapabilities();
        break;
      case 'analytics':
        await this.initializeAnalyticsCapabilities();
        break;
      case 'improvement':
        await this.initializeImprovementCapabilities();
        break;
      case 'integration':
        await this.initializeIntegrationCapabilities();
        break;
      default:
        await this.initializeGenericCapabilities();
    }
  }

  async initializeContentCapabilities() {
    // Content generation capabilities
    this.capabilities = {
      generateContent: true,
      analyzeContent: true,
      optimizeSEO: true,
      createBlogPosts: true
    };
  }

  async initializeAnalyticsCapabilities() {
    // Analytics capabilities
    this.capabilities = {
      analyzePerformance: true,
      generateReports: true,
      trackMetrics: true,
      predictTrends: true
    };
  }

  async initializeImprovementCapabilities() {
    // Improvement capabilities
    this.capabilities = {
      fixErrors: true,
      optimizeCode: true,
      improvePerformance: true,
      enhanceFeatures: true
    };
  }

  async initializeIntegrationCapabilities() {
    // Integration capabilities
    this.capabilities = {
      integrateAPIs: true,
      syncData: true,
      connectServices: true,
      manageWorkflows: true
    };
  }

  async initializeGenericCapabilities() {
    // Generic capabilities
    this.capabilities = {
      processTasks: true,
      generateReports: true,
      handleErrors: true
    };
  }

  async processWorkload() {
    while (this.status === 'ready') {
      try {
        const task = await this.getNextTask();
        if (task) {
          await this.executeTask(task);
        } else {
          // No tasks available, wait
          await this.sleep(5000);
        }
      } catch (error) {
        console.error(\`[Agent \${this.id}] Task processing error:\`, error);
        this.performance.errors++;
        await this.sleep(1000);
      }
    }
  }

  async getNextTask() {
    // Get task from workload queue or generate new work
    if (this.workloadQueue.length > 0) {
      return this.workloadQueue.shift();
    }
    
    // Generate new work based on capabilities
    return await this.generateWork();
  }

  async generateWork() {
    const type = this.config.templateId.split('-')[0];
    
    switch (type) {
      case 'content':
        return await this.generateContentWork();
      case 'analytics':
        return await this.generateAnalyticsWork();
      case 'improvement':
        return await this.generateImprovementWork();
      case 'integration':
        return await this.generateIntegrationWork();
      default:
        return await this.generateGenericWork();
    }
  }

  async generateContentWork() {
    const contentTypes = ['blog', 'product', 'service', 'landing'];
    const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
    
    return {
      type: 'content-generation',
      subtype: randomType,
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        target: randomType,
        keywords: ['ai', 'technology', 'innovation'],
        length: Math.floor(Math.random() * 500) + 200
      }
    };
  }

  async generateAnalyticsWork() {
    const analyticsTypes = ['performance', 'user-behavior', 'content', 'seo'];
    const randomType = analyticsTypes[Math.floor(Math.random() * analyticsTypes.length)];
    
    return {
      type: 'analytics',
      subtype: randomType,
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        metric: randomType,
        timeframe: '24h',
        granularity: 'hourly'
      }
    };
  }

  async generateImprovementWork() {
    const improvementTypes = ['code', 'performance', 'seo', 'ux'];
    const randomType = improvementTypes[Math.floor(Math.random() * improvementTypes.length)];
    
    return {
      type: 'improvement',
      subtype: randomType,
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        target: randomType,
        scope: 'global',
        impact: 'high'
      }
    };
  }

  async generateIntegrationWork() {
    const integrationTypes = ['api', 'database', 'service', 'workflow'];
    const randomType = integrationTypes[Math.floor(Math.random() * integrationTypes.length)];
    
    return {
      type: 'integration',
      subtype: randomType,
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        service: randomType,
        endpoint: '/api/v1',
        method: 'POST'
      }
    };
  }

  async generateGenericWork() {
    return {
      type: 'generic',
      subtype: 'task',
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        action: 'process',
        target: 'system',
        parameters: {}
      }
    };
  }

  async executeTask(task) {
    const startTime = Date.now();
    
    try {
      console.log(\`[Agent \${this.id}] Executing task: \${task.type} - \${task.subtype}\`);
      
      let result;
      switch (task.type) {
        case 'content-generation':
          result = await this.executeContentTask(task);
          break;
        case 'analytics':
          result = await this.executeAnalyticsTask(task);
          break;
        case 'improvement':
          result = await this.executeImprovementTask(task);
          break;
        case 'integration':
          result = await this.executeIntegrationTask(task);
          break;
        default:
          result = await this.executeGenericTask(task);
      }
      
      const responseTime = Date.now() - startTime;
      this.updatePerformance(responseTime);
      
      console.log(\`[Agent \${this.id}] Task completed successfully\`);
      return result;
      
    } catch (error) {
      console.error(\`[Agent \${this.id}] Task execution error:\`, error);
      this.performance.errors++;
      throw error;
    }
  }

  async executeContentTask(task) {
    // Simulate content generation
    await this.sleep(Math.random() * 2000 + 1000);
    
    return {
      type: 'content',
      content: \`Generated \${task.subtype} content for \${task.data.target}\`,
      metadata: {
        keywords: task.data.keywords,
        length: task.data.length,
        generatedAt: new Date().toISOString()
      }
    };
  }

  async executeAnalyticsTask(task) {
    // Simulate analytics processing
    await this.sleep(Math.random() * 1500 + 500);
    
    return {
      type: 'analytics',
      data: {
        metric: task.data.metric,
        value: Math.random() * 100,
        timestamp: new Date().toISOString()
      }
    };
  }

  async executeImprovementTask(task) {
    // Simulate improvement processing
    await this.sleep(Math.random() * 3000 + 1000);
    
    return {
      type: 'improvement',
      improvement: \`Improved \${task.subtype} for \${task.data.target}\`,
      impact: task.data.impact
    };
  }

  async executeIntegrationTask(task) {
    // Simulate integration processing
    await this.sleep(Math.random() * 2500 + 1000);
    
    return {
      type: 'integration',
      service: task.data.service,
      status: 'connected',
      endpoint: task.data.endpoint
    };
  }

  async executeGenericTask(task) {
    // Simulate generic task processing
    await this.sleep(Math.random() * 1000 + 500);
    
    return {
      type: 'generic',
      result: \`Processed \${task.subtype} task\`,
      timestamp: new Date().toISOString()
    };
  }

  updatePerformance(responseTime) {
    this.performance.tasksCompleted++;
    this.performance.avgResponseTime = 
      (this.performance.avgResponseTime * (this.performance.tasksCompleted - 1) + responseTime) / 
      this.performance.tasksCompleted;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.status = 'stopped';
    console.log(\`[Agent \${this.id}] Stopped\`);
  }

  getStatus() {
    return {
      id: this.id,
      status: this.status,
      performance: this.performance,
      capabilities: this.capabilities
    };
  }
}

// Initialize agent
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const agent = new AutonomousAgent(config);

// Handle process termination
process.on('SIGINT', () => {
  console.log(\`[Agent \${agent.id}] Received SIGINT, shutting down...\`);
  agent.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(\`[Agent \${agent.id}] Received SIGTERM, shutting down...\`);
  agent.stop();
  process.exit(0);
});
`;

    return baseCode;
  }

  deployAgent(agentId) {
    const agentConfig = this.registry.agents[agentId];
    if (!agentConfig) {
      throw new Error(`Agent ${agentId} not found`);
    }

    const agentDir = path.join(this.agentsDir, agentId);
    const agentFile = path.join(agentDir, 'agent.js');

    return new Promise((resolve, reject) => {
      exec(`node "${agentFile}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Agent ${agentId} deployment error:`, error);
          reject(error);
        } else {
          console.log(`Agent ${agentId} deployed successfully`);
          this.activeAgents.set(agentId, { process: null, status: 'running' });
          resolve();
        }
      });
    });
  }

  distributeWorkload(workload) {
    // Distribute workload across available agents
    const availableAgents = Object.keys(this.registry.agents).filter(
      agentId => this.registry.agents[agentId].status === 'ready'
    );

    if (availableAgents.length === 0) {
      // Create new agent if none available
      const templateId = this.selectBestTemplate(workload);
      const newAgent = this.generateAgent(templateId, workload);
      this.deployAgent(newAgent.id);
      return newAgent.id;
    }

    // Select best agent for workload
    const bestAgent = this.selectBestAgent(workload, availableAgents);
    return bestAgent;
  }

  selectBestTemplate(workload) {
    // Select best template based on workload type
    const templates = Object.values(this.registry.templates);
    const workloadType = workload.type || 'generic';
    
    const matchingTemplate = templates.find(template => 
      template.type === workloadType
    );

    return matchingTemplate ? matchingTemplate.id : templates[0]?.id || 'generic-default';
  }

  selectBestAgent(workload, availableAgents) {
    // Select agent with best performance for workload type
    const agents = availableAgents.map(id => ({
      id,
      ...this.registry.agents[id]
    }));

    // Sort by performance (tasks completed, low errors, fast response time)
    agents.sort((a, b) => {
      const aScore = a.performance.tasksCompleted - a.performance.errors;
      const bScore = b.performance.tasksCompleted - b.performance.errors;
      return bScore - aScore;
    });

    return agents[0]?.id || availableAgents[0];
  }

  monitorAgents() {
    setInterval(() => {
      Object.keys(this.registry.agents).forEach(agentId => {
        const agent = this.registry.agents[agentId];
        
        // Update performance metrics
        if (agent.performance.tasksCompleted > 0) {
          const efficiency = agent.performance.tasksCompleted / 
            (agent.performance.tasksCompleted + agent.performance.errors);
          
          if (efficiency < 0.8) {
            console.log(`Agent ${agentId} performance degraded, considering replacement`);
            this.considerAgentReplacement(agentId);
          }
        }
      });
    }, 30000); // Check every 30 seconds
  }

  considerAgentReplacement(agentId) {
    const agent = this.registry.agents[agentId];
    
    // Create replacement agent
    const replacementAgent = this.generateAgent(agent.templateId, agent.workloadConfig);
    this.deployAgent(replacementAgent.id);
    
    // Mark old agent for retirement
    agent.status = 'retiring';
    this.saveRegistry();
    
    console.log(`Agent ${agentId} marked for replacement with ${replacementAgent.id}`);
  }

  getSystemStatus() {
    return {
      totalAgents: Object.keys(this.registry.agents).length,
      activeAgents: Object.values(this.registry.agents).filter(a => a.status === 'ready').length,
      templates: Object.keys(this.registry.templates).length,
      performance: this.calculateSystemPerformance()
    };
  }

  calculateSystemPerformance() {
    const agents = Object.values(this.registry.agents);
    const totalTasks = agents.reduce((sum, agent) => sum + agent.performance.tasksCompleted, 0);
    const totalErrors = agents.reduce((sum, agent) => sum + agent.performance.errors, 0);
    const avgResponseTime = agents.reduce((sum, agent) => sum + agent.performance.avgResponseTime, 0) / agents.length;

    return {
      totalTasks,
      totalErrors,
      successRate: totalTasks > 0 ? (totalTasks - totalErrors) / totalTasks : 0,
      avgResponseTime
    };
  }
}

module.exports = AutonomousAgentFactory; 