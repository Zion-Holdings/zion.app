import { sendWebhookNotification, NotificationPayload } from './alerter';
import logger from './logger'; // Assuming logger is configured and accessible

async function main() {
  const payloadArg = process.argv[2];

  if (!payloadArg) {
    logger.error('CLI Error: Payload argument is missing.');
    console.error('CLI Error: Payload argument is missing.'); // Also to stderr for visibility if logger fails
    process.exit(1);
  }

  try {
    const payload: NotificationPayload = JSON.parse(payloadArg);
    logger.info('CLI: Attempting to send notification with payload:', payload);
    await sendWebhookNotification(payload);
    logger.info('CLI: Notification sent successfully.');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('CLI Error: Failed to parse payload or send notification:', { error: errorMessage, stack: error instanceof Error ? error.stack : undefined });
    console.error('CLI Error: Failed to parse payload or send notification:', errorMessage);
    process.exit(1);
  }
}

main().catch(error => {
  // Catch unhandled promise rejections from main
  const errorMessage = error instanceof Error ? error.message : 'Unknown error';
  logger.error('CLI Error: Unhandled error in main function:', { error: errorMessage, stack: error instanceof Error ? error.stack : undefined });
  console.error('CLI Error: Unhandled error in main function:', errorMessage);
  process.exit(1);
});
