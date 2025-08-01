const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const WorkloadOrchestrator = require('./workload-orchestrator');

class ContinuousAgentCreator {
  constructor() {
    this.orchestrator = new WorkloadOrchestrator();
    this.spawnedProcesses = new Map();
    this.agentTemplates = new Map();
    this.creationMetrics = {
      agentsCreated: 0,
      orchestratorsCreated: 0,
      processesSpawned: 0,
      failures: 0
    };
    
    this.config = {
      maxProcesses: 50,
      spawnInterval: 10000, // 10 seconds
      healthCheckInterval: 30000, // 30 seconds
      autoSpawnThreshold: 0.7,
      processTimeout: 300000 // 5 minutes
    };
    
    this.loadConfiguration();
    this.initializeTemplates();
    this.startContinuousCreation();
  }

  loadConfiguration() {
    const configPath = path.join(__dirname, 'creator-config.json');
    if (fs.existsSync(configPath)) {
      const savedConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      this.config = { ...this.config, ...savedConfig };
    }
  }

  saveConfiguration() {
    const configPath = path.join(__dirname, 'creator-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }

  initializeTemplates() {
    // Define agent templates
    this.agentTemplates.set('content-generator', {
      type: 'content',
      capabilities: ['generateContent', 'analyzeContent', 'optimizeSEO'],
      workloadTypes: ['blog', 'product', 'service', 'landing'],
      spawnScript: 'content-generator-agent.js'
    });

    this.agentTemplates.set('analytics-processor', {
      type: 'analytics',
      capabilities: ['analyzePerformance', 'generateReports', 'trackMetrics'],
      workloadTypes: ['performance', 'user-behavior', 'content', 'seo'],
      spawnScript: 'analytics-agent.js'
    });

    this.agentTemplates.set('improvement-agent', {
      type: 'improvement',
      capabilities: ['fixErrors', 'optimizeCode', 'improvePerformance'],
      workloadTypes: ['code', 'performance', 'seo', 'ux'],
      spawnScript: 'improvement-agent.js'
    });

    this.agentTemplates.set('integration-agent', {
      type: 'integration',
      capabilities: ['integrateAPIs', 'syncData', 'connectServices'],
      workloadTypes: ['api', 'database', 'service', 'workflow'],
      spawnScript: 'integration-agent.js'
    });

    this.agentTemplates.set('orchestrator', {
      type: 'orchestrator',
      capabilities: ['distributeWorkload', 'manageAgents', 'monitorPerformance'],
      workloadTypes: ['coordination', 'management', 'monitoring'],
      spawnScript: 'workload-orchestrator.js'
    });
  }

  startContinuousCreation() {
    // Start continuous agent creation
    setInterval(() => {
      this.evaluateAndSpawn();
    }, this.config.spawnInterval);

    // Monitor spawned processes
    setInterval(() => {
      this.monitorProcesses();
    }, this.config.healthCheckInterval);

    // Save metrics periodically
    setInterval(() => {
      this.saveMetrics();
    }, 60000);

    console.log('[ContinuousAgentCreator] Started continuous agent creation');
  }

  async evaluateAndSpawn() {
    try {
      const systemStatus = this.orchestrator.factory.getSystemStatus();
      const orchestratorStatus = this.getOrchestratorStatus();
      
      // Check if we need to spawn new agents
      if (this.shouldSpawnAgent(systemStatus)) {
        await this.spawnAgent();
      }
      
      // Check if we need to spawn new orchestrators
      if (this.shouldSpawnOrchestrator(orchestratorStatus)) {
        await this.spawnOrchestrator();
      }
      
    } catch (error) {
      console.error('[ContinuousAgentCreator] Error in evaluation:', error);
      this.creationMetrics.failures++;
    }
  }

  shouldSpawnAgent(systemStatus) {
    const activeAgents = systemStatus.activeAgents;
    const totalAgents = systemStatus.totalAgents;
    const utilizationRate = activeAgents / Math.max(totalAgents, 1);
    
    return utilizationRate > this.config.autoSpawnThreshold && 
           this.spawnedProcesses.size < this.config.maxProcesses;
  }

  shouldSpawnOrchestrator(orchestratorStatus) {
    const queueLength = orchestratorStatus.queueLength;
    const activeTasks = orchestratorStatus.activeTasks;
    const maxConcurrentTasks = this.orchestrator.config.maxConcurrentTasks;
    
    return (queueLength > 5 || activeTasks / maxConcurrentTasks > 0.8) &&
           this.spawnedProcesses.size < this.config.maxProcesses;
  }

  async spawnAgent() {
    const templateKeys = Array.from(this.agentTemplates.keys())
      .filter(key => key !== 'orchestrator');
    
    const randomTemplate = templateKeys[Math.floor(Math.random() * templateKeys.length)];
    const template = this.agentTemplates.get(randomTemplate);
    
    const processId = `agent-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    try {
      const agentProcess = await this.createAgentProcess(processId, template);
      
      this.spawnedProcesses.set(processId, {
        type: 'agent',
        template: randomTemplate,
        process: agentProcess,
        createdAt: Date.now(),
        status: 'running'
      });
      
      this.creationMetrics.agentsCreated++;
      console.log(`[ContinuousAgentCreator] Spawned agent: ${processId} (${randomTemplate})`);
      
    } catch (error) {
      console.error(`[ContinuousAgentCreator] Failed to spawn agent ${processId}:`, error);
      this.creationMetrics.failures++;
    }
  }

  async spawnOrchestrator() {
    const processId = `orchestrator-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    try {
      const orchestratorProcess = await this.createOrchestratorProcess(processId);
      
      this.spawnedProcesses.set(processId, {
        type: 'orchestrator',
        template: 'orchestrator',
        process: orchestratorProcess,
        createdAt: Date.now(),
        status: 'running'
      });
      
      this.creationMetrics.orchestratorsCreated++;
      console.log(`[ContinuousAgentCreator] Spawned orchestrator: ${processId}`);
      
    } catch (error) {
      console.error(`[ContinuousAgentCreator] Failed to spawn orchestrator ${processId}:`, error);
      this.creationMetrics.failures++;
    }
  }

  async createAgentProcess(processId, template) {
    const agentScript = this.generateAgentScript(processId, template);
    const scriptPath = path.join(__dirname, 'temp', `${processId}.js`);
    
    // Ensure temp directory exists
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    fs.writeFileSync(scriptPath, agentScript);
    
    return new Promise((resolve, reject) => {
      const process = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: true
      });
      
      process.on('error', (error) => {
        reject(error);
      });
      
      process.on('spawn', () => {
        this.creationMetrics.processesSpawned++;
        resolve(process);
      });
      
      // Set timeout for process startup
      setTimeout(() => {
        if (process.exitCode === null) {
          resolve(process);
        } else {
          reject(new Error('Process failed to start'));
        }
      }, 5000);
    });
  }

  async createOrchestratorProcess(processId) {
    const orchestratorScript = this.generateOrchestratorScript(processId);
    const scriptPath = path.join(__dirname, 'temp', `${processId}.js`);
    
    // Ensure temp directory exists
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    fs.writeFileSync(scriptPath, orchestratorScript);
    
    return new Promise((resolve, reject) => {
      const process = spawn('node', [scriptPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: true
      });
      
      process.on('error', (error) => {
        reject(error);
      });
      
      process.on('spawn', () => {
        this.creationMetrics.processesSpawned++;
        resolve(process);
      });
      
      // Set timeout for process startup
      setTimeout(() => {
        if (process.exitCode === null) {
          resolve(process);
        } else {
          reject(new Error('Process failed to start'));
        }
      }, 5000);
    });
  }

  generateAgentScript(processId, template) {
    return `
const fs = require('fs');
const path = require('path');

class ${template.type.charAt(0).toUpperCase() + template.type.slice(1)}Agent {
  constructor(processId) {
    this.processId = processId;
    this.template = ${JSON.stringify(template)};
    this.status = 'initializing';
    this.performance = {
      tasksCompleted: 0,
      errors: 0,
      startTime: Date.now()
    };
    
    this.initialize();
  }

  async initialize() {
    try {
      console.log(\`[Agent \${this.processId}] Initializing...\`);
      
      // Initialize capabilities
      this.capabilities = this.template.capabilities;
      this.workloadTypes = this.template.workloadTypes;
      
      this.status = 'ready';
      console.log(\`[Agent \${this.processId}] Ready for workload\`);
      
      // Start processing
      this.startProcessing();
      
    } catch (error) {
      console.error(\`[Agent \${this.processId}] Initialization error:\`, error);
      this.status = 'error';
      this.performance.errors++;
    }
  }

  async startProcessing() {
    while (this.status === 'ready') {
      try {
        const task = await this.generateTask();
        if (task) {
          await this.processTask(task);
        } else {
          await this.sleep(5000);
        }
      } catch (error) {
        console.error(\`[Agent \${this.processId}] Processing error:\`, error);
        this.performance.errors++;
        await this.sleep(1000);
      }
    }
  }

  async generateTask() {
    const randomType = this.workloadTypes[Math.floor(Math.random() * this.workloadTypes.length)];
    
    return {
      type: this.template.type,
      subtype: randomType,
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        target: randomType,
        parameters: {}
      }
    };
  }

  async processTask(task) {
    const startTime = Date.now();
    
    try {
      console.log(\`[Agent \${this.processId}] Processing task: \${task.type} - \${task.subtype}\`);
      
      // Simulate task processing
      await this.sleep(Math.random() * 3000 + 1000);
      
      const processingTime = Date.now() - startTime;
      this.performance.tasksCompleted++;
      
      console.log(\`[Agent \${this.processId}] Task completed successfully\`);
      
    } catch (error) {
      console.error(\`[Agent \${this.processId}] Task processing error:\`, error);
      this.performance.errors++;
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.status = 'stopped';
    console.log(\`[Agent \${this.processId}] Stopped\`);
  }
}

// Initialize agent
const agent = new ${template.type.charAt(0).toUpperCase() + template.type.slice(1)}Agent('${processId}');

// Handle process termination
process.on('SIGINT', () => {
  console.log(\`[Agent ${processId}] Received SIGINT, shutting down...\`);
  agent.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(\`[Agent ${processId}] Received SIGTERM, shutting down...\`);
  agent.stop();
  process.exit(0);
});
`;
  }

  generateOrchestratorScript(processId) {
    return `
const fs = require('fs');
const path = require('path');

class WorkloadOrchestrator {
  constructor(processId) {
    this.processId = processId;
    this.status = 'initializing';
    this.workloadQueue = [];
    this.activeTasks = new Map();
    this.performance = {
      tasksDistributed: 0,
      errors: 0,
      startTime: Date.now()
    };
    
    this.initialize();
  }

  async initialize() {
    try {
      console.log(\`[Orchestrator \${this.processId}] Initializing...\`);
      
      this.status = 'ready';
      console.log(\`[Orchestrator \${this.processId}] Ready for workload distribution\`);
      
      // Start processing
      this.startProcessing();
      
    } catch (error) {
      console.error(\`[Orchestrator \${this.processId}] Initialization error:\`, error);
      this.status = 'error';
      this.performance.errors++;
    }
  }

  async startProcessing() {
    while (this.status === 'ready') {
      try {
        const workload = await this.generateWorkload();
        if (workload) {
          await this.distributeWorkload(workload);
        } else {
          await this.sleep(5000);
        }
      } catch (error) {
        console.error(\`[Orchestrator \${this.processId}] Processing error:\`, error);
        this.performance.errors++;
        await this.sleep(1000);
      }
    }
  }

  async generateWorkload() {
    const workloadTypes = ['content-generation', 'analytics', 'improvement', 'integration'];
    const randomType = workloadTypes[Math.floor(Math.random() * workloadTypes.length)];
    
    return {
      type: randomType,
      subtype: 'task',
      priority: Math.floor(Math.random() * 5) + 1,
      data: {
        target: 'system',
        parameters: {}
      }
    };
  }

  async distributeWorkload(workload) {
    const startTime = Date.now();
    
    try {
      console.log(\`[Orchestrator \${this.processId}] Distributing workload: \${workload.type}\`);
      
      // Simulate workload distribution
      await this.sleep(Math.random() * 2000 + 500);
      
      const processingTime = Date.now() - startTime;
      this.performance.tasksDistributed++;
      
      console.log(\`[Orchestrator \${this.processId}] Workload distributed successfully\`);
      
    } catch (error) {
      console.error(\`[Orchestrator \${this.processId}] Distribution error:\`, error);
      this.performance.errors++;
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.status = 'stopped';
    console.log(\`[Orchestrator \${this.processId}] Stopped\`);
  }
}

// Initialize orchestrator
const orchestrator = new WorkloadOrchestrator('${processId}');

// Handle process termination
process.on('SIGINT', () => {
  console.log(\`[Orchestrator ${processId}] Received SIGINT, shutting down...\`);
  orchestrator.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(\`[Orchestrator ${processId}] Received SIGTERM, shutting down...\`);
  orchestrator.stop();
  process.exit(0);
});
`;
  }

  monitorProcesses() {
    const now = Date.now();
    
    this.spawnedProcesses.forEach((processInfo, processId) => {
      const process = processInfo.process;
      const age = now - processInfo.createdAt;
      
      // Check if process is still running
      if (process.exitCode !== null) {
        console.log(`[ContinuousAgentCreator] Process ${processId} has exited`);
        this.spawnedProcesses.delete(processId);
        return;
      }
      
      // Check for timeout
      if (age > this.config.processTimeout) {
        console.log(`[ContinuousAgentCreator] Process ${processId} timed out, terminating`);
        process.kill('SIGTERM');
        this.spawnedProcesses.delete(processId);
        return;
      }
      
      // Update status based on process health
      if (process.connected) {
        processInfo.status = 'running';
      } else {
        processInfo.status = 'disconnected';
      }
    });
    
    console.log(`[ContinuousAgentCreator] Monitoring ${this.spawnedProcesses.size} active processes`);
  }

  getOrchestratorStatus() {
    return {
      queueLength: this.orchestrator.workloadQueue.length,
      activeTasks: this.orchestrator.activeTasks.size,
      performance: this.orchestrator.performanceMetrics
    };
  }

  saveMetrics() {
    const metricsPath = path.join(__dirname, 'creator-metrics.json');
    const metrics = {
      timestamp: new Date().toISOString(),
      creationMetrics: this.creationMetrics,
      activeProcesses: this.spawnedProcesses.size,
      orchestratorStatus: this.getOrchestratorStatus()
    };
    
    fs.writeFileSync(metricsPath, JSON.stringify(metrics, null, 2));
  }

  getSystemStatus() {
    return {
      activeProcesses: this.spawnedProcesses.size,
      creationMetrics: this.creationMetrics,
      orchestratorStatus: this.getOrchestratorStatus(),
      templates: Array.from(this.agentTemplates.keys())
    };
  }

  stop() {
    console.log('[ContinuousAgentCreator] Shutting down...');
    
    // Terminate all spawned processes
    this.spawnedProcesses.forEach((processInfo, processId) => {
      console.log(`[ContinuousAgentCreator] Terminating process: ${processId}`);
      processInfo.process.kill('SIGTERM');
    });
    
    this.saveMetrics();
    this.saveConfiguration();
  }
}

module.exports = ContinuousAgentCreator; 