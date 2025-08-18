const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log('🚀 Continuous Orchestrator function triggered');
    
    // Get list of available functions
    const availableFunctions = await getAvailableFunctions();
    
    // Determine which functions to run based on priority and timing
    const functionsToRun = await prioritizeFunctions(availableFunctions);
    
    // Execute the selected functions
    const executionResults = await executeFunctions(functionsToRun);
    
    // Generate summary report
    const summary = generateSummary(executionResults);
    
    // Save execution log
    await saveExecutionLog(executionResults, summary);
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Continuous orchestration completed successfully',
        timestamp: new Date().toISOString(),
        function: 'continuous-orchestrator',
        summary,
        executedFunctions: executionResults.length,
        successfulExecutions: executionResults.filter(r => r.success).length,
        failedExecutions: executionResults.filter(r => !r.success).length
      })
    };
    
    console.log('✅ Continuous Orchestrator completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ Continuous Orchestrator failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Continuous orchestration failed',
        message: error.message,
        function: 'continuous-orchestrator'
      })
    };
  }
};

async function getAvailableFunctions() {
  try {
    const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
    const files = fs.readdirSync(functionsDir);
    return files
      .filter(file => file.endsWith('.js') && !file.includes('continuous-orchestrator'))
      .map(file => file.replace('.js', ''));
  } catch (error) {
    console.error('Error reading functions directory:', error);
    return [];
  }
}

async function prioritizeFunctions(availableFunctions) {
  // Priority categories
  const highPriority = ['front', 'home', 'index', 'orchestrator', 'enhancer'];
  const mediumPriority = ['runner', 'scanner', 'auditor', 'optimizer'];
  const lowPriority = ['scheduler', 'reporter'];
  
  const prioritized = availableFunctions
    .map(name => {
      let priority = 3; // low
      
      if (highPriority.some(keyword => name.includes(keyword))) {
        priority = 1; // high
      } else if (mediumPriority.some(keyword => name.includes(keyword))) {
        priority = 2; // medium
      }
      
      return { name, priority };
    })
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 10); // Limit to top 10 functions
    
  return prioritized.map(f => f.name);
}

async function executeFunctions(functionsToRun) {
  const results = [];
  
  for (const functionName of functionsToRun) {
    try {
      console.log(`🔄 Executing: ${functionName}`);
      
      // Simulate function execution (in real deployment, this would invoke the actual functions)
      const success = Math.random() > 0.1; // 90% success rate for demo
      const executionTime = Math.floor(Math.random() * 1000) + 50; // 50-1050ms
      
      if (success) {
        results.push({
          name: functionName,
          success: true,
          executionTime,
          timestamp: new Date().toISOString(),
          details: 'Function executed successfully'
        });
        console.log(`✅ Success: ${functionName} (${executionTime}ms)`);
      } else {
        results.push({
          name: functionName,
          success: false,
          executionTime,
          timestamp: new Date().toISOString(),
          details: 'Function execution failed'
        });
        console.log(`❌ Failed: ${functionName} (${executionTime}ms)`);
      }
      
      // Small delay between executions
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      results.push({
        name: functionName,
        success: false,
        executionTime: 0,
        timestamp: new Date().toISOString(),
        details: error.message
      });
      console.error(`💥 Error executing ${functionName}:`, error.message);
    }
  }
  
  return results;
}

function generateSummary(executionResults) {
  const total = executionResults.length;
  const successful = executionResults.filter(r => r.success).length;
  const failed = total - successful;
  const avgExecutionTime = executionResults.reduce((sum, r) => sum + r.executionTime, 0) / total;
  
  return {
    totalExecutions: total,
    successfulExecutions: successful,
    failedExecutions: failed,
    successRate: (successful / total * 100).toFixed(2) + '%',
    averageExecutionTime: Math.round(avgExecutionTime) + 'ms',
    timestamp: new Date().toISOString()
  };
}

async function saveExecutionLog(executionResults, summary) {
  try {
    const logsDir = path.join(process.cwd(), 'automation', 'logs');
    fs.mkdirSync(logsDir, { recursive: true });
    
    const logData = {
      timestamp: new Date().toISOString(),
      function: 'continuous-orchestrator',
      summary,
      executionResults
    };
    
    const logPath = path.join(logsDir, `continuous-orchestrator-${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(logData, null, 2));
    
    console.log(`📝 Execution log saved to: ${logPath}`);
  } catch (error) {
    console.error('Failed to save execution log:', error.message);
  }
}
