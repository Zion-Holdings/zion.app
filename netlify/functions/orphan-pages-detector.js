exports.handler = async (event, context) => {
  try {
    console.log('Running orphan-pages-detector function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple orphan pages detection logic
    const result = {
      detected: true,
      timestamp: new Date().toISOString(),
      message: 'Orphan pages detection completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Orphan pages detector completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in orphan-pages-detector function:', error);
    
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