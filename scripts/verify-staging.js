#!/usr/bin/env node

/**
 * Staging Verification Script
 * Tests critical routes and functionality before production deployment
 */

const https = require('https');
const http = require('http');

const STAGING_URL = process.env.STAGING_URL || 'https://staging-app.ziontechgroup.com';
const TIMEOUT = 10000; // 10 seconds

// Critical routes to test
const CRITICAL_ROUTES = [
  '/',
  '/auth/login',
  '/marketplace',
  '/api/health',
  '/about'
];

// Error patterns that indicate issues
const ERROR_PATTERNS = [
  'Something went wrong',
  'Error: ',
  'Cannot read',
  'undefined is not',
  'Supabase URL is required',
  'Configuration error'
];

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
      const urlObj = new URL(url);
      const client = urlObj.protocol === 'https:' ? https : http;
      
      const requestOptions = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + urlObj.search,
        method: options.method || 'GET',
        timeout: TIMEOUT,
        headers: {
          'User-Agent': 'StagingVerifier/1.0',
          'Accept': 'text/html,application/json,*/*',
          ...options.headers
        }
      };

      const req = client.request(requestOptions, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: data,
            url: url
          });
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
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
    console.log(`Testing ${route}...`);

    try {
      const response = await this.makeRequest(url);
      
      // Check status code
      if (response.statusCode >= 400) {
        throw new Error(`HTTP ${response.statusCode} error`);
      }

      // Check for error patterns in response
      for (const pattern of ERROR_PATTERNS) {
        if (response.data.includes(pattern)) {
          throw new Error(`Found error pattern: "${pattern}"`);
        }
      }

      console.log(`  ✅ ${route} - OK`);
      this.results.passed++;
      return true;

    } catch (error) {
      console.log(`  ❌ ${route} - FAILED: ${error.message}`);
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
    console.log(`🚀 Starting staging verification for: ${STAGING_URL}\n`);
    
    // Test all critical routes
    console.log('Testing critical routes...');
    for (const route of CRITICAL_ROUTES) {
      await this.testRoute(route);
    }

    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log('STAGING VERIFICATION SUMMARY');
    console.log('='.repeat(50));
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    
    if (this.results.errors.length > 0) {
      console.log('\nErrors:');
      this.results.errors.forEach(error => {
        console.log(`  • ${error.route}: ${error.error}`);
      });
    }

    const status = this.results.failed === 0 ? 'PASSED' : 'FAILED';
    const emoji = status === 'PASSED' ? '🎉' : '💥';
    console.log(`\n${emoji} Overall Status: ${status}\n`);

    // Exit with appropriate code
    process.exit(this.results.failed > 0 ? 1 : 0);
  }
}

// Run the verification
if (require.main === module) {
  const verifier = new StagingVerifier();
  verifier.run().catch(error => {
    console.error('Verification script failed:', error);
    process.exit(1);
  });
}

module.exports = StagingVerifier; 