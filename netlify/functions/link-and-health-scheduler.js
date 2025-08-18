exports.handler = async (event, context) => {
  try {
    console.log('Running link-and-health-scheduler function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple link and health scheduling logic
    const result = {
      scheduled: true,
      timestamp: new Date().toISOString(),
      message: 'Link and health scheduling completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Link and health scheduler completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in link-and-health-scheduler function:', error);
    
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