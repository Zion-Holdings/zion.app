const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting todo-summary-runner function...');
    
    // Run TODO summary tasks
    const tasks = [
      'todo-summary-runner',
      'todo-summary'
    ];
    
    for (const task of tasks) {
      try {
        const scriptPath = path.join(process.cwd(), 'automation', `${task}.cjs`);
        if (require('fs').existsSync(scriptPath)) {
          console.log(`Running ${task}...`);
          execSync(`node ${scriptPath}`, { stdio: 'inherit' });
        }
      } catch (taskError) {
        console.warn(`Warning: ${task} failed:`, taskError.message);
      }
    }
    
    console.log('✅ todo-summary-runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'todo-summary-runner completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ todo-summary-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};