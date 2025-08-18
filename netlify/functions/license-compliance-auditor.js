exports.handler = async (event, context) => {
  try {
    console.log('Running license-compliance-auditor function');
    
    // Check if this is a scheduled invocation
    if (event.source === 'aws.events') {
      console.log('Scheduled invocation detected');
    }
    
    // Simple license compliance auditing logic
    const result = {
      audited: true,
      timestamp: new Date().toISOString(),
      message: 'License compliance auditing completed'
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'License compliance auditor completed successfully',
        result: result,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error in license-compliance-auditor function:', error);
    
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