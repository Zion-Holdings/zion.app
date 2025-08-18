exports.handler = async function(event, context) {
  try {
    console.log('repo_knowledge_graph_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Repo knowledge graph runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'repo_knowledge_graph_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in repo_knowledge_graph_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};