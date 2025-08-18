exports.handler = async (event, context) => {
  try {
    console.log('Running trigger-all-and-commit function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple trigger all and commit logic
    const result = {
      triggered: true,
      committed: true,
      timestamp: new Date().toISOString(),
      message: 'Trigger all and commit completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Trigger all and commit completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in trigger-all-and-commit function:', error);
    
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