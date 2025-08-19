const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting duplicate-media-finder-runner function...');
    
    // Run duplicate media finding tasks
    const tasks = [
      'duplicate-media-finder-runner',
      'duplicate-media-finder'
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
    
    console.log('✅ duplicate-media-finder-runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'duplicate-media-finder-runner completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ duplicate-media-finder-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};