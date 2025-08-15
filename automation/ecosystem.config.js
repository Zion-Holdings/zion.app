module.exports = {
  apps: [
    {
      name: 'cursor-intelligence-runner',
      script: 'automation/cursor-intelligence-continuous-runner.cjs',
      args: 'start',
      cwd: '/Users/miami2/ ZION_APP_AUG_11_25/zion.app',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: 'automation/logs/pm2-combined.log',
      out_file: 'automation/logs/pm2-out.log',
      error_file: 'automation/logs/pm2-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'cursor-intelligence-monitor',
      script: 'automation/cursor-intelligence-monitor.cjs',
      cwd: '/Users/miami2/ ZION_APP_AUG_11_25/zion.app',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'automation/logs/pm2-monitor-combined.log',
      out_file: 'automation/logs/pm2-monitor-out.log',
      error_file: 'automation/logs/pm2-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    }
  ]
};
