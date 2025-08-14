/**
 * Network utilities with retry logic and error handling
 * for use during build processes and runtime
 */

/**
 * Fetch with retry logic
 * @param {string} url - URL to fetch
 * @param {Object} options - Fetch options
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} baseDelay - Base delay between retries in ms
 * @returns {Promise<Response>}
 */
export const fetchWithRetry = async (url, options = {}, maxRetries = 3, baseDelay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed for ${url}:`, error.message);
      
      if (i === maxRetries - 1) {
        throw new Error(`Failed to fetch ${url} after ${maxRetries} attempts: ${error.message}`);
      }
      
      // Exponential backoff with jitter
      const delay = baseDelay * Math.pow(2, i) + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

/**
 * Health check for external services
 * @param {Array} services - Array of service URLs to check
 * @returns {Promise<Object>} Health check results
 */
export const checkServicesHealth = async (services = []) => {
  const results = await Promise.allSettled(
    services.map(async (service) => {
      try {
        const response = await fetchWithRetry(service, {}, 2, 500);
        return { service, status: 'healthy', response: response.status };
      } catch (error) {
        return { service, status: 'unhealthy', error: error.message };
      }
    })
  );

  return {
    timestamp: new Date().toISOString(),
    total: services.length,
    healthy: results.filter(r => r.status === 'fulfilled' && r.value.status === 'healthy').length,
    unhealthy: results.filter(r => r.status === 'fulfilled' && r.value.status === 'unhealthy').length,
    failed: results.filter(r => r.status === 'rejected').length,
    results: results.map(r => r.status === 'fulfilled' ? r.value : { service: 'unknown', status: 'failed', error: r.reason?.message })
  };
};

/**
 * Build-time network validation
 * @param {Array} criticalEndpoints - Critical endpoints that must be available during build
 * @returns {Promise<boolean>} Whether all critical endpoints are available
 */
export const validateBuildTimeNetwork = async (criticalEndpoints = []) => {
  if (criticalEndpoints.length === 0) {
    console.log('✅ No critical endpoints to validate');
    return true;
  }

  console.log('🔍 Validating build-time network connectivity...');
  
  try {
    const health = await checkServicesHealth(criticalEndpoints);
    
    if (health.unhealthy > 0 || health.failed > 0) {
      console.warn('⚠️  Some critical endpoints are unavailable:');
      health.results
        .filter(r => r.status !== 'healthy')
        .forEach(r => console.warn(`  - ${r.service}: ${r.status} - ${r.error || 'Unknown error'}`));
      
      return false;
    }
    
    console.log('✅ All critical endpoints are available');
    return true;
  } catch (error) {
    console.error('❌ Network validation failed:', error.message);
    return false;
  }
};

/**
 * Graceful fetch wrapper for build processes
 * @param {string} url - URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Promise<Response|null>} Response or null if failed
 */
export const gracefulFetch = async (url, options = {}) => {
  try {
    return await fetchWithRetry(url, options, 2, 500);
  } catch (error) {
    console.warn(`⚠️  Failed to fetch ${url}: ${error.message}`);
    return null;
  }
};