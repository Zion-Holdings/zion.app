exports.handler = async (event, context) => {
  try {
    console.log('broken-image-scanner function triggered');
    
    // Simulate broken image scanning
    const scanData = {
      totalImages: Math.floor(Math.random() * 500) + 200,
      workingImages: Math.floor(Math.random() * 450) + 180,
      brokenImages: Math.floor(Math.random() * 50) + 20,
      fixedImages: Math.floor(Math.random() * 30) + 10,
      lastScanned: new Date().toISOString(),
      scanned: true
    };
    
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 75));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'broken-image-scanner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'broken-image-scanner',
        scanData,
        scanned: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in broken-image-scanner:', error);
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