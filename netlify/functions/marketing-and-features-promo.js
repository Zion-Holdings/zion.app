const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 marketing-and-features-promo function triggered');
    
    // Execute the corresponding automation script
    const scriptPath = path.join(process.cwd(), 'automation', 'marketing-and-features-promo.cjs');
    const result = execSync(`node "${scriptPath}"`, { 
      encoding: 'utf8',
      cwd: process.cwd(),
      timeout: 30000 // 30 second timeout
    });
    
    console.log('✅ marketing-and-features-promo completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'marketing-and-features-promo executed successfully',
        timestamp: new Date().toISOString(),
        result: result
      }),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
    
  } catch (error) {
    console.error('❌ marketing-and-features-promo failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'marketing-and-features-promo execution failed',
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