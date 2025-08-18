const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log('🤖 netlify-auto-healer-runner function triggered');
    
    // Perform health checks
    const healthChecks = [];
    
    // Check 1: Functions directory exists and has functions
    try {
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      if (fs.existsSync(functionsDir)) {
        const functionFiles = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js'));
        healthChecks.push({
          check: 'functions-directory',
          status: 'healthy',
          details: `${functionFiles.length} functions found`,
          count: functionFiles.length
        });
      } else {
        healthChecks.push({
          check: 'functions-directory',
          status: 'unhealthy',
          details: 'Functions directory not found',
          action: 'create-functions-directory'
        });
      }
    } catch (error) {
      healthChecks.push({
        check: 'functions-directory',
        status: 'error',
        details: error.message,
        action: 'investigate-permissions'
      });
    }
    
    // Check 2: Logs directory exists and writable
    try {
      const logsDir = path.join(process.cwd(), 'automation', 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
        healthChecks.push({
          check: 'logs-directory',
          status: 'healed',
          details: 'Created logs directory',
          action: 'directory-created'
        });
      } else {
        // Test write access
        const testFile = path.join(logsDir, 'health-check-test.json');
        fs.writeFileSync(testFile, JSON.stringify({ test: true, timestamp: new Date().toISOString() }));
        fs.unlinkSync(testFile);
        healthChecks.push({
          check: 'logs-directory',
          status: 'healthy',
          details: 'Logs directory is writable'
        });
      }
    } catch (error) {
      healthChecks.push({
        check: 'logs-directory',
        status: 'unhealthy',
        details: error.message,
        action: 'fix-permissions'
      });
    }
    
    // Check 3: Manifest file exists and valid
    try {
      const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (manifest.functions && Array.isArray(manifest.functions)) {
          healthChecks.push({
            check: 'functions-manifest',
            status: 'healthy',
            details: `Manifest contains ${manifest.functions.length} functions`,
            count: manifest.functions.length
          });
        } else {
          healthChecks.push({
            check: 'functions-manifest',
            status: 'unhealthy',
            details: 'Invalid manifest format',
            action: 'regenerate-manifest'
          });
        }
      } else {
        healthChecks.push({
          check: 'functions-manifest',
          status: 'unhealthy',
          details: 'Manifest file not found',
          action: 'generate-manifest'
        });
      }
    } catch (error) {
      healthChecks.push({
        check: 'functions-manifest',
        status: 'error',
        details: error.message,
        action: 'investigate-manifest'
      });
    }
    
    // Calculate overall health status
    const healthyChecks = healthChecks.filter(c => c.status === 'healthy').length;
    const totalChecks = healthChecks.length;
    const overallHealth = healthyChecks === totalChecks ? 'healthy' : 'degraded';
    
    // Generate health report
    const healthReport = {
      timestamp: new Date().toISOString(),
      overallHealth: overallHealth,
      summary: {
        total: totalChecks,
        healthy: healthyChecks,
        unhealthy: healthChecks.filter(c => c.status === 'unhealthy').length,
        errors: healthChecks.filter(c => c.status === 'error').length,
        healed: healthChecks.filter(c => c.status === 'healed').length
      },
      checks: healthChecks
    };
    
    // Save health report
    try {
      const logsDir = path.join(process.cwd(), 'automation', 'logs');
      fs.mkdirSync(logsDir, { recursive: true });
      const reportPath = path.join(logsDir, 'health-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    } catch (error) {
      console.error('Failed to save health report:', error.message);
    }
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'netlify-auto-healer-runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'netlify-auto-healer-runner',
        healthReport: healthReport
      })
    };
    
    return result;
  } catch (error) {
    console.error('❌ netlify-auto-healer-runner function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'netlify-auto-healer-runner'
      })
    };
  }
};
