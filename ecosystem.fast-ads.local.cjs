const path = require('path');
const rootDir = __dirname;

module.exports = {
  apps: [
    {
      name: 'fast-ads-loop',
      cwd: rootDir,
      script: 'automation/fast-advertising-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true,
      env: {
        FAST_ADS_INTERVAL_MS: process.env.FAST_ADS_INTERVAL_MS || '60000'
      }
    }
  ]
};


