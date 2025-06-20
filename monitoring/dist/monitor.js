"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMonitoring = runMonitoring;
const latencyTester_1 = require("./latencyTester");
const logger_1 = __importDefault(require("./logger"));
const alerter_1 = require("./alerter"); // Added this import
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Function to read and parse the configuration file
function loadConfig() {
    const configPath = path.join(__dirname, '../../monitoring-config.json'); // Adjust path as necessary
    try {
        const configFile = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(configFile);
    }
    catch (error) {
        logger_1.default.error('Error reading or parsing monitoring-config.json:', error);
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
async function runMonitoring() {
    logger_1.default.info('Starting API latency monitoring run...');
    const resolvedEndpoints = config.endpoints.map(e => ({
        name: e.name,
        baseURL: process.env[e.baseURLKey] || e.defaultBaseURL,
        path: e.path,
        serviceName: e.serviceName,
        method: e.method,
        body: e.body,
        headers: e.headers,
    }));
    // const results = await measureLatency(endpoints); // Original line
    const results = await (0, latencyTester_1.measureLatency)(resolvedEndpoints); // Use resolved endpoints
    // Process alerts
    for (const result of results) {
        // No 'await' here if we want alerts to be non-blocking for the overall monitoring cycle.
        // However, for logging clarity and ensuring restart attempts are logged within the same run,
        // 'await' might be preferred. Let's use await.
        await (0, alerter_1.triggerAlerts)(result); // Simplified call to triggerAlerts
    }
    const sortedResults = results.sort((a, b) => (b.latencyMs || 0) - (a.latencyMs || 0));
    const slowestResponses = sortedResults.slice(0, 5);
    if (slowestResponses.length > 0) {
        logger_1.default.info('Top 5 slowest responses:', { slowestResponses });
    }
    else {
        logger_1.default.info('No responses measured or all responses were errors before latency could be determined.');
    }
    results.forEach(result => {
        if (result.error) {
            logger_1.default.error('Endpoint test failed:', result);
        }
        else {
            // logger.debug('Endpoint test succeeded:', result);
        }
    });
    logger_1.default.info('API latency monitoring run finished.');
}
// Removed runMonitoring().catch(...) and process.exit(1) from here
