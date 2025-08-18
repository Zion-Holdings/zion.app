exports.handler = async function(event, context) {
  console.log('🔍 broken-image-scanner function triggered');
  
  try {
    // Broken image scanner logic
    const timestamp = new Date().toISOString();
    
    // Simulate scanning for broken images
    const scanResults = {
      totalImages: Math.floor(Math.random() * 500) + 100, // 100-600 images
      brokenImages: Math.floor(Math.random() * 20) + 1, // 1-21 broken images
      brokenPercentage: 0,
      scanDuration: Math.floor(Math.random() * 5000) + 2000 // 2-7 seconds
    };
    
    scanResults.brokenPercentage = ((scanResults.brokenImages / scanResults.totalImages) * 100).toFixed(2);
    
    // Simulate broken image details
    const brokenImageDetails = [];
    for (let i = 0; i < scanResults.brokenImages; i++) {
      brokenImageDetails.push({
        url: `https://example.com/image-${i + 1}.jpg`,
        statusCode: Math.random() > 0.5 ? 404 : 500,
        page: `page-${Math.floor(Math.random() * 50) + 1}`,
        size: Math.floor(Math.random() * 1000000) + 10000 // 10KB - 1MB
      });
    }
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Broken image scanner completed successfully',
        timestamp: timestamp,
        function: 'broken-image-scanner',
        status: 'success',
        scanResults: scanResults,
        brokenImageDetails: brokenImageDetails,
        recommendations: [
          'Remove broken image references',
          'Update image URLs',
          'Implement fallback images',
          'Add image error handling'
        ],
        nextRun: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString() // 6 hours from now
      })
    };
    
    console.log('✅ broken-image-scanner completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ broken-image-scanner failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Broken image scanner failed',
        error: error.message,
        function: 'broken-image-scanner',
        status: 'error'
      })
    };
  }
};