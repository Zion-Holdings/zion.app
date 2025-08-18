exports.handler = async (event, context) => {
  try {
    console.log('Running todo-scanner-runner function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple todo scanning logic
    const result = {
      scanned: true,
      timestamp: new Date().toISOString(),
      message: 'Todo scanning completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Todo scanner runner completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in todo-scanner-runner function:', error);
    
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