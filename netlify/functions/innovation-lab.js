exports.handler = async (event, context) => {
  try {
    console.log('Running innovation-lab function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple innovation lab logic
    const result = {
      innovated: true,
      timestamp: new Date().toISOString(),
      message: 'Innovation lab completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Innovation lab completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in innovation-lab function:', error);
    
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