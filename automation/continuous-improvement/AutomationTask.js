class AutomationTask {
  constructor(config = {}) {
    this.config = config;
    this.lastRun = null;
    this.lastStatus = 'pending';
    this.lastError = null;
  }

  async run() {
    throw new Error('run() must be implemented by subclass');
  }

  getStatus() {
    return {
      lastRun: this.lastRun,
      lastStatus: this.lastStatus,
      lastError: this.lastError,
      config: this.config
    };
  }

  getConfig() {
    return this.config;
  }
}

module.exports = AutomationTask; 