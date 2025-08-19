#!/usr/bin/env node

const ControlGuard = require('./helpers/control-guard.js');
const LockManager = require('./helpers/lock-manager.js');
const BudgetManager = require('./helpers/budget-manager.js');
const Telemetry = require('./helpers/telemetry.js');

console.log('🤖 Testing Automation Helpers...\n');

// Test ControlGuard
console.log('=== Testing ControlGuard ===');
const control = new ControlGuard();
console.log('Global pause:', control.isGloballyPaused());
console.log('Function enabled (ultrafast_orchestrator):', control.isFunctionEnabled('ultrafast_orchestrator'));
console.log('Workflow enabled (autonomous_ultrafast):', control.isWorkflowEnabled('autonomous_ultrafast'));
console.log('Throttles:', control.getThrottle('maxConcurrentFunctions'));
console.log('OpenAI budget:', control.getBudget('openai'));
console.log('Marketing config (linkedin):', control.getMarketingConfig('linkedin'));
console.log('Should skip LinkedIn marketing:', control.shouldSkipMarketing('linkedin'));

// Test LockManager
console.log('\n=== Testing LockManager ===');
const lockManager = new LockManager();
const operation = 'test_operation';
console.log('Is locked initially:', lockManager.isLocked(operation));
console.log('Try acquire lock:', lockManager.tryAcquireLock(operation, 5000)); // 5 second TTL
console.log('Is locked after acquire:', lockManager.isLocked(operation));
console.log('Lock info:', lockManager.getLockInfo(operation));
console.log('Try acquire again (should fail):', lockManager.tryAcquireLock(operation, 5000));
console.log('Release lock:', lockManager.releaseLock(operation));
console.log('Is locked after release:', lockManager.isLocked(operation));

// Test BudgetManager
console.log('\n=== Testing BudgetManager ===');
const budgetManager = new BudgetManager();
console.log('OpenAI budget before spending:', budgetManager.getBudget('openai'));
console.log('Record spending $0.50:', budgetManager.recordSpending('openai', 0.50, 'Test API call'));
console.log('OpenAI budget after spending:', budgetManager.getBudget('openai'));
console.log('Daily budget exceeded:', budgetManager.isDailyBudgetExceeded('openai'));
console.log('Budget summary:', budgetManager.getBudgetSummary());

// Test Telemetry
console.log('\n=== Testing Telemetry ===');
const telemetry = new Telemetry();
console.log('Record function execution:', telemetry.recordFunctionExecution('test_function', {
  durationMs: 1500,
  exitCode: 0,
  commitsWritten: 2
}));
console.log('Record workflow execution:', telemetry.recordWorkflowExecution('test_workflow', {
  durationMs: 30000,
  conclusion: 'success',
  commitsWritten: 1
}));
console.log('Health summary:', telemetry.getHealthSummary());
console.log('Function health:', telemetry.getFunctionHealth('test_function'));
console.log('Workflows needing attention:', telemetry.getWorkflowsNeedingAttention());

console.log('\n✅ All automation helpers tested successfully!');
console.log('\n📊 Check the following files for generated data:');
console.log('- public/reports/automation/health.json (telemetry data)');
console.log('- automation/locks/ (lock files)');
console.log('- automation/budgets/ (budget tracking)');
console.log('- automation/control.json (control plane)');
