const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const cron = require('node-cr'o'n');
const LinkCheckingAgentFactory = require('./link-checking-agent-factory');

class LinkCheckingOrchestrator {
  constructor() {
    this.agentFactory = new LinkCheckingAgentFactory();
    this.agents = new Map();
    this.tasks = new Map();
    this.workloads = new Map();
    this.systemMetrics = {
      totalAgents: 0,
      activeAgents: 0,
      totalTasks: 0,
      completedTasks: 0,
      systemHealth: 'go'o'd',
      avgResponseTime: 0,
      errorRate: 0,
      efficiency: 0,
      linksChecked: 0,
      brokenLinksFound: 0,
      linksFixed: 0
    };
    this.config = this.loadConfig();
    this.logs = [];
    this.baseUrl = process.env.BASE_URL || 'http's'://ziontechgroup.netlify.app';
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'link-checking-orchestrator-confi'g'.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
      }
    } catch (error) {
      console.error('Erro'r' loading orchestrator config:', error);
    }
    return {
      maxConcurrentAgents: 10,
      taskTimeout: 300000,
      healthCheckInterval: 30000,
      workloadBalancing: true,
      autoScaling: true,
      performanceOptimization: true,
      loadBalancing: true,
      failover: true,
      monitoring: true,
      linkCheckInterval: 300000, // 5 minutes
      brokenLinkAlertThreshold: 5,
      autoFixEnabled: true,
      backupBeforeFix: true,
      reportGeneration: true
    };
  }

  async initialize() {
    console.log('🔗 Initializing Link Checking Orchestrator...');
    
    // Create necessary directories
    this.ensureDirectories();
    
    // Initialize database connection
    await this.initializeDatabase();
    
    // Load existing agents
    await this.loadExistingAgents();
    
    // Start monitoring and orchestration
    this.startOrchestration();
    
    // Start cron jobs
    this.startCronJobs();
    
    console.log('✅ Link Checking Orchestrator initialized successfully');
  }

  ensureDirectories() {
    const directories = [
      'link-orchestrato'r's',
      'link-tas'k's',
      'link-workloa'd's',
      'link-monitori'n'g',
      'link-repor't's',
      'link-analyti'c's',
      'link-backu'p's'
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
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  }

  async loadExistingAgents() {
    try {
      const { data, error } = await this.supabase
        .from('lin'k'_checking_agents')
        .select('*');
      
      if (error) {
        console.error('Erro'r' loading existing agents:', error);
        return;
      }

      if (data) {
        for (const agentData of data) {
          const agent = await this.agentFactory.createAgent(agentData.type, agentData.config);
          agent.id = agentData.id;
          this.agents.set(agent.id, agent);
        }
      }
    } catch (error) {
      console.error('Erro'r' loading existing agents:', error);
    }
  }

  startOrchestration() {
    console.log('🎼 Starting link checking orchestration...');
    
    // Start continuous monitoring
    this.startContinuousMonitoring();
    
    // Start workload balancing
    this.startWorkloadBalancing();
    
    // Start performance optimization
    this.startPerformanceOptimization();
    
    // Start auto-scaling
    this.startAutoScaling();
  }

  startCronJobs() {
    // Link health check every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.performLinkHealthCheck();
    });

    // Comprehensive link audit every hour
    cron.schedule('0 * * * *', () => {
      this.performComprehensiveLinkAudit();
    });

    // Daily link report generation
    cron.schedule('0 0 * * *', () => {
      this.generateDailyLinkReport();
    });

    // Weekly link optimization
    cron.schedule('0 0 * * 0', () => {
      this.performWeeklyLinkOptimization();
    });
  }

  async createLinkTask(taskType, priority = 'norm'a'l', requirements = {}) {
    const taskId = `link-task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const task = {
      id: taskId,
      type: taskType,
      priority,
      requirements,
      status: 'pendi'n'g',
      createdAt: new Date(),
      assignedAgent: null,
      result: null,
      error: null
    };

    this.tasks.set(taskId, task);
    await this.saveTaskToDatabase(task);
    
    console.log(`📋 Created link task: ${taskId} (${taskType})`);
    return task;
  }

  findSuitableAgent(task) {
    const availableAgents = Array.from(this.agents.values())
      .filter(agent => agent.status === 'runni'n'g' && this.agentCanHandleTask(agent, task));

    if (availableAgents.length === 0) {
      return null;
    }

    // Score agents based on capabilities and current workload
    const scoredAgents = availableAgents.map(agent => ({
      agent,
      score: this.calculateAgentScore(agent, task)
    }));

    // Return the agent with the highest score
    return scoredAgents.sort((a, b) => b.score - a.score)[0].agent;
  }

  agentCanHandleTask(agent, task) {
    const requiredCapabilities = this.getRequiredCapabilities(task.type);
    return requiredCapabilities.every(capability => 
      agent.capabilities.includes(capability)
    );
  }

  getRequiredCapabilities(taskType) {
    const capabilityMap = {
      'link-validati'o'n': ['link-validati'o'n', 'http-status-checki'n'g'],
      'link-fixi'n'g': ['link-repa'i'r', 'redirect-handli'n'g'],
      'link-monitori'n'g': ['continuous-monitori'n'g', 'link-health-tracki'n'g'],
      'link-analys'i's': ['link-analys'i's', 'pattern-recogniti'o'n'],
      'link-optimizati'o'n': ['link-repa'i'r', 'url-normalizati'o'n']
    };
    
    return capabilityMap[taskType] || [];
  }

  calculateAgentScore(agent, task) {
    let score = 0;
    
    // Base score from agent performance
    score += agent.performance.successRate * 0.3;
    score += (100 - agent.performance.avgResponseTime) * 0.2;
    
    // Task-specific scoring
    if (task.type === 'link-validati'o'n') {
      score += agent.stats.linksChecked * 0.1;
    } else if (task.type === 'link-fixi'n'g') {
      score += agent.stats.linksFixed * 0.2;
    }
    
    // Workload consideration
    const currentWorkload = this.getAgentWorkload(agent.id);
    score -= currentWorkload * 0.1;
    
    return Math.max(0, score);
  }

  getAgentWorkload(agentId) {
    return Array.from(this.tasks.values())
      .filter(task => task.assignedAgent === agentId && task.status === 'runni'n'g')
      .length;
  }

  async assignTask(taskId, agent) {
    const task = this.tasks.get(taskId);
    if (!task) {
      throw new Error(`Task not found: ${taskId}`);
    }

    task.assignedAgent = agent.id;
    task.status = 'runni'n'g';
    task.startedAt = new Date();

    await this.updateTaskInDatabase(task);
    
    console.log(`📋 Assigned task ${taskId} to agent ${agent.id}`);
    return task;
  }

  async completeTask(taskId, result) {
    const task = this.tasks.get(taskId);
    if (!task) {
      throw new Error(`Task not found: ${taskId}`);
    }

    task.status = 'complet'e'd';
    task.result = result;
    task.completedAt = new Date();
    task.duration = task.completedAt - task.startedAt;

    this.systemMetrics.completedTasks++;
    this.systemMetrics.totalTasks++;

    await this.updateTaskInDatabase(task);
    
    console.log(`✅ Completed task ${taskId}`);
    return task;
  }

  async balanceWorkload() {
    const runningAgents = Array.from(this.agents.values())
      .filter(agent => agent.status === 'runni'n'g');

    if (runningAgents.length === 0) return;

    const workloads = runningAgents.map(agent => ({
      agent,
      workload: this.getAgentWorkload(agent.id)
    }));

    const avgWorkload = workloads.reduce((sum, w) => sum + w.workload, 0) / workloads.length;
    const maxWorkload = Math.max(...workloads.map(w => w.workload));

    // Redistribute tasks if workload is imbalanced
    if (maxWorkload > avgWorkload * 1.5) {
      console.log('⚖️ Balancing link checking workload...');
      
      const overloadedAgents = workloads.filter(w => w.workload > avgWorkload * 1.2);
      const underloadedAgents = workloads.filter(w => w.workload < avgWorkload * 0.8);

      for (const overloaded of overloadedAgents) {
        const tasksToReassign = this.getTasksForAgent(overloaded.agent.id)
          .filter(task => task.status === 'runni'n'g')
          .slice(0, Math.floor(overloaded.workload - avgWorkload));

        for (const task of tasksToReassign) {
          const newAgent = this.findSuitableAgent(task);
          if (newAgent && newAgent.id !== overloaded.agent.id) {
            await this.reassignTask(task.id, newAgent.id);
          }
        }
      }
    }
  }

  getTasksForAgent(agentId) {
    return Array.from(this.tasks.values())
      .filter(task => task.assignedAgent === agentId);
  }

  async reassignTask(taskId, newAgentId) {
    const task = this.tasks.get(taskId);
    if (!task) {
      throw new Error(`Task not found: ${taskId}`);
    }

    const oldAgentId = task.assignedAgent;
    task.assignedAgent = newAgentId;
    task.reassignedAt = new Date();

    await this.updateTaskInDatabase(task);
    
    console.log(`🔄 Reassigned task ${taskId} from ${oldAgentId} to ${newAgentId}`);
    return task;
  }

  startContinuousMonitoring() {
    setInterval(() => {
      this.monitorPerformance();
      this.checkAgentHealth();
      this.balanceWorkload();
    }, this.config.healthCheckInterval);
  }

  startWorkloadBalancing() {
    setInterval(() => {
      this.balanceWorkload();
    }, 60000); // Every minute
  }

  startPerformanceOptimization() {
    setInterval(() => {
      this.optimizeSystem();
    }, 300000); // Every 5 minutes
  }

  startAutoScaling() {
    setInterval(() => {
      this.autoScale();
    }, 600000); // Every 10 minutes
  }

  async performLinkHealthCheck() {
    console.log('🔍 Performing link health check...');
    
    const healthCheckTask = await this.createLinkTask('link-validati'o'n', 'hi'g'h', {
      scope: 'health-che'c'k',
      priority: 'hi'g'h'
    });

    const suitableAgent = this.findSuitableAgent(healthCheckTask);
    if (suitableAgent) {
      await this.assignTask(healthCheckTask.id, suitableAgent);
    }
  }

  async performComprehensiveLinkAudit() {
    console.log('📊 Performing comprehensive link audit...');
    
    const auditTask = await this.createLinkTask('link-analys'i's', 'norm'a'l', {
      scope: 'comprehensive-aud'i't',
      includeExternal: true,
      includeImages: true
    });

    const suitableAgent = this.findSuitableAgent(auditTask);
    if (suitableAgent) {
      await this.assignTask(auditTask.id, suitableAgent);
    }
  }

  async generateDailyLinkReport() {
    console.log('📈 Generating daily link report...');
    
    const report = await this.agentFactory.generateLinkReport();
    const metrics = await this.agentFactory.getSystemMetrics();
    
    const dailyReport = {
      date: new Date().toISOString().split('T')[0],
      metrics,
      report,
      summary: {
        totalLinksChecked: metrics.totalLinksChecked,
        brokenLinksFound: metrics.totalBrokenLinks,
        linksFixed: metrics.totalLinksFixed,
        successRate: metrics.successRate,
        fixRate: metrics.fixRate
      }
    };

    const reportPath = path.join(__dirname, 'link-repor't's', `daily-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(dailyReport, null, 2));
    
    console.log('📊 Daily link report generated');
  }

  async performWeeklyLinkOptimization() {
    console.log('⚡ Performing weekly link optimization...');
    
    const optimizationTask = await this.createLinkTask('link-optimizati'o'n', 'hi'g'h', {
      scope: 'weekly-optimizati'o'n',
      includeSeo: true,
      includeUserExperience: true
    });

    const suitableAgent = this.findSuitableAgent(optimizationTask);
    if (suitableAgent) {
      await this.assignTask(optimizationTask.id, suitableAgent);
    }
  }

  monitorPerformance() {
    const runningAgents = Array.from(this.agents.values())
      .filter(agent => agent.status === 'runni'n'g');

    if (runningAgents.length === 0) return;

    const totalResponseTime = runningAgents.reduce((sum, agent) => 
      sum + agent.performance.avgResponseTime, 0);
    
    this.systemMetrics.avgResponseTime = totalResponseTime / runningAgents.length;
    this.systemMetrics.activeAgents = runningAgents.length;
    this.systemMetrics.totalAgents = this.agents.size;

    const totalErrors = runningAgents.reduce((sum, agent) => 
      sum + agent.stats.errors, 0);
    const totalTasks = runningAgents.reduce((sum, agent) => 
      sum + agent.performance.tasksCompleted + agent.performance.tasksFailed, 0);
    
    this.systemMetrics.errorRate = totalTasks > 0 ? (totalErrors / totalTasks) * 100 : 0;
  }

  checkAgentHealth() {
    const agents = Array.from(this.agents.values());
    
    for (const agent of agents) {
      if (agent.status === 'runni'n'g') {
        const uptime = Date.now() - agent.lastActive.getTime();
        if (uptime > 300000) { // 5 minutes
          console.log(`⚠️ Agent ${agent.id} may be unresponsive`);
          this.handleAgentUnresponsive(agent);
        }
      }
    }
  }

  async handleAgentUnresponsive(agent) {
    console.log(`🔄 Restarting unresponsive agent: ${agent.id}`);
    try {
      await this.agentFactory.restartAgent(agent.id);
    } catch (error) {
      console.error(`Failed to restart agent ${agent.id}:`, error);
    }
  }

  async optimizeSystem() {
    const metrics = await this.agentFactory.getSystemMetrics();
    
    if (metrics.successRate < 90) {
      console.log('🔧 Optimizing system for better success rate...');
      await this.optimizeAgentAllocation();
    }
    
    if (metrics.fixRate < 80) {
      console.log('🔧 Optimizing system for better fix rate...');
      await this.optimizeTaskScheduling();
    }
  }

  async optimizeAgentAllocation() {
    const agents = await this.agentFactory.getAllLinkAgents();
    const runningAgents = agents.filter(agent => agent.status === 'runni'n'g');
    
    // Analyze agent performance and redistribute tasks
    const performanceMap = new Map();
    
    for (const agent of runningAgents) {
      const performance = await this.agentFactory.getAgentPerformance(agent.id);
      performanceMap.set(agent.id, performance);
    }
    
    // Reassign tasks from low-performing agents to high-performing ones
    const sortedAgents = Array.from(performanceMap.entries())
      .sort((a, b) => b[1].performance.successRate - a[1].performance.successRate);
    
    for (let i = 0; i < sortedAgents.length - 1; i++) {
      const [lowPerformingId, lowPerforming] = sortedAgents[sortedAgents.length - 1 - i];
      const [highPerformingId, highPerforming] = sortedAgents[i];
      
      if (lowPerforming.performance.successRate < highPerforming.performance.successRate * 0.8) {
        const tasksToReassign = this.getTasksForAgent(lowPerformingId)
          .filter(task => task.status === 'runni'n'g')
          .slice(0, 2);
        
        for (const task of tasksToReassign) {
          await this.reassignTask(task.id, highPerformingId);
        }
      }
    }
  }

  async optimizeTaskScheduling() {
    // Implement task scheduling optimization
    console.log('📅 Optimizing task scheduling...');
  }

  async autoScale() {
    const metrics = await this.agentFactory.getSystemMetrics();
    const runningAgents = await this.agentFactory.getRunningLinkAgents();
    
    // Scale up if needed
    if (metrics.totalBrokenLinks > runningAgents.length * 10) {
      console.log('📈 Scaling up link checking agents...');
      await this.scaleUp();
    }
    
    // Scale down if possible
    if (metrics.totalBrokenLinks < runningAgents.length * 2 && runningAgents.length > 2) {
      console.log('📉 Scaling down link checking agents...');
      await this.scaleDown();
    }
  }

  async scaleUp() {
    const newAgent = await this.agentFactory.createLinkValidatorAgent({
      maxConcurrentChecks: 15,
      timeout: 20000
    });
    
    await this.agentFactory.startAgent(newAgent.id);
    this.agents.set(newAgent.id, newAgent);
    
    console.log(`📈 Scaled up: Created new link validator agent ${newAgent.id}`);
  }

  async scaleDown() {
    const runningAgents = await this.agentFactory.getRunningLinkAgents();
    const agentsByType = new Map();
    
    for (const agent of runningAgents) {
      if (!agentsByType.has(agent.type)) {
        agentsByType.set(agent.type, []);
      }
      agentsByType.get(agent.type).push(agent);
    }
    
    // Remove the least performing agent of each type
    for (const [type, agents] of agentsByType) {
      if (agents.length > 1) {
        const sortedAgents = agents.sort((a, b) => 
          a.performance.successRate - b.performance.successRate
        );
        
        const agentToRemove = sortedAgents[0];
        await this.agentFactory.stopAgent(agentToRemove.id);
        this.agents.delete(agentToRemove.id);
        
        console.log(`📉 Scaled down: Removed ${type} agent ${agentToRemove.id}`);
      }
    }
  }

  async saveTaskToDatabase(task) {
    try {
      const { error } = await this.supabase
        .from('lin'k'_checking_tasks')
        .insert({
          id: task.id,
          type: task.type,
          priority: task.priority,
          requirements: task.requirements,
          status: task.status,
          created_at: task.createdAt,
          assigned_agent: task.assignedAgent
        });
      
      if (error) {
        console.error('Erro'r' saving task to database:', error);
      }
    } catch (error) {
      console.error('Erro'r' saving task to database:', error);
    }
  }

  async updateTaskInDatabase(task) {
    try {
      const { error } = await this.supabase
        .from('lin'k'_checking_tasks')
        .update({
          status: task.status,
          assigned_agent: task.assignedAgent,
          result: task.result,
          error: task.error,
          completed_at: task.completedAt,
          duration: task.duration
        })
        .eq('i'd', task.id);
      
      if (error) {
        console.error('Erro'r' updating task in database:', error);
      }
    } catch (error) {
      console.error('Erro'r' updating task in database:', error);
    }
  }

  getStatus() {
    return {
      orchestrator: 'link-checki'n'g',
      status: 'runni'n'g',
      agents: this.agents.size,
      runningAgents: Array.from(this.agents.values()).filter(a => a.status === 'runni'n'g').length,
      tasks: this.tasks.size,
      completedTasks: this.systemMetrics.completedTasks,
      systemHealth: this.systemMetrics.systemHealth,
      avgResponseTime: this.systemMetrics.avgResponseTime,
      errorRate: this.systemMetrics.errorRate
    };
  }
}

module.exports = LinkCheckingOrchestrator; 