const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log('🤖 trigger-all-and-commit function triggered');
    
    // Get list of all functions
    const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
    const functionFiles = fs.readdirSync(functionsDir)
      .filter(f => f.endsWith('.js'))
      .map(f => f.replace('.js', ''))
      .filter(name => name !== 'trigger-all-and-commit'); // Avoid infinite recursion
    
    console.log(`📋 Found ${functionFiles.length} functions to potentially trigger`);
    
    // In a real Netlify environment, this would trigger other functions
    // For now, we'll simulate the process
    const triggeredFunctions = functionFiles.slice(0, 5); // Limit to first 5 for demo
    
    // Simulate triggering functions
    const results = [];
    for (const funcName of triggeredFunctions) {
      try {
        // In production, this would make HTTP calls to trigger the functions
        console.log(`🔄 Simulating trigger of: ${funcName}`);
        results.push({ name: funcName, status: 'triggered', success: true });
      } catch (error) {
        console.error(`❌ Failed to trigger ${funcName}:`, error.message);
        results.push({ name: funcName, status: 'failed', success: false, error: error.message });
      }
    }
    
    // Simulate git operations
    const gitStatus = {
      hasChanges: false,
      stagedFiles: [],
      commitMessage: null
    };
    
    // Check if there are any log files that could be committed
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    if (fs.existsSync(logsDir)) {
      const logFiles = fs.readdirSync(logsDir).filter(f => f.endsWith('.json'));
      if (logFiles.length > 0) {
        gitStatus.hasChanges = true;
        gitStatus.stagedFiles = logFiles.slice(0, 3); // Limit to first 3
        gitStatus.commitMessage = `🤖 Auto-commit from trigger-all-and-commit function [skip ci]`;
      }
    }
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'trigger-all-and-commit function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'trigger-all-and-commit',
        triggeredFunctions: results,
        gitStatus: gitStatus,
        summary: {
          totalFunctions: functionFiles.length,
          triggered: results.filter(r => r.success).length,
          failed: results.filter(r => !r.success).length
        }
      })
    };
    
    return result;
  } catch (error) {
    console.error('❌ trigger-all-and-commit function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'trigger-all-and-commit'
      })
    };
  }
};
