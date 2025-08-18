exports.handler = async (event, context) => {
  try {
    console.log('Running fast-orchestrator function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple fast orchestration logic
    const result = {
      orchestrated: true,
      timestamp: new Date().toISOString(),
      message: 'Fast orchestration completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Fast orchestrator completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in fast-orchestrator function:', error);
    
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