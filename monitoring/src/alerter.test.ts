// monitoring/src/alerter.test.ts
import axios from 'axios';
import { exec } from 'child_process';
import { sendWebhookNotification, triggerAlerts, NotificationPayload } from './alerter';
import { EndpointTestResult } from './latencyTester'; // Import directly
import logger from './logger';

// Mock axios
jest.mock('axios');
const mockedAxiosPost = axios.post as jest.Mock;

// Mock logger
jest.mock('./logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(), // Add other methods if used by alerter.ts
}));

// Mock child_process.exec
jest.mock('child_process');
const mockedExec = exec as unknown as jest.Mock;


describe('alerter', () => {
  const OLD_ENV = process.env;
  const ALERT_THRESHOLD_MS_IN_ALERTER = 500; // As defined in alerter.ts

  beforeEach(() => {
    jest.resetAllMocks(); // Reset mocks for each test
    process.env = { ...OLD_ENV }; // Reset process.env
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  describe('sendWebhookNotification', () => {
    const MOCK_WEBHOOK_URL = 'http://fake.webhook.url/test';

    it('should not send notification if ALERT_WEBHOOK_URL is not set', async () => {
      process.env.ALERT_WEBHOOK_URL = ''; // Unset it
      const payload: NotificationPayload = { commitLink: 'test-link' };
      await sendWebhookNotification(payload);
      expect(mockedAxiosPost).not.toHaveBeenCalled();
      expect(logger.warn).toHaveBeenCalledWith('ALERT_WEBHOOK_URL is not set. Skipping notification.');
    });

    it('should not send notification if payload is empty or results in no message parts', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const payload: NotificationPayload = {}; // Empty payload
      await sendWebhookNotification(payload);
      expect(mockedAxiosPost).not.toHaveBeenCalled();
      expect(logger.warn).toHaveBeenCalledWith("No information to send in notification. Skipping.");
    });

    it('should send a notification with only commitLink', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const payload: NotificationPayload = { commitLink: 'http://commit/123' };
      await sendWebhookNotification(payload);
      expect(mockedAxiosPost).toHaveBeenCalledWith(
        MOCK_WEBHOOK_URL,
        expect.objectContaining({
          text: expect.stringContaining('Commit: http://commit/123')
        }),
        { timeout: 10000 } // Check timeout option
      );
    });

    it('should send a notification with slow endpoints', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const endpointResult: EndpointTestResult =  { name: 'EndpointA', url: '/a', method: 'GET', latencyMs: 600, status: 200, timestamp: '2023-01-01T10:00:00Z' };
      const payload: NotificationPayload = {
        slowEndpoints: [endpointResult]
      };
      await sendWebhookNotification(payload);
      const sentPayload = mockedAxiosPost.mock.calls[0][1]; // get the second argument of the first call
      expect(sentPayload.text).toMatch(/🚨 \*High Latency Alert\* 🚨/); // Match markdown bold
      expect(sentPayload.text).toContain('Endpoint: `EndpointA` (`/a`)');
      expect(sentPayload.text).toContain(`Latency: \`600ms\` (Threshold: \`${ALERT_THRESHOLD_MS_IN_ALERTER}ms\`)`);
      expect(sentPayload.text).toContain('Attempting service restart for affected services... (if applicable)');
    });

    it('should send a notification with patched packages', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const payload: NotificationPayload = {
        patchedPackages: [
          { name: 'pkg-a', version: '1.0.1', previousVersion: '1.0.0' },
          { name: 'pkg-b', version: '2.1.0' }
        ]
      };
      await sendWebhookNotification(payload);
      const sentPayload = mockedAxiosPost.mock.calls[0][1];
      expect(sentPayload.text).toContain('*Updated Packages:*');
      expect(sentPayload.text).toContain('  - pkg-a (1.0.1, previously 1.0.0)');
      expect(sentPayload.text).toContain('  - pkg-b (2.1.0)');
    });

    it('should send a notification with test status', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const payload: NotificationPayload = {
        testStatus: { passed: 90, failed: 5, total: 95, coverage: 88.5 }
      };
      await sendWebhookNotification(payload);
      const sentPayload = mockedAxiosPost.mock.calls[0][1];
      expect(sentPayload.text).toContain('*Test Status:*');
      expect(sentPayload.text).toContain('Tests: 90/95 passed'); // Format from alerter.ts
      expect(sentPayload.text).toContain('Coverage: 88.5%');
    });

    it('should send a notification with a custom message', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const payload: NotificationPayload = { customMessage: 'This is a custom alert.' };
      await sendWebhookNotification(payload);
      expect(mockedAxiosPost).toHaveBeenCalledWith(
        MOCK_WEBHOOK_URL,
        expect.objectContaining({
          text: 'This is a custom alert.' // Custom message is the first part
        }),
        { timeout: 10000 }
      );
    });

    it('should send a comprehensive notification with all fields', async () => {
      process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
      const endpointResult: EndpointTestResult = { name: 'EndpointB', url: '/b', method: 'POST', latencyMs: 750, status: 200, timestamp: '2023-01-01T11:00:00Z' };
      const payload: NotificationPayload = {
        customMessage: "Hourly report",
        slowEndpoints: [endpointResult],
        patchedPackages: [{ name: 'pkg-c', version: '3.0.0', previousVersion: '2.5.0' }],
        testStatus: { passed: 100, failed: 0, total: 100, coverage: 95 },
        commitLink: 'http://commit/abc'
      };
      await sendWebhookNotification(payload);
      const sentPayloadText = mockedAxiosPost.mock.calls[0][1].text;

      expect(sentPayloadText).toContain('Hourly report');
      expect(sentPayloadText).toContain('🚨 *High Latency Alert* 🚨');
      expect(sentPayloadText).toContain('Endpoint: `EndpointB`');
      expect(sentPayloadText).toContain('Attempting service restart for affected services... (if applicable)');
      expect(sentPayloadText).toContain('*Updated Packages:*');
      expect(sentPayloadText).toContain('  - pkg-c (3.0.0, previously 2.5.0)');
      expect(sentPayloadText).toContain('*Test Status:*');
      expect(sentPayloadText).toContain('Tests: 100/100 passed');
      expect(sentPayloadText).toContain('Coverage: 95%');
      expect(sentPayloadText).toContain('Commit: http://commit/abc');
    });

    it('should handle axios post failure and log error', async () => {
        process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
        const testError = new Error('Network Error');
        mockedAxiosPost.mockRejectedValueOnce(testError);
        const payload: NotificationPayload = { commitLink: 'test-link' };

        await sendWebhookNotification(payload);

        expect(logger.error).toHaveBeenCalledWith(
            `Failed to send notification. Error: ${testError.message}`
        );
    });

     it('should handle axios post failure with response and log error details', async () => {
        process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
        const errorResponse = {
            message: 'Request failed with status code 500',
            response: { status: 500, data: { detail: 'Internal Server Error' } },
            isAxiosError: true,
        };
        mockedAxiosPost.mockRejectedValueOnce(errorResponse);
        const payload: NotificationPayload = { commitLink: 'test-link-axios-error' };

        await sendWebhookNotification(payload);

        expect(logger.error).toHaveBeenCalledWith(
            'Notification failed with response:',
            { status: 500, data: { detail: 'Internal Server Error' } }
        );
         expect(logger.error).toHaveBeenCalledWith(
            `Failed to send notification. Error: ${errorResponse.message}`
        );
    });
  });

  describe('triggerAlerts', () => {
    const MOCK_WEBHOOK_URL = 'http://fake.webhook.url/trigger';
    // ALERT_THRESHOLD_MS is 500 in alerter.ts
    const highLatencyResult: EndpointTestResult = { name: 'CriticalService Django Test', url: '/critical', method: 'GET', latencyMs: ALERT_THRESHOLD_MS_IN_ALERTER + 100, status: 200, timestamp: '2023-01-01T12:00:00Z' };
    const normalLatencyResult: EndpointTestResult = { name: 'NormalService', url: '/normal', method: 'GET', latencyMs: ALERT_THRESHOLD_MS_IN_ALERTER - 100, status: 200, timestamp: '2023-01-01T12:01:00Z' };
    const errorResult: EndpointTestResult = { name: 'ErrorService', url: '/error', method: 'GET', latencyMs: undefined, status: 500, error: 'Service down', timestamp: '2023-01-01T12:02:00Z' };

    beforeEach(() => {
        process.env.ALERT_WEBHOOK_URL = MOCK_WEBHOOK_URL;
        mockedExec.mockImplementation((command, callback) => {
          // Default mock for exec: successful execution
          callback(null, 'mock stdout', 'mock stderr');
        });
    });

    it('should send notification for high latency', async () => {
      await triggerAlerts(highLatencyResult);
      expect(mockedAxiosPost).toHaveBeenCalledTimes(1);
      const notificationPayloadArg = mockedAxiosPost.mock.calls[0][1]; // payload is the second arg to axios.post
      expect(notificationPayloadArg.text).toContain('🚨 *High Latency Alert* 🚨');
      expect(notificationPayloadArg.text).toContain(`Endpoint: \`${highLatencyResult.name}\` (\`${highLatencyResult.url}\`)`);
      expect(notificationPayloadArg.text).toContain(`Latency: \`${highLatencyResult.latencyMs}ms\``);
    });

    it('should attempt to restart service if mapping exists for high latency (e.g., django)', async () => {
        await triggerAlerts(highLatencyResult); // name includes 'Django'
        expect(mockedExec).toHaveBeenCalledWith(
            'pm2 restart django-service', // As per getServiceName logic
            expect.any(Function)
        );
        expect(logger.info).toHaveBeenCalledWith("Service restart process initiated for django-service due to high latency on CriticalService Django Test.");
    });

    it('should log error if restart service fails', async () => {
        const restartError = new Error('PM2 failed');
        mockedExec.mockImplementation((command, callback) => {
          callback(restartError, '', 'Error output');
        });
        await triggerAlerts(highLatencyResult);
        expect(logger.error).toHaveBeenCalledWith("Service restart attempt failed for django-service.", restartError);
    });

    it('should not send notification for normal latency', async () => {
      await triggerAlerts(normalLatencyResult);
      expect(mockedAxiosPost).not.toHaveBeenCalled();
    });

    it('should not send notification if result has an error', async () => {
      await triggerAlerts(errorResult);
      expect(mockedAxiosPost).not.toHaveBeenCalled();
    });

    it('should not send notification if latency is exactly at threshold (or below)', async () => {
      await triggerAlerts({ ...highLatencyResult, latencyMs: ALERT_THRESHOLD_MS_IN_ALERTER });
      expect(mockedAxiosPost).not.toHaveBeenCalled();

      await triggerAlerts({ ...highLatencyResult, latencyMs: ALERT_THRESHOLD_MS_IN_ALERTER -1 });
      expect(mockedAxiosPost).not.toHaveBeenCalled();
    });

    it('should not attempt restart if no service mapping found', async () => {
        const noMapResult: EndpointTestResult = { ...highLatencyResult, name: 'UnknownServiceType' };
        await triggerAlerts(noMapResult);
        expect(mockedExec).not.toHaveBeenCalled();
        expect(logger.warn).toHaveBeenCalledWith("No service mapping found for endpoint 'UnknownServiceType'. Cannot attempt restart.");
    });
  });
});
