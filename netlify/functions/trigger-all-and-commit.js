exports.handler = async function(event, context, callback) {
  try {
    console.log('trigger-all-and-commit function triggered');
    
    // Trigger all and commit simulation
    const result = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Trigger all and commit executed successfully',
        timestamp: new Date().toISOString(),
        function: 'trigger-all-and-commit',
        source: event.source || 'unknown',
        trigger: {
          status: 'active',
          functionsTriggered: 0,
          lastTrigger: new Date().toISOString()
        }
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in trigger-all-and-commit:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'trigger-all-and-commit'
      })
    };
  }
};