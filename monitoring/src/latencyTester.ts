import https from 'https';
import logger from './logger';

interface LatencyResult {
  url: string;
  responseTime: number;
  success: boolean;
  error?: string;
}

class LatencyTester {
  private endpoints = [
    'https://api.github.com',
    'https://jsonplaceholder.typicode.com',
    'https://httpbin.org/status/200'
  ];

  async testEndpoint(url: string): Promise<LatencyResult> {
    const startTime = Date.now();
    
    return new Promise((resolve) => {
      const request = https.get(url, (response) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        resolve({
          url,
          responseTime,
          success: response.statusCode === 200,
          error: response.statusCode !== 200 ? `HTTP ${response.statusCode}` : undefined
        });
      });

      request.on('error', (error) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        resolve({
          url,
          responseTime,
          success: false,
          error: error.message
        });
      });

      request.setTimeout(10000, () => {
        request.destroy();
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        resolve({
          url,
          responseTime,
          success: false,
          error: 'Timeout after 10 seconds'
        });
      });
    });
  }

  async runLatencyTests(): Promise<LatencyResult[]> {
    logger.info('Starting latency tests for monitoring endpoints');
    
    const results = await Promise.all(
      this.endpoints.map(endpoint => this.testEndpoint(endpoint))
    );

    logger.info('Latency Test Results:', {
      results: results.map(r => ({
        url: r.url,
        responseTime: r.responseTime,
        success: r.success,
        error: r.error
      }))
    });

    // Log any failed tests as warnings
    results.forEach(result => {
      if (!result.success) {
        logger.warn('Latency test failed', {
          url: result.url,
          responseTime: result.responseTime,
          error: result.error
        });
      } else {
        logger.info('Latency test successful', {
          url: result.url,
          responseTime: result.responseTime
        });
      }
    });

    return results;
  }
}

export default LatencyTester;

async function main() {
  const tester = new LatencyTester();
  try {
    await tester.runLatencyTests();
  } catch (error) {
    logger.error('Failed to run latency tests:', error);
  }
}

if (require.main === module) {
  main().catch(error => logger.error('Latency test execution failed:', error));
}
