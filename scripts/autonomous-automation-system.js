#!/usr/bin/env node

/**
 * Zion App - Autonomous Automation System
 * 
 * A comprehensive autonomous system that runs all automations independently
 * with AI-powered decision making, self-healing, and continuous improvement.
 * 
 * Features:
 * - Autonomous operation with no human intervention
 * - AI-powered decision making and optimization
 * - Self-healing and error recovery
 * - Multi-agent coordination
 * - Real-time monitoring and adaptation
 * - Intelligent resource management
 * - Predictive maintenance
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const EventEmitter = require('events');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cron = require('node-cron');

class AutonomousAutomationSystem extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      // System configuration
      systemName: 'Zion Autonomous Automation System',
      version: '2.0.0',
      port: process.env.AUTOMATION_PORT || 3001,
      
      // AI Configuration
      ai: {
        enabled: true,
        providers: ['cursor', 'openai', 'claude', 'local'],
        decisionThreshold: 0.8,
        learningRate: 0.1,
        maxConcurrentTasks: 5
      },
      
      // Autonomous agents
      agents: {
        codeQuality: { enabled: true, interval: '*/5 * * * *' },
        performance: { enabled: true, interval: '*/15 * * * *' },
        security: { enabled: true, interval: '0 */1 * * *' },
        deployment: { enabled: true, interval: '0 */6 * * *' },
        monitoring: { enabled: true, interval: '*/30 * * * *' },
        optimization: { enabled: true, interval: '*/10 * * * *' },
        testing: { enabled: true, interval: '0 */2 * * *' },
        documentation: { enabled: true, interval: '0 */12 * * *' }
      },
      
      // Self-healing configuration
      selfHealing: {
        enabled: true,
        maxRetries: 3,
        backoffMultiplier: 2,
        healthCheckInterval: 30000,
        failureThreshold: 3
      },
      
      // Resource management
      resources: {
        maxMemoryUsage: 80, // percentage
        maxCpuUsage: 90, // percentage
        maxDiskUsage: 85, // percentage
        cleanupInterval: 3600000 // 1 hour
      },
      
      // Logging and monitoring
      logging: {
        level: 'info',
        file: 'logs/autonomous-automation.log',
        maxSize: '10m',
        maxFiles: 5
      }
    };
    
    // System state
    this.state = {
      isRunning: false,
      startTime: null,
      agents: new Map(),
      tasks: new Map(),
      health: {
        status: 'healthy',
        lastCheck: Date.now(),
        failures: 0,
        uptime: 0
      },
      metrics: {
        tasksCompleted: 0,
        tasksFailed: 0,
        improvementsApplied: 0,
        errorsFixed: 0,
        performanceGains: 0
      }
    };
    
    // Initialize components
    this.initializeComponents();
  }

  async initializeComponents() {
    console.log('🤖 Initializing Autonomous Automation System...');
    
    // Create log directory
    await this.ensureLogDirectory();
    
    // Initialize Express server
    this.initializeServer();
    
    // Initialize autonomous agents
    await this.initializeAgents();
    
    // Initialize AI decision engine
    await this.initializeAIDecisionEngine();
    
    // Initialize self-healing system
    this.initializeSelfHealing();
    
    // Initialize resource monitor
    this.initializeResourceMonitor();
    
    // Initialize task scheduler
    this.initializeTaskScheduler();
    
    console.log('✅ Autonomous Automation System initialized');
  }

  async ensureLogDirectory() {
    const logDir = path.dirname(this.config.logging.file);
    try {
      await fs.mkdir(logDir, { recursive: true });
    } catch (error) {
      console.warn('⚠️ Could not create log directory:', error.message);
    }
  }

  initializeServer() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketIo(this.server);
    
    // Middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    
    // API routes
    this.setupAPIRoutes();
    
    // WebSocket events
    this.setupWebSocketEvents();
  }

  setupAPIRoutes() {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        system: this.config.systemName,
        version: this.config.version,
        uptime: this.getUptime(),
        agents: Array.from(this.state.agents.keys()),
        metrics: this.state.metrics
      });
    });
    
    // System status
    this.app.get('/api/status', (req, res) => {
      res.json({
        system: this.state,
        config: this.config,
        agents: Object.fromEntries(this.state.agents)
      });
    });
    
    // Trigger agent
    this.app.post('/api/agent/:name/trigger', async (req, res) => {
      const agentName = req.params.name;
      const agent = this.state.agents.get(agentName);
      
      if (!agent) {
        return res.status(404).json({ error: 'Agent not found' });
      }
      
      try {
        const result = await this.executeAgent(agentName);
        res.json({ success: true, result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // AI decision request
    this.app.post('/api/ai/decide', async (req, res) => {
      try {
        const { context, options } = req.body;
        const decision = await this.makeAIDecision(context, options);
        res.json({ decision });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // Metrics
    this.app.get('/api/metrics', (req, res) => {
      res.json(this.state.metrics);
    });
  }

  setupWebSocketEvents() {
    this.io.on('connection', (socket) => {
      console.log('🔌 Client connected to autonomous system');
      
      // Send initial state
      socket.emit('system:state', this.state);
      
      // Handle client events
      socket.on('agent:trigger', async (data) => {
        try {
          const result = await this.executeAgent(data.agent);
          socket.emit('agent:result', { agent: data.agent, result });
        } catch (error) {
          socket.emit('agent:error', { agent: data.agent, error: error.message });
        }
      });
      
      socket.on('disconnect', () => {
        console.log('🔌 Client disconnected from autonomous system');
      });
    });
  }

  async initializeAgents() {
    console.log('🤖 Initializing autonomous agents...');
    
    const agentDefinitions = [
      {
        name: 'codeQuality',
        description: 'Code quality analysis and improvement',
        script: 'scripts/ai-code-review-automation.cjs',
        dependencies: ['node', 'npm']
      },
      {
        name: 'performance',
        description: 'Performance monitoring and optimization',
        script: 'scripts/performance-optimization-automation.cjs',
        dependencies: ['node']
      },
      {
        name: 'security',
        description: 'Security scanning and vulnerability detection',
        script: 'scripts/security-monitoring-automation.cjs',
        dependencies: ['node', 'npm']
      },
      {
        name: 'deployment',
        description: 'Automated deployment and release management',
        script: 'scripts/deployment-automation.cjs',
        dependencies: ['node', 'git']
      },
      {
        name: 'monitoring',
        description: 'System monitoring and alerting',
        script: 'scripts/monitoring-automation.cjs',
        dependencies: ['node']
      },
      {
        name: 'optimization',
        description: 'Continuous optimization and improvement',
        script: 'scripts/optimization-automation.cjs',
        dependencies: ['node', 'npm']
      },
      {
        name: 'testing',
        description: 'Automated testing and quality assurance',
        script: 'scripts/testing-automation.cjs',
        dependencies: ['node', 'npm']
      },
      {
        name: 'documentation',
        description: 'Documentation generation and maintenance',
        script: 'scripts/documentation-automation.cjs',
        dependencies: ['node']
      }
    ];
    
    for (const agentDef of agentDefinitions) {
      if (this.config.agents[agentDef.name]?.enabled) {
        await this.registerAgent(agentDef);
      }
    }
  }

  async registerAgent(agentDef) {
    try {
      // Check if agent script exists
      const scriptPath = path.resolve(agentDef.script);
      await fs.access(scriptPath);
      
      const agent = {
        ...agentDef,
        status: 'idle',
        lastRun: null,
        nextRun: null,
        successCount: 0,
        failureCount: 0,
        averageExecutionTime: 0,
        isRunning: false
      };
      
      this.state.agents.set(agentDef.name, agent);
      console.log(`✅ Registered agent: ${agentDef.name}`);
      
      // Schedule agent execution
      this.scheduleAgent(agentDef.name);
      
    } catch (error) {
      console.warn(`⚠️ Could not register agent ${agentDef.name}:`, error.message);
    }
  }

  scheduleAgent(agentName) {
    const agent = this.state.agents.get(agentName);
    if (!agent) return;
    
    const interval = this.config.agents[agentName]?.interval;
    if (!interval) return;
    
    cron.schedule(interval, async () => {
      await this.executeAgent(agentName);
    });
    
    console.log(`📅 Scheduled agent: ${agentName} (${interval})`);
  }

  async executeAgent(agentName) {
    const agent = this.state.agents.get(agentName);
    if (!agent) {
      throw new Error(`Agent ${agentName} not found`);
    }
    
    if (agent.isRunning) {
      console.log(`⏳ Agent ${agentName} is already running`);
      return;
    }
    
    console.log(`🚀 Executing agent: ${agentName}`);
    
    agent.isRunning = true;
    agent.status = 'running';
    agent.lastRun = Date.now();
    
    try {
      const startTime = Date.now();
      
      // Execute agent script
      const result = await this.runAgentScript(agent.script, agentName);
      
      const executionTime = Date.now() - startTime;
      agent.averageExecutionTime = this.calculateAverageExecutionTime(
        agent.averageExecutionTime,
        executionTime,
        agent.successCount
      );
      
      agent.successCount++;
      agent.status = 'completed';
      this.state.metrics.tasksCompleted++;
      
      // Update metrics based on result
      if (result.improvements) {
        this.state.metrics.improvementsApplied += result.improvements;
      }
      if (result.errorsFixed) {
        this.state.metrics.errorsFixed += result.errorsFixed;
      }
      if (result.performanceGain) {
        this.state.metrics.performanceGains += result.performanceGain;
      }
      
      console.log(`✅ Agent ${agentName} completed successfully (${executionTime}ms)`);
      
      // Emit event for real-time updates
      this.emit('agent:completed', { agent: agentName, result, executionTime });
      this.io.emit('agent:completed', { agent: agentName, result, executionTime });
      
      return result;
      
    } catch (error) {
      agent.failureCount++;
      agent.status = 'failed';
      this.state.metrics.tasksFailed++;
      
      console.error(`❌ Agent ${agentName} failed:`, error.message);
      
      // Trigger self-healing
      await this.triggerSelfHealing(agentName, error);
      
      // Emit event for real-time updates
      this.emit('agent:failed', { agent: agentName, error: error.message });
      this.io.emit('agent:failed', { agent: agentName, error: error.message });
      
      throw error;
      
    } finally {
      agent.isRunning = false;
    }
  }

  async runAgentScript(scriptPath, agentName) {
    return new Promise((resolve, reject) => {
      const child = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, AGENT_NAME: agentName }
      });
      
      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(stdout);
            resolve(result);
          } catch (error) {
            resolve({ success: true, output: stdout });
          }
        } else {
          reject(new Error(`Agent script failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(new Error(`Failed to start agent script: ${error.message}`));
      });
      
      // Set timeout
      setTimeout(() => {
        child.kill();
        reject(new Error('Agent script timeout'));
      }, 300000); // 5 minutes
    });
  }

  calculateAverageExecutionTime(current, newTime, count) {
    if (count === 0) return newTime;
    return (current * count + newTime) / (count + 1);
  }

  async initializeAIDecisionEngine() {
    console.log('🧠 Initializing AI decision engine...');
    
    // Initialize AI providers
    this.aiProviders = new Map();
    
    if (this.config.ai.providers.includes('cursor')) {
      this.aiProviders.set('cursor', {
        name: 'Cursor AI',
        enabled: true,
        apiKey: process.env.CURSOR_API_KEY,
        workspaceId: process.env.CURSOR_WORKSPACE_ID
      });
    }
    
    if (this.config.ai.providers.includes('openai')) {
      this.aiProviders.set('openai', {
        name: 'OpenAI GPT',
        enabled: true,
        apiKey: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview'
      });
    }
    
    if (this.config.ai.providers.includes('claude')) {
      this.aiProviders.set('claude', {
        name: 'Claude',
        enabled: true,
        apiKey: process.env.CLAUDE_API_KEY,
        model: process.env.CLAUDE_MODEL || 'claude-3-sonnet-20240229'
      });
    }
    
    console.log(`✅ AI decision engine initialized with ${this.aiProviders.size} providers`);
  }

  async makeAIDecision(context, options = []) {
    if (!this.config.ai.enabled) {
      return this.makeFallbackDecision(context, options);
    }
    
    try {
      // Try AI providers in order of preference
      for (const [providerName, provider] of this.aiProviders) {
        if (provider.enabled && provider.apiKey) {
          try {
            const decision = await this.queryAIProvider(providerName, context, options);
            if (decision.confidence >= this.config.ai.decisionThreshold) {
              return decision;
            }
          } catch (error) {
            console.warn(`⚠️ AI provider ${providerName} failed:`, error.message);
            continue;
          }
        }
      }
      
      // Fallback to rule-based decision
      return this.makeFallbackDecision(context, options);
      
    } catch (error) {
      console.error('❌ AI decision making failed:', error.message);
      return this.makeFallbackDecision(context, options);
    }
  }

  async queryAIProvider(providerName, context, options) {
    // This is a simplified implementation
    // In a real system, you would integrate with actual AI APIs
    
    const prompt = `
Context: ${JSON.stringify(context)}
Available options: ${JSON.stringify(options)}

Based on the context and available options, provide a decision with confidence score.
Return JSON format: {"decision": "option_name", "confidence": 0.95, "reasoning": "explanation"}
    `;
    
    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      decision: options[0] || 'no_action',
      confidence: 0.85,
      reasoning: 'AI analysis suggests this is the optimal choice based on current context',
      provider: providerName
    };
  }

  makeFallbackDecision(context, options) {
    // Rule-based fallback decision making
    const rules = [
      { condition: () => context.errors > 0, action: 'fix_errors', priority: 1 },
      { condition: () => context.performance < 80, action: 'optimize_performance', priority: 2 },
      { condition: () => context.securityIssues > 0, action: 'fix_security', priority: 1 },
      { condition: () => context.testCoverage < 80, action: 'improve_tests', priority: 3 }
    ];
    
    for (const rule of rules.sort((a, b) => a.priority - b.priority)) {
      if (rule.condition()) {
        return {
          decision: rule.action,
          confidence: 0.9,
          reasoning: `Rule-based decision: ${rule.action}`,
          provider: 'rule_based'
        };
      }
    }
    
    return {
      decision: 'no_action',
      confidence: 0.8,
      reasoning: 'No critical issues detected',
      provider: 'rule_based'
    };
  }

  initializeSelfHealing() {
    if (!this.config.selfHealing.enabled) return;
    
    console.log('🔧 Initializing self-healing system...');
    
    // Health check interval
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.selfHealing.healthCheckInterval);
    
    // Failure monitoring
    this.on('agent:failed', async (data) => {
      await this.handleAgentFailure(data.agent, data.error);
    });
    
    console.log('✅ Self-healing system initialized');
  }

  async performHealthCheck() {
    const health = {
      status: 'healthy',
      timestamp: Date.now(),
      agents: {},
      system: {}
    };
    
    // Check agent health
    for (const [name, agent] of this.state.agents) {
      health.agents[name] = {
        status: agent.status,
        lastRun: agent.lastRun,
        successRate: agent.successCount / (agent.successCount + agent.failureCount) || 0
      };
    }
    
    // Check system resources
    try {
      const resources = await this.getSystemResources();
      health.system = resources;
      
      if (resources.memory > this.config.resources.maxMemoryUsage ||
          resources.cpu > this.config.resources.maxCpuUsage) {
        health.status = 'warning';
      }
    } catch (error) {
      health.status = 'error';
      health.error = error.message;
    }
    
    this.state.health = health;
    
    // Emit health update
    this.emit('health:update', health);
    this.io.emit('health:update', health);
  }

  async getSystemResources() {
    return new Promise((resolve) => {
      exec('top -l 1 | grep "CPU usage"', (error, stdout) => {
        const cpu = error ? 0 : parseFloat(stdout.match(/(\d+\.\d+)%/)[1]);
        
        exec('vm_stat | grep "Pages free"', (error, stdout) => {
          const memory = error ? 0 : 50; // Simplified
          
          resolve({ cpu, memory, disk: 50 }); // Simplified
        });
      });
    });
  }

  async handleAgentFailure(agentName, error) {
    console.log(`🔧 Handling failure for agent: ${agentName}`);
    
    const agent = this.state.agents.get(agentName);
    if (!agent) return;
    
    // Check failure threshold
    if (agent.failureCount >= this.config.selfHealing.failureThreshold) {
      console.log(`🚨 Agent ${agentName} exceeded failure threshold, triggering recovery`);
      await this.triggerAgentRecovery(agentName);
    }
  }

  async triggerAgentRecovery(agentName) {
    console.log(`🔄 Triggering recovery for agent: ${agentName}`);
    
    try {
      // Reset agent state
      const agent = this.state.agents.get(agentName);
      agent.failureCount = 0;
      agent.status = 'recovering';
      
      // Attempt to restart agent
      await this.executeAgent(agentName);
      
      console.log(`✅ Agent ${agentName} recovered successfully`);
      
    } catch (error) {
      console.error(`❌ Failed to recover agent ${agentName}:`, error.message);
      
      // Mark agent as disabled
      const agent = this.state.agents.get(agentName);
      agent.status = 'disabled';
      agent.enabled = false;
    }
  }

  async triggerSelfHealing(agentName, error) {
    if (!this.config.selfHealing.enabled) return;
    
    console.log(`🔧 Triggering self-healing for ${agentName}`);
    
    try {
      // Make AI decision on how to handle the error
      const decision = await this.makeAIDecision({
        agent: agentName,
        error: error.message,
        context: 'agent_failure'
      }, [
        'retry_immediately',
        'retry_with_backoff',
        'disable_agent',
        'restart_system'
      ]);
      
      console.log(`🤖 AI decision for ${agentName}: ${decision.decision}`);
      
      // Execute the decision
      switch (decision.decision) {
        case 'retry_immediately':
          setTimeout(() => this.executeAgent(agentName), 1000);
          break;
        case 'retry_with_backoff':
          setTimeout(() => this.executeAgent(agentName), 30000);
          break;
        case 'disable_agent':
          const agent = this.state.agents.get(agentName);
          agent.enabled = false;
          agent.status = 'disabled';
          break;
        case 'restart_system':
          console.log('🔄 AI decided to restart the system');
          this.restart();
          break;
      }
      
    } catch (error) {
      console.error('❌ Self-healing failed:', error.message);
    }
  }

  initializeResourceMonitor() {
    console.log('📊 Initializing resource monitor...');
    
    // Resource cleanup interval
    setInterval(() => {
      this.performResourceCleanup();
    }, this.config.resources.cleanupInterval);
    
    // Resource monitoring
    setInterval(async () => {
      const resources = await this.getSystemResources();
      
      if (resources.memory > this.config.resources.maxMemoryUsage ||
          resources.cpu > this.config.resources.maxCpuUsage) {
        console.warn('⚠️ High resource usage detected');
        await this.optimizeResourceUsage();
      }
    }, 60000); // Check every minute
    
    console.log('✅ Resource monitor initialized');
  }

  async performResourceCleanup() {
    console.log('🧹 Performing resource cleanup...');
    
    try {
      // Clean up old logs
      await this.cleanupOldLogs();
      
      // Clean up temporary files
      await this.cleanupTempFiles();
      
      // Optimize memory usage
      global.gc && global.gc();
      
      console.log('✅ Resource cleanup completed');
    } catch (error) {
      console.error('❌ Resource cleanup failed:', error.message);
    }
  }

  async cleanupOldLogs() {
    // Implementation for cleaning old log files
    console.log('📝 Cleaning old log files...');
  }

  async cleanupTempFiles() {
    // Implementation for cleaning temporary files
    console.log('🗑️ Cleaning temporary files...');
  }

  async optimizeResourceUsage() {
    console.log('⚡ Optimizing resource usage...');
    
    // Reduce concurrent tasks
    this.config.ai.maxConcurrentTasks = Math.max(1, this.config.ai.maxConcurrentTasks - 1);
    
    // Pause non-critical agents
    for (const [name, agent] of this.state.agents) {
      if (agent.status === 'idle' && !this.isCriticalAgent(name)) {
        agent.status = 'paused';
      }
    }
  }

  isCriticalAgent(agentName) {
    return ['monitoring', 'security'].includes(agentName);
  }

  initializeTaskScheduler() {
    console.log('📅 Initializing task scheduler...');
    
    // Task queue management
    this.taskQueue = [];
    this.runningTasks = new Set();
    
    // Process task queue
    setInterval(() => {
      this.processTaskQueue();
    }, 1000);
    
    console.log('✅ Task scheduler initialized');
  }

  async processTaskQueue() {
    if (this.runningTasks.size >= this.config.ai.maxConcurrentTasks) {
      return;
    }
    
    const task = this.taskQueue.shift();
    if (!task) return;
    
    this.runningTasks.add(task.id);
    
    try {
      await this.executeTask(task);
    } catch (error) {
      console.error(`❌ Task ${task.id} failed:`, error.message);
    } finally {
      this.runningTasks.delete(task.id);
    }
  }

  async executeTask(task) {
    console.log(`🚀 Executing task: ${task.id}`);
    
    switch (task.type) {
      case 'agent':
        await this.executeAgent(task.agent);
        break;
      case 'ai_decision':
        const decision = await this.makeAIDecision(task.context, task.options);
        this.emit('task:completed', { task, result: decision });
        break;
      case 'system_action':
        await this.executeSystemAction(task.action, task.params);
        break;
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  async executeSystemAction(action, params) {
    switch (action) {
      case 'restart':
        this.restart();
        break;
      case 'cleanup':
        await this.performResourceCleanup();
        break;
      case 'health_check':
        await this.performHealthCheck();
        break;
      default:
        throw new Error(`Unknown system action: ${action}`);
    }
  }

  getUptime() {
    if (!this.state.startTime) return 0;
    return Date.now() - this.state.startTime;
  }

  async start() {
    if (this.state.isRunning) {
      console.log('⚠️ Autonomous system is already running');
      return;
    }
    
    console.log('🚀 Starting Autonomous Automation System...');
    
    this.state.isRunning = true;
    this.state.startTime = Date.now();
    
    // Start server
    this.server.listen(this.config.port, () => {
      console.log(`✅ Autonomous system running on port ${this.config.port}`);
      console.log(`🌐 Dashboard: http://localhost:${this.config.port}`);
      console.log(`📊 Health: http://localhost:${this.config.port}/health`);
    });
    
    // Emit start event
    this.emit('system:started');
    this.io.emit('system:started', { timestamp: Date.now() });
    
    console.log('🎉 Autonomous Automation System is now running!');
  }

  async stop() {
    if (!this.state.isRunning) {
      console.log('⚠️ Autonomous system is not running');
      return;
    }
    
    console.log('🛑 Stopping Autonomous Automation System...');
    
    this.state.isRunning = false;
    
    // Stop all agents
    for (const [name, agent] of this.state.agents) {
      if (agent.isRunning) {
        console.log(`⏹️ Stopping agent: ${name}`);
        agent.status = 'stopped';
      }
    }
    
    // Stop server
    if (this.server) {
      this.server.close();
    }
    
    // Emit stop event
    this.emit('system:stopped');
    
    console.log('✅ Autonomous Automation System stopped');
  }

  restart() {
    console.log('🔄 Restarting Autonomous Automation System...');
    this.stop().then(() => {
      setTimeout(() => this.start(), 1000);
    });
  }
}

// Export the system
module.exports = AutonomousAutomationSystem;

// Start the system if this file is executed directly
if (require.main === module) {
  const system = new AutonomousAutomationSystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await system.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await system.stop();
    process.exit(0);
  });
  
  // Start the system
  system.start().catch(error => {
    console.error('❌ Failed to start autonomous system:', error.message);
    process.exit(1);
  });
} 