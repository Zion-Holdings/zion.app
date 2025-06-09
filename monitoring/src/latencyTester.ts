import axios, { AxiosError } from 'axios';

export interface Endpoint {
  name: string; // e.g., 'Django Ping'
  baseURL: string;
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'; // Default to GET
}

export interface EndpointTestResult {
  name: string;
  url: string;
  method: string;
  status?: number;
  latencyMs?: number;
  error?: string;
  timestamp: string;
}

export async function measureLatency(endpoints: Endpoint[]): Promise<EndpointTestResult[]> {
  const results: EndpointTestResult[] = [];

  for (const endpoint of endpoints) {
    const url = `${endpoint.baseURL}${endpoint.path}`;
    const method = endpoint.method || 'GET';
    const startTime = Date.now();
    const timestamp = new Date().toISOString();

    try {
      const response = await axios({
        method: method,
        url: url,
        timeout: 10000, // 10 second timeout
      });
      const endTime = Date.now();
      results.push({
        name: endpoint.name,
        url: url,
        method: method,
        status: response.status,
        latencyMs: endTime - startTime,
        timestamp: timestamp,
      });
    } catch (error) {
      const endTime = Date.now();
      const latencyMs = endTime - startTime;
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        results.push({
          name: endpoint.name,
          url: url,
          method: method,
          status: axiosError.response?.status,
          latencyMs: latencyMs,
          error: axiosError.message,
          timestamp: timestamp,
        });
      } else if (error instanceof Error) {
        results.push({
          name: endpoint.name,
          url: url,
          method: method,
          latencyMs: latencyMs,
          error: error.message,
          timestamp: timestamp,
        });
      } else {
        results.push({
          name: endpoint.name,
          url: url,
          method: method,
          latencyMs: latencyMs,
          error: 'Unknown error',
          timestamp: timestamp,
        });
      }
    }
  }
  return results;
}

// Example usage (will be moved to the main cron script later)
/*
async function main() {
  const exampleEndpoints: Endpoint[] = [
    { name: 'Django Ping', baseURL: process.env.DJANGO_API_BASE_URL || 'http://localhost:8000', path: '/api/ping/' },
    { name: 'Next.js Health', baseURL: process.env.NEXTJS_API_BASE_URL || 'http://localhost:3000', path: '/api/health' },
    { name: 'Custom Server Health', baseURL: process.env.CUSTOM_SERVER_BASE_URL || 'http://localhost:3001', path: '/healthz' },
    { name: 'NonExistent Service', baseURL: 'http://localhost:1234', path: '/nonexistent' },
  ];

  console.log('Starting latency tests...');
  const results = await measureLatency(exampleEndpoints);
  console.log('Latency Test Results:');
  results.forEach(result => {
    if (result.error) {
      console.error(
        `${result.name} (${result.url}) - ${result.method}: FAILED - Status: ${result.status || 'N/A'}, Latency: ${result.latencyMs}ms, Error: ${result.error}`
      );
    } else {
      console.log(
        `${result.name} (${result.url}) - ${result.method}: SUCCESS - Status: ${result.status}, Latency: ${result.latencyMs}ms`
      );
    }
  });
}

main().catch(console.error);
*/
