exports.handler = async (event, context) => {
  try {
    console.log('Running home-visionary-expander function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple home visionary expansion logic
    const result = {
      expanded: true,
      timestamp: new Date().toISOString(),
      message: 'Home visionary expansion completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Home visionary expander completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in home-visionary-expander function:', error);
    
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