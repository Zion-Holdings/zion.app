import { measureLatency, Endpoint, EndpointTestResult } from './latencyTester';
import logger from './logger';
import { triggerAlerts } from './alerter'; // Added this import

// Define endpoints (base URLs should come from environment variables)
const endpoints: Endpoint[] = [
  // Django
  { name: 'Django Ping', baseURL: process.env.DJANGO_API_BASE_URL || 'http://localhost:8000', path: '/api/ping/' },
  { name: 'Django Governance Proposals', baseURL: process.env.DJANGO_API_BASE_URL || 'http://localhost:8000', path: '/api/governance/proposals/' },
  { name: 'Django Swagger', baseURL: process.env.DJANGO_API_BASE_URL || 'http://localhost:8000', path: '/swagger/' },
  // Next.js
  { name: 'Next.js Health', baseURL: process.env.NEXTJS_API_BASE_URL || 'http://localhost:3000', path: '/api/health' },
  { name: 'Next.js Marketplace Products', baseURL: process.env.NEXTJS_API_BASE_URL || 'http://localhost:3000', path: '/api/marketplace/products' },
  // Custom Server
  { name: 'Custom Server Health', baseURL: process.env.CUSTOM_SERVER_BASE_URL || 'http://localhost:3001', path: '/healthz' },
  { name: 'Custom Server Items', baseURL: process.env.CUSTOM_SERVER_BASE_URL || 'http://localhost:3001', path: '/items' },
];

export async function runMonitoring() {
  logger.info('Starting API latency monitoring run...');

  const results = await measureLatency(endpoints);

  // Process alerts
  for (const result of results) {
    // No 'await' here if we want alerts to be non-blocking for the overall monitoring cycle.
    // However, for logging clarity and ensuring restart attempts are logged within the same run,
    // 'await' might be preferred. Let's use await.
    await triggerAlerts(result);
  }

  const sortedResults = results.sort((a, b) => (b.latencyMs || 0) - (a.latencyMs || 0));
  const slowestResponses = sortedResults.slice(0, 5);

  if (slowestResponses.length > 0) {
    logger.info('Top 5 slowest responses:', { slowestResponses });
  } else {
    logger.info('No responses measured or all responses were errors before latency could be determined.');
  }

  results.forEach(result => {
    if (result.error) {
      logger.error('Endpoint test failed:', result);
    } else {
      // logger.debug('Endpoint test succeeded:', result);
    }
  });

  logger.info('API latency monitoring run finished.');
}

// Removed runMonitoring().catch(...) and process.exit(1) from here
