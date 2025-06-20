"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const logger_1 = __importDefault(require("./logger"));
const monitor_1 = require("./monitor"); // Import the exported function
logger_1.default.info(`Cron job process starting. Current working directory: ${process.cwd()}`);
logger_1.default.info(`Log files are expected at: ${require('path').join(__dirname, '..', 'logs', 'perf')}`);
logger_1.default.info('Performing initial monitoring run on startup...');
(0, monitor_1.runMonitoring)().catch(error => {
    logger_1.default.error('Error during initial monitoring run:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
    });
    // Optionally exit if initial run fails, or let it continue to schedule
    // process.exit(1);
});
// Schedule the monitoring task to run at the start of every hour
node_cron_1.default.schedule('0 * * * *', () => {
    // cron.schedule('*/1 * * * *', () => { // For testing: every minute
    logger_1.default.info('Cron job triggered: Running hourly API latency monitoring...');
    (0, monitor_1.runMonitoring)().catch(error => {
        logger_1.default.error('Error during scheduled monitoring run:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
        });
    });
});
logger_1.default.info('Cron job scheduled to run hourly at 0 minutes past the hour.');
logger_1.default.info("Monitoring service started. Waiting for scheduled jobs.");
