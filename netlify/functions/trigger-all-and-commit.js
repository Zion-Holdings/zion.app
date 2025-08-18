const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('trigger-all-and-commit function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the trigger all and commit automation
    const result = execSync('node scripts/trigger-netlify-automations.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 60000
    });
    
    console.log('trigger-all-and-commit completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Trigger all and commit completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('trigger-all-and-commit error:', error);
    
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