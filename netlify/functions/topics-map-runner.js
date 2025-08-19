const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting topics-map-runner function...');
    
    // Run topics mapping tasks
    const tasks = [
      'topics-map-runner',
      'topics-mapper'
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
    
    console.log('✅ topics-map-runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'topics-map-runner completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ topics-map-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};