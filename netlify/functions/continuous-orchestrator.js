const path = require('path');
const { spawnSync } = require('child_process');

// Import helper libraries
const ControlGuard = require('../../automation/helpers/control-guard.js');
const LockManager = require('../../automation/helpers/lock-manager.js');
const Telemetry = require('../../automation/helpers/telemetry.js');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/5 * * * *',
};

exports.handler = async () => {
  const startTime = Date.now();
  const functionName = 'continuous_orchestrator';
  
  // Initialize helpers
  const control = new ControlGuard();
  const lockManager = new LockManager();
  const telemetry = new Telemetry();
  
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
  if (!lockManager.tryAcquireLock(functionName, 10 * 60 * 1000)) { // 10 minute TTL
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
    // Front index and homepage content refreshers
    logStep('front-index:auto-advertise', () => runNode('automation/front-index-auto-advertiser.cjs'));
    logStep('homepage:updater', () => runNode('automation/homepage-updater.cjs'));
    logStep('homepage:auto-advertiser', () => runNode('automation/homepage-auto-advertiser.cjs'));
    
    // Futuristic UI enhancer for front systems
    logStep('front:futurizer', () => runNode('automation/front-futurizer.cjs'));
    
    // Keep sitemap fresh
    logStep('sitemap:runner', () => runNode('automation/sitemap-runner.cjs'));

    // Push any changes
    logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));

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
        logs: logs.join('\n'),
        timestamp: new Date().toISOString()
      })
    };
    
  } finally {
    // Always release the lock
    lockManager.releaseLock(functionName);
  }
};