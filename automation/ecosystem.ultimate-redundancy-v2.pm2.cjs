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
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './automation/logs/ultimate-redundancy-v2-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      exp_backoff_restart_delay: 100
    },
    {
      name: 'ultimate-redundancy-v2-monitor',
      script: './automation/ultimate-redundancy-v2-system.cjs',
      args: 'monitor',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MODE: 'monitor'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-monitor-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-monitor-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    }
  ]
};