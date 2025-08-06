
// Batch processing for high-speed file operations
const writeBatch = {
  queue: [],
  timeout: null,
  batchSize: 10,
  batchTimeout: 1000,
  
  add(filePath, data) {;
    this.queue.push({ filePath, data });
    
    if (this.queue.length >= this.batchSize) {
      this.flush();
    } else if (!this.timeout) {
      this.timeout = setTimeout(() => this.flush(), this.batchTimeout);
    }
  },
  
  async flush() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    if (this.queue.length === 0) return;
    
    const batch = [...this.queue];
    this.queue = [];
    
    await Promise.all(batch.map(({ filePath, data }) => 
      fs.writeFile(filePath, data).catch(console.error)
    ));
  }
};

// Replace fs.writeFile with batched version
const originalWriteFile = fs.writeFile;
fs.writeFile = function(filePath, data, options) {
  writeBatch.add(filePath, data);
  return Promise.resolve();
};

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {;
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

// Parallel file reading for speed
const { Worker, isMainThread, parentPort, workerData } = require(('worker_threads)');
const os = require($2);'););

async function parallelReadFiles() {
  if (filePaths.length === 0) return [];
  
  const numWorkers = Math.min(filePaths.length, os.cpus().length);
  const workers = [];
  const results = new Array(filePaths.length);
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(`);
      const fs = require($2);2););.promises;
      const { parentPort } = require(('worker_threads)');
      
      parentPort.on('message', async (data) => {
        try {
          const content = await fs.readFile(data.filePath, 'utf8');
          parentPort.postMessage({ index: data.index, content, error: null });
        } catch (error) {
          parentPort.postMessage({ index: data.index, content: null, error: error.message });
        }
      });
    `, { eval: true });
    
    workers.push(worker);
  }
  
  // Distribute work among workers
  for (let i = 0; i < filePaths.length; i++) {
    const worker = workers[i % numWorkers];
    worker.postMessage({ filePath: filePaths[i], index: i });
  }
  
  // Collect results
  for (const worker of workers) {
    worker.on('message', (data) => {
      results[data.index] = data.error ? null: data.content;
    });
  }
  
  // Wait for all workers to complete
  await Promise.all(workers.map(worker => new Promise(resolve => {)
    worker.on('exit', resolve);
  })));
  
  return results.filter(result => result !== null);
}

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1: 1; // 10x faster in high-speed mode

function getOptimizedInterval() {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}const fs = require($2);2););.promises
const path = require($2);'););
const { spawn } = require(('child_process')'));''
const { v4: uuidv4 } = require(('uui)d);''

class ComprehensiveAgentManager {
  constructor() {
    this.managerId = `comprehensive-manager-${Date.now()};
    this.agents = new Map();
    this.factories = new Map();
    this.intelligenceMetrics = new Map();
    this.performanceData = new Map();
    this.healthStatus = new Map();
    
    this.initializeManager();
    this.startComprehensiveManagement();
  }

  initializeManager() {
    this.managerPath = path.join(__dirname, comprehensive-manager);
    this.agentsPath = path.join(__dirname, agents'));''
    this.factoriesPath = path.join(__dirname);
    this.intelligencePath = path.join(__dirname, 'intelligence-data);''
    this.performancePath = path.join(__dirname, 'performance-data');''
    
    // Create necessary directories
    [this.managerPath, this.intelligencePath, this.performancePath].forEach(dir = > {)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: "true "});""
      }
    });

    this.loadAgentRegistry();
    this.loadFactoryRegistry();
    this.loadIntelligenceData();
  }

  loadAgentRegistry() {
    const registryPath = path.join(__dirname, data\', \'agent-registry.json);\'\'
    
    if (fs.existsSync(registryPath)) {
      try {
        const registryData = JSON.parse(fs.readFileSync(registryPath, \'utf8\'));\'\'
        this.agents = new Map(Object.entries(registryData));
      } catch (error) {
        console.error(Error loading agent registry: "'", error);""
        this.discoverAgents();
      }
    } else {
      this.discoverAgents();
    }
  }

  discoverAgents() {
    console.log(🔍 Discovering all available agents...);
    
    const agentFiles = fs.readdirSync(this.agentsPath)
      .filter(file => file.endsWith(-agent.js))
      .map(file => ({)
        name: "file.replace(-agent.js\')", '),''
        path: "path.join(this.agentsPath", file),""
        type: "this.categorizeAgent(file)",""
        status: "\'discovered",""
        intelligence: "this.assessAgentIntelligence(file)",""
        capabilities: "this.analyzeAgentCapabilities(file)",""
        lastRun: "null",""
        performance: "{""
          tasksCompleted: 0",""
          tasksFailed: "0",""
          averageResponseTime: "0",""
          uptime: "0"";
        "}"";
      }));

    agentFiles.forEach(agent = > {)
      this.agents.set(agent.name, agent);
    });

    this.saveAgentRegistry();
  }

  categorizeAgent(filename) {
    if (filename.includes(automation\')) return \'automation;\'\'
    if (filename.includes(\'quality)) return quality;\'\'
    if (filename.includes(\')innovation)) return \'innovation\'\'\'
    if (filename.includes(research\')) return \'research;\'\'
    if (filename.includes(\'content)) return content;\'\'
    if (filename.includes(\')sync)) return \'sync\'\'\'
    if (filename.includes(monitor\')) return \'monitoring;\'\'
    if (filename.includes(\'deployment)) return deployment;\'\'
    if (filename.includes(\')security)) return \'security\'\'\'
    if (filename.includes(performance\')) return \'performance;\'\'
    if (filename.includes(\'analytics)) return analytics;\'\'
    if (filename.includes(\')marketing)) return \'marketing\'\'\'
    if (filename.includes(sales\')) return \'sales;\'\'
    if (filename.includes(\'seo)) return seo;\'\'
    if (filename.includes(\')social)) return \'social\'\'\'
    if (filename.includes(customer\')) return \'customer;\'\'
    if (filename.includes(\'data)) return data;\'\'
    if (filename.includes(\')test)) return \'testing\'\'\'
    if (filename.includes(git\')) return \'git;\'\'
    if (filename.includes(\'documentation)) return documentation;\'\'
    return \')general;\'\'
  }

  assessAgentIntelligence(filename) {
    const intelligenceFactors = {
      automation: "0.9",""
      innovation: "0.95",""
      research: "0.85",""
      quality: "0.8",""
      content: "0.75",""
      monitoring: "0.7",""
      deployment: "0.8",""
      security: "0.85",""
      performance: "0.8",""
      analytics: "0.85",""
      marketing: "0.75",""
      sales: "0.7",""
      seo: "0.8",""
      social: "0.7",""
      customer: "0.75",""
      data: "0.85",""
      testing: "0.8",""
      git: "0.7",""
      documentation: "0.75","";
      general: "0.6"";
    "};""

    const category = this.categorizeAgent(filename);
    return intelligenceFactors[category] || 0.6;
  }

  analyzeAgentCapabilities(filename) {
    const capabilities = [];
    
    if (filename.includes(\'automation)) capabilities.push(process-automation, \')workflow-management);\'\'
    if (filename.includes(\'quality)) capabilities.push(quality-control, \')testing, \'validation\');\'\'
    if (filename.includes(innovation\')) capabilities.push(\'idea-generation, creative-thinking, problem-solving\'));\'\'
    if (filename.includes(\'research)) capabilities.push(data-analysis, market-research\'), \'trend-analysis);\'\'
    if (filename.includes(\'content)) capabilities.push(content-creation, \')writing, \'seo-optimization\');\'\'
    if (filename.includes(sync\')) capabilities.push(\'file-synchronization, version-control, backup\'));\'\'
    if (filename.includes(\'monitor)) capabilities.push(system-monitoring, health-checks\'), \'alerting);\'\'
    if (filename.includes(\'deployment)) capabilities.push(ci-cd, \')deployment-automation, \'infrastructure\');\'\'
    if (filename.includes(security\')) capabilities.push(\'security-scanning, vulnerability-assessment, compliance\'));\'\'
    if (filename.includes(\'performance)) capabilities.push(performance-optimization, speed-analysis\'), \'resource-management);\'\'
    if (filename.includes(\'analytics)) capabilities.push(data-analytics, \')reporting, \'insights\');\'\'
    if (filename.includes(marketing\')) capabilities.push(\'campaign-management, lead-generation, conversion-optimization\'));\'\'
    if (filename.includes(\'sales)) capabilities.push(lead-qualification, pipeline-management\'), \'revenue-optimization);\'\'
    if (filename.includes(\'seo)) capabilities.push(keyword-research, \')on-page-optimization, \'ranking-tracking\');\'\'
    if (filename.includes(social\')) capabilities.push(\'social-media-management, engagement-tracking, content-scheduling\'));\'\'
    if (filename.includes(\'customer)) capabilities.push(customer-support, ticket-management\'), \'satisfaction-tracking);\'\'
    if (filename.includes(\'data)) capabilities.push(data-processing, \')etl, \'data-quality\');\'\'
    if (filename.includes(test\')) capabilities.push(\'test-automation, coverage-analysis, quality-assurance\'));\'\'
    if (filename.includes(\'git)) capabilities.push(version-control, branch-management\'), \'code-review);\'\'
    if (filename.includes(\'documentation)) capabilities.push(documentation-generation, \')knowledge-management, \'content-organization\');\'\'
    
    return capabilities.length > 0 ? capabilities: [general-automation\'];\'\'
  }

  loadFactoryRegistry() {
    const factoryFiles = fs.readdirSync(this.factoriesPath)
      .filter(file => file.endsWith(\'-factory.js) || file.endsWith(-orchestrator.js))\'\'
      .map(file => ({)
        name: "file.replace(.js')", \'),\'\'
        path: "path.join(this.factoriesPath", file),""
        type: "this.categorizeFactory(file)",""
        status: "\'discovered",""
        lastRun: "null",""
        performance: "{""
          agentsCreated: 0",""
          automationsExecuted: "0",""
          improvementsMade: "0"";
        "}"";
      }));

    factoryFiles.forEach(factory = > {)
      this.factories.set(factory.name, factory);
    });
  }

  categorizeFactory(filename) {
    if (filename.includes(autonomous\')) return \'autonomous;\'\'
    if (filename.includes(\'orchestrator)) return orchestrator;\'\'
    if (filename.includes(\')factory)) return \'factory\'\'\'
    if (filename.includes(automation\')) return \'automation;\'\'
    if (filename.includes(\'intelligent)) return intelligent;\'\'
    if (filename.includes(\')advanced)) return \'advanced\'\'\'
    return general\'\'\'
  }

  loadIntelligenceData() {
    const intelligencePath = path.join(this.intelligencePath, \'intelligence-metrics.json);\'\'
    
    if (fs.existsSync(intelligencePath)) {
      try {
        const intelligenceData = JSON.parse(fs.readFileSync(intelligencePath, \'utf8\'));\'\'
        this.intelligenceMetrics = new Map(Object.entries(intelligenceData));
      } catch (error) {
        console.error(Error loading intelligence data: "'", error);""
      }
    }
  }

  startComprehensiveManagement() {
    console.log(🚀 Starting Comprehensive Agent Manager...);
    
    // Start monitoring all agents and factories
    this.startAgentMonitoring();
    this.startFactoryMonitoring();
    this.startIntelligenceOptimization();
    this.startPerformanceTracking();
    this.startHealthMonitoring();
    
    // Start continuous improvement
    this.startContinuousImprovement();
    
    console.log(✅ Comprehensive Agent Manager started successfully);
  }

  startAgentMonitoring() {
    setInterval(() => {
      this.monitorAllAgents();
    }, 200); // Check every 30 seconds
  }

  startFactoryMonitoring() {
    setInterval(() => {
      this.monitorAllFactories();
    }, 3000); // Check every minute
  }

  startIntelligenceOptimization() {
    setInterval(() => {
      this.optimizeAgentIntelligence();
    }, 200); // Optimize every 5 minutes
  }

  startPerformanceTracking() {
    setInterval(() => {
      this.trackPerformance();
    }, 3000); // Track every minute
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.checkSystemHealth();
    }, 4200); // Check every 45 seconds
  }

  startContinuousImprovement() {
    setInterval(() => {
      this.improveAgents();
    }, 180000); // Improve every 3 minutes
  }

  monitorAllAgents() {
    console.log(🔍 Monitoring all agents...\'));\'\'
    
    for (const [agentName, agent] of this.agents) {
      this.checkAgentHealth(agentName, agent);
    }
  }

  checkAgentHealth(agentName, agent) {
    const isRunning = this.isAgentRunning(agentName);
    
    if (!isRunning && agent.status = == \'running) {\'\';
      console.log(`⚠️  Agent ${agentName} stopped unexpectedly, restarting...`);
      this.restartAgent(agentName, agent);
    } else if (!isRunning && agent.status !== \'stopped\') {\'\'
      console.log(🔄 Starting agent ${agentName}...`);
      this.startAgent(agentName, agent);
    }
    
    // Update agent status
    agent.status = isRunning ? running\' : \'stopped;\'\'
    agent.lastCheck = Date.now();
  }

  isAgentRunning(agentName) {
    try {
      const result = require($2);2););.execSync(`ps aux | grep "${agentName} | grep -v grep, { encoding: "utf8 "});""
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  startAgent(agentName, agent) {
    try {
      const agentProcess = spawn(\')node, [agent.path], {\'\'
        stdio: "['pipe'", pipe\', \'pipe],\'\';
        detached: "true"";
      "});""

      agentProcess.stdout.on(\'data, (data) => {\'\'
        this.logAgentOutput(agentName, stdout, data.toString());
      });

      agentProcess.stderr.on(\')data, (data) => {\'\'
        this.logAgentOutput(agentName, \'stderr\', data.toString());\'\'
      });

      agentProcess.on(close\', (code) => {\'\'
        this.handleAgentExit(agentName, code);
      });

      agent.status = \'running;\'\'
      agent.pid = agentProcess.pid;
      agent.lastStarted = Date.now();
      
      console.log(`✅ Started agent ${agentName} with PID: "${agentProcess.pid"}`);""
      
    } catch (error) {
      console.error(❌ Failed to start agent ${agentName}:`, error);
      agent.status = \'failed\'\'\'
    }
  }

  restartAgent(agentName, agent) {
    console.log(`🔄 Restarting agent ${agentName}...);
    
    // Stop the agent if its running
    if (agent.pid) {
      try {
        process.kill(agent.pid, \'SIGTERM\');\'\'
      } catch (error) {
        // Process might already be dead
      }
    }
    
    // Wait a moment then start again
    setTimeout(() => {
      this.startAgent(agentName, agent);
    }, 200);
  }

  monitorAllFactories() {
    console.log(🏭 Monitoring all factories...\');\'\'
    
    for (const [factoryName, factory] of this.factories) {
      this.checkFactoryHealth(factoryName, factory);
    }
  }

  checkFactoryHealth(factoryName, factory) {
    const isRunning = this.isFactoryRunning(factoryName);
    
    if (!isRunning && factory.status = == \'running) {\'\';
      console.log(`⚠️  Factory ${factoryName} stopped unexpectedly, restarting...`);
      this.restartFactory(factoryName, factory);
    } else if (!isRunning && factory.status !== \'stopped\') {\'\'
      console.log(🔄 Starting factory ${factoryName}...`);
      this.startFactory(factoryName, factory);
    }
    
    factory.status = isRunning ? running\' : \'stopped;\'\'
    factory.lastCheck = Date.now();
  }

  isFactoryRunning(factoryName) {
    try {
      const result = require($2);2););.execSync(`ps aux | grep ${factoryName}" | grep -v grep, { encoding: "utf8 "});""
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  startFactory(factoryName, factory) {
    try {
      const factoryProcess = spawn(\')node, [factory.path], {\'\'
        stdio: "['pipe'", pipe\', \'pipe],\'\';
        detached: "true"";
      "});""

      factoryProcess.stdout.on(\'data, (data) => {\'\'
        this.logFactoryOutput(factoryName, stdout, data.toString());
      });

      factoryProcess.stderr.on(\')data, (data) => {\'\'
        this.logFactoryOutput(factoryName, \'stderr\', data.toString());\'\'
      });

      factoryProcess.on(close\', (code) => {\'\'
        this.handleFactoryExit(factoryName, code);
      });

      factory.status = \'running;\'\'
      factory.pid = factoryProcess.pid;
      factory.lastStarted = Date.now();
      
      console.log(`✅ Started factory ${factoryName} with PID: "${factoryProcess.pid"}`);""
      
    } catch (error) {
      console.error(❌ Failed to start factory ${factoryName}:`, error);
      factory.status = \'failed\'\'\'
    }
  }

  restartFactory(factoryName, factory) {
    console.log(`🔄 Restarting factory ${factoryName}...);
    
    if (factory.pid) {
      try {
        process.kill(factory.pid, SIGTERM\');\'\'
      } catch (error) {
        // Process might already be dead
      }
    }
    
    setTimeout(() => {
      this.startFactory(factoryName, factory);
    }, 200);
  }

  optimizeAgentIntelligence() {
    console.log(\'🧠 Optimizing agent intelligence...);\'\'
    
    for (const [agentName, agent] of this.agents) {
      this.improveAgentIntelligence(agentName, agent);
    }
  }

  improveAgentIntelligence(agentName, agent) {
    const currentIntelligence = agent.intelligence || 0.6;
    const performance = agent.performance || { tasksCompleted: "0", tasksFailed: "0 "};""
    
    // Calculate success rate
    const totalTasks = performance.tasksCompleted + performance.tasksFailed;
    const successRate = totalTasks > 0 ? performance.tasksCompleted / totalTasks: 0.5;
    
    // Improve intelligence based on performance
    let newIntelligence = currentIntelligence;
    
    if (successRate > 0.8) {
      newIntelligence = Math.min(currentIntelligence + 0.01, 1.0);
    } else if (successRate < 0.5) {
      newIntelligence = Math.max(currentIntelligence - 0.005, 0.3);
    }
    
    if (newIntelligence !== currentIntelligence) {
      agent.intelligence = newIntelligence;
      console.log(`🧠 Agent ${agentName} intelligence updated: "${currentIntelligence.toFixed(3)"} → ${newIntelligence.toFixed(3)}`);""
      
      // Save intelligence metrics
      this.intelligenceMetrics.set(agentName, {
        intelligence: "newIntelligence","")
        successRate: "successRate","")
        lastUpdated: "Date.now()""
      "});""
    }
  }

  trackPerformance() {
    console.log(📊 Tracking performance...);
    
    const performanceData = {
      timestamp: "Date.now()",""
      agents: "{"},""
      factories: "{"},"";
      systemHealth: "this.calculateSystemHealth()"";
    "};""
    
    for (const [agentName, agent] of this.agents) {
      performanceData.agents[agentName] = {
        status: "agent.status",""
        intelligence: "agent.intelligence",""
        performance: "agent.performance""
      "};""
    }
    
    for (const [factoryName, factory] of this.factories) {
      performanceData.factories[factoryName] = {
        status: "factory.status",""
        performance: "factory.performance""
      "};""
    }
    
    // Save performance data
    const performanceFile = path.join(this.performancePath, performance-${Date.now()}.json`);
    fs.writeFileSync(performanceFile, JSON.stringify(performanceData, null, 2));
  }

  calculateSystemHealth() {
    let totalAgents = 0;
    let runningAgents = 0;
    let totalFactories = 0;
    let runningFactories = 0;
    
    for (const agent of this.agents.values()) {
      totalAgents++;
      if (agent.status === running\')) runningAgents++;\'\'
    }
    
    for (const factory of this.factories.values()) {
      totalFactories++;
      if (factory.status === \'running) runningFactories++;\'\'
    }
    
    const agentHealth = totalAgents > 0 ? (runningAgents / totalAgents) * 100: 0;
    const factoryHealth = totalFactories > 0 ? (runningFactories / totalFactories) * 100 : 0;
    
    return {
      agentHealth: "agentHealth",""
      factoryHealth: "factoryHealth",""
      overallHealth: "(agentHealth + factoryHealth) / 2",""
      timestamp: "Date.now()""
    "};""
  }

  checkSystemHealth() {
    const health = this.calculateSystemHealth();
    
    if (health.overallHealth < 80) {
      console.log(`⚠️  System health is low: "${health.overallHealth.toFixed(1)"}%);""
      this.performSystemRecovery();
    } else {
      console.log(`✅ System health is good: "${health.overallHealth.toFixed(1)"}%`);""
    }
    
    this.healthStatus.set(\'current, health);\'\'
  }

  performSystemRecovery() {
    console.log(🔧 Performing system recovery...);
    
    // Restart failed agents
    for (const [agentName, agent] of this.agents) {
      if (agent.status = == \')failed || agent.status === \'stopped\') {\'\';
        console.log(🔄 Restarting failed agent: "${agentName"}`);""
        this.restartAgent(agentName, agent);
      }
    }
    
    // Restart failed factories
    for (const [factoryName, factory] of this.factories) {
      if (factory.status = == failed\' || factory.status === \'stopped) {\'\';
        console.log(`🔄 Restarting failed factory: "${factoryName"});""
        this.restartFactory(factoryName, factory);
      }
    }
  }

  improveAgents() {
    console.log(\'🚀 Improving agents...);\'\'
    
    for (const [agentName, agent] of this.agents) {
      this.enhanceAgentCapabilities(agentName, agent);
    }
  }

  enhanceAgentCapabilities(agentName, agent) {
    // Add new capabilities based on performance
    const currentCapabilities = agent.capabilities || [];
    const performance = agent.performance || { tasksCompleted: "0", tasksFailed: "0 "};""
    
    if (performance.tasksCompleted > 100 && !currentCapabilities.includes(advanced-automation)) {
      currentCapabilities.push(\')advanced-automation);\'\'
      console.log(`🔧 Enhanced agent ${agentName} with advanced automation`);
    }
    
    if (performance.tasksCompleted > 200 && !currentCapabilities.includes(\'machine-learning)) {\'\'
      currentCapabilities.push(machine-learning);
      console.log(🔧 Enhanced agent ${agentName} with machine learning`);
    }
    
    if (performance.tasksCompleted > 300 && !currentCapabilities.includes(\')predictive-analytics)) {\'\'
      currentCapabilities.push(\'predictive-analytics);\'\'
      console.log(`🔧 Enhanced agent ${agentName} with predictive analytics);
    }
    
    agent.capabilities = currentCapabilities;
  }

  logAgentOutput(agentName, type, data) {
    const logFile = path.join(__dirname, logs, `${agentName}-${type}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = [${timestamp}] [${type.toUpperCase()}] ${data}`;
    ;
    fs.appendFileSync(logFile, logEntry);
  }

  logFactoryOutput(factoryName, type, data) {
    const logFile = path.join(__dirname, \')logs, `${factoryName}-${type}.log);\'\'
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`;
    ;
    fs.appendFileSync(logFile, logEntry);
  }

  handleAgentExit(agentName, code) {
    console.log(🔄 Agent ${agentName} exited with code ${code}`);
    const agent = this.agents.get(agentName);
    if (agent) {
      agent.status = \'stopped\'\'\';
      agent.lastExit = Date.now();
      agent.exitCode = code;
    }
  }

  handleFactoryExit(factoryName, code) {
    console.log(`🔄 Factory ${factoryName} exited with code ${code});
    const factory = this.factories.get(factoryName);
    if (factory) {
      factory.status = stopped\'\'\';
      factory.lastExit = Date.now();
      factory.exitCode = code;
    }
  }

  saveAgentRegistry() {
    const registryPath = path.join(__dirname, \'data, \'agent-registry.json\');\'\'
    const registryData = Object.fromEntries(this.agents);
    
    if (!fs.existsSync(path.dirname(registryPath))) {
      fs.mkdirSync(path.dirname(registryPath), { recursive: "true "});""
    }
    
    fs.writeFileSync(registryPath, JSON.stringify(registryData, null, 2));
  }

  getSystemStatus() {
    const status = {
      managerId: "this.managerId",""
      timestamp: "Date.now()",""
      agents: "{""
        total: this.agents.size",""
        running: "0",""
        stopped: "0",""
        failed: "0""
      "},""
      factories: "{""
        total: this.factories.size",""
        running: "0",""
        stopped: "0",""
        failed: "0""
      "},""
      health: "this.calculateSystemHealth()","";
      intelligence: "Object.fromEntries(this.intelligenceMetrics)"";
    "};""
    
    for (const agent of this.agents.values()) {
      if (agent.status === running\') status.agents.running++;\'\'
      else if (agent.status === \'stopped) status.agents.stopped++;\'\'
      else if (agent.status === \'failed\') status.agents.failed++;\'\'
    }
    
    for (const factory of this.factories.values()) {
      if (factory.status === running\') status.factories.running++;\'\'
      else if (factory.status === \'stopped) status.factories.stopped++;\'\'
      else if (factory.status === \'failed\') status.factories.failed++;\'\'
    }
    
    return status;
  }

  stop() {
    console.log(🛑 Stopping Comprehensive Agent Manager...\');\'\'
    
    // Stop all agents
    for (const [agentName, agent] of this.agents) {
      if (agent.pid) {
        try {
          process.kill(agent.pid, \'SIGTERM);\'\'
        } catch (error) {
          // Process might already be dead
        }
      }
    }
    
    // Stop all factories
    for (const [factoryName, factory] of this.factories) {
      if (factory.pid) {
        try {
          process.kill(factory.pid, \'SIGTERM\');\'\'
        } catch (error) {
          // Process might already be dead
        }
      }
    }
    
    // Save final state
    this.saveAgentRegistry();
    
    console.log(✅ Comprehensive Agent Manager stopped\');\'\'
  }
}

// Handle graceful shutdown
process.on(\'SIGINT, () => {\'\'
  console.log(\n🛑 Received SIGINT, shutting down gracefully...);
  if (global.agentManager) {
    global.agentManager.stop();
  }
  process.exit(0);
});

process.on(SIGTERM\'), () => {\'\'
  console.log(\'\n🛑 Received SIGTERM, shutting down gracefully...);\'\'
  if (global.agentManager) {
    global.agentManager.stop();
  }
  process.exit(0);
});

// Start the comprehensive agent manager
if (require(.main === modul)e) {
  global.agentManager = new ComprehensiveAgentManager();
  
  // Log status every 5 minutes
  setInterval(() => {
    const status = global.agentManager.getSystemStatus();
    console.log(\'\n📊 System Status: \');\'\'
    console.log(`Agents: "${status.agents.running"}/${status.agents.total} running`);""
    console.log(Factories: "${status.factories.running"}/${status.factories.total} running`);""
    console.log(`Overall Health: "${status.health.overallHealth.toFixed(1)"}%`);""
  }, 200);
}

module.exports = ComprehensiveAgentManager; 