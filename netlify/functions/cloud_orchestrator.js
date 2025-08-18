const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('cloud_orchestrator function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the cloud orchestrator automation
    const result = execSync('node automation/cloud-orchestrator-plus.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 60000
    });
    
    console.log('cloud_orchestrator completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Cloud orchestrator completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('cloud_orchestrator error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      })
    };
  }
};