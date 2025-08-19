// Netlify Function: dead-code-report
// Schedule: 7 */6 * * *
// Generated automatically - do not edit manually

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log(`[dead-code-report] Function triggered at ${new Date().toISOString()}`);
  
  try {
    // Execute the corresponding automation script
    const scriptPath = path.join(process.cwd(), 'automation', 'dead-code-scanner.cjs');
    
    if (fs.existsSync(scriptPath)) {
      console.log(`[dead-code-report] Running automation script: ${scriptPath}`);
      
      // Execute the script synchronously
      const result = execSync(`node ${scriptPath}`, { 
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      console.log(`[dead-code-report] Script execution result:`, result);
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          function: 'dead-code-report',
          timestamp: new Date().toISOString(),
          result: result.substring(0, 1000) // Limit response size
        })
      };
    } else {
      console.log(`[dead-code-report] Automation script not found: ${scriptPath}`);
      
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          function: 'dead-code-report',
          error: 'Automation script not found',
          timestamp: new Date().toISOString()
        })
      };
    }
  } catch (error) {
    console.error(`[dead-code-report] Error executing function:`, error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        function: 'dead-code-report',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};