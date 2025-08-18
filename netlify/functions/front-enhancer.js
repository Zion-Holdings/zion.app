const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('Starting front-enhancer function');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '..', '..');
    const automationDir = path.join(rootDir, 'automation');
    
    // Check if the automation script exists
    const scriptPath = path.join(automationDir, 'frontend-automation-orchestrator.cjs');
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`Automation script not found: ${scriptPath}`);
    }
    
    // Run the frontend automation script
    console.log('Running front enhancement automation...');
    const result = execSync(`node "${scriptPath}"`, { 
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 45000 
    });
    
    console.log('front-enhancer completed successfully');
    console.log('Output:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Front enhancer completed successfully',
        output: result
      })
    };
    
  } catch (error) {
    console.error('Error in front-enhancer:', error);
    
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