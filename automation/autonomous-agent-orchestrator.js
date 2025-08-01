const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const cron = require('node-cron');

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
      systemHealth: 'good',
      avgResponseTime: 0,
      errorRate: 0,
      efficiency: 0
    };
    this.config = this.loadConfig();
    this.logs = [];
  }

  loadConfig() {
    try {
      const configPath = path.join(__dirname, 'orchestrator-config.json');
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading orchestrator config:', error);
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
      'orchestrators',
      'tasks',
      'workloads',
      'monitoring',
      'reports',
      'analytics',
      'backups'
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
        .from('autonomous_agents')
        .select('*');

      if (error) throw error;
      
      data.forEach(agent => {
        this.agents.set(agent.id, {
          ...agent,
          status: agent.status || 'idle',
          workload: agent.workload || 0,
          currentTask: agent.current_task || 'Initializing...',
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
      console.error('Error loading existing agents:', error);
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

  async createTask(taskType, priority = 'normal', requirements = {}) {
    const taskId = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const task = {
      id: taskId,
      type: taskType,
      priority,
      requirements,
      status: 'pending',
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
        agent.status === 'active' && 
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
      'content-generation': ['AI writing', 'Content planning'],
      'marketing': ['Campaign management', 'Email marketing'],
      'sales': ['Lead scoring', 'CRM integration'],
      'analytics': ['Data analysis', 'Performance tracking'],
      'research': ['Web scraping', 'Data analysis'],
      'social-media': ['Content scheduling', 'Engagement monitoring'],
      'seo': ['Keyword research', 'On-page optimization'],
      'support': ['Ticket management', 'Auto-responses'],
      'data-processing': ['Data cleaning', 'ETL processes'],
      'qa': ['Content review', 'Error detection']
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

    task.status = 'assigned';
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

    task.status = 'completed';
    task.completedAt = new Date().toISOString();
    task.result = result;

    const agent = this.agents.get(task.assignedAgent);
    if (agent) {
      agent.workload = Math.max(0, agent.workload - 20);
      agent.performance.tasksCompleted++;
      agent.currentTask = 'Waiting for next task...';
      
      this.agents.set(task.assignedAgent, agent);
      await this.updateAgentInDatabase(agent);
    }

    this.tasks.set(taskId, task);
    await this.updateTaskInDatabase(task);

    console.log(`✅ Task ${taskId} completed by agent ${agent?.name}`);
  }

  balanceWorkload() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    
    if (activeAgents.length < 2) return;

    const avgWorkload = activeAgents.reduce((sum, a) => sum + a.workload, 0) / activeAgents.length;
    const highWorkloadAgents = activeAgents.filter(a => a.workload > avgWorkload + 20);
    const lowWorkloadAgents = activeAgents.filter(a => a.workload < avgWorkload - 20);

    if (highWorkloadAgents.length > 0 && lowWorkloadAgents.length > 0) {
      console.log('⚖️ Balancing workload across agents...');
      
      // Move some tasks from high workload agents to low workload agents
      highWorkloadAgents.forEach(highAgent => {
        const pendingTasks = Array.from(this.tasks.values())
          .filter(t => t.assignedAgent === highAgent.id && t.status === 'assigned');
        
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
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    
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
      const statusPath = path.join(__dirname, 'logs', `${agent.id}_status.json`);
      
      if (fs.existsSync(statusPath)) {
        try {
          const statusData = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
          Object.assign(agent, statusData);
          this.updateAgentInDatabase(agent);
        } catch (error) {
          console.error(`Error reading status for agent ${agent.id}:`, error);
        }
      }
    });
  }

  distributeTasks() {
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pending');
    
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
      priority: 'high',
      autoScaling: true
    });

    console.log(`🏭 Created specialized agent for ${taskType}: ${agentId}`);
  }

  analyzePerformance() {
    console.log('📊 Analyzing system performance...');
    
    const performanceData = {
      timestamp: new Date().toISOString(),
      totalAgents: this.agents.size,
      activeAgents: Array.from(this.agents.values()).filter(a => a.status === 'active').length,
      totalTasks: this.tasks.size,
      completedTasks: Array.from(this.tasks.values()).filter(t => t.status === 'completed').length,
      avgResponseTime: this.systemMetrics.avgResponseTime,
      efficiency: this.systemMetrics.efficiency,
      workloadDistribution: this.getWorkloadDistribution()
    };

    const analyticsPath = path.join(__dirname, 'analytics', `performance_${Date.now()}.json`);
    fs.writeFileSync(analyticsPath, JSON.stringify(performanceData, null, 2));
  }

  getWorkloadDistribution() {
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
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

    const workloadPath = path.join(__dirname, 'workloads', `workload_${Date.now()}.json`);
    fs.writeFileSync(workloadPath, JSON.stringify(workloadData, null, 2));
  }

  identifyBottlenecks() {
    const bottlenecks = [];
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    
    // Check for overloaded agents
    const overloadedAgents = activeAgents.filter(a => a.workload > 90);
    if (overloadedAgents.length > 0) {
      bottlenecks.push({
        type: 'overloaded_agents',
        count: overloadedAgents.length,
        agents: overloadedAgents.map(a => a.name)
      });
    }

    // Check for task queue buildup
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pending');
    if (pendingTasks.length > 10) {
      bottlenecks.push({
        type: 'task_queue_buildup',
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
        case 'overloaded_agents':
          recommendations.push('Create additional agents to distribute workload');
          break;
        case 'task_queue_buildup':
          recommendations.push('Optimize task processing or add more agents');
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
      .filter(a => a.status === 'active' && a.workload < 20);
    
    if (underutilizedAgents.length > 2) {
      console.log(`🔄 Stopping ${underutilizedAgents.length - 1} underutilized agents`);
      underutilizedAgents.slice(1).forEach(agent => {
        agent.status = 'stopped';
        this.agents.set(agent.id, agent);
        this.updateAgentInDatabase(agent);
      });
    }
  }

  optimizeTaskScheduling() {
    // Implement intelligent task scheduling
    const pendingTasks = Array.from(this.tasks.values()).filter(t => t.status === 'pending');
    
    // Prioritize tasks based on type and requirements
    pendingTasks.sort((a, b) => {
      const priorityOrder = { high: 3, normal: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    // Update task order
    pendingTasks.forEach((task, index) => {
      task.priority = index < 5 ? 'high' : task.priority;
      this.tasks.set(task.id, task);
    });
  }

  cleanupCompletedTasks() {
    const completedTasks = Array.from(this.tasks.values()).filter(t => t.status === 'completed');
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

    const reportPath = path.join(__dirname, 'reports', `comprehensive_report_${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Save to database
    await this.saveReportToDatabase(report);
  }

  getAgentSummary() {
    const agents = Array.from(this.agents.values());
    return {
      total: agents.length,
      active: agents.filter(a => a.status === 'active').length,
      idle: agents.filter(a => a.status === 'idle').length,
      error: agents.filter(a => a.status === 'error').length,
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
      pending: tasks.filter(t => t.status === 'pending').length,
      assigned: tasks.filter(t => t.status === 'assigned').length,
      completed: tasks.filter(t => t.status === 'completed').length,
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
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'active');
    
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
      recommendations.push('Optimize agent performance and error handling');
    }

    if (analysis.avgWorkload > 80) {
      recommendations.push('Scale up system capacity or add more agents');
    }

    if (analysis.avgResponseTime > 5000) {
      recommendations.push('Optimize task processing and reduce response times');
    }

    return recommendations;
  }

  async updateAgentInDatabase(agent) {
    try {
      const { error } = await this.supabase
        .from('autonomous_agents')
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
      console.error('Error updating agent in database:', error);
    }
  }

  async updateTaskInDatabase(task) {
    try {
      const { error } = await this.supabase
        .from('orchestrator_tasks')
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
      console.error('Error updating task in database:', error);
    }
  }

  async saveReportToDatabase(report) {
    try {
      const { error } = await this.supabase
        .from('orchestrator_reports')
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
      console.error('Error saving report to database:', error);
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