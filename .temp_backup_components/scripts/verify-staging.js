
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


/**
 * Staging Verification Script
 * Tests critical routes and functionality before production deployment
 */

const https = require('https');const http = require('http')
const STAGING_URL = process.env.STAGING_URL || https://staging-app.ziontechgroup.com';const TIMEOUT = 10000; // 10 seconds

// Critical routes to test
const CRITICAL_ROUTES = [
  /',/auth/login',/marketplace',/api/health',/about''];

// Error patterns that indicate issues
const ERROR_PATTERNS = [
  Something went wrong',Error: ,Cannot read',undefined is not',Supabase URL is required',Configuration error'']
class StagingVerifier {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      errors: []
    };
  }

  async makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url)
const client = urlObj.protocol === https:' ? https : http;      
      const requestOptions = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + urlObj.search,
        method: options.method || GET',        timeout: TIMEOUT,
        headers: {
          User-Agent': StagingVerifier/1.0',Accept': text/html,application/json,*/*',          ...options.headers
        }
      }
const req = client.request(requestOptions, (res) => {
        let data = ;        res.on('data', chunk => data += chunk);        res.on('end', () => {'          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: data,
            url: url
          });
        });
      });

      req.on('error', reject);      req.on('timeout', () => {'        req.destroy();
        reject(new Error(`Request timeout for ${url}`));
      });

      if (options.body) {
        req.write(options.body);
      }
      req.end();
    });
  }

  async testRoute(route) {
    const url = `${STAGING_URL}${route}`;
    // logger.warn(`Testing ${route}...`); // Removed

    try {
      const response = await this.makeRequest(url);
      
      // Check status code
      if (response.statusCode >= 400) {
        throw new Error(`HTTP ${response.statusCode} error`);
      }

      // Check for error patterns in response
      for (const pattern of ERROR_PATTERNS) {
        if (response.data.includes(pattern)) {
          throw new Error(`Found error pattern: "${pattern}"`);"        }"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      }

      // logger.warn(`  ✅ ${route} - OK`); // Removed
      this.results.passed++;
      return true;

    } catch {
      // logger.warn(`  ❌ ${route} - FAILED: ${error.message}`); // Removed
      this.results.failed++;
      this.results.errors.push({
        route,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async run() {
    // logger.warn(`🚀 Starting staging verification for: ${STAGING_URL}\n`); // Removed
    
    // Test all critical routes
    // logger.warn('Testing critical routes...'); // Removed'    for (const route of CRITICAL_ROUTES) {
      await this.testRoute(route);
    }

    // Print summary
    // logger.warn('\n' + ='.repeat(50)); // Removed'    // logger.warn('STAGING VERIFICATION SUMMARY'); // Removed'    // logger.warn('='.repeat(50)); // Removed'    // logger.warn(`✅ Passed: ${this.results.passed}`); // Removed
    // logger.warn(`❌ Failed: ${this.results.failed}`); // Removed
    
    if (this.results.errors.length > 0) {
      // logger.warn('\nErrors:'); // Removed'      this.results.errors.forEach(error => {
        // logger.warn(`  • ${error.route}: ${error.error}`); // Removed
      });
    }

    const status = this.results.failed === 0 ? PASSED' : FAILED';    const _emoji = status === PASSED' ? 🎉' : 💥';    // logger.warn(`\n${_emoji} Overall Status: ${status}\n`); // Removed

    // Exit with appropriate code
    process.exit(this.results.failed > 0 ? 1 : 0);
  }
}

// Run the verification
if (require.main === module) {
  const verifier = new StagingVerifier();
  verifier.run().catch(error => {
    // logger.error('Verification script failed:', error); // Removed'    process.exit(1);
  });
}

module.exports = StagingVerifier; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

