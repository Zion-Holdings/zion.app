const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');
const EventEmitter = require('events');

class AgentOrchestrator extends EventEmitter {
  constructor() {
    super();
    this.agents = new Map();
    this.activeAgents = new Set();
    this.performanceMetrics = {
      totalTasks: 0,
      successfulTasks: 0,
      failedTasks: 0,
      averageEfficiency: 0,
      growthRate: 0
    };
    this.config = this.loadConfig();
    this.isRunning = false;
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'config', 'orchestrator-config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load orchestrator config, using defaults');
    }

    return {
      maxConcurrentAgents: 50,
      agentLifespan: 24 * 60 * 60 * 1000, // 24 hours
      optimizationInterval: 5 * 60 * 1000, // 5 minutes
      growthTarget: 2.0, // Double every cycle
      collaborationEnabled: true,
      autonomousMode: true
    };
  }

  async start() {
    console.log('🚀 Starting Agent Orchestrator for Exponential Development Growth');
    this.isRunning = true;
    
    // Initialize existing agents
    await this.initializeExistingAgents();
    
    // Start monitoring and optimization loops
    this.startMonitoringLoop();
    this.startOptimizationLoop();
    this.startGrowthAccelerationLoop();
    
    // Emit start event
    this.emit('orchestrator:started', { timestamp: new Date(), agentCount: this.agents.size });
    
    console.log(`✅ Orchestrator started with ${this.agents.size} agents`);
  }

  async initializeExistingAgents() {
    const agentsDir = path.join(__dirname, 'agents');
    if (!fs.existsSync(agentsDir)) {
      fs.mkdirSync(agentsDir, { recursive: true });
      return;
    }

    const agentFiles = fs.readdirSync(agentsDir).filter(file => file.endsWith('.json'));
    
    for (const file of agentFiles) {
      try {
        const agentConfig = JSON.parse(fs.readFileSync(path.join(agentsDir, file), 'utf8'));
        await this.registerAgent(agentConfig);
      } catch (error) {
        console.error(`Failed to initialize agent from ${file}:`, error.message);
      }
    }
  }

  async registerAgent(config) {
    try {
      const agentId = config.id;
      
      // Check if agent already exists
      if (this.agents.has(agentId)) {
        console.log(`Agent ${agentId} already registered`);
        return;
      }

      // Load agent implementation
      const agentPath = path.join(__dirname, 'agents', `${agentId}.cjs`);
      if (!fs.existsSync(agentPath)) {
        console.warn(`Agent implementation not found for ${agentId}`);
        return;
      }

      const AgentClass = require(agentPath);
      const agent = new AgentClass(config);
      
      // Initialize agent
      await agent.initialize();
      
      // Register agent
      this.agents.set(agentId, agent);
      this.activeAgents.add(agentId);
      
      // Set up agent event listeners
      agent.on('task:completed', (result) => this.handleTaskCompletion(agentId, result));
      agent.on('task:failed', (error) => this.handleTaskFailure(agentId, error));
      agent.on('performance:updated', (metrics) => this.updateAgentPerformance(agentId, metrics));
      
      console.log(`✅ Registered agent: ${agentId} (${config.type})`);
      
      // Emit agent registered event
      this.emit('agent:registered', { agentId, config, timestamp: new Date() });
      
    } catch (error) {
      console.error(`Failed to register agent ${config.id}:`, error.message);
    }
  }

  async generateNewAgents(count = 1) {
    console.log(`🔄 Generating ${count} new agents...`);
    
    const agentTypes = ['full-stack', 'frontend', 'backend', 'testing', 'deployment', 'monitoring', 'optimization'];
    const complexityLevels = ['intermediate', 'advanced', 'expert'];
    
    for (let i = 0; i < count; i++) {
      const agentType = agentTypes[Math.floor(Math.random() * agentTypes.length)];
      const complexity = complexityLevels[Math.floor(Math.random() * complexityLevels.length)];
      
      const agentId = `agent-${Date.now()}-${i}-${agentType}-${complexity}`;
      const config = {
        id: agentId,
        type: agentType,
        complexity: complexity,
        created_at: new Date().toISOString(),
        status: 'generated',
        capabilities: {
          code_generation: true,
          testing: true,
          deployment: true,
          monitoring: true,
          optimization: true,
          learning: true
        },
        specializations: [],
        performance_metrics: {
          tasks_completed: 0,
          success_rate: 0,
          efficiency_score: 0.5
        }
      };

      // Generate agent files
      await this.generateAgentFiles(agentId, config);
      
      // Register the new agent
      await this.registerAgent(config);
    }
    
    console.log(`✅ Generated and registered ${count} new agents`);
  }

  async generateAgentFiles(agentId, config) {
    const agentsDir = path.join(__dirname, 'agents');
    
    // Create agent configuration file
    fs.writeFileSync(
      path.join(agentsDir, `${agentId}.json`),
      JSON.stringify(config, null, 2)
    );

    // Create agent implementation file
    const agentCode = this.generateAgentCode(config);
    fs.writeFileSync(
      path.join(agentsDir, `${agentId}.cjs`),
      agentCode
    );

    // Create capabilities file if it doesn't exist
    const capabilitiesDir = path.join(agentsDir, 'capabilities');
    if (!fs.existsSync(capabilitiesDir)) {
      fs.mkdirSync(capabilitiesDir, { recursive: true });
    }

    const capabilitiesFile = path.join(capabilitiesDir, `${config.type}.js`);
    if (!fs.existsSync(capabilitiesFile)) {
      const capabilitiesCode = this.generateCapabilitiesCode(config.type);
      fs.writeFileSync(capabilitiesFile, capabilitiesCode);
    }
  }

  generateAgentCode(config) {
    return `const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class ${config.type.charAt(0).toUpperCase() + config.type.slice(1)}Agent extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.capabilities = config.capabilities;
    this.performance = config.performance_metrics;
    this.active = true;
    this.lastTaskTime = Date.now();
  }

  async initialize() {
    console.log(\`Initializing \${this.config.type} agent with \${this.config.complexity} complexity\`);
    await this.loadCapabilities();
    await this.startMonitoring();
    await this.startTaskGeneration();
    return true;
  }

  async loadCapabilities() {
    const capabilityPath = path.join(__dirname, 'capabilities', \`\${this.config.type}.js\`);
    if (fs.existsSync(capabilityPath)) {
      const capabilities = require(capabilityPath);
      this.specializations = capabilities.getSpecializations(this.config.complexity);
    }
  }

  async startMonitoring() {
    setInterval(async () => {
      await this.selfImprove();
      await this.analyzePerformance();
      await this.emitPerformanceUpdate();
    }, 300000); // Every 5 minutes
  }

  async startTaskGeneration() {
    setInterval(async () => {
      if (this.active && this.performance.efficiency_score > 0.3) {
        await this.generateAndExecuteTask();
      }
    }, 60000); // Every minute
  }

  async generateAndExecuteTask() {
    try {
      const task = await this.createTask();
      if (task) {
        const result = await this.executeTask(task);
        this.emit('task:completed', { task, result, timestamp: new Date() });
        this.performance.tasks_completed++;
        this.performance.success_rate = Math.min(1.0, this.performance.success_rate + 0.01);
      }
    } catch (error) {
      this.emit('task:failed', { error: error.message, timestamp: new Date() });
      this.performance.success_rate = Math.max(0.0, this.performance.success_rate - 0.02);
    }
  }

  async createTask() {
    const taskTypes = ['code_generation', 'testing', 'deployment', 'monitoring', 'optimization'];
    const taskType = taskTypes[Math.floor(Math.random() * taskTypes.length)];
    
    return {
      id: \`task-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`,
      type: taskType,
      priority: Math.random() > 0.7 ? 'high' : 'normal',
      complexity: this.config.complexity,
      created_at: new Date().toISOString()
    };
  }

  async executeTask(task) {
    console.log(\`Executing task: \${task.type} (priority: \${task.priority})\`);
    
    // Simulate task execution
    const executionTime = Math.random() * 5000 + 1000; // 1-6 seconds
    await new Promise(resolve => setTimeout(resolve, executionTime));
    
    // Update performance based on task complexity
    if (task.complexity === 'expert') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.02);
    } else if (task.complexity === 'advanced') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.01);
    }
    
    return {
      status: 'completed',
      execution_time: executionTime,
      result: \`Task \${task.type} completed successfully\`
    };
  }

  async selfImprove() {
    const improvementAreas = await this.identifyImprovementAreas();
    for (const area of improvementAreas) {
      await this.implementImprovement(area);
    }
  }

  async identifyImprovementAreas() {
    const areas = [];
    if (this.performance.success_rate < 0.9) areas.push('success_rate');
    if (this.performance.efficiency_score < 0.8) areas.push('efficiency');
    return areas;
  }

  async implementImprovement(area) {
    console.log(\`Implementing improvement in area: \${area}\`);
    
    if (area === 'efficiency') {
      this.performance.efficiency_score = Math.min(1.0, this.performance.efficiency_score + 0.01);
    } else if (area === 'success_rate') {
      // Improve error handling and task execution
      this.performance.success_rate = Math.min(1.0, this.performance.success_rate + 0.005);
    }
  }

  async analyzePerformance() {
    // Analyze and update performance metrics
    const timeSinceLastTask = Date.now() - this.lastTaskTime;
    if (timeSinceLastTask > 300000) { // 5 minutes
      this.performance.efficiency_score = Math.max(0.0, this.performance.efficiency_score - 0.005);
    }
  }

  async emitPerformanceUpdate() {
    this.emit('performance:updated', {
      agentId: this.config.id,
      metrics: this.performance,
      timestamp: new Date()
    });
  }
}

module.exports = ${config.type.charAt(0).toUpperCase() + config.type.slice(1)}Agent;`;
  }

  generateCapabilitiesCode(agentType) {
    const capabilities = {
      'full-stack': {
        basic: ['html', 'css', 'javascript'],
        intermediate: ['react', 'nodejs', 'database'],
        advanced: ['microservices', 'cloud-deployment', 'ci-cd'],
        expert: ['ai-integration', 'performance-optimization', 'security-hardening']
      },
      'frontend': {
        basic: ['html', 'css', 'javascript'],
        intermediate: ['react', 'vue', 'sass'],
        advanced: ['typescript', 'state-management', 'pwa'],
        expert: ['performance', 'accessibility', 'animation']
      },
      'backend': {
        basic: ['nodejs', 'express', 'mongodb'],
        intermediate: ['authentication', 'api-design', 'testing'],
        advanced: ['microservices', 'caching', 'queues'],
        expert: ['scalability', 'security', 'monitoring']
      },
      'testing': {
        basic: ['unit-tests', 'integration-tests'],
        intermediate: ['e2e-tests', 'test-coverage'],
        advanced: ['performance-tests', 'security-tests'],
        expert: ['ai-testing', 'chaos-engineering']
      },
      'deployment': {
        basic: ['manual-deployment', 'environment-setup'],
        intermediate: ['automated-deployment', 'rollback'],
        advanced: ['blue-green', 'canary', 'infrastructure-as-code'],
        expert: ['multi-cloud', 'disaster-recovery', 'cost-optimization']
      },
      'monitoring': {
        basic: ['error-tracking', 'performance-metrics'],
        intermediate: ['alerting', 'dashboards'],
        advanced: ['distributed-tracing', 'anomaly-detection'],
        expert: ['predictive-analytics', 'ai-ops']
      },
      'optimization': {
        basic: ['code-review', 'performance-audit'],
        intermediate: ['bundle-optimization', 'database-optimization'],
        advanced: ['algorithm-optimization', 'infrastructure-optimization'],
        expert: ['ai-optimization', 'quantum-optimization']
      }
    };

    return `function getSpecializations(complexity) {
  const specializations = ${JSON.stringify(capabilities[agentType] || {}, null, 2)};
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };`;
  }

  handleTaskCompletion(agentId, result) {
    this.performanceMetrics.totalTasks++;
    this.performanceMetrics.successfulTasks++;
    
    // Update agent performance
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.performance.tasks_completed++;
      agent.performance.success_rate = Math.min(1.0, agent.performance.success_rate + 0.01);
    }
    
    this.emit('task:completed', { agentId, result, timestamp: new Date() });
  }

  handleTaskFailure(agentId, error) {
    this.performanceMetrics.totalTasks++;
    this.performanceMetrics.failedTasks++;
    
    // Update agent performance
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.performance.success_rate = Math.max(0.0, agent.performance.success_rate - 0.02);
    }
    
    this.emit('task:failed', { agentId, error, timestamp: new Date() });
  }

  updateAgentPerformance(agentId, metrics) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.performance = { ...agent.performance, ...metrics };
    }
    
    // Recalculate overall metrics
    this.calculateOverallPerformance();
  }

  calculateOverallPerformance() {
    let totalEfficiency = 0;
    let activeAgentCount = 0;
    
    for (const agent of this.agents.values()) {
      if (this.activeAgents.has(agent.config.id)) {
        totalEfficiency += agent.performance.efficiency_score;
        activeAgentCount++;
      }
    }
    
    this.performanceMetrics.averageEfficiency = activeAgentCount > 0 ? totalEfficiency / activeAgentCount : 0;
    
    // Calculate growth rate
    const currentAgentCount = this.agents.size;
    this.performanceMetrics.growthRate = currentAgentCount;
  }

  startMonitoringLoop() {
    setInterval(() => {
      this.monitorAgentHealth();
      this.calculateOverallPerformance();
      this.emit('metrics:updated', this.performanceMetrics);
    }, 60000); // Every minute
  }

  startOptimizationLoop() {
    setInterval(async () => {
      await this.optimizeAgentPerformance();
    }, this.config.optimizationInterval);
  }

  startGrowthAccelerationLoop() {
    setInterval(async () => {
      await this.accelerateGrowth();
    }, 30 * 60 * 1000); // Every 30 minutes
  }

  async monitorAgentHealth() {
    const now = Date.now();
    
    for (const [agentId, agent] of this.agents) {
      try {
        // Check if agent is still active
        if (!agent.active) {
          this.activeAgents.delete(agentId);
          console.log(`Agent ${agentId} marked as inactive`);
          continue;
        }
        
        // Check agent lifespan
        const agentAge = now - new Date(agent.config.created_at).getTime();
        if (agentAge > this.config.agentLifespan) {
          console.log(`Agent ${agentId} has exceeded lifespan, retiring...`);
          await this.retireAgent(agentId);
        }
        
      } catch (error) {
        console.error(`Error monitoring agent ${agentId}:`, error.message);
        await this.retireAgent(agentId);
      }
    }
  }

  async optimizeAgentPerformance() {
    console.log('🔄 Optimizing agent performance...');
    
    // Find agents that need optimization
    const agentsToOptimize = [];
    
    for (const [agentId, agent] of this.agents) {
      if (agent.performance.efficiency_score < 0.8 || agent.performance.success_rate < 0.9) {
        agentsToOptimize.push({ agentId, agent, priority: 1 - agent.performance.efficiency_score });
      }
    }
    
    // Sort by priority (lowest efficiency first)
    agentsToOptimize.sort((a, b) => a.priority - b.priority);
    
    // Optimize top agents
    const optimizationLimit = Math.min(5, agentsToOptimize.length);
    for (let i = 0; i < optimizationLimit; i++) {
      const { agentId, agent } = agentsToOptimize[i];
      await this.optimizeAgent(agentId, agent);
    }
  }

  async optimizeAgent(agentId, agent) {
    try {
      console.log(`Optimizing agent: ${agentId}`);
      
      // Apply optimization strategies
      if (agent.performance.efficiency_score < 0.8) {
        agent.performance.efficiency_score = Math.min(1.0, agent.performance.efficiency_score + 0.05);
      }
      
      if (agent.performance.success_rate < 0.9) {
        agent.performance.success_rate = Math.min(1.0, agent.performance.success_rate + 0.02);
      }
      
      // Restart agent with new optimizations
      await agent.initialize();
      
      console.log(`✅ Agent ${agentId} optimized successfully`);
      
    } catch (error) {
      console.error(`Failed to optimize agent ${agentId}:`, error.message);
    }
  }

  async accelerateGrowth() {
    console.log('🚀 Accelerating development growth...');
    
    // Calculate growth target
    const currentAgentCount = this.agents.size;
    const targetGrowth = Math.ceil(currentAgentCount * (this.config.growthTarget - 1));
    
    if (targetGrowth > 0 && this.activeAgents.size < this.config.maxConcurrentAgents) {
      const newAgentsToGenerate = Math.min(targetGrowth, this.config.maxConcurrentAgents - this.activeAgents.size);
      
      if (newAgentsToGenerate > 0) {
        console.log(`Generating ${newAgentsToGenerate} new agents for growth acceleration`);
        await this.generateNewAgents(newAgentsToGenerate);
      }
    }
    
    // Enable collaboration if we have enough agents
    if (this.activeAgents.size > 20 && this.config.collaborationEnabled) {
      await this.enableAdvancedCollaboration();
    }
  }

  async enableAdvancedCollaboration() {
    console.log('🤝 Enabling advanced agent collaboration...');
    
    // Implement collaboration protocols
    for (const [agentId, agent] of this.agents) {
      if (agent.enableCollaboration) {
        await agent.enableCollaboration();
      }
    }
    
    this.emit('collaboration:enabled', { timestamp: new Date(), agentCount: this.activeAgents.size });
  }

  async retireAgent(agentId) {
    try {
      const agent = this.agents.get(agentId);
      if (agent) {
        // Stop agent
        agent.active = false;
        
        // Remove from active set
        this.activeAgents.delete(agentId);
        
        // Remove from agents map
        this.agents.delete(agentId);
        
        console.log(`✅ Agent ${agentId} retired successfully`);
        
        // Emit retirement event
        this.emit('agent:retired', { agentId, timestamp: new Date() });
      }
    } catch (error) {
      console.error(`Error retiring agent ${agentId}:`, error.message);
    }
  }

  async stop() {
    console.log('🛑 Stopping Agent Orchestrator...');
    this.isRunning = false;
    
    // Stop all agents
    for (const [agentId, agent] of this.agents) {
      try {
        agent.active = false;
      } catch (error) {
        console.error(`Error stopping agent ${agentId}:`, error.message);
      }
    }
    
    // Clear agents
    this.agents.clear();
    this.activeAgents.clear();
    
    console.log('✅ Agent Orchestrator stopped');
    this.emit('orchestrator:stopped', { timestamp: new Date() });
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      totalAgents: this.agents.size,
      activeAgents: this.activeAgents.size,
      performanceMetrics: this.performanceMetrics,
      config: this.config,
      timestamp: new Date()
    };
  }

  async saveState() {
    try {
      const state = {
        agents: Array.from(this.agents.entries()).map(([id, agent]) => ({
          id,
          config: agent.config,
          performance: agent.performance
        })),
        performanceMetrics: this.performanceMetrics,
        timestamp: new Date()
      };
      
      const statePath = path.join(__dirname, 'config', 'orchestrator-state.json');
      fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
      
      console.log('✅ Orchestrator state saved');
    } catch (error) {
      console.error('Failed to save orchestrator state:', error.message);
    }
  }
}

module.exports = AgentOrchestrator;
