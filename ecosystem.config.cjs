const path = require('path');
const rootDir = __dirname; // repository root

module.exports = {
  apps: [
    {
      name: 'automation-guardian-scheduler',
      cwd: rootDir,
      script: path.join(rootDir, 'automation/pm2/guardian-scheduler.cjs'),
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      time: true,
      out_file: path.join(rootDir, 'automation/logs/guardian-scheduler.out.log'),
      error_file: path.join(rootDir, 'automation/logs/guardian-scheduler.err.log'),
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
    },
    {
      name: 'front-continuous-scheduler',
      cwd: rootDir,
      script: path.join(rootDir, 'automation/pm2/front-scheduler.cjs'),
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      time: true,
      out_file: path.join(rootDir, 'automation/logs/front-scheduler.out.log'),
      error_file: path.join(rootDir, 'automation/logs/front-scheduler.err.log'),
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }
  ]
};