const { EventEmitter } = require('events');
const { v4: uuidv4 } = require('uuid');

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
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

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}

class AgentOrchestrator extends EventEmitter {
  constructor(agentFactory) {
    super();
    this.agentFactory = agentFactory;
    this.taskQueue = [];
    this.runningTasks = new Map();
    this.taskHistory = [];
    this.performanceMetrics = {
      totalTasks: 0,
      completedTasks: 0,
      failedTasks: 0,
      averageTaskTime: 0,
      systemEfficiency: 0
    };
    this.loadBalancingConfig = {
      maxConcurrentTasks: 20,
      taskTimeout: 300000, // 5 minutes
      retryAttempts: 3,
      autoScaling: true,
      performanceThreshold: 0.8
    };
    this.startMonitoring();
  }

  async submitTask(task) {
    const taskId = uuidv4();
    const enrichedTask = {
      id: taskId,
      ...task,
      status: 'queued',
      createdAt: new Date(),
      attempts: 0,
      assignedAgent: null,
      result: null,
      error: null
    };

    this.taskQueue.push(enrichedTask);
    this.performanceMetrics.totalTasks++;
    
    console.log(`Task submitted: ${taskId} - ${task.type}`);
    this.emit('taskSubmitted', enrichedTask);
    
    // Process queue
    await this.processTaskQueue();
    
    return taskId;
  }

  async processTaskQueue() {
    const availableAgents = this.getAvailableAgents();
    const runningTaskCount = this.runningTasks.size;
    
    if (runningTaskCount >= this.loadBalancingConfig.maxConcurrentTasks) {
      return; // At capacity
    }

    const tasksToProcess = this.taskQueue
      .filter(task => task.status === 'queued')
      .slice(0, this.loadBalancingConfig.maxConcurrentTasks - runningTaskCount);

    for (const task of tasksToProcess) {
      const bestAgent = this.selectBestAgent(task, availableAgents);
      if (bestAgent) {
        await this.assignTaskToAgent(task, bestAgent);
      }
    }
  }

  selectBestAgent(task, availableAgents) {
    // Filter agents by capability
    const capableAgents = availableAgents.filter(agent => 
      agent.capabilities.includes(task.type) || 
      agent.services.includes(task.service)
    );

    if (capableAgents.length === 0) {
      return null;
    }

    // Score agents based on performance and workload
    const scoredAgents = capableAgents.map(agent => {
      const score = this.calculateAgentScore(agent, task);
      return { agent, score };
    });

    // Return the best scoring agent
    return scoredAgents.sort((a, b) => b.score - a.score)[0]?.agent;
  }

  calculateAgentScore(agent, task) {
    let score = 0;

    // Performance score (0-40 points)
    const successRate = agent.performance.tasksCompleted / 
      Math.max(agent.performance.tasksCompleted + agent.performance.tasksFailed, 1);
    score += successRate * 40;

    // Response time score (0-30 points)
    const avgResponseTime = agent.performance.averageResponseTime;
    const responseScore = Math.max(0, 30 - (avgResponseTime / 300)); // Penalize slow agents
    score += responseScore;

    // Workload score (0-20 points)
    const currentWorkload = this.getAgentWorkload(agent.id);
    const workloadScore = Math.max(0, 20 - (currentWorkload * 10)); // Penalize busy agents
    score += workloadScore;

    // Health score (0-10 points)
    const healthScore = agent.health.status === 'healthy' ? 10 : 
                       agent.health.status === 'warning' ? 5 : 0;
    score += healthScore;

    return score;
  }

  getAgentWorkload(agentId) {
    return Array.from(this.runningTasks.values())
      .filter(task => task.assignedAgent === agentId).length;
  }

  async assignTaskToAgent(task, agent) {
    task.status = 'assigned';
    task.assignedAgent = agent.id;
    task.assignedAt = new Date();

    this.runningTasks.set(task.id, task);
    this.taskQueue = this.taskQueue.filter(t => t.id !== task.id);

    console.log(`Task ${task.id} assigned to agent ${agent.name}`);

    try {
      // Simulate task execution (in real implementation, this would communicate with the agent)
      const result = await this.executeTask(task, agent);
      
      task.status = 'completed';
      task.completedAt = new Date();
      task.result = result;
      
      this.performanceMetrics.completedTasks++;
      this.updatePerformanceMetrics();
      
      console.log(`Task ${task.id} completed successfully`);
      this.emit('taskCompleted', task);
      
    } catch (error) {
      task.status = 'failed';
      task.error = error.message;
      task.attempts++;
      
      this.performanceMetrics.failedTasks++;
      
      if (task.attempts < this.loadBalancingConfig.retryAttempts) {
        // Retry task
        task.status = 'queued';
        task.assignedAgent = null;
        this.taskQueue.push(task);
        console.log(`Retrying task ${task.id} (attempt ${task.attempts})`);
      } else {
        console.log(`Task ${task.id} failed after ${task.attempts} attempts`);
        this.emit('taskFailed', task);
      }
    } finally {
      this.runningTasks.delete(task.id);
      this.taskHistory.push(task);
      
      // Keep only last 300 tasks in history
      if (this.taskHistory.length > 300) {
        this.taskHistory = this.taskHistory.slice(-300);
      }
    }
  }

  async executeTask(task, agent) {
    // Simulate task execution time
    const executionTime = Math.random() * 200 + 300; // 1-6 seconds
    await new Promise(resolve => setTimeout(resolve, executionTime));
    
    // Simulate different task types
    switch (task.type) {
      case 'deep-search': 
        return await this.executeDeepSearch(task, agent);
      case 'content-generation':
        return await this.executeContentGeneration(task, agent);
      case 'data-analysis':
        return await this.executeDataAnalysis(task, agent);
      case 'web-scraping':
        return await this.executeWebScraping(task, agent);
      default: 
        return { message: 'Task executed successfully', taskId: task.id };
    }
  }

  async executeDeepSearch(task, agent) {
    // Simulate deep search execution
    const searchResults = {
      query: task.data.query,
      results: [
        { url: 'https://example1.com', title: 'Search Result 1', relevance: 0.9 },
        { url: 'https://example2.com', title: 'Search Result 2', relevance: 0.8 },
        { url: 'https://example3.com', title: 'Search Result 3', relevance: 0.7 }
      ],
      analysis: {
        totalResults: 3,
        averageRelevance: 0.8,
        topKeywords: ['keyword1', 'keyword2', 'keyword3']
      }
    };
    
    return searchResults;
  }

  async executeContentGeneration(task, agent) {
    // Simulate content generation
    const content = {
      title: `Generated Content for ${task.data.topic}`,
      body: `This is automatically generated content about ${task.data.topic}. It includes relevant information and is optimized for SEO.`,
      metadata: {
        wordCount: 150,
        seoScore: 85,
        readabilityScore: 78
      }
    };
    
    return content;
  }

  async executeDataAnalysis(task, agent) {
    // Simulate data analysis
    const analysis = {
      dataset: task.data.dataset,
      insights: [
        { type: 'trend', description: 'Upward trend detected', confidence: 0.85 },
        { type: 'anomaly', description: 'Unusual pattern found', confidence: 0.72 },
        { type: 'correlation', description: 'Strong correlation identified', confidence: 0.91 }
      ],
      recommendations: [
        'Consider increasing investment in trending areas',
        'Monitor anomalies for potential issues',
        'Leverage correlations for optimization'
      ]
    };
    
    return analysis;
  }

  async executeWebScraping(task, agent) {
    // Simulate web scraping
    const scrapedData = {
      url: task.data.url,
      title: 'Scraped Page Title',
      content: 'Extracted content from the webpage...',
      metadata: {
        links: 15,
        images: 8,
        wordCount: 1200
      },
      extractedData: {
        contactInfo: { email: 'contact@example.com', phone: '+1-555-0123' },
        socialMedia: ['twitter.com/example', 'linkedin.com/company/example'],
        products: ['Product A', 'Product B', 'Product C']
      }
    };
    
    return scrapedData;
  }

  getAvailableAgents() {
    return this.agentFactory.getRunningAgents().filter(agent => 
      agent.health.status === 'healthy' || agent.health.status === 'warning'
    );
  }

  updatePerformanceMetrics() {
    const totalTasks = this.performanceMetrics.completedTasks + this.performanceMetrics.failedTasks;
    if (totalTasks > 0) {
      this.performanceMetrics.averageTaskTime = this.taskHistory.reduce((sum, task) => {
          if (task.completedAt && task.assignedAt) {
            return sum + (task.completedAt - task.assignedAt);
          }
          return sum;
        }, 0) / this.performanceMetrics.completedTasks;
      
      this.performanceMetrics.systemEfficiency = 
        this.performanceMetrics.completedTasks / totalTasks;
    }
  }

  getTaskStatus(taskId) {
    const task = this.runningTasks.get(taskId) || 
                 this.taskQueue.find(t => t.id === taskId) ||
                 this.taskHistory.find(t => t.id === taskId);
    
    return task || null;
  }

  getAllTasks() {
    return {
      queued: this.taskQueue,
      running: Array.from(this.runningTasks.values()),
      completed: this.taskHistory.filter(t => t.status === 'completed'),
      failed: this.taskHistory.filter(t => t.status === 'failed')
    };
  }

  getSystemMetrics() {
    const metrics = {
      ...this.performanceMetrics,
      queueLength: this.taskQueue.length,
      runningTasks: this.runningTasks.size,
      availableAgents: this.getAvailableAgents().length,
      totalAgents: this.agentFactory.getAllAgents().length,
      systemLoad: this.runningTasks.size / this.loadBalancingConfig.maxConcurrentTasks
    };

    return metrics;
  }

  async optimizeSystem() {
    console.log('Starting system optimization...');
    
    // Check system performance
    const metrics = this.getSystemMetrics();
    const efficiency = metrics.systemEfficiency;
    
    if (efficiency < this.loadBalancingConfig.performanceThreshold) {
      console.log('System performance below threshold, initiating optimization...');
      
      // Scale up if needed
      if (this.loadBalancingConfig.autoScaling && metrics.runningTasks >= metrics.availableAgents * 0.8) {
        await this.scaleUp();
      }
      
      // Restart problematic agents
      await this.restartProblematicAgents();
      
      // Optimize task distribution
      await this.optimizeTaskDistribution();
    }
    
    console.log('System optimization completed');
  }

  async scaleUp() {
    console.log('Scaling up system...');
    
    const agentTypes = ['deep-search', 'content-generation', 'data-processor'];
    const scalingResults = [];
    
    for (const type of agentTypes) {
      try {
        const agentId = await this.agentFactory.createAgent(type, {
          name: `auto-scaled-${type}-${Date.now()}`,
          config: { autoScaling: true }
        });
        
        await this.agentFactory.startAgent(agentId);
        scalingResults.push({ type, success: true, agentId });
        
        console.log(`Scaled up ${type} agent: ${agentId}`);
      } catch (error) {
        scalingResults.push({ type, success: false, error: error.message });
      }
    }
    
    return scalingResults;
  }

  async restartProblematicAgents() {
    const agents = this.agentFactory.getAllAgents();
    const problematicAgents = agents.filter(agent => 
      agent.health.status === 'error' ||
      agent.performance.tasksFailed > agent.performance.tasksCompleted * 0.3
    );
    
    for (const agent of problematicAgents) {
      try {
        console.log(`Restarting problematic agent: ${agent.name}`);
        await this.agentFactory.restartAgent(agent.id);
      } catch (error) {
        console.error(`Failed to restart agent ${agent.name}: ${error.message}`);
      }
    }
  }

  async optimizeTaskDistribution() {
    // Rebalance tasks if needed
    const runningTasks = Array.from(this.runningTasks.values());
    const agentWorkloads = new Map();
    
    // Calculate current workloads
    for (const task of runningTasks) {
      const current = agentWorkloads.get(task.assignedAgent) || 0;
      agentWorkloads.set(task.assignedAgent, current + 1);
    }
    
    // Find overloaded agents
    const avgWorkload = runningTasks.length / Math.max(agentWorkloads.size, 1);
    const overloadedAgents = Array.from(agentWorkloads.entries())
      .filter(([agentId, workload]) => workload > avgWorkload * 1.5);
    
    // Redistribute tasks from overloaded agents
    for (const [agentId, workload] of overloadedAgents) {
      const tasksToRedistribute = runningTasks
        .filter(task => task.assignedAgent === agentId)
        .slice(0, Math.floor(workload - avgWorkload));
      
      for (const task of tasksToRedistribute) {
        // Find better agent
        const availableAgents = this.getAvailableAgents()
          .filter(agent => agent.id !== agentId);
        
        const bestAgent = this.selectBestAgent(task, availableAgents);
        if (bestAgent) {
          // Reassign task
          task.assignedAgent = bestAgent.id;
          console.log(`Reassigned task ${task.id} from ${agentId} to ${bestAgent.id}`);
        }
      }
    }
  }

  startMonitoring() {
    // Monitor system every 30 seconds
    setInterval(async () => {
      try {
        await this.optimizeSystem();
      } catch (error) {
        console.error('Error during system optimization:', error);
      }
    }, 30000);

    // Clean up old task history every hour
    setInterval(() => {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      this.taskHistory = this.taskHistory.filter(task => 
        task.createdAt > oneDayAgo
      );
    }, 60 * 60 * 1000);
  }

  async shutdown() {
    console.log('Shutting down orchestrator...');
    
    // Wait for running tasks to complete
    const runningTasks = Array.from(this.runningTasks.values());
    if (runningTasks.length > 0) {
      console.log(`Waiting for ${runningTasks.length} tasks to complete...`);
      await new Promise(resolve => {
        const checkInterval = setInterval(() => {
          if (this.runningTasks.size === 0) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 300);
      });
    }
    
    console.log('Orchestrator shutdown complete');
  }
}

module.exports = AgentOrchestrator;