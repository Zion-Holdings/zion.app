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
      instance_var: 'INSTANCE_ID',
      watch: false,
      autorestart: true,
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '256M',
      wait_ready: true,
      listen_timeout: 8000,
      cron_restart: '0 */6 * * *',
      vizion: false,
      node_args: ['--max-old-space-size=256'],
      env: {
        NODE_ENV: 'production',
        // Explicit scheduler tuning
        GUARDIAN_SCHEDULER_INTERVAL_MINUTES: '10',
        GUARDIAN_MAX_INTERVAL_MINUTES: '60',
        GUARDIAN_RUN_TIMEOUT_MS: String(9 * 60 * 1000),
        GUARDIAN_JITTER_PCT: '0.15',
        GUARDIAN_BACKOFF_MULTIPLIER: '1.6'
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
      instance_var: 'INSTANCE_ID',
      watch: false,
      autorestart: true,
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '256M',
      wait_ready: true,
      listen_timeout: 8000,
      cron_restart: '0 */6 * * *',
      vizion: false,
      node_args: ['--max-old-space-size=256'],
      env: {
        NODE_ENV: 'production',
        // Explicit scheduler tuning
        FRONT_SCHEDULER_INTERVAL_MINUTES: '5',
        FRONT_MAX_INTERVAL_MINUTES: '30',
        FRONT_RUN_TIMEOUT_MS: String(4.5 * 60 * 1000),
        FRONT_JITTER_PCT: '0.15',
        FRONT_BACKOFF_MULTIPLIER: '1.6'
      },
      time: true,
      out_file: path.join(rootDir, 'automation/logs/front-scheduler.out.log'),
      error_file: path.join(rootDir, 'automation/logs/front-scheduler.err.log'),
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }
  ]
};