const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 sitemap_runner function triggered');
    
    // Execute the corresponding automation script
    const scriptPath = path.join(process.cwd(), 'automation', 'sitemap-runner.cjs');
    const result = execSync(`node "${scriptPath}"`, { 
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 30000 // 30 second timeout
    });
    
    console.log('✅ sitemap_runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'sitemap_runner executed successfully',
        timestamp: new Date().toISOString(),
        result: result
      }),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
    
  } catch (error) {
    console.error('❌ sitemap_runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'sitemap_runner execution failed',
        timestamp: new Date().toISOString(),
        error: error.message
      }),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
  }
};