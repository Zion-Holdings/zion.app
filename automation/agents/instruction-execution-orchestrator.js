#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { EventEmitter } = require('events');
const GoogleDocsInstructionAgent = require('./google-docs-instruction-agent');

class InstructionExecutionOrchestrator extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      googleDocsUrl: config.googleDocsUrl || 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
      maxConcurrentTasks: config.maxConcurrentTasks || 5,
      retryAttempts: config.retryAttempts || 3,
      taskTimeout: config.taskTimeout || 300000, // 5 minutes
      ...config
    };
    
    this.agents = new Map();
    this.taskQueue = [];
    this.runningTasks = new Map();
    this.completedTasks = [];
    this.failedTasks = [];
    this.isRunning = false;
  }

  async initialize() {
    console.log('🎼 Initializing Instruction Execution Orchestrator...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Initialize Google Docs instruction agent
      const googleDocsAgent = new GoogleDocsInstructionAgent({
        googleDocsUrl: this.config.googleDocsUrl,
        checkInterval: 60000, // Check every minute
        maxRetries: this.config.retryAttempts
      });
      
      // Set up event listeners for the agent
      this.setupAgentEventListeners(googleDocsAgent);
      
      // Initialize the agent
      await googleDocsAgent.initialize();
      
      // Store the agent
      this.agents.set('google-docs', googleDocsAgent);
      
      // Start the orchestrator
      this.start();
      
      console.log('✅ Instruction Execution Orchestrator initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize Instruction Execution Orchestrator:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'automation/orchestrators/instruction-execution',
      'automation/data/orchestration',
      'automation/logs/orchestration',
      'automation/reports/orchestration'
    ];
    
    for (const dir of directories) {
      await fs.ensureDir(path.join(process.cwd(), dir));
    }
  }

  setupAgentEventListeners(agent) {
    agent.on('taskStarted', (task) => {
      console.log(`🎯 Task started: ${task.title}`);
      this.emit('taskStarted', task);
    });

    agent.on('taskCompleted', (task) => {
      console.log(`✅ Task completed: ${task.title}`);
      this.completedTasks.push(task);
      this.emit('taskCompleted', task);
      this.processNextTask();
    });

    agent.on('taskFailed', (task) => {
      console.log(`❌ Task failed: ${task.title}`);
      this.failedTasks.push(task);
      this.emit('taskFailed', task);
      this.processNextTask();
    });

    agent.on('error', (error) => {
      console.error('🚨 Agent error:', error);
      this.emit('error', error);
    });
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 Starting Instruction Execution Orchestrator...');
    
    // Start processing tasks
    this.processNextTask();
    
    // Set up periodic status checks
    this.statusInterval = setInterval(() => {
      this.checkSystemHealth();
    }, 30000); // Every 30 seconds
  }

  async processNextTask() {
    if (this.runningTasks.size >= this.config.maxConcurrentTasks) {
      return; // Max concurrent tasks reached
    }
    
    if (this.taskQueue.length === 0) {
      return; // No tasks in queue
    }
    
    const task = this.taskQueue.shift();
    const taskId = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    try {
      console.log(`🎯 Processing task: ${task.title}`);
      
      // Add to running tasks
      this.runningTasks.set(taskId, {
        ...task,
        id: taskId,
        startTime: new Date().toISOString(),
        status: 'running'
      });
      
      // Execute task based on type
      await this.executeTask(taskId, task);
      
    } catch (error) {
      console.error(`❌ Failed to process task ${task.title}:`, error);
      
      const runningTask = this.runningTasks.get(taskId);
      if (runningTask) {
        runningTask.status = 'failed';
        runningTask.error = error.message;
        runningTask.endTime = new Date().toISOString();
        this.failedTasks.push(runningTask);
        this.runningTasks.delete(taskId);
      }
    }
  }

  async executeTask(taskId, task) {
    const agent = this.agents.get('google-docs');
    if (!agent) {
      throw new Error('Google Docs agent not available');
    }
    
    // Set up timeout
    const timeout = setTimeout(() => {
      console.warn(`⏰ Task ${taskId} timed out`);
      const runningTask = this.runningTasks.get(taskId);
      if (runningTask) {
        runningTask.status = 'timeout';
        runningTask.endTime = new Date().toISOString();
        this.failedTasks.push(runningTask);
        this.runningTasks.delete(taskId);
      }
    }, this.config.taskTimeout);
    
    try {
      // Execute the task using the agent
      await agent.executeInstruction(taskId, task);
      
      // Clear timeout
      clearTimeout(timeout);
      
      // Update task status
      const runningTask = this.runningTasks.get(taskId);
      if (runningTask) {
        runningTask.status = 'completed';
        runningTask.endTime = new Date().toISOString();
        this.completedTasks.push(runningTask);
        this.runningTasks.delete(taskId);
      }
      
    } catch (error) {
      clearTimeout(timeout);
      throw error;
    }
  }

  async checkSystemHealth() {
    const health = {
      timestamp: new Date().toISOString(),
      orchestrator: {
        isRunning: this.isRunning,
        queueLength: this.taskQueue.length,
        runningTasks: this.runningTasks.size,
        completedTasks: this.completedTasks.length,
        failedTasks: this.failedTasks.length
      },
      agents: {}
    };
    
    // Check agent health
    for (const [name, agent] of this.agents) {
      health.agents[name] = agent.getStatus();
    }
    
    // Save health report
    const healthFile = path.join(process.cwd(), 'automation/logs/orchestration/health.json');
    await fs.writeJson(healthFile, health, { spaces: 2 });
    
    // Emit health event
    this.emit('healthCheck', health);
    
    return health;
  }

  async addTask(task) {
    console.log(`📝 Adding task to queue: ${task.title}`);
    this.taskQueue.push(task);
    
    // Try to process next task
    this.processNextTask();
  }

  async stop() {
    console.log('🛑 Stopping Instruction Execution Orchestrator...');
    
    this.isRunning = false;
    
    // Stop all agents
    for (const [name, agent] of this.agents) {
      await agent.stop();
    }
    
    // Clear intervals
    if (this.statusInterval) {
      clearInterval(this.statusInterval);
    }
    
    console.log('✅ Instruction Execution Orchestrator stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      queueLength: this.taskQueue.length,
      runningTasks: this.runningTasks.size,
      completedTasks: this.completedTasks.length,
      failedTasks: this.failedTasks.length,
      agents: Object.fromEntries(
        Array.from(this.agents.entries()).map(([name, agent]) => [name, agent.getStatus()])
      )
    };
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      performance: {
        totalTasks: this.completedTasks.length + this.failedTasks.length,
        successRate: this.completedTasks.length + this.failedTasks.length > 0
          ? (this.completedTasks.length / (this.completedTasks.length + this.failedTasks.length) * 100).toFixed(2)
          : 0,
        averageTaskTime: this.calculateAverageTaskTime()
      },
      recentTasks: {
        completed: this.completedTasks.slice(-10),
        failed: this.failedTasks.slice(-10)
      }
    };
    
    const reportFile = path.join(process.cwd(), 'automation/reports/orchestration/report.json');
    await fs.writeJson(reportFile, report, { spaces: 2 });
    
    return report;
  }

  calculateAverageTaskTime() {
    const completedTasks = this.completedTasks.filter(task => task.startTime && task.endTime);
    
    if (completedTasks.length === 0) return 0;
    
    const totalTime = completedTasks.reduce((sum, task) => {
      const start = new Date(task.startTime);
      const end = new Date(task.endTime);
      return sum + (end - start);
    }, 0);
    
    return totalTime / completedTasks.length;
  }

  async createSpecializedAgent(taskType, config = {}) {
    console.log(`🤖 Creating specialized agent for: ${taskType}`);
    
    // Create agent based on task type
    let agent;
    
    switch (taskType) {
      case 'content-generation':
        agent = await this.createContentGenerationAgent(config);
        break;
      case 'development':
        agent = await this.createDevelopmentAgent(config);
        break;
      case 'deployment':
        agent = await this.createDeploymentAgent(config);
        break;
      case 'marketing':
        agent = await this.createMarketingAgent(config);
        break;
      default:
        agent = await this.createGenericAgent(taskType, config);
    }
    
    if (agent) {
      this.agents.set(taskType, agent);
      this.setupAgentEventListeners(agent);
      await agent.initialize();
    }
    
    return agent;
  }

  async createContentGenerationAgent(config) {
    // Implementation for content generation agent
    console.log('📝 Creating content generation agent...');
    return null; // Placeholder
  }

  async createDevelopmentAgent(config) {
    // Implementation for development agent
    console.log('🔧 Creating development agent...');
    return null; // Placeholder
  }

  async createDeploymentAgent(config) {
    // Implementation for deployment agent
    console.log('🚀 Creating deployment agent...');
    return null; // Placeholder
  }

  async createMarketingAgent(config) {
    // Implementation for marketing agent
    console.log('📢 Creating marketing agent...');
    return null; // Placeholder
  }

  async createGenericAgent(taskType, config) {
    // Implementation for generic agent
    console.log(`🤖 Creating generic agent for: ${taskType}`);
    return null; // Placeholder
  }
}

module.exports = InstructionExecutionOrchestrator;


// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down instruction-execution-orchestrator gracefully...');
  if (this.isRunning) {
    this.isRunning = false;
  }
  process.exit(0);
});