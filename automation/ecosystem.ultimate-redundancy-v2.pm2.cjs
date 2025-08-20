// PM2 Ecosystem Configuration for Ultimate Redundancy V2
// Comprehensive PM2 process management for ultimate redundancy system

module.exports = {
  apps: [
    {
      name: 'ultimate-redundancy-v2-master',
      script: './automation/ultimate-redundancy-system-v2.cjs',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-master-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-master-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-master-combined.log',
      time: true,
      max_memory_restart: '1G',
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 2 * * *', // Daily restart at 2 AM
      exp_backoff_restart_delay: 100
    },
    {
      name: 'ultimate-redundancy-v2-monitor',
      script: './automation/ultimate-redundancy-status-reporter.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-monitor-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-monitor-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-monitor-combined.log',
      time: true,
      max_memory_restart: '512M',
      restart_delay: 3000,
      max_restarts: 5,
      min_uptime: '5s',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 3 * * *', // Daily restart at 3 AM
      exp_backoff_restart_delay: 100
    },
    {
      name: 'ultimate-redundancy-v2-orchestrator',
      script: './automation/ultimate-redundancy-orchestrator.cjs',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-orchestrator-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-orchestrator-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-orchestrator-combined.log',
      time: true,
      max_memory_restart: '1G',
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 4 * * *', // Daily restart at 4 AM
      exp_backoff_restart_delay: 100
    },
    {
      name: 'ultimate-redundancy-v2-automation',
      script: './automation/ultimate-redundancy-automation-system.cjs',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        REDUNDANCY_LEVEL: 'ultimate',
        VERSION: 'v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-automation-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-automation-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-automation-combined.log',
      time: true,
      max_memory_restart: '1G',
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 5 * * *', // Daily restart at 5 AM
      exp_backoff_restart_delay: 100
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace',
      'pre-deploy-local': 'echo "This is a local deployment"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.ultimate-redundancy-v2.pm2.cjs',
      'pre-setup': 'echo "Setting up deployment environment"'
    }
  }
};