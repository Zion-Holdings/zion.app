const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('features-capabilities-benefits-advertiser function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the features capabilities benefits advertiser automation
    const result = execSync('node automation/front-index-advertiser.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('features-capabilities-benefits-advertiser completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Features capabilities benefits advertiser completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('features-capabilities-benefits-advertiser error:', error);
    
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