module.exports = {
  name: 'zion-rollback-monitor',
  onSuccess: async ({ inputs, utils }) => {
    const { spawn } = require('child_process');
    const monitorMinutes = String(inputs.monitorMinutes || process.env.MONITOR_MINUTES || 20);
    const intervalSeconds = String(inputs.intervalSeconds || process.env.CHECK_INTERVAL_SECONDS || 60);

    console.log('[netlify-plugin] launching deployment monitor...');
    await new Promise((resolve, reject) => {
      const child = spawn('node', ['automation/deployment-monitor.cjs'], {
        env: { ...process.env, MONITOR_MINUTES: monitorMinutes, CHECK_INTERVAL_SECONDS: intervalSeconds },
        stdio: 'inherit',
      });
      child.on('exit', (code) => {
        if (code === 0) resolve(); else reject(new Error('monitor exited with code ' + code));
      });
    });
  },
  inputs: {
    monitorMinutes: { type: 'number', default: 20 },
    intervalSeconds: { type: 'number', default: 60 },
  },
};