const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    // Get the automation script path
    const automationPath = path.join(process.cwd(), 'automation', 'fast-advertising-orchestrator.cjs');
    
    // Check if the automation script exists
    if (!fs.existsSync(automationPath)) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: 'Fast orchestrator automation script not found',
          path: automationPath,
          timestamp: new Date().toISOString()
        })
      };
    }

    // Import and run the automation
    const automation = require(automationPath);
    
    let result;
    if (typeof automation === 'function') {
      result = await automation();
    } else if (automation && typeof automation.run === 'function') {
      result = await automation.run();
    } else if (automation && typeof automation.start === 'function') {
      result = await automation.start();
    } else {
      result = { status: 'automation script loaded but no run method found' };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Fast orchestrator function executed successfully',
        result: result,
        timestamp: new Date().toISOString(),
        functionName: 'fast-orchestrator',
        schedule: 'every minute'
      })
    };

  } catch (error) {
    console.error('Fast orchestrator function error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Fast orchestrator function failed',
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        functionName: 'fast-orchestrator'
      })
    };
  }
};