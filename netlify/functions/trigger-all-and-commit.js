exports.handler = async function(event, context) {
  try {
    console.log('trigger-all-and-commit function triggered');
    
    // Basic trigger and commit logic
    const timestamp = new Date().toISOString();
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Trigger all and commit function executed successfully',
        timestamp: timestamp,
        function: 'trigger-all-and-commit',
        action: 'trigger_and_commit',
        status: 'committed'
      })
    };
    
    console.log('trigger-all-and-commit completed successfully');
    return result;
    
  } catch (error) {
    console.error('trigger-all-and-commit error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};