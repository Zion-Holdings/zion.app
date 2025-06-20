"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureLatency = measureLatency;
const axios_1 = __importDefault(require("axios"));
async function measureLatency(endpoints) {
    const results = [];
    for (const endpoint of endpoints) {
        const url = `${endpoint.baseURL}${endpoint.path}`;
        // Ensure method is a valid Axios Method or default to 'GET'
        const method = endpoint.method?.toUpperCase() || 'GET';
        const startTime = Date.now();
        const timestamp = new Date().toISOString();
        try {
            const response = await (0, axios_1.default)({
                method: method,
                url: url,
                data: endpoint.body, // Add body to request if provided
                headers: endpoint.headers, // Add headers to request if provided
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
                serviceName: endpoint.serviceName, // Pass serviceName
            });
        }
        catch (error) {
            const endTime = Date.now();
            const latencyMs = endTime - startTime;
            if (axios_1.default.isAxiosError(error)) {
                const axiosError = error;
                results.push({
                    name: endpoint.name,
                    url: url,
                    method: method,
                    status: axiosError.response?.status,
                    latencyMs: latencyMs,
                    error: axiosError.message,
                    timestamp: timestamp,
                    serviceName: endpoint.serviceName, // Pass serviceName
                });
            }
            else if (error instanceof Error) {
                results.push({
                    name: endpoint.name,
                    url: url,
                    method: method,
                    latencyMs: latencyMs,
                    error: error.message,
                    timestamp: timestamp,
                    serviceName: endpoint.serviceName, // Pass serviceName
                });
            }
            else {
                results.push({
                    name: endpoint.name,
                    url: url,
                    method: method,
                    latencyMs: latencyMs,
                    error: 'Unknown error',
                    timestamp: timestamp,
                    serviceName: endpoint.serviceName, // Pass serviceName
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
