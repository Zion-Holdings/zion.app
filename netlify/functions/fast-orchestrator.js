const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

exports.handler = async function(event, context) {
  try {
    // Check if this is a scheduled invocation
    if (event.source === 'local-runner' || event.source === 'netlify-scheduled') {
      console.log('Running fast orchestrator...');
      
      // Simulate fast orchestration tasks
      const tasks = [
        'Quick system health check',
        'Fast resource allocation',
        'Rapid status updates',
        'Immediate response coordination'
      ];
      
      const results = [];
      for (const task of tasks) {
        console.log(`Executing: ${task}`);
        // Simulate fast task execution
        await new Promise(resolve => setTimeout(resolve, 50));
        results.push({ task, status: 'completed', timestamp: new Date().toISOString() });
      }
      
      console.log('Fast orchestration completed successfully');
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Fast orchestration completed',
          tasksExecuted: results.length,
          executionTime: 'fast',
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
          function: 'fast-orchestrator',
          status: 'active',
          description: 'Fast orchestration operations',
          lastRun: new Date().toISOString(),
          schedule: 'Every minute',
          capabilities: [
            'Quick health checks',
            'Fast resource allocation',
            'Rapid status updates',
            'Immediate coordination'
          ]
        })
      };
    }
  } catch (error) {
    console.error('Error in fast-orchestrator:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};