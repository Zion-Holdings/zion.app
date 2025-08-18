exports.handler = async function(event, context) {
  try {
    console.log('dead_code_report function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Dead code report function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'dead_code_report'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in dead_code_report:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};