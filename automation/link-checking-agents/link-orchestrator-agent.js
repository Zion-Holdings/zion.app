const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class LinkOrchestratorAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `link-orchestrator-${Date.now()}`;
    this.agentType = process.env.AGENT_TYPE || 'link-orchestrator';
    this.baseUrl = process.env.BASE_URL || 'https://ziontechgroup.netlify.app';
    this.config = {
      maxConcurrentAgents: parseInt(process.env.maxConcurrentAgents) || 5,
      taskDistribution: process.env.taskDistribution === 'true',
      resultAggregation: process.env.resultAggregation === 'true',
      performanceOptimization: process.env.performanceOptimization === 'true'
    };
    
    this.stats = {
      linksChecked: 0,
      brokenLinksFound: 0,
      linksFixed: 0,
      errors: 0
    };
    
    this.performance = {
      tasksCompleted: 0,
      tasksFailed: 0,
      avgResponseTime: 0,
      successRate: 0
    };
    
    this.managedAgents = new Map();
    this.tasks = new Map();
    this.workflows = new Map();
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-orchestrators',
      'link-workflows',
      'link-reports',
      'link-logs'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log(`🎼 Initializing Link Orchestrator Agent: ${this.agentId}`);
    
    try {
      // Load existing workflows
      await this.loadWorkflows();
      
      // Initialize agent management
      await this.initializeAgentManagement();
      
      console.log('✅ Link Orchestrator Agent initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Link Orchestrator Agent:', error);
      return false;
    }
  }

  async start() {
    console.log(`🚀 Starting Link Orchestrator Agent: ${this.agentId}`);
    
    if (!await this.initialize()) {
      return false;
    }

    // Start orchestration
    this.startOrchestration();
    
    return true;
  }

  startOrchestration() {
    // Start continuous orchestration
    setInterval(async () => {
      try {
        await this.performOrchestration();
      } catch (error) {
        console.error('Error in orchestration:', error);
        this.stats.errors++;
      }
    }, 60000); // Every minute

    // Also perform initial orchestration
    this.performOrchestration();
  }

  async performOrchestration() {
    console.log('🎼 Performing link checking orchestration...');
    
    try {
      // Check agent health and performance
      await this.checkAgentHealth();
      
      // Distribute tasks
      await this.distributeTasks();
      
      // Aggregate results
      await this.aggregateResults();
      
      // Optimize performance
      if (this.config.performanceOptimization) {
        await this.optimizePerformance();
      }
      
      // Generate orchestration report
      await this.generateOrchestrationReport();
      
      this.performance.tasksCompleted++;
      this.updatePerformanceMetrics();
      
      console.log('✅ Orchestration completed successfully');
      
    } catch (error) {
      console.error('Error performing orchestration:', error);
      this.stats.errors++;
      this.performance.tasksFailed++;
    }
  }

  async initializeAgentManagement() {
    // Initialize different types of agents
    const agentTypes = ['link-validator', 'link-fixer', 'link-monitor', 'link-analyzer'];
    
    for (const agentType of agentTypes) {
      const agent = {
        type: agentType,
        status: 'available',
        lastActive: new Date(),
        performance: {
          tasksCompleted: 0,
          tasksFailed: 0,
          avgResponseTime: 0,
          successRate: 0
        },
        stats: {
          linksChecked: 0,
          brokenLinksFound: 0,
          linksFixed: 0,
          errors: 0
        }
      };
      
      this.managedAgents.set(agentType, agent);
    }
    
    console.log(`📋 Initialized ${this.managedAgents.size} agent types for management`);
  }

  async checkAgentHealth() {
    console.log('🔍 Checking agent health...');
    
    for (const [agentType, agent] of this.managedAgents) {
      // Simulate health check (in real implementation, this would check actual agent processes)
      const healthStatus = await this.checkSingleAgentHealth(agentType, agent);
      
      if (healthStatus.healthy) {
        agent.status = 'healthy';
        agent.lastActive = new Date();
      } else {
        agent.status = 'unhealthy';
        console.warn(`⚠️ Agent ${agentType} is unhealthy: ${healthStatus.reason}`);
      }
    }
  }

  async checkSingleAgentHealth(agentType, agent) {
    // In a real implementation, this would check the actual agent process
    // For now, we'll simulate health checks
    const timeSinceLastActive = Date.now() - agent.lastActive.getTime();
    
    if (timeSinceLastActive > 300000) { // 5 minutes
      return {
        healthy: false,
        reason: 'Agent not responding for more than 5 minutes'
      };
    }
    
    if (agent.performance.successRate < 80) {
      return {
        healthy: false,
        reason: `Low success rate: ${agent.performance.successRate}%`
      };
    }
    
    return {
      healthy: true,
      reason: 'Agent is healthy'
    };
  }

  async distributeTasks() {
    console.log('📋 Distributing tasks to agents...');
    
    // Get available tasks
    const pendingTasks = this.getPendingTasks();
    
    if (pendingTasks.length === 0) {
      console.log('📋 No pending tasks to distribute');
      return;
    }
    
    // Distribute tasks based on agent capabilities
    for (const task of pendingTasks) {
      const suitableAgent = this.findSuitableAgent(task);
      
      if (suitableAgent) {
        await this.assignTaskToAgent(task, suitableAgent);
      } else {
        console.warn(`⚠️ No suitable agent found for task: ${task.type}`);
      }
    }
  }

  getPendingTasks() {
    // In a real implementation, this would get tasks from a queue or database
    // For now, we'll simulate some tasks
    return [
      {
        id: `task-${Date.now()}-1`,
        type: 'link-validation',
        priority: 'high',
        data: { scope: 'health-check' }
      },
      {
        id: `task-${Date.now()}-2`,
        type: 'link-fixing',
        priority: 'normal',
        data: { brokenLinks: [] }
      },
      {
        id: `task-${Date.now()}-3`,
        type: 'link-analysis',
        priority: 'low',
        data: { scope: 'comprehensive' }
      }
    ];
  }

  findSuitableAgent(task) {
    const agentCapabilities = {
      'link-validation': ['link-validator'],
      'link-fixing': ['link-fixer'],
      'link-monitoring': ['link-monitor'],
      'link-analysis': ['link-analyzer']
    };
    
    const suitableTypes = agentCapabilities[task.type] || [];
    
    for (const agentType of suitableTypes) {
      const agent = this.managedAgents.get(agentType);
      if (agent && agent.status === 'healthy') {
        return agent;
      }
    }
    
    return null;
  }

  async assignTaskToAgent(task, agent) {
    console.log(`📋 Assigning task ${task.id} to ${agent.type} agent`);
    
    task.assignedAgent = agent.type;
    task.status = 'assigned';
    task.assignedAt = new Date();
    
    this.tasks.set(task.id, task);
    
    // Update agent stats
    agent.performance.tasksCompleted++;
    agent.lastActive = new Date();
    
    // Simulate task completion
    setTimeout(() => {
      this.completeTask(task.id, { success: true, result: 'Task completed successfully' });
    }, 5000 + Math.random() * 10000); // Random completion time
  }

  async completeTask(taskId, result) {
    const task = this.tasks.get(taskId);
    if (!task) return;
    
    task.status = 'completed';
    task.result = result;
    task.completedAt = new Date();
    
    const agent = this.managedAgents.get(task.assignedAgent);
    if (agent) {
      if (result.success) {
        agent.performance.tasksCompleted++;
      } else {
        agent.performance.tasksFailed++;
      }
    }
    
    console.log(`✅ Task ${taskId} completed`);
  }

  async aggregateResults() {
    console.log('📊 Aggregating results from all agents...');
    
    const aggregatedResults = {
      timestamp: new Date().toISOString(),
      agents: {},
      overallStats: {
        totalLinksChecked: 0,
        totalBrokenLinksFound: 0,
        totalLinksFixed: 0,
        totalErrors: 0,
        overallSuccessRate: 0
      },
      recommendations: []
    };
    
    // Aggregate results from all agents
    for (const [agentType, agent] of this.managedAgents) {
      aggregatedResults.agents[agentType] = {
        status: agent.status,
        performance: agent.performance,
        stats: agent.stats,
        lastActive: agent.lastActive
      };
      
      // Update overall stats
      aggregatedResults.overallStats.totalLinksChecked += agent.stats.linksChecked;
      aggregatedResults.overallStats.totalBrokenLinksFound += agent.stats.brokenLinksFound;
      aggregatedResults.overallStats.totalLinksFixed += agent.stats.linksFixed;
      aggregatedResults.overallStats.totalErrors += agent.stats.errors;
    }
    
    // Calculate overall success rate
    const totalTasks = aggregatedResults.overallStats.totalLinksChecked;
    if (totalTasks > 0) {
      aggregatedResults.overallStats.overallSuccessRate = 
        ((totalTasks - aggregatedResults.overallStats.totalErrors) / totalTasks) * 100;
    }
    
    // Generate recommendations
    aggregatedResults.recommendations = this.generateOrchestrationRecommendations(aggregatedResults);
    
    // Save aggregated results
    const resultsPath = path.join(__dirname, '..', 'link-orchestrators', `aggregated-results-${Date.now()}.json`);
    fs.writeFileSync(resultsPath, JSON.stringify(aggregatedResults, null, 2));
    
    console.log('📊 Results aggregated and saved');
  }

  generateOrchestrationRecommendations(results) {
    const recommendations = [];
    
    // Check overall health
    if (results.overallStats.overallSuccessRate < 90) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: `Low overall success rate (${results.overallStats.overallSuccessRate.toFixed(2)}%)`,
        action: 'investigate_and_optimize_agents'
      });
    }
    
    // Check broken links
    if (results.overallStats.totalBrokenLinksFound > 0) {
      recommendations.push({
        type: 'maintenance',
        priority: 'critical',
        message: `${results.overallStats.totalBrokenLinksFound} broken links detected`,
        action: 'prioritize_link_fixing'
      });
    }
    
    // Check agent health
    const unhealthyAgents = Object.values(results.agents).filter(agent => agent.status !== 'healthy');
    if (unhealthyAgents.length > 0) {
      recommendations.push({
        type: 'system',
        priority: 'high',
        message: `${unhealthyAgents.length} agents are unhealthy`,
        action: 'restart_unhealthy_agents'
      });
    }
    
    return recommendations;
  }

  async optimizePerformance() {
    console.log('⚡ Optimizing performance...');
    
    // Analyze agent performance and redistribute workload
    const agentPerformance = Array.from(this.managedAgents.entries()).map(([type, agent]) => ({
      type,
      agent,
      score: this.calculateAgentScore(agent)
    }));
    
    // Sort by performance score
    agentPerformance.sort((a, b) => b.score - a.score);
    
    // Identify underperforming agents
    const underperformingAgents = agentPerformance.filter(ap => ap.score < 70);
    
    if (underperformingAgents.length > 0) {
      console.log(`🔧 Found ${underperformingAgents.length} underperforming agents`);
      
      for (const { type, agent } of underperformingAgents) {
        await this.optimizeAgent(type, agent);
      }
    }
  }

  calculateAgentScore(agent) {
    let score = 0;
    
    // Base score from success rate
    score += agent.performance.successRate * 0.4;
    
    // Bonus for high task completion
    score += Math.min(20, agent.performance.tasksCompleted * 0.1);
    
    // Penalty for errors
    score -= agent.stats.errors * 2;
    
    // Health bonus
    if (agent.status === 'healthy') {
      score += 10;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  async optimizeAgent(agentType, agent) {
    console.log(`🔧 Optimizing agent: ${agentType}`);
    
    // In a real implementation, this would restart or reconfigure the agent
    // For now, we'll just reset some stats
    agent.performance.tasksFailed = Math.max(0, agent.performance.tasksFailed - 1);
    agent.status = 'healthy';
    agent.lastActive = new Date();
    
    console.log(`✅ Agent ${agentType} optimized`);
  }

  async loadWorkflows() {
    const workflowsPath = path.join(__dirname, '..', 'link-workflows', 'workflows.json');
    
    if (fs.existsSync(workflowsPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));
        this.workflows = new Map(data.workflows || []);
        console.log(`📋 Loaded ${this.workflows.size} workflows`);
      } catch (error) {
        console.error('Error loading workflows:', error);
      }
    }
  }

  async saveWorkflows() {
    const workflowsPath = path.join(__dirname, '..', 'link-workflows', 'workflows.json');
    
    const data = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      workflows: Array.from(this.workflows.entries())
    };
    
    fs.writeFileSync(workflowsPath, JSON.stringify(data, null, 2));
  }

  async generateOrchestrationReport() {
    const reportPath = path.join(__dirname, '..', 'link-reports', `orchestration-report-${Date.now()}.json`);
    
    const report = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      managedAgents: Array.from(this.managedAgents.entries()).map(([type, agent]) => ({
        type,
        status: agent.status,
        performance: agent.performance,
        stats: agent.stats,
        lastActive: agent.lastActive
      })),
      tasks: Array.from(this.tasks.values()),
      workflows: Array.from(this.workflows.entries()),
      summary: {
        totalAgents: this.managedAgents.size,
        healthyAgents: Array.from(this.managedAgents.values()).filter(a => a.status === 'healthy').length,
        totalTasks: this.tasks.size,
        completedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'completed').length
      }
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Generated orchestration report: ${reportPath}`);
  }

  updatePerformanceMetrics() {
    const totalTasks = this.performance.tasksCompleted + this.performance.tasksFailed;
    this.performance.successRate = totalTasks > 0 ? 
      (this.performance.tasksCompleted / totalTasks) * 100 : 0;
  }

  getStats() {
    return {
      agentId: this.agentId,
      type: this.agentType,
      stats: this.stats,
      performance: this.performance,
      managedAgents: this.managedAgents.size,
      activeTasks: Array.from(this.tasks.values()).filter(t => t.status === 'running').length,
      timestamp: new Date().toISOString()
    };
  }
}

// Start the agent if this file is run directly
if (require.main === module) {
  const agent = new LinkOrchestratorAgent();
  
  agent.start().then(() => {
    console.log('Link Orchestrator Agent started successfully');
  }).catch(error => {
    console.error('Failed to start Link Orchestrator Agent:', error);
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Received SIGINT, shutting down gracefully...');
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('Received SIGTERM, shutting down gracefully...');
    process.exit(0);
  });
}

module.exports = LinkOrchestratorAgent; 