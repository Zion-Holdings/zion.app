exports.handler = async function(event, context) {
  try {
    console.log('pagespeed_insights_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'PageSpeed insights runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'pagespeed_insights_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in pagespeed_insights_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};