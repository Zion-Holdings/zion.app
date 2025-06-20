import { measureLatency, Endpoint, EndpointTestResult } from './latencyTester';
import logger from './logger';
import { triggerAlerts } from './alerter'; // Added this import
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
  endpoints: Array<{
    name: string;
    baseURLKey: string;
    defaultBaseURL: string;
    path: string;
    serviceName: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS';
    body?: any;
    headers?: Record<string, string>;
  }>;
}

// Function to read and parse the configuration file
function loadConfig(): MonitoringConfig {
  const configPath = path.join(__dirname, '../../monitoring-config.json'); // Adjust path as necessary
  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configFile) as MonitoringConfig;
  } catch (error) {
    logger.error('Error reading or parsing monitoring-config.json:', error);
    // Return a default or minimal configuration to prevent crashing
    return {
      alertThresholdMs: 1000, // Default threshold
      consecutiveChecksLimit: 3, // Default limit
      endpoints: [], // No endpoints if config fails
    };
  }
}

const config = loadConfig();
// const checkHistory: Map<string, EndpointTestResult[]> = new Map(); // Removed checkHistory

export async function runMonitoring() {
  logger.info('Starting API latency monitoring run...');

  const resolvedEndpoints: Endpoint[] = config.endpoints.map(e => ({
    name: e.name,
    baseURL: process.env[e.baseURLKey] || e.defaultBaseURL,
    path: e.path,
    serviceName: e.serviceName,
    method: e.method,
    body: e.body,
    headers: e.headers,
  }));

  // const results = await measureLatency(endpoints); // Original line
  const results: EndpointTestResult[] = await measureLatency(resolvedEndpoints); // Use resolved endpoints


  // Process alerts
  for (const result of results) {
    // No 'await' here if we want alerts to be non-blocking for the overall monitoring cycle.
    // However, for logging clarity and ensuring restart attempts are logged within the same run,
    // 'await' might be preferred. Let's use await.
    await triggerAlerts(result); // Simplified call to triggerAlerts
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
