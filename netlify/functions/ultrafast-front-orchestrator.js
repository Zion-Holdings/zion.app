const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting ultrafast-front-orchestrator function...');
    
    // Run ultrafast front orchestration tasks
    const tasks = [
      'ultrafast-front-orchestrator',
      'ultrafast-orchestrator',
      'front-accelerator'
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
    
    console.log('✅ ultrafast-front-orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'ultrafast-front-orchestrator completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ ultrafast-front-orchestrator failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};