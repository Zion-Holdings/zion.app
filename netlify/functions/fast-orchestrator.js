exports.handler = async (event, context) => {
  try {
    console.log('fast-orchestrator function triggered');
    
    // Simulate some orchestration work
    const startTime = Date.now();
    
    // Simulate async operations
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const duration = Date.now() - startTime;
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'fast-orchestrator function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'fast-orchestrator',
        duration: `${duration}ms`,
        orchestrated: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in fast-orchestrator:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};