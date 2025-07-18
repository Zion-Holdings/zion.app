const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Only process build events
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Check if this is a build completion event
    if (body.event_type === 'build_succeeded' || body.event_type === 'build_failed') {
      console.log(`Build ${body.event_type}: ${body.site_id}`);
      
      // Trigger self-healing lint system
      await triggerSelfHealing();
      
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          message: 'Self-healing triggered successfully',
          build_id: body.build_id,
          site_id: body.site_id
        })
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Event processed but not a build event' })
    };
    
  } catch (error) {
    console.error('Error processing build hook:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

async function triggerSelfHealing() {
  try {
    console.log('Starting self-healing lint system...');
    
    // Change to project directory
    const projectRoot = path.resolve(__dirname, '../..');
    process.chdir(projectRoot);
    
    // Run the post-build healing script
    execSync('npm run self-healing:post-build', {
      stdio: 'inherit',
      timeout: 300000 // 5 minutes
    });
    
    console.log('Self-healing completed successfully');
    
  } catch (error) {
    console.error('Self-healing failed:', error.message);
    
    // Try alternative healing approach
    try {
      console.log('Trying alternative healing approach...');
      execSync('npm run lint:fix', {
        stdio: 'inherit',
        timeout: 120000 // 2 minutes
      });
      console.log('Alternative healing completed');
    } catch (altError) {
      console.error('Alternative healing also failed:', altError.message);
    }
  }
} 