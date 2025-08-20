module.exports = {
  apps: [
    {
      name: 'ultimate-redundancy-v2',
      script: './automation/ultimate-redundancy-v2-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate-v2',
        AUTO_RECOVERY: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate-v2',
        AUTO_RECOVERY: 'true'
      },
      log_file: './automation/logs/ultimate-redundancy-v2.log',
      out_file: './automation/logs/ultimate-redundancy-v2-out.log',
      error_file: './automation/logs/ultimate-redundancy-v2-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      exp_backoff_restart_delay: 100
    },
    {
      name: 'ultimate-redundancy-monitor',
      script: './automation/ultimate-redundancy-status-reporter.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '30000'
      },
      log_file: './automation/logs/ultimate-redundancy-monitor.log',
      out_file: './automation/logs/ultimate-redundancy-monitor-out.log',
      error_file: './automation/logs/ultimate-redundancy-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000
    },
    {
      name: 'ultimate-build-guardian',
      script: './netlify/functions/ultimate-build-guardian.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        FUNCTION_TYPE: 'build-guardian'
      },
      log_file: './automation/logs/ultimate-build-guardian.log',
      out_file: './automation/logs/ultimate-build-guardian-out.log',
      error_file: './automation/logs/ultimate-build-guardian-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 1000
    }
  ]
};