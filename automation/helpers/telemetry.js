const fs = require('fs');
const path = require('path');

class Telemetry {
  constructor(telemetryDir = 'public/reports/automation') {
    this.telemetryDir = path.resolve(process.cwd(), telemetryDir);
    this.healthFile = path.join(this.telemetryDir, 'health.json');
    this.ensureTelemetryDir();
    this.health = this.loadHealth();
  }

  ensureTelemetryDir() {
    if (!fs.existsSync(this.telemetryDir)) {
      fs.mkdirSync(this.telemetryDir, { recursive: true });
    }
  }

  loadHealth() {
    try {
      if (fs.existsSync(this.healthFile)) {
        return JSON.parse(fs.readFileSync(this.healthFile, 'utf8'));
      }
    } catch (error) {
      console.warn('Failed to load health data:', error.message);
    }
    
    return {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      functions: {},
      workflows: {},
      summary: {
        totalFunctions: 0,
        totalWorkflows: 0,
        healthyFunctions: 0,
        healthyWorkflows: 0,
        failedFunctions: 0,
        failedWorkflows: 0,
        totalCommits: 0,
        totalErrors: 0,
        averageFunctionDuration: 0,
        averageWorkflowDuration: 0
      }
    };
  }

  /**
   * Record function execution
   * @param {string} functionName - Name of the function
   * @param {object} options - Execution options
   * @param {number} options.durationMs - Execution duration in milliseconds
   * @param {number} options.exitCode - Exit code (0 for success)
   * @param {string} options.skippedReason - Reason if skipped
   * @param {number} options.commitsWritten - Number of commits written
   * @param {string} options.errorMessage - Error message if failed
   */
  recordFunctionExecution(functionName, options = {}) {
    const {
      durationMs = 0,
      exitCode = 0,
      skippedReason = null,
      commitsWritten = 0,
      errorMessage = null
    } = options;

    const now = new Date().toISOString();
    
    if (!this.health.functions[functionName]) {
      this.health.functions[functionName] = {
        name: functionName,
        lastRunAt: null,
        lastSuccessAt: null,
        lastFailureAt: null,
        totalRuns: 0,
        successfulRuns: 0,
        failedRuns: 0,
        skippedRuns: 0,
        totalDurationMs: 0,
        averageDurationMs: 0,
        totalCommits: 0,
        lastError: null,
        consecutiveFailures: 0,
        consecutiveSuccesses: 0,
        status: 'unknown'
      };
    }

    const func = this.health.functions[functionName];
    func.lastRunAt = now;
    func.totalRuns++;
    func.totalDurationMs += durationMs;
    func.averageDurationMs = Math.round(func.totalDurationMs / func.totalRuns);
    func.totalCommits += commitsWritten;

    if (skippedReason) {
      func.skippedRuns++;
      func.status = 'skipped';
    } else if (exitCode === 0) {
      func.successfulRuns++;
      func.lastSuccessAt = now;
      func.consecutiveSuccesses++;
      func.consecutiveFailures = 0;
      func.status = 'healthy';
      func.lastError = null;
    } else {
      func.failedRuns++;
      func.lastFailureAt = now;
      func.consecutiveFailures++;
      func.consecutiveSuccesses = 0;
      func.status = 'failed';
      func.lastError = errorMessage;
    }

    this.updateSummary();
    this.saveHealth();
  }

  /**
   * Record workflow execution
   * @param {string} workflowName - Name of the workflow
   * @param {object} options - Execution options
   * @param {number} options.durationMs - Execution duration in milliseconds
   * @param {string} options.conclusion - Workflow conclusion (success, failure, cancelled, etc.)
   * @param {string} options.skippedReason - Reason if skipped
   * @param {number} options.commitsWritten - Number of commits written
   * @param {string} options.errorMessage - Error message if failed
   */
  recordWorkflowExecution(workflowName, options = {}) {
    const {
      durationMs = 0,
      conclusion = 'unknown',
      skippedReason = null,
      commitsWritten = 0,
      errorMessage = null
    } = options;

    const now = new Date().toISOString();
    
    if (!this.health.workflows[workflowName]) {
      this.health.workflows[workflowName] = {
        name: workflowName,
        lastRunAt: null,
        lastSuccessAt: null,
        lastFailureAt: null,
        totalRuns: 0,
        successfulRuns: 0,
        failedRuns: 0,
        skippedRuns: 0,
        cancelledRuns: 0,
        totalDurationMs: 0,
        averageDurationMs: 0,
        totalCommits: 0,
        lastError: null,
        consecutiveFailures: 0,
        consecutiveSuccesses: 0,
        status: 'unknown'
      };
    }

    const workflow = this.health.workflows[workflowName];
    workflow.lastRunAt = now;
    workflow.totalRuns++;
    workflow.totalDurationMs += durationMs;
    workflow.averageDurationMs = Math.round(workflow.totalDurationMs / workflow.totalRuns);
    workflow.totalCommits += commitsWritten;

    if (skippedReason) {
      workflow.skippedRuns++;
      workflow.status = 'skipped';
    } else if (conclusion === 'success') {
      workflow.successfulRuns++;
      workflow.lastSuccessAt = now;
      workflow.consecutiveSuccesses++;
      workflow.consecutiveFailures = 0;
      workflow.status = 'healthy';
      workflow.lastError = null;
    } else if (conclusion === 'cancelled') {
      workflow.cancelledRuns++;
      workflow.status = 'cancelled';
    } else {
      workflow.failedRuns++;
      workflow.lastFailureAt = now;
      workflow.consecutiveFailures++;
      workflow.consecutiveSuccesses = 0;
      workflow.status = 'failed';
      workflow.lastError = errorMessage;
    }

    this.updateSummary();
    this.saveHealth();
  }

  /**
   * Update summary statistics
   */
  updateSummary() {
    const functions = Object.values(this.health.functions);
    const workflows = Object.values(this.health.workflows);

    this.health.summary = {
      totalFunctions: functions.length,
      totalWorkflows: workflows.length,
      healthyFunctions: functions.filter(f => f.status === 'healthy').length,
      healthyWorkflows: workflows.filter(w => w.status === 'healthy').length,
      failedFunctions: functions.filter(f => f.status === 'failed').length,
      failedWorkflows: workflows.filter(w => w.status === 'failed').length,
      totalCommits: functions.reduce((sum, f) => sum + f.totalCommits, 0) + 
                   workflows.reduce((sum, w) => sum + w.totalCommits, 0),
      totalErrors: functions.filter(f => f.status === 'failed').length + 
                  workflows.filter(w => w.status === 'failed').length,
      averageFunctionDuration: functions.length > 0 ? 
        Math.round(functions.reduce((sum, f) => sum + f.averageDurationMs, 0) / functions.length) : 0,
      averageWorkflowDuration: workflows.length > 0 ? 
        Math.round(workflows.reduce((sum, w) => sum + w.averageDurationMs, 0) / workflows.length) : 0
    };

    this.health.lastUpdated = new Date().toISOString();
  }

  /**
   * Save health data to file
   */
  saveHealth() {
    try {
      fs.writeFileSync(this.healthFile, JSON.stringify(this.health, null, 2));
    } catch (error) {
      console.warn('Failed to save health data:', error.message);
    }
  }

  /**
   * Get health summary
   * @returns {object} - Health summary
   */
  getHealthSummary() {
    return this.health.summary;
  }

  /**
   * Get function health
   * @param {string} functionName - Function name (optional)
   * @returns {object} - Function health data
   */
  getFunctionHealth(functionName = null) {
    if (functionName) {
      return this.health.functions[functionName] || null;
    }
    return this.health.functions;
  }

  /**
   * Get workflow health
   * @param {string} workflowName - Workflow name (optional)
   * @returns {object} - Workflow health data
   */
  getWorkflowHealth(workflowName = null) {
    if (workflowName) {
      return this.health.workflows[workflowName] || null;
    }
    return this.health.workflows;
  }

  /**
   * Get functions that need attention (failed or high consecutive failures)
   * @param {number} threshold - Consecutive failure threshold (default: 3)
   * @returns {Array} - Array of functions needing attention
   */
  getFunctionsNeedingAttention(threshold = 3) {
    return Object.values(this.health.functions).filter(f => 
      f.status === 'failed' || f.consecutiveFailures >= threshold
    );
  }

  /**
   * Get workflows that need attention (failed or high consecutive failures)
   * @param {number} threshold - Consecutive failure threshold (default: 3)
   * @returns {Array} - Array of workflows needing attention
   */
  getWorkflowsNeedingAttention(threshold = 3) {
    return Object.values(this.health.workflows).filter(w => 
      w.status === 'failed' || w.consecutiveFailures >= threshold
    );
  }

  /**
   * Get performance metrics
   * @returns {object} - Performance metrics
   */
  getPerformanceMetrics() {
    const functions = Object.values(this.health.functions);
    const workflows = Object.values(this.health.workflows);

    return {
      functions: {
        total: functions.length,
        averageDuration: functions.length > 0 ? 
          Math.round(functions.reduce((sum, f) => sum + f.averageDurationMs, 0) / functions.length) : 0,
        slowest: functions.length > 0 ? 
          functions.reduce((max, f) => f.averageDurationMs > max.averageDurationMs ? f.averageDurationMs : max, 0) : 0,
        fastest: functions.length > 0 ? 
          functions.reduce((min, f) => f.averageDurationMs < min.averageDurationMs ? f.averageDurationMs : min, Infinity) : 0
      },
      workflows: {
        total: workflows.length,
        averageDuration: workflows.length > 0 ? 
          Math.round(workflows.reduce((sum, w) => sum + w.averageDurationMs, 0) / workflows.length) : 0,
        slowest: workflows.length > 0 ? 
          workflows.reduce((max, w) => w.averageDurationMs > max.averageDurationMs ? w.averageDurationMs : max, 0) : 0,
        fastest: workflows.length > 0 ? 
          workflows.reduce((min, w) => w.averageDurationMs < min.averageDurationMs ? w.averageDurationMs : min, Infinity) : 0
      }
    };
  }

  /**
   * Export health data for external consumption
   * @returns {object} - Exportable health data
   */
  exportHealthData() {
    return {
      ...this.health,
      exportTimestamp: new Date().toISOString(),
      exportVersion: '1.0.0'
    };
  }
}

module.exports = Telemetry;
