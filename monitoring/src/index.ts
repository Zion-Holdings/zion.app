import * from module';
import * from module';
import * from module'; // Import the exported function
import * from module';

logger.info(`Cron job process starting. Current working directory: ${process.cwd()}`);
logger.info(`Log files are expected at: ${path.join(__dirname, ..', logs', perf')}`);
logger.info('Performing initial monitoring run on startup...');
runMonitoring().catch(error => {
  logger.error('Error during initial monitoring run:', {
    message: error instanceof Error ? error.message : Unknown error',
    stack: error instanceof Error ? error.stack : undefined
  });
  // Optionally exit if initial run fails, or let it continue to schedule
  // process.exit(1);
});

// Schedule the monitoring task to run at the start of every hour
cron.schedule('0 * * * *', () => {
  // cron.schedule('*/1 * * * *', () => { // For testing: every minute
  logger.info('Cron job triggered: Running hourly API latency monitoring...');
  runMonitoring().catch(error => {
    logger.error('Error during scheduled monitoring run:', {
      message: error instanceof Error ? error.message : Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  });
});

logger.info('Cron job scheduled to run hourly at 0 minutes past the hour.');
logger.info('Monitoring service started. Waiting for scheduled jobs.');