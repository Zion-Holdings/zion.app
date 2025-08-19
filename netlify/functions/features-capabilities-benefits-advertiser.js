const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting features-capabilities-benefits-advertiser function...');
    
    // Run features, capabilities, and benefits advertising tasks
    const tasks = [
      'features-capabilities-benefits-advertiser',
      'features-advertiser',
      'capabilities-advertiser'
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
    
    console.log('✅ features-capabilities-benefits-advertiser completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'features-capabilities-benefits-advertiser completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ features-capabilities-benefits-advertiser failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};