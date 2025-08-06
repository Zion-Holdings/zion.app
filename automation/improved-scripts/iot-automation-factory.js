#!/usr/bin/env node


  async getStatus() {
    return {
      systemName: 'iot-automation-factory',
      isRunning: this.isRunning,
      startTime: this.startTime,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
    };
  }

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down iot-automation-factory gracefully...');
  if (this.isRunning) {
    this.isRunning = false;
  }
  process.exit(0);
});