const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('ultrafast-orchestrator function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the ultrafast orchestrator automation
    const result = execSync('node automation/ultra-fast-service-generator.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('ultrafast-orchestrator completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Ultrafast orchestrator completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('ultrafast-orchestrator error:', error);
    
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