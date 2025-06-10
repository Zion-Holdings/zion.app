import { exec } from 'child_process';
import axios from 'axios';
import logger from './logger';
import { EndpointTestResult } from './latencyTester';

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
  // IMPORTANT: This function's ability to restart services depends on the deployment strategy.
  // For K8s-managed services like 'nextjs-service', a direct restart command from here is usually not appropriate.
  // Kubernetes handles restarts via liveness probes.
  // This function might be relevant for other services managed by PM2 on the same host as this monitor.

  if (serviceName === 'nextjs-service') {
    const message = `High latency detected for '${serviceName}'. This service is Kubernetes managed. Kubernetes liveness probes should handle restarts if the app becomes unresponsive. Manual investigation for persistent high latency is advised.`;
    logger.info(message);
    // Optionally, send a specific alert/event indicating K8s service needs attention for latency.
    // For now, we just log and don't attempt a PM2 restart.
    return Promise.resolve(); // Indicate successful handling (no action needed here)
  }

  // If serviceName is not 'nextjs-service', proceed with existing PM2 logic (if any other services use it)
  // Ensure this part is relevant for your environment.
  const command = `pm2 restart ${serviceName}`;
  logger.info(`Attempting to restart (PM2) service: '${serviceName}' with command: '${command}' (This should only apply to non-K8s services).`);

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        logger.error(`Failed to restart (PM2) service '${serviceName}'. Error: ${error.message}`, { stdout, stderr });
        reject(error);
        return;
      }
      if (stderr) {
        logger.warn(`Service (PM2) restart for '${serviceName}' produced stderr: ${stderr}`, { stdout });
      }
      logger.info(`Service (PM2) '${serviceName}' restart command executed. Output: ${stdout}`);
      resolve();
    });
  });
}

async function sendWebhookNotification(result: EndpointTestResult, messageSuffix: string = "Attempting service restart... (if applicable)"): Promise<void> {
  if (!ALERT_WEBHOOK_URL) {
    logger.warn('ALERT_WEBHOOK_URL is not set. Skipping webhook notification.');
    return;
  }

  const payload = {
    text: `🚨 High Latency Alert 🚨
Endpoint: \`${result.name}\` (\`${result.url}\`)
Method: \`${result.method}\`
Latency: \`${result.latencyMs}ms\` (Threshold: \`${ALERT_THRESHOLD_MS}ms\`)
Status: \`${result.status}\`
Timestamp: \`${result.timestamp}\`
${messageSuffix}`, // Use the dynamic message suffix
    // Add more structured data if your webhook receiver supports it (e.g., Slack blocks)
  };

  try {
    logger.info(`Sending webhook notification for ${result.name} to ${ALERT_WEBHOOK_URL}`);
    await axios.post(ALERT_WEBHOOK_URL, payload, { timeout: 10000 });
    logger.info(`Webhook notification sent successfully for ${result.name}.`);
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      if (error.response) {
        logger.error('Webhook notification failed with response:', {
            status: error.response.status, data: error.response.data
        });
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    logger.error(`Failed to send webhook notification for ${result.name}. Error: ${errorMessage}`);
  }
}

export async function triggerAlerts(result: EndpointTestResult): Promise<void> {
  if (result.error || !result.latencyMs) {
    // Don't alert for endpoints that had errors, only for high latency on success
    return;
  }

  if (result.latencyMs > ALERT_THRESHOLD_MS) {
    logger.warn(`High latency detected for ${result.name} (${result.url}): ${result.latencyMs}ms. Triggering alerts.`);

    const serviceName = getServiceName(result.name);
    let webhookMessageSuffix: string;

    if (serviceName === 'nextjs-service') {
      webhookMessageSuffix = "Service is K8s managed. Kubernetes handles restarts. Manual investigation advised for persistent high latency.";
      await sendWebhookNotification(result, webhookMessageSuffix);
      // No automatic restart for nextjs-service from here
      logger.info(`High latency alert for K8s managed service '${serviceName}'. No automatic restart attempted from monitor.`);
    } else if (serviceName) {
      webhookMessageSuffix = `Attempting PM2 service restart for ${serviceName}...`;
      await sendWebhookNotification(result, webhookMessageSuffix);
      try {
        await restartService(serviceName); // This will now only run for non-nextjs-service
        logger.info(`PM2 Service restart process initiated for ${serviceName} due to high latency on ${result.name}.`);
      } catch (restartError) {
        logger.error(`PM2 Service restart attempt failed for ${serviceName}.`, restartError);
        // Optionally send another webhook if restart fails critically
      }
    } else {
      webhookMessageSuffix = "No specific service restart action defined for this endpoint.";
      await sendWebhookNotification(result, webhookMessageSuffix);
      logger.warn(`No service mapping found for endpoint '${result.name}'. Cannot attempt restart.`);
    }
  }
}
