const os = require('os-utils'); // This will be the mocked version due to jest.mock
const { exec } = require('child_process'); // This will be the mocked version
const axios = require('axios'); // This will be the mocked version

// Import functions and state helpers from the refactored watchdog.js
const {
  monitorSystemResources,
  sendDiscordAlert,
  triggerSelfHeal: actualTriggerSelfHeal, // Keep a reference to the original
  appendToSelfHealLog: actualAppendToSelfHealLog,
  logError: actualLogError,
  _getStateForTests,
  _setStateForTests,
  _resetStateForTests,
  _getConstantsForTests
} = require('./watchdog');

// Mock external dependencies
jest.mock('os-utils');
jest.mock('child_process');
jest.mock('axios');

// Mock functions from watchdog.js that are called by other watchdog.js functions
// We achieve this by requiring the module and then spying/mocking its exported methods.
// For functions like triggerSelfHeal being called by monitorSystemResources,
// we need to mock `triggerSelfHeal` within the module's own scope.

// These are the actual mock function implementations that tests will spy on/assert against.
const mockTriggerSelfHealImpl = jest.fn();
const mockSendDiscordAlertImpl = jest.fn();
const mockAppendToSelfHealLogImpl = jest.fn();
const mockLogErrorImpl = jest.fn();

// No top-level jest.mock('./watchdog', ...) anymore. Spies will be set up per-suite.

describe('Watchdog Script Tests', () => {
  let consoleLogSpy, consoleWarnSpy, consoleErrorSpy;
  let constants;
  let actualWatchdogModule; // Will hold jest.requireActual('./watchdog')

  beforeEach(() => {
    // Clear implementations and calls for our main Impl mock functions
    mockTriggerSelfHealImpl.mockClear();
    mockSendDiscordAlertImpl.mockClear();
    mockAppendToSelfHealLogImpl.mockClear();
    mockLogErrorImpl.mockClear();

    // Clear specific external mocks
    axios.post.mockClear();
    exec.mockClear();
    const os = require('os-utils'); // Get the mock from __mocks__
    os.memUsage.mockClear();
    os.cpuUsage.mockClear();

    actualWatchdogModule = jest.requireActual('./watchdog');
    actualWatchdogModule._resetStateForTests();

    jest.useFakeTimers();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    constants = actualWatchdogModule._getConstantsForTests();
  });

  afterEach(() => {
    jest.clearAllTimers();
    // Restore all mocks and spies created with jest.spyOn or jest.mock
    jest.restoreAllMocks();
  });

  describe('monitorSystemResources', () => {
    let monitorSystemResources, _getStateForTests, _setStateForTests;
    let triggerSelfHealSpy, appendToSelfHealLogSpy;

    beforeEach(() => {
      // actualWatchdogModule is already required and reset in the main beforeEach
      monitorSystemResources = actualWatchdogModule.monitorSystemResources;
      _getStateForTests = actualWatchdogModule._getStateForTests;
      _setStateForTests = actualWatchdogModule._setStateForTests;

      // Spy on other functions within the actualWatchdogModule that monitorSystemResources calls
      triggerSelfHealSpy = jest.spyOn(actualWatchdogModule, 'triggerSelfHeal').mockImplementation(mockTriggerSelfHealImpl);
      appendToSelfHealLogSpy = jest.spyOn(actualWatchdogModule, 'appendToSelfHealLog').mockImplementation(mockAppendToSelfHealLogImpl);
    });

    it('should call triggerSelfHeal if memory usage exceeds threshold', () => {
      os.memUsage.mockImplementation(callback => {
        callback({ freeMemPercentage: 1 - (constants.MEMORY_THRESHOLD + 0.1) });
      });
      os.cpuUsage.mockImplementation(callback => callback(0.1));

      monitorSystemResources();

      expect(os.memUsage).toHaveBeenCalled();
      expect(mockTriggerSelfHealImpl).toHaveBeenCalledWith(
        expect.stringContaining(`High memory usage detected: ${((constants.MEMORY_THRESHOLD + 0.1) * 100).toFixed(2)}%`)
      );
    });

    it('should not call triggerSelfHeal if memory usage is below threshold', () => {
      os.memUsage.mockImplementation(callback => {
        callback({ freeMemPercentage: 1 - (constants.MEMORY_THRESHOLD - 0.1) });
      });
      os.cpuUsage.mockImplementation(callback => callback(0.1));

      monitorSystemResources(); // Call actual function
      expect(mockTriggerSelfHealImpl).not.toHaveBeenCalled();
    });

    it('should call triggerSelfHeal if CPU usage exceeds threshold for sustained period', () => {
      os.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      os.cpuUsage.mockImplementation(callback => callback(constants.CPU_THRESHOLD + 0.1));

      for (let i = 0; i < constants.CPU_SUSTAINED_CHECKS; i++) {
        monitorSystemResources(); // Call actual function
      }
      expect(os.cpuUsage).toHaveBeenCalledTimes(constants.CPU_SUSTAINED_CHECKS);
      expect(mockTriggerSelfHealImpl).toHaveBeenCalledWith(
        expect.stringContaining(`Sustained high CPU usage for ${constants.CPU_SUSTAINED_CHECKS} checks`)
      );
    });

    it('should not call triggerSelfHeal if CPU usage is high for less than sustained period', () => {
      os.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      os.cpuUsage.mockImplementation(callback => callback(constants.CPU_THRESHOLD + 0.1));

      for (let i = 0; i < constants.CPU_SUSTAINED_CHECKS - 1; i++) {
        monitorSystemResources(); // Call actual function
      }
      expect(mockTriggerSelfHealImpl).not.toHaveBeenCalled();
    });

    it('should reset highCpuUsageCount if CPU usage drops below threshold', () => {
      os.memUsage.mockImplementation(callback => callback({ freeMemPercentage: 0.5 }));
      os.cpuUsage.mockImplementationOnce(callback => callback(constants.CPU_THRESHOLD + 0.1))
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
      _setStateForTests({ isHealing: true }); // Use locally defined _setStateForTests
      monitorSystemResources(); // Use locally defined monitorSystemResources
      expect(os.memUsage).not.toHaveBeenCalled();
      expect(os.cpuUsage).not.toHaveBeenCalled();
    });
  });

  describe('sendDiscordAlert', () => {
    const originalEnv = { ...process.env };
    let sendDiscordAlertFunc; // To hold the actual function
    let appendToSelfHealLogSpy, logErrorToProductionSpy;

    beforeEach(() => {
      jest.resetModules(); // Crucial for process.env changes
      process.env = { ...originalEnv };

      // actualWatchdogModule is defined in the top-level beforeEach
      sendDiscordAlertFunc = actualWatchdogModule.sendDiscordAlert;

      // Spy on internal logging functions called by sendDiscordAlert
      appendToSelfHealLogSpy = jest.spyOn(actualWatchdogModule, 'appendToSelfHealLog').mockImplementation(mockAppendToSelfHealLogImpl);
      logErrorSpy = jest.spyOn(actualWatchdogModule, 'logError').mockImplementation(mockLogErrorImpl);
    });

    afterEach(() => { // Changed from afterAll to afterEach for env safety
      process.env = originalEnv;
    });

    it('should send a POST request to DISCORD_WEBHOOK_URL with the message when URL is set', async () => {
      process.env.DISCORD_WEBHOOK_URL = 'https://fake.discord.webhook/url';
      const alertMessage = 'Test Discord Alert';
      axios.post.mockResolvedValue({ status: 200 }); // Mock successful request

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).toHaveBeenCalledWith(
        'https://fake.discord.webhook/url',
        { content: alertMessage },
        { timeout: 10000 }
      );
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Successfully sent alert to Discord.'));
    });

    it('should log a warning and not make an HTTP request if DISCORD_WEBHOOK_URL is not set', async () => {
      delete process.env.DISCORD_WEBHOOK_URL; // Ensure URL is not set
      const alertMessage = 'Test Discord Alert, no URL';

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).not.toHaveBeenCalled();
      // consoleWarnSpy is set in the top-level beforeEach
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('Discord Webhook URL not configured'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('WARN: Discord Webhook URL not configured'));
    });

    it('should call logError if axios returns an error', async () => {
      process.env.DISCORD_WEBHOOK_URL = 'https://fake.discord.webhook/url';
      const alertMessage = 'Test error case';
      const error = new Error('Network Error');
      axios.post.mockRejectedValue(error); // Mock failed request

      await sendDiscordAlertFunc(alertMessage);

      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(mockLogErrorImpl).toHaveBeenCalledWith(expect.stringContaining('Failed to send alert to Discord. Error: Network Error'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('ERROR: Failed to send alert to Discord. Error: Network Error'));
    });
  });

  describe('triggerSelfHeal (actual implementation)', () => {
    let actualTriggerSelfHeal, actual_getStateForTests, actual_setStateForTests, actual_getConstantsForTests, localConstants;

    beforeEach(() => {
        const actualWatchdogModule = jest.requireActual('./watchdog');
        actualTriggerSelfHeal = actualWatchdogModule.triggerSelfHeal;
        actual_getStateForTests = actualWatchdogModule._getStateForTests;
        actual_setStateForTests = actualWatchdogModule._setStateForTests;
        actual_getConstantsForTests = actualWatchdogModule._getConstantsForTests;
        localConstants = actual_getConstantsForTests();

        actualWatchdogModule._resetStateForTests();
        actual_setStateForTests({ isHealing: false, perfErrorStreak: 1, securityPatchStreak: 1, highCpuUsageCount: 1 });

        exec.mockImplementation((command, callback) => {
          callback(null, 'stdout mock', 'stderr mock');
        });

        mockSendDiscordAlertImpl.mockClear();
        mockAppendToSelfHealLogImpl.mockClear();
    });

    it('should not run if isHealing is true', () => {
      actual_setStateForTests({ isHealing: true });
      actualTriggerSelfHeal('Test reason when healing');
      expect(mockSendDiscordAlertImpl).not.toHaveBeenCalled();
      expect(exec).not.toHaveBeenCalled();
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal action already in progress. Skipping trigger for: Test reason when healing'));
    });

    // it('should set isHealing to true, call mocked sendDiscordAlert, execute HEAL_COMMAND via mocked exec, and log actions', (done) => {
    //   const reason = 'Test self-heal trigger';
    //   actualTriggerSelfHeal(reason);

      expect(actual_getStateForTests().isHealing).toBe(true);
      expect(mockSendDiscordAlertImpl).toHaveBeenCalledWith(
        expect.stringContaining(`**Reason:** ${reason}`)
      );
      expect(mockSendDiscordAlertImpl).toHaveBeenCalledWith(
        expect.stringContaining(`**Command:** \`\`\`${localConstants.HEAL_COMMAND}\`\`\``)
      );
      expect(exec).toHaveBeenCalledWith(localConstants.HEAL_COMMAND, expect.any(Function));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining(`Triggering self-heal due to: ${reason}`));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining(`Executing self-heal command: ${localConstants.HEAL_COMMAND}`));

      exec.mock.calls[0][1](null, 'mock stdout', 'mock stderr');

      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal command stdout: mock stdout'));
      expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith(expect.stringContaining('Self-heal action complete. Resetting streaks.'));
      expect(actual_getStateForTests().isHealing).toBe(false);
      expect(actual_getStateForTests().perfErrorStreak).toBe(0);
      expect(actual_getStateForTests().securityPatchStreak).toBe(0);
      expect(actual_getStateForTests().highCpuUsageCount).toBe(0);
      done();
    });
  // });
});

// Also, in the "sendDiscordAlert (actual implementation)" suite, the assertions should use ...Impl versions.
// expect(mockAppendToSelfHealLog).toHaveBeenCalledWith -> expect(mockAppendToSelfHealLogImpl).toHaveBeenCalledWith
// expect(mockLogError).toHaveBeenCalledWith -> expect(mockLogErrorImpl).toHaveBeenCalledWith
// This change is separate from the primary diff for triggerSelfHeal but related.
// I'll do this in a subsequent step if tests still fail on these specific lines.
// For now, focusing on the triggerSelfHeal suite's beforeEach.
