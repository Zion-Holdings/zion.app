module.exports = {
  apps: [
    // Ultimate Redundancy System V2 - Core
    {
      name: 'ultimate-redundancy-v2-core',
      script: './automation/ultimate-redundancy-system-v2.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        REDUNDANCY_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        REDUNDANCY_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-core-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-core-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-core-combined.log',
      time: true,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 2 * * *', // Daily restart at 2 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Automation
    {
      name: 'ultimate-redundancy-v2-automation',
      script: './automation/ultimate-redundancy-automation-system.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-automation-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-automation-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-automation-combined.log',
      time: true,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 3 * * *', // Daily restart at 3 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Orchestrator
    {
      name: 'ultimate-redundancy-v2-orchestrator',
      script: './automation/ultimate-redundancy-orchestrator.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        ORCHESTRATOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-orchestrator-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-orchestrator-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-orchestrator-combined.log',
      time: true,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 4 * * *', // Daily restart at 4 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Master
    {
      name: 'ultimate-redundancy-v2-master',
      script: './automation/ultimate-redundancy-master-v2.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        MASTER_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        MASTER_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-master-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-master-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-master-combined.log',
      time: true,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 5 * * *', // Daily restart at 5 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Status Reporter
    {
      name: 'ultimate-redundancy-v2-status-reporter',
      script: './automation/ultimate-redundancy-status-reporter.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        STATUS_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        STATUS_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-status-reporter-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-status-reporter-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-status-reporter-combined.log',
      time: true,
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 6 * * *', // Daily restart at 6 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Health Monitor
    {
      name: 'ultimate-redundancy-v2-health-monitor',
      script: './automation/redundancy-health-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-health-monitor-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-health-monitor-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-health-monitor-combined.log',
      time: true,
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 7 * * *', // Daily restart at 7 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Ultimate Redundancy System V2 - Build Monitor
    {
      name: 'ultimate-redundancy-v2-build-monitor',
      script: './automation/continuous-build-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        BUILD_MONITOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      env_production: {
        NODE_ENV: 'production',
        BUILD_MONITOR_MODE: 'ultimate-v2',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ultimate-redundancy-v2-build-monitor-error.log',
      out_file: './automation/logs/ultimate-redundancy-v2-build-monitor-out.log',
      log_file: './automation/logs/ultimate-redundancy-v2-build-monitor-combined.log',
      time: true,
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.git'],
      autorestart: true,
      cron_restart: '0 8 * * *', // Daily restart at 8 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.ultimate-redundancy-v2.pm2.cjs',
      'pre-setup': ''
    }
  }
};