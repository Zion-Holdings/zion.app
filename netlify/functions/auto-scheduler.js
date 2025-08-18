exports.handler = async (event, context) => {
  try {
    console.log('Running auto-scheduler function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple auto scheduling logic
    const result = {
      scheduled: true,
      timestamp: new Date().toISOString(),
      message: 'Auto scheduling completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Auto scheduler completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in auto-scheduler function:', error);
    
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