exports.handler = async (event, context) => {
  try {
    console.log('Running revenue-ideas-lab function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple revenue ideas lab logic
    const result = {
      generated: true,
      timestamp: new Date().toISOString(),
      message: 'Revenue ideas generation completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Revenue ideas lab completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in revenue-ideas-lab function:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};