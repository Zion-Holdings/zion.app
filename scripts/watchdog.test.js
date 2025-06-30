const osUtils = require('os-utils');
const { exec: actualExec } = require('child_process'); // Keep actual exec for potential use if needed
const axios = require('axios');
const { vi, describe, it, expect, beforeEach, afterEach } = require('vitest');

// Import functions and state helpers from the refactored watchdog.js
// Use vi.importActual for the module whose internals are being tested/spied on
let actualWatchdogModule;

// Mock external dependencies
vi.mock('os-utils');
vi.mock('child_process', () => ({
  exec: vi.fn(),
}));
vi.mock('axios');

const mockTriggerSelfHealImpl = vi.fn();
const mockSendDiscordAlertImpl = vi.fn();
const mockAppendToSelfHealLogImpl = vi.fn();
const mockLogErrorImpl = vi.fn();


describe('Watchdog Script Tests', () => {
  let consoleLogSpy, consoleWarnSpy, consoleErrorSpy;
  let constants;

  // Dynamic import for actualWatchdogModule
  beforeEach(async () => {
    // Must be dynamically imported after mocks are set up by Vitest
    actualWatchdogModule = await vi.importActual('./watchdog');

    mockTriggerSelfHealImpl.mockClear();
    mockSendDiscordAlertImpl.mockClear();
    mockAppendToSelfHealLogImpl.mockClear();
    mockLogErrorImpl.mockClear();

    axios.post.mockClear();
    const { exec } = require('child_process'); // Get the mock
    exec.mockClear();

    // os-utils is auto-mocked by vi.mock('os-utils')
    // If specific methods like os.memUsage need to be cleared or reset:
    if (osUtils.memUsage && typeof osUtils.memUsage.mockClear === 'function') {
        osUtils.memUsage.mockClear();
    }
    if (osUtils.cpuUsage && typeof osUtils.cpuUsage.mockClear === 'function') {
        osUtils.cpuUsage.mockClear();
    }


    actualWatchdogModule._resetStateForTests();

    vi.useFakeTimers();
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    constants = actualWatchdogModule._getConstantsForTests();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  describe('monitorSystemResources', () => {
    let monitorSystemResources, _getStateForTests, _setStateForTests;
    let triggerSelfHealSpy, appendToSelfHealLogSpy;

    beforeEach(() => {
      monitorSystemResources = actualWatchdogModule.monitorSystemResources;
      _getStateForTests = actualWatchdogModule._getStateForTests;
      _setStateForTests = actualWatchdogModule._setStateForTests;

      triggerSelfHealSpy = vi.spyOn(actualWatchdogModule, 'triggerSelfHeal').mockImplementation(mockTriggerSelfHealImpl);
      appendToSelfHealLogSpy = vi.spyOn(actualWatchdogModule, 'appendToSelfHealLog').mockImplementation(mockAppendToSelfHealLogImpl);
    });

    it('should call triggerSelfHeal if memory usage exceeds threshold', () => {
      osUtils.memUsage.mockImplementation(callback => {
        callback({ freeMemPercentage: 1 - (constants.MEMORY_THRESHOLD + 0.1) });
      });
      osUtils.cpuUsage.mockImplementation(callback => callback(0.1));

      monitorSystemResources();

      expect(osUtils.memUsage).toHaveBeenCalled();
      expect(mockTriggerSelfHealImpl).toHaveBeenCalledWith(
        expect.stringContaining(`High memory usage detected: ${((constants.MEMORY_THRESHOLD + 0.1) * 100).toFixed(2)}%`)
      );
    });

    it('should not call triggerSelfHeal if memory usage is below threshold', () => {
      osUtils.memUsage.mockImplementation(callback => {
        callback({ freeMemPercentage: 1 - (constants.MEMORY_THRESHOLD - 0.1) });
      });
      osUtils.cpuUsage.mockImplementation(callback => callback(0.1));

      monitorSystemResources();
      expect(mockTriggerSelfHealImpl).not.toHaveBeenCalled();
    });

    it('should call triggerSelfHeal if CPU usage exceeds threshold for sustained period', () => {
      osUtils.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      osUtils.cpuUsage.mockImplementation(callback => callback(constants.CPU_THRESHOLD + 0.1));

      for (let i = 0; i < constants.CPU_SUSTAINED_CHECKS; i++) {
        monitorSystemResources();
      }
      expect(osUtils.cpuUsage).toHaveBeenCalledTimes(constants.CPU_SUSTAINED_CHECKS);
      expect(mockTriggerSelfHealImpl).toHaveBeenCalledWith(
        expect.stringContaining(`Sustained high CPU usage for ${constants.CPU_SUSTAINED_CHECKS} checks`)
      );
    });

    it('should not call triggerSelfHeal if CPU usage is high for less than sustained period', () => {
      osUtils.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      osUtils.cpuUsage.mockImplementation(callback => callback(constants.CPU_THRESHOLD + 0.1));

      for (let i = 0; i < constants.CPU_SUSTAINED_CHECKS - 1; i++) {
        monitorSystemResources();
      }
      expect(mockTriggerSelfHealImpl).not.toHaveBeenCalled();
    });

    it('should reset highCpuUsageCount if CPU usage drops below threshold', () => {
      osUtils.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      osUtils.cpuUsage.mockImplementationOnce(callback => callback(constants.CPU_THRESHOLD + 0.1))
                 .mockImplementationOnce(callback => callback(constants.CPU_THRESHOLD + 0.1))
                 .mockImplementationOnce(callback => callback(constants.CPU_THRESHOLD - 0.1));

      monitorSystemResources();
      expect(_getStateForTests().highCpuUsageCount).toBe(1);
      monitorSystemResources();
      expect(_getStateForTests().highCpuUsageCount).toBe(2);
      monitorSystemResources();
      expect(_getStateForTests().highCpuUsageCount).toBe(0);
      expect(mockTriggerSelfHealImpl).not.toHaveBeenCalled();
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('CPU usage back to normal. Resetting high CPU usage count. Was: 2'));
    });

    it('should not run if isHealing is true', () => {
      _setStateForTests({ isHealing: true });
      monitorSystemResources();
      expect(osUtils.memUsage).not.toHaveBeenCalled();
      expect(osUtils.cpuUsage).not.toHaveBeenCalled();
    });
  });

  describe('sendDiscordAlert', () => {
    const originalEnv = { ...process.env };
    let sendDiscordAlertFunc;
    let appendToSelfHealLogSpy, logErrorSpy;

    beforeEach(async () => { // Made async for dynamic import
      // actualWatchdogModule is dynamically imported in the top-level beforeEach
      sendDiscordAlertFunc = actualWatchdogModule.sendDiscordAlert;

      // Reset process.env for this suite's specific needs if any, or rely on top-level reset
      process.env = { ...originalEnv };


      appendToSelfHealLogSpy = vi.spyOn(actualWatchdogModule, 'appendToSelfHealLog').mockImplementation(mockAppendToSelfHealLogImpl);
      logErrorSpy = vi.spyOn(actualWatchdogModule, 'logError').mockImplementation(mockLogErrorImpl);
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it('should send a POST request to DISCORD_WEBHOOK_URL with the message when URL is set', async () => {
      process.env.DISCORD_WEBHOOK_URL = 'https://fake.discord.webhook/url';
      const alertMessage = 'Test Discord Alert';
      axios.post.mockResolvedValue({ status: 200 });

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).toHaveBeenCalledWith(
        'https://fake.discord.webhook/url',
        { content: alertMessage },
        { timeout: 10000 }
      );
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Successfully sent alert to Discord.'));
    });

    it('should log a warning and not make an HTTP request if DISCORD_WEBHOOK_URL is not set', async () => {
      delete process.env.DISCORD_WEBHOOK_URL;
      const alertMessage = 'Test Discord Alert, no URL';

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).not.toHaveBeenCalled();
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('Discord Webhook URL not configured'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('WARN: Discord Webhook URL not configured'));
    });

    it('should call logError if axios returns an error', async () => {
      process.env.DISCORD_WEBHOOK_URL = 'https://fake.discord.webhook/url';
      const alertMessage = 'Test error case';
      const error = new Error('Network Error');
      axios.post.mockRejectedValue(error);

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(mockLogErrorImpl).toHaveBeenCalledWith(expect.stringContaining('Failed to send alert to Discord. Error: Network Error'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('ERROR: Failed to send alert to Discord. Error: Network Error'));
    });
  });

  describe('triggerSelfHeal (actual implementation)', () => {
    let actualTriggerSelfHealFunc, actual_getStateForTestsFunc, actual_setStateForTestsFunc, actual_getConstantsForTestsFunc, localConstants;
    let execMock; // Specific mock for child_process.exec for this suite

    beforeEach(async () => { // Made async for dynamic import
        // actualWatchdogModule is dynamically imported in the top-level beforeEach
        actualTriggerSelfHealFunc = actualWatchdogModule.triggerSelfHeal;
        actual_getStateForTestsFunc = actualWatchdogModule._getStateForTests;
        actual_setStateForTestsFunc = actualWatchdogModule._setStateForTests;
        actual_getConstantsForTestsFunc = actualWatchdogModule._getConstantsForTests;
        localConstants = actual_getConstantsForTestsFunc();

        actualWatchdogModule._resetStateForTests();
        actual_setStateForTestsFunc({ isHealing: false, perfErrorStreak: 1, securityPatchStreak: 1, highCpuUsageCount: 1 });

        const { exec } = require('child_process'); // get the mocked exec
        execMock = exec;
        execMock.mockImplementation((command, callback) => {
          callback(null, 'stdout mock', 'stderr mock');
        });

        mockSendDiscordAlertImpl.mockClear(); // Ensure this is cleared
        mockAppendToSelfHealLogImpl.mockClear(); // Ensure this is cleared
    });

    it('should not run if isHealing is true', () => {
      actual_setStateForTestsFunc({ isHealing: true });
      actualTriggerSelfHealFunc('Test reason when healing');
      expect(mockSendDiscordAlertImpl).not.toHaveBeenCalled();
      expect(execMock).not.toHaveBeenCalled();
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal action already in progress. Skipping trigger for: Test reason when healing'));
    });

    // Vitest runs tests in parallel by default, (done) callback is not standard. Use async/await.
    it('should set isHealing to true, call mocked sendDiscordAlert, execute HEAL_COMMAND via mocked exec, and log actions', async () => {
      const reason = 'Test self-heal trigger';
      actualTriggerSelfHealFunc(reason);

      expect(actual_getStateForTestsFunc().isHealing).toBe(true);
      // sendDiscordAlert is mocked at the module level for other tests, but here we are testing the actual triggerSelfHeal
      // So, we need to ensure that the sendDiscordAlert within triggerSelfHeal is the one we can control or assert against.
      // For now, assuming mockSendDiscordAlertImpl is correctly spied on if triggerSelfHeal calls the spied version.
      // This might require direct spyOn for actualWatchdogModule.sendDiscordAlert if not already done.

      // If sendDiscordAlert is directly part of actualWatchdogModule and we want to mock its behavior for this specific test suite:
      const sendDiscordAlertSpy = vi.spyOn(actualWatchdogModule, 'sendDiscordAlert').mockImplementation(mockSendDiscordAlertImpl);


      expect(mockSendDiscordAlertImpl).toHaveBeenCalledWith(
        expect.stringContaining(`**Reason:** ${reason}`)
      );
      expect(mockSendDiscordAlertImpl).toHaveBeenCalledWith(
        expect.stringContaining(`**Command:** \`\`\`${localConstants.HEAL_COMMAND}\`\`\``)
      );
      expect(execMock).toHaveBeenCalledWith(localConstants.HEAL_COMMAND, expect.any(Function));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining(`Triggering self-heal due to: ${reason}`));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining(`Executing self-heal command: ${localConstants.HEAL_COMMAND}`));

      // Simulate exec callback
      execMock.mock.calls[0][1](null, 'mock stdout', 'mock stderr');

      // Wait for any promises within the callback to resolve
      await vi.runAllTimersAsync(); // Or await new Promise(process.nextTick);

      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal command stdout: mock stdout'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal action complete. Resetting streaks.'));
      expect(actual_getStateForTestsFunc().isHealing).toBe(false);
      expect(actual_getStateForTestsFunc().perfErrorStreak).toBe(0);
      expect(actual_getStateForTestsFunc().securityPatchStreak).toBe(0);
      expect(actual_getStateForTestsFunc().highCpuUsageCount).toBe(0);
      sendDiscordAlertSpy.mockRestore(); // Clean up spy
    });
  });
});
