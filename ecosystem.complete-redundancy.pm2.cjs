module.exports = {
  apps: [
    {
      name: "complete-redundancy-automation",
      script: "automation/complete-redundancy-automation-system.cjs",
      args: "start",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 5000,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        REDUNDANCY_ENABLED: "true",
        REDUNDANCY_LAYERS: "3",
        HEALTH_CHECK_INTERVAL: "30000",
        REDUNDANCY_CHECK_INTERVAL: "60000"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/complete-redundancy-error.log",
      out_file: "automation/logs/complete-redundancy-out.log",
      time: true,
      merge_logs: true,
      log_type: "json"
    },
    {
      name: "complete-redundancy-health-monitor",
      script: "automation/complete-redundancy-automation-system.cjs",
      args: "health",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "*/5 * * * *", // every 5 minutes
      env: {
        NODE_ENV: "production",
        HEALTH_CHECK_ONLY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/complete-redundancy-health-error.log",
      out_file: "automation/logs/complete-redundancy-health-out.log",
      time: true
    },
    {
      name: "complete-redundancy-redundancy-checker",
      script: "automation/complete-redundancy-automation-system.cjs",
      args: "redundancy",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      instances: 1,
      exec_mode: "fork",
      cron_restart: "*/10 * * * *", // every 10 minutes
      env: {
        NODE_ENV: "production",
        REDUNDANCY_CHECK_ONLY: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/complete-redundancy-checker-error.log",
      out_file: "automation/logs/complete-redundancy-checker-out.log",
      time: true
    },
    {
      name: "pm2-redundancy-backup",
      script: "automation/pm2-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        BACKUP_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/pm2-redundancy-backup-error.log",
      out_file: "automation/logs/pm2-redundancy-backup-out.log",
      time: true
    },
    {
      name: "github-actions-redundancy-backup",
      script: "automation/github-actions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        BACKUP_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/github-actions-redundancy-backup-error.log",
      out_file: "automation/logs/github-actions-redundancy-backup-out.log",
      time: true
    },
    {
      name: "netlify-functions-redundancy-backup",
      script: "automation/netlify-functions-redundancy-manager.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        BACKUP_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/netlify-functions-redundancy-backup-error.log",
      out_file: "automation/logs/netlify-functions-redundancy-backup-out.log",
      time: true
    },
    {
      name: "build-redundancy-backup",
      script: "automation/build-failure-recovery.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        BACKUP_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-redundancy-backup-error.log",
      out_file: "automation/logs/build-redundancy-backup-out.log",
      time: true
    },
    {
      name: "health-monitoring-backup",
      script: "automation/comprehensive-monitoring-dashboard.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        BACKUP_MODE: "true"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-monitoring-backup-error.log",
      out_file: "automation/logs/health-monitoring-backup-out.log",
      time: true
    }
  ]
};