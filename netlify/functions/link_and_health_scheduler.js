exports.handler = async function(event, context) {
  try {
    console.log('link_and_health_scheduler function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Link and health scheduler function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'link_and_health_scheduler'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in link_and_health_scheduler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};