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
exports.triggerAlerts = triggerAlerts;
const child_process_1 = require("child_process");
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("./logger"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Function to read and parse the configuration file for alert thresholds
function loadAlertConfig() {
    const configPath = path.join(__dirname, '../../monitoring-config.json'); // Adjust path as necessary
    try {
        const configFile = fs.readFileSync(configPath, 'utf-8');
        const parsedConfig = JSON.parse(configFile);
        return {
            alertThresholdMs: parsedConfig.alertThresholdMs,
            consecutiveChecksLimit: parsedConfig.consecutiveChecksLimit,
        };
    }
    catch (error) {
        logger_1.default.error('Error reading or parsing monitoring-config.json in alerter.ts:', error);
        // Return default values if config loading fails
        return {
            alertThresholdMs: 1000, // Default threshold
            consecutiveChecksLimit: 3, // Default limit
        };
    }
}
const { alertThresholdMs: ALERT_THRESHOLD_MS, consecutiveChecksLimit: CONSECUTIVE_CHECKS_LIMIT } = loadAlertConfig();
const ALERT_WEBHOOK_URL = process.env.ALERT_WEBHOOK_URL;
// Map to store consecutive high latency counts for each endpoint
const alertConsecutiveCounts = new Map();
// sendWebhookNotification remains unchanged from the previous version
async function sendWebhookNotification(result, messageSuffix = "Attempting service remediation... (if applicable)") {
    if (!ALERT_WEBHOOK_URL) {
        logger_1.default.warn('ALERT_WEBHOOK_URL is not set. Skipping webhook notification.');
        return;
    }
    // Ensure serviceName is included in the webhook if available
    const serviceNameText = result.serviceName ? `\nService: \`${result.serviceName}\`` : "";
    const payload = {
        text: `🚨 High Latency Alert 🚨
Endpoint: \`${result.name}\` (\`${result.url}\`)
Method: \`${result.method}\`
Latency: \`${result.latencyMs}ms\` (Threshold: \`${ALERT_THRESHOLD_MS}ms\`)
Status: \`${result.status}\`
Timestamp: \`${result.timestamp}\`${serviceNameText}
${messageSuffix}`, // Use the dynamic message suffix
        // Add more structured data if your webhook receiver supports it (e.g., Slack blocks)
    };
    try {
        logger_1.default.info(`Sending webhook notification for ${result.name} (Service: ${result.serviceName || 'N/A'}) to ${ALERT_WEBHOOK_URL}`);
        await axios_1.default.post(ALERT_WEBHOOK_URL, payload, { timeout: 10000 });
        logger_1.default.info(`Webhook notification sent successfully for ${result.name} (Service: ${result.serviceName || 'N/A'}).`);
    }
    catch (error) {
        let errorMessage = 'Unknown error';
        if (axios_1.default.isAxiosError(error)) {
            errorMessage = error.message;
            if (error.response) {
                logger_1.default.error('Webhook notification failed with response:', {
                    status: error.response.status, data: error.response.data
                });
            }
        }
        else if (error instanceof Error) {
            errorMessage = error.message;
        }
        logger_1.default.error(`Failed to send webhook notification for ${result.name}. Error: ${errorMessage}`);
    }
}
async function triggerAlerts(result) {
    // If the test resulted in an error or latency couldn't be measured, reset consecutive count and do nothing.
    if (result.error || typeof result.latencyMs === 'undefined') {
        logger_1.default.debug(`Test for ${result.name} resulted in error or no latency. Resetting consecutive count.`);
        alertConsecutiveCounts.set(result.name, 0);
        return;
    }
    if (result.latencyMs > ALERT_THRESHOLD_MS) {
        const currentCount = (alertConsecutiveCounts.get(result.name) || 0) + 1;
        alertConsecutiveCounts.set(result.name, currentCount);
        if (currentCount >= CONSECUTIVE_CHECKS_LIMIT) {
            logger_1.default.warn(`High latency ALERT for ${result.name} (${result.url}): ${result.latencyMs}ms. Consecutive count: ${currentCount}/${CONSECUTIVE_CHECKS_LIMIT}. Threshold met.`);
            const serviceName = result.serviceName;
            let webhookMessageSuffix = "Attempting service remediation..."; // Default suffix
            if (serviceName) {
                // Remediation will be attempted
                logger_1.default.info(`High latency alert for ${result.name}. ${webhookMessageSuffix}`);
                await sendWebhookNotification(result, webhookMessageSuffix);
                // Construct path to the remediation script
                const remediationScriptPath = path.join(__dirname, '..', 'remediate.sh');
                // Ensure arguments are quoted to handle spaces or special characters
                const command = `bash "${remediationScriptPath}" "${serviceName}" "${result.url}" "${result.latencyMs || 0}"`;
                logger_1.default.info(`Attempting to execute remediation script for ${serviceName}: ${command}`);
                (0, child_process_1.exec)(command, (error, stdout, stderr) => {
                    if (error) {
                        logger_1.default.error(`Remediation script error for ${serviceName} ('${result.name}'): ${error.message}`, { command, stdout, stderr });
                        // Optionally send another webhook if remediation script fails
                        return;
                    }
                    if (stderr) {
                        logger_1.default.warn(`Remediation script for ${serviceName} ('${result.name}') produced stderr: ${stderr}`, { command, stdout });
                    }
                    logger_1.default.info(`Remediation script for ${serviceName} ('${result.name}') executed. Output: ${stdout}`);
                });
            }
            else {
                // No serviceName, so no remediation script to call.
                webhookMessageSuffix = "No specific serviceName defined for remediation.";
                logger_1.default.warn(`High latency alert for ${result.name}. ${webhookMessageSuffix} No remediation attempted.`);
                await sendWebhookNotification(result, webhookMessageSuffix);
            }
            // Reset count after alert and remediation attempt (or decision not to attempt)
            alertConsecutiveCounts.set(result.name, 0);
        }
        else {
            logger_1.default.warn(`High latency detected for ${result.name} (${result.url}): ${result.latencyMs}ms. Consecutive count: ${currentCount}/${CONSECUTIVE_CHECKS_LIMIT}. No alert triggered yet.`);
        }
    }
    else {
        // Latency is fine, reset consecutive count for this endpoint.
        if (alertConsecutiveCounts.get(result.name) !== 0) { // Only log if it was previously not 0
            logger_1.default.info(`Latency for ${result.name} is normal (${result.latencyMs}ms). Resetting consecutive count.`);
        }
        alertConsecutiveCounts.set(result.name, 0);
    }
}
