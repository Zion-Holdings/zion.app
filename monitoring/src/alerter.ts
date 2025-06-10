import { exec } from 'child_process';
import axios from 'axios';
import logger from './logger';
import { EndpointTestResult } from './latencyTester';

export interface PatchedPackageInfo {
  name: string;
  version: string;
  previousVersion?: string; // Optional, if available
}

export interface TestStatusInfo {
  passed: number;
  failed: number;
  total: number;
  coverage: number; // Percentage
}

export interface NotificationPayload {
  slowEndpoints?: EndpointTestResult[]; // Reuse existing EndpointTestResult
  patchedPackages?: PatchedPackageInfo[];
  testStatus?: TestStatusInfo;
  commitLink?: string;
  customMessage?: string; // For general messages or errors
}

const ALERT_THRESHOLD_MS = 500;
const ALERT_WEBHOOK_URL = process.env.ALERT_WEBHOOK_URL;

// Basic mapping from endpoint name to a hypothetical service identifier
// This will likely need to be more sophisticated or configurable
function getServiceName(endpointName: string): string | null {
  if (endpointName.toLowerCase().includes('django')) return 'django-service';
  if (endpointName.toLowerCase().includes('next.js')) return 'nextjs-service';
  if (endpointName.toLowerCase().includes('custom server')) return 'custom-server-service';
  // Add more specific mappings as needed
  // e.g., 'Next.js Marketplace' -> 'marketplace-next-app'
  return null;
}

async function restartService(serviceName: string): Promise<void> {
  // IMPORTANT: This is a placeholder. Actual commands depend on deployment (PM2, Docker, etc.)
  // We'll try a PM2 restart command as a common example.
  const command = `pm2 restart ${serviceName}`;
  logger.info(`Attempting to restart service: '${serviceName}' with command: '${command}'`);

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        logger.error(`Failed to restart service '${serviceName}'. Error: ${error.message}`, { stdout, stderr });
        reject(error);
        return;
      }
      if (stderr) {
        logger.warn(`Service restart for '${serviceName}' produced stderr: ${stderr}`, { stdout });
        // Still resolve if stderr is present but no actual error code, as some tools output to stderr for info
      }
      logger.info(`Service '${serviceName}' restart command executed. Output: ${stdout}`);
      resolve();
    });
  });
}

async function sendWebhookNotification(payload: NotificationPayload): Promise<void> {
  if (!ALERT_WEBHOOK_URL) {
    logger.warn('ALERT_WEBHOOK_URL is not set. Skipping notification.');
    return;
  }

  let messageParts: string[] = [];

  if (payload.customMessage) {
    messageParts.push(payload.customMessage);
  }

  if (payload.slowEndpoints && payload.slowEndpoints.length > 0) {
    payload.slowEndpoints.forEach(result => {
      messageParts.push(
        `🚨 *High Latency Alert* 🚨
Endpoint: \`${result.name}\` (\`${result.url}\`)
Method: \`${result.method}\`
Latency: \`${result.latencyMs}ms\` (Threshold: \`${ALERT_THRESHOLD_MS}ms\`)
Status: \`${result.status}\`
Timestamp: \`${result.timestamp}\``
      );
    });
    // Add a note about service restart if slowEndpoints are reported
    messageParts.push("Attempting service restart for affected services... (if applicable)");
  }

  if (payload.patchedPackages && payload.patchedPackages.length > 0) {
    messageParts.push("*Updated Packages:*");
    payload.patchedPackages.forEach(pkg => {
      let pkgStr = `  - ${pkg.name} (${pkg.version}`;
      if (pkg.previousVersion) {
        pkgStr += `, previously ${pkg.previousVersion}`;
      }
      pkgStr += ")";
      messageParts.push(pkgStr);
    });
  }

  if (payload.testStatus) {
    messageParts.push(
      `*Test Status:*
Tests: ${payload.testStatus.passed}/${payload.testStatus.total} passed
Coverage: ${payload.testStatus.coverage}%`
    );
  }

  if (payload.commitLink) {
    messageParts.push(`Commit: ${payload.commitLink}`);
  }

  if (messageParts.length === 0) {
    logger.warn("No information to send in notification. Skipping.");
    return;
  }

  const formattedMessageString = messageParts.join('\n\n');
  const webhookPayload = { text: formattedMessageString };

  try {
    logger.info(`Sending notification to ${ALERT_WEBHOOK_URL}`);
    await axios.post(ALERT_WEBHOOK_URL, webhookPayload, { timeout: 10000 });
    logger.info(`Notification sent successfully.`);
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      if (error.response) {
        logger.error('Notification failed with response:', {
            status: error.response.status, data: error.response.data
        });
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    logger.error(`Failed to send notification. Error: ${errorMessage}`);
  }
}

export async function triggerAlerts(result: EndpointTestResult): Promise<void> {
  if (result.error || !result.latencyMs) {
    // Don't alert for endpoints that had errors, only for high latency on success
    return;
  }

  if (result.latencyMs > ALERT_THRESHOLD_MS) {
    logger.warn(`High latency detected for ${result.name} (${result.url}): ${result.latencyMs}ms. Triggering alerts.`);

    // 1. Send Webhook Notification (send this first, so team is aware before/during restart)
    await sendWebhookNotification({ slowEndpoints: [result] });

    // 2. Attempt to Restart Service
    const serviceName = getServiceName(result.name);
    if (serviceName) {
      try {
        await restartService(serviceName);
        logger.info(`Service restart process initiated for ${serviceName} due to high latency on ${result.name}.`);
      } catch (restartError) {
        logger.error(`Service restart attempt failed for ${serviceName}.`, restartError);
        // Optionally send another webhook if restart fails critically
      }
    } else {
      logger.warn(`No service mapping found for endpoint '${result.name}'. Cannot attempt restart.`);
    }
  }
}
