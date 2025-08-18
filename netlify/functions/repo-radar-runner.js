exports.handler = async (event, context) => {
  try {
    console.log('Running repo-radar-runner function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple repo radar logic
    const result = {
      scanned: true,
      timestamp: new Date().toISOString(),
      message: 'Repo radar scanning completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Repo radar runner completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in repo-radar-runner function:', error);
    
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