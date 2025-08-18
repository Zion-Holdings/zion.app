const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 front-enhancer function triggered');
    
    // Run the corresponding automation script
    const scriptPath = path.join(process.cwd(), 'automation', 'frontend-automation-orchestrator.cjs');
    const result = execSync(`node "${scriptPath}"`, { 
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 30000 // 30 second timeout
    });
    
    console.log('✅ front-enhancer completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Front enhancer completed successfully',
        output: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ front-enhancer failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};