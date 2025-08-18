exports.handler = async function(event, context) {
  try {
    console.log('trigger_all_and_commit function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Trigger all and commit function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'trigger_all_and_commit'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in trigger_all_and_commit:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};