#!/usr/bin/env node

/**
 * Advanced Workflow Orchestrator v1.0
 * Intelligent workflow management with dependency handling, scheduling, and execution optimization
 */

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class AdvancedWorkflowOrchestrator extends EventEmitter {
  constructor() {
    super();
    
    this.workflows = new Map();
    this.executions = new Map();
    this.scheduler = new Map();
    this.dependencies = new Map();
    this.resources = new Map();
    
    this.config = {
      maxConcurrentWorkflows: 5,
      maxRetries: 3,
      retryDelay: 5000,
      executionTimeout: 300000, // 5 minutes
      resourceCheckInterval: 10000, // 10 seconds
      enableParallelExecution: true,
      enableDependencyResolution: true,
      enableResourceOptimization: true
    };
    
    this.stats = {
      totalExecutions: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
      totalExecutionTime: 0,
      averageExecutionTime: 0,
      activeWorkflows: 0,
      queuedWorkflows: 0
    };
    
    this.startScheduler();
  }

  /**
   * Register a new workflow
   */
  registerWorkflow(name, config) {
    const workflow = {
      id: this.generateWorkflowId(),
      name,
      config: { ...this.config, ...config },
      steps: config.steps || [],
      dependencies: config.dependencies || [],
      triggers: config.triggers || [],
      schedule: config.schedule || null,
      priority: config.priority || 'normal',
      timeout: config.timeout || this.config.executionTimeout,
      retries: config.retries || this.config.maxRetries,
      status: 'registered',
      createdAt: new Date(),
      lastModified: new Date()
    };
    
    // Validate workflow
    if (!this.validateWorkflow(workflow)) {
      throw new Error(`Invalid workflow configuration for ${name}`);
    }
    
    // Build dependency graph
    if (this.config.enableDependencyResolution) {
      workflow.dependencyGraph = this.buildDependencyGraph(workflow);
    }
    
    this.workflows.set(name, workflow);
    
    // Schedule if needed
    if (workflow.schedule) {
      this.scheduleWorkflow(name, workflow.schedule);
    }
    
    console.log(`🔧 Workflow registered: ${name} (${workflow.steps.length} steps)`);
    this.emit('workflowRegistered', workflow);
    
    return workflow;
  }

  /**
   * Validate workflow configuration
   */
  validateWorkflow(workflow) {
    if (!workflow.name || typeof workflow.name !== 'string') {
      return false;
    }
    
    if (!Array.isArray(workflow.steps) || workflow.steps.length === 0) {
      return false;
    }
    
    // Validate steps
    for (const step of workflow.steps) {
      if (!step.name || !step.action) {
        return false;
      }
      
      if (step.dependencies && !Array.isArray(step.dependencies)) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Build dependency graph for workflow
   */
  buildDependencyGraph(workflow) {
    const graph = new Map();
    const stepMap = new Map();
    
    // Create step map
    workflow.steps.forEach((step, index) => {
      stepMap.set(step.name, { ...step, index });
      graph.set(step.name, {
        step,
        dependencies: step.dependencies || [],
        dependents: [],
        status: 'pending',
        executionOrder: -1
      });
    });
    
    // Build dependency relationships
    for (const [stepName, stepInfo] of graph) {
      for (const dep of stepInfo.dependencies) {
        if (graph.has(dep)) {
          graph.get(dep).dependents.push(stepName);
        }
      }
    }
    
    // Calculate execution order using topological sort
    const executionOrder = this.topologicalSort(graph);
    
    // Update execution order
    executionOrder.forEach((stepName, order) => {
      if (graph.has(stepName)) {
        graph.get(stepName).executionOrder = order;
      }
    });
    
    return graph;
  }

  /**
   * Topological sort for dependency resolution
   */
  topologicalSort(graph) {
    const visited = new Set();
    const temp = new Set();
    const order = [];
    
    const visit = (stepName) => {
      if (temp.has(stepName)) {
        throw new Error(`Circular dependency detected: ${stepName}`);
      }
      
      if (visited.has(stepName)) {
        return;
      }
      
      temp.add(stepName);
      
      const stepInfo = graph.get(stepName);
      for (const dep of stepInfo.dependencies) {
        visit(dep);
      }
      
      temp.delete(stepName);
      visited.add(stepName);
      order.push(stepName);
    };
    
    for (const stepName of graph.keys()) {
      if (!visited.has(stepName)) {
        visit(stepName);
      }
    }
    
    return order;
  }

  /**
   * Execute a workflow
   */
  async executeWorkflow(name, context = {}) {
    const workflow = this.workflows.get(name);
    if (!workflow) {
      throw new Error(`Workflow not found: ${name}`);
    }
    
    // Check if we can execute
    if (this.stats.activeWorkflows >= this.config.maxConcurrentWorkflows) {
      this.stats.queuedWorkflows++;
      this.emit('workflowQueued', { name, reason: 'max_concurrent_reached' });
      return this.queueWorkflow(name, context);
    }
    
    const executionId = this.generateExecutionId();
    const execution = {
      id: executionId,
      workflowName: name,
      workflow: workflow,
      context,
      status: 'running',
      startTime: new Date(),
      endTime: null,
      steps: new Map(),
      currentStep: null,
      errors: [],
      logs: [],
      metrics: {
        totalSteps: workflow.steps.length,
        completedSteps: 0,
        failedSteps: 0,
        executionTime: 0
      }
    };
    
    this.executions.set(executionId, execution);
    this.stats.activeWorkflows++;
    this.stats.totalExecutions++;
    
    this.emit('workflowStarted', execution);
    
    try {
      await this.runWorkflowExecution(execution);
    } catch (error) {
      console.error(`❌ Workflow execution failed: ${name}`, error);
      execution.status = 'failed';
      execution.errors.push(error.message);
      this.stats.failedExecutions++;
      this.emit('workflowFailed', execution);
    } finally {
      execution.endTime = new Date();
      execution.metrics.executionTime = execution.endTime - execution.startTime;
      this.stats.totalExecutionTime += execution.metrics.executionTime;
      this.stats.averageExecutionTime = this.stats.totalExecutionTime / this.stats.totalExecutions;
      this.stats.activeWorkflows--;
      
      if (execution.status === 'completed') {
        this.stats.successfulExecutions++;
      }
      
      this.emit('workflowCompleted', execution);
    }
    
    return execution;
  }

  /**
   * Run workflow execution
   */
  async runWorkflowExecution(execution) {
    const { workflow } = execution;
    
    if (this.config.enableDependencyResolution && workflow.dependencyGraph) {
      await this.executeWithDependencies(execution);
    } else {
      await this.executeSequentially(execution);
    }
    
    execution.status = 'completed';
    execution.metrics.completedSteps = workflow.steps.length;
  }

  /**
   * Execute workflow with dependency resolution
   */
  async executeWithDependencies(execution) {
    const { workflow } = execution;
    const graph = workflow.dependencyGraph;
    const completed = new Set();
    const inProgress = new Set();
    
    // Initialize step statuses
    for (const [stepName, stepInfo] of graph) {
      stepInfo.status = 'pending';
    }
    
    while (completed.size < workflow.steps.length) {
      const readySteps = this.getReadySteps(graph, completed, inProgress);
      
      if (readySteps.length === 0) {
        // Check for deadlock
        if (inProgress.size === 0) {
          throw new Error('Deadlock detected in workflow dependencies');
        }
        // Wait for some steps to complete
        await this.waitForStepCompletion(execution, inProgress);
        continue;
      }
      
      // Execute ready steps
      const executionPromises = readySteps.map(stepName => 
        this.executeStep(execution, stepName, graph.get(stepName))
      );
      
      if (this.config.enableParallelExecution) {
        await Promise.all(executionPromises);
      } else {
        for (const promise of executionPromises) {
          await promise;
        }
      }
    }
  }

  /**
   * Execute workflow sequentially
   */
  async executeSequentially(execution) {
    const { workflow } = execution;
    
    for (const step of workflow.steps) {
      await this.executeStep(execution, step.name, { step });
    }
  }

  /**
   * Get steps ready for execution
   */
  getReadySteps(graph, completed, inProgress) {
    const ready = [];
    
    for (const [stepName, stepInfo] of graph) {
      if (completed.has(stepName) || inProgress.has(stepName)) {
        continue;
      }
      
      const dependenciesMet = stepInfo.dependencies.every(dep => completed.has(dep));
      if (dependenciesMet) {
        ready.push(stepName);
      }
    }
    
    return ready;
  }

  /**
   * Execute a single step
   */
  async executeStep(execution, stepName, stepInfo) {
    const step = stepInfo.step;
    const stepExecution = {
      name: stepName,
      status: 'running',
      startTime: new Date(),
      endTime: null,
      result: null,
      error: null,
      logs: []
    };
    
    execution.steps.set(stepName, stepExecution);
    execution.currentStep = stepName;
    
    this.emit('stepStarted', { execution, step: stepExecution });
    
    try {
      // Execute step action
      const result = await this.executeStepAction(step, execution.context);
      
      stepExecution.status = 'completed';
      stepExecution.result = result;
      execution.metrics.completedSteps++;
      
      this.emit('stepCompleted', { execution, step: stepExecution });
      
    } catch (error) {
      stepExecution.status = 'failed';
      stepExecution.error = error.message;
      execution.metrics.failedSteps++;
      
      this.emit('stepFailed', { execution, step: stepExecution, error });
      
      // Handle retries
      if (step.retries && step.retries > 0) {
        await this.retryStep(execution, stepName, stepInfo);
      } else {
        throw error;
      }
    } finally {
      stepExecution.endTime = new Date();
    }
  }

  /**
   * Execute step action
   */
  async executeStepAction(step, context) {
    // Simulate step execution (replace with actual implementation)
    const action = step.action;
    
    if (typeof action === 'function') {
      return await action(context);
    }
    
    if (typeof action === 'string') {
      // Handle predefined actions
      switch (action) {
        case 'wait':
          const delay = step.delay || 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return { status: 'waited', delay };
          
        case 'log':
          const message = step.message || 'Step executed';
          console.log(`📝 [${step.name}] ${message}`);
          return { status: 'logged', message };
          
        case 'http_request':
          // Simulate HTTP request
          await new Promise(resolve => setTimeout(resolve, 500));
          return { status: 'success', response: { status: 200, data: 'mock_response' } };
          
        case 'file_operation':
          // Simulate file operation
          await new Promise(resolve => setTimeout(resolve, 300));
          return { status: 'success', operation: 'file_processed' };
          
        default:
          throw new Error(`Unknown action: ${action}`);
      }
    }
    
    throw new Error(`Invalid step action: ${action}`);
  }

  /**
   * Retry failed step
   */
  async retryStep(execution, stepName, stepInfo) {
    const step = stepInfo.step;
    const maxRetries = step.retries || this.config.maxRetries;
    const retryCount = (stepInfo.retryCount || 0) + 1;
    
    if (retryCount > maxRetries) {
      throw new Error(`Step ${stepName} failed after ${maxRetries} retries`);
    }
    
    stepInfo.retryCount = retryCount;
    
    console.log(`🔄 Retrying step ${stepName} (attempt ${retryCount}/${maxRetries})`);
    
    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
    
    // Re-execute step
    await this.executeStep(execution, stepName, stepInfo);
  }

  /**
   * Wait for step completion
   */
  async waitForStepCompletion(execution, inProgress) {
    return new Promise(resolve => {
      const checkInterval = setInterval(() => {
        const completed = Array.from(inProgress).filter(stepName => {
          const stepExecution = execution.steps.get(stepName);
          return stepExecution && stepExecution.status === 'completed';
        });
        
        if (completed.length > 0) {
          completed.forEach(stepName => inProgress.delete(stepName));
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
    });
  }

  /**
   * Schedule workflow execution
   */
  scheduleWorkflow(name, schedule) {
    const workflow = this.workflows.get(name);
    if (!workflow) {
      throw new Error(`Workflow not found: ${name}`);
    }
    
    const scheduleId = `schedule-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const scheduledExecution = {
      id: scheduleId,
      workflowName: name,
      schedule,
      nextRun: this.calculateNextRun(schedule),
      status: 'scheduled'
    };
    
    this.scheduler.set(scheduleId, scheduledExecution);
    
    // Set up recurring execution
    this.setupRecurringExecution(scheduledExecution);
    
    console.log(`⏰ Workflow scheduled: ${name} - Next run: ${scheduledExecution.nextRun}`);
    this.emit('workflowScheduled', scheduledExecution);
    
    return scheduledExecution;
  }

  /**
   * Calculate next run time based on schedule
   */
  calculateNextRun(schedule) {
    const now = new Date();
    
    if (schedule.type === 'interval') {
      return new Date(now.getTime() + schedule.interval);
    }
    
    if (schedule.type === 'cron') {
      // Simple cron-like scheduling (implement full cron parser as needed)
      return new Date(now.getTime() + 60000); // Default to 1 minute
    }
    
    if (schedule.type === 'daily') {
      const next = new Date(now);
      next.setHours(schedule.hour || 0, schedule.minute || 0, 0, 0);
      if (next <= now) {
        next.setDate(next.getDate() + 1);
      }
      return next;
    }
    
    return now;
  }

  /**
   * Setup recurring execution
   */
  setupRecurringExecution(scheduledExecution) {
    const checkSchedule = () => {
      const now = new Date();
      if (now >= scheduledExecution.nextRun) {
        this.executeWorkflow(scheduledExecution.workflowName)
          .then(() => {
            scheduledExecution.nextRun = this.calculateNextRun(scheduledExecution.schedule);
            this.emit('workflowScheduled', scheduledExecution);
          })
          .catch(error => {
            console.error(`❌ Scheduled workflow execution failed: ${scheduledExecution.workflowName}`, error);
          });
      }
    };
    
    // Check every minute
    setInterval(checkSchedule, 60000);
  }

  /**
   * Queue workflow for later execution
   */
  queueWorkflow(name, context) {
    const queueId = `queue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const queuedWorkflow = {
      id: queueId,
      workflowName: name,
      context,
      queuedAt: new Date(),
      priority: this.workflows.get(name)?.priority || 'normal'
    };
    
    // Add to queue (implement priority queue as needed)
    this.emit('workflowQueued', queuedWorkflow);
    
    return queuedWorkflow;
  }

  /**
   * Start the scheduler
   */
  startScheduler() {
    console.log('🚀 Starting Advanced Workflow Orchestrator...');
    
    // Resource monitoring
    if (this.config.enableResourceOptimization) {
      setInterval(() => {
        this.monitorResources();
      }, this.config.resourceCheckInterval);
    }
    
    console.log('✅ Workflow Orchestrator started successfully');
  }

  /**
   * Monitor system resources
   */
  monitorResources() {
    // Implement resource monitoring logic
    const resourceUsage = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100
    };
    
    this.resources.set('system', resourceUsage);
    
    // Adjust execution limits based on resource usage
    if (resourceUsage.cpu > 80 || resourceUsage.memory > 80) {
      this.config.maxConcurrentWorkflows = Math.max(1, this.config.maxConcurrentWorkflows - 1);
    } else if (resourceUsage.cpu < 50 && resourceUsage.memory < 50) {
      this.config.maxConcurrentWorkflows = Math.min(10, this.config.maxConcurrentWorkflows + 1);
    }
  }

  /**
   * Get workflow status
   */
  getWorkflowStatus(name) {
    const workflow = this.workflows.get(name);
    if (!workflow) return null;
    
    const activeExecutions = Array.from(this.executions.values())
      .filter(exec => exec.workflowName === name && exec.status === 'running');
    
    return {
      workflow,
      status: workflow.status,
      activeExecutions: activeExecutions.length,
      lastExecution: this.getLastExecution(name),
      nextScheduledRun: this.getNextScheduledRun(name)
    };
  }

  /**
   * Get last execution for workflow
   */
  getLastExecution(workflowName) {
    const executions = Array.from(this.executions.values())
      .filter(exec => exec.workflowName === workflowName)
      .sort((a, b) => b.startTime - a.startTime);
    
    return executions[0] || null;
  }

  /**
   * Get next scheduled run for workflow
   */
  getNextScheduledRun(workflowName) {
    const schedules = Array.from(this.scheduler.values())
      .filter(schedule => schedule.workflowName === workflowName)
      .sort((a, b) => a.nextRun - b.nextRun);
    
    return schedules[0] || null;
  }

  /**
   * Get orchestrator statistics
   */
  getStats() {
    return {
      ...this.stats,
      totalWorkflows: this.workflows.size,
      scheduledWorkflows: this.scheduler.size,
      resourceUsage: Object.fromEntries(this.resources),
      config: this.config
    };
  }

  /**
   * Generate workflow ID
   */
  generateWorkflowId() {
    return `workflow-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate execution ID
   */
  generateExecutionId() {
    return `exec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Stop the orchestrator
   */
  stop() {
    console.log('🛑 Stopping Advanced Workflow Orchestrator...');
    
    // Cancel all running executions
    for (const execution of this.executions.values()) {
      if (execution.status === 'running') {
        execution.status = 'cancelled';
        this.emit('workflowCancelled', execution);
      }
    }
    
    console.log('✅ Workflow Orchestrator stopped');
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new AdvancedWorkflowOrchestrator();
  
  const command = process.argv[2];
  
  if (!command) {
    console.log(`
Usage: node advanced-workflow-orchestrator.cjs <command>

Commands:
  demo        Run demo workflows
  status      Show orchestrator status
  stats       Show statistics
  help        Show this help message

Examples:
  node advanced-workflow-orchestrator.cjs demo
  node advanced-workflow-orchestrator.cjs status
  node advanced-workflow-orchestrator.cjs stats
    `);
    process.exit(1);
  }
  
  (async () => {
    try {
      switch (command) {
        case 'demo':
          console.log('\n🎭 Running demo workflows...');
          
          // Register demo workflows
          orchestrator.registerWorkflow('Data Processing Pipeline', {
            steps: [
              { name: 'extract', action: 'http_request', dependencies: [] },
              { name: 'transform', action: 'file_operation', dependencies: ['extract'] },
              { name: 'load', action: 'http_request', dependencies: ['transform'] },
              { name: 'validate', action: 'log', dependencies: ['load'], message: 'Data validation completed' }
            ],
            dependencies: [],
            priority: 'high',
            retries: 2
          });
          
          orchestrator.registerWorkflow('Content Generation', {
            steps: [
              { name: 'research', action: 'wait', delay: 2000, dependencies: [] },
              { name: 'outline', action: 'log', dependencies: ['research'], message: 'Content outline created' },
              { name: 'write', action: 'file_operation', dependencies: ['outline'] },
              { name: 'review', action: 'log', dependencies: ['write'], message: 'Content review completed' }
            ],
            schedule: { type: 'interval', interval: 300000 }, // Every 5 minutes
            priority: 'normal'
          });
          
          // Execute workflows
          await orchestrator.executeWorkflow('Data Processing Pipeline');
          
          // Wait for completion
          setTimeout(() => {
            console.log('\n📊 Demo Results:');
            console.log(JSON.stringify(orchestrator.getStats(), null, 2));
            process.exit(0);
          }, 10000);
          break;
          
        case 'status':
          console.log('\n📋 Orchestrator Status:');
          for (const [name, workflow] of orchestrator.workflows) {
            const status = orchestrator.getWorkflowStatus(name);
            console.log(`\n${name}:`);
            console.log(`  Status: ${status.status}`);
            console.log(`  Active Executions: ${status.activeExecutions}`);
            console.log(`  Steps: ${workflow.steps.length}`);
            console.log(`  Priority: ${workflow.priority}`);
          }
          break;
          
        case 'stats':
          console.log('\n📊 Orchestrator Statistics:');
          console.log(JSON.stringify(orchestrator.getStats(), null, 2));
          break;
          
        default:
          console.log(`Unknown command: ${command}`);
          process.exit(1);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  })();
}

module.exports = AdvancedWorkflowOrchestrator;