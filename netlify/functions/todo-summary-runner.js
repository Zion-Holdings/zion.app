const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('todo-summary-runner function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the todo summary automation
    const result = execSync('node automation/todo-scanner.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('todo-summary-runner completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Todo summary runner completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('todo-summary-runner error:', error);
    
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