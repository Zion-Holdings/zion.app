const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 cloud_orchestrator function triggered');
    
    // Run the master automation orchestrator
    const scriptPath = path.join(process.cwd(), 'automation', 'master-automation-orchestrator.cjs');
    const result = execSync(`node "${scriptPath}" audit`, { 
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 60000 // 60 second timeout for orchestrator
    });
    
    console.log('✅ cloud_orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Cloud orchestrator completed successfully',
        output: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ cloud_orchestrator failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};