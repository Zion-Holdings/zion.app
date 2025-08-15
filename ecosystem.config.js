module.exports = {
  apps: [
    {
      name: 'autonomous-ai-manager',
      script: 'automation/autonomous-system-manager.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: 'logs/autonomous-ai-manager.log',
      out_file: 'logs/autonomous-ai-manager-out.log',
      error_file: 'logs/autonomous-ai-manager-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },
    {
      name: 'ml-intelligence',
      script: 'automation/ml-link-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/ml-intelligence.log',
      out_file: 'logs/ml-intelligence-out.log',
      error_file: 'logs/ml-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      kill_timeout: 5000
    },
    {
      name: 'real-time-monitor',
      script: 'automation/real-time-performance-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/real-time-monitor.log',
      out_file: 'logs/real-time-monitor-out.log',
      error_file: 'logs/real-time-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000,
      kill_timeout: 5000
    },
    {
      name: 'link-scheduler',
      script: 'automation/link-health-scheduler.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/link-scheduler.log',
      out_file: 'logs/link-scheduler-out.log',
      error_file: 'logs/link-scheduler-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      kill_timeout: 5000
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.git',
      path: '/var/www/zion',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};