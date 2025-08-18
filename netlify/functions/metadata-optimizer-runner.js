const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('metadata-optimizer-runner function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the metadata optimizer automation
    const result = execSync('node automation/metadata-optimizer.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('metadata-optimizer-runner completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Metadata optimizer runner completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('metadata-optimizer-runner error:', error);
    
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