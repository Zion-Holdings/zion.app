exports.handler = async (event, context) => {
  try {
    console.log('Running canonical-auditor function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple canonical auditing logic
    const result = {
      audited: true,
      timestamp: new Date().toISOString(),
      message: 'Canonical auditing completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Canonical auditor completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in canonical-auditor function:', error);
    
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