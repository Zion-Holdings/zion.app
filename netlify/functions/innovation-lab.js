const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('innovation-lab function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the innovation lab automation
    const result = execSync('node automation/quantum-ai-innovation.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('innovation-lab completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Innovation lab completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('innovation-lab error:', error);
    
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