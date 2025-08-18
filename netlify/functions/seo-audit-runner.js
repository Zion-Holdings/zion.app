const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('seo-audit-runner function triggered');
    
    // Get the root directory
    const rootDir = path.resolve(__dirname, '../..');
    
    // Run the SEO audit automation
    const result = execSync('node automation/seo-audit.cjs', {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 30000
    });
    
    console.log('seo-audit-runner completed successfully:', result);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'SEO audit runner completed successfully',
        result: result
      })
    };
  } catch (error) {
    console.error('seo-audit-runner error:', error);
    
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