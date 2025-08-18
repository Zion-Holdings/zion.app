const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log('🚀 Netlify Auto-Healer Runner function triggered');
    
    // Check system health
    const healthChecks = await performHealthChecks();
    
    // Attempt auto-healing for any issues found
    const healingResults = await performAutoHealing(healthChecks);
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Netlify auto-healing completed successfully',
        timestamp: new Date().toISOString(),
        function: 'netlify-auto-healer-runner',
        healthChecks,
        healingResults,
        summary: {
          totalChecks: healthChecks.length,
          issuesFound: healthChecks.filter(check => !check.healthy).length,
          healingAttempts: healingResults.length,
          successfulHeals: healingResults.filter(heal => heal.success).length
        }
      })
    };
    
    console.log('✅ Netlify Auto-Healer Runner completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ Netlify Auto-Healer Runner failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Netlify auto-healing failed',
        message: error.message,
        function: 'netlify-auto-healer-runner'
      })
    };
  }
};

async function performHealthChecks() {
  const checks = [];
  
  // Check if automation directory exists and is accessible
  try {
    const automationDir = path.join(process.cwd(), 'automation');
    const stats = fs.statSync(automationDir);
    checks.push({
      name: 'automation_directory',
      healthy: stats.isDirectory(),
      details: { path: automationDir, exists: true }
    });
  } catch (error) {
    checks.push({
      name: 'automation_directory',
      healthy: false,
      details: { error: error.message }
    });
  }
  
  // Check if logs directory exists
  try {
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    const stats = fs.statSync(logsDir);
    checks.push({
      name: 'logs_directory',
      healthy: stats.isDirectory(),
      details: { path: logsDir, exists: true }
    });
  } catch (error) {
    checks.push({
      name: 'logs_directory',
      healthy: false,
      details: { error: error.message }
    });
  }
  
  // Check if netlify functions directory exists
  try {
    const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
    const stats = fs.statSync(functionsDir);
    const files = fs.readdirSync(functionsDir);
    checks.push({
      name: 'netlify_functions',
      healthy: files.length > 0,
      details: { path: functionsDir, functionCount: files.filter(f => f.endsWith('.js')).length }
    });
  } catch (error) {
    checks.push({
      name: 'netlify_functions',
      healthy: false,
      details: { error: error.message }
    });
  }
  
  return checks;
}

async function performAutoHealing(healthChecks) {
  const results = [];
  
  for (const check of healthChecks) {
    if (check.healthy) continue;
    
    try {
      switch (check.name) {
        case 'logs_directory':
          if (!check.healthy) {
            const logsDir = path.join(process.cwd(), 'automation', 'logs');
            fs.mkdirSync(logsDir, { recursive: true });
            results.push({
              check: check.name,
              success: true,
              action: 'created_logs_directory',
              details: { path: logsDir }
            });
          }
          break;
          
        case 'netlify_functions':
          if (!check.healthy) {
            const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
            fs.mkdirSync(functionsDir, { recursive: true });
            results.push({
              check: check.name,
              success: true,
              action: 'created_functions_directory',
              details: { path: functionsDir }
            });
          }
          break;
          
        default:
          results.push({
            check: check.name,
            success: false,
            action: 'no_healing_strategy',
            details: { message: 'No auto-healing strategy available for this check' }
          });
      }
    } catch (error) {
      results.push({
        check: check.name,
        success: false,
        action: 'healing_failed',
        details: { error: error.message }
      });
    }
  }
  
  return results;
}
