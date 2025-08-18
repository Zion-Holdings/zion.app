exports.handler = async function(event, context) {
  try {
    console.log('auto_scheduler function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Auto scheduler function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'auto_scheduler'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in auto_scheduler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};