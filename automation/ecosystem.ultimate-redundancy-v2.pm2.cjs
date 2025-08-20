module.exports = {
  apps: [
    {
      name: 'ultimate-redundancy-v2',
      script: './automation/ultimate-redundancy-system-v2.cjs',
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
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_restarts: 10,
      min_uptime: '10s'
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
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-monitor-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-monitor-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-monitor-combined.log',
      time: true
    }
  ]
};