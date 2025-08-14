const path = require('path');
const { spawnSync } = require('child_process');

// Import helper libraries
const ControlGuard = require('../../automation/helpers/control-guard.js');
const LockManager = require('../../automation/helpers/lock-manager.js');
const Telemetry = require('../../automation/helpers/telemetry.js');
const BudgetManager = require('../../automation/helpers/budget-manager.js');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '0 */6 * * *', // every 6 hours
};

exports.handler = async () => {
  const startTime = Date.now();
  const functionName = 'marketing_scheduler';
  
  // Initialize helpers
  const control = new ControlGuard();
  const lockManager = new LockManager();
  const telemetry = new Telemetry();
  const budgetManager = new BudgetManager();
  
  // Check if function is enabled
  const earlyReturn = control.earlyReturnIfDisabled(functionName);
  if (earlyReturn) {
    telemetry.recordFunctionExecution(functionName, {
      durationMs: Date.now() - startTime,
      skippedReason: 'disabled',
      exitCode: 0
    });
    return earlyReturn;
  }
  
  // Try to acquire lock
  if (!lockManager.tryAcquireLock(functionName, 30 * 60 * 1000)) { // 30 minute TTL
    telemetry.recordFunctionExecution(functionName, {
      durationMs: Date.now() - startTime,
      skippedReason: 'already_running',
      exitCode: 0
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'skipped',
        reason: 'already_running',
        function: functionName,
        timestamp: new Date().toISOString()
      })
    };
  }
  
  // Declare variables that will be used in logStep function
  const logs = [];
  let totalCommits = 0;
  let hasErrors = false;
  
  // Define logStep function at handler level
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const stepStart = Date.now();
    const { status, stdout, stderr } = fn();
    const stepDuration = Date.now() - stepStart;
    
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status} duration=${stepDuration}ms`);
    
    // Track commits if any
    if (stdout.includes('commit') || stdout.includes('pushed')) {
      totalCommits++;
    }
    
    if (status !== 0) {
      hasErrors = true;
    }
    
    return status;
  }
  
  try {
    // Check OpenAI budget before proceeding
    if (budgetManager.isDailyBudgetExceeded('openai')) {
      logs.push('OpenAI daily budget exceeded, skipping generative marketing steps');
      telemetry.recordFunctionExecution(functionName, {
        durationMs: Date.now() - startTime,
        skippedReason: 'openai_budget_exceeded',
        exitCode: 0
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: 'skipped',
          reason: 'openai_budget_exceeded',
          function: functionName,
          timestamp: new Date().toISOString()
        })
      };
    }

    // Ensure canonical URL available to scripts
    process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

    // Check marketing controls for each platform
    const linkedinEnabled = !control.shouldSkipMarketing('linkedin');
    const instagramEnabled = !control.shouldSkipMarketing('instagram');

    if (linkedinEnabled) {
      // LinkedIn (standard)
      logStep('linkedin:analyze', () => runNode('automation/linkedin-marketing-analyzer.cjs'));
      logStep('linkedin:factory', () => runNode('automation/linkedin-marketing-factory.cjs'));
      logStep('linkedin:post-once', () => runNode('automation/linkedin-marketing-orchestrator.cjs', ['once']));
    } else {
      logs.push('LinkedIn marketing skipped due to quiet hours or disabled');
    }

    // LinkedIn Pro
    if (linkedinEnabled) {
      logStep('linkedin-pro:once', () => runNode('automation/linkedin-pro-orchestrator.cjs', ['once']));
    }

    if (instagramEnabled) {
      // Instagram
      logStep('instagram:analyze', () => runNode('automation/instagram-marketing-analyzer.cjs'));
      logStep('instagram:factory', () => runNode('automation/instagram-marketing-factory.cjs'));
      logStep('instagram:post-once', () => runNode('automation/instagram-marketing-orchestrator.cjs', ['once']));
    } else {
      logs.push('Instagram marketing skipped due to quiet hours or disabled');
    }

    const duration = Date.now() - startTime;
    
    // Record telemetry
    telemetry.recordFunctionExecution(functionName, {
      durationMs: duration,
      exitCode: hasErrors ? 1 : 0,
      commitsWritten: totalCommits,
      errorMessage: hasErrors ? 'Some steps failed' : null
    });

    return { 
      statusCode: hasErrors ? 207 : 200, 
      body: JSON.stringify({
        status: hasErrors ? 'partial_success' : 'success',
        function: functionName,
        durationMs: duration,
        commitsWritten: totalCommits,
        linkedinEnabled,
        instagramEnabled,
        logs: logs.join('\n'),
        timestamp: new Date().toISOString()
      })
    };
    
  } finally {
    // Always release the lock
    lockManager.releaseLock(functionName);
  }
};


