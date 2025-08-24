export default async function handler(req, res) {
  try {
    // Test critical external services
    const healthChecks = await Promise.allSettled([
      // Add your critical service checks here
      // Example: fetch('https://api.example.com/health')
    ]);
    
    const isHealthy = healthChecks.every(check => check.status === 'fulfilled');
    
    res.status(isHealthy ? 200 : 503).json({
      status: isHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      checks: healthChecks,
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
      uptime: process.uptime()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}