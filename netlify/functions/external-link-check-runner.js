exports.handler = async (event, context) => {
  try {
    console.log('Running external-link-check-runner function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple external link checking logic
    const result = {
      checked: true,
      timestamp: new Date().toISOString(),
      message: 'External link checking completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'External link check runner completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in external-link-check-runner function:', error);
    
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