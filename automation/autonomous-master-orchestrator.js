const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const axios = require('axios');
const puppeteer = require('puppeteer');

class AutonomousMasterOrchestrator {
  constructor() {
    this.agents = new Map();
    this.workQueue = [];
    this.analytics = {
      agentsCreated: 0,
      tasksCompleted: 0,
      errorsFixed: 0,
      contentGenerated: 0,
      pagesAnalyzed: 0,
      improvementsMade: 0
    };
    this.config = {
      maxConcurrentAgents: 10,
      agentTimeout: 300000, // 5 minutes
      retryAttempts: 3,
      baseUrl: 'https://ziontechgroup.netlify.app',
      targetUrl: 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d'
    };
    this.logFile = path.join(__dirname, 'logs', 'master-orchestrator.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async initialize() {
    this.log('Initializing Autonomous Master Orchestrator...');
    
    // Load existing analytics
    await this.loadAnalytics();
    
    // Start the continuous improvement loop
    this.startContinuousLoop();
    
    // Initialize agent types
    await this.initializeAgentTypes();
    
    this.log('Master Orchestrator initialized successfully');
  }

  async loadAnalytics() {
    const analyticsFile = path.join(__dirname, 'master-analytics.json');
    if (fs.existsSync(analyticsFile)) {
      try {
        const data = fs.readFileSync(analyticsFile, 'utf8');
        this.analytics = { ...this.analytics, ...JSON.parse(data) };
      } catch (error) {
        this.log(`Error loading analytics: ${error.message}`, 'ERROR');
      }
    }
  }

  async saveAnalytics() {
    const analyticsFile = path.join(__dirname, 'master-analytics.json');
    try {
      fs.writeFileSync(analyticsFile, JSON.stringify(this.analytics, null, 2));
    } catch (error) {
      this.log(`Error saving analytics: ${error.message}`, 'ERROR');
    }
  }

  async initializeAgentTypes() {
    this.agentTypes = {
      'website-analyzer': {
        script: 'website-analyzer-agent.js',
        description: 'Analyzes website structure and identifies missing content',
        spawnInterval: 60000 // 1 minute
      },
      'content-generator': {
        script: 'content-generator-agent.js',
        description: 'Generates missing content based on analysis',
        spawnInterval: 120000 // 2 minutes
      },
      'error-fixer': {
        script: 'error-fixer-agent.js',
        description: 'Fixes errors and improves code quality',
        spawnInterval: 90000 // 1.5 minutes
      },
      'improvement-agent': {
        script: 'autonomous-improvement-agent.js',
        description: 'Continuously improves application features',
        spawnInterval: 180000 // 3 minutes
      },
      'content-integrator': {
        script: 'content-integration-agent.js',
        description: 'Integrates generated content into the application',
        spawnInterval: 150000 // 2.5 minutes
      },
      'test-agent': {
        script: 'test-automation.js',
        description: 'Runs tests and validates improvements',
        spawnInterval: 300000 // 5 minutes
      }
    };
  }

  startContinuousLoop() {
    this.log('Starting continuous improvement loop...');
    
    // Main orchestration loop
    setInterval(async () => {
      await this.orchestrateWork();
    }, 30000); // Every 30 seconds

    // Agent spawning loop
    setInterval(async () => {
      await this.spawnAgents();
    }, 60000); // Every minute

    // Analytics saving loop
    setInterval(async () => {
      await this.saveAnalytics();
    }, 300000); // Every 5 minutes

    // Health check loop
    setInterval(async () => {
      await this.performHealthCheck();
    }, 120000); // Every 2 minutes
  }

  async orchestrateWork() {
    try {
      // Analyze current state
      const analysis = await this.analyzeCurrentState();
      
      // Generate work tasks
      const tasks = await this.generateTasks(analysis);
      
      // Distribute tasks to available agents
      await this.distributeTasks(tasks);
      
      // Monitor agent performance
      await this.monitorAgents();
      
      // Clean up completed agents
      await this.cleanupAgents();
      
    } catch (error) {
      this.log(`Error in orchestration loop: ${error.message}`, 'ERROR');
    }
  }

  async analyzeCurrentState() {
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        activeAgents: this.agents.size,
        pendingTasks: this.workQueue.length,
        systemHealth: await this.checkSystemHealth(),
        websiteStatus: await this.checkWebsiteStatus(),
        contentStatus: await this.analyzeContentStatus(),
        errorStatus: await this.analyzeErrorStatus()
      };

      this.log(`Current state analysis: ${JSON.stringify(analysis, null, 2)}`);
      return analysis;
    } catch (error) {
      this.log(`Error analyzing current state: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async checkSystemHealth() {
    try {
      // Check if the application is running
      const response = await axios.get(this.config.baseUrl, { timeout: 10000 });
      return {
        status: 'healthy',
        responseTime: response.headers['x-response-time'] || 'unknown',
        statusCode: response.status
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message
      };
    }
  }

  async checkWebsiteStatus() {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      
      await page.goto(this.config.baseUrl, { waitUntil: 'networkidle0' });
      
      const status = {
        title: await page.title(),
        url: page.url(),
        links: await page.evaluate(() => {
          return Array.from(document.querySelectorAll('a')).map(a => a.href);
        }),
        errors: await page.evaluate(() => {
          return window.performance.getEntriesByType('resource')
            .filter(r => r.name.includes('error') || r.name.includes('failed'))
            .map(r => r.name);
        })
      };
      
      await browser.close();
      return status;
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeContentStatus() {
    try {
      const contentDir = path.join(__dirname, 'generated-content');
      const files = fs.readdirSync(contentDir, { recursive: true });
      
      return {
        totalFiles: files.length,
        categories: this.categorizeContent(files),
        lastGenerated: await this.getLastGeneratedTime()
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async analyzeErrorStatus() {
    try {
      const logFiles = fs.readdirSync(path.join(__dirname, 'logs'))
        .filter(file => file.includes('error') || file.includes('log'));
      
      const recentErrors = [];
      for (const file of logFiles.slice(-5)) {
        const content = fs.readFileSync(path.join(__dirname, 'logs', file), 'utf8');
        const errorLines = content.split('\n').filter(line => 
          line.includes('ERROR') || line.includes('error')
        );
        recentErrors.push(...errorLines.slice(-10));
      }
      
      return {
        totalLogFiles: logFiles.length,
        recentErrors: recentErrors.length,
        errorTypes: this.categorizeErrors(recentErrors)
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  categorizeContent(files) {
    const categories = {};
    files.forEach(file => {
      const category = path.dirname(file) || 'root';
      categories[category] = (categories[category] || 0) + 1;
    });
    return categories;
  }

  categorizeErrors(errors) {
    const categories = {};
    errors.forEach(error => {
      if (error.includes('TypeError')) categories.TypeError = (categories.TypeError || 0) + 1;
      else if (error.includes('ReferenceError')) categories.ReferenceError = (categories.ReferenceError || 0) + 1;
      else if (error.includes('SyntaxError')) categories.SyntaxError = (categories.SyntaxError || 0) + 1;
      else categories.Other = (categories.Other || 0) + 1;
    });
    return categories;
  }

  async getLastGeneratedTime() {
    try {
      const lastGenFile = path.join(__dirname, 'last-content-generation.json');
      if (fs.existsSync(lastGenFile)) {
        const data = JSON.parse(fs.readFileSync(lastGenFile, 'utf8'));
        return data.timestamp;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async generateTasks(analysis) {
    const tasks = [];
    
    // Generate tasks based on analysis
    if (analysis.websiteStatus.error) {
      tasks.push({
        type: 'error-fixer',
        priority: 'high',
        description: 'Fix website accessibility issues',
        data: analysis.websiteStatus
      });
    }
    
    if (analysis.contentStatus.totalFiles < 50) {
      tasks.push({
        type: 'content-generator',
        priority: 'medium',
        description: 'Generate more content',
        data: { targetCount: 100, currentCount: analysis.contentStatus.totalFiles }
      });
    }
    
    if (analysis.errorStatus.recentErrors > 10) {
      tasks.push({
        type: 'error-fixer',
        priority: 'high',
        description: 'Fix recent errors',
        data: analysis.errorStatus
      });
    }
    
    // Always add improvement tasks
    tasks.push({
      type: 'improvement-agent',
      priority: 'medium',
      description: 'Continuous improvement',
      data: analysis
    });
    
    return tasks;
  }

  async distributeTasks(tasks) {
    for (const task of tasks) {
      // Find available agent or create new one
      let agent = this.findAvailableAgent(task.type);
      
      if (!agent) {
        agent = await this.spawnAgent(task.type);
      }
      
      if (agent) {
        agent.tasks.push(task);
        this.log(`Distributed task: ${task.description} to agent: ${agent.id}`);
      }
    }
  }

  findAvailableAgent(type) {
    for (const [id, agent] of this.agents) {
      if (agent.type === type && agent.status === 'idle' && agent.tasks.length < 3) {
        return agent;
      }
    }
    return null;
  }

  async spawnAgent(type) {
    if (this.agents.size >= this.config.maxConcurrentAgents) {
      this.log('Maximum agents reached, cannot spawn new agent', 'WARN');
      return null;
    }
    
    const agentConfig = this.agentTypes[type];
    if (!agentConfig) {
      this.log(`Unknown agent type: ${type}`, 'ERROR');
      return null;
    }
    
    const agentId = `agent-${type}-${Date.now()}`;
    const agent = {
      id: agentId,
      type: type,
      status: 'starting',
      tasks: [],
      startTime: Date.now(),
      script: agentConfig.script,
      description: agentConfig.description
    };
    
    try {
      const agentProcess = spawn('node', [path.join(__dirname, agentConfig.script)], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, AGENT_ID: agentId, AGENT_TYPE: type }
      });
      
      agent.process = agentProcess;
      agent.status = 'running';
      
      agentProcess.stdout.on('data', (data) => {
        this.log(`[${agentId}] ${data.toString().trim()}`);
      });
      
      agentProcess.stderr.on('data', (data) => {
        this.log(`[${agentId}] ERROR: ${data.toString().trim()}`, 'ERROR');
      });
      
      agentProcess.on('close', (code) => {
        this.log(`Agent ${agentId} exited with code ${code}`);
        agent.status = 'completed';
        this.analytics.agentsCreated++;
      });
      
      this.agents.set(agentId, agent);
      this.log(`Spawned agent: ${agentId} (${type})`);
      
      return agent;
    } catch (error) {
      this.log(`Error spawning agent ${agentId}: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async spawnAgents() {
    // Spawn agents based on current needs
    const needs = await this.analyzeAgentNeeds();
    
    for (const [type, count] of Object.entries(needs)) {
      for (let i = 0; i < count; i++) {
        await this.spawnAgent(type);
      }
    }
  }

  async analyzeAgentNeeds() {
    const needs = {};
    
    // Analyze current workload and determine agent needs
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'running');
    const agentCounts = {};
    
    activeAgents.forEach(agent => {
      agentCounts[agent.type] = (agentCounts[agent.type] || 0) + 1;
    });
    
    // Determine needs based on current state
    if (this.workQueue.length > 10) {
      needs['content-generator'] = 2;
      needs['error-fixer'] = 1;
    }
    
    if (this.analytics.errorsFixed < 5) {
      needs['error-fixer'] = (needs['error-fixer'] || 0) + 1;
    }
    
    if (this.analytics.contentGenerated < 20) {
      needs['content-generator'] = (needs['content-generator'] || 0) + 2;
    }
    
    // Always maintain at least one improvement agent
    if (!agentCounts['improvement-agent']) {
      needs['improvement-agent'] = 1;
    }
    
    return needs;
  }

  async monitorAgents() {
    for (const [id, agent] of this.agents) {
      // Check if agent is still responsive
      if (agent.status === 'running' && Date.now() - agent.startTime > this.config.agentTimeout) {
        this.log(`Agent ${id} timed out, terminating...`);
        if (agent.process) {
          agent.process.kill();
        }
        agent.status = 'timeout';
      }
      
      // Check agent performance
      if (agent.tasks.length > 0) {
        const completedTasks = agent.tasks.filter(task => task.status === 'completed');
        if (completedTasks.length > 0) {
          this.analytics.tasksCompleted += completedTasks.length;
          this.log(`Agent ${id} completed ${completedTasks.length} tasks`);
        }
      }
    }
  }

  async cleanupAgents() {
    const completedAgents = [];
    
    for (const [id, agent] of this.agents) {
      if (agent.status === 'completed' || agent.status === 'timeout' || agent.status === 'error') {
        completedAgents.push(id);
      }
    }
    
    for (const id of completedAgents) {
      this.agents.delete(id);
      this.log(`Cleaned up agent: ${id}`);
    }
  }

  async performHealthCheck() {
    try {
      const health = {
        timestamp: new Date().toISOString(),
        activeAgents: this.agents.size,
        systemMemory: process.memoryUsage(),
        uptime: process.uptime(),
        analytics: this.analytics
      };
      
      const healthFile = path.join(__dirname, 'health-status.json');
      fs.writeFileSync(healthFile, JSON.stringify(health, null, 2));
      
      this.log('Health check completed');
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async stop() {
    this.log('Stopping Master Orchestrator...');
    
    // Stop all agents
    for (const [id, agent] of this.agents) {
      if (agent.process) {
        agent.process.kill();
      }
    }
    
    // Save final analytics
    await this.saveAnalytics();
    
    this.log('Master Orchestrator stopped');
  }
}

// Export the orchestrator
module.exports = AutonomousMasterOrchestrator;

// If run directly, start the orchestrator
if (require.main === module) {
  const orchestrator = new AutonomousMasterOrchestrator();
  
  orchestrator.initialize().catch(error => {
    console.error('Failed to initialize orchestrator:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
} 