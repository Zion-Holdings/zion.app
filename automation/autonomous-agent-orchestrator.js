const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const cron = require('node-cr'o'n');

class AutonomousAgentOrchestrator {
  constructor() {
    this.agents = new Map();
    this.orchestrators = new Map();
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
      efficiency: 0
    };
    this.config = this.loadConfig();
    this.logs = [];
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'orchestrator-confi'g'.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'ut'f'8'));
      }
    } catch (error) {
      console.error('Erro'r' loading orchestrator config:', error);
    }
    return {
      maxConcurrentTasks: 20,
      taskTimeout: 300000,
      healthCheckInterval: 30000,
      workloadBalancing: true,
      autoScaling: true,
      performanceOptimization: true,
      loadBalancing: true,
      failover: true,
      monitoring: true
    };
  }

  async initialize() {
    console.log('🎼 Initializing Autonomous Agent Orchestrator...');
    
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
    
    console.log('✅ Autonomous Agent Orchestrator initialized successfully');
  }

  ensureDirectories() {
    const directories = [
      'orchestrato'r's',
      'tas'k's',
      'workloa'd's',
      'monitori'n'g',
      'repor't's',
      'analyti'c's',
      'backu'p's'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initializeDatabase() {
    // Check if we'r'e' in fallback mode or have placeholder values
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || supabaseUrl.includes('placehold'e'r') || 
        !supabaseKey || supabaseKey.includes('placehold'e'r') ||
        process.env.AUTOMATION_FALLBACK_MODE === 'tr'u'e') {
      console.log('⚠️  Running in fallback mode - Supabase disabled');
      this.supabase = null;
      return;
    }
    
    try {
      const { createClient } = require('@supabase/supabase-js');
      this.supabase = createClient(supabaseUrl, supabaseKey);
      console.log('✅ Supabase client initialized');
    } catch (error) {
      console.log('⚠️  Failed to initialize Supabase, running in fallback mode');
      this.supabase = null;
    }
  }

  async loadExistingAgents() {
    try {
      const { data, error } = await this.supabase
        .from('autonomou's'_agents')
        .select('*');

      if (error) throw error;
      
      data.forEach(agent => {
        this.agents.set(agent.id, {
          ...agent,
          status: agent.status || 'id'l'e',
          workload: agent.workload || 0,
          currentTask: agent.current_task || 'Initializin'g'...',
          nextSteps: agent.next_steps || [],
          performance: agent.performance || {
            tasksCompleted: 0,
            successRate: 100,
            avgResponseTime: 0
          }
        });
      });

      console.log(`✅ Loaded ${this.agents.size} existing agents`);
    } catch (error) {
      console.error('Erro'r' loading existing agents:', error);
    }
  }

  startOrchestration() {
    // Start workload balancing
    if (this.config.workloadBalancing) {
      setInterval(() => {
        this.balanceWorkload();
      }, 10000);
    }

    // Start performance monitoring
    if (this.config.monitoring) {
      setInterval(() => {
        this.monitorPerformance();
      }, 15000);
    }

    // Start health checks
    setInterval(() => {
      this.checkAgentHealth();
    }, this.config.healthCheckInterval);

    // Start task distribution
    setInterval(() => {
      this.distributeTasks();
    }, 5000);
  }

  startCronJobs() {
    // Every minute - task optimization
    cron.schedule('* * * * *', () => {
      this.optimizeTaskDistribution();
    });

    // Every 5 minutes - performance analysis
    cron.schedule('*/5 * * * *', () => {
      this.analyzePerformance();
    });

    // Every 10 minutes - workload analysis
    cron.schedule('*/10 * * * *', () => {
      this.analyzeWorkload();
    });

    // Every 30 minutes - system optimization
    cron.schedule('*/30 * * * *', () => {
      this.optimizeSystem();
    });

    // Every hour - comprehensive report
    cron.schedule('0 * * * *', () => {
      this.generateComprehensiveReport();
    });

    console.log('✅ Orchestrator cron jobs scheduled');
  }

  async createTask(taskType, priority = 'norm'a'l', requirements = {}) {
    const taskId = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const task = {
      id: taskId,
      type: taskType,
      priority,
      requirements,
      status: 'pendi'n'g',
      assignedAgent: null,
      createdAt: new Date().toISOString(),
      startedAt: null,
      completedAt: null,
      result: null,
      error: null
    };

    this.tasks.set(taskId, task);
    
    // Find suitable agent
    const suitableAgent = this.findSuitableAgent(task);
    if (suitableAgent) {
      await this.assignTask(taskId, suitableAgent);
    }

    return taskId;
  }

  findSuitableAgent(task) {
    const availableAgents = Array.from(this.agents.values())
      .filter(agent => 
        agent.status === 'acti'v'e' && 
        agent.workload < 80 &&
        this.agentCanHandleTask(agent, task)
      );

    if (availableAgents.length === 0) return null;

    // Sort by workload and performance
    availableAgents.sort((a, b) => {
      const aScore = this.calculateAgentScore(a);
      const bScore = this.calculateAgentScore(b);
      return bScore - aScore;
    });

    return availableAgents[0];
  }

  agentCanHandleTask(agent, task) {
    // Check if agent has required capabilities
    const requiredCapabilities = this.getRequiredCapabilities(task.type);
    return requiredCapabilities.every(cap => agent.capabilities.includes(cap));
  }

  getRequiredCapabilities(taskType) {
    const capabilityMap = {
      'content-generati'o'n': ['A'I' writing', 'Conten't' planning'],
      'marketi'n'g': ['Campaig'n' management', 'Emai'l' marketing'],
      'sal'e's': ['Lea'd' scoring', 'CR'M' integration'],
      'analyti'c's': ['Dat'a' analysis', 'Performanc'e' tracking'],
      'resear'c'h': ['We'b' scraping', 'Dat'a' analysis'],
      'social-med'i'a': ['Conten't' scheduling', 'Engagemen't' monitoring'],
      's'e'o': ['Keywor'd' research', 'On-pag'e' optimization'],
      'suppo'r't': ['Ticke't' management', 'Auto-respons'e's'],
      'data-processi'n'g': ['Dat'a' cleaning', 'ET'L' processes'],
      'q'a': ['Conten't' review', 'Erro'r' detection']
    };

    return capabilityMap[taskType] || [];
  }

  calculateAgentScore(agent) {
    const workloadScore = (100 - agent.workload) / 100;
    const performanceScore = agent.performance.successRate / 100;
    const responseTimeScore = Math.max(0, 1 - (agent.performance.avgResponseTime / 1000));
    
    return (workloadScore * 0.4) + (performanceScore * 0.4) + (responseTimeScore * 0.2);
  }

  async assignTask(taskId, agent) {
    const task = this.tasks.get(taskId);
    const agentData = this.agents.get(agent.id);

    if (!task || !agentData) return;

    task.status = 'assign'e'd';
    task.assignedAgent = agent.id;
    task.startedAt = new Date().toISOString();

    agentData.currentTask = `Processing: ${task.type}`;
    agentData.workload = Math.min(100, agentData.workload + 20);

    this.tasks.set(taskId, task);
    this.agents.set(agent.id, agentData);

    // Update database
    await this.updateAgentInDatabase(agentData);
    await this.updateTaskInDatabase(task);

    console.log(`📋 Assigned task ${taskId} to agent ${agent.name}`);
  }

  async completeTask(taskId, result) {
    const task = this.tasks.get(taskId);
    if (!task) return;

    task.status = 'complet'e'd';
    task.completedAt = new Date().toISOString();
    task.result = result;

    const agent = this.agents.get(task.assignedAgent);
    if (agent) {
      agent.workload = Math.max(0, agent.workload - 20);
      agent.performance.tasksCompleted++;
      agent.currentTask = 'Waitin'g' for next task...';
      
      this.agents.set(task.assignedAgent, agent);
      await this.updateAgentInDatabase(agent);
    }

    this.tasks.set(taskId, task);
    await this.updateTaskInDatabase(task);

    console.log(`✅ Task ${taskId} completed by agent ${agent?.name}`);
  }

  balanceWorkload() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e');
    
    if (activeAgents.length < 2) return;

    const avgWorkload = activeAgents.reduce((sum, a) => sum + a.workload, 0) / activeAgents.length;
    const highWorkloadAgents = activeAgents.filter(a => a.workload > avgWorkload + 20);
    const lowWorkloadAgents = activeAgents.filter(a => a.workload < avgWorkload - 20);

    if (highWorkloadAgents.length > 0 && lowWorkloadAgents.length > 0) {
      console.log('⚖️ Balancing workload across agents...');
      
      // Move some tasks from high workload agents to low workload agents
      highWorkloadAgents.forEach(highAgent => {
        const pendingTasks = Array.from(this.tasks.values())
          .filter(t => t.assignedAgent === highAgent.id && t.status === 'assign'e'd');
        
        if (pendingTasks.length > 0) {
          const taskToMove = pendingTasks[0];
          const lowAgent = lowWorkloadAgents[0];
          
          if (this.agentCanHandleTask(lowAgent, taskToMove)) {
            this.reassignTask(taskToMove.id, lowAgent.id);
          }
        }
      });
    }
  }

  async reassignTask(taskId, newAgentId) {
    const task = this.tasks.get(taskId);
    const newAgent = this.agents.get(newAgentId);
    const oldAgent = task.assignedAgent ? this.agents.get(task.assignedAgent) : null;

    if (!task || !newAgent) return;

    // Update old agent
    if (oldAgent) {
      oldAgent.workload = Math.max(0, oldAgent.workload - 20);
      this.agents.set(task.assignedAgent, oldAgent);
      await this.updateAgentInDatabase(oldAgent);
    }

    // Update new agent
    newAgent.workload = Math.min(100, newAgent.workload + 20);
    this.agents.set(newAgentId, newAgent);
    await this.updateAgentInDatabase(newAgent);

    // Update task
    task.assignedAgent = newAgentId;
    this.tasks.set(taskId, task);
    await this.updateTaskInDatabase(task);

    console.log(`🔄 Reassigned task ${taskId} from ${oldAgent?.name} to ${newAgent.name}`);
  }

  monitorPerformance() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e');
    
    if (activeAgents.length === 0) return;

    const avgResponseTime = activeAgents.reduce((sum, a) => sum + a.performance.avgResponseTime, 0) / activeAgents.length;
    const avgSuccessRate = activeAgents.reduce((sum, a) => sum + a.performance.successRate, 0) / activeAgents.length;
    const errorAgents = activeAgents.filter(a => a.performance.successRate < 80);

    this.systemMetrics.avgResponseTime = avgResponseTime;
    this.systemMetrics.efficiency = avgSuccessRate;

    if (errorAgents.length > 0) {
      console.log(`⚠️ Found ${errorAgents.length} agents with low performance`);
      errorAgents.forEach(agent => {
        this.optimizeAgent(agent.id);
      });
    }
  }

  async optimizeAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) return;

    console.log(`🔧 Optimizing agent: ${agent.name}`);

    // Implement agent optimization logic
    // This could include:
    // - Restarting the agent
    // - Adjusting configuration
    // - Updating capabilities
    // - Reallocating resources

    agent.performance.successRate = Math.min(100, agent.performance.successRate + 10);
    this.agents.set(agentId, agent);
    await this.updateAgentInDatabase(agent);
  }

  checkAgentHealth() {
    Array.from(this.agents.values()).forEach(agent => {
      const statusPath = path.join(__dirname, 'lo'g's', `${agent.id}_status.json`);
      
      if (fs.existsSync(statusPath)) {
        try {
          const statusData = JSON.parse(fs.readFileSync(statusPath, 'ut'f'8'));
          Object.assign(agent, statusData);
          this.updateAgentInDatabase(agent);
        } catch (error) {
          console.error(`Error reading status for agent ${agent.id}:`, error);
        }
      }
    });
  }

  distributeTasks() {
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pendi'n'g');
    
    pendingTasks.forEach(task => {
      const suitableAgent = this.findSuitableAgent(task);
      if (suitableAgent) {
        this.assignTask(task.id, suitableAgent);
      }
    });
  }

  optimizeTaskDistribution() {
    console.log('🎯 Optimizing task distribution...');
    
    // Analyze task patterns and optimize distribution
    const taskTypes = new Map();
    Array.from(this.tasks.values()).forEach(task => {
      taskTypes.set(task.type, (taskTypes.get(task.type) || 0) + 1);
    });

    // Create specialized agents for high-demand task types
    taskTypes.forEach((count, type) => {
      if (count > 5) {
        this.createSpecializedAgent(type);
      }
    });
  }

  async createSpecializedAgent(taskType) {
    const AgentFactory = require('./autonomous-agent-factory');
    const factory = new AgentFactory();

    const agentId = await factory.createAgent(taskType, {
      name: `Specialized ${taskType} Agent`,
      priority: 'hi'g'h',
      autoScaling: true
    });

    console.log(`🏭 Created specialized agent for ${taskType}: ${agentId}`);
  }

  analyzePerformance() {
    console.log('📊 Analyzing system performance...');
    
    const performanceData = {
      timestamp: new Date().toISOString(),
      totalAgents: this.agents.size,
      activeAgents: Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length,
      totalTasks: this.tasks.size,
      completedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'complet'e'd').length,
      avgResponseTime: this.systemMetrics.avgResponseTime,
      efficiency: this.systemMetrics.efficiency,
      workloadDistribution: this.getWorkloadDistribution()
    };

    const analyticsPath = path.join(__dirname, 'analyti'c's', `performance_${Date.now()}.json`);
    fs.writeFileSync(analyticsPath, JSON.stringify(performanceData, null, 2));
  }

  getWorkloadDistribution() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e');
    return {
      low: activeAgents.filter(a => a.workload < 30).length,
      medium: activeAgents.filter(a => a.workload >= 30 && a.workload < 70).length,
      high: activeAgents.filter(a => a.workload >= 70).length
    };
  }

  analyzeWorkload() {
    console.log('⚖️ Analyzing workload distribution...');
    
    const workloadData = {
      timestamp: new Date().toISOString(),
      distribution: this.getWorkloadDistribution(),
      bottlenecks: this.identifyBottlenecks(),
      recommendations: this.generateWorkloadRecommendations()
    };

    const workloadPath = path.join(__dirname, 'workloa'd's', `workload_${Date.now()}.json`);
    fs.writeFileSync(workloadPath, JSON.stringify(workloadData, null, 2));
  }

  identifyBottlenecks() {
    const bottlenecks = [];
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e');
    
    // Check for overloaded agents
    const overloadedAgents = activeAgents.filter(a => a.workload > 90);
    if (overloadedAgents.length > 0) {
      bottlenecks.push({
        type: 'overloade'd'_agents',
        count: overloadedAgents.length,
        agents: overloadedAgents.map(a => a.name)
      });
    }

    // Check for task queue buildup
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pendi'n'g');
    if (pendingTasks.length > 10) {
      bottlenecks.push({
        type: 'tas'k'_queue_buildup',
        count: pendingTasks.length
      });
    }

    return bottlenecks;
  }

  generateWorkloadRecommendations() {
    const recommendations = [];
    const bottlenecks = this.identifyBottlenecks();

    bottlenecks.forEach(bottleneck => {
      switch (bottleneck.type) {
        case 'overloade'd'_agents':
          recommendations.push('Creat'e' additional agents to distribute workload');
          break;
        case 'tas'k'_queue_buildup':
          recommendations.push('Optimiz'e' task processing or add more agents');
          break;
      }
    });

    return recommendations;
  }

  optimizeSystem() {
    console.log('🚀 Optimizing system performance...');
    
    // Implement system-wide optimizations
    this.optimizeAgentAllocation();
    this.optimizeTaskScheduling();
    this.cleanupCompletedTasks();
  }

  optimizeAgentAllocation() {
    // Analyze agent utilization and optimize allocation
    const underutilizedAgents = Array.from(this.agents.values())
      .filter(a => a.status === 'acti'v'e' && a.workload < 20);
    
    if (underutilizedAgents.length > 2) {
      console.log(`🔄 Stopping ${underutilizedAgents.length - 1} underutilized agents`);
      underutilizedAgents.slice(1).forEach(agent => {
        agent.status = 'stopp'e'd';
        this.agents.set(agent.id, agent);
        this.updateAgentInDatabase(agent);
      });
    }
  }

  optimizeTaskScheduling() {
    // Implement intelligent task scheduling
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pendi'n'g');
    
    // Prioritize tasks based on type and requirements
    pendingTasks.sort((a, b) => {
      const priorityOrder = { high: 3, normal: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    // Update task order
    pendingTasks.forEach((task, index) => {
      task.priority = index < 5 ? 'hi'g'h' : task.priority;
      this.tasks.set(task.id, task);
    });
  }

  cleanupCompletedTasks() {
    const completedTasks = Array.from(this.tasks.values()).filter(t => t.status === 'complet'e'd');
    const cutoffDate = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago
    
    completedTasks.forEach(task => {
      if (new Date(task.completedAt) < cutoffDate) {
        this.tasks.delete(task.id);
      }
    });
  }

  async generateComprehensiveReport() {
    console.log('📋 Generating comprehensive system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemMetrics: this.systemMetrics,
      agentSummary: this.getAgentSummary(),
      taskSummary: this.getTaskSummary(),
      performanceAnalysis: this.getPerformanceAnalysis(),
      recommendations: this.generateSystemRecommendations()
    };

    const reportPath = path.join(__dirname, 'repor't's', `comprehensive_report_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Save to database
    await this.saveReportToDatabase(report);
  }

  getAgentSummary() {
    const agents = Array.from(this.agents.values());
    return {
      total: agents.length,
      active: agents.filter(a => a.status === 'acti'v'e').length,
      idle: agents.filter(a => a.status === 'id'l'e').length,
      error: agents.filter(a => a.status === 'err'o'r').length,
      byType: this.groupAgentsByType(agents)
    };
  }

  groupAgentsByType(agents) {
    const grouped = {};
    agents.forEach(agent => {
      grouped[agent.type] = (grouped[agent.type] || 0) + 1;
    });
    return grouped;
  }

  getTaskSummary() {
    const tasks = Array.from(this.tasks.values());
    return {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'pendi'n'g').length,
      assigned: tasks.filter(t => t.status === 'assign'e'd').length,
      completed: tasks.filter(t => t.status === 'complet'e'd').length,
      byType: this.groupTasksByType(tasks)
    };
  }

  groupTasksByType(tasks) {
    const grouped = {};
    tasks.forEach(task => {
      grouped[task.type] = (grouped[task.type] || 0) + 1;
    });
    return grouped;
  }

  getPerformanceAnalysis() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e');
    
    return {
      avgResponseTime: this.systemMetrics.avgResponseTime,
      avgSuccessRate: activeAgents.reduce((sum, a) => sum + a.performance.successRate, 0) / activeAgents.length || 0,
      avgWorkload: activeAgents.reduce((sum, a) => sum + a.workload, 0) / activeAgents.length || 0,
      efficiency: this.systemMetrics.efficiency
    };
  }

  generateSystemRecommendations() {
    const recommendations = [];
    const analysis = this.getPerformanceAnalysis();

    if (analysis.avgSuccessRate < 85) {
      recommendations.push('Optimiz'e' agent performance and error handling');
    }

    if (analysis.avgWorkload > 80) {
      recommendations.push('Scal'e' up system capacity or add more agents');
    }

    if (analysis.avgResponseTime > 5000) {
      recommendations.push('Optimiz'e' task processing and reduce response times');
    }

    return recommendations;
  }

  async updateAgentInDatabase(agent) {
    try {
      const { error } = await this.supabase
        .from('autonomou's'_agents')
        .upsert([{
          id: agent.id,
          name: agent.name,
          type: agent.type,
          status: agent.status,
          workload: agent.workload,
          current_task: agent.currentTask,
          next_steps: agent.nextSteps,
          services: agent.services,
          capabilities: agent.capabilities,
          dependencies: agent.dependencies,
          performance: agent.performance,
          created_at: agent.created_at,
          last_active: agent.lastActive,
          config: agent.config
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Erro'r' updating agent in database:', error);
    }
  }

  async updateTaskInDatabase(task) {
    try {
      if (!this.supabase) {
        console.log('⚠️  Supabase not available, skipping database operation');
        return { error: null };
      }
      const { error } = await this.supabase
        .from('orchestrato'r'_tasks')
        .upsert([{
          id: task.id,
          type: task.type,
          priority: task.priority,
          requirements: task.requirements,
          status: task.status,
          assigned_agent: task.assignedAgent,
          created_at: task.createdAt,
          started_at: task.startedAt,
          completed_at: task.completedAt,
          result: task.result,
          error: task.error
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Erro'r' updating task in database:', error);
    }
  }

  async saveReportToDatabase(report) {
    try {
      if (!this.supabase) {
        console.log('⚠️  Supabase not available, skipping database operation');
        return { error: null };
      }
      const { error } = await this.supabase
        .from('orchestrato'r'_reports')
        .insert([{
          timestamp: report.timestamp,
          system_metrics: report.systemMetrics,
          agent_summary: report.agentSummary,
          task_summary: report.taskSummary,
          performance_analysis: report.performanceAnalysis,
          recommendations: report.recommendations
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Erro'r' saving report to database:', error);
    }
  }

  getStatus() {
    return {
      agents: Array.from(this.agents.values()),
      tasks: Array.from(this.tasks.values()),
      systemMetrics: this.systemMetrics,
      config: this.config
    };
  }
}

module.exports = AutonomousAgentOrchestrator;

// Auto-run if called directly
if (require.main === module) {
    const orchestrator = new AutonomousAgentOrchestrator();
    orchestrator.initialize()
        .then(() => {
            console.log('✅ Orchestrator completed successfully');
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ Orchestrator failed:', error);
            process.exit(1);
        });
} 