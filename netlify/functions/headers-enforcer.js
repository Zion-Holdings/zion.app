const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting headers-enforcer function...');
    
    // Run headers enforcement tasks
    const tasks = [
      'headers-enforcer',
      'security-headers',
      'headers-checker'
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
    
    console.log('✅ headers-enforcer completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'headers-enforcer completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ headers-enforcer failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};