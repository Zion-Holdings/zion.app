const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('Starting homepage_advertiser function');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '..', '..');
    const automationDir = path.join(rootDir, 'automation');
    
    // Check if the automation script exists
    const scriptPath = path.join(automationDir, 'homepage-auto-advertiser.cjs');
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`Automation script not found: ${scriptPath}`);
    }
    
    // Run the automation script
    console.log('Running homepage-auto-advertiser automation...');
    const result = execSync(`node "${scriptPath}"`, { 
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000 
    });
    
    console.log('homepage_advertiser completed successfully');
    console.log('Output:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Homepage advertiser completed successfully',
        output: result
      })
    };
    
  } catch (error) {
    console.error('Error in homepage_advertiser:', error);
    
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