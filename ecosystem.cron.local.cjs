const path = require('path');
const rootDir = __dirname;

module.exports = {
  apps: [
    {
      name: 'cron-orchestrator',
      cwd: rootDir,
      script: 'automation/cron-orchestrator.cjs',
      interpreter: 'node',
      time: true,
      autorestart: true
    }
  ]
};


