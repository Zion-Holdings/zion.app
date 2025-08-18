exports.handler = async function(event, context) {
  try {
    console.log('todo_summary_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Todo summary runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'todo_summary_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in todo_summary_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};