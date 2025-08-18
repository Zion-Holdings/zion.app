const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES_DIR = path.join(ROOT, 'pages');

exports.handler = async function(event, context) {
  try {
    // Check if this is a scheduled invocation
    if (event.source === 'local-runner' || event.source === 'netlify-scheduled') {
      console.log('Running fast front promoter...');
      
      // Simulate fast front promotion tasks
      const tasks = [
        'Quick front content refresh',
        'Fast home page updates',
        'Rapid promotional content',
        'Immediate front optimization'
      ];
      
      const results = [];
      for (const task of tasks) {
        console.log(`Executing: ${task}`);
        // Simulate fast task execution
        await new Promise(resolve => setTimeout(resolve, 80));
        results.push({ task, status: 'completed', timestamp: new Date().toISOString() });
      }
      
      console.log('Fast front promotion completed successfully');
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Fast front promotion completed',
          tasksExecuted: results.length,
          executionSpeed: 'fast',
          results
        })
      };
    } else {
      // HTTP request - return status
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          function: 'fast-front-promoter',
          status: 'active',
          description: 'Fast iteration of front/home updates',
          lastRun: new Date().toISOString(),
          schedule: 'Every 15 minutes',
          capabilities: [
            'Quick content refresh',
            'Fast page updates',
            'Rapid promotions',
            'Immediate optimization'
          ]
        })
      };
    }
  } catch (error) {
    console.error('Error in fast-front-promoter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};