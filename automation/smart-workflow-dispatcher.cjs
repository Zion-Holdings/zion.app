#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class SmartWorkflowDispatcher {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.configPath = path.resolve(__dirname, "config/dispatcher-config.json");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.workflowRegistry = new Map();
    this.dispatchHistory = new Map();
    this.batchingRules = new Map();
    
    this.ensureDirectories();
    this.loadConfiguration();
    this.initializeBatchingRules();
  }

  ensureDirectories() {
    [path.dirname(this.configPath), this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    this.config = {
      maxConcurrentDispatches: 5,
      batchDelayMs: 5000,
      smartFiltering: true,
      changeDetection: true,
      priorityQueue: true,
      autoRetry: true,
      maxRetries: 3,
      retryDelayMs: 10000,
      workflowGroups: {
        critical: ['ci.yml', 'security-gates.yml', 'dependency-auto-upgrade.yml'],
        high: ['ci-self-heal.yml', 'auto-heal-workflows.yml', 'playwright-smoke.yml'],
        medium: ['pa11y.yml', 'lighthouse-live.yml', 'seo-audit.yml'],
        low: ['marketing-daily.yml', 'instagram-six-hourly.yml', 'performance-weekly.yml']
      }
    };
    
    // Save default configuration
    this.saveConfiguration();
  }

  saveConfiguration() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
  }

  initializeBatchingRules() {
    // Define which workflows can be batched together
    this.batchingRules.set('ci', {
      workflows: ['ci.yml', 'ci-self-heal.yml'],
      batchSize: 2,
      maxDelay: 10000
    });
    
    this.batchingRules.set('security', {
      workflows: ['security-gates.yml', 'codeql.yml', 'dependency-auto-upgrade.yml'],
      batchSize: 3,
      maxDelay: 15000
    });
    
    this.batchingRules.set('testing', {
      workflows: ['playwright-smoke.yml', 'pa11y.yml', 'lighthouse-live.yml'],
      batchSize: 2,
      maxDelay: 8000
    });
    
    this.batchingRules.set('marketing', {
      workflows: ['marketing-daily.yml', 'instagram-six-hourly.yml', 'linkedin-marketing.yml'],
      batchSize: 3,
      maxDelay: 20000
    });
  }

  async analyzeWorkflowDependencies() {
    console.log("🔍 Analyzing workflow dependencies...");
    
    const workflows = this.getActiveWorkflows();
    const dependencyGraph = {};
    
    for (const workflow of workflows) {
      const dependencies = this.extractWorkflowDependencies(workflow);
      dependencyGraph[workflow.name] = dependencies;
    }
    
    // Save dependency graph
    const graphPath = path.join(this.reportsDir, 'workflow-dependency-graph.json');
    fs.writeFileSync(graphPath, JSON.stringify(dependencyGraph, null, 2));
    
    console.log(`💾 Dependency graph saved to: ${graphPath}`);
    return dependencyGraph;
  }

  getActiveWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) return [];
    
    return fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .map(f => ({
        name: f,
        path: path.join(this.workflowsDir, f)
      }));
  }

  extractWorkflowDependencies(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    const dependencies = {
      name: workflow.name,
      triggers: this.extractTriggers(content),
      needs: this.extractJobDependencies(content),
      outputs: this.extractJobOutputs(content),
      priority: this.determinePriority(workflow.name),
      resourceRequirements: this.analyzeResourceRequirements(content),
      estimatedDuration: this.estimateDuration(content)
    };
    
    return dependencies;
  }

  extractTriggers(content) {
    const triggers = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('on:')) {
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith(' ')) {
          const triggerLine = lines[j].trim();
          if (triggerLine.includes('push:') || triggerLine.includes('pull_request:') || 
              triggerLine.includes('schedule:') || triggerLine.includes('workflow_dispatch:')) {
            triggers.push(triggerLine.replace(':', ''));
          }
          j++;
        }
        break;
      }
    }
    
    return triggers;
  }

  extractJobDependencies(content) {
    const dependencies = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('needs:')) {
        const deps = line.split(':')[1].split(',').map(d => d.trim());
        dependencies.push(...deps);
      }
    }
    
    return dependencies;
  }

  extractJobOutputs(content) {
    const outputs = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('outputs:')) {
        let j = i + 1;
        while (j < lines.length && lines[j].startsWith(' ')) {
          const outputLine = lines[j].trim();
          if (outputLine.includes(':')) {
            const [key, value] = outputLine.split(':').map(s => s.trim());
            outputs.push({ key, value });
          }
          j++;
        }
        break;
      }
    }
    
    return outputs;
  }

  determinePriority(workflowName) {
    for (const [priority, workflows] of Object.entries(this.config.workflowGroups)) {
      if (workflows.includes(workflowName)) {
        return priority;
      }
    }
    return 'medium';
  }

  analyzeResourceRequirements(content) {
    const requirements = {
      runner: 'ubuntu-latest',
      memory: 'standard',
      timeout: 30,
      concurrentJobs: 1
    };
    
    // Extract timeout
    const timeoutMatch = content.match(/timeout-minutes:\s*(\d+)/);
    if (timeoutMatch) {
      requirements.timeout = parseInt(timeoutMatch[1]);
    }
    
    // Count concurrent jobs
    const jobCount = (content.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:/gm) || []).length;
    requirements.concurrentJobs = jobCount;
    
    // Check memory requirements
    if (content.includes('--max-old-space-size=6144') || content.includes('--max-old-space-size=8192')) {
      requirements.memory = 'high';
    } else if (content.includes('--max-old-space-size=4096')) {
      requirements.memory = 'medium';
    }
    
    return requirements;
  }

  estimateDuration(content) {
    // Extract timeout values
    const timeouts = content.match(/timeout-minutes:\s*(\d+)/g);
    if (timeouts && timeouts.length > 0) {
      const maxTimeout = Math.max(...timeouts.map(t => parseInt(t.split(':')[1])));
      return Math.min(maxTimeout, 60);
    }
    
    // Estimate based on content
    let estimatedMinutes = 15;
    
    if (content.includes('npm ci')) estimatedMinutes += 10;
    if (content.includes('npm run build')) estimatedMinutes += 20;
    if (content.includes('npm run test')) estimatedMinutes += 15;
    if (content.includes('playwright')) estimatedMinutes += 25;
    if (content.includes('lighthouse')) estimatedMinutes += 10;
    
    return estimatedMinutes;
  }

  async dispatchWorkflows(changes = [], manualTrigger = null) {
    console.log("🚀 Dispatching workflows intelligently...");
    
    const dispatchPlan = this.createDispatchPlan(changes, manualTrigger);
    const dispatchResults = await this.executeDispatchPlan(dispatchPlan);
    
    // Save dispatch report
    this.saveDispatchReport(dispatchResults);
    
    return dispatchResults;
  }

  createDispatchPlan(changes, manualTrigger) {
    const plan = {
      timestamp: new Date().toISOString(),
      changes,
      manualTrigger,
      workflows: [],
      batches: [],
      estimatedDuration: 0,
      resourceRequirements: {
        maxConcurrent: 0,
        totalMemory: 'standard',
        totalTimeout: 0
      }
    };
    
    // Determine which workflows to trigger based on changes
    const relevantWorkflows = this.determineRelevantWorkflows(changes, manualTrigger);
    
    // Group workflows into batches
    const batchedWorkflows = this.createWorkflowBatches(relevantWorkflows);
    
    // Create execution plan
    plan.workflows = relevantWorkflows;
    plan.batches = batchedWorkflows;
    
    // Calculate resource requirements
    plan.resourceRequirements = this.calculateResourceRequirements(relevantWorkflows);
    plan.estimatedDuration = this.calculateEstimatedDuration(relevantWorkflows);
    
    return plan;
  }

  determineRelevantWorkflows(changes, manualTrigger) {
    const relevantWorkflows = [];
    
    // If manual trigger, prioritize that workflow
    if (manualTrigger) {
      relevantWorkflows.push({
        name: manualTrigger,
        priority: 'critical',
        reason: 'manual_trigger',
        immediate: true
      });
    }
    
    // Analyze file changes to determine relevant workflows
    if (changes.length > 0) {
      for (const change of changes) {
        const affectedWorkflows = this.findWorkflowsAffectedByChange(change);
        relevantWorkflows.push(...affectedWorkflows);
      }
    }
    
    // Remove duplicates and sort by priority
    const uniqueWorkflows = this.deduplicateWorkflows(relevantWorkflows);
    return this.sortWorkflowsByPriority(uniqueWorkflows);
  }

  findWorkflowsAffectedByChange(change) {
    const affectedWorkflows = [];
    
    // Check if change affects specific workflow types
    if (change.includes('package.json') || change.includes('package-lock.json')) {
      affectedWorkflows.push({
        name: 'dependency-auto-upgrade.yml',
        priority: 'high',
        reason: 'dependency_change',
        immediate: false
      });
    }
    
    if (change.includes('.js') || change.includes('.ts') || change.includes('.jsx') || change.includes('.tsx')) {
      affectedWorkflows.push({
        name: 'ci.yml',
        priority: 'critical',
        reason: 'code_change',
        immediate: true
      });
    }
    
    if (change.includes('security') || change.includes('vulnerability')) {
      affectedWorkflows.push({
        name: 'security-gates.yml',
        priority: 'critical',
        reason: 'security_change',
        immediate: true
      });
    }
    
    if (change.includes('marketing') || change.includes('content')) {
      affectedWorkflows.push({
        name: 'marketing-daily.yml',
        priority: 'low',
        reason: 'marketing_change',
        immediate: false
      });
    }
    
    return affectedWorkflows;
  }

  deduplicateWorkflows(workflows) {
    const seen = new Set();
    return workflows.filter(workflow => {
      const key = workflow.name;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  sortWorkflowsByPriority(workflows) {
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    
    return workflows.sort((a, b) => {
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      
      // If same priority, immediate workflows go first
      if (a.immediate && !b.immediate) return -1;
      if (!a.immediate && b.immediate) return 1;
      
      return 0;
    });
  }

  createWorkflowBatches(workflows) {
    const batches = [];
    let currentBatch = [];
    let currentBatchType = null;
    
    for (const workflow of workflows) {
      const batchType = this.determineBatchType(workflow.name);
      
      if (batchType !== currentBatchType || currentBatch.length >= 3) {
        if (currentBatch.length > 0) {
          batches.push({
            type: currentBatchType,
            workflows: currentBatch,
            estimatedDuration: this.calculateBatchDuration(currentBatch)
          });
        }
        currentBatch = [workflow];
        currentBatchType = batchType;
      } else {
        currentBatch.push(workflow);
      }
    }
    
    // Add the last batch
    if (currentBatch.length > 0) {
      batches.push({
        type: currentBatchType,
        workflows: currentBatch,
        estimatedDuration: this.calculateBatchDuration(currentBatch)
      });
    }
    
    return batches;
  }

  determineBatchType(workflowName) {
    for (const [type, rule] of this.batchingRules) {
      if (rule.workflows.includes(workflowName)) {
        return type;
      }
    }
    return 'general';
  }

  calculateBatchDuration(workflows) {
    return workflows.reduce((total, wf) => total + (wf.estimatedDuration || 30), 0);
  }

  calculateResourceRequirements(workflows) {
    const requirements = {
      maxConcurrent: 0,
      totalMemory: 'standard',
      totalTimeout: 0
    };
    
    for (const workflow of workflows) {
      requirements.maxConcurrent = Math.max(requirements.maxConcurrent, workflow.concurrentJobs || 1);
      requirements.totalTimeout = Math.max(requirements.totalTimeout, workflow.timeout || 30);
      
      if (workflow.memory === 'high') {
        requirements.totalMemory = 'high';
      }
    }
    
    return requirements;
  }

  calculateEstimatedDuration(workflows) {
    return workflows.reduce((total, wf) => total + (wf.estimatedDuration || 30), 0);
  }

  async executeDispatchPlan(plan) {
    const results = {
      plan,
      executions: [],
      success: 0,
      failed: 0,
      skipped: 0,
      totalDuration: 0
    };
    
    console.log(`📋 Executing dispatch plan with ${plan.workflows.length} workflows in ${plan.batches.length} batches`);
    
    for (const batch of plan.batches) {
      console.log(`\n🔄 Executing batch: ${batch.type} (${batch.workflows.length} workflows)`);
      
      const batchResults = await this.executeBatch(batch);
      results.executions.push(batchResults);
      
      // Update counters
      results.success += batchResults.success;
      results.failed += batchResults.failed;
      results.skipped += batchResults.skipped;
      results.totalDuration += batchResults.duration;
      
      // Wait between batches
      if (batch !== plan.batches[plan.batches.length - 1]) {
        console.log(`⏳ Waiting ${this.config.batchDelayMs}ms before next batch...`);
        await this.sleep(this.config.batchDelayMs);
      }
    }
    
    console.log(`\n✅ Dispatch execution completed: ${results.success} success, ${results.failed} failed, ${results.skipped} skipped`);
    
    return results;
  }

  async executeBatch(batch) {
    const results = {
      type: batch.type,
      workflows: batch.workflows,
      executions: [],
      success: 0,
      failed: 0,
      skipped: 0,
      duration: 0
    };
    
    const startTime = Date.now();
    
    for (const workflow of batch.workflows) {
      try {
        const execution = await this.executeWorkflow(workflow);
        results.executions.push(execution);
        
        if (execution.success) {
          results.success++;
        } else if (execution.skipped) {
          results.skipped++;
        } else {
          results.failed++;
        }
        
        // Record in dispatch history
        this.recordDispatchExecution(workflow.name, execution);
        
      } catch (error) {
        console.error(`❌ Error executing ${workflow.name}:`, error.message);
        results.executions.push({
          workflow: workflow.name,
          success: false,
          error: error.message,
          skipped: false
        });
        results.failed++;
      }
    }
    
    results.duration = Date.now() - startTime;
    return results;
  }

  async executeWorkflow(workflow) {
    console.log(`  🚀 Executing ${workflow.name} (${workflow.priority} priority)`);
    
    // Check if workflow should be skipped
    if (this.shouldSkipWorkflow(workflow)) {
      console.log(`  ⏭️  Skipping ${workflow.name} (skip condition met)`);
      return {
        workflow: workflow.name,
        success: false,
        skipped: true,
        reason: 'skip_condition_met'
      };
    }
    
    // Check resource availability
    if (!this.checkResourceAvailability(workflow)) {
      console.log(`  ⏳ Delaying ${workflow.name} (insufficient resources)`);
      return {
        workflow: workflow.name,
        success: false,
        skipped: false,
        reason: 'insufficient_resources',
        retryAfter: this.config.retryDelayMs
      };
    }
    
    try {
      // Simulate workflow dispatch (in real implementation, this would call GitHub API)
      const result = await this.simulateWorkflowDispatch(workflow);
      
      console.log(`  ✅ ${workflow.name} dispatched successfully`);
      return {
        workflow: workflow.name,
        success: true,
        skipped: false,
        executionId: result.executionId,
        duration: result.duration
      };
      
    } catch (error) {
      console.error(`  ❌ Failed to dispatch ${workflow.name}:`, error.message);
      
      // Retry logic
      if (this.config.autoRetry && this.canRetry(workflow.name)) {
        console.log(`  🔄 Scheduling retry for ${workflow.name}`);
        this.scheduleRetry(workflow);
      }
      
      return {
        workflow: workflow.name,
        success: false,
        skipped: false,
        error: error.message,
        retryScheduled: this.config.autoRetry && this.canRetry(workflow.name)
      };
    }
  }

  shouldSkipWorkflow(workflow) {
    // Skip if workflow was recently executed
    const lastExecution = this.dispatchHistory.get(workflow.name);
    if (lastExecution && Date.now() - lastExecution.timestamp < 300000) { // 5 minutes
      return true;
    }
    
    // Skip if workflow is already running
    if (this.isWorkflowRunning(workflow.name)) {
      return true;
    }
    
    return false;
  }

  checkResourceAvailability(workflow) {
    // Check concurrent workflow limit
    const runningCount = this.getRunningWorkflowCount();
    if (runningCount >= this.config.maxConcurrentDispatches) {
      return false;
    }
    
    // Check memory requirements
    if (workflow.memory === 'high' && this.isHighMemoryInUse()) {
      return false;
    }
    
    return true;
  }

  async simulateWorkflowDispatch(workflow) {
    // Simulate API call delay
    await this.sleep(1000 + Math.random() * 2000);
    
    return {
      executionId: `exec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      duration: Math.random() * 5000 + 2000
    };
  }

  canRetry(workflowName) {
    const retryCount = this.getRetryCount(workflowName);
    return retryCount < this.config.maxRetries;
  }

  getRetryCount(workflowName) {
    const history = this.dispatchHistory.get(workflowName);
    return history ? history.retryCount : 0;
  }

  scheduleRetry(workflow) {
    const retryCount = this.getRetryCount(workflow.name);
    const delay = this.config.retryDelayMs * Math.pow(2, retryCount);
    
    setTimeout(() => {
      console.log(`🔄 Retrying ${workflow.name} (attempt ${retryCount + 1})`);
      this.executeWorkflow(workflow);
    }, delay);
  }

  recordDispatchExecution(workflowName, execution) {
    if (!this.dispatchHistory.has(workflowName)) {
      this.dispatchHistory.set(workflowName, {
        executions: [],
        retryCount: 0,
        lastSuccess: null,
        lastFailure: null
      });
    }
    
    const history = this.dispatchHistory.get(workflowName);
    history.executions.push({
      ...execution,
      timestamp: Date.now()
    });
    
    if (execution.success) {
      history.lastSuccess = Date.now();
    } else if (!execution.skipped) {
      history.lastFailure = Date.now();
      history.retryCount++;
    }
    
    // Keep only last 10 executions
    if (history.executions.length > 10) {
      history.executions = history.executions.slice(-10);
    }
  }

  isWorkflowRunning(workflowName) {
    // This would typically check GitHub API for running workflows
    // For now, we'll simulate based on recent executions
    const history = this.dispatchHistory.get(workflowName);
    if (!history) return false;
    
    const lastExecution = history.executions[history.executions.length - 1];
    if (!lastExecution) return false;
    
    // Simulate running if execution was recent and successful
    return lastExecution.success && Date.now() - lastExecution.timestamp < 60000; // 1 minute
  }

  getRunningWorkflowCount() {
    let count = 0;
    for (const [workflowName] of this.dispatchHistory) {
      if (this.isWorkflowRunning(workflowName)) {
        count++;
      }
    }
    return count;
  }

  isHighMemoryInUse() {
    // This would typically check system resources
    // For now, we'll simulate based on recent high-memory workflow executions
    let highMemoryCount = 0;
    for (const [workflowName, history] of this.dispatchHistory) {
      const lastExecution = history.executions[history.executions.length - 1];
      if (lastExecution && lastExecution.success && Date.now() - lastExecution.timestamp < 300000) {
        // Check if this was a high-memory workflow
        if (workflowName.includes('build') || workflowName.includes('test')) {
          highMemoryCount++;
        }
      }
    }
    
    return highMemoryCount >= 2;
  }

  saveDispatchReport(results) {
    const reportPath = path.join(this.reportsDir, 'workflow-dispatch-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
    console.log(`📊 Dispatch report saved to: ${reportPath}`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  printDispatchSummary(results) {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 WORKFLOW DISPATCH SUMMARY");
    console.log("=".repeat(60));
    
    console.log(`Total Workflows: ${results.plan.workflows.length}`);
    console.log(`Batches: ${results.plan.batches.length}`);
    console.log(`Success: ${results.success}`);
    console.log(`Failed: ${results.failed}`);
    console.log(`Skipped: ${results.skipped}`);
    console.log(`Total Duration: ${results.totalDuration}ms`);
    
    if (results.plan.batches.length > 0) {
      console.log(`\n📋 BATCH EXECUTION:`);
      results.plan.batches.forEach((batch, index) => {
        const batchResult = results.executions[index];
        console.log(`  • ${batch.type}: ${batchResult.success}/${batch.workflows.length} success (${batchResult.duration}ms)`);
      });
    }
    
    if (results.failed > 0) {
      console.log(`\n❌ FAILED WORKFLOWS:`);
      results.executions.forEach(batch => {
        batch.executions.forEach(exec => {
          if (!exec.success && !exec.skipped) {
            console.log(`  • ${exec.workflow}: ${exec.error || 'Unknown error'}`);
          }
        });
      });
    }
    
    console.log("=".repeat(60));
  }
}

// Run the dispatcher
async function main() {
  try {
    const dispatcher = new SmartWorkflowDispatcher();
    
    // Analyze workflow dependencies
    await dispatcher.analyzeWorkflowDependencies();
    
    // Example dispatch with file changes
    const changes = [
      'package.json',
      'src/components/Button.tsx',
      'docs/README.md'
    ];
    
    const results = await dispatcher.dispatchWorkflows(changes);
    
    // Print summary
    dispatcher.printDispatchSummary(results);
    
  } catch (error) {
    console.error("❌ Error running smart workflow dispatcher:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SmartWorkflowDispatcher;