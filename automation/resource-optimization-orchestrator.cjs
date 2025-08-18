#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class ResourceOptimizationOrchestrator {
  constructor() {
    this.workflowsDir = path.resolve(__dirname, "../.github/workflows");
    this.configPath = path.resolve(__dirname, "config/resource-optimization.json");
    this.schedulePath = path.resolve(__dirname, "reports/workflow-schedule.json");
    this.runningWorkflows = new Map();
    this.workflowQueue = [];
    this.resourceLimits = {
      maxConcurrentWorkflows: 10,
      maxConcurrentRunners: 20,
      criticalWorkflowSlots: 3,
      resourceIntensiveSlots: 2
    };
    
    this.loadConfiguration();
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      path.dirname(this.configPath),
      path.dirname(this.schedulePath)
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    if (fs.existsSync(this.configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
        this.resourceLimits = { ...this.resourceLimits, ...config };
      } catch (error) {
        console.warn("⚠️  Failed to load configuration, using defaults:", error.message);
      }
    }
    
    // Save default configuration
    this.saveConfiguration();
  }

  saveConfiguration() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.resourceLimits, null, 2));
  }

  async analyzeWorkflowResources() {
    console.log("🔍 Analyzing workflow resource requirements...");
    
    const workflows = this.getActiveWorkflows();
    const resourceAnalysis = {};
    
    for (const workflow of workflows) {
      const analysis = await this.analyzeWorkflowResourceUsage(workflow);
      resourceAnalysis[workflow.name] = analysis;
    }
    
    return resourceAnalysis;
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

  async analyzeWorkflowResourceUsage(workflow) {
    const content = fs.readFileSync(workflow.path, 'utf8');
    const analysis = {
      name: workflow.name,
      path: workflow.path,
      priority: this.calculatePriority(workflow.name, content),
      resourceIntensity: this.calculateResourceIntensity(content),
      estimatedDuration: this.estimateDuration(content),
      concurrentJobs: this.countConcurrentJobs(content),
      runnerRequirements: this.analyzeRunnerRequirements(content),
      dependencies: this.extractDependencies(content),
      triggers: this.extractTriggers(content),
      resourceScore: 0
    };
    
    // Calculate overall resource score
    analysis.resourceScore = this.calculateResourceScore(analysis);
    
    return analysis;
  }

  calculatePriority(workflowName, content) {
    // Critical workflows get highest priority
    const criticalWorkflows = [
      'ci.yml', 'security-gates.yml', 'dependency-auto-upgrade.yml',
      'ci-self-heal.yml', 'auto-heal-workflows.yml'
    ];
    
    if (criticalWorkflows.includes(workflowName)) {
      return 'critical';
    }
    
    // Security and dependency workflows
    if (workflowName.includes('security') || workflowName.includes('depend')) {
      return 'high';
    }
    
    // Marketing and content workflows
    if (workflowName.includes('marketing') || workflowName.includes('content')) {
      return 'medium';
    }
    
    // Maintenance and utility workflows
    if (workflowName.includes('maintenance') || workflowName.includes('utility')) {
      return 'low';
    }
    
    return 'medium';
  }

  calculateResourceIntensity(content) {
    let intensity = 'low';
    
    // Check for resource-intensive operations
    if (content.includes('--max-old-space-size=6144') || content.includes('--max-old-space-size=8192')) {
      intensity = 'very-high';
    } else if (content.includes('--max-old-space-size=4096')) {
      intensity = 'high';
    } else if (content.includes('npm ci') || content.includes('npm install')) {
      intensity = 'medium';
    }
    
    // Check for multiple jobs
    const jobCount = (content.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:/gm) || []).length;
    if (jobCount > 5) {
      intensity = 'high';
    } else if (jobCount > 3) {
      intensity = 'medium';
    }
    
    return intensity;
  }

  estimateDuration(content) {
    // Extract timeout values
    const timeouts = content.match(/timeout-minutes:\s*(\d+)/g);
    if (timeouts && timeouts.length > 0) {
      const maxTimeout = Math.max(...timeouts.map(t => parseInt(t.split(':')[1])));
      return Math.min(maxTimeout, 60); // Cap at 60 minutes for estimation
    }
    
    // Estimate based on content
    let estimatedMinutes = 15; // Default
    
    if (content.includes('npm ci')) estimatedMinutes += 10;
    if (content.includes('npm run build')) estimatedMinutes += 20;
    if (content.includes('npm run test')) estimatedMinutes += 15;
    if (content.includes('playwright')) estimatedMinutes += 25;
    if (content.includes('lighthouse')) estimatedMinutes += 10;
    
    return estimatedMinutes;
  }

  countConcurrentJobs(content) {
    const lines = content.split('\n');
    let concurrentCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:$/)) {
        const jobName = line.replace(':', '');
        if (jobName !== 'on' && jobName !== 'permissions' && jobName !== 'concurrency' && jobName !== 'env') {
          concurrentCount++;
        }
      }
    }
    
    return concurrentCount;
  }

  analyzeRunnerRequirements(content) {
    const requirements = {
      runner: 'ubuntu-latest',
      size: 'standard',
      special: []
    };
    
    // Check for specific runner requirements
    if (content.includes('runs-on: ubuntu-latest')) {
      requirements.runner = 'ubuntu-latest';
    } else if (content.includes('runs-on: ubuntu-20.04')) {
      requirements.runner = 'ubuntu-20.04';
    } else if (content.includes('runs-on: ubuntu-18.04')) {
      requirements.runner = 'ubuntu-18.04';
    }
    
    // Check for larger runners
    if (content.includes('--max-old-space-size=6144') || content.includes('--max-old-space-size=8192')) {
      requirements.size = 'large';
    }
    
    // Check for special requirements
    if (content.includes('docker') || content.includes('container:')) {
      requirements.special.push('docker');
    }
    
    if (content.includes('windows') || content.includes('macos')) {
      requirements.special.push('os-specific');
    }
    
    return requirements;
  }

  extractDependencies(content) {
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

  calculateResourceScore(analysis) {
    let score = 0;
    
    // Priority scoring
    switch (analysis.priority) {
      case 'critical': score += 100; break;
      case 'high': score += 80; break;
      case 'medium': score += 50; break;
      case 'low': score += 20; break;
    }
    
    // Resource intensity scoring
    switch (analysis.resourceIntensity) {
      case 'very-high': score += 40; break;
      case 'high': score += 30; break;
      case 'medium': score += 20; break;
      case 'low': score += 10; break;
    }
    
    // Duration scoring (shorter = higher priority for scheduling)
    score += Math.max(0, 60 - analysis.estimatedDuration);
    
    // Concurrent jobs scoring
    score += Math.max(0, 10 - analysis.concurrentJobs);
    
    return score;
  }

  async optimizeWorkflowSchedule() {
    console.log("🚀 Optimizing workflow schedule...");
    
    const resourceAnalysis = await this.analyzeWorkflowResources();
    const optimizedSchedule = this.createOptimizedSchedule(resourceAnalysis);
    
    // Save the optimized schedule
    this.saveSchedule(optimizedSchedule);
    
    // Generate scheduling recommendations
    const recommendations = this.generateSchedulingRecommendations(optimizedSchedule);
    
    return { schedule: optimizedSchedule, recommendations };
  }

  createOptimizedSchedule(resourceAnalysis) {
    const workflows = Object.values(resourceAnalysis);
    
    // Sort by resource score (highest first)
    workflows.sort((a, b) => b.resourceScore - a.resourceScore);
    
    const schedule = {
      timestamp: new Date().toISOString(),
      critical: [],
      high: [],
      medium: [],
      low: [],
      resourceIntensive: [],
      recommendations: []
    };
    
    // Categorize workflows
    for (const workflow of workflows) {
      switch (workflow.priority) {
        case 'critical':
          schedule.critical.push(workflow);
          break;
        case 'high':
          schedule.high.push(workflow);
          break;
        case 'medium':
          schedule.medium.push(workflow);
          break;
        case 'low':
          schedule.low.push(workflow);
          break;
      }
      
      if (workflow.resourceIntensity === 'high' || workflow.resourceIntensity === 'very-high') {
        schedule.resourceIntensive.push(workflow);
      }
    }
    
    // Generate scheduling recommendations
    schedule.recommendations = this.generateScheduleRecommendations(schedule);
    
    return schedule;
  }

  generateScheduleRecommendations(schedule) {
    const recommendations = [];
    
    // Check critical workflow count
    if (schedule.critical.length > this.resourceLimits.criticalWorkflowSlots) {
      recommendations.push({
        type: 'warning',
        message: `Too many critical workflows (${schedule.critical.length}/${this.resourceLimits.criticalWorkflowSlots})`,
        suggestion: 'Consider consolidating or deprioritizing some critical workflows'
      });
    }
    
    // Check resource-intensive workflows
    if (schedule.resourceIntensive.length > this.resourceLimits.resourceIntensiveSlots) {
      recommendations.push({
        type: 'warning',
        message: `Too many resource-intensive workflows (${schedule.resourceIntensive.length}/${this.resourceLimits.resourceIntensiveSlots})`,
        suggestion: 'Schedule resource-intensive workflows during off-peak hours'
      });
    }
    
    // Check for potential conflicts
    const highPriorityCount = schedule.critical.length + schedule.high.length;
    if (highPriorityCount > this.resourceLimits.maxConcurrentWorkflows * 0.7) {
      recommendations.push({
        type: 'info',
        message: `High priority workflows may compete for resources (${highPriorityCount})`,
        suggestion: 'Consider staggering high-priority workflow execution'
      });
    }
    
    return recommendations;
  }

  generateSchedulingRecommendations(schedule) {
    const recommendations = [];
    
    // Time-based scheduling
    recommendations.push({
      category: 'Time Scheduling',
      items: [
        'Run critical workflows during business hours for immediate response',
        'Schedule resource-intensive workflows during off-peak hours (2-6 AM UTC)',
        'Stagger high-priority workflows to avoid resource contention',
        'Use workflow_dispatch for manual testing during low-traffic periods'
      ]
    });
    
    // Resource optimization
    recommendations.push({
      category: 'Resource Optimization',
      items: [
        'Implement workflow concurrency groups to limit parallel execution',
        'Use larger runners for memory-intensive workflows',
        'Add timeout-minutes to prevent resource hogging',
        'Implement job dependencies to optimize resource usage'
      ]
    });
    
    // Monitoring and alerts
    recommendations.push({
      category: 'Monitoring & Alerts',
      items: [
        'Monitor concurrent workflow execution',
        'Set up alerts for resource usage spikes',
        'Track workflow execution times and resource consumption',
        'Implement automatic workflow scaling based on demand'
      ]
    });
    
    return recommendations;
  }

  saveSchedule(schedule) {
    fs.writeFileSync(this.schedulePath, JSON.stringify(schedule, null, 2));
    console.log(`💾 Optimized schedule saved to: ${this.schedulePath}`);
  }

  async enforceResourceLimits() {
    console.log("🛡️  Enforcing resource limits...");
    
    const currentRunning = this.getCurrentlyRunningWorkflows();
    const violations = this.checkResourceViolations(currentRunning);
    
    if (violations.length > 0) {
      console.log("⚠️  Resource limit violations detected:");
      violations.forEach(v => console.log(`  • ${v.message}`));
      
      // Generate enforcement actions
      const actions = this.generateEnforcementActions(violations);
      return actions;
    }
    
    console.log("✅ All resource limits are being respected");
    return [];
  }

  getCurrentlyRunningWorkflows() {
    // This would typically query GitHub API for currently running workflows
    // For now, we'll return a mock structure
    return [];
  }

  checkResourceViolations(runningWorkflows) {
    const violations = [];
    
    // Check concurrent workflow limit
    if (runningWorkflows.length > this.resourceLimits.maxConcurrentWorkflows) {
      violations.push({
        type: 'concurrent_workflows',
        message: `Too many concurrent workflows: ${runningWorkflows.length}/${this.resourceLimits.maxConcurrentWorkflows}`,
        severity: 'high'
      });
    }
    
    // Check critical workflow slots
    const criticalRunning = runningWorkflows.filter(w => w.priority === 'critical').length;
    if (criticalRunning > this.resourceLimits.criticalWorkflowSlots) {
      violations.push({
        type: 'critical_slots',
        message: `Too many critical workflows running: ${criticalRunning}/${this.resourceLimits.criticalWorkflowSlots}`,
        severity: 'critical'
      });
    }
    
    return violations;
  }

  generateEnforcementActions(violations) {
    const actions = [];
    
    for (const violation of violations) {
      switch (violation.type) {
        case 'concurrent_workflows':
          actions.push({
            action: 'cancel_low_priority',
            message: 'Cancel low-priority workflows to free up slots',
            priority: violation.severity
          });
          break;
          
        case 'critical_slots':
          actions.push({
            action: 'cancel_non_critical',
            message: 'Cancel all non-critical workflows immediately',
            priority: violation.severity
          });
          break;
      }
    }
    
    return actions;
  }

  printScheduleSummary(schedule) {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 OPTIMIZED WORKFLOW SCHEDULE");
    console.log("=".repeat(60));
    
    console.log(`Critical Workflows: ${schedule.critical.length}`);
    console.log(`High Priority: ${schedule.high.length}`);
    console.log(`Medium Priority: ${schedule.medium.length}`);
    console.log(`Low Priority: ${schedule.low.length}`);
    console.log(`Resource Intensive: ${schedule.resourceIntensive.length}`);
    
    if (schedule.recommendations.length > 0) {
      console.log("\n🔴 RECOMMENDATIONS:");
      schedule.recommendations.forEach(rec => {
        console.log(`  • ${rec.type}: ${rec.message}`);
        console.log(`    Suggestion: ${rec.suggestion}`);
      });
    }
    
    console.log("=".repeat(60));
  }
}

// Run the orchestrator
async function main() {
  try {
    const orchestrator = new ResourceOptimizationOrchestrator();
    
    // Analyze and optimize workflow schedule
    const result = await orchestrator.optimizeWorkflowSchedule();
    
    // Print summary
    orchestrator.printScheduleSummary(result.schedule);
    
    // Enforce resource limits
    const enforcementActions = await orchestrator.enforceResourceLimits();
    
    if (enforcementActions.length > 0) {
      console.log("\n🛡️  ENFORCEMENT ACTIONS:");
      enforcementActions.forEach(action => {
        console.log(`  • ${action.action}: ${action.message} (Priority: ${action.priority})`);
      });
    }
    
  } catch (error) {
    console.error("❌ Error running resource optimization orchestrator:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ResourceOptimizationOrchestrator;