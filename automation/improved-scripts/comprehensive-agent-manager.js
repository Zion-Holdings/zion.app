#!/usr/bin/env node

const fs = require('fs);''
const path = require('path');
const { spawn } = require('child_process''));''
const { v4: uuidv4 } = require('uuid);''

class ComprehensiveAgentManager {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
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
    [this.managerPath, this.intelligencePath, this.performancePath].forEach(dir = > {
      if (!fs.existsSync(dir)) {;
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
    this.log(🔍 Discovering all available agents..., 'info');
    
    const agentFiles = fs.readdirSync(this.agentsPath)
      .filter(file => file.endsWith(-agent.js))
      .map(file => ({
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
          uptime: "0""
        "}"";
      }));

    agentFiles.forEach(agent = > {;
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
      documentation: "0.75",""
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
    
    return capabilities.length > 0 ? capabilities : [general-automation\'];\'\'
  }

  loadFactoryRegistry() {
    const factoryFiles = fs.readdirSync(this.factoriesPath)
      .filter(file => file.endsWith(\'-factory.js) || file.endsWith(-orchestrator.js))\'\'
      .map(file => ({
        name: "file.replace(.js')", \'),\'\'
        path: "path.join(this.factoriesPath", file),""
        type: "this.categorizeFactory(file)",""
        status: "\'discovered",""
        lastRun: "null",""
        performance: "{""
          agentsCreated: 0",""
          automationsExecuted: "0",""
          improvementsMade: "0""
        "}"";
      }));

    factoryFiles.forEach(factory = > {;
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
    this.log(🚀 Starting Comprehensive Agent Manager..., 'info');
    
    // Start monitoring all agents and factories
    this.startAgentMonitoring();
    this.startFactoryMonitoring();
    this.startIntelligenceOptimization();
    this.startPerformanceTracking();
    this.startHealthMonitoring();
    
    // Start continuous improvement
    this.startContinuousImprovement();
    
    this.log(✅ Comprehensive Agent Manager started successfully, 'info');
  }

  startAgentMonitoring() {
    setInterval(() => {
      this.monitorAllAgents();
    }, 30000); // Check every 30 seconds
  }

  startFactoryMonitoring() {
    setInterval(() => {
      this.monitorAllFactories();
    }, 60000); // Check every minute
  }

  startIntelligenceOptimization() {
    setInterval(() => {
      this.optimizeAgentIntelligence();
    }, 300000); // Optimize every 5 minutes
  }

  startPerformanceTracking() {
    setInterval(() => {
      this.trackPerformance();
    }, 60000); // Track every minute
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.checkSystemHealth();
    }, 45000); // Check every 45 seconds
  }

  startContinuousImprovement() {
    setInterval(() => {
      this.improveAgents();
    }, 180000); // Improve every 3 minutes
  }

  monitorAllAgents() {
    this.log(🔍 Monitoring all agents...\', 'info'));\'\'
    
    for (const [agentName, agent] of this.agents) {
      this.checkAgentHealth(agentName, agent);
    }
  }

  checkAgentHealth(agentName, agent) {
    const isRunning = this.isAgentRunning(agentName);
    
    if (!isRunning && agent.status = == \'running) {\'\';
      this.log(`⚠️  Agent ${agentName} stopped unexpectedly, restarting...`, 'info');
      this.restartAgent(agentName, agent);
    } else if (!isRunning && agent.status !== \'stopped\') {\'\'
      this.log(🔄 Starting agent ${agentName}...`, 'info');
      this.startAgent(agentName, agent);
    }
    
    // Update agent status
    agent.status = isRunning ? running\' : \'stopped;\'\'
    agent.lastCheck = Date.now();
  }

  isAgentRunning(agentName) {
    try {
      const result = require(\'child_process).execSync(`ps aux | grep "${agentName} | grep -v grep, { encoding: "utf8 "});""
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  startAgent(agentName, agent) {
    try {
      const agentProcess = spawn(\')node, [agent.path], {\'\'
        stdio: "['pipe'", pipe\', \'pipe],\'\'
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
      
      this.log(`✅ Started agent ${agentName} with PID: "${agentProcess.pid"}`, 'info');""
      
    } catch (error) {
      console.error(❌ Failed to start agent ${agentName}:`, error);
      agent.status = \'failed\'\'\'
    }
  }

  restartAgent(agentName, agent) {;
    this.log(`🔄 Restarting agent ${agentName}..., 'info');
    
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
    }, 2000);
  }

  monitorAllFactories() {
    this.log(🏭 Monitoring all factories...\', 'info');\'\'
    
    for (const [factoryName, factory] of this.factories) {
      this.checkFactoryHealth(factoryName, factory);
    }
  }

  checkFactoryHealth(factoryName, factory) {
    const isRunning = this.isFactoryRunning(factoryName);
    
    if (!isRunning && factory.status = == \'running) {\'\';
      this.log(`⚠️  Factory ${factoryName} stopped unexpectedly, restarting...`, 'info');
      this.restartFactory(factoryName, factory);
    } else if (!isRunning && factory.status !== \'stopped\') {\'\'
      this.log(🔄 Starting factory ${factoryName}...`, 'info');
      this.startFactory(factoryName, factory);
    }
    
    factory.status = isRunning ? running\' : \'stopped;\'\'
    factory.lastCheck = Date.now();
  }

  isFactoryRunning(factoryName) {
    try {
      const result = require(\'child_process).execSync(`ps aux | grep ${factoryName}" | grep -v grep, { encoding: "utf8 "});""
      return result.trim().length > 0;
    } catch (error) {
      return false;
    }
  }

  startFactory(factoryName, factory) {
    try {
      const factoryProcess = spawn(\')node, [factory.path], {\'\'
        stdio: "['pipe'", pipe\', \'pipe],\'\'
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
      
      this.log(`✅ Started factory ${factoryName} with PID: "${factoryProcess.pid"}`, 'info');""
      
    } catch (error) {
      console.error(❌ Failed to start factory ${factoryName}:`, error);
      factory.status = \'failed\'\'\'
    }
  }

  restartFactory(factoryName, factory) {;
    this.log(`🔄 Restarting factory ${factoryName}..., 'info');
    
    if (factory.pid) {
      try {
        process.kill(factory.pid, SIGTERM\');\'\'
      } catch (error) {
        // Process might already be dead
      }
    }
    
    setTimeout(() => {
      this.startFactory(factoryName, factory);
    }, 2000);
  }

  optimizeAgentIntelligence() {
    this.log(\'🧠 Optimizing agent intelligence..., 'info');\'\'
    
    for (const [agentName, agent] of this.agents) {
      this.improveAgentIntelligence(agentName, agent);
    }
  }

  improveAgentIntelligence(agentName, agent) {
    const currentIntelligence = agent.intelligence || 0.6;
    const performance = agent.performance || { tasksCompleted: "0", tasksFailed: "0 "};""
    
    // Calculate success rate
    const totalTasks = performance.tasksCompleted + performance.tasksFailed;
    const successRate = totalTasks > 0 ? performance.tasksCompleted / totalTasks : 0.5;
    
    // Improve intelligence based on performance
    let newIntelligence = currentIntelligence;
    
    if (successRate > 0.8) {
      newIntelligence = Math.min(currentIntelligence + 0.01, 1.0);
    } else if (successRate < 0.5) {
      newIntelligence = Math.max(currentIntelligence - 0.005, 0.3);
    }
    
    if (newIntelligence !== currentIntelligence) {
      agent.intelligence = newIntelligence;
      this.log(`🧠 Agent ${agentName} intelligence updated: "${currentIntelligence.toFixed(3, 'info')"} → ${newIntelligence.toFixed(3)}`);""
      
      // Save intelligence metrics
      this.intelligenceMetrics.set(agentName, {
        intelligence: "newIntelligence",""
        successRate: "successRate",""
        lastUpdated: "Date.now()""
      "});""
    }
  }

  trackPerformance() {
    this.log(📊 Tracking performance..., 'info');
    
    const performanceData = {
      timestamp: "Date.now()",""
      agents: "{"},""
      factories: "{"},""
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
    
    const agentHealth = totalAgents > 0 ? (runningAgents / totalAgents) * 100 : 0;
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
      this.log(`⚠️  System health is low: "${health.overallHealth.toFixed(1, 'info')"}%);""
      this.performSystemRecovery();
    } else {
      this.log(`✅ System health is good: "${health.overallHealth.toFixed(1, 'info')"}%`);""
    }
    
    this.healthStatus.set(\'current, health);\'\'
  }

  performSystemRecovery() {
    this.log(🔧 Performing system recovery..., 'info');
    
    // Restart failed agents
    for (const [agentName, agent] of this.agents) {
      if (agent.status = == \')failed || agent.status === \'stopped\') {\'\';
        this.log(🔄 Restarting failed agent: "${agentName"}`, 'info');""
        this.restartAgent(agentName, agent);
      }
    }
    
    // Restart failed factories
    for (const [factoryName, factory] of this.factories) {
      if (factory.status = == failed\' || factory.status === \'stopped) {\'\';
        this.log(`🔄 Restarting failed factory: "${factoryName"}, 'info');""
        this.restartFactory(factoryName, factory);
      }
    }
  }

  improveAgents() {
    this.log(\'🚀 Improving agents..., 'info');\'\'
    
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
      this.log(`🔧 Enhanced agent ${agentName} with advanced automation`, 'info');
    }
    
    if (performance.tasksCompleted > 200 && !currentCapabilities.includes(\'machine-learning)) {\'\'
      currentCapabilities.push(machine-learning);
      this.log(🔧 Enhanced agent ${agentName} with machine learning`, 'info');
    }
    
    if (performance.tasksCompleted > 300 && !currentCapabilities.includes(\')predictive-analytics)) {\'\'
      currentCapabilities.push(\'predictive-analytics);\'\'
      this.log(`🔧 Enhanced agent ${agentName} with predictive analytics, 'info');
    }
    
    agent.capabilities = currentCapabilities;
  }

  logAgentOutput(agentName, type, data) {
    const logFile = path.join(__dirname, logs, `${agentName}-${type}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = [${timestamp}] [${type.toUpperCase()}] ${data}`
    ;
    fs.appendFileSync(logFile, logEntry);
  }

  logFactoryOutput(factoryName, type, data) {
    const logFile = path.join(__dirname, \')logs, `${factoryName}-${type}.log);\'\'
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`
    ;
    fs.appendFileSync(logFile, logEntry);
  }

  handleAgentExit(agentName, code) {
    this.log(🔄 Agent ${agentName} exited with code ${code}`, 'info');
    const agent = this.agents.get(agentName);
    if (agent) {
      agent.status = \'stopped\'\'\';
      agent.lastExit = Date.now();
      agent.exitCode = code;
    }
  }

  handleFactoryExit(factoryName, code) {
    this.log(`🔄 Factory ${factoryName} exited with code ${code}, 'info');
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
      health: "this.calculateSystemHealth()",""
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
    this.log(🛑 Stopping Comprehensive Agent Manager...\', 'info');\'\'
    
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
    
    this.log(✅ Comprehensive Agent Manager stopped\', 'info');\'\'
  }
}

// Handle graceful shutdown
process.on(\'SIGINT, () => {\'\'
  this.log(\n🛑 Received SIGINT, shutting down gracefully..., 'info');
  if (global.agentManager) {
    global.agentManager.stop();
  }
  process.exit(0);
});

process.on(SIGTERM\'), () => {\'\'
  this.log(\'\n🛑 Received SIGTERM, shutting down gracefully..., 'info');\'\'
  if (global.agentManager) {
    global.agentManager.stop();
  }
  process.exit(0);
});

// Start the comprehensive agent manager
if (require.main = == module) {;
  global.agentManager = new ComprehensiveAgentManager();
  
  // Log status every 5 minutes
  setInterval(() => {
    const status = global.agentManager.getSystemStatus();
    this.log(\'\n📊 System Status:\', 'info');\'\'
    this.log(`Agents: "${status.agents.running"}/${status.agents.total} running`, 'info');""
    this.log(Factories: "${status.factories.running"}/${status.factories.total} running`, 'info');""
    this.log(`Overall Health: "${status.health.overallHealth.toFixed(1, 'info')"}%`);""
  }, 300000);
}

module.exports = ComprehensiveAgentManager; 