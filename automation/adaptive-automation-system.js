 

  async getStatus() {
    return {
      systemName: 'adaptive-automation-system',
      isRunning: this.isRunning,
      startTime: this.startTime,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0
    };
  }

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down adaptive-automation-system gracefully...');
  if (this.isRunning) {
    this.isRunning = false;
  }
  process.exit(0);
});