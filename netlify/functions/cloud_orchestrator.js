const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('Starting cloud_orchestrator function');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '..', '..');
    const automationDir = path.join(rootDir, 'automation');
    
    // Check if the automation script exists
    const scriptPath = path.join(automationDir, 'git-sync.cjs');
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`Automation script not found: ${scriptPath}`);
    }
    
    // Run the git sync automation script
    console.log('Running cloud orchestration (git sync)...');
    const result = execSync(`node "${scriptPath}"`, { 
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 60000 
    });
    
    console.log('cloud_orchestrator completed successfully');
    console.log('Output:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Cloud orchestrator completed successfully',
        output: result
      })
    };
    
  } catch (error) {
    console.error('Error in cloud_orchestrator:', error);
    
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